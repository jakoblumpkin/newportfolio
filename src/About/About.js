import React from 'react';
import '../css/about.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function About() {

  return (
    <section id="about">
      <Row id="row33">
        <Col id="splashS">
          <div id="splashPhoto">
            <div>

            </div>
          </div>
        </Col>
        <ul id="middle">
             <li>ABOUT ME</li>
             <li></li>
        </ul>
        <Col id="aboutText">
           <h2>Need a Creative Product?<br/> I can Help you</h2>
           <p>Hey my name is Jakob Lumpkin, I'm a full stack web developer 
             with a passion for building things. I'm always curious 
             to learn new skills rather it's languages, frameworks or other 
             knowledge to enhance my skills. I attended a coding bootcamp 
             and prior to the boot camp I was teaching myself how to code.
              I have worked with creative teams to build web applications, 
             which includes communication and daily stand ups.</p>
            <a href="/"><Button variant="primary" id="hireButton">HIRE ME</Button></a>
        </Col>
      </Row>
      
    </section>
  );
}

export default About;