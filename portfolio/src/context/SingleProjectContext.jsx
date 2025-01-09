import { useState, createContext, Children } from "react";
import { singleProjectData as singleProjectDataJson} from '../data/singleProjectData.js';

const singleProjectContext = createContext();

export const SingleProjectProvider = ({Children}) => {
    const [singleProjectData, setSingleProjectData] = useState(singleProjectDataJson);

    return(
        <singleProjectContext.Provider
            value={{singleProjectData,
                setSingleProjectData
            }}
        >
            {Children}
        </singleProjectContext.Provider>
    )
};

export default singleProjectContext;