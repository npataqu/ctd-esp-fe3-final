import React from "react";
import { useState } from "react";
import Error from "./Error";


const Form = () => {

  const [error, setError] = useState({
    error: false,
    mensaje: "",
  });

  const [values, SetValue] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    SetValue({
      ...values, [name]: value,
    })
    console.log("Entre");
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (values.name.length < 5) {
      setError({
        error: true,
        mensaje: "El nombre debe tener mas de 5 caracteres"
      })
      
      return
    }
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(values.email)) {
      setError({
        error: true,
        mensaje: "El valor ingresado no es un email valido"
      })
      return
    }

  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={values.name}
          placeholder="Ingresa tu nombre"
          onChange={handleInputChange}
        >
        </input>
        <input
          type="text"
          name="email"
          value={values.email}
          placeholder="Ingresa tu correo electronico"
          onChange={handleInputChange}
        >
        </input>

        <button
          type="submit"
        >
          Enviar
        </button>
      </form>
      {error.error && <Error message={error.mensaje} />}
    </div>
  );
};

export default Form;
