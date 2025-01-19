import { useContext } from 'react';
import { AboutMeContext } from '../../context/AboutMeContext';
import profileImage from '../../images/profileImage.jpg';
import { motion } from 'framer-motion';

const AboutMeBio = () => {
  const { aboutMe } = useContext(AboutMeContext);
  
  const paragraphs = aboutMe.bio.trim().split('\n').map((para, index) => (
    <p key={index} className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
      {para.trim()}
    </p>
  ));
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="block sm:flex sm:gap-10 mt-10 sm:mt-20"
    >
      <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
        <img
          src={profileImage}
          className="rounded-lg w-96"
          alt="Profile"
        />
      </div>
      <div className="font-general-regular w-full sm:w-3/4 text-left">
        {paragraphs}
        <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
          Let's connect and create something amazing together!
        </p>
        <a
          href="https://www.linkedin.com/in/vijaysingh02" // Replace with your actual LinkedIn profile URL
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-2 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-md hover:from-purple-600 hover:to-pink-600 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-transform transform hover:scale-105"
        >
          ✨ Connect ✨
        </a>
      </div>
    </motion.div>
  );
};

export default AboutMeBio;
