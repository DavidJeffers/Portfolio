import React from 'react'
import "/Users/davidjeffers/Desktop/Portfolio/portfolio/src/App.css"
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            

          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>3312557102</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>ohsjeffers@gmail.com</span>
           <ul className='links'>
        <li className="home" onClick={()=>setMenuOpen(false)}>
          <a className='hometext' href="#intro">Home</a>
        </li>
        <li className='portfolio' onClick={()=>setMenuOpen(false)}>
          <a className='portfoliotext' href="#portfolio">Portfolio</a>
       </li>
        <li className='technologies' onClick={()=>setMenuOpen(false)}>
          <a className='technologiestext' href="#technologies">Technologies</a>
        </li>
        <li  className='contact' onClick={()=>setMenuOpen(false)}>
          <a className='contacttext' href="#contact">Contact</a>
        </li>
      </ul>
          </div>
        </div>
        
        </div>
      </div>
  
  );
}