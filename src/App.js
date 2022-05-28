import './App.css';
import Navbar from './components/Navbar';
import React, {useState} from 'react'
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Info from './components/Info';
import Home from './components/Home';


function App() {
  const [mode, setMode] = useState("light")
  const toggleMode =()=>{
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor='#2B2D2F'
      document.body.style.color='white'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
    }
  }

  return (
    <>
    <Router>
     <Navbar title="C.A.R." mode={mode} toggleMode={toggleMode}></Navbar>
     {/* <Alert alert={alert}></Alert> */}
     <Routes>
          <Route exact path="/info" element={<Info mode={mode}></Info>}/>
          <Route exact path="/" element={<Home  mode={mode}></Home>}/>
     </Routes>
    
     
     </Router>
    </>
  );
}


export default App;
