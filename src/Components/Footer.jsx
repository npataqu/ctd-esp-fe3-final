import React from 'react'
import { useGlobal } from './utils/global.context';

const Footer = () => {

  const { theme } = useGlobal();

  // Define estilos en línea basados en el tema para el Footer
  const footerStyles = {
    background: theme.background,
    color: theme.font,
  };

  return (
    <footer style={footerStyles}>
        <p>Powered by</p>
        <img  src="./images/DH.png" alt='Logo-dh' />
        <img className="icono" src="./images/ico-facebook.png" alt='logo-facebook'/>
        <img className="icono" src="./images/ico-instagram.png" alt='instagram'/>
        <img className="icono" src="./images/ico-tiktok.png" alt='logo-tiktok'/>
        <img className="icono" src="./images/ico-whatsapp.png" alt='logo-whatsapp'/>
    </footer>
  )
}

export default Footer
