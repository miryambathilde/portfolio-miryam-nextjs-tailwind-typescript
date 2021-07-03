import { FunctionComponent } from "react";
import { Skill } from "../type";

const Bar: FunctionComponent<{
	data: Skill;
}> = ({ data: { Icon, level, name } }) => {
	return (
		<div className="my-2 font-bold text-white bg-gray-400 rounded-full dark:bg-gray-50">
			<div className='flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green-600 via-green-400 to-blue-500 dark:from-green-600 dark:via-green-400 dark:to-blue-400'
      style={{width: level}}
      
      >
				<Icon className='mr-3' />
				{name}
			</div>
		</div>
	);
};

export default Bar;
