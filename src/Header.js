import './App.css';
import './css/nav.css';
import { FaSquareFull } from "react-icons/fa";

function Header() {
  setInterval(function(){
    var navBarforBG=document.getElementById("nav-bar");
    if(navBarforBG){
      if(window.scrollY>0){
        navBarforBG.style.backgroundColor="white";
      }else{
        navBarforBG.style.backgroundColor="transparent";
      }
    }
   }, 1);

   var prevScrollpos = window.pageYOffset;
   window.onscroll = function() {
   var currentScrollPos = window.pageYOffset;
   if (prevScrollpos > currentScrollPos) {
      document.getElementById("nav-bar").style.top = "0";
   }else{
      document.getElementById("nav-bar").style.top = "-400px";
    }
      prevScrollpos = currentScrollPos;
    }

  return (
  <>
    <header id="nav-bar">
        <div id="name"><h1>jakobsPortfolio</h1><FaSquareFull id="squareName"/></div>
        <ul id="navForA">
          <a href="/"><li>Home<FaSquareFull className="squareNav"/></li></a>
          <a href="#about" ><li>About<FaSquareFull className="squareNav"/></li></a>
          <a href="/"><li>Skills<FaSquareFull className="squareNav"/></li></a>
          <a href="/"><li>Projects<FaSquareFull className="squareNav"/></li></a>
          <a href="/"><li>Contact<FaSquareFull className="squareNav"/></li></a>
        </ul>
    </header>
  </>
  );
}

export default Header;