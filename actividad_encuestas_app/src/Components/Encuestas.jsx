import React from "react";
function Encuestas({ encuestas }) {
  return (
    <div>
      <h2>Encuestas Disponibles</h2>
      <ul>
        {encuestas.map((encuesta) => (
          <>
            <h3 key={encuesta.id}>{encuesta.pregunta}</h3>
            <ul>
              {encuesta.opciones.map((opcion, index) => (
                <li key={index}>{opcion}</li>
              ))}
            </ul>
          </>
        ))}
      </ul>
    </div>
  );
}
export default Encuestas;
