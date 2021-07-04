import { FunctionComponent } from "react";
import { Skill } from "../type";
import { motion } from "framer-motion";

const Bar: FunctionComponent<{
	data: Skill;
}> = ({ data: { Icon, level, name } }) => {
	const bar_width = `${level}%`

	const variants = {
		initial: {
			with: 0
		},
		animate: {
			width:bar_width,
			transition: {
				duration: 0.4,
			},
		},
	}
	return (
		<div className='my-2 font-bold text-white bg-gray-400 rounded-full dark:bg-gray-50'>
			<motion.div
				className='flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green-600 via-green-400 to-blue-500 dark:from-green-600 dark:via-green-400 dark:to-blue-400'
				style={{ 
					width: bar_width 
				}}
				variants={variants}
				initial="initial"
				animate="animate"
				>
					
				<Icon className='mr-3' />
				{name}
			</motion.div>
		</div>
	);
};

export default Bar;
