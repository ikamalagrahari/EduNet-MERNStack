Navigate.jsx 
import React from "react"; 
import { Outlet, Link } from "react-router-dom"; 
 
function Navigate() { 
  return ( 
    <div> 
      <ul style={{ listStyle: "none" }}> 
        <li> 
          <Link to="/">Home</Link> 
        </li> 
        <li> 
          <Link to="/">Kids</Link> 
        </li> 
        <li> 
          <Link to="/">Men</Link> 
        </li> 
        <li> 
          <Link to="/">Women</Link> 
        </li> 
        <li> 
          <Link to="/about">About-Us</Link> 
        </li> 
        <li> 
          <Link to="/contact">Contact-Us</Link> 
        </li> 
      </ul> 
 
      <Outlet /> 
    </div> 
  ); 
} 
export default Navigate; 