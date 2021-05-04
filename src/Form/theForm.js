import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function TheForm() {
  return (
    <Form id="formforMessage">
      <Col>
          <Form.Group className="theGroup">
            <Form.Label className="textEdit">Name</Form.Label>
            <Form.Control 
              type="text"
              name="name"
              placeholder="e.g. John Doe"/>
          </Form.Group>

          <Form.Group className="theGroup">
            <Form.Label className="textEdit">Email</Form.Label>
            <Form.Control 
              type="text"
              name="email"
              placeholder="e.g. john.doe@gmail.com"/>
          </Form.Group>

          <Form.Group className="theGroup">
            <Form.Label className="textEdit">Phone (Optional)</Form.Label>
            <Form.Control 
              type="text"
              name="phone"
              placeholder="Phone Number"/>
          </Form.Group>

          <Form.Group className="theGroup">
            <Form.Label className="textEdit">Message</Form.Label>
            <Form.Control
              as="textarea"
              id="messageSection"
              type="text"
              name="message"
              placeholder="Write message..."/>
          </Form.Group>

          <Button>SEND</Button>
      </Col>
    </Form>
  );
}

export default TheForm;
