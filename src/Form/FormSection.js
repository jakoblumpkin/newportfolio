import '../css/form.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TheForm from './theForm';
import AlertCard from './Alert';
import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function FormSection() {
  let alertShow=false;

  const alertFunction = () => {
     console.log('alertFunction');
     alertShow=true;
  }

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
          <ul id="formIcons">
             <li class="eachIcon"><a target="_blank" rel="noreferrer" href="https://github.com/jakoblumpkin"><FaGithub /></a></li>
             <li class="eachIcon"><a target="_blank" rel="noreferrer" href="https://twitter.com/jakob_lumpkin"><FaTwitter /></a></li>
             <li class="eachIcon"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jakob-lumpkin-541541184"><FaLinkedinIn/></a></li>
          </ul>
       </Col>
       <TheForm alert={alertFunction}/>
       <AlertCard alertShow={alertShow}/>
    </Row>
  );
}

export default FormSection;
