import React from 'react'
export default function About(){
  return (
    <div className="container">
      <div className="card">
        <h2>Sobre a empresa</h2>
        <p>A legítima Defumados — página editável pelo Admin com história, diferenciais, horários e contatos.</p>
      </div>
      <div className="card" style={{marginTop:12}}>
        <h3>Avaliações (no final da página)</h3>
        <p className="small">As avaliações aceitas pelo administrador aparecem discretamente aqui.</p>
      </div>
    </div>
  )
}