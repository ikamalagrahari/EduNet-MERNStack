// Product.js
import React, { useState, useEffect } from 'react';

import './Product.css';
/// import axios from 'axios'; // if you're using axios

function Product() {
  // State to hold product data
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    // Replace with your API URL
    // axios
    //   .get('https://fakestoreapi.com/products')
    //   .then(response => {
    //     setProducts(response.data);
    //     setLoading(false);
    //   })
    //   .catch(err => {
    //     setError(err);
    //     setLoading(false);
    //   });

    // You can also use fetch instead of axios
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching products: {error.message}</div>;
  }

  return (
    <div className="product-list">
      {products.map(product => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Product;
