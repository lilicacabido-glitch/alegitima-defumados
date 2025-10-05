
import React, { useState } from 'react'
import { auth, resetPassword } from '../lib/firebase.js'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [email,setEmail] = useState('')
  const [pass,setPass] = useState('')
  const [msg,setMsg] = useState('')
  const navigate = useNavigate()

  const login = async (e)=>{
    e.preventDefault(); setMsg('Entrando...')
    try{
      await signInWithEmailAndPassword(auth, email, pass)
      setMsg('Login realizado!')
      navigate('/admin') // ✅ redireciona pro painel depois do login
    }catch(err){ setMsg('Erro: ' + (err?.message || err)) }
  }

  const forgot = async ()=>{
    if(!email) return setMsg('Digite seu e-mail para redefinir a senha.')
    try{ await resetPassword(email); setMsg('E-mail de redefinição enviado!') }catch(e){ setMsg('Erro: ' + e.message) }
  }

  return (
    <div className="container">
      <div className="card" style={{maxWidth:420, margin:'20px auto'}}>
        <h2>Entrar</h2>
        <form onSubmit={login} style={{display:'grid',gap:10}}>
          <input className="input" type="email" placeholder="E-mail" value={email} onChange={e=>setEmail(e.target.value)} required/>
          <input className="input" type="password" placeholder="Senha" value={pass} onChange={e=>setPass(e.target.value)} required/>
          <button className="btn" type="submit">Entrar</button>
          <button className="btn ghost" type="button" onClick={forgot}>Esqueci minha senha</button>
        </form>
        <div className="small" style={{marginTop:8}}>{msg}</div>
      </div>
    </div>
  )
}
