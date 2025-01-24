import React, { useState , useEffect} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setData(data)
  })    
  }, []);

  return (
    <div>
      <h1>App</h1>
      {data.map((item) => {
        return(
          <div>
            <h1>{item.id}</h1>
            <img src={item.img} style={{width:'100px',height:'100px'}}/>
            <p>{item.title}</p>
            <p>{item.price}</p>
            <p>{item.rating}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;