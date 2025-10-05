import React, { useState } from 'react'

export default function Product(){
  const [kg, setKg] = useState(3.5)
  const min = 4
  const [msg,setMsg] = useState('')
  const add = ()=>{
    if(kg < min){ setMsg(`Para este item, o peso mínimo é de ${min} kg.`); return }
    setMsg('Adicionado ao carrinho (exemplo).')
  }
  return (
    <div className="container">
      <div className="card">
        <h2>Pernil com osso (fresco)</h2>
        <div className="small">Peso mínimo {min} kg • preço por kg</div>
        <div className="row" style={{marginTop:8}}>
          <label>Quantidade (kg)</label>
          <input className="input" type="number" min="0" step="0.1" value={kg} onChange={e=>setKg(Number(e.target.value))} style={{maxWidth:120}}/>
          <button className="btn" onClick={add}>Adicionar</button>
          <button className="btn ghost">♡ Desejar</button>
        </div>
        {msg && <div className="badge warn" style={{marginTop:8}}>{msg}</div>}
        <div className="card" style={{marginTop:12}}>
          <strong>Dicas de receita</strong>
          <div className="small">Aba discreta com vídeo/fotos e preparo. No Admin você cadastra e gera PDF.</div>
        </div>
      </div>
    </div>
  )
}
