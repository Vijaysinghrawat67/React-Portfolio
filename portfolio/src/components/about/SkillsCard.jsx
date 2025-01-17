import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaCogs, FaNetworkWired, FaProjectDiagram, FaGithub, FaJava } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiExpress, SiPostman , SiAwsamplify, SiJest} from 'react-icons/si';
import { useContext, useState } from 'react';
import { AboutMeContext } from '../../context/AboutMeContext';

const skillIcons = {
  FaHtml5: <FaHtml5 className="text-orange-600" />,
  FaCss3Alt: <FaCss3Alt className="text-blue-600" />,
  FaJs: <FaJs className="text-yellow-500" />,
  FaReact: <FaReact className="text-cyan-600" />,
  FaNodeJs: <FaNodeJs className="text-green-600" />,
  SiMongodb: <SiMongodb className="text-green-600" />,
  SiMysql: <SiMysql className="text-blue-600" />,
  SiExpress: <SiExpress className="text-black" />,
  SiPostman: <SiPostman className="text-orange-600" />,
  FaJava: <FaJava className="text-red-600" />,
  FaCogs: <FaCogs className="text-gray-600" />,
  FaNetworkWired: <FaNetworkWired className="text-blue-600" />,
  FaProjectDiagram: <FaProjectDiagram className="text-blue-600" />,
  FaGithub: <FaGithub className="text-black" />,
  SiAwsamplify: <SiAwsamplify className="text-orange-600" />,
  SiJest: <SiJest className="text-pink-600" />
};

const SkillsCard = () => {
  const { aboutMe } = useContext(AboutMeContext);
  const skills = aboutMe.skills;
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {skills.map((skill) => (
        <motion.div
          key={skill.id}
          className={`relative w-40 h-40 bg-white dark:bg-primary-light rounded-lg shadow-lg transition-transform duration-500 ${
            hovered === skill.id ? 'hover:scale-110' : ''
          }`}
          onMouseEnter={() => setHovered(skill.id)}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            <div className="text-4xl mb-2">{skillIcons[skill.icon]}</div>
            <h3 className="text-xl font-semibold text-ternary-dark dark:text-ternary-dark">{skill.name}</h3>
          </div>
          {hovered === skill.id && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-white dark:bg-primary-light text-center p-4 rounded-lg"
              initial={{ opacity: 0, rotateY: -180 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-ternary-dark dark:text-ternary-dark">{skill.description}</p>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsCard;
