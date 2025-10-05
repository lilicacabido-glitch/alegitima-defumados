import React from 'react'
export default function Orders(){
  return (
    <div className="card" style={{marginTop:12}}>
      <h3>Pedidos</h3>
      <ul>
        <li>Status: <strong>PENDENTE → FINALIZADO → EM ENTREGA → ENTREGUE</strong></li>
        <li>Ao FINALIZAR: envia resumo final no WhatsApp; ao EM ENTREGA: notifica; ao ENTREGUE: envia agradecimento.</li>
        <li>Despachar pedido: escolher motoboy e enviar endereço completo via WhatsApp.</li>
      </ul>
      <div className="small">Coleção: <code>orders</code></div>
    </div>
  )
}