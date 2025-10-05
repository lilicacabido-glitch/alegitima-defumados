import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import './styles.css'
import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'
import Cart from './pages/Cart.jsx'
import Checkout from './pages/Checkout.jsx'
import Orders from './pages/Orders.jsx'
import Admin from './pages/admin/Admin.jsx'
import Login from './pages/Login.jsx'
import About from './pages/About.jsx'
import Reseller from './pages/Reseller.jsx'
import Recipes from './pages/Recipes.jsx'

function Header(){
  const nav = useNavigate()
  return (
    <header className="app">
      <div className="brand" onClick={()=>nav('/about')}>
        <img src="/icons/icon.png" width="20" height="20"/> A legítima Defumados
      </div>
      <nav>
        <Link to="/">Catálogo</Link>
        <Link to="/wishlist">Desejos</Link>
        <Link to="/orders">Pedidos</Link>
        <Link to="/recipes">Receitas</Link>
        <Link to="/reseller">Quero ser revendedor</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/login">Entrar</Link>
      </nav>
    </header>
  )
}

function App(){
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/p/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/admin/*" element={<Admin/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/reseller" element={<Reseller/>}/>
        <Route path="/recipes" element={<Recipes/>}/>
      </Routes>
    </BrowserRouter>
  )
}
createRoot(document.getElementById('root')).render(<App/>)
