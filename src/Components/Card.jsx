import React from "react";
import { Link } from "react-router-dom";

const Card = ({ odontologo }) => {

  const guardarLocalStorage = (clave, valor) => {

    localStorage.setItem(clave, JSON.stringify(valor))
 
    return `Ha sido guardado`
  }

  const consultarLocalStorage = () => {

    const listaDeCards = [];
    const data = JSON.parse(localStorage.getItem("card"));

    if (data != null) {
      data.map((element) => {
        listaDeCards.push(element)
      }
      )
    }
    return listaDeCards;
  }

  const addFav = () => {

    const listaDeCards = consultarLocalStorage();
    listaDeCards.push(odontologo);
  
  const  mensaje = guardarLocalStorage("card", listaDeCards);
  
    alert(`El odontologo ${odontologo.name}` + " "+ mensaje )
  }
    return (
  
      <div className="card">
        <img className="imagen-odontologo" src="./images/doctor.jpg" alt='Logo Doctor' />
        <p>{odontologo.name}</p>
        <p>{odontologo.id}</p>
        <p>{odontologo.username}</p>
        <Link to={`/dentist/${odontologo.id}`}>Detalle</Link>
        <button onClick={addFav} className="favButton">Add fav</button>
      </div>
    );
};

export default Card;
