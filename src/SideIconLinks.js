import React from 'react';
import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import PopoverSection from './PopoverSection';

function SideIconLinks() {

  window.onload = function() {
    const firstOne=document.getElementById("firstH");
    const secondOne=document.getElementById("secondH");
    const thirdOne=document.getElementById("thirdH");

    //first
    function firstQuote(){
      let GIcon=document.getElementById("GithubPop");
      GIcon.style.animationName="IconAima";
      GIcon.style.animationDuration="1s";
      GIcon.style.animationFillMode="forwards";

    }
    function firstQuoteOut(){
      let GIcon=document.getElementById("GithubPop");
      GIcon.style.animationName="";
      GIcon.style.animationDuration="";
      GIcon.style.animationFillMode="";
      GIcon.style.opacity=0;
    }
    if(firstOne){
        firstOne.addEventListener("mouseover", firstQuote);
        firstOne.addEventListener("mouseout", firstQuoteOut);
    }

    //second
    function secondQuote(){
      let TIcon=document.getElementById("TwitterPop");
      TIcon.style.animationName="IconAima";
      TIcon.style.animationDuration="1s";
      TIcon.style.animationFillMode="forwards";
    }
    function secondQuoteOut(){
      let TIcon=document.getElementById("TwitterPop");
      TIcon.style.animationName="";
      TIcon.style.animationDuration="";
      TIcon.style.animationFillMode="";
      TIcon.style.opacity=0;
    }
    if(secondOne){
      secondOne.addEventListener("mouseover", secondQuote);
      secondOne.addEventListener("mouseout", secondQuoteOut);
    }

    //third
    function thirdQuote(){
      let LIcon=document.getElementById("LinkedinPop");
      LIcon.style.animationName="IconAima";
      LIcon.style.animationDuration="1s";
      LIcon.style.animationFillMode="forwards";
    }
    function thirdQuoteOut(){
      let LIcon=document.getElementById("LinkedinPop");
      LIcon.style.animationName="";
      LIcon.style.animationDuration="";
      LIcon.style.animationFillMode="";
      LIcon.style.opacity=0;
    }
    if(thirdOne){
        thirdOne.addEventListener("mouseover", thirdQuote);
        thirdOne.addEventListener("mouseout", thirdQuoteOut);
    }
   }



  return (
    <div id="SideIconLinks">
      <div id="GithubPop"><PopoverSection name="GITHUB"/></div>
      <div id="TwitterPop"><PopoverSection name="TWITTER"/></div>
      <div id="LinkedinPop"><PopoverSection id="LinkedinPop" name="LINKEDIN"/></div>
      <ul>
        <li><a id="firstH" target="_blank" rel="noreferrer" href="http://github.com/jakoblumpkin"><FaGithub id="firstI" className="iconImage" /></a></li>
        <li><a id="secondH" target="_blank" rel="noreferrer" href="http://twitter.com/jakob_lumpkin"><FaTwitter id="secondI" className="iconImage"/></a></li>
        <li><a id="thirdH" target="_blank" rel="noreferrer" href="http://www.linkedin.com/in/jakob-lumpkin-541541184/"><FaLinkedinIn id="thirdI" className="iconImage"/></a></li>
        <li id="verticalLine"></li>
      </ul>
    </div>
  );
}

export default SideIconLinks;