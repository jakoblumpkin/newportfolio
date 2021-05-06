import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_HbXSwUrhvxqgOmDqO82UD");

function TheForm(props) {
  const sendemail = (e) => {
    e.preventDefault();
    var alertElement=document.getElementById("theAlert");

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
      
      if(alertElement){
        alertElement.style.animationName="messageSent";
        alertElement.style.animationDuration="2s";
      }
  }

  const theMouse = () => {
    var alertElement=document.getElementById("theAlert");
    alertElement.style.animationName="";
    alertElement.style.animationDuration="";
  }
  return (
    <Form id="formforMessage" onSubmit={sendemail}>
      <Col>
          <Form.Group className="theGroup">
            <Form.Label className="textEdit">Name</Form.Label>
            <Form.Control
              className="borderStyle"
              as="input"
              name="name"
              placeholder="e.g. John Doe" required/>
          </Form.Group>

          <Form.Group className="theGroup">
            <Form.Label className="textEdit">Email</Form.Label>
            <Form.Control
              className="borderStyle"
              type="text"
              name="email"
              placeholder="e.g. john.doe@gmail.com" required/>
          </Form.Group>

          <Form.Group className="theGroup">
            <Form.Label className="textEdit">Phone (Optional)</Form.Label>
            <Form.Control
              className="borderStyle"
              type="text"
              name="phone"
              placeholder="Phone Number"/>
          </Form.Group>

          <Form.Group className="theGroup">
            <Form.Label className="textEdit">Message</Form.Label>
            <Form.Control
              className="borderStyle"
              as="textarea"
              id="messageSection"
              type="text"
              name="message"
              placeholder="Write message..." required/>
          </Form.Group>

          <Button type="submit" onMouseEnter={theMouse}>SEND</Button>
      </Col>
    </Form>
  );
}

export default TheForm;
