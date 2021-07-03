import { IconType } from "react-icons";

//interface is the shape of the object
export interface Service {
	title: string;
	about: string;
	Icon: IconType;
}

export interface Skill {
	name: string;
	level: string;
	Icon: IconType;
}

export interface Project {
	name: string;
	description: string;
	image_path: string;
	deployed_url: string;
	github_url: string;
	category: Category[];
	key_techs: string[];
}

export type Category = "react" | "node" | "express" | "vue" | "angular" | "next js" | "mongo DB" | "bootstrap" | "tailwind CSS" | "sass" | "web pack" | "html" | "css";
