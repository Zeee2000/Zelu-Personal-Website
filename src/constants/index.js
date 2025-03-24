import {
  web,
  pythonLogo,
  html,
  css,
  javascript,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  git,
  docker,
  saplogo,
  javaLogo,
  frontendLogo,
  backend,
  entelectLogo,
  epiuseLogo,
  unescoLogo,
  carrent,
  jobit,
  tripguide,
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

const services = [
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

const technologies = [
  {
    name: "AWS",
    icon: web,
  },
  {
    name: "Python",
    icon: pythonLogo,
  },
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "SAP",
    icon: saplogo,
  },
  {
    name: "Java",
    icon: javaLogo,
  },
];

const experiences = [
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

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, experiences, projects };
