import React, { useContext } from "react";
import { PruebaContext } from "../context/PruebaContext";

export const Inicio = () => {
  const { usuario, setUsuario } = useContext(PruebaContext);

  return (
    <div>
      <h1>Inicio</h1>
      <p>Página de Inicio</p>
      {/* <p>
        Valor compartido: <strong>{compartida.titulo}</strong>
      </p> */}
      <p>Nombre: {usuario.nombre}</p>
      <p>Web: {usuario.web}</p>
    </div>
  );
};
