import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import { nextValidDates, cepToAddress, onlyPetropolis, waLink } from '../lib/utils.js'
import { APP } from '../lib/appConfig.js'

export default function Checkout(){
  const [cep,setCep]=useState(''); const [addr,setAddr]=useState(null); const [addrMsg,setAddrMsg]=useState('')
  const [delivery,setDelivery]=useState('entrega') // retirada|entrega
  const [date,setDate]=useState('')
  const [whatsapp,setWhatsapp]=useState(true)
  const dates = nextValidDates({minBusinessDays:APP.minBusinessDays, saturdayAllowed:APP.saturdayAllowed, sundayAllowed:APP.sundayAllowed}, 20)

  useEffect(()=>{ setAddrMsg('') },[delivery])

  const buscarCEP = async ()=>{
    setAddrMsg('Buscando CEP…')
    try{
      const a = await cepToAddress(cep)
      if(a?.erro){ setAddrMsg('CEP não encontrado.'); setAddr(null); return }
      setAddr(a)
      if(APP.features.deliveryOnlyPetropolis && !onlyPetropolis(a)){
        setAddrMsg('Atendemos apenas Petrópolis. Ajuste o CEP.')
      }else{
        setAddrMsg(`Endereço: ${a.logradouro || ''} - ${a.bairro || ''} - ${a.localidade}/${a.uf}`)
      }
    }catch(e){ setAddrMsg('Erro ao buscar CEP.'); }
  }

  const fazerPedido = ()=>{
    // Gera mensagem de WhatsApp inicial (PENDENTE)
    const resumo = `Novo pedido (PENDENTE) — ${APP.name}%0A`+
      `Entrega/retirada: ${delivery}%0A`+
      `Data: ${date}%0A`+
      `CEP: ${cep}%0A`+
      `Endereço: ${(addr?.logradouro||'')} - ${(addr?.bairro||'')} - ${(addr?.localidade||'')}/${(addr?.uf||'')}%0A`+
      `Observação: pesos serão ajustados antes da confirmação final.`
    const link = waLink(APP.whatsappAdmin || '5524xxxxxxxxx', resumo)
    if(whatsapp) window.open(link, '_blank')
    alert('Pedido criado como PENDENTE e enviado para conferência via WhatsApp (exemplo).')
  }

  return (
    <div className="container">
      <div className="card">
        <h2>Entrega ou retirada</h2>
        <div className="row">
          <label><input type="radio" name="d" checked={delivery==='entrega'} onChange={()=>setDelivery('entrega')}/> Entrega</label>
          <label><input type="radio" name="d" checked={delivery==='retirada'} onChange={()=>setDelivery('retirada')}/> Retirada</label>
        </div>
        <div className="row" style={{marginTop:10}}>
          <select className="input" value={date} onChange={e=>setDate(e.target.value)}>
            <option value="">Selecione a data</option>
            {dates.map(d=> <option key={d.format('YYYY-MM-DD')} value={d.format('YYYY-MM-DD')}>{d.format('DD/MM/YYYY')}</option>)}
          </select>
          <div className="small">Disponível a partir de +{APP.minBusinessDays} dia útil. Sábado {APP.saturdayAllowed?'permitido':'não permitido'}.</div>
        </div>
      </div>

      <div className="card" style={{marginTop:12}}>
        <h3>Endereço</h3>
        <div className="row">
          <input className="input" placeholder="CEP" value={cep} onChange={e=>setCep(e.target.value)}/>
          <button className="btn" onClick={buscarCEP}>Buscar</button>
        </div>
        {addrMsg && <div className="badge warn" style={{marginTop:8}}>{addrMsg}</div>}
        <div className="row" style={{marginTop:8}}>
          <input className="input" placeholder="Número"/>
          <input className="input" placeholder="Referência"/>
        </div>
      </div>

      <div className="card" style={{marginTop:12}}>
        <h3>Pagamento</h3>
        <div className="row">
          <label><input type="radio" name="p" defaultChecked/> Dinheiro</label>
          <label><input type="radio" name="p"/> Cartão (presencial)</label>
          <label><input type="radio" name="p"/> Pix (presencial)</label>
        </div>
      </div>

      <div className="card" style={{marginTop:12}}>
        <h3>Confirmação</h3>
        <div className="row">
          <label><input type="checkbox" checked={whatsapp} onChange={e=>setWhatsapp(e.target.checked)}/> Enviar resumo ao WhatsApp para conferência</label>
        </div>
        <button className="btn" onClick={fazerPedido}>Finalizar pedido (PENDENTE)</button>
        <div className="small" style={{marginTop:8}}>Após conferência de pesos e disponibilidade, você receberá a confirmação final, o aviso “saiu para entrega” e o agradecimento.</div>
      </div>
    </div>
  )
}
