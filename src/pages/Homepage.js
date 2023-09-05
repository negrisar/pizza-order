import React from "react";
import "./Homepage.css";
import Footer from "./Footer";
import pizza1 from "../pizza1.png";
import pizza2 from "../pizza2.png";
import pizza3 from "../pizza3.png";
import pizza4 from "../pizza4.png";
import pizza5 from "../pizza5.png";
import pizza6 from "../pizza6.png";

function Home() {



    return (
        <div className="home-container">
            
                <header id="header">
                    
                        <nav>
                            
                                <h2>Nergis' Pizzas</h2>

                                <div className="nav-container">
                                    <a href="#header">Homepage</a>
                                    <a href="#menu" >Menu</a>
                                    <a href="/pizza">Create Order</a>
                                    <a href="#footer" >Contact Us</a>
                                </div>
                            
                        </nav>

                </header>
            <div className="page-container">

                <div id="menu"   className="menu-container" style={{background: "white"}}>;
                    <h1 style={{color:"#ce2829"}} >Menu</h1>
                    <div className="pizzas">
                        
                        <div className="pizza-item">
                        <a href="/pizza">
                           <img src={pizza1} alt=""/>
                        </a>
                        </div>
                        <div className="pizza-item">
                           <img src={pizza2} alt=""/>
                           
                        </div>
                        <div className="pizza-item">
                            <img src={pizza3} alt=""/>
                           
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div className="pizzas">
                        <div className="pizza-item">
                           <img src={pizza4} alt=""/>
                           
                        </div>
                        <div className="pizza-item">
                           <img src={pizza5} alt=""/>
                          
                        </div>
                        <div className="pizza-item">
                            <img src={pizza6} alt=""/>
                        </div>
                    </div>
                </div>

                <div id="footer" className="footer">
                    <Footer/>
                </div>

            </div>

        </div>
    );

}


export default Home;