import { FunctionComponent } from "react";
import { Skill } from "../type";
import { motion } from "framer-motion";

const Bar: FunctionComponent<{
	data: Skill;
}> = ({ data: { Icon, level, name } }) => {
	/* const bar_width = `${level}%` */

	return (
		<div className='my-2 font-bold text-white bg-gray-400 rounded-full dark:bg-gray-50'>
			<motion.div
				className='flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green-600 via-green-500 to-blue-400'
				style={{ 
					width: level,
					backgroundImage: 'linear-gradient(90deg,#28CB68,#0575e6)',
				}}
				variants={{
					initial: {
						 width: 0,
					},
					animate: {
						 width: level,
						 transition: {
								duration: 0.5,
								type: 'spring',
								damping: 10,
								stiffness: 100,
						 },
					},
			 }}
			 animate='animate'
			 initial='initial'>
				<Icon className='mr-3' />
				{name}
			</motion.div>
		</div>
	);
};

export default Bar;
