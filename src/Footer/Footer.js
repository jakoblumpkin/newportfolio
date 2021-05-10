import Row from 'react-bootstrap/Row';
import '../css/footer.css';
import { FaSquareFull } from "react-icons/fa";

function Footer() {
  /*var prevScrollpos = window.pageYOffset;
   window.onscroll = function() {
   var currentScrollPos = window.pageYOffset;
   if (prevScrollpos > currentScrollPos) {
      document.getElementById("FooterSection").style.top = "0";
   }else{
      document.getElementById("FooterSection").style.top = "-400px";
    }
      prevScrollpos = currentScrollPos;
    }*/
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
