// import './App.css';
// import { AnimatePresence } from 'framer-motion';
// import { lazy, Suspense } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import UseScrollToTop from './hooks/useScrollToTop.jsx';
// import AppHeader from './components/shared/AppHeader.jsx';
// import AppFooter from './components/shared/AppFooter.jsx';
// import ScrollToTop from './components/ScrollToTop.jsx';
// import ErrorBoundary from './errorboundry.jsx';

// //import Test from './components/about/Test.jsx';

// const About = lazy(() => import('./pages/AboutMe.jsx'));
// const Contact = lazy(() => import('./pages/Contact.jsx'));
// const Home = lazy(() => import('./pages/Home.jsx'));
// const Projects = lazy(() => import('./pages/Projects.jsx'));
// const ProjectSingle = lazy(() => import('./pages/ProjectSingle.jsx'));

// function App() {
//   return (
//     <AnimatePresence>
//       <div className='bg-secondary-light dark:bg-primary-dark transition duration-300'>
//         <Router>
//           <ScrollToTop/>
//           <AppHeader/>
//           <Suspense fallback={""}>
//             <ErrorBoundary>
//               <Routes>
//                 <Route path="/" element={<Home/>}/>
//                 <Route path="projects" element={<Projects/>}/>
//                 <Route 
//                   path="projects/single-project/:id" 
//                   element={<ProjectSingle />}
//                /> 
//                 <Route path="about" element={<About/>}/>
//                 <Route path="contact" element={<Contact/>}/>
//               </Routes>
//             </ErrorBoundary>
//           </Suspense>
//           <AppFooter/>
//         </Router>
//         <UseScrollToTop/>
//       </div>
//     </AnimatePresence>
//   );
// }

// export default App;



import './App.css';
import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UseScrollToTop from './hooks/useScrollToTop';
import AppHeader from './components/shared/AppHeader';
import AppFooter from './components/shared/AppFooter';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './errorboundry';



const About = lazy(() => import('./pages/AboutMe.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import('./pages/Home.jsx'));
const Projects = lazy(() => import('./pages/Projects.jsx'));
const ProjectSingle = lazy(() => import('./pages/ProjectSingle.jsx'));

function App() {
  return (
    <AnimatePresence>
      <div className='bg-secondary-light dark:bg-primary-dark transition duration-300'>
        <Router>
          <ScrollToTop />
          <AppHeader />
          <Suspense fallback={""}>
            <ErrorBoundary>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="projects/single-project/:id" element={<ProjectSingle />} /> 
                {/* <Route path="debug-project/:id" element={<DebugProject/>} /> */}
                
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
              </Routes>
            </ErrorBoundary>
          </Suspense>
          <AppFooter />
        </Router>
        <UseScrollToTop />
      </div>
    </AnimatePresence>
  );
}

export default App;
