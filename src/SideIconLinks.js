import React from 'react';
import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; 

function SideIconLinks() {

  /*function mouseOver(e){
    e.target.style.color="#e38443";
  }

  function mouseOut(e){
    e.target.style.color="#5f5f5f";
  }*/

  return (
    <div id="SideIconLinks">
      <ul>
        <li><a id="firstH" href="/"><FaGithub id="firstI" className="iconImage" /></a></li>
        <li><a id="secondH" href="/"><FaTwitter id="secondI" className="iconImage"/></a></li>
        <li><FaLinkedinIn className="iconImage"/></li>
        <li id="verticalLine"></li>
      </ul>
    </div>
  );
}

export default SideIconLinks;