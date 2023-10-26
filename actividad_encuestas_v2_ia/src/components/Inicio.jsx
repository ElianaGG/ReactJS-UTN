import React from "react";
import { Link } from "react-router-dom";
import '../styles/Inicio.css'; // Importa el archivo CSS para estilos

const Inicio = ({ listaEncuestas }) => {
  return (
    <div className="inicio-container">
      <h1>Lista de Encuestas Disponibles</h1>
      <div className="encuestas-list">
        {listaEncuestas.map((encuesta) => (
          <div className="encuesta-item" key={encuesta.id}>
            <h2>{encuesta.titulo}</h2>
            <p>{encuesta.descripcion}</p>
            <Link to={`/encuesta/${encuesta.id}`} className="ver-encuesta-link">
              Ver Encuesta
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inicio;
