import dayjs from 'dayjs'

export function nextValidDates({minBusinessDays=1, saturdayAllowed=true, sundayAllowed=false}, count=14){
  const out=[]; let d=dayjs().startOf('day')
  const isBiz = (dt)=>{
    const dow = dt.day()
    if(dow===0 && !sundayAllowed) return false
    if(dow===6 && !saturdayAllowed) return false
    return true
  }
  // first eligible date is +1 business day
  let needed = minBusinessDays
  while(needed>0){
    d = d.add(1,'day')
    if(isBiz(d)) needed--
  }
  for(let i=0;i<count;i++){
    if(isBiz(d)) out.push(d)
    d=d.add(1,'day')
  }
  return out
}

export function cepToAddress(cep){
  const clean = (cep||'').replace(/\D/g,'')
  if(clean.length!==8) return Promise.resolve(null)
  return fetch(`https://viacep.com.br/ws/${clean}/json/`).then(r=>r.json())
}

export function onlyPetropolis(address){
  if(!address) return false
  const c = (address.localidade||address.cidade||'').toLowerCase()
  return c.includes('petrópolis') || c.includes('petropolis')
}

export function waLink(phone, text){
  const p = phone.replace(/\D/g,'')
  return `https://wa.me/${p}?text=${encodeURIComponent(text)}`
}
