import React from 'react';
import '../css/skills.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tools from './Tools';

function Skills() {

  return (
    <Col id="skillspage">
      <Row id="skillRow">
        <Col>
           <Row>
             <ul id="skillstag">
               <li>MY SKILLS</li>
               <li></li>
             </ul>
             <Col id="textArea">
                 <h2>What My Programming<br/> Skills Included?</h2>
                 <p>I build full stack web applications, using the languages and frameworks displayed.</p>
             </Col>
           </Row>
        </Col>
        <Col>
         <Row id="iconRow">
           <Tools/>

         </Row>
        </Col>
      </Row>
    </Col>
  );
}

export default Skills;