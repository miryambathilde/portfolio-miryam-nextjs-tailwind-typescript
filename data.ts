import { RiComputerLine } from "react-icons/ri";
import { FaDatabase, FaJenkins, FaServer } from "react-icons/fa";
import { Project, Service, Skill } from "./type";
import { AiOutlineApi, AiOutlineAntDesign } from "react-icons/ai";
import {
	SiHtml5,
	SiCss3,
	SiSass,
	SiJavascript,
	SiTypescript,
	SiVueDotJs,
	SiReact,
	SiAngular,
	SiMongodb,
	SiNodeDotJs,
	SiBootstrap,
	SiTailwindcss,
	SiNextDotJs,
	SiGithub,
	SiGit,
	SiDocker,
	SiKubernetes,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { DiMaterializecss, DiScrum } from "react-icons/di";

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
		about: "Puedo desarrollar una API REST robusta usando <b>Node API</b>.",
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
export const projects: Project[] = [
	{
		name: "Smart Agency",
		description: "Pagina web para agencia de diseño web",
		image_path: "/images/smart-agency.png",
		deployed_url: "https://miryambathildecrevillen.es/smart-agency/",
		github_url: "https://github.com/miryambathilde/smart-agency",
		category: ["bootstrap"],
		key_techs: ["HTML", "CSS", "Bootstrap"],
	},

	{
		name: "PixelShop",
		description: "Tienda online de cursos para desarrolladores web",
		image_path: "/images/pixelshop.png",
		deployed_url: "https://miryambathildecrevillen.es/pixelshop/dist/",
		github_url: "https://github.com/miryambathilde/pixelshop",
		category: ["node", "angular", "bootstrap"],
		key_techs: ["Angular", "Bootstrap", "Node"],
	},
	{
		name: "Landing page",
		description:
			"Práctica de Landing page usando HTML, CSS y diseño responsive.",
		image_path: "/images/landing-page-html-css.png",
		deployed_url: "https://miryambathildecrevillen.es/landing-page-website/",
		github_url: "https://github.com/miryambathilde/Landing-Page-HTML-CSS",
		category: [],
		key_techs: ["HTML", "CSS"],
	},
	{
		name: "Data Cloud",
		description:
			"Práctica de Landing page usando HTML, CSS con animaciones, flexbox, grid y diseño responsive.",
		image_path: "/images/data-cloud.png",
		deployed_url:
			"https://miryambathildecrevillen.es/data-cloud-hosting-website/index.html",
		github_url:
			"https://github.com/miryambathilde/cloud-data-project-html-css-flex-grid-animations",
		category: [],
		key_techs: ["HTML", "CSS", "Flexbox", "Grid", "Animations"],
	},
];
