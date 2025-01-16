import { useState, createContext } from "react";
import { aboutMeData } from "../data/aboutMeData.js";


export const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
    const [aboutMe, setAboutMe] = useState(aboutMeData);


    return (
        <AboutMeContext.Provider value={{
            aboutMe,
            setAboutMe,
        }}>
            {children}
        </AboutMeContext.Provider>
    );
};

