import { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavItem: FunctionComponent<{
	activeItem: string;
	setActiveItem: Function;
	name: string;
	route: string;
}> = ({ activeItem, name, route, setActiveItem }) => {
	return activeItem !== name ? (
		<Link href={route}>
			<a>
				<span onClick={() => setActiveItem(name)} className="hover:text-green-400">{name}</span>
			</a>
		</Link>
	) : null;
};

const Navbar = () => {
	const [activeItem, setActiveItem] = useState<string>("");

	/* rutas */
	const { pathname } = useRouter();

	useEffect(() => {
		if (pathname === "/") setActiveItem("Sobre mí");
		if (pathname === "/projects") setActiveItem("Proyectos");
		if (pathname === "/resume") setActiveItem("Experiencia");
	}, []);
	return (
		<div className="flex justify-between px-5 py-3 my-3">
			<span className='font-bold text-green-500 border-green-600 text-xl border-b-4 md:text-2xl'>{activeItem}</span>
			<div className='flex space-x-5 text-gray-600 text-lg'>
				<NavItem
					activeItem={activeItem}
					setActiveItem={setActiveItem}
					name='Sobre mí'
					route='/'
				/>
				<NavItem
					activeItem={activeItem}
					setActiveItem={setActiveItem}
					name='Proyectos'
					route='/projects'
				/>
				<NavItem
					activeItem={activeItem}
					setActiveItem={setActiveItem}
					name='Experiencia'
					route='/resume'
				/>
			</div>
		</div>
	);
};

export default Navbar;