import React, { useState, useEffect } from 'react';
import './Product.css';  // We'll create a separate CSS file for styles

function Kids() {
  const [data, setData] = useState([]);

  // Fetch data for kids category
  useEffect(() => {
    fetch('http://localhost:4000/kids')
      .then((res) => res.json())
      .then((data) => setData((data) ));
  }, []);

  return (
    <div className="container">
      <h1>Kids Products</h1>
      <div className="product-list">
        {data.map((item) => (
          <div key={item.id} className="card">
            <img src={item.img} alt={item.title} className="card-image" />
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p className="card-price">${item.price}</p>
              <p className="card-rating">Rating: {item.rating}</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Kids;
