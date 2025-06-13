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
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import { getImageUrl } from "../components/Works";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Python ",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React Native Developer intern",
    company_name: "MetroGhar Property Solutions LTD",
    icon: meta,
    iconBg: "#383E56",
    date: "Aug 2022 - Sept 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "ISOURCE TECHNOLOGIES PVT LTD",
    company_name: "Javascript Developer",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Oct 2022 - Jun 2023",
    points: [
      "Built and maintained dynamic web applications using React.js and related technologies to ensure seamless user experiences.",
      "Collaborated closely with designers, product managers, and fellow developers to deliver high-quality digital products.",
      "Implemented responsive, mobile-first designs and ensured cross-browser compatibility for consistent performance.",
      "Conducted code reviews and shared constructive feedback to uphold clean, maintainable code practices.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Softsensor.ai",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2023 - Present",
    points: [
      "Designed, developed, and maintained scalable full stack web applications for a Delivery Management System using React.js, Node.js, and related technologies.",
      "Collaborated closely with designers, product managers, and cross-functional engineering teams to deliver high-quality, end-to-end product features.",
      "Implemented responsive and user-centric UI designs while ensuring seamless performance and cross-browser compatibility.",
      "Conducted thorough code reviews, shared best practices, and mentored team members to maintain code quality and system reliability.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Manish proved me wrong.",
    name: "Mailarappa Budhihal",
    designation: "Software Developer",
    company: "SoftSensor.ai",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Manish does.",
    name: "Anubhab Guha",
    designation: "Software Developer",
    company: "SoftSensor.ai",
  },
  {
    testimonial:
      "After Manish optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Ayush Aryan",
    designation: "Software Developer",
    company: "TCS",
  },
];

const projects = [
  {
    name: "Weather App",
    description: "Weather app that can say the weather of your location",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: getImageUrl("projects/project.png"),
    source_code_link: "https://github.com/anubhabguha1999/Weather-app",
  },
  {
    name: "REDEFINE",
    description: "Refefine is a game that is made using React + Vite.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "vite", color: "green-text-gradient" },
    ],
    image: getImageUrl("projects/game.jpg"),
    source_code_link: "https://redefine-anubhab-guha.netlify.app/",
  },
  {
    name: "Speech Emotion Recognition",
    description: "Speech Emotion Recognition is a project that can detect the emotion of a person based on their speech",
    tags: [
      { name: "python", color: "green-text-gradient" },
      { name: "ml", color: "pink-text-gradient" },
    ],
    image: getImageUrl("projects/project2.jpg"),
    source_code_link: "https://github.com/anubhabguha1999/Speech-Emotion-Recognition",
  },
];

export { services, technologies, experiences, testimonials, projects };
