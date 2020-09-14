import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type1: "Vegetables",

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
      mangoImgQuantity:60,
      mangoImgPrice:120,

      fruit4: "avocado",
      avocadoImgQuantity:50,
      avocadoImgPrice:100,

      fruit5: "Oranges",
      orangesImgQuantity: 60,
      orangesImgPrice: 120,      
      
      fruit6: "carrots",
      carrotsImgQuantity:50,
      carrotsImgPrice:200,
    };
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1><span>WELCOME TO</span> <span1>GREEN</span1> <span2>KIOSK</span2></h1>
        <h2> We sale Fruits and Vegetables </h2>

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
              <p> Kes {this.state.mangoesImgPrice}</p>
              <p> Quantity {this.state.mangoesImgQuantity} </p>
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
              <img className="photo" src={"Images/carrots.jpg"} alt="" />
            </div>
            <div className="product-info">
              <h5> Carrots</h5>
              <p> Kes {this.state.carrotsImgPrice}</p>
              <p> Quantity {this.state.carrotsImgQuantity} </p>
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