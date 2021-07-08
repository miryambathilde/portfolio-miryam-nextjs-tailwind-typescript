import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";
//themeProvider - next themes
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
/* import Head from 'next/head' */
//import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps, router }) {
	return (
		<ThemeProvider attribute='class'>
			{/* //head// */}
			<div className='grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 sm:px-32 md:px-42'>
				<div className='col-span-12 p-4 text-center bg-white dark:bg-gray-700 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark'>
					<Sidebar />
				</div>
				<div className='flex flex-col col-span-12 overflow-hidden bg-white dark:bg-gray-700 lg:col-span-9 rounded-2xl shadow-custom-light dark:shadow-custom-dark'>
					<Navbar />
					{/* about */}
					<AnimatePresence exitBeforeEnter>
						<Component {...pageProps} key={router.route}  />
					</AnimatePresence>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default MyApp;
