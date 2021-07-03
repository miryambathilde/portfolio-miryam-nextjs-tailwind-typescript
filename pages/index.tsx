import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import React from "react";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

const index = () => {
	return (
		<div className='flex flex-col flex-grow px-6 pt-1 dark:bg-gray-700 dark:text-gray-200'>
			<h5 className='my-3 font-medium'>
				Soy Miryam, desarrolladora FullStack, apasionada y amante del diseño y
				la maquetación web.
				<br />
				Recientemente he terminado mis estudios de Full Stack Developer y,
				durante mis estudios, he ido desarrollando aplicaciones y páginas web
				para poner en práctica todos los conocimientos adquiridos.
			</h5>
			<div></div>
			<div
				className='flex-grow p-4 mt-5 bg-gray-300 dark:bg-gray-700 '
				style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}>
				<h6 className='my-3 text-xl font-bold dark:text-gray-100'>Servicios</h6>
				<div className='grid gap-6 lg:grid-cols-1'>
					{services.map((service) => (
						<div className='bg-gray-100 lg:col-span-1 rounded-xl dark:bg-gray-600 dark:text-gray-100'>
							<ServiceCard service={service} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default index;

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
