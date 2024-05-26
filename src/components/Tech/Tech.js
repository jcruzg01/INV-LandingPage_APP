import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";


function Tech() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    Hablidades <strong className="purple">Profesionales </strong>
                </h1>

                <Techstack />

                <h1 className="project-heading">
                    <strong className="purple">Herramientas</strong> que Usamos
                </h1>
                <Toolstack />

            </Container>
        </Container>
    )
}

export default Tech;