import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';

function AlertCard() {

  return (
      <Alert id="theAlert">
        <Row>
          <p>
            Message sent successful!
          </p>
        </Row>
      </Alert>
  );
}

export default AlertCard;
