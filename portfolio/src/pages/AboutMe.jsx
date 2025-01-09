import AboutMeBio from '../components/about/AboutMeBio.jsx';
//import AboutCounter from '../components/about/AboutCounter.jsx';
//import AboutClients from '../components/about/AboutClients.jsx'; // Make sure this component is correctly imported
import { AboutMeProvider } from '../context/AboutMeContext.jsx';
import { motion } from 'framer-motion';

function AboutMe() {
    console.log("about me component is rendering");

    return (
        <AboutMeProvider>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="container mx-auto"
            >
                <AboutMeBio />
            </motion.div>
            {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <AboutCounter />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="container mx-auto"
            >
                <AboutClients />
            </motion.div> */}
        </AboutMeProvider>
    );
}



export default AboutMe;


