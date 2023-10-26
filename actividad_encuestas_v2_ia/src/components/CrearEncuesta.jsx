import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '../styles/CrearEncuesta.css'; // Importa el archivo CSS para estilos

const CrearEncuesta = ({ agregarEncuesta }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    agregarEncuesta(data);
    navigate('/');
  };

  return (
    <div className="crear-encuesta-container">
      <h1>Crear Nueva Encuesta</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Título:</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            {...register("titulo", {
              required: 'Este campo es obligatorio',
              maxLength: { value: 50, message: 'El título debe tener menos de 50 caracteres' }
            })}
          />
          {errors.titulo && <p className="error-message">{errors.titulo.message}</p>}
        </div>

        <div className="form-group">
          <label>Descripción:</label>
          <textarea
            id="descripcion"
            name="descripcion"
            {...register("descripcion", {
              maxLength: { value: 200, message: 'La descripción debe tener menos de 200 caracteres' }
            })}
          />
          {errors.descripcion && <p className="error-message">{errors.descripcion.message}</p>}
        </div>

        {/* Agrega aquí campos adicionales y sus validaciones según sea necesario */}

        <button type="submit" className="submit-button">Guardar Encuesta</button>
      </form>
    </div>
  );
};

export default CrearEncuesta;
