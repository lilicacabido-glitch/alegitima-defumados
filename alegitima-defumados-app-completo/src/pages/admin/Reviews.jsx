import React from 'react'
export default function Reviews(){
  return (
    <div className="card" style={{marginTop:12}}>
      <h3>Avaliações</h3>
      <ul>
        <li>Clientes avaliam (até 5 ⭐) 15 minutos após pedido ENTREGUE.</li>
        <li>Admin modera o que aparece publicamente e pode ver todas.</li>
        <li>Clientes podem curtir comentários.</li>
      </ul>
      <div className="small">Coleção: <code>reviews</code></div>
    </div>
  )
}