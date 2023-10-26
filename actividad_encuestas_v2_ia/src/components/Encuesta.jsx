import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/Encuesta.css';

const Encuesta = ({ listaEncuestas, responderEncuesta }) => {
  const { id } = useParams();
  const encuesta = listaEncuestas.find((enc) => enc.id === parseInt(id));

  return (
    <div className="encuesta-container">
      <div className="encuesta-header">
        <h2>{encuesta.titulo}</h2>
        <p>{encuesta.descripcion}</p>
      </div>

      <div className="preguntas-container">
        <h2>Preguntas</h2>
        <div>
          {!encuesta.preguntas && <p>Sin preguntas definidas.</p>}
          {encuesta.preguntas &&
            encuesta.preguntas.map((pregunta) => (
              <div key={pregunta.id} className="pregunta">
                <p>{pregunta.pregunta}</p>
                {pregunta.opciones && pregunta.opciones.length > 0 ? (
                  <ol>
                    {pregunta.opciones.map((opcion) => (
                      <li key={opcion.id}>
                        <label>
                          <li>{opcion.texto}</li>
                        </label>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p>No hay opciones disponibles.</p>
                )}
              </div>
            ))}
        </div>
      </div>
      <Link to="/" className="volver-link">Volver</Link>
    </div>
  );
};

export default Encuesta;
