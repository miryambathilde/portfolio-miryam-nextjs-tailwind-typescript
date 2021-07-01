import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { BsCircleFill } from "react-icons/bs";
import { Service, Skill } from "./type";
import { AiOutlineApi, AiOutlineAntDesign } from "react-icons/ai";

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
    Icon: BsCircleFill,
    name: "HTML5, CSS3, SCSS, SASS, Responsive Web Design",
    level: "95%",
  },
  {
    Icon: BsCircleFill,
    name: "Javascript",
    level: "90%",
  },
  {
    Icon: BsCircleFill,
    name: "Typescript",
    level: "95%",
  },
  {
    Icon: BsCircleFill,
    name: "Bases de datos",
    level: "90%",
  },
  {
    Icon: BsCircleFill,
    name: "UX/UI",
    level: "90%",
  },
];

/* TOOLS */
export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "90%",
  },
  {
    Icon: BsCircleFill,
    name: "Tailwind CSS",
    level: "90%",
  },
  {
    Icon: BsCircleFill,
    name: "Materialize",
    level: "90%",
  },
  {
    Icon: BsCircleFill,
    name: "Angular Material",
    level: "90%",
  },
  {
    Icon: BsCircleFill,
    name: "Vue",
    level: "90%",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "95%",
  },
  {
    Icon: BsCircleFill,
    name: "Next JS",
    level: "85%",
  },
  {
    Icon: BsCircleFill,
    name: "Angular",
    level: "90%",
  },
  {
    Icon: BsCircleFill,
    name: "Node JS",
    level: "90%",
  },
  {
    Icon: BsCircleFill,
    name: "MySQL",
    level: "90%",
  },
  {
    Icon: BsCircleFill,
    name: "MongoDB",
    level: "90%",
  },
  {
    Icon: BsCircleFill,
    name: "Git-Github",
    level: "90%",
  },
  {
    Icon: BsCircleFill,
    name: "Jenkins",
    level: "90%",
  },
  {
    Icon: BsCircleFill,
    name: "Docker",
    level: "90%",
  },
  {
    Icon: BsCircleFill,
    name: "Kubernetes",
    level: "90%",
  },
  {
    Icon: BsCircleFill,
    name: "Metodologías ágiles",
    level: "90%",
  },
  {
    Icon: BsCircleFill,
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