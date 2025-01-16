import Image1 from '../images/projectImages/Image1.png';
import Image1_1 from '../images/projectImages/Image1.1.png';
import Image1_2 from '../images/projectImages/Image1.2.png';
import Image4 from '../images/profileImage.jpg';
import Image5 from '../images/profileImage.jpg';
import {
  FiFacebook,
 // FiInstagram,
 // FiLinkedin,
  FiTwitter,
  //FiYoutube,
} from 'react-icons/fi';

const projectData = [
  //Project1
  {
    id: 1,
    ProjectHeader: {
      title: 'Collaborative Study Portal',
      publishDate: 'Dec, 2024',
      tags: 'UI / Frontend',
    },
    ProjectImages: [
      { id: 1, title: 'Collaborative Study Portal', img: Image1 },
      { id: 2, title: 'Collaborative Study Portal', img: Image1_1 },
      { id: 3, title: 'Collaborative Study Portal', img: Image1_2},
    ],
    ProjectInfo: {
      ClientHeading: 'About Client',
      CompanyInfo: [
        { id: 1, title: 'Name', details: 'Company Ltd' },
        { id: 2, title: 'Services', details: 'UI Design & Frontend Development' },
        { id: 3, title: 'Website', details: 'https://company.com' },
        { id: 4, title: 'Phone', details: '555 8888 888' },
      ],
      ObjectivesHeading: 'Objective',
      ObjectivesDetails: 'Lorem ipsum dolor sit amet...',
      Technologies: [
        { title: 'Tools & Technologies', techs: ['React', 'Node.js', 'MongoDB'] },
      ],
      ProjectDetailsHeading: 'Challenge',
      ProjectDetails: [
        { id: 1, details: 'Lorem ipsum dolor sit amet...' },
      ],
      SocialSharingHeading: 'Share This',
      SocialSharing: [
        { 
          id: 1,
          name: 'Twitter',
          icon: '<FiTwitter/>', 
          url: 'https://twitter.com' 
        },
        { id: 2, name: 'Facebook', icon: '<FiFacebook/>', url: 'https://facebook.com' },
      ],
    },
    RelatedProject: {
      title: 'Related Projects',
      Projects: [
        { id: 1, title: 'Mobile UI', img: Image1 },
        { id: 2, title: 'Web Application', img: Image1 },
      ],
    },
  },

  //Project 2
  {
    id: 2,
    ProjectHeader: {
      title: 'Video Streaming Platform Backend Prototype',
      publishDate: 'Sep, 2024',
      tags: 'Backend',
    },
    ProjectImages: [
      { id: 1, title: 'Video Streaming Platform', img: Image1 },
      { id: 2, title: 'Video Streaming Platform', img: Image1 },
      { id: 3, title: 'Video Streaming Platform', img: Image1},
    ],
    ProjectInfo: {
      ClientHeading: 'About Client',
      CompanyInfo: [
        { id: 1, title: 'Name', details: 'Company Ltd' },
        { id: 2, title: 'Services', details: 'Backend Development' },
        { id: 3, title: 'Website', details: 'https://company.com' },
        { id: 4, title: 'Phone', details: '555 8888 888' },
      ],
      ObjectivesHeading: 'Objective',
      ObjectivesDetails: 'Lorem ipsum dolor sit amet...',
      Technologies: [
        { title: 'Tools & Technologies', techs: ['Node.js', 'Express', 'MongoDB'] },
      ],
      ProjectDetailsHeading: 'Challenge',
      ProjectDetails: [
        { id: 1, details: 'Lorem ipsum dolor sit amet...' },
      ],
      SocialSharingHeading: 'Share This',
      SocialSharing: [
        { id: 1, name: 'Twitter', icon: '<FiTwitter/>', url: 'https://twitter.com' },
        { id: 2, name: 'Facebook', icon:'<FiFacebook/>', url: 'https://facebook.com' },
      ],
    },
    RelatedProject: {
      title: 'Related Projects',
      Projects: [
        { id: 1, title: 'Mobile UI', img: Image1 },
        { id: 2, title: 'Web Application', img: Image1 },
      ],
    },
  },
  // Add more projects similarly
];

export const getProjectById = (id) => {
  return projectData.find(project => project.id === parseInt(id));
};
