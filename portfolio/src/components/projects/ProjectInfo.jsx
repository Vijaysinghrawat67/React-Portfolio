import { useContext } from 'react';
import { motion } from 'framer-motion';
import SingleProjectContext from '../../context/SingleProjectContext.jsx';

function ProjectInfo() {
  const { singleProjectData } = useContext(SingleProjectContext);

  return (
    <div className="block sm:flex gap-0 sm:gap-10 mt-14">
      <div className="w-full sm:w-1/3 text-left">
        {/* Project Overview */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-4"
        >
          {singleProjectData.ProjectInfo.OverviewHeading}
        </motion.p>
        <div className="mb-10 p-6 border border-gray-200 dark:border-secondary-dark rounded-lg shadow-md bg-white dark:bg-primary-dark">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-general-regular text-primary-dark dark:text-ternary-light"
          >
            {singleProjectData.ProjectInfo.OverviewDetails}
          </motion.p>
        </div>

        {/* Project Technologies */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-4"
        >
          {singleProjectData.ProjectInfo.Technologies[0].title}
        </motion.p>
        <div className="mb-10 p-6 border border-gray-200 dark:border-secondary-dark rounded-lg shadow-md bg-white dark:bg-primary-dark">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-general-regular text-primary-dark dark:text-ternary-light"
          >
            {singleProjectData.ProjectInfo.Technologies[0].techs.join(', ')}
          </motion.p>
        </div>

        {/* Project Features */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-4"
        >
          {singleProjectData.ProjectInfo.FeaturesHeading}
        </motion.p>
        <div className="mb-10 p-6 border border-gray-200 dark:border-secondary-dark rounded-lg shadow-md bg-white dark:bg-primary-dark">
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-general-regular text-primary-dark dark:text-ternary-light list-disc ml-5"
          >
            {singleProjectData.ProjectInfo.Features.map((feature) => (
              <li key={feature.id} className="mb-2">{feature.details}</li>
            ))}
          </motion.ul>
        </div>

        {/* Learning Outcomes */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-4"
        >
          {singleProjectData.ProjectInfo.LearningHeading}
        </motion.p>
        <div className="mb-10 p-6 border border-gray-200 dark:border-secondary-dark rounded-lg shadow-md bg-white dark:bg-primary-dark">
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-general-regular text-primary-dark dark:text-ternary-light list-disc ml-5"
          >
            {singleProjectData.ProjectInfo.Learning.map((learn) => (
              <li key={learn.id} className="mb-2">{learn.details}</li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* Single project right section */}
      <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
        {/* Project Details */}
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"
        >
          {singleProjectData.ProjectInfo.DetailsHeading}
        </motion.p>
        <div className="p-6 border border-gray-200 dark:border-secondary-dark rounded-lg shadow-md bg-white dark:bg-primary-dark mb-10">
          {singleProjectData.ProjectInfo.ProjectDetails.map((details) => (
            <motion.div
              key={details.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: details.id * 0.2 }}
              className="font-general-regular mb-5"
            >
              <p className="font-semibold text-lg text-ternary-dark dark:text-ternary-light">{details.title}</p>
              <p className="text-primary-dark dark:text-ternary-light">{details.details}</p>
            </motion.div>
          ))}
        </div>

        {/* Future Improvements */}
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-4"
        >
          {singleProjectData.ProjectInfo.ImprovementsHeading}
        </motion.p>
        <div className="p-6 border border-gray-200 dark:border-secondary-dark rounded-lg shadow-md bg-white dark:bg-primary-dark">
          <motion.ul
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-general-regular text-primary-dark dark:text-ternary-light list-disc ml-5"
          >
            {singleProjectData.ProjectInfo.Improvements.map((improvement) => (
              <li key={improvement.id} className="mb-2">{improvement.details}</li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectInfo;
