import React from 'react';
import '../css/skills.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function Tools(props) {
  /*const thePop=document.getElementsByClassName("colPop");
  console.log(thePop);
  
  function mouseover (){
    console.log("mouseoverPop");
  }

  function mouseOut (){
    console.log("mouseoutPop");
  }
  
  if(thePop){
    thePop.addEventListener("mouseover", mouseover);
    thePop.addEventListener("mouseout", mouseOut);
  }*/
   
  return (
    <>
    <Col className="colPop" id="forHover">
    <h2>{props.alt}</h2>
      <Card className="toolCard">
          <img src={props.link} height="60px" width="60px"alt={props.alt}/>
      </Card>
    </Col>
    </>
  );
}

export default Tools;