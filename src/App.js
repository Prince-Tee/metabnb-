
import './App.css';
import React from 'react'
import Home  from './pages/Home';




import {
  BrowserRouter as Router,
  Routes,
  Route,
  
  
} from 'react-router-dom';
import Aplace from './pages/Aplace';

function App() {
  return (
    <Router>
        <div className="App">
    
    <Routes>
    
    <Route path="/" element={<Home />} />
    <Route path="/Aplace" element={<Aplace />} />
    
    
    </Routes> 
    
    
    
    
     
     
     
    </div>
  
    
    
    </Router>
  );
}

export default App;
