import Bar from "../components/Bar";
import { languages, tools } from "../data";

const resume = () => {
	return (
		<div className='px-6 py-2'>
			{/* //education & experience// */}
			<div className='grid gap-10 md:grid-cols-2 xl:grid-cols-2'>
				<div>
					<h5 className='my-3 text-2xl font-bold'>Estudios</h5>
					<div>
						<h5 className='my-2 text-xl font-bold'>
							Bootcamp Full Stack Web Developer: Opensource
						</h5>
						<p className='font-semibold'>Codehouse Academy (2021)</p>
						<p className='my-3'>
							En el Bootcamp de Fullstack Web Developer Opensource, he adquirido
							todos los conocimientos necesarios para el desarrollo completo de
							una web, desde la parte que visualiza el cliente hasta la que
							conecta con el servidor. Mediante esta formación, he tenido la
							oportunidad de convertirme en un experto en NODE y he adquirido
							los conocimientos de algunas de las tecnologías más utilizadas en
							la actualidad por las empresas de desarrollo de software.
						</p>
					</div>
				</div>
				<div>
					<h5 className='my-3 text-2xl font-bold'>Experiencia profesional</h5>
					<div>
						<h5 className='my-2 text-xl font-bold'>
							Presentación del proyecto final de Bootcamp
						</h5>
						<p className='font-semibold'>Codehouse Academy (2021)</p>
						<p className='my-3'>
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
					<h5 className='my-3 text-2xl font-bold'>Lenguajes</h5>
					<div className='my-2'>
						{languages.map((language) => (
							<Bar data={language} key={language.name} />
						))}
					</div>
				</div>
				<div>
					<h5 className='my-3 text-2xl font-bold'>Herramientas & Frameworks</h5>
					<div className='my-2'>
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
