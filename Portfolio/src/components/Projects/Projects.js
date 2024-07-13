import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Real Estate Booking"
              description="Developed a MongoDB database schema for storing real estate-related data including property details,
              user information, and transactions."
              ghLink="https://github.com/NainaParashar/FULL-STACK-REAL-ESTATE"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

        

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="AeroSite"
              description="Flight Ticket Booking Site developed by following MVC Architecture.Used Nodejs, Express.js, Ejs, Mongodb "
              ghLink="https://github.com/NainaParashar/AERO_SITE"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="ShopeDone Website "
              description="developed by React, Redux, Javascript."
              ghLink="https://github.com/NainaParashar/Myntra_Redux_React"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="TemplateDesign"
              description="Provides Interactive Responsive Template Designs for your website. Used HTML, CSS, Javascript."
              ghLink="https://github.com/NainaParashar/InteractiveWebTemplates_Website"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Chatify"
              description="Have chat with your people using chatify. Developed using React js"
              ghLink="https://github.com/NainaParashar/tele_clone1"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
