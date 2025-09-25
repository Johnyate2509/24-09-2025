import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Detalle from './detalle'
import Home from './home'
import Informativa from './informativa'
import Original from './original'
import Favoritos from './favoritos'

import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
        <nav className="c-menu">
          <Link to="/">Home</Link>
          <Link to="/detalle">Detalle</Link>
          <Link to="/informativa">Informativa</Link>
          <Link to="/favoritos">Favoritos</Link>
          <Link to="/original">Original</Link>
        </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalle" element={<Detalle />} />
        <Route path="/informativa" element={<Informativa />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/original" element={<Original />} />
      </Routes>
    </Router>
    </>
  )
}

export default App