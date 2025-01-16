// import ProjectGallery from '../components/projects/ProjectGallery.jsx';
// import ProjectHeader from '../components/projects/ProjectHeader.jsx';
// import ProjectInfo from '../components/projects/ProjectInfo.jsx';
// import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.jsx';
// import {SingleProjectProvider} from '../context/SingleProjectContext.jsx';
// import { motion } from 'framer-motion';

// function ProjectSingle() {
//     return (
//         <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1, delay: 1 }}
//             transition={{ ease: 'easeInOut', duration: 0.6, delay: 0.15 }}
//             className="container mx-auto mt-5 sm:mt-10"
//         >
//             <SingleProjectProvider>
//                 <ProjectHeader />
//                 <ProjectGallery />
//                 <ProjectInfo />
//                 <ProjectRelatedProjects />
//             </SingleProjectProvider>
//         </motion.div>
//     );
// ;}

// export default ProjectSingle;



import { useParams } from 'react-router-dom';
import { getProjectById } from '../data/singleProjectData';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectInfo from '../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects';
import { SingleProjectProvider } from '../context/SingleProjectContext';
import { motion } from 'framer-motion';

function ProjectSingle() {
    const params = useParams();
    //console.log('Params:', params); //Log entire params object 
    const { id } = params; 
    //console.log('Project ID:', id); // Log the ID 
    const project = getProjectById(id); 
    //console.log('Project Data:', project); // Log the data

    if (!project) { 
        return <div>Project not found</div>;
    }
    
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, delay: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.6, delay: 0.15 }}
            className="container mx-auto mt-5 sm:mt-10"
        >
            <SingleProjectProvider project={project}>
                <ProjectHeader />
                <ProjectGallery />
                <ProjectInfo />
                <ProjectRelatedProjects />
            </SingleProjectProvider>
        </motion.div>
    );
};

export default ProjectSingle;
