import { useContext } from 'react';
import {AboutMeContext} from '../../context/AboutMeContext';
import profileImage from '../../images/profileImage.jpg';
import {motion} from 'framer-motion';

const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);
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
            className="rounded-lg w-96" alt="Profile" 
        /> 
        </div> 
            <div className="font-general-regular w-full sm:w-3/4 text-left"> 
                <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"> 
                    {aboutMe.bio} 
                </p> 
            </div> 
    </motion.div>
    )
};

export default AboutMeBio;
