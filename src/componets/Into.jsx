import React from 'react';
import "/Users/davidjeffers/Desktop/Portfolio/portfolio/src/App.css";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import Porphoto from "../Porphoto.png"
import Particles from 'react-particles-js';
export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer", "Engineer", "Designer"],
    });
  }, []);


  return (
    
    <div className="intro" id="intro">
      
			
          <div id="stars4"/>
				
				<div className="top-container flex"></div>
      <div className="left">
        	<div id="stars" />
          <div id="stars2" />
				<div id="stars3" />
        <div className="imgContainer">
          
          <img src={Porphoto} className="img" alt=""/> 
        </div>
         
      </div>
      <div className="right" >
    
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>David Jeffers</h1>
          
          <h3>
            Full Stack <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div><div class="shapes-container">
  <div class="circle circle-01"></div>
 
</div>
    </div> 
  );
}