import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Menu.css'; // Importa el archivo CSS para estilos

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu-list">
        <li className="menu-item">
          <Link to="/" className="menu-link">Inicio</Link>
        </li>
        <li className="menu-item">
          <Link to="/encuesta/crear" className="menu-link">Crear Encuesta</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
