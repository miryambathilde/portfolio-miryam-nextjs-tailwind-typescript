import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineDownload,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
        alt="user avatar"
        //className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span>Miryam</span>
        <br />
        Bathilde
        <span> Crevillen</span>
      </h3>
      {/* //color gris? // */}
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
        Desarrolladora FullStack
      </p>
      {/* introducir el enlace al cv */}
      {/* //color gris? // */}
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
        href="#"
        download="name"
      >
        <FaCloudDownloadAlt className="w-12 h-5 cursor-pointer" />
        Descargar CV
      </a>

      {/* //social icons */}
      {/* color rosa? */}
      <div className="flex justify-around my-5 text-green-400 w-9/12 md:w-full mx-auto">
        <a href="https://github.com/miryambathilde" target="blank">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/miryambathildecrevillen/"
          target="blank"
        >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* address */}
      {/* COLOR GRIS? */}
      <div className="my-5 py-4 bg-gray-200" style={{marginLeft: '-1rem', marginRight: '-1rem'}}>
        <div className="flex items-center justify-center space-x-2">
          <GoLocation className="h-5" />
          <span>Sevilla, España</span>
        </div>
        <p className='my-2'>mbathilde@gmail.com</p>
        <p className='my-2'>+34 664 405 691</p>
      </div>
      {/* email button */}
      <button className="bg-gradient-to-r from-green-400 to-blue-500  w-8/12 rounded-full py-2 px-5 text-white my-2" >Contactar por email</button>
      <button className="bg-gradient-to-r from-green-400 to-blue-500  w-8/12 rounded-full py-2 px-5 text-white my-2" >Cambiar el tema</button>
    </div>
  );
};

export default Sidebar;
