import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Misioncard from "./MisionCard";
import VisionCard from "./VisionCard";
import laptopImg from "../../Assets/about.png";
import { ImPointRight } from "react-icons/im";


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">Mision</strong>
            </h1>
            <Misioncard />
          </Col>

          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">Vision</strong>
            </h1>
            <VisionCard />

          </Col>


        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={5}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">Valores</strong>
            </h1>
            <blockquote className="blockquote mb-0">
              <p style={{ textAlign: "justify" }}>
                <ul>
                  <li className="about-activity">
                    <ImPointRight /> <span className="purple">Innovación</span>
                  </li>
                  <li className="about-activity">
                    <ImPointRight /> <span>Transparencia</span>
                  </li>
                  <li className="about-activity">
                    <ImPointRight /> <span className="purple">Integridad</span>
                  </li>
                  <li className="about-activity">
                    <ImPointRight /> <span>Trabajo en equipo</span>
                  </li>
                  <li className="about-activity">
                    <ImPointRight /> <span className="purple">Calidad</span>
                  </li>
                  <li className="about-activity">
                    <ImPointRight /> <span>Responsabilidad</span>
                  </li>
                  <li className="about-activity">
                    <ImPointRight /> <span className="purple">Adaptabilidad</span>
                  </li>
                  <li className="about-activity">
                    <ImPointRight /> <span>Comunicación</span>
                  </li>
                </ul>
              </p>

            </blockquote>

          </Col>
        </Row>
        {/* <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack /> */}


      </Container>
    </Container>
  );
}

export default About;
