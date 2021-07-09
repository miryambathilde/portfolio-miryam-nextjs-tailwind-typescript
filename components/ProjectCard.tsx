import React, { FunctionComponent, useState } from "react";
import { AiFillCloseCircle, AiFillGithub, AiFillProject } from "react-icons/ai";
import { Project } from "../type";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { stagger, fadeInUp } from "../animations";

const ProjectCard: FunctionComponent<{
	project: Project;
	/* showDetail: null | number;
	setShowDetail: (id: null | number) => void; */
}> = ({
	project: {
		id,
		name,
		description,
		image_path,
		deployed_url,
		github_url,
		key_points,
	},
	/* showDetail,
	setShowDetail, */
}) => {
	const [showDetail, setShowDetail] = useState(false)
	return (
		<motion.div>
			<Image
				src={image_path}
				alt={name}
				className='cursor-pointer'
				onClick={() => setShowDetail(true)}
				layout='responsive'
				height={150}
				width={300}
			/>

			{/* <img src={image_path} alt={name} className='cursor-pointer' onClick={()=>setShowDetail(true)}/> */}
			<p className='my-2 text-center dark:text-gray-100'>{name}</p>
			<AnimatePresence>
				{showDetail && (
					<motion.div
						className='absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-gray-800 bg-gray-200 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-gray-500'
						variants={stagger}
						initial='initial'
						animate='animate'>
						<motion.div variants={fadeInUp}>
							<motion.div
								className='border-4 border-gray-100 '
								variants={fadeInUp}>
								<Image
									src={image_path}
									alt={name}
									className='overflow-hidden'
									layout='responsive'
									height={150}
									width={300}
								/>
							</motion.div>
							<motion.div
								className='flex justify-center my-4 space-x-3'
								variants={fadeInUp}>
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
							</motion.div>
						</motion.div>
						<motion.div variants={stagger} initial='initial' animate='animate'>
							<motion.h2
								className='mb-3 text-xl font-medium md:text-2xl'
								variants={fadeInUp}>
								{name}
							</motion.h2>
							<motion.h3 className='mb-3 font-medium' variants={fadeInUp}>
								{description}
							</motion.h3>

							<motion.div
								className='flex flex-wrap mt-5 space-x-2 text-sm font-semibold'
								variants={fadeInUp}>
								{key_points.map((value, i) => (
									<span
										key={i}
										className='px-2 py-1 my-1 text-gray-100 bg-gray-500 rounded-sm dark:bg-gray-200 dark:text-gray-700'>
										{value}
									</span>
								))}
							</motion.div>
						</motion.div>

						<button
							onClick={() => setShowDetail(false)}
							className='absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-gray-500'>
							<AiFillCloseCircle size={30} />
						</button>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

export default ProjectCard;
