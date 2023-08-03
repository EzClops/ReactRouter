import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Red from './components/Red'
import Blue from './components/Blue'
import Home from './components/Home'
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/blue">blue</Link>
          <Link to="/red">red</Link>
          <Link to="/home">home</Link>
        </div>
        <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue></Blue>}/>
          <Route path="/red" element={<Red></Red>}/>
          <Route path="/home" element={<Home></Home>}/>
        </Routes></div>
    </div>  
    </>
  )
}

export default App
