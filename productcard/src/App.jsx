import React from "react";
import "./App.css";

const App = () => {
  const product = {
    title: "Wireless Headphones",
    price: "₹2,999",
    description: "High quality sound with noise cancellation.",
    image:
      "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?w=400",
  };

  return (
    <div className="container">
      <div className="card">
        
        <img src={product.image} alt="product" className="product-img" />

        <h2 className="title">{product.title}</h2>

        <p className="price">{product.price}</p>

        <p className="desc">{product.description}</p>

        <button className="btn">Add to Cart</button>

      </div>
    </div>
  );
};

export default App;