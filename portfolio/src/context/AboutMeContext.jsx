import { useState, createContext } from "react";
import { aboutMeData } from "../data/aboutMeData.js";

// //client
// //client

export const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
    const [aboutMe, setAboutMe] = useState(aboutMeData);

    // const clientData
    // clientData State
    console.log("AboutMeProvider is rendering with data", aboutMe);

    return (
        <AboutMeContext.Provider value={{
            aboutMe,
            setAboutMe,
            // other state
        }}>
            {children}
        </AboutMeContext.Provider>
    );
};

