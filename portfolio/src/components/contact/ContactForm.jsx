import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../reusable/Button.jsx';
import FormInput from '../reusable/FormInput.jsx';

const ContactForm = () => {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state

    // Log environment variables to verify their values
    // console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
    // console.log('Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    // console.log('Public Key:', import.meta.env.VITE_EMAILJS_USER_ID);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID1,
        form.current,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setMessageStatus('SUCCESS');
          setIsLoading(false); // Reset loading state
          form.current.reset(); // Clear the form fields
        },
        (error) => {
          console.log('FAILED...', error);
          setMessageStatus('FAILED');
          setIsLoading(false); // Reset loading state
        }
      );
  };

  const closeAlert = () => {
    setMessageStatus('');
  };

  return (
    <div className="w-full lg:w-1/2">
      <div className="leading-loose">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
        >
          <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
            Contact Form
          </p>
          <FormInput
            inputLabel="Full Name"
            labelFor="from_name"
            inputType="text"
            inputId="from_name"
            inputName="from_name"
            placeholderText="Your Name"
            ariaLabelName="Name"
          />
          <FormInput
            inputLabel="Email"
            labelFor="from_email"
            inputType="email"
            inputId="from_email"
            inputName="from_email"
            placeholderText="Your email"
            ariaLabelName="Email"
          />
          <FormInput
            inputLabel="Subject"
            labelFor="from_subject"
            inputType="text"
            inputId="from_subject"
            inputName="from_subject"
            placeholderText="Subject"
            ariaLabelName="Subject"
          />
          <div className="mt-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              id="message"
              name="message"
              cols="14"
              rows="6"
              aria-label="Message"
            ></textarea>
          </div>
          <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
            <Button title="Send Message" type="submit" aria-label="Send Message" />
          </div>
        </form>
        {isLoading && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-xl shadow-xl text-center relative">
              <h2 className="text-indigo-500 text-2xl mb-4">Sending...</h2>
            </div>
          </div>
        )}
        {(messageStatus === 'SUCCESS' || messageStatus === 'FAILED') && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-xl shadow-xl text-center animate-fill-animation relative">
              <button
                onClick={closeAlert}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                aria-label="Close"
              >
                &#x2715;
              </button>
              <h2 className={`text-2xl mb-4 ${messageStatus === 'SUCCESS' ? 'text-green-500' : 'text-red-500'}`}>
                {messageStatus === 'SUCCESS' ? 'Successfully Sent!' : 'Failed to Send. Please try again later.'}
              </h2>
              {messageStatus === 'SUCCESS' && (
                <div className="relative w-full h-1 bg-gray-200">
                  <div className="absolute h-full bg-green-500 animate-fill"></div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <style>
        {`
          @keyframes fill-animation {
            0% {
              width: 0%;
            }
            100% {
              width: 100%;
            }
          }

          .animate-fill {
            animation: fill-animation 5s linear forwards;
          }
        `}
      </style>
    </div>
  );
};

export default ContactForm;
