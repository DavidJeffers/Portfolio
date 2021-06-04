import React from "react";
import './App.css';
import Topbar from "./componets/Topbar.jsx";
import Intro from "./componets/Into";
import Portfolio from "./componets/Portfolio";
import Contact from "./componets/Contact";
import Technologies from "./componets/Technologies";
import { useState } from "react";
import Menu from "./componets/Menu";
import Particles from 'react-particles-js';
function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app"> 
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
<div className="sections">
  
  <Intro/>
  
  <Portfolio/>

  <Technologies/>
    <Contact/>
</div>
    </div>
  );
}

export default App;
