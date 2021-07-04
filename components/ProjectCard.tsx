import React, { FunctionComponent, useState } from "react";
import { AiFillCloseCircle, AiFillGithub, AiFillProject } from "react-icons/ai";
import { Project } from "../type";
import Image from "next/image";

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
			<Image
				src={image_path}
				alt={name}
				className='cursor-pointer'
				onClick={() => setShowDetail(true)}
				layout='responsive'
				height='150'
				width='300'
			/>
			{/* <img src={image_path} alt={name} className='cursor-pointer' onClick={()=>setShowDetail(true)}/> */}
			<p className='my-2 text-center dark:text-gray-100'>{name}</p>

			{showDetail && (
				<div className='absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-gray-800 bg-gray-200 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-gray-500'>
					<div>
						<Image
							src={image_path}
							alt={name}
							/* className='cursor-pointer'
							onClick={() => setShowDetail(true)} */
							layout='responsive'
							height='250'
							width='500'
						/>

						{/* <img src={image_path} alt={name} /> */}

						<div className='flex justify-center my-4 space-x-3'>
							<a
								target='_blank'
								href={github_url}
								className='flex items-center px-4 py-2 space-x-3 text-lg text-gray-100 bg-gray-500 rounded-sm dark:bg-gray-300 dark:text-gray-700'>
								<AiFillGithub /> <span>Github</span>
							</a>
							<a
								target='_blank'
								href={deployed_url}
								className='flex items-center px-4 py-2 space-x-3 text-lg text-gray-100 bg-gray-500 rounded-sm dark:bg-gray-300 dark:text-gray-700'>
								<AiFillProject /> <span>Project</span>
							</a>
						</div>
					</div>

					<div>
						<h2 className='mb-3 text-xl font-medium md:text-2xl'>{name}</h2>
						<h3 className='mb-3 font-medium'>{description}</h3>

						<div className='flex flex-wrap mt-5 space-x-2 text-sm font-semibold'>
							{key_techs.map((tech) => (
								<span
									key={tech}
									className='px-2 py-1 my-1 text-gray-100 bg-gray-500 rounded-sm dark:bg-gray-200 dark:text-gray-700'>
									{tech}
								</span>
							))}
						</div>
					</div>

					<button
						onClick={() => setShowDetail(false)}
						className='absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-gray-500'>
						<AiFillCloseCircle size={30} />
					</button>
				</div>
			)}
		</div>
	);
};

export default ProjectCard;
