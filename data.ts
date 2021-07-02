import { RiComputerLine } from "react-icons/ri";
import { FaDatabase, FaJenkins, FaServer } from "react-icons/fa";
import { Service, Skill } from "./type";
import { AiOutlineApi, AiOutlineAntDesign } from "react-icons/ai";
import {SiHtml5, SiCss3, SiSass, SiJavascript, SiTypescript, SiVueDotJs, SiReact, SiAngular, SiMysql, SiMongodb, SiNodeDotJs, SiBootstrap, SiTailwindcss, SiNextDotJs, SiGithub, SiGit, SiJenkins, SiDocker, SiKubernetes} from "react-icons/si";
import {GrMysql} from 'react-icons/gr';
import {DiMaterializecss, DiScrum} from 'react-icons/di'


export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Desarrollo Frontend",
    about:
      "Puedo construir una SPA, Single Page Application, bonita y funcional usando <b> HTML</b>,<b>CSS</b> y <b>React, Vue o Angular</b>. ",
  },
  {
    Icon: FaServer,
    title: "Desarrollo Backend",
    about:
      "Manejo de BBDD, servidores y API usando <b>Express</b> y otros frameworks populares.",
  },
  {
    Icon: AiOutlineApi,
    title: "Desarrollo de API",
    about:
      "Puedo desarrollar una API REST robusta usando <b>Node API</b>.",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX",
    about:
      "Desarrollo de interfaces gráficas de usuario, <b>accesible para personas con discapacidad, orientado al SEO</b> y totalmente <b>responsive</b>.",
  },
];

/* TODO */
/* LANGUAGES*/
export const languages: Skill[] = [
  {
    Icon: SiHtml5,
    name: "HTML5",
    level: "95%",
  },
  {
    Icon: SiCss3,
    name: "CSS3",
    level: "95%",
  },
  {
    Icon: SiSass,
    name: "SASS, SCSS",
    level: "95%",
  },
  {
    Icon: SiJavascript,
    name: "Javascript",
    level: "90%",
  },
  {
    Icon: SiTypescript,
    name: "Typescript",
    level: "95%",
  },
  {
    Icon: SiVueDotJs,
    name: "Vue",
    level: "90%",
  },
  {
    Icon: SiReact,
    name: "React",
    level: "95%",
  },
  {
    Icon: SiAngular,
    name: "Angular",
    level: "90%",
  },
  {
    Icon: FaDatabase,
    name: "Bases de datos",
    level: "90%",
  },
  {
    Icon: GrMysql,
    name: "MySQL",
    level: "90%",
  },
  {
    Icon: SiMongodb,
    name: "MongoDB",
    level: "90%",
  },
  {
    Icon: SiNodeDotJs,
    name: "Node JS",
    level: "90%",
  },
];

/* TOOLS */
export const tools: Skill[] = [
  {
    Icon: SiBootstrap,
    name: "Bootstrap",
    level: "90%",
  },
  {
    Icon: SiTailwindcss,
    name: "Tailwind CSS",
    level: "90%",
  },
  {
    Icon: DiMaterializecss,
    name: "Materialize",
    level: "90%",
  },
  {
    Icon: SiAngular,
    name: "Angular Material",
    level: "90%",
  },
  {
    Icon: SiNextDotJs,
    name: "Next JS",
    level: "85%",
  },
  {
    Icon: SiGit,
    name: "Git",
    level: "90%",
  },
  {
    Icon: SiGithub,
    name: "Github",
    level: "90%",
  },
  {
    Icon: FaJenkins,
    name: "Jenkins",
    level: "90%",
  },
  {
    Icon: SiDocker,
    name: "Docker",
    level: "90%",
  },
  {
    Icon: SiKubernetes,
    name: "Kubernetes",
    level: "90%",
  },
  {
    Icon: DiScrum,
    name: "Agile Skills",
    level: "90%",
  },
  {
    Icon: DiScrum,
    name: "SCRUM",
    level: "90%",
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