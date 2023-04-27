import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  crwnclothing,
  expensestracker,
  jobit,
  tripguide,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'Web Developer',
    company_name: '',
    // icon: starbucks,
    iconBg: '#383E56',
    date: 'April 2022 - Present',
    points: [
      'Learning the fundamentals of JavaScript and how to use it in a web environment',
      'Learning the fundamentals of HTML and CSS in order to build web applications',
      'Building projects in JavaScript, such as a mock up banking app, to apply JavaScript, HTML, and CSS knowledge',
    ],
  },
  {
    title: 'React Developer',
    company_name: '',
    // icon: tesla,
    iconBg: '#E6DEDD',
    date: 'Oct 2022 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Three.js Developer',
    company_name: '',
    // icon: tesla,
    iconBg: '#E6DEDD',
    date: 'April 2023 - Present',
    points: [
      'Learning the three.js library and various relevant technologies to create 3d websites',
      'Implementing responsive design and ensuring cross-browser compatibility of the 3d models.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Crwn Clothing',
    description: `Web-based e-commerce platform for fashion. Users can browse for men and women's hats, jackets, and sneakers. Integrates with stripe API for payments and Google FireStore for data storage. Google Sign In also featured.`,
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'html',
        color: 'orange-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: crwnclothing,
    source_code_link: 'https://github.com/YojimboSlice/crwn-clothing',
  },
  {
    name: 'Expenses Tracker',
    description:
      'Web application that enables users to track expenses, filter through expenses by year, and receive visual feedback in the form of a bar graph using the months for each bar.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'html',
        color: 'orange-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: expensestracker,
    source_code_link: 'https://github.com/YojimboSlice/expenses-tracker',
  },
];

export { services, technologies, experiences, testimonials, projects };
