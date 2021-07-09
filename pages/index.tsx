import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import Head from "next/head";
import React from "react";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { pageAnimation, stagger, fadeInUp } from "../animations";
import { motion } from "framer-motion";
import { languages, tools } from "../data";
import Bar from "../components/Bar";

const About = () => {
	return (
		<motion.div
			className='flex flex-col flex-grow px-6 pt-1 dark:bg-gray-700 dark:text-gray-200'
			variants={pageAnimation}
			initial='hidden'
			animate='visible'
			exit='exit'>
			<Head>
        <title>Miryam Bathilde | Web Developer | About</title>
      </Head>
			<h5 className='my-3 font-medium'>
				Soy Miryam, desarrolladora FullStack, apasionada y amante del diseño y
				la maquetación web.
				<br />
				Recientemente he terminado mis estudios de Full Stack Developer y,
				durante mis estudios, he ido desarrollando aplicaciones y páginas web
				para poner en práctica todos los conocimientos adquiridos.
			</h5>

			<div
				className='flex-grow p-4 mt-5 bg-gray-300 dark:bg-gray-700 '
				style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}>
				<h6 className='my-3 text-xl font-bold dark:text-gray-100'>Servicios</h6>

				<motion.div
					className='grid gap-6 my-3 md:grid-cols-2'
					variants={stagger}
					initial='initial'
					animate='animate'>
					{services.map((service) => (
						<motion.div
							variants={fadeInUp}
							className='col-span-2 p-2 bg-gray-100 rounded-lg dark:bg-gray-600 dark:text-gray-100 md:col-span-1'
							key={service.title}>
							<ServiceCard service={service} />
						</motion.div>
					))}
				</motion.div>
			</div>

			{/* languages and tools */}
			
			<div className='grid gap-6 md:grid-cols-2'>
				<div>
					<h5 className='my-3 text-2xl font-bold text-gray-800 dark:text-gray-100'>
						Lenguajes
					</h5>
					<div className='my-2'>
						{languages.map((language, i) => (
							<Bar data={language} key={i} />
						))}
					</div>
				</div>
				<div>
					<h5 className='my-3 text-2xl font-bold text-gray-800 dark:text-gray-100'>
						Herramientas & Frameworks
					</h5>
					<div className='my-2 dark:text-gray-100'>
						{tools.map((tool, i) => (
							<Bar data={tool} key={i} />
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default About;

/* export const getServicesSideProps = async (context:GetServerSidePropsContext) => {

  const res = await fetch('http://localhost:3000/api/services')
  const data = await res.json()

  console.log('SERVER', services)
  return {
    props: {
      services: data.services,
    }
  }
} */
/* export const getStaticProps = async (context:GetStaticPropsContext) => {

  const res = await fetch('http://localhost:3000/api/services')
  const data = await res.json()

  console.log('SERVER', services)
  return {
    props: {
      services: data.services,
    }
  }
} */
