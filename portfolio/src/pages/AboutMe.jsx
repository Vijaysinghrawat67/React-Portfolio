import React from 'react';
import { motion } from 'framer-motion';
import AboutMeBio from '../components/about/AboutMeBio';
import SkillsCard from '../components/about/SkillsCard';
import EducationCard from '../components/about/EducationCard';
import { AboutMeProvider } from '../context/AboutMeContext';

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function AboutMe() {
  return (
    <AboutMeProvider>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-6 sm:px-12 lg:px-20"
      >
        <motion.h2 className="text-2xl font-semibold my-6 text-center text-primary-dark dark:text-primary-light" variants={itemVariants}>Introduction</motion.h2>
        <motion.div variants={itemVariants} className="mb-20"> {/* Increased margin-bottom */}
          <AboutMeBio />
        </motion.div>
        <hr className="my-8 border-t border-gray-300 dark:border-gray-600" />
        <motion.h2 className="text-2xl font-semibold my-6 text-center text-primary-dark dark:text-primary-light" variants={itemVariants}>Skills</motion.h2>
        <motion.div variants={itemVariants} className="mb-32"> {/* Significantly increased margin-bottom */}
          <SkillsCard />
        </motion.div>
        <hr className="my-8 border-t border-gray-300 dark:border-gray-600" />
        <motion.h2 className="text-2xl font-semibold my-6 text-center text-primary-dark dark:text-primary-light" variants={itemVariants}>Education</motion.h2>
        <motion.div variants={itemVariants} className="mb-20"> {/* Increased margin-bottom */}
          <EducationCard />
        </motion.div>
      </motion.div>
    </AboutMeProvider>
  );
}

export default AboutMe;
