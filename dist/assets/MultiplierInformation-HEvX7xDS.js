import{d as O,p as C,o as d,c as m,b as t,a0 as $,h as N,$ as V,_ as L,U as v,i as A,e as D,C as z,w as j,t as n,f as w,F as h,a as _,u as s,L as x,a8 as B,G as f,D as b,a9 as I,R as P,S as Y}from"./index-sYT1LxZv.js";const k=O({__name:"Tooltip",setup(o){const a=C(!1),r=C(),l=c=>{if(r.value.textContent=="")return;const e=r.value.getBoundingClientRect(),p=window.innerHeight-20-c.clientY;r.value.style.left=`${c.clientX+20}px`,e.height>p?r.value.style.top=`${c.clientY-(e.height-p)}px`:r.value.style.top=`${c.clientY}px`};return(c,e)=>(d(),m("div",null,[t("div",{class:"trigger",onMouseenter:e[0]||(e[0]=p=>a.value=!0),onMousemove:e[1]||(e[1]=p=>l(p)),onMouseleave:e[2]||(e[2]=p=>a.value=!1)},[$(c.$slots,"default",{},void 0,!0)],32),N(t("div",{class:"tooltip",ref_key:"content",ref:r},[$(c.$slots,"content",{},void 0,!0)],512),[[V,a.value&&r.value.textContent!=""]])]))}}),E=L(k,[["__scopeId","data-v-e718c7c9"]]);function K(o,a=0,r=0){if(o!=0){if(a){if(r>a)return r/a-1<1e-9?void 0:"red";if(r<a)return a/r-1<1e-9?void 0:"green"}return o>0?"green":o<0?"red":""}}function y(o,a){const r={};for(const[l,c]of Object.entries(o))r[l]=c;for(const[l,c]of Object.entries(a))r[l]!=null?r[l]-=c:r[l]=-c;return r}function S(o,a,r=!0){if((a===0||a==null)&&r)return"(NEW)";if((o===0||o==null)&&r)return"(MISSING)";if(!(o==0||a==0||a==null||o==null)){if(a>o)return a/o-1<1e-6?void 0:`(-${v.percent(a/o-1,3)})`;if(a<o)return o/a-1<1e-6?void 0:`(+${v.percent(o/a-1,2)})`}}function M(o,a){const r=y(o,a),l={};for(const[c,e]of Object.entries(r))c=="Base"?l[c]="":l[c]=S(o[c],a[c],!0);return l}const g=o=>(P("data-v-80325c21"),o=o(),Y(),o),F={style:{width:"400px"}},G={class:"name"},R=g(()=>t("p",{class:"group"},"Additive:",-1)),U=g(()=>t("br",null,null,-1)),W=g(()=>t("p",{class:"group"},"Multiplicative:",-1)),H=g(()=>t("br",null,null,-1)),X={key:0,name:"superdungeon"},q={class:"right"},J=g(()=>t("br",null,null,-1)),Q=g(()=>t("p",{style:{color:"yellow","text-decoration":"underline","font-size":"14px","text-decoration-color":"#fff"}},"Super Dungeon:",-1)),Z={class:"right"},ee=g(()=>t("br",null,null,-1)),ie={key:1},te=g(()=>t("p",{class:"group"},"After:",-1)),ae=g(()=>t("br",null,null,-1)),ne={style:{"font-size":"14px"}},le=O({__name:"MultiplierInformation",props:{multiplier:{},name:{},valueSuffix:{},inline:{type:Boolean},precision:{}},setup(o){const a=A("game"),r=C(!1),l=o;function c(p){const i={main:v.get(a.data,p),snap:v.get(a.snap,p)};return i.main.Calculate(),i.snap.Calculate(),{raw:i,main:i.main.Snapshot(),snap:i.snap.Snapshot(),diff:{value:i.main.value-i.snap.value,additive:i.main.additive-i.snap.additive,additiveKind:y(i.main.additiveKind,i.snap.additiveKind),multiplicativeKind:y(i.main.multiplicativeKind,i.snap.multiplicativeKind),multiplicative:i.main.multiplicative-i.snap.multiplicative,after:i.main.after-i.snap.after,afterKind:y(i.main.afterKind,i.snap.afterKind)},compare:{value:S(i.main.value,i.snap.value,!1),after:S(i.main.after,i.snap.after,!1),additive:S(i.main.additive,i.snap.additive,!1),additiveKind:M(i.main.additiveKind,i.snap.additiveKind),multiplicativeKind:M(i.main.multiplicativeKind,i.snap.multiplicativeKind),multiplicative:S(i.main.multiplicative,i.snap.multiplicative),afterKind:M(i.main.afterKind,i.snap.afterKind)}}}const e=C(c(l.multiplier));return(p,i)=>(d(),D(E,null,z({default:j(()=>[t("p",{onMouseoverOnce:i[0]||(i[0]=u=>r.value=!0),onClick:i[1]||(i[1]=u=>console.log(e.value)),class:f({underline:!l.inline})},[t("span",{class:f(["nameWrap",{yellow:e.value.main.isLog}])},n(p.name)+" "+n(e.value.raw.main.name),3),t("span",{class:f([[s(K)(e.value.diff.value,e.value.main.value,e.value.snap.value)],"right"])},n(e.value.compare.value)+" "+n(s(v).convertTo(e.value.main.Value(),l.precision,e.value.main.numberType))+" "+n(l.valueSuffix),3)],34)]),_:2},[r.value?{name:"content",fn:j(()=>[t("div",F,[t("p",G,n(p.name),1),R,(d(!0),m(h,null,w(Object.entries(e.value.diff.additiveKind),([u,T])=>(d(),m("p",null,[e.value.main.additiveKind[u]>0||u=="Base"||e.value.snap.additiveKind[u]>0?(d(),m(h,{key:0},[_(" -"+n(s(x).StatsBreakdown(s(B)[u]))+" ",1),t("span",{class:f(["right",s(K)(T)])},n(e.value.compare.additiveKind[u])+" "+n(u!="Base"?"+":"")+" "+n(s(v).convertTo(e.value.main.additiveKind[u],l.precision,e.value.main.numberType)),3)],64)):b("",!0)]))),256)),t("p",null,[_(" Additive Total:"),t("span",{class:f(["right",s(K)(e.value.diff.additive)])},n(e.value.compare.additive)+" "+n(s(v).convertTo(e.value.main.additive,l.precision,e.value.main.numberType)),3)]),U,W,(d(!0),m(h,null,w(Object.entries(e.value.diff.multiplicativeKind),([u,T])=>(d(),m("p",null,[e.value.main.multiplicativeKind[u]>1||u=="Base"?(d(),m(h,{key:0},[_(" -"+n(s(x).StatsBreakdown(s(B)[u]))+" ",1),t("span",{class:f(["right",s(K)(T)])},n(e.value.compare.multiplicativeKind[u])+" "+n(u!="Base"?"*":"")+" "+n(s(v).convertTo(e.value.main.multiplicativeKind[u],l.precision,s(I).Percent)),3)],64)):b("",!0)]))),256)),t("p",null,[_(" Multiplicative Total: "),t("span",{class:f(["right",s(K)(e.value.diff.multiplicative)])},n(e.value.compare.multiplicative)+" "+n(s(v).convertTo(e.value.main.multiplicative,l.precision,s(I).Percent)),3)]),H,e.value.main.isLog?(d(),m("div",X,[t("p",null,[_(" Temporary Total: "),t("span",q,n(s(v).convertTo(e.value.main.temp,l.precision,e.value.main.numberType)),1)]),J,Q,t("p",null,[_(" Base + Log10([Temporary Total])"),t("span",Z,n(s(v).convertTo(e.value.main.log,l.precision,e.value.main.numberType)),1)]),ee])):b("",!0),e.value.main.after!=0?(d(),m("div",ie,[te,(d(!0),m(h,null,w(Object.entries(e.value.diff.afterKind),([u,T])=>(d(),m("div",null,[e.value.main.afterKind[u]>1?(d(),m(h,{key:0},[_(" -"+n(s(x).StatsBreakdown(s(B)[u]))+" ",1),t("span",{class:f(["right",s(K)(T)])},n(e.value.compare.afterKind[u])+" + "+n(s(v).convertTo(e.value.main.afterKind[u]|0,l.precision,e.value.main.numberType)),3)],64)):b("",!0)]))),256)),t("p",null,[_(" After Total: "),t("span",{class:f(["right",s(K)(e.value.diff.after)])},n(e.value.compare.after)+" "+n(s(v).convertTo(e.value.main.after,l.precision,e.value.main.numberType)),3)]),ae])):b("",!0),t("p",ne,[_(" Total:"),t("span",{name:"value-total",class:f(["right",s(K)(e.value.diff.value)])},n(e.value.compare.value)+" "+n(s(v).convertTo(e.value.main.Value(),l.precision,e.value.main.numberType))+" "+n(l.valueSuffix),3)])])]),key:"0"}:void 0]),1024))}}),re=L(le,[["__scopeId","data-v-80325c21"]]);export{re as M,E as T,S as u};
