import React from "react";

function Contact() {
  return (
    <div className="container mt-5">
      <h2>Contacto</h2>
      <div className="col-md-6 col-lg-7">
        <form>
          <div className="row g-3">
          <div className="form-group col-sm-6">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" />
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="nombre" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="nombre" />
                </div>
                <div className="form-group col-sm-12">
                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group col-sm-12">
                    <label htmlFor="mensaje" className="form-label">Mensaje</label>
                    <textarea className="form-control" id="mensaje" rows="4"></textarea>
                </div>
                <div className="mb-3"> {/* Espacio adicional antes del botón */}
                    <button type="submit" className="w-100 btn btn-primary btn-lg">Enviar</button>
                </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
