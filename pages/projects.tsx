import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { projects as projectsData } from "../data";
import { Category } from "../type";
import { motion } from "framer-motion";
import { pageAnimation, fadeInUp, stagger } from "../animations";

const Projects = () => {
	const [projects, setProjects] = useState(projectsData);
	const [active, setActive] = useState("all");

	/* ventana para mostrar detalle se inicia por el id o vacio, aunque por defecto se inicia vacío*/
	const [showDetail, setShowDetail] = useState<number | null>(null);

	const handlerFilterCategory = (category: Category | "all") => {
		if (category === "all") {
			setProjects(projectsData);
			setActive(category);
			return;
		}

		const newArray = projectsData.filter((project) =>
			project.category.includes(category)
		);
		setProjects(newArray);
		setActive(category);
	};

	return (
		<motion.div
			className='px-5 py-2 overflow-y-auto'
			style={{ height: "65vh" }}
			variants={pageAnimation}
			animate='visible'
			initial='hidden'
			exit='exit'>
			<ProjectsNavbar handlerFilterCategory={handlerFilterCategory} />

			<motion.div
				className='relative grid grid-cols-12 gap-4 my-3 bg-gray-200 rounded-md dark:bg-gray-500 dark:text-gray-100'
				variants={stagger}
				initial='initial'
				animate='animate'>
				{projects.map((project) => (
					<motion.div
						className='col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-gray-500 dark:text-gray-200'
						variants={fadeInUp}
						key={project.id}>
						<ProjectCard
							project={project}
							showDetail={showDetail}
							setShowDetail={setShowDetail}
						/>
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default Projects;
