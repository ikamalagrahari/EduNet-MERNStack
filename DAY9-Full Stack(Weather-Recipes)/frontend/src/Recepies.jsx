import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'antd';

function App() {
  const [recipes, setRecipes] = useState([]); // State to store recipes data

  useEffect(() => {
    // Fetch data from the backend
    fetch('http://localhost:3000/recipes') 
      .then((res) => res.json()) // Parse the response as JSON
      .then((data) => setRecipes(data.recipes)) // Set the data in state
      .catch((error) => console.error("Error fetching recipes:", error)); // Handle any errors
  }, []); // Empty dependency array to run once when the component is mounted

  return (
    <div style={{ padding: '10px' }}>
      <h1 style={{ textAlign: 'center' }}>Recipes</h1>
      <Row gutter={[16, 16]} justify="center">
        {recipes.length > 0 ? (
          recipes.map((recipe, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6}>
              <Card bordered={true} hoverable>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <img
                  alt={recipe.title}
                  src={recipe.imageUrl}
                  style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                />
              </Card>
            </Col>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Row>
    </div>
  );
}

export default App;
