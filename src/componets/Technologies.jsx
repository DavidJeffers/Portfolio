import React from 'react';
import "/Users/davidjeffers/Desktop/Portfolio/portfolio/src/App.css";
import skills from "./whiteskills.png"
export default function Technologies() {
   
  return (
    <div className="technologies" id="technologies"> 
    <h1>Technologies</h1>
   
      <img className="user" src={skills}/>
    </div>
  ) }/* <div className="technologies" id="technologies">
      <h1>Technologies</h1>
      
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
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
    </div>
  );
}
*/ 