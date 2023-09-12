import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobal } from './utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { theme, toggleTheme } = useGlobal(); //

  // Define estilos en línea basados en el tema
  const navbarStyles = {
    background: theme.background,
    color: theme.font,
  };
  console.log(theme);
  return (
   // className={theme.type === "dark" ? "dark" : ""}
    <nav className={theme.type === "dark" ? "white" : ""} style={navbarStyles}>
        <ul>
          <li> <Link to="/">Home</Link></li>
          <li><Link  to="/contacto">Contact</Link></li>
          <li><Link to="/favs"> Favoritos</Link></li>
        </ul>

        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        
        <button className='button-navar' onClick={toggleTheme}>Change theme</button>
      </nav>
    
  )
}

export default Navbar