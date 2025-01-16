import { useContext } from "react";
import { AboutMeContext } from "../../context/AboutMeContext";
import profileImage from "../../images/profileImage.jpg";
import { motion } from "framer-motion";

const AboutMeBio = () => {
    const { aboutMe } = useContext(AboutMeContext);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="block sm:flex sm:gap-10 mt-10 sm:mt-20"
        >
            {/* Profile Image Section */}
            <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
                <img
                    src={profileImage}
                    className="rounded-lg w-96 shadow-lg"
                    alt="Profile"
                />
            </div>

            {/* About Me Content */}
            <div className="font-general-regular w-full sm:w-3/4 text-left">
                {aboutMe.map((section) => (
                    <motion.div
                        key={section.id}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: section.id * 0.2 }}
                        className="mb-8"
                    >
                        <h3 className="text-xl font-semibold text-primary-dark dark:text-primary-light mb-3">
                            {section.section}
                        </h3>
                        <p className="text-ternary-dark dark:text-ternary-light text-lg whitespace-pre-wrap">
                            {section.bio}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default AboutMeBio;
