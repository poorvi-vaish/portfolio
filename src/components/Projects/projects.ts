import { DiJavascript1 } from 'react-icons/di';
import {
  SiAmazonaws,
  SiAmazondynamodb,
  SiAwslambda,
  SiChakraui,
  SiDocker,
  SiExpress,
  SiMaterialdesign,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

const ProjectsData = [
  {
    id: 1,
    title: 'InvoiceXpert',
    description: 'An invoice generating secure web application for small businesses.',
    tech: [
      {
        name: 'TypeScript',
        icon: SiTypescript,
        color: '#007ACC',
      },
      {
        name: 'React',
        icon: SiReact,
        color: '#61DAFB',
      },
      {
        name: 'TailwindCSS',
        icon: SiTailwindcss,
        color: '#06B6D4',
      },
      {
        name: 'Node.js',
        icon: SiNodedotjs,
        color: '#339933',
      },
      {
        name: 'Express',
        icon: SiExpress,
        color: '#000000',
      },
      {
        name: 'PostgreSQL',
        icon: SiPostgresql,
        color: '#336791',
      },
      {
        name: 'Docker',
        icon: SiDocker,
        color: '#2496ED',
      },
      {
        name: 'AWS',
        icon: SiAmazonaws,
        color: '#FF9900',
      },
    ],
    image: 'https://i.imgur.com/RMAMJ7T.jpg',
    github: 'https://github.com/poorvi-vaish/Invoice-Generator',
    demo: '',
    tag: '',
  },
  {
    id: 2,
    title: 'Remote Code Executor',
    description: 'An IDE to execute code snippets remotely and securely in C++, Python and JavaScript.',
    tech: [
      {
        name: 'JavaScript',
        icon: DiJavascript1,
        color: '#F0DB4F',
      },
      {
        name: 'React',
        icon: SiReact,
        color: '#61DAFB',
      },
      {
        name: 'Material UI',
        icon: SiMaterialdesign,
        color: '#0081CB',
      },
      {
        name: 'Node.js',
        icon: SiNodedotjs,
        color: '#339933',
      },
      {
        name: 'Express',
        icon: SiExpress,
        color: '#000000',
      },
      {
        name: 'Docker',
        icon: SiDocker,
        color: '#2496ED',
      },
      {
        name: 'AWS',
        icon: SiAmazonaws,
        color: '#FF9900',
      },
    ],
    image: 'https://i.imgur.com/z4vV672.png',
    github: 'https://github.com/poorvi-vaish/rce-frontend',
    demo: '',
    tag: '',
  },
  {
    id: 3,
    title: 'Portfolio',
    description: 'My portfolio website built using Gatsby and Chakra UI.',
    tech: [
      {
        name: 'TypeScript',
        icon: SiTypescript,
        color: '#007ACC',
      },
      {
        name: 'React',
        icon: SiReact,
        color: '#61DAFB',
      },
      {
        name: 'Chakra UI',
        icon: SiChakraui,
        color: '#319795',
      }
    ],
    image: 'https://i.imgur.com/2Q3Q4ZP.png',
    github: '',
    demo: '<Link>',
    tag: '',
  },
  {
    id: 4,
    title: 'Eth-Profile',
    description: 'The webpage where fusion of code and creativity converge of a users ethereum profile.',
    tech: [
      {
        name: 'TypeScript',
        icon: SiTypescript,
        color: '#007ACC',
      },
      {
        name: 'React',
        icon: SiReact,
        color: '#61DAFB',
    },
  ],
    image: 'https://i.imgur.com/gNrE31I.png',
    github: '',
    demo: 'https://poorvi-vaish.github.io/Eth-Profile/',
    tag: '',
  },
  {
    id: 5,
    title: 'DSA',
    description:
      "I'm currently focusing on learning Data Structures and Algorithms to improve and hone my problem solving skills",
    image:
      'https://leetcard.jacoblin.cool/poorvi-vaish?theme=dark&font=Maven%20Pro&ext=heatmap',
    demo: 'https://leetcode.com/poorvi-vaish/',
  },
];

export default ProjectsData;
