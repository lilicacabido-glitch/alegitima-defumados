import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div className="container">
      <div className="card" style={{marginBottom:12}}>
        <h2>Catálogo</h2>
        <div className="small">30 por página • cross-sell • promoções • ♡ lista de desejos • 🔔 avise-me</div>
      </div>
      <div className="grid">
        <div className="card">
          <strong>Pernil com osso (fresco)</strong>
          <div className="small">Peso mínimo 4 kg • R$ 39,90/kg</div>
          <div className="row" style={{marginTop:8}}>
            <Link className="btn" to="/p/pernil_osso_fresco">Ver</Link>
            <button className="btn ghost">♡ Desejar</button>
          </div>
        </div>
        <div className="card">
          <strong>Bacon Defumado</strong>
          <div className="small">Indisponível no momento</div>
          <div className="row" style={{marginTop:8}}>
            <button className="btn ghost" disabled>Adicionar</button>
            <button className="btn flat">🔔 Avise-me</button>
          </div>
        </div>
      </div>
    </div>
  )
}
