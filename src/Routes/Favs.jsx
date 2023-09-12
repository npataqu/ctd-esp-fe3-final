import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useState } from "react";
import { useGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Favs = () => {

  const { theme } = useGlobal();
  const favsStyles = {
    background: theme.background,
    color: theme.font,
  };

  const [cardFav, setCardFav] = useState([]);
const getLocalStorage = () => {
  try {

  const data = JSON.parse(window.localStorage.getItem("card"));
   
    if (Array.isArray(data)) {
       return data;
     
     } else {
       return [];
     }
    return data;
  } catch (error) {
    console.error("Error parsing local storage data:", error);
    return [];
  }
};
useEffect(() => {
  const datosStorage = getLocalStorage();
  setCardFav(datosStorage);

},[]);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid" style={favsStyles}>
        {cardFav.map((card)=>(
          <Card odontologo={card} key={card.id}/>
        ))}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
