import { useState, createContext } from "react";
import {projectsData} from '../data/projects.js';


export const ProjectsContext = createContext();

export const ProjectsProvider = (props) => {
    const[projects, setProjects] = useState(projectsData);
    const [searchProject, setSearchProject] = useState('');
    const [selectProject, setSelectProject] = useState('');

    //search projects filter by title

    const searchProjectsByTitle = projects.filter((item) => {
        const result = item.title
            .toLowerCase()
            .includes(searchProject.toLowerCase())
            ?item
            :searchProject === ''
            ? item
            : '';
        return result;
    });

    // selects projects by category

    const selectProjectsByCaegory = projects.filter((item) => {
        let category = item.category.charAt(0).toUpperCase ()+ item.category.slice(1);
        return category.includes(selectProject);
    })


    return (
        <ProjectsContext.Provider
            value={{
                projects,
                searchProject,
                searchProject,
                setSearchProject,
                selectProject,
                setSelectProject,
            }}
        >
            {props.children}
        </ProjectsContext.Provider>
    );
};