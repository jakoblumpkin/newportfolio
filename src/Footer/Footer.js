import Row from 'react-bootstrap/Row';
import '../css/footer.css';
import { FaSquareFull } from "react-icons/fa";

function Footer() {
  return (
   <Row id="FooterSection">
      <div id="Fname"><h1>jakobsPortfolio</h1><FaSquareFull id="FsquareName"/></div>

      
      <div id="theSign">
        <h2>Developed by: </h2>
        <p>Jakob Lumpkin</p>
      </div>
   </Row>
  );
}

export default Footer;
