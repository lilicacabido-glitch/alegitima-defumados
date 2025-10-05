import React from 'react'
export default function Customers(){
  return (
    <div className="card" style={{marginTop:12}}>
      <h3>Clientes</h3>
      <ul>
        <li>Cadastro: Nome, CPF, Telefone (com marcação WhatsApp), CEP → auto-preenchimento, Número e Referência.</li>
        <li>Opções “lembrar login”, redefinir senha e exclusão (LGPD).</li>
      </ul>
      <div className="small">Coleção: <code>users</code></div>
    </div>
  )
}