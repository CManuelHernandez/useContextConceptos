import React from "react";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import { Acerca } from "./componentes/Acerca";
import { Articulos } from "./componentes/Articulos";
import { Contacto } from "./componentes/Contacto";
import { Inicio } from "./componentes/Inicio";
import { Login } from "./componentes/Login";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <header className="header">
        {/* MENU NAVEGACIÓN */}
        <nav>
          <div className="logo">
            <h2>Aprendiendo React Context</h2>
          </div>
          <ul>
            <li>
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/articulos">Articulos</NavLink>
            </li>
            <li>
              <NavLink to="/acerca-de">Acerca-de</NavLink>
            </li>
            <li>
              <NavLink to="/contacto">Contacto</NavLink>
            </li>
            <li>
              <NavLink to="/login">Identificarse</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      {/* CONFIGURAR RUTAS */}
      <section className="content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/acerca-de" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="*"
            element={
              <div>
                <h1>ERROR ESTA PAGINA NO EXISTE</h1>
              </div>
            }
          />
        </Routes>
      </section>
    </BrowserRouter>
  );
};
