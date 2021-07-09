import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { projects as projectsData } from "../data";
import { Category } from "../type";
import { motion } from "framer-motion";
import { pageAnimation, fadeInUp, stagger } from "../animations";
import Head from "next/head";

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
			className='px-5 py-2 overflow-y-scroll'
			style={{ height: "65vh" }}
			variants={pageAnimation}
			animate='visible'
			initial='hidden'
			exit='exit'>
			<Head>
        <title>Miryam Bathilde | Web Developer | Proyectos</title>
      </Head>
			{/* <ProjectsNavbar handlerFilterCategory={handlerFilterCategory} /> */}

			{/* projects navbar */}
			<nav className='flex px-3 py-2 space-x-3 overflow-x-auto list-none dark:text-gray-50'>
            {/* //use className */}
            <li
               className={`cursor-pointer hover:text-green ${
                  active === 'all' ? 'text-green' : ''
               }`}
               onClick={() => handlerFilterCategory('all')}>
               All
            </li>
            <li
               className={`cursor-pointer hover:text-green ${
                  active === 'react' ? 'text-green' : ''
               }`}
               // use typescript to send value
               onClick={() => handlerFilterCategory('react')}>
               React
            </li>

            <li
               className={`cursor-pointer hover:text-green ${
                  active === 'node' ? 'text-green' : ''
               }`}
               onClick={() => handlerFilterCategory('node')}>
               Node
            </li>
            <li
               className={`cursor-pointer hover:text-green ${
                  active === 'express' ? 'text-green' : ''
               }`}
               onClick={() => handlerFilterCategory('express')}>
               Express{' '}
            </li> 
						<li
               className={`cursor-pointer hover:text-green ${
                  active === 'angular' ? 'text-green' : ''
               }`}
               onClick={() => handlerFilterCategory('angular')}>
               Angular
            </li>
						<li
               className={`cursor-pointer hover:text-green ${
                  active === 'next' ? 'text-green' : ''
               }`}
               onClick={() => handlerFilterCategory('next')}>
               Next
            </li>
						<li
               className={`cursor-pointer hover:text-green ${
                  active === 'bootstrap' ? 'text-green' : ''
               }`}
               onClick={() => handlerFilterCategory('bootstrap')}>
               Bootstrap
            </li>
						<li
               className={`cursor-pointer hover:text-green ${
                  active === 'tailwind' ? 'text-green' : ''
               }`}
               onClick={() => handlerFilterCategory('tailwind')}>
               Tailwind
            </li>
						<li
               className={`cursor-pointer hover:text-green ${
                  active === 'sass' ? 'text-green' : ''
               }`}
               onClick={() => handlerFilterCategory('sass')}>
               SASS
            </li>
         </nav>


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
