import React from 'react'
import './Main.css'

function Main(props) {
  const domain = ["Product design" , "Development" , "App Development ","Mobile Development"];
  return (
    <div className="main">
      {domain.map((item) =>{
        return(
          <div className="mainCard">
          <div className="titleHeading">
            <img src="/images/vertical.png" alt="" />
            <span>{item}</span>
          </div>

        
        </div>
        )
      })}
      
    </div>
  )
}

export default Main