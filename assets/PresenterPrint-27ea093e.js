import{d as _,u,a as d,c as m,b as p,r as h,e as n,f as t,t as s,g as a,F as f,h as g,n as v,i as x,o as l,j as y,k as b,l as k,m as N,_ as w}from"./index-2c57c24d.js";import{N as P}from"./NoteDisplay-daacb675.js";const D={class:"m-4"},V={class:"mb-10"},A={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},E={class:"text-lg"},F={class:"font-bold flex gap-2"},L={class:"opacity-50"},S=t("div",{class:"flex-auto"},null,-1),T={key:0,class:"border-gray-400/50 mb-8"},H=_({__name:"PresenterPrint",setup(j){u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),d({title:`Notes - ${m.title}`});const i=p(()=>h.map(o=>{var r;return(r=o.meta)==null?void 0:r.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,r)=>(l(),n("div",{id:"page-root",style:v(a(x))},[t("div",D,[t("div",V,[t("h1",A,s(a(m).title),1),t("div",B,s(new Date().toLocaleString()),1)]),(l(!0),n(f,null,g(a(i),(e,c)=>(l(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",E,[t("div",F,[t("div",L,s(e==null?void 0:e.no)+"/"+s(a(y)),1),b(" "+s(e==null?void 0:e.title)+" ",1),S])]),k(P,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(i).length-1?(l(),n("hr",T)):N("v-if",!0)]))),128))])],4))}}),M=w(H,[["__file","D:/homework/科学与社会/开题报告/node_modules/.pnpm/@slidev+client@0.43.5_postcss@8.4.30_vite@4.4.9/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{M as default};
