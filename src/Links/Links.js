import '../css/welcomepage.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { IoChevronForwardOutline } from "react-icons/io5";
import newe from './img/newe.png';
import newCheck from './img/newCheck.png';


function Links() {
  return (
    <section id="LinksS">
      <Container id="theContainer">
           <Row id="CardRow">
            <Card id="ExperenceCard">
      <a href="/"><div className="insideCard">
                <div id="backgroundEmblem">
                    <img src={newe} height="50px" alt="dwdr3rr"/>
                </div>
                <div className="rightExperience">
                  <h2>1+</h2>
                  <p>Years of Experience</p>
                </div>
                <IoChevronForwardOutline className="arrowIcon"/>
              </div></a>
          </Card>
          <Card id="ProjectCard">
           <a href="/"><div className="insideCard">
              <div id="backgroundCheck">
                  <img src={newCheck} alt="dwd"/>
              </div>
              <div className="rightExperience">
                  <h2>1+</h2>
                  <p>Completed Projects</p>
                </div>
                <IoChevronForwardOutline className="arrowIcon"/>
            </div></a>
          </Card>
        </Row>
      </Container>  
    </section>
  );
}

export default Links;
