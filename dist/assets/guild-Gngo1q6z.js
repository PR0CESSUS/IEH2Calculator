import{d as u,o as t,c as a,F as c,f as i,u as n,b as e,i as d,t as l,H as _}from"./index-AWyZn4a2.js";const m=e("tr",null,[e("th",null,"Hero"),e("th",null,"Status")],-1),v=u({__name:"guild",setup(p){const r=d("game");return(f,g)=>(t(),a("table",null,[m,(t(!0),a(c,null,i(n(r).data.source.isActiveBattle,(o,s)=>(t(),a("tr",null,[e("td",null,l(n(_)[s])+":",1),e("td",null,l(o?n(r).data.source.currentHero==s?"active":"passive":"inactive"),1)]))),256))]))}});export{v as default};