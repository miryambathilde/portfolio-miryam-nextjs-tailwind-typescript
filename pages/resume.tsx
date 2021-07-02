import Bar from "../components/Bar";
import { languages, tools } from "../data";

const resume = () => {
	return (
		<div className='px-6 py-2'>
			{/* //education & experience// */}
			<div className='grid gap-10 md:grid-cols-2 xl:grid-cols-2'>
				<div>
					<h5 className='my-3 text-2xl font-bold text-gray-600'>Estudios</h5>
					<div>
						<h5 className='my-2 text-xl font-bold'>
						Codehouse Academy (2021)
						</h5>
						<p className='font-semibold'>Bootcamp Full Stack Web Developer: Opensource</p>
						<p className='my-3 text-justify'>
							En el Bootcamp de Fullstack Web Developer Opensource, he adquirido
							todos los conocimientos necesarios para el desarrollo completo de
							una web, desde la parte que visualiza el cliente hasta la que
							conecta con el servidor. Mediante esta formación, he tenido la
							oportunidad de convertirme en un experto en NODE y he adquirido
							los conocimientos de algunas de las tecnologías más utilizadas en
							la actualidad por las empresas de desarrollo de software.
						</p>
					</div>
					<div>
						<h5 className='my-2 text-xl font-bold'>
						Pixelpro (2020 - 2021)
						</h5>
						<p className='font-semibold'>Estudiante carrera FullStack Developer</p>
						<p className='my-3'>
							HTML5, CSS3, Javascript avanzado, ECMAScript, Angular, React,
							Angular con NodeJS.
						</p>
					</div>
					<div>
						<h5 className='my-2 text-xl font-bold'>
						Bottega Career Services (2020)
						</h5>
						<p className='font-semibold'>Digital Literacy - Coding Foundations</p>
						<p className='my-3 text-justify'>
							1. - Fundamentos digitales y tendencias de la industria
							tecnológica Conocimiento del vocabulario y conceptos básicos de
							alfabetización digital. 
							<br />
							2. - Fundamentos HTML y CSS Los lenguajes
							HTML y CSS para programar sitios web básicos que integran el uso
							de estilos. 
							<br />
							3. - Fundamento de JavaScript Aprender e implementar
							JavaScript para agregar características móviles a proyectos de
							programación básicos. Fundamentos de la línea de comandos Cómo
							usar el terminal y la línea de comandos para completar las tareas
							de programación asignadas. Habilidades de desarrollo Entender las
							tendencias actuales en la industria tecnológica y las posibles
							opciones profesionales asociadas. Identificar estrategias de
							gestión para liderar con eficacia proyectos, reuniones,
							presentaciones y actividades asociadas en entornos de la industria
							tecnológica. Reconocer las competencias de trabajo en equipo que
							promueven la comunicación productiva, la colaboración y la
							negociación.
						</p>
					</div>
				</div>
				<div>
					<h5 className='my-3 text-2xl font-bold text-gray-600'>
						Experiencia profesional
					</h5>
					<div>
						<h5 className='my-2 text-xl font-bold'>
						Codehouse Academy (2021)
						</h5>
						<p className='font-semibold'>Presentación del proyecto final de Bootcamp</p>
						<p className='my-3 text-justify'>
							Diseño, planificación e implementación de un proyecto real.
							<br />
							Aplicación de metodologías ágiles en el proyecto.
							<br />
							Coordinación por un Project Manager de tu desarrollo.
							<br />
							Presentación del proyecto final ante CodeHouse y la empresa.
						</p>
					</div>
				</div>
			</div>
			{/* languages and tools */}

			<div className='grid gap-6 md:grid-cols-2'>
				<div>
					<h5 className='my-4 text-2xl font-bold text-gray-600'>Lenguajes</h5>
					<div className='my-4'>
						{languages.map((language) => (
							<Bar data={language} key={language.name} />
						))}
					</div>
				</div>
				<div>
					<h5 className='my-4 text-2xl font-bold text-gray-600'>
						Herramientas & Frameworks
					</h5>
					<div className='my-4'>
						{tools.map((tool) => (
							<Bar data={tool} key={tool.name} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default resume;
