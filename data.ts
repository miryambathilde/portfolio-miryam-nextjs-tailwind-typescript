import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";
import { iService } from "./type";

export const services: iService[] = [
  {
    Icon: RiComputerLine,
    title: "Desarrollo Frontend",
    about:
      "Puedo construir una SPA bonita y funcional usando <b> HTML</b>,<b>CSS</b> and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Desarrollo Backend",
    about:
      "Manejo de bases de datos, servidores y API usando <b>Express </b> & y otros frameworks populares",
  },
];

/* TODO */
/* LANGUAGES and TOOLS */
export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "HTML5, CSS3, SCSS, SASS, Responsive Web Design",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap 4, Tailwind CSS, Materialize, Angular Material",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Javascript & Typescript",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Vue, React, Angular",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Next JS",
    level: "80",
  },
];

/* TODO  */
/* PROJECTS */
//export const projects: IProject[] = [
 /*  {
   name: "Algorithm Visualizer",
   image_path: "/images/algoVisual.png",
   deployed_url: "https://visual-algorithm.web.app/",
   github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
   category: ["react"],
   description:
     "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
    key_techs: ["React", "firebase", "Framer Motion"],
  },
 */
  /* {
    name: "Dev Talks",
    image_path: "/images/dev.jpg",
    deployed_url: "https://dev-talks.herokuapp.com/",
    github_url: "https://github.com/Dey-Sumit/Dev-talks",
    category: ["node", "mongo", "react"],
    description:
      "Social Media app for developers who can share project,create posts,etc...",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
      "Bootstrap",
    ],
  }, */

 /*  {
    name: "Realtime Chat App",
    image_path: "/images/chatapp.jpg",
    deployed_url: "https://sumit-chat.netlify.app/",
    github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
    category: ["node", "react"],
    description:
      "Basic Realtime Chat App where one can create a room can talk to each other",
    key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
  }, */

  /* {
    name: "YouTube using YouTube ",
    image_path: "/images/youtubeClone.png",
    deployed_url: "https://not-utube.web.app/",
    github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
    category: ["express"],
    description:
      'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
    key_techs: [
      "React",
      "Redux",
      "Firebase Auth",
      "YouTube API",
      "Sass",
      "Bootstrap",
    ],
  }, */
//];