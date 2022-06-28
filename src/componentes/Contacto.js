import React, { useContext } from "react";
import { PruebaContext } from "../context/PruebaContext";

export const Contacto = () => {
  const datoDesdeElContexto = useContext(PruebaContext);

  return (
    <div>
      <h1>Contacto</h1>
      <p>Página de Contacto</p>
      <p>
        Valor compartido: <strong>{JSON.stringify(datoDesdeElContexto)}</strong>
      </p>
    </div>
  );
};
