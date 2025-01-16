// import { useState, createContext } from 'react';
// import { singleProjectData as singleProjectDataJson } from '../data/singleProjectData.js';

// const SingleProjectContext = createContext();

// export const SingleProjectProvider = ({ children }) => {
// 	const [singleProjectData, setSingleProjectData] = useState(
// 		singleProjectDataJson
// 	);

// 	return (
// 		<SingleProjectContext.Provider
// 			value={{ singleProjectData, setSingleProjectData }}
// 		>
// 			{children}
// 		</SingleProjectContext.Provider>
// 	);
// };

// export default SingleProjectContext;



import { createContext } from 'react';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children, project }) => {
    return (
        <SingleProjectContext.Provider value={{ singleProjectData: project }}>
            {children}
        </SingleProjectContext.Provider>
    );
};

export default SingleProjectContext;
