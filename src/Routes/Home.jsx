import React from 'react'
import Card from '../Components/Card'
import { useState, useEffect } from "react";
import { useGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { theme } = useGlobal();

  const homeStyles = {
    background: theme.background,
    color: theme.font,
  }; 
  const [odontologos, setOdontolos] = useState([]);
 
    useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setOdontolos(data);
      })
      .catch((error) => {
        console.error("Error al obtener información")
      });
  }, []);

  return (
    <main  style={homeStyles}>
      <h1>Home</h1>
      <div className='card-grid'>
        {odontologos.map((odontologo) => (
        <Card odontologo={odontologo} key={odontologo.id} />
        ))}
      </div>
    </main>
  )
}

export default Home