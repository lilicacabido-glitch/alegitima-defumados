import React from 'react'
import { Link } from 'react-router-dom'
export default function Cart(){
  return (
    <div className="container">
      <div className="card">
        <h2>Carrinho</h2>
        <div className="small">Resumo dos itens e pesos. Cupons e sugestões (cross-sell).</div>
        <div className="row" style={{marginTop:8}}>
          <Link className="btn" to="/checkout">Avançar</Link>
          <Link className="btn ghost" to="/">Continuar comprando</Link>
        </div>
      </div>
    </div>
  )
}