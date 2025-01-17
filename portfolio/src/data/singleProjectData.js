import Image1 from '../images/projectImages/Image1.png';
import Image1_1 from '../images/projectImages/Image1.1.png';
import Image1_2 from '../images/projectImages/Image1.2.png';

import Image2 from '../images/projectImages/Image2.1.webp';
import Image2_1 from '../images/projectImages/Image2.webp';

import Image3 from '../images/projectImages/Image3.png';
import Image3_1 from '../images/projectImages/Image3.1.png';
import Image3_2 from '../images/projectImages/Image3.2.png';

import Image4 from '../images/projectImages/Image4.png';
import Image4_1 from '../images/projectImages/Image4.1.png';



const projectData = [

  // Project Data
  {
    id: 1,
    ProjectHeader: {
      title: 'Collaborative Study Portal',
      publishDate: 'Dec, 2024',
      tags: 'UI / Frontend/ Backend',
    },
    ProjectImages: [
      { id: 1, title: 'Collaborative Study Portal', img: Image1 },
      { id: 2, title: 'Collaborative Study Portal', img: Image1_1 },
      { id: 3, title: 'Collaborative Study Portal', img: Image1_2 },
    ],
    ProjectInfo: {
      OverviewHeading: 'Project Overview',
      OverviewDetails: 'Developed an integrated learning platform with multiple modules to enhance study efficiency and resource accessibility. The platform features secure user authentication to ensure protected access.',
      Technologies: [
        { title: 'Tools & Technologies', techs: ['React.js', 'Node.js', 'Express.js', 'MongoDB'] },
      ],
      FeaturesHeading: 'Key Features',
      Features: [
        { id: 1, details: 'Note-making' },
        { id: 2, details: 'YouTube and web search' },
        { id: 3, details: 'To-do list' },
        { id: 4, details: 'Homework management' },
      ],
      DetailsHeading: 'Project Details',
      ProjectDetails: [ 
        { id: 1, details: 'Implemented proper user authentication, CRUD operations, and API integrations.' }, 
        { id: 2, details: 'Technologies used: React.js for frontend, Node.js and Express.js for backend, and MongoDB for database.' }, 
        { id: 3, details: 'Note-Taking: Create, read, update, and delete notes efficiently.' }, 
        { id: 4, details: 'Homework Management: Keep track of homework assignments and due dates.' }, 
        { id: 5, details: 'To-Do List: Organize tasks and manage your time effectively.' }, 
        { id: 6, details: 'YouTube and Web Search: Integrated search functionality for YouTube videos and web resources.' }, 
        { id: 7, details: 'Dictionary: Look up definitions and synonyms for study materials.' }, 
        { id: 8, details: 'Calculator: Perform calculations with unit conversion features.' }, 
        { id: 9, details: 'User Authentication: Secure access to all modules with user login and registration.' },
       ],
      LearningHeading: 'Learning Outcomes',
      Learning: [
        { id: 1, details: 'React.js, Node.js, Express.js, MongoDB' },
        { id: 2, details: 'API integrations, User authentication, CRUD operations' },
      ],
      ImprovementsHeading: 'Future Improvements',
      Improvements: [
          {
            "id": 1,
            "details": "Introducing real-time collaboration on problems, enabling users to work together seamlessly in solving issues and sharing solutions instantly."
          },
          {
            "id": 2,
            "details": "Implementing real-time chat functionality, facilitating immediate communication between users for enhanced interaction and support."
          },
          {
            "id": 3,
            "details": "Integrating AI support to provide smart assistance and personalized recommendations, along with the addition of comprehensive courses to boost learning and skill development."
          }
        ]
      
      
    },
  },


  
  //Project 2
  {
    "id": 2,
    "ProjectHeader": {
      "title": "Video Streaming Platform Prototype - Backend Implementation",
      "publishDate": "Sep, 2024",
      "tags": "Backend / Server-Side"
    },
    "ProjectImages": [
      { "id": 1, "title": "Video Streaming Platform", "img": Image2 },
      { "id": 2, "title": "Video Streaming Platform", "img": Image2_1 },
     
    ],
    "ProjectInfo": {
      "OverviewHeading": "Project Overview",
      "OverviewDetails": "This project is a prototype of a video streaming platform backend, aimed at providing seamless video upload, processing, and playback functionalities. It supports user authentication and interactions such as likes, comments, and tweets on videos, fostering a dynamic and engaging user experience. Secure media storage and optimized performance ensure efficient handling of video content.",
      
      "Technologies": [
        { "title": "Tools & Technologies", "techs": ["Node.js", "Express.js", "MongoDB", "Cloudinary", "Multer", "JWT"] }
      ],
      "FeaturesHeading": "Key Features",
      "Features": [
        { "id": 1, "details": "User Authentication" },
        { "id": 2, "details": "Video Management" },
        { "id": 3, "details": "Interactions" }
      ],
      "DetailsHeading": "Project Details",
      "ProjectDetails": [
        { "id": 1, "details": "User Authentication: Registration, login with JWT tokens, and protected routes for authenticated access." },
        { "id": 2, "details": "Video Management: Upload, process, and playback videos stored in Cloudinary, with metadata stored in MongoDB." },
        { "id": 3, "details": "Interactions: Users can like videos, post short messages (tweets), and comment on videos, fostering engagement." },
        { "id": 4, "details": "Data Relationships: Models are interrelated, ensuring comprehensive data management across users, videos, likes, tweets, and comments." },
        { "id": 5, "details": "Data Storage and Optimization: Structured data stored in MongoDB, media files in Cloudinary, and efficient file handling with Multer." }
      ],
      "LearningHeading": "Learning Outcomes",
      "Learning": [
        { "id": 1, "details": "Node.js, Express.js, MongoDB, Cloudinary" },
        { "id": 2, "details": "User authentication, CRUD operations, File handling with Multer" }
      ],
      ImprovementsHeading: "Future Improvements",
      Improvements: [
          { "id": 1, "details": "Implement Frontend: Develop a comprehensive frontend using modern frameworks like React.js or Vue.js to create a seamless user interface and experience." },
          { "id": 2, "details": "Full-Time Cloud Storage: Ensure continuous and efficient media storage and retrieval by optimizing Cloudinary integration for full-time cloud storage." },
          { "id": 3, "details": "Proper Video Streaming: Enhance video playback features to ensure smooth and buffer-free streaming, with support for adaptive bitrate streaming." },
          { "id": 4, "details": "Live Streaming Functionality: Introduce live streaming capabilities, enabling users to broadcast live events and interact with their audience in real-time." }
        ]
      }
      
    
  },
  

  // project3
  {
    "id": 3,
    "ProjectHeader": {
      "title": "Real-Time Multiplayer Tic-Tac-Toe Game",
      "publishDate": "Aprail, 2024",
      "tags": "UI / Frontend / Backend"
    },
    "ProjectImages": [
      { "id": 1, "title": "Real-Time Multiplayer Tic-Tac-Toe Game", "img": Image3 },
      { "id": 2, "title": "Real-Time Multiplayer Tic-Tac-Toe Game", "img": Image3_1 },
      { "id": 3, "title": "Real-Time Multiplayer Tic-Tac-Toe Game", "img": Image3_2 }
    ],
    "ProjectInfo": {
      "OverviewHeading": "Project Overview",
       "OverviewDetails": "This web-based game allows users to play Tic-Tac-Toe in real-time, offering dynamic interactions, real-time updates, and a user-friendly interface.",
      
      "Technologies": [
        { "title": "Tools & Technologies", "techs": ["React", "Tailwind CSS", "Node.js", "Express", "Socket.io", "WebSockets", "NPM"] }
      ],
      "FeaturesHeading": "Key Features",
      "Features": [
        { "id": 1, "details": "Real-Time Gameplay: Play Tic-Tac-Toe with other users in real-time using WebSockets." },
        { "id": 2, "details": "Smooth and Responsive UI: Enjoy a clean and responsive interface designed with Tailwind CSS." },
        { "id": 3, "details": "Dynamic Matchmaking: Easily join existing games or create a new match with a friend." },
        { "id": 4, "details": "Live Updates: Instant game state updates and notifications through Socket.io." },
        { "id": 5, "details": "Persistent Game State: Retain game progress even if you disconnect and reconnect." }
      ],
      "DetailsHeading": "Project Details",
      "ProjectDetails": [
        { "id": 1, "details": "Implemented real-time gameplay using WebSockets for instant updates and interactions." },
        { "id": 2, "details": "Designed a smooth and responsive user interface with Tailwind CSS." },
        { "id": 3, "details": "Developed secure user authentication for login and registration." },
        { "id": 4, "details": "Enabled dynamic matchmaking to join existing games or create new matches." },
        { "id": 5, "details": "Integrated live updates and notifications through Socket.io." },
        { "id": 6, "details": "Ensured persistent game state to retain progress even after disconnecting and reconnecting." }
      ],
      "LearningHeading": "Learning Outcomes",
      "Learning": [
        { "id": 1, "details": "React, Tailwind CSS, Node.js, Express, Socket.io, WebSockets" },
        { "id": 2, "details": "Real-time communication, User authentication, Dynamic matchmaking" }
      ],
      "ImprovementsHeading": "Future Improvements",
      "Improvements": [
        { "id": 1, "details": "Implement AI-based opponent for single-player mode." },
        { "id": 2, "details": "Add a chat feature for players to communicate during the game." },
        { "id": 3, "details": "Introduce game statistics and leaderboards to track player performance." },
        { "id": 4, "details": "Enhance the UI with additional animations and effects for a better gaming experience." }
      ]
    }
  },
  

  //project4
  {
    "id": 4,
    "ProjectHeader": {
      "title": "Portfolio Website",
      "publishDate": "Jan, 2025",
      "tags": "UI / Frontend"
    },
    "ProjectImages": [
      { "id": 1, "title": "Portfolio Website", "img": Image4 },
      { "id": 2, "title": "Portfolio Website", "img": Image4_1 },
     
    ],
    "ProjectInfo": {
      "OverviewHeading": "Project Overview",
      "OverviewDetails": "A personal portfolio website showcasing my projects, about me section, and contact information. Built using React, it features a clean and responsive design with proper UI management.",
      "Technologies": [
        { "title": "Tools & Technologies", "techs": ["React", "CSS", "JavaScript"] }
      ],
      "FeaturesHeading": "Key Features",
      "Features": [
        { "id": 1, "details": "Projects Section: Display detailed information about various projects with images and descriptions." },
        { "id": 2, "details": "About Me Section: Share information about my background, skills, and experiences." },
        { "id": 3, "details": "Contact Section: Provide a form for visitors to get in touch with me easily." },
        { "id": 4, "details": "Responsive Design: Ensure the website looks great on all devices." }
      ],
      "DetailsHeading": "Project Details",
      "ProjectDetails": [
        { "id": 1, "details": "Developed a responsive layout using React and CSS to provide a clean and user-friendly interface." },
        { "id": 2, "details": "Included a projects section to showcase my work with detailed descriptions and images." },
        { "id": 3, "details": "Added an about me section to highlight my background, skills, and experiences." },
        { "id": 4, "details": "Implemented a contact section with a form for easy communication." }
      ],
      "LearningHeading": "Learning Outcomes",
      "Learning": [
        { "id": 1, "details": "React, CSS, JavaScript" },
        { "id": 2, "details": "Responsive design, UI/UX principles" }
      ],
      "ImprovementsHeading": "Future Improvements",
      "Improvements": [
        { "id": 1, "details": "Add a blog section to share articles and tutorials." },
        { "id": 2, "details": "Integrate a portfolio gallery with filtering options." },
        { "id": 3, "details": "Enhance the contact form with validation and spam protection." }
      ]
    }
  }
  
];

export const getProjectById = (id) => {
  return projectData.find(project => project.id === parseInt(id));
};
