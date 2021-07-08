

//interface is the shape of the object
export interface Service {
	title: string;
	about: string;
	Icon: any;
}

export interface Skill {
	name: string;
	level: string;
	Icon: any;
}

export interface Project {
	id: number;
	name: string;
	description: string;
	image_path: string;
	deployed_url: string;
	github_url: string;
	category: Category[];
	key_points: string[];
}

export type Category = "react" | "node" | "express" | "vue" | "angular" | "next" | "mongo" | "bootstrap" | "tailwind" | "sass";
