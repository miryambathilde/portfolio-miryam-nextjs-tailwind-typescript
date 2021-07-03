import React, { FunctionComponent, useState } from "react";
import { AiFillCloseCircle, AiFillGithub, AiFillProject } from "react-icons/ai";
import { Project } from "../type";

const ProjectCard: FunctionComponent<{
	project: Project;
}> = ({
	project: {
		name,
		description,
		image_path,
		deployed_url,
		github_url,
		category,
		key_techs,
	},
}) => {
	/* ventana para mostrar detalle por defecto se inicia en false */
	const [showDetail, setShowDetail] = useState(false);
	return (
		<div>
			<img src={image_path} alt={name} className='cursor-pointer' />
			<p className='my-2 text-center dark:text-gray-100'>{name}</p>

			<div className='grid md:grid-cols-2 xl:grid-cols-2'>
				<div>
					<img src={image_path} alt={name} />
					<div>
						<a href={github_url}>
							<AiFillGithub size={20} />{" "}
							<span className='dark:text-gray-100'>GitHub</span>
						</a>
						<a href={github_url}>
							<AiFillProject size={20} />{" "}
							<span className='dark:text-gray-100'>Project</span>
						</a>
					</div>
				</div>
			</div>

			<div className='dark:text-gray-100'>
				<h2>{name}</h2>
				<h3>{description}</h3>
				<div className='dark:text-gray-100'>
					{key_techs.map((tech) => (
						<span key={tech}>{tech}</span>
					))}
				</div>

				<div className='dark:text-gray-100'>
					<button>
						<AiFillCloseCircle size={30} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
