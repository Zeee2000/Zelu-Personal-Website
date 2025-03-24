import {
  web,
  pythonLogo,
  frontendLogo,
  backend,
  entelectLogo,
  epiuseLogo,
  unescoLogo,
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
      "Joined Entelect on The First Order",
      "Primary Objective to build technical skills relevant to client opportunities",
      "Completed 3 AWS Certifications i.e AWS Certified Solutions Architect, AWS Certified Developer, AWS Certified SysOps Administrator",
      "Participate in daily stand-ups to update the team on progress",
    ],
  },
  {
    title: "Software Engineer 2",
    company_name: "EPI-USE",
    icon: epiuseLogo,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - December 2024",
    points: [
      "Involved in critical architectural decisions, ensuring maintainable, well-tested solutions in various hosting platforms",
      "Established and optimized development and deployment pipelines to include static code analysis, correct code linting, adequate testing and optimized deployments",
      "Developer of innovative time solutions that allows virtual clocking and reporting on employee time records",
      "Mentor new hires to facilitate seamless integration into the team and continuous guidance within projects",
    ],
  },
  {
    title: "R&D Developer",
    company_name: "Unesco",
    icon: unescoLogo,
    iconBg: "#383E56",
    date: "Jan 2021 - Jan 2022",
    points: [
      "Collaborated with experienced researchers on a UNESCO-sponsored initiative",
      "Leveraged AI methodologies to develop an intelligent tutoring system designed to provide students with continuous, round-the-clock support for course content",
      "Utilized technologies such as natural language processing (NLP), machine learning algorithms, and data analytics to enhance the educational tool's functionality",
    ],
  },
];

export const projects = [
  {
    name: "Personal Portfolio",
    description: "A modern, responsive portfolio website built with React, Three.js, and Tailwind CSS. Features include 3D animations, interactive components, and a contact form with AWS SES integration.",
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
    image: "/portfolio.png",
    source_code_link: "https://github.com/yourusername/portfolio",
  },
  {
    name: "Time Management System",
    description: "A comprehensive time tracking and management system developed for EPI-USE. Features include virtual clocking, reporting, and analytics for employee time records.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "spring",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: "/time-management.png",
    source_code_link: "https://github.com/yourusername/time-management",
  },
  {
    name: "AI Tutoring System",
    description: "An intelligent tutoring system developed for UNESCO, featuring NLP and machine learning capabilities for providing continuous educational support.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "nlp",
        color: "pink-text-gradient",
      },
    ],
    image: "/ai-tutoring.png",
    source_code_link: "https://github.com/yourusername/ai-tutoring",
  },
];
