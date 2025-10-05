import React, { useState } from 'react'
import { waLink } from '../lib/utils.js'
import { APP } from '../lib/appConfig.js'

export default function Reseller(){
  const [form,setForm] = useState({nome:'',cpf:'',nasc:'',rg:'',cep:'',comp:'',numero:'',sexo:''})
  const update = (k,v)=> setForm({...form,[k]:v})
  const enviar = ()=>{
    const msg = `Cadastro de Revendedor\nNome: ${form.nome}\nCPF: ${form.cpf}\nNascimento: ${form.nasc}\nRG: ${form.rg}\nCEP: ${form.cep}\nNúmero: ${form.numero}\nComp: ${form.comp}\nSexo: ${form.sexo||'Prefiro não dizer'}`
    window.open(waLink(APP.whatsappAdmin, msg), '_blank')
    alert('Cadastro enviado via WhatsApp. Você receberá a confirmação com o catálogo e tabela atualizada.')
  }
  return (
    <div className="container">
      <div className="card" style={{maxWidth:680, margin:'0 auto'}}>
        <h2>Quero ser revendedor(a)</h2>
        <div className="small">Observação: o aplicativo não tem preço para revenda. Após o cadastro, você será redirecionado para o WhatsApp responsável.</div>
        <div className="row" style={{marginTop:8}}>
          <input className="input" placeholder="Nome" onChange={e=>update('nome',e.target.value)}/>
          <input className="input" placeholder="CPF" onChange={e=>update('cpf',e.target.value)}/>
        </div>
        <div className="row">
          <input className="input" placeholder="Data de nascimento" onChange={e=>update('nasc',e.target.value)}/>
          <input className="input" placeholder="RG" onChange={e=>update('rg',e.target.value)}/>
        </div>
        <div className="row">
          <input className="input" placeholder="CEP" onChange={e=>update('cep',e.target.value)}/>
          <input className="input" placeholder="Número" onChange={e=>update('numero',e.target.value)}/>
          <input className="input" placeholder="Complemento / Referência" onChange={e=>update('comp',e.target.value)}/>
        </div>
        <div className="row">
          <select className="input" onChange={e=>update('sexo',e.target.value)}>
            <option value="">Prefiro não dizer</option>
            <option>Feminino</option>
            <option>Masculino</option>
          </select>
        </div>
        <button className="btn" style={{marginTop:10}} onClick={enviar}>Enviar</button>
      </div>
    </div>
  )
}
