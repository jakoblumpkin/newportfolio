import '../css/experience.css';
import Card from 'react-bootstrap/Card';

function Ecard(props) {
  return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title className="propYear">{props.year}</Card.Title>
          <hr className="hr"/>
            <Card.Text className="propText">
               {props.experience}    
            </Card.Text>
        </Card.Body>
      </Card>
  );
}

export default Ecard;
