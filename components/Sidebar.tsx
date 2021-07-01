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
        className="w-40 h-40 mx-auto rounded-md"
      />
      <h3 className="my-4 text-3xl italic font-medium font-style: font-lato">
        <span className="text-green-500">Miryam</span>
        <br />
        Bathilde
        <span className="text-green-500"> Crevillen</span>
      </h3>
     
      <p className="px-2 py-1 my-3 bg-blue-200 rounded-full">
        Desarrolladora FullStack
      </p>
      {/* introducir el enlace al cv */}

      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-green-200 rounded-full"
        href="#"
        download="name"
      >
        <FaCloudDownloadAlt className="w-12 h-5 cursor-pointer" />
        Descargar CV
      </a>

      {/* //social icons */}

      <div className="flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full">
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
      <div
        className="py-4 my-5 bg-gradient-to-r from-green-200 via-blue-100 to-blue-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation className="h-5" />
          <span>Sevilla, España</span>
        </div>
        <p className="my-2">mbathilde@gmail.com</p>
        <p className="my-2">+34 664 405 691</p>
      </div>
      
      {/* email button */}
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-500 focus:outline-none"
        onClick={() => window.open("mailto:mbathilde@gmail.com")}
      >
        Enviar email
      </button>
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-500">
        Modo oscuro
      </button>
    </div>
  );
};

export default Sidebar;
