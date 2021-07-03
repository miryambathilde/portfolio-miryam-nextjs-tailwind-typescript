import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";

const Projects = () => {
	return <div className='px-5 py-2 overflow-y-scroll' style={{height: '65vh' }} >

		<nav className="dark:text-white">Navbar</nav>

		<div className="relative grid grid-cols-12 gap-4 my-3 bg-gray-200 rounded-md dark:bg-gray-500 dark:text-gray-100">
			{
				projects.map(project=> (
					<div className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-gray-500 dark:text-gray-200 ">
						<ProjectCard project={project} key={project.name}/>
					</div>
				))
			}
		</div>
	</div>;
};

export default Projects;
