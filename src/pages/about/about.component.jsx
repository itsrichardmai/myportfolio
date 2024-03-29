import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import "./about.style.css";
import Logo from "../../assets/img/profile/profile.webp";
import Button from "react-bootstrap/Button";
import Pennovation from "../../assets/img/pennovation/pennovation.webp";

const About = () => {
    return (
      <div id="about">
        <div className="about">
          <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
          <Container>
            <Row className="pt-3 pb-5 align-items-center">
              <Col xs={12} md={6}>
                <Row className="justify-content-center mb-2 mr-2 ">
                  <Image className="profile justify-content-end" style={{width:"100%;", height:"200px"}}alt="profile"src={Logo} thumbnail fluid/>
                  <Image className="profile justify-content-end" style={{width:"200px;", height:"200px"}}alt="profile"src={Pennovation} thumbnail fluid/>
                </Row>
              </Col>
              <Col xs={12} md={6}>
                <Row className=" align-items-start p-2 my-details rounded">
                  Hi there! I am <strong>&nbsp;Richard Mai</strong>
                  <br/> A Proud Central High School Alumni, Philadelphian, Passionate Programmer & Marketer.
                  I believe that we, no matter our titles or situations, are and will forever be students. 
                  Especially so in the rapidly growing field of technology! 
                  I completed the University of Pennsylvannia's Coding Bootcamp in 2019 and majored in Business and Math! 
                  In total, I have been a developer for two years.
                  <br/>
                  <br/>
                  <strong> Never Stop Learning</strong>
                  <br/>
                  <Col className="d-flex justify-content-center flex-wrap">
                    <div>
                      <a href="#contact">
                        <Button className="m-2" variant="outline-primary">
                          Let's talk
                        </Button>
                      </a>
                    </div>
                    <div>
                      <a href="https://drive.google.com/file/d/1ZThhGFnRgIRRMlWQ3t_SGY8tf0jjZ3N_/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-success">
                          My Resume
                        </Button>
                      </a>
                    </div>
                    <div>
                      <a href="https://github.com/itsrichardmai" target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-dark">
                          GitHub
                        </Button>
                      </a>
                    </div>
                    <div>
                      <a href="https://www.linkedin.com/in/richard-mai-478033174/" target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-info">
                          LinkedIn
                        </Button>
                      </a>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  };
  
  export default About;