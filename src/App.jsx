import { useState } from 'react'
 import './App.css'
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home'
 import Ido from './pages/Ido/Ido';

function App() {
 
  return (
    <div className="App">
     <Router>
        <Routes>
       <Route path='/'  exact element={<Home/>} />
       <Route path='/Ido'  exact element={<Ido/>} />

      </Routes>
    </Router>
    </div>
  )
}

export default App
