import Projectgrid from '../components/projects/ProjectsGrid.jsx';
import { ProjectsProvider } from '../context/ProjectsContext.jsx';


function Projects() {
  return (
    <ProjectsProvider>
      <div className='container mx-auto'>
        <Projectgrid/>
      </div>
    </ProjectsProvider>
  )
}

export default Projects;