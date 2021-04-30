import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/work.css';
import ProjectCard from './ProjectCard';

function Work() {
  return (
  <Row id="workSection">
    <ul id="workTag">
          <li>MY WORKS</li>
          <li></li>
        </ul>
    <Col id="workText">
      <h2>See The Projects <br/> I have built.</h2>
      <p>I build full stack responsive web applications, using frontend and
        backend programming languages and frameworks.
      </p>
    </Col>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
  </Row>
  );
}

export default Work;
