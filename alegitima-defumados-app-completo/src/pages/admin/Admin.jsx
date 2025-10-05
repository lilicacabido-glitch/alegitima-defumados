import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Products from './Products.jsx'
import Orders from './Orders.jsx'
import Customers from './Customers.jsx'
import Delivery from './Delivery.jsx'
import Marketing from './Marketing.jsx'
import Reviews from './Reviews.jsx'
import Reports from './Reports.jsx'
import Settings from './Settings.jsx'
import Maintenance from './Maintenance.jsx'
import RecipesAdmin from './RecipesAdmin.jsx'

export default function Admin(){
  return (
    <div className="container">
      <div className="card">
        <h2>Admin</h2>
        <div className="small">PENDENTE → FINALIZADO → EM ENTREGA → ENTREGUE • WhatsApp automático • Petrópolis • CEP automático • Avaliações moderadas • Relatórios</div>
        <nav style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:10}}>
          <Link className="btn ghost" to="products">Produtos</Link>
          <Link className="btn ghost" to="orders">Pedidos</Link>
          <Link className="btn ghost" to="customers">Clientes</Link>
          <Link className="btn ghost" to="delivery">Entregas</Link>
          <Link className="btn ghost" to="marketing">Marketing</Link>
          <Link className="btn ghost" to="reviews">Avaliações</Link>
          <Link className="btn ghost" to="recipes">Receitas</Link>
          <Link className="btn ghost" to="reports">Relatórios</Link>
          <Link className="btn ghost" to="settings">Configurações</Link>
          <Link className="btn ghost" to="maintenance">Manutenção</Link>
        </nav>
      </div>
      <Routes>
        <Route path="products" element={<Products/>}/>
        <Route path="orders" element={<Orders/>}/>
        <Route path="customers" element={<Customers/>}/>
        <Route path="delivery" element={<Delivery/>}/>
        <Route path="marketing" element={<Marketing/>}/>
        <Route path="reviews" element={<Reviews/>}/>
        <Route path="recipes" element={<RecipesAdmin/>}/>
        <Route path="reports" element={<Reports/>}/>
        <Route path="settings" element={<Settings/>}/>
        <Route path="maintenance" element={<Maintenance/>}/>
      </Routes>
    </div>
  )
}
