import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiSqllite,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        Redux
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
         Node js
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        React
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        Python
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        DSA
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Express
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
         Mongodb
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Angular
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Java
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       SQL
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       Testing
      </Col>
    </Row>
    
  );
}

export default Techstack;
