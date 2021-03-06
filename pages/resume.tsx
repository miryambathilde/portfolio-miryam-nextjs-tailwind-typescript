import { fadeInUp, pageAnimation } from "../animations";
import { motion } from "framer-motion";
import Head from 'next/head';

const Resume = () => {
	return (
		<motion.div
			className='px-6 py-2 bg-gray-200 dark:bg-gray-700'
			variants={pageAnimation}
			initial='hidden'
			animate='visible'
			exit='exit'>
			<Head>
        <title>Miryam Bathilde | Web Developer | Resume</title>
      </Head>
			{/* //education & experience// */}
			<div className='grid gap-10 md:grid-cols-2 xl:grid-cols-2'>
				<motion.div variants={fadeInUp} initial='initial' animate='animate'>
					<h3 className='text-2xl font-bold text-gray-800 dark:text-white my-7'>
						Estudios
					</h3>
					<div>
						<h5 className='my-2 text-xl font-bold dark:text-gray-300'>
							Codehouse Academy (2021)
						</h5>
						<p className='font-semibold dark:text-gray-300'>
							Bootcamp Full Stack Web Developer: Opensource
						</p>
						<p className='my-3 text-justify dark:text-gray-300'>
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
						<h5 className='my-2 text-xl font-bold dark:text-gray-300'>
							Pixelpro (2020 - 2021)
						</h5>
						<p className='font-semibold dark:text-gray-300'>
							Estudiante carrera FullStack Developer
						</p>
						<p className='my-3 dark:text-gray-300'>
							HTML5, CSS3, Javascript avanzado, ECMAScript, Angular, React,
							Angular con NodeJS.
						</p>
					</div>
					<div>
						<h5 className='my-2 text-xl font-bold dark:text-gray-300'>
							Bottega Career Services (2020)
						</h5>
						<p className='font-semibold dark:text-gray-300'>
							Digital Literacy - Coding Foundations
						</p>
						<p className='my-2 text-justify dark:text-gray-300'>
							1. Fundamentos digitales y tendencias de la industria tecnológica
							Conocimiento del vocabulario y conceptos básicos de alfabetización
							digital.
						</p>
						<p className='my-2 text-justify dark:text-gray-300'>
							2. Fundamentos HTML y CSS Los lenguajes HTML y CSS para programar
							sitios web básicos que integran el uso de estilos.
						</p>

						<p className='my-2 text-justify dark:text-gray-300'>
							3. Fundamento de JavaScript Aprender e implementar JavaScript para
							agregar características móviles a proyectos de programación
							básicos. Fundamentos de la línea de comandos Cómo usar el terminal
							y la línea de comandos para completar las tareas de programación
							asignadas. Habilidades de desarrollo Entender las tendencias
							actuales en la industria tecnológica y las posibles opciones
							profesionales asociadas. Identificar estrategias de gestión para
							liderar con eficacia proyectos, reuniones, presentaciones y
							actividades asociadas en entornos de la industria tecnológica.
							Reconocer las competencias de trabajo en equipo que promueven la
							comunicación productiva, la colaboración y la negociación.
						</p>
					</div>
				</motion.div>
				<motion.div variants={fadeInUp} initial='initial' animate='animate'>
					<h4 className='text-2xl font-bold text-gray-800 dark:text-white my-7'>
						Experiencia profesional
					</h4>
					<div>
						<h5 className='my-2 text-xl font-bold text-justify dark:text-gray-300'>
							Codehouse Academy (2021)
						</h5>
						<p className='font-semibold text-justify dark:text-gray-300'>
							Presentación del proyecto final de Bootcamp
						</p>
						<p className='my-3 text-justify dark:text-gray-300'>
							Diseño, planificación e implementación de un proyecto real.
							<br />
							Aplicación de metodologías ágiles en el proyecto.
							<br />
							Coordinación por un Project Manager de tu desarrollo.
							<br />
							Presentación del proyecto final ante CodeHouse y la empresa.
						</p>
					</div>
					<div>
						<h5 className='my-2 text-xl font-bold dark:text-gray-300'>
							Pixelpro (2020 - 2021)
						</h5>
						<p className='font-semibold text-justify dark:text-gray-300'>
							Estudiante carrera FullStack Developer
						</p>
						<p className='my-3 text-justify dark:text-gray-300'>
							HTML5, CSS3, Javascript avanzado, ECMAScript, Angular, React,
							Angular con NodeJS.
						</p>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default Resume;
