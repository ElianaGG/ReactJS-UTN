import React from 'react';

function Footer() {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <div className="container">
                &copy; {new Date().getFullYear()} Perfil de Usuario - Todos los derechos reservados
            </div>
        </footer>
    );
}

export default Footer;
