import Row from 'react-bootstrap/Row';
import '../css/experience.css';
import Col from 'react-bootstrap/Col';
import Ecard from './Card';

function Experience() {
  return (
    <Row id="Experience">
      <Col id="eCol">
         <Row id="Years">
          <Ecard year="2020" experience="
          I started learning to code in July, by following online tutorials. 
          Then started building small projects with the skills I gained.
          "/>
          <Ecard year="2021" experience="
          I attended coding bootcamp at Code Fellows from January to April.
           I gained a deeper understanding of web development. Then I got 
           accepted to attend a software development apprenticeship at IBM.
          "/>
         </Row>
      </Col>
      <Col id="tCol">
         <ul id="experienceTag">
           <li>EXPERIENCE</li>
           <li></li>
         </ul>
         <Col id="etextArea">
            <h2>1+ Years of Experience!</h2>
            <p>
              I have been building projects, off of the skills 
              I have learned within the past year. Seeking knowledge 
              of the full web stack, including converting a design to
               code, learning the foundations, learning how to 
               communicate with the backend and doing many code challenges.
            </p>
         
         </Col>    
      </Col>
    </Row>
  );
}

export default Experience;
