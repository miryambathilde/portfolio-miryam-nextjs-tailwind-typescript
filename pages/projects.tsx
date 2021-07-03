import { projects } from "../data";

const Projects = () => {
	return <div className='p-4'>

		<nav>Navbar</nav>

		<div>
			{
				projects.map(project=> (
					<div>
						<ProjectCard/>
					</div>
				))
			}
		</div>
	</div>;
};

export default Projects;
