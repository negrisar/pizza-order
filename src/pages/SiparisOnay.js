import React from "react";
import "./SiparisOnay.css";
import png from "../return.png";

const SiparisOnay  = () => {

  
    return (
        <div className="success">
          <div>
            <h2>Nergis' Pizzas</h2>
          </div>
          <div className="onay-container">
            <div className="onay-up">
              <div className="lezzet">
                <p >...on the way</p>
              </div>
            </div>
            <hr style={{color: "#FDC913"}}/>
            <div className="onay-down">
                  <div className="last-container">
                    
                    <h2>Enjoy your meal</h2>
      
                  </div>
                  <div className="return-home"> 
                  <a href="/" >
                    <img src={png} alt=""/> 
                  </a>
                  </div>
            </div>
             
          </div>

        </div>
      
    );
  };

  export default SiparisOnay;