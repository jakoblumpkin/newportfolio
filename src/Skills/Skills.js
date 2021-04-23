import React from 'react';
import '../css/skills.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tools from './Tools';
import html5 from './imgIcon/html5.png';
import css from './imgIcon/css3.png';
import javaScript from './imgIcon/javascript.png';
import react from './imgIcon/react.png';
import bootstrap from './imgIcon/bootstrap.png';
import python from './imgIcon/pythonimg.png';
import php from './imgIcon/phpicon.png';
import git from './imgIcon/git.png';
import vscode from './imgIcon/vs-code.png';


function Skills() {
  
  return (
    <Col id="skillspage">
      <Row id="skillRow">
        <Col>
           <Row id="forSkillsTitle">
             <ul id="skillstag">
               <li>MY SKILLS</li>
               <li></li>
             </ul>
             <Col id="textArea">
                 <h2>What My Programming<br/> Skills Included?</h2>
                 <p>I use the tools displayed, to build creative full stack web applications.</p>
             </Col>
           </Row>
        </Col>
        <Col id="iconSection">
         <Row id="iconRow">
           <Tools link={html5} alt={"HTML5"}/>
           <Tools link={css} alt={"CSS3"}/>
           <Tools link={javaScript} alt={"javaScript"}/>
           <Tools link={react} alt={"React"}/>
           <Tools link={bootstrap} alt={"Bootstrap"}/>
           <Tools link={python} alt={"Python"}/>
           <Tools link={php} alt={"PHP"}/>
           <Tools link={git} alt={"Github"}/>
           <Tools link={vscode} alt={"VSCode"}/>
         </Row>
        </Col>
      </Row>
    </Col>
  );
}

export default Skills;