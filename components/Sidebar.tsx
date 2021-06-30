const Sidebar = () => {
  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
        alt="user avatar"
      />
      <h3>
        <span>Miryam</span>
        Bathilde
        <span>Crevillen</span>
      </h3>
      <p>Desarrolladora Web</p>
      <p>Descargar CV</p>

      {/* //social icons */}

      {/* address */}
      <div>
        <div>
          <span>Sevilla, España</span>
        </div>
        <p>mbathilde@gmail.com</p>
        <p>+34 664 405 691</p>
      </div>
      {/* email button */}
      <button>Contactar por email</button>
      <button>Cambiar el tema</button>

    </div>
  );
};

export default Sidebar;
