import { jinhome, teacherfind, thecoffeehouse, hust } from "../assets";
const basicInfo = [
  { name: "Birthday", value: "3 August 2001" },
  { name: "Degree", value: "University" },
  { name: "City", value: "Hanoi" },
  { name: "Age", value: "23" },
  { name: "Email", value: "hieudo030801@gmail.com" },
  { name: "Phone", value: "+84 394896395" },
  { name: "Course", value: "Vietnam-Japan Information Technology" },
];

const skillProgressBar = [
  { name: "Frontend", percentage: "80" },
  { name: "Backend", percentage: "70" },
];

const frontendSkills = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg",
  },
];

const backendSkills = [
  {
    name: "Node JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg",
  },
  {
    name: "Express JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
  },
];

const toolSkills = [
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: " GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "NPM",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
  },
];

const projects = [
  {
    name: "JinHome",
    description:
      "Web-based platform that allows users to search homestays, providing a convenient and efficient solution for travelling needs.",
    tags: [
      {
        name: "reactjs",
        color: "blue",
      },
      {
        name: "nodejs",
        color: "green",
      },
      {
        name: "mongodb",
        color: "red",
      },
    ],
    image: jinhome,
    source_code_link: "https://github.com/volNjin/homestays_search_engine_fe",
  },
  {
    name: "TheCoffeeHouse",
    description:
      "A website programmed based on thecoffeehouse.com, featuring primarily the functionalities of an online ordering platform.",
    tags: [
      {
        name: "vuejs",
        color: "blue",
      },
      {
        name: "laravel",
        color: "green",
      },
      {
        name: "xampp",
        color: "red",
      },
    ],
    image: thecoffeehouse,
    source_code_link: "https://github.com/volNjin/tch_be",
  },
  {
    name: "Teacherfind",
    description:
      "Web-based platform that allows users to find tutors, see tutors' profile and contact",
    tags: [
      {
        name: "reactjs",
        color: "blue",
      },
      {
        name: "nodejs",
        color: "green",
      },
      {
        name: "mongodb",
        color: "red",
      },
    ],
    image: teacherfind,
  },
];

const education = {
  name: "Hanoi University of Science and Technology",
  logo: hust,
  timeSpan: "2019 - Now",
  course: "Vietnam-Japan Information Technology",
  cpa: "3.53/4.0",
};

const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  // {
  //   id: "contacts",
  //   title: "Contacts",
  // },
];
export {
  basicInfo,
  education,
  skillProgressBar,
  frontendSkills,
  backendSkills,
  toolSkills,
  projects,
  navLinks,
};
