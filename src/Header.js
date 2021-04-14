import './App.css';
import './css/nav.css';
import { FaSquareFull } from "react-icons/fa";

function Header() {

  return (
  <>
    <header id="nav-bar">
        <div id="name"><h1>jakobsPortfolio</h1><FaSquareFull id="squareName"/></div>
        <ul>
          <a href="/"><li>Home<FaSquareFull className="squareNav"/></li></a>
          <a href="/"><li>About<FaSquareFull className="squareNav"/></li></a>
          <a href="/"><li>Skills<FaSquareFull className="squareNav"/></li></a>
          <a href="/"><li>Projects<FaSquareFull className="squareNav"/></li></a>
          <a href="/"><li>Contact<FaSquareFull className="squareNav"/></li></a>
        </ul>
    </header>
  </>
  );
}

export default Header;