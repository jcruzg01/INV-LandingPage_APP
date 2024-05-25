import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function MisionCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            El objetivo como integrantes del equipo <span className="purple">Innovatica</span>  es brindar soluciones <span className="purple">innovadoras</span> a cada
            <span className="purple"> problema y necesidad planteados por nuestros clientes.</span>
            <br />
            Siempre buscando el <span className="purple">compromiso</span> y el <span className="purple">apoyo</span> 
            de cada uno de los miembros del equipo, para que los productos desarrollados por el equipo presenten la mayor 
            <span className="purple">calidad, seguridad y usabilidad </span> 
            que nuestras habilidades nos lo permitan, siempre manteniendo un ambiente
            laboral sano para realizar nuestras tareas con el objetivo antes planteado. <span className="purple"> Todo para que
            nuestros clientes queden a gusto con el trabajo realizado.</span>
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default MisionCard;
