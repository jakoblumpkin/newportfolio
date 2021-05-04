import '../css/form.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TheForm from './theForm';

function FormSection() {
  return (
    <Row id="formSection">
      <ul id="formTag">
          <li>CONTACT</li>
          <li></li>
       </ul> 
      <Col id="formText">
        <h2>Please Send a Message</h2>
        <p>Get in touch and let me know how i can help yout. 
          Fill out the form and i’ll be in touch as soon as possible.</p>
       </Col>
       <TheForm/>
    </Row>
  );
}

export default FormSection;
