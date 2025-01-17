import React from 'react';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { AboutMeContext } from '../../context/AboutMeContext';

const EducationCard = () => {
  const { aboutMe } = useContext(AboutMeContext);
  const education = aboutMe.education;

  return (
    <div className="flex flex-col gap-6">
      {education.map((edu) => (
        <motion.div
          key={edu.id}
          className="w-full bg-white dark:bg-primary-light rounded-lg shadow-lg p-6 hover:bg-gray-300 dark:hover:bg-gray-300 d transition-transform duration-500 mb-6"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex justify-between">
            <div>
              <h3 className="text-xl font-semibold text-ternary-dark dark:text-ternary-dark mb-2">{edu.institution}</h3>
              <p className="text-lg text-ternary-dark dark:text-ternary-dark">{edu.degree}</p>
            </div>
            <div>
              <p className="text-lg text-ternary-dark dark:text-ternary-dark italic">{edu.time}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default EducationCard;
