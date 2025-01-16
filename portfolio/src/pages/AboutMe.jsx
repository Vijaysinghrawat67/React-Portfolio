import AboutMeBio from "../components/about/AboutMeBio.jsx";
import { AboutMeProvider } from "../context/AboutMeContext.jsx";
import { motion } from "framer-motion";

function AboutMe() {
    return (
        <AboutMeProvider>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="container mx-auto px-6 sm:px-12 lg:px-20"
            >
               
                <AboutMeBio />
            </motion.div>
        </AboutMeProvider>
    );
}

export default AboutMe;
