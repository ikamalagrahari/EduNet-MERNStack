import { Route, Routes, BrowserRouter } from "react-router-dom"; 
import "./App.css" 
import Home from "./Pages/Home"; 
import About from "./Pages/About"; 
import Contact from "./Pages/Contact"; 
import Navigate from "./Pages/Navigate"; 
function App() { 
  return ( 
    <div className="App"> 
      <BrowserRouter> 
        <Routes> 
          <Route path="/" element={<Navigate />}> 
            <Route index element={<Home />} /> 
 
            <Route path="About" element={<About />} /> 
 
            <Route path="Contact" element={<Contact />} /> 
         </Route> 
        </Routes> 
     </BrowserRouter> 
 </div> 
); 
} 
export default App; 