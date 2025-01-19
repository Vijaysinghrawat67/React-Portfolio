import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import Button from './reusable/Button.jsx';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const selectOptions = [
  'Web Application',
  'Mobile Application',
  'UI/UX Design',
  'Branding',
];

const HireMeModal = ({ onClose }) => {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state
    emailjs
	.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID2,
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="font-general-medium fixed inset-0 z-30 transition-all duration-500"
    >
      {/* Modal Backdrop */}
      <div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>

      {/* Modal Content */}
      <main className="flex flex-col items-center justify-center h-full w-full">
        <div className="modal-wrapper flex items-center z-30">
          <div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
            <div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
              <h5 className="text-primary-dark dark:text-primary-light text-xl">
                What project are you looking for?
              </h5>
              <button
                onClick={onClose}
                className="px-4 font-bold text-primary-dark dark:text-primary-light"
              >
                <FiX className="text-3xl" />
              </button>
            </div>
            <div className="modal-body p-5 w-full h-full">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="max-w-xl m-4 text-left"
              >
                <div className="">
                  <input
                    className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                    id="from_name"
                    name="from_name"
                    type="text"
                    required
                    placeholder="Name"
                    aria-label="Name"
                  />
                </div>
                <div className="mt-6">
                  <input
                    className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                    id="from_email"
                    name="from_email"
                    type="text"
                    required
                    placeholder="Email"
                    aria-label="Email"
                  />
                </div>
                <div className="mt-6">
                  <select
                    className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                    id="from_subject"
                    name="from_subject"
                    type="text"
                    required
                    aria-label="Project Category"
                  >
                    {selectOptions.map((option) => (
                      <option
                        className="text-normal sm:text-md"
                        key={option}
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-6">
                  <textarea
                    className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                    id="message"
                    name="message"
                    cols="14"
                    rows="6"
                    aria-label="Details"
                    placeholder="Project description"
                  ></textarea>
                </div>

                <div className="mt-6 pb-4 sm:pb-1">
                  <button
                    type="submit"
                    className="px-4
                      sm:px-6
                      py-2
                      sm:py-2.5
                      text-white
                      bg-indigo-500
                      hover:bg-indigo-600
                      rounded-md
                      focus:ring-1 focus:ring-indigo-900 duration-500"
                    aria-label="Submit Request"
                  >
                    <Button title="Send Request" />
                  </button>
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
            <div className="modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right">
              <button
                onClick={onClose}
                type="button"
                className="px-4
                  sm:px-6
                  py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light
                  rounded-md
                  focus:ring-1 focus:ring-indigo-900 duration-500"
                aria-label="Close Modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default HireMeModal;
