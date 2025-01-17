import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function ProjectCard({ id, title, category, image }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.7,
        delay: 0.15,
      }}
      className="rounded-xl shadow-lg hover:shadow-2xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark transform hover:scale-105 motion-reduce:transform-none transition duration-300"
    >
      <Link to={`/projects/single-project/${id}`} aria-label="Single Project">
        <div className="relative w-full h-64">
          <img
            src={image}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-t-xl border-none"
            alt="Single Project"
          />
        </div>
        <div className="text-center px-4 py-6">
          <motion.div
            className="p-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light">
              {title}
            </p>
          </motion.div>
          <motion.div
            className="p-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-md md:text-lg text-primary-dark dark:text-primary-light">
              {category}
            </span>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}

export default ProjectCard;
