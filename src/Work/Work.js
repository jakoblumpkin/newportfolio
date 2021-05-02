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
        <ProjectCard project="https://nervous-heyrovsky-290926.netlify.app"
                    code="https://github.com/jakoblumpkin/newportfolio"
                    Tech="https://github.com/jakoblumpkin/newportfolio/blob/main/README.md"/>
        <ProjectCard project="/"
                    code="/"/>
        <ProjectCard project="/"
                    code="/"/>
  </Row>
  );
}

export default Work;
