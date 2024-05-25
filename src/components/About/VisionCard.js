import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function VisionCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Nuestra visión es poder realizar nuestras responsabilidades de manera satisfactoria, con el
                        fin de mejorar como equipo ya sea en el ámbito profesional como el personal, fomentando el
                        trabajo en equipo, el orden y la empatía, todo para tener un ambiente laboral confiable y
                        confortable.
                    </p>

                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default VisionCard;
