import React from 'react'
export default function Products(){
  return (
    <div className="card" style={{marginTop:12}}>
      <h3>Produtos</h3>
      <ul>
        <li>Cadastro com: categoria, foto, preço, <strong>preço por quantidade mínima</strong>, <strong>peso mínimo</strong>, <strong>somente por encomenda</strong>, estoque, detalhes.</li>
        <li>Marcar <strong>indisponível</strong> e ativar <strong>🔔 Avise-me</strong> para clientes interessados.</li>
        <li>Cross-sell: “Clientes também compram”.</li>
      </ul>
      <div className="small">Coleções no Firestore: <code>products</code>, <code>categories</code></div>
    </div>
  )
}