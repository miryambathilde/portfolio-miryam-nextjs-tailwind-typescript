import { FunctionComponent } from "react";
import { Category } from "../type";

export const NavItem: FunctionComponent<{ 
  value: Category | 'all'; 
  handlerFilterCategory:Function; 
}> = ({value, handlerFilterCategory}) => {

	return (
  <li className= "capitalize cursor-pointer hover:text-green-400 dark:hover:text-green-300 dark:text-gray-100" onClick={() =>handlerFilterCategory(value)}>
    {value}
  </li>
  )
};

const ProjectsNavbar:FunctionComponent<{handlerFilterCategory:Function}> = (props) => {
	return (
  <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
    <NavItem value= 'all' {...props}/>
    <NavItem value= 'react' {...props}/>
    <NavItem value= 'node' {...props}/>
    <NavItem value= 'express' {...props}/>
    <NavItem value= 'vue' {...props}/>
    <NavItem value= 'angular' {...props}/>
    <NavItem value= 'next' {...props}/>
    <NavItem value= 'mongo' {...props}/>
    <NavItem value= 'bootstrap' {...props}/>
    <NavItem value= 'tailwind' {...props}/>
    <NavItem value= 'sass' {...props}/>
  </div>
  )
};

export default ProjectsNavbar;
