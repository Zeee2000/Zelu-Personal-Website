import {
  web,
  pythonLogo,
  frontendLogo,
  backend,
  entelectLogo,
  epiuseLogo,
  unescoLogo,
  personalPortfolio,
  kenzoWorkout,
  research,
} from "../assets";

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

export const services = [
  {
    title: "AWS Cloud Engineer",
    icon: web,
  },
  {
    title: "Back-end Developer",
    icon: pythonLogo,
  },
  {
    title: "Front-end Developer",
    icon: frontendLogo,
  },
  {
    title: "Solutions Architect",
    icon: backend,
  },
];

export const experiences = [
  {
    title: "Intermediate Software Engineer",
    company_name: "Entelect",
    icon: entelectLogo,
    iconBg: "#383E56",
    date: "January 2025 - Current",
    points: [
      "Working on rewards systems with the personal group team",
      "Developing technical skills through The First Order program",
      "Achieved AWS Developer Associate, Sysops Administrator and AI Foundational Certifications"
    ],
  },
  {
    title: "Software Engineer 2",
    company_name: "EPI-USE",
    icon: epiuseLogo,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - December 2024",
    points: [
      "Development and maintenance of time management solutions with virtual clocking capabilities",
      "Established optimized CI/CD pipelines with code analysis and testing",
      "Mentored new team members and provided technical guidance on projects",
    ],
  },
  {
    title: "R&D Developer",
    company_name: "Unesco",
    icon: unescoLogo,
    iconBg: "#383E56",
    date: "Jan 2021 - Jan 2022",
    points: [
      "Developed AI-powered educational support systems using NLP and machine learning",
      "Collaborated with researchers to enhance learning tools through data analytics",
    ],
  },
];

export const projects = [
  {
    name: "Personal Portfolio",
    description: "A dynamic portfolio website built with React and Three.js, featuring interactive 3D elements and animations. Implements responsive design principles, AWS SES integration for contact functionality, and modern web development practices for optimal user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: personalPortfolio,
    source_code_link: "https://github.com/Zeee2000/Zelu-Personal-Website",
  },
  {
    name: "Kenzo Workout Suite",
    description: "A comprehensive fitness platform developed as a university capstone project with a team of 5 over 4 months. Features an innovative 3D Pose Studio built with Three.js and Blender models, allowing trainers to create custom exercise demonstrations through joint manipulation. Built with Angular, NestJS, and deployed on AWS.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "nestjs",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "blender",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
      {
        name: "sql",
        color: "blue-text-gradient",
      },
    ],
    image: kenzoWorkout,
    source_code_link: "https://github.com/COS301-SE-2021/Kenzo-Workout-Suite",
  },
  {
    name: "AI-Powered IDS",
    description: "A research study evaluating various AI techniques for enhancing network security anomaly detection. Analyzes machine learning approaches using IDS datasets to measure detection accuracy and performance. Provides comparative insights for improving traditional intrusion detection methods.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machine learning",
        color: "green-text-gradient",
      },
      {
        name: "cybersecurity",
        color: "pink-text-gradient",
      },
    ],
    image: research,
    source_code_link: "https://github.com/Zeee2000/COS700_IDS_ML",
  },
];

export const overview = "A passionate software engineer with a unique blend of technical expertise and leadership qualities. Specializing in cloud architecture and full-stack development, I bring creative solutions to complex problems. Beyond coding, I'm an avid researcher and continuous learner, always exploring emerging technologies and AI innovations.";
