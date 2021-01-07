import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type1: "Vegetables",
      
      veg0:"header",

      veg1: "Spinach",
      spinachQuantity: 10,
      spinachImgPrice: 50,

      veg2: "potatoes",
      potatoesQuantity: 30,
      potatoesImgPrice: 100,


      veg3: "French beans",
      frenchbeansImgQuantity: 50,
      frenchbeansImgPrice: 100,
    
      veg4: "Tomatoes",
      tomatoesImgQuantity: 40,
      tomatoesImgPrice: 80,

      type2: "Fruits",

      fruit1: " banana2",
      banana2Quantity:40,
      banana2ImgPrice:80,

      fruit2: "strawberry",
      strawberryImgQuantity:50,
      strawberryImgPrice:150,

      fruit3: "Mangoes",
      mangosImgQuantity:80,
      mangosImgPrice:120,

      fruit4: "avocado",
      avocadoImgQuantity:50,
      avocadoImgPrice:100,

      fruit5: "Oranges",
      orangesImgQuantity: 70,
      orangesImgPrice: 140,      
      
      fruit6: "cherry",
      carrotsImgQuantity:50,
      carrotsImgPrice:200,

      fruit7: "Apple",
      appleImgQuantity:70,
      appleImgPrice:90,

      Veg8:"Capsicum",
      capsicumImgQuantity: 50,
      capsicumImgPrice: 100,

      fruit6:"Watermellon",
      watermellonImgQuantity: 40,
      watermellonImgPrice:80,

      fruit7: "Passion",
      passionImgQuantity: 50,
      passionImgPrice: 100,

      fruit8: "Grape",
      grapeImgQuantity:60,
      grapeImgPrice:120,

      fruit9: "Guava",
      guavaImgQuantity: 40,
      guavaImgPrice: 80,
      

    };
  }
  

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1><strong>GREENS KIOSK</strong></h1>
        
        <h2><img src="Images/header.JPG" height="590px;" width="100%"/></h2>
        <section className="products">
          <div className="product-card">
            <div className="product-image">
              <img className="photo" src="Images/spinach_.jpg" alt="" />
            </div>
            <div className="product-info">
              <h5> Spinach</h5>
              <p> Kes {this.state.spinachImgPrice}</p>
              <p> Quantity {this.state.spinachQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={"Images/potatoes.jpg"} alt="" />
            </div>
            <div className="product-info">
              <h5> Potatoes</h5>
              <p>kes{this.state.potatoesImgPrice}</p>
              <p> Quantity {this.state.potatoesQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={"Images/french beans.jpg"} alt="" />
            </div>
            <div className="product-info">
              <h5> French beans</h5>
              <p> kes 100</p>
              <p> Quantity {this.state.frenchbeansImgQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={"Images/tomatoes.jpg"} alt="" />
            </div>
            <div className="product-info">
              <h5> Tomatoes</h5>
              <p> Kes {this.state.tomatoesImgPrice}</p>
              <p> Quantity {this.state.tomatoesImgQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>
          
          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={"Images/capsicum.jpg"} alt="" />
            </div>
            <div className="product-info">
              <h5> Capsicum</h5>
              <p> Kes {this.state.capsicumImgPrice}</p>
              <p> Quantity {this.state.capsicumImgQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>  
          
                
          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={"Images/strawberry.jpg"} alt="" />
            </div>
            <div className="product-info">
              <h5> Strawberry</h5>
              <p> Kes {this.state.strawberryImgPrice}</p>
              <p> Quantity {this.state.strawberryImgQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={"Images/Mangoes.jpg"} alt="" />
            </div>
            <div className="product-info">
              <h5> Mangoes</h5>
              <p> Kes {this.state.MangoesImgPrice}</p>
              <p> Quantity {this.state.MangoesImgQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={"Images/avocado.jpg"} alt="" />
            </div>
            <div className="product-info">
              <h5> Avocado</h5>
              <p> Kes {this.state.avocadoImgPrice}</p>
              <p> Quantity {this.state.avocadoImgQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={"Images/Oranges.jpg"} alt="" />
            </div>
            <div className="product-info">
              <h5> Oranges</h5>
              <p> Kes {this.state.orangesImgPrice}</p>
              <p> Quantity {this.state.orangesImgQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={"Images/cherry.jpg"} alt="" />
            </div>
            <div className="product-info">
              <h5> Cherry</h5>
              <p> Kes {this.state.carrotsImgPrice}</p>
              <p> Quantity {this.state.carrotsImgQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={"Images/Apple.jpg"} alt="" />
            </div>
            <div className="product-info">
              <h5> Apple</h5>
              <p> Kes {this.state.AppleImgPrice}</p>
              <p> Quantity {this.state.AppleImgQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>  
        
          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={"Images/banana2.png"} alt="" />
            </div>
            <div className="product-info">
              <h5> Banana</h5>
              <p> Kes {this.state.banana2ImgPrice}</p>
              <p> Quantity {this.state.banana2ImgQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>


          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={"Images/passion fruit.jpg"} alt="" />
            </div>
            <div className="product-info">
              <h5> Passion</h5>
              <p> Kes {this.state.passionImgPrice}</p>
              <p> Quantity {this.state.passionImgQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div> 

           <div className="product-card">
            <div className="product-image">
              <img className="photo" src={"Images/Grape.jpg"} alt="" />
            </div>
            <div className="product-info">
              <h5> Grape</h5>
              <p> Kes {this.state.grapeImgPrice}</p>
              <p> Quantity {this.state.grapeImgQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div> 

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={"Images/Guava.jpg"} alt="" />
            </div>
            <div className="product-info">
              <h5> Guava</h5>
              <p> Kes {this.state.guavaImgPrice}</p>
              <p> Quantity {this.state.guavaImgQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div> 
             
 </section>
      </div>

    );
  }
}



export default App;