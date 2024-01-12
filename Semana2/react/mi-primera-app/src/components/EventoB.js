import React from "react";
import "../styles/Evento.css";
function EventoB(props) {
  return (
    <div className="card-container">

      <img className="card-image"
        src={require(`../images/${props.image}.jpg`)}
        alt="Foto del evento" />


      <div className="card-content">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-date">{props.dateLiteral}</p>
        <p className="card-place">{props.placeLiteral}</p>
        <p className="card-description">{props.description}</p>
        <div className="icons-web">
          <figure>
            <img className="image-web"
              src={require(`../images/${props.image0}.svg`)}
              alt="facebook" />
          </figure>
          <figure>
            <img className="image-web"
              src={require(`../images/${props.image1}.svg`)}
              alt="YouTube" />
          </figure>
          <figure>
            <img className="image-web"
              src={require(`../images/${props.image2}.svg`)}
              alt="X" />
          </figure>

        </div>
      </div>
    </div>
  );
}

export default EventoB;
