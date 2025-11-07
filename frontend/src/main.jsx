import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Favorites from './pages/Favorites'
import About from './pages/About'
import Contact from './pages/Contact'
import './styles.css'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Home />}/>
        <Route path='dashboard/:mood' element={<Dashboard />}/>
        <Route path='login' element={<Login />}/>
        <Route path='register' element={<Register />}/>
        <Route path='favorites' element={<Favorites />}/>
        <Route path='about' element={<About />}/>
        <Route path='contact' element={<Contact />}/>
      </Route>
    </Routes>
  </BrowserRouter>
)
