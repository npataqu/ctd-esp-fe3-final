import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';

const Detail = () => {

  const [card, setCard] = useState([]);
  const { id } = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${id}`
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCard(data)
      })
      .catch((error) => {
        console.error("Error al consultar odontologo")
      })
  }, [url])


  return (
    <>
      <h1>Detail Dentist id </h1>
      <h2>{card.name}</h2>
      <h3>{card.website}</h3>
      <h4>{card.email}</h4>
      <p>{card.phone}</p>
       
    </>
  )
}

export default Detail