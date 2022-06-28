import { useState } from "react";
import "./App.css";
import { PruebaContext } from "./context/PruebaContext";
import { AppRouter } from "./routing/AppRouter";

function App() {
  const [usuario, setUsuario] = useState({
    nick: "ManH",
    nombre: "Manuel",
    web: "portafolio.es",
  });

  const curso = {
    id: 1,
    titulo: "Master en React",
    contenido: "Muchas horas de contenido...",
  };

  return (
    <div className="App">
      <PruebaContext.Provider value={{ usuario, setUsuario }}>
        <AppRouter />
      </PruebaContext.Provider>
    </div>
  );
}

export default App;
