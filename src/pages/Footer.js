import icon from "../icon-1.png";
import icon2 from "../icon-2.png";
import icon3 from "../icon-3.png";

import React from "react";
import "./Footer.css";

function Footer(){
    return(

        <div className="footer-container">
            <div className="footer-up">
           
                        <h2>Nergis' Pizzas</h2>

                        <div className="addres">
                            <a href="https://www.google.com/maps/place/Cihann%C3%BCma,+34353+Be%C5%9Fikta%C5%9F%2F%C4%B0stanbul/@41.0463513,29.0026541,16z/data=!3m1!4b1!4m6!3m5!1s0x14cab7a386cd706d:0x6da8b4395dc6b6a4!8m2!3d41.0472111!4d29.0074387!16s%2Fg%2F122rpgpk?entry=ttu" target="_blank" rel="noopener noreferrer">
                                <img src={icon} alt=""/>
                            </a>
                            <p>Cihannüma mah. Moda Kadıköy/İstanbul</p>
                        </div>

                        <div className="email">
                            <a href="mailto:order@nergispizzas.com">
                            <img src={icon2} alt=""/>
                            </a>
                            <p> order@nergispizzas.com</p>
                        </div>

                        <div className="contact">
                            <img src={icon3} alt="" />
                            
                            <p> +90 542 *** ****</p>
                        </div>
                
            </div>
            <hr style={{color: "white" , margin:0}}/>
            <div className="footer-down">
                <div>
                <p>@Nergis's Pizzas 2023</p>
                </div>
            </div>
        </div>
        
        
    )
};

export default Footer;