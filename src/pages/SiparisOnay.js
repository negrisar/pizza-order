import React from "react";
import "./SiparisOnay.css";

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
              <div className="siparis-alındı">
               
              </div>
            </div>
            <hr style={{color: "#FDC913"}}/>
            <div className="onay-down">
                <h2 style={{color: "#ce2829"}}>Napolitan Pizza</h2>
                  <div className="last-container">
                  <div className="onay-string">
                    <p>Size: </p> 
                    <p>Dough Type:</p>
                    <p>Additional Ingredients: </p>
                    <p>Order Note: </p>
                  </div>
                  <br/>
              <div className="total-order">
                  <h3 style={{color: "white" , fontFamily: "Segoe UI", fontSize:28}}>Total Order</h3>
                  
              </div>
              </div>
            </div>
             
          </div>

        </div>
      
    );
  };

  export default SiparisOnay;