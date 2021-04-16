import '../css/welcomepage.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function Links() {
  return (
    <section id="LinksS">
      <Container id="theContainer">
      <Row id="CardRow">
          <Card id="ExperenceCard">
              <Card.Text>
                Hello
              </Card.Text>
          </Card>
          <Card id="ProjectCard">
              <Card.Text>
                Hello
              </Card.Text>
          </Card>
        </Row>
      </Container>  
    </section>
  );
}

export default Links;
