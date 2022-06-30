import { useState } from 'react'
 import './App.css'
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home'

function App() {
 
  return (
    <div className="App">
       <Home/>
    </div>
  )
}

export default App
