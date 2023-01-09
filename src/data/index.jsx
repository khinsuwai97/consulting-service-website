import { AiOutlineProject } from 'react-icons/ai';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { BsPersonCheck } from 'react-icons/bs';
import { AiOutlineTrophy } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import people01 from '../assets/people01.png';
import people02 from '../assets/people02.png';
import people03 from '../assets/people03.png';

export const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'services',
    title: 'Services',
  },

  {
    id: 'operations',
    title: 'Operations',
  },
  {
    id: 'testimonials',
    title: 'Testimonials',
  },
];

export const stats = [
  {
    id: 'stats-1',
    title: 'Companies helped',
    value: '200+',
  },
  {
    id: 'stats-2',
    title: 'Sucessful projects',
    value: '700+',
  },
  {
    id: 'stats-3',
    title: 'Revenu generated',
    value: '$150M+',
  },
];

export const services = [
  {
    id: 'Project Management',
    title: 'Project Management',
    text: 'Track your entire project from start to finish with our great management. Customize your projects that fit your business needs.',
    icon: <AiOutlineProject />,
  },
  {
    id: 'Compliance',
    title: 'Compliance',
    text: 'Our Compliance team can help your business to easily spot risk issues and easily blow on any potential issues before they become a major problem.',
    icon: <AiOutlineCheckCircle />,
  },

  {
    id: 'Human Resources',
    title: 'Human Resources',
    text: 'Our HR team can assist you in searching right talents, handling payroll, managing contract staffing and HR training.',
    icon: <BsPersonCheck />,
  },

  {
    id: 'Quality Assurance',
    title: 'Quality Assurance',
    text: 'Our QA team can help you design a consistent QA strategy and transfer your organization into a leaner and more efficient quality power house.',
    icon: <AiOutlineTrophy />,
  },
];

export const operations = [
  {
    id: 'operation-1',
    number: '01',
    title: 'Analysis & Research',
    content:
      'We investigate the project in an in-depth, systematic manner and analyze the cirical part carefully.',
  },
  ,
  {
    id: 'operation-2',
    number: '02',
    title: 'Execution',
    content:
      'We get all of the key players on the same page, map out detailed timelines, and collaborate with everybody on a project plan for exeuction. ',
  },
  {
    id: 'operation-3',
    number: '03',
    title: 'Launch',
    content:
      ' We clarify roles, provide an action plan, and handle potential risks carefully before we officially launch our projects.After that,we are ready to launch.',
  },
];

export const feedbacks = [
  {
    id: 'feedback-1',
    content:
      'First of all thank you for helping us find the right candidate. The candidates provided by CoporationX were amongst the best we received. ',
    name: 'Jasmine Hanson',
    title: 'HR Manager',
    img: people01,
  },
  {
    id: 'feedback-2',
    content:
      "CoporationX has the absolute best development team, listens to their client's needs.Help with great dedication.",
    name: 'Peter Smith',
    title: 'Founder & Leader',
    img: people02,
  },
  {
    id: 'feedback-3',
    content:
      'My company was looking to expand our QA program and CoporationX helped us finish a lot of projects. Definitely recommended to everyone!',
    name: 'Andrew Sivan',
    title: 'QA Manager',
    img: people03,
  },
];

export const footerLinks = [
  {
    title: 'About us',
    links: [
      {
        name: 'How it Works',
      },
      {
        name: 'Careers',
      },
      {
        name: 'Investors',
      },
      {
        name: 'Terms & Services',
      },
    ],
  },
  {
    title: 'Community',
    links: [
      {
        name: 'Help Center',
      },
      {
        name: 'Suggestions',
      },
      {
        name: 'Blog',
      },
      {
        name: 'Newsletters',
      },
    ],
  },
  {
    title: 'Partner',
    links: [
      {
        name: 'Our Partner',
        link: 'https://www.hoobank.com/our-partner/',
      },
      {
        name: 'Become a Partner',
        link: 'https://www.hoobank.com/become-a-partner/',
      },
    ],
  },
];

export const socialMedia = [
  {
    id: 'social-media-1',
    icon: <BsInstagram />,
    link: 'https://www.instagram.com/',
  },
  {
    id: 'social-media-2',
    icon: <BsFacebook />,
    link: 'https://www.facebook.com/',
  },
  {
    id: 'social-media-3',
    icon: <BsTwitter />,
    link: 'https://www.twitter.com/',
  },
  {
    id: 'social-media-4',
    icon: <BsLinkedin />,
    link: 'https://www.linkedin.com/',
  },
];
