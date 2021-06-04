import React from 'react';
import Logo2 from '../componets/Logo2.png';
import d3 from "../componets/Screen Shot 2021-06-03 at 7.59.09 PM.png";
import "/Users/davidjeffers/Desktop/Portfolio/portfolio/src/App.css";

export default function Portfolio() {
  const data = [
    {
      id: 1,
      name: "Music Player",
      img:
        "https://i.pinimg.com/originals/26/0e/b1/260eb1e71b3b43e7b4d0cfd20a2a9cef.png",
      desc:
        "Music player web app made with React and Sass",
    },
  
   
  ]
  const data2 = [
    
    {
      id: 2,
      name: "3d Portfolio",
      img: "./Screen Shot 2021-06-03 at 7.59.09 PM.png",
      desc: "3d Portfolio website made with Three.js",
    },
    
   
  ]
  const data3 = [
    
   {
      id:3,
      name: "Free Range Nutrition",
      img: "Logo2",
      desc:"Website on Regenerative agriculture coming Soon!",
    },
    
   
  ]
  ;
  return (
    
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div className="outside">
      <div className="container">
        {data.map((d) => (
          <div onClick={(e) => {
      e.preventDefault();
      window.open('https://davidjeffers.github.io/musicapp/') ;
      }} className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img 
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>

<div className="container">
        {data3.map((d) => (
          <div onClick={(e) => {
      e.preventDefault();
      window.open('https://freerangenutrition.com') ;
      }} className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img 
                className="user"
                src={Logo2}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>

<div className="container">
        {data2.map((d) => (
          <div onClick={(e) => {
      e.preventDefault();
      window.open('https://davidjeffers.me') ;
      }} className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img 
                className="user"
                src={d3}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
