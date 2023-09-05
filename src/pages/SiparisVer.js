import React from "react";
import {useState,useEffect} from 'react';
import axios from 'axios';
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./SiparisVer.css";
import imgp from "../adv-form-banner.png";
import Footer from "./Footer";

const options = [
  "Pepperoni",
  "Canadian Ham",
  "Grilled chicken",
  "Onion",
  "Tomatoes",
  "Sweet corn",
  "Sausage",
  "Jalapeno pepper",
  "Garlic",
  "Pepper",
  "Pineapple",
  "Courgette",
];

 function SiparisVer() {

  const [secilenMalzemeler, setSecilenMalzemeler] = useState([]);
  const [hamur, setHamur] = useState();
  const [siparisNotu, setSiparisNotu] = useState("");
  const [count, setCount] = useState(1);
  const [boyut, setBoyut] = useState("");
  const [adres, setAdres] = useState("");
  const [fiyat, setFiyat] = useState(0);
  const [error, setError] = useState("");
  const [formDatasi, setFormDatasi] = useState({
    Malzemeler: [],
    Not: "",
    Hamur: "",
    Boyut: "",
    Adres: "",
    Fiyat: 0,
    count: 1,
  });

  function adetarttır() {
    setCount(count + 1);
  }
  useEffect(() => {
    setFormDatasi({
      Malzemeler: secilenMalzemeler,
      Not: siparisNotu,
      Hamur: hamur,
      Boyut: boyut,
      Adres: adres,
      Fiyat: fiyat * count + 85.5 * count,
      Count: count,
    });
  }, [secilenMalzemeler, siparisNotu, hamur, boyut, adres, fiyat, count]);

  function adetazalt() {
    
    if (count > 1) {
      setCount(count - 1);
    }
  }
  
  function fiyatAyarla() {
    setFiyat(secilenMalzemeler.length * 5 * count);
  }
  useEffect(() => {
    fiyatAyarla();
  }, [secilenMalzemeler, count]);
  function handleSiparisNotu(e) {
    setSiparisNotu(e.target.value);
  }
 
  function handleAdres(e) {
    setAdres(e.target.value);
  }
  function handleChangeHamur(e) {
    setHamur(e.target.value);
   
  }

  function handleChange(e) {
    const { value } = e.target;
    setBoyut(value);
  }
  
  function handleMalzemeChange(e) {
    const { value } = e.target;
    const yeniSecilenMalzemeler = [...secilenMalzemeler];
   
    if (e.target.checked) {
      yeniSecilenMalzemeler.push(value);
    } else if (!e.target.checked) {
      
      if (yeniSecilenMalzemeler.includes(value)) {
        yeniSecilenMalzemeler.splice(yeniSecilenMalzemeler.indexOf(value), 1);
      }
    }

    setSecilenMalzemeler(yeniSecilenMalzemeler);
    
  }
  const handleSubmit = (e) => {
    e.preventDefault();
   
    const formSchema = Yup.object().shape({
      Malzemeler: Yup.array().min(1, "* Choose at least 2 ingredients").max(10, "* Choose up to 10 ingredients"),
      Not: Yup.string(),
      Hamur: Yup.string().required("* Choose dough type"),
      Boyut: Yup.string().required("* Choose pizza size"),
      Adres: Yup.string().required("* Address can not be empty"),
    });
    formSchema
      .validate(formDatasi)
      
      .then(() => {
        axios
          .post("https://reqres.in/api/orders", {
            Malzemeler: secilenMalzemeler,
            Not: siparisNotu,
            Hamur: hamur,
            Boyut: boyut,
            Adres: adres,
            Fiyat: (fiyat + 85.5) * count,
          })
      
          .then(function(response) {
            console.log(response.data);
            history.push("/onay", { formDatasi: formDatasi });
          })
          .catch(function(error) {
            console.log(error);
          });
      })
      
      .catch((err) => {
        setError(err.errors);
      });
  };

  const history = useHistory();

  return (
    <div className="siparis">
      <header>
        <h2>Nergis' Pizzas</h2>
      </header>
      
      <div className="icerik">
        
          <div className="up">
            <div>
            <img src={imgp} alt=""></img>
            </div>
            <div className="up-bar">
              <Link to="/" className="anasayfa-link" style={{color:"#105b0f" , fontWeight:"bold"}}>
                Homepage
              </Link>
              <p> - </p>
              <p style={{color:"red", fontWeight:"bold"}}> Create Order</p>
            </div>
          </div>

          <div className="tanıtım">
            <h3>Napolitan Pizza</h3>
            <h2>85.50 ₺</h2>
            <p>
            Napolitan pizza has a very thin crust at the base, with dough that puffs up around the sides and provides for
            a very airy crust. Because that crust is so light (even though quite large,) certain areas become charred very quickly,
            which is why it's important not to overcook and completely burn this type of crust.
            pizzetta denir.
            </p>
          </div>
        
      </div>

      <div className="body">
        <div className="radio">
          <div className="radioButtons">
            <h3>Choose Size *</h3>
            <form>
              <label>
                <div>
                  <input
                    type="radio"
                    name="boyut"
                    value="Küçük"
                    onChange={handleChange}
                  />
                  S
                </div>
              </label>
              <label>
                <div>
                  <input
                    type="radio"
                    name="boyut"
                    value="Orta"
                    onChange={handleChange}
                  />
                  M
                </div>
              </label>
              <label>
                <div>
                  <input
                    type="radio"
                    name="boyut"
                    value="Büyük"
                    onChange={handleChange}
                  />
                  L
                </div>
              </label>
            </form>
          </div>

          <div className="dropdown">
            <div>
              <label>
                <h2>Choose dough *</h2>
                <select
                  name="hamur"
                  id="size-dropdown"
                  onChange={handleChangeHamur}
                >
                  <option value="">-Choose Dough Thickness-</option>
                  <option value="İnce">Thin</option>
                  <option value="Normal">Normal</option>
                  <option value="Kalın">Thic</option>
                </select>
              </label>
            </div>
          </div>
        </div>
        <div className="checkbox">
          <div className="parentkutucuklar">
            <form>
              <h3>Additional  Ingredients</h3>
              <p>You can select up to 10 ingredients. 5₺</p>
              <div className="kutucuklar">

                {options.map((option) => (
                  <label key={option}>
                    <input
                      type="checkbox"
                      name="malzemeler"
                      value={option}
                      onChange={handleMalzemeChange}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </form>
          </div>
        </div>

        <div className="not">
          <label>
            <h3>Order Note</h3>
            <input type="text" name="not" onChange={handleSiparisNotu} />
          </label>
        </div>
        <div className="not" style={{paddingBottom:"2rem"}}>
          <label style={{paddingBottom:"2rem"}}>
            <h3>Address</h3>
            <input type="text" name="adres" onChange={handleAdres} />
          </label>
        </div>
        <div className="alt">
          <div className="adet">
            <button className="test" onClick={adetazalt}>
              -
            </button>
            <p>{count}</p>
            <button onClick={adetarttır}>+</button>
          </div>

          <div className="fiyat">
            <h3>Order Total</h3>
            <p>
              <div className="fiyatlar">
                <div>
                  <div>Additions</div>{" "}
                  <div>
                    {" "}
                    {fiyat}
                    &#8378;
                  </div>
                </div>
              </div>
            </p>
            <p>
              <div className="fiyatlar">
                <div>
                  <div style={{color: "red", fontWeight: "bold"}}>Total</div>{" "}
                  <div style={{color: "red" , fontWeight: "bold"}}>
                    {(85.5 + fiyat) * count}
                    &#8378;
                  </div>
                </div>
              </div>
            </p>
            {error && <section>{error}</section>}
            <Link id="submit" className="onay" onClick={handleSubmit} to="/onay" >Create Order</Link>

          </div>
        </div>
      </div>
      <div className="footer">
            <Footer/>
      </div>
    </div>
  );
}

export default SiparisVer;