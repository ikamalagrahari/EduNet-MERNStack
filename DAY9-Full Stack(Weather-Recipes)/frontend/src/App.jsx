import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'antd';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={{ padding: '10px' }}>
      <h1 style={{ textAlign: 'center' }}>Weather Data</h1>
      <Row gutter={[16, 16]} justify="center">
        {data.length > 0 ? (
          data.map((item) => (
            <Col key={item.id} xs={24} sm={24} md={12} lg={8}>
              <Card bordered={true} hoverable>
                <Row gutter={[16, 16]} align="middle" wrap={false}>
                  {/* Left Column: Image */}
                  <Col xs={8} sm={8} md={10}>
                    <img
                      alt={`${item.city} view`}
                      src={item.city_img}
                      style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '10px',
                      }}
                    />
                  </Col>

                  {/* Right Column: Weather Details */}
                  <Col xs={16} sm={16} md={14}>
                    <h3>{item.city}</h3>
                    <p>Temperature: {item.tempreature}°C</p> 
                    <p>Pressure: {item.preassure}</p>
                    <p>Wind: {item.wind}</p>
                    <img
                      alt="Weather Icon"
                      src={item.logo}
                      style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '30%',
                        marginTop: '10px',
                      }}
                    />
                  </Col>
                </Row>
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
