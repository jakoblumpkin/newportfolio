import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_HbXSwUrhvxqgOmDqO82UD");
import { FaUserAlt } from 'react-icons/fa';
import InputGroup from 'react-bootstrap/InputGroup';

function TheForm() {
  const sendemail = (e) => {
    e.preventDefault();
    var objP={
      name: e.target[0].value,
      email: e.target[1].value,
      phone: e.target[2].value,
      message: e.target[3].value
    }
    
    console.log(e.target[0]);
    emailjs.send('service_9r8qakp', 'contact_form', objP)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      //empty the value
      e.target[0].value="";
      e.target[1].value="";
      e.target[2].value="";
      e.target[3].value="";
  }
  return (
    <Form id="formforMessage" onSubmit={sendemail}>
      <Col>
          <Form.Group className="theGroup">
            <Form.Label className="textEdit">Name</Form.Label>
            <Form.Control
               <InputGroup.Prepend>
               <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
               </InputGroup.Prepend>
              type="text"
              name="name"
              placeholder="e.g. John Doe" required/>
          </Form.Group>

          <Form.Group className="theGroup">
            <Form.Label className="textEdit">Email</Form.Label>
            <Form.Control 
              type="text"
              name="email"
              placeholder="e.g. john.doe@gmail.com" required/>
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
              placeholder="Write message..." required/>
          </Form.Group>

          <Button type="submit">SEND</Button>
      </Col>
    </Form>
  );
}

export default TheForm;
