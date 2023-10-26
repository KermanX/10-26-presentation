import{o as d,e as k,f as e,z as y,A as T,q as h,d as B,B as S,v,C as D,_ as E,D as M,E as P,c as C,a as z,G as $,H as F,I as H,J as R,K as I,L,M as q,N as O,O as U,P as W,s as Z,Q as G,R as j,g as i,l as u,t as J,n as x,i as N,S as A,T as V,m as K,U as Q,j as X,V as w,W as Y,X as ee,F as te,Y as se,Z as oe,$ as le,a0 as ne,a1 as ae,a2 as ie,a3 as re}from"./index-21620da9.js";import{N as ce}from"./NoteDisplay-1ac2b0f8.js";import ue from"./DrawingControls-92e99f09.js";const de={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_e=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),me=[_e];function pe(o,n){return d(),k("svg",de,me)}const ve={name:"carbon-renew",render:pe},he={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},fe=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),ge=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),xe=[fe,ge];function we(o,n){return d(),k("svg",he,xe)}const ye={name:"carbon-time",render:we},Se="/10-26-presentation/assets/logo-title-horizontal-96c3c915.png";function ke(){const o=y(Date.now()),n=T({interval:1e3}),_=h(()=>{const t=(n.value-o.value)/1e3,l=Math.floor(t%60).toString().padStart(2,"0");return`${Math.floor(t/60).toString().padStart(2,"0")}:${l}`});function m(){o.value=n.value}return{timer:_,resetTimer:m}}const be=B({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(o){const n=o,_=h(()=>{var t,l,s;return(s=(l=(t=S.value)==null?void 0:t.meta)==null?void 0:l.slide)==null?void 0:s.note}),m=h(()=>{var t,l,s;return(s=(l=(t=S.value)==null?void 0:t.meta)==null?void 0:l.slide)==null?void 0:s.noteHTML});return(t,l)=>(d(),v(ce,{class:D(n.class),note:_.value,"note-html":m.value},null,8,["class","note","note-html"]))}}),Ce=E(be,[["__file","D:/homework/科学与社会/开题报告/node_modules/.pnpm/@slidev+client@0.43.5_postcss@8.4.30_vite@4.4.9/node_modules/@slidev/client/internals/NoteStatic.vue"]]),f=o=>(ne("data-v-9bf4990d"),o=o(),ae(),o),$e={class:"bg-main h-full slidev-presenter"},Ne={class:"grid-container"},Ae={class:"grid-section top flex"},Ve=f(()=>e("img",{src:Se,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2",style:{height:"3.5rem"}},null,-1)),Be=f(()=>e("div",{class:"flex-auto"},null,-1)),De={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Ee=f(()=>e("div",{class:"context"}," current ",-1)),Te=f(()=>e("div",{class:"context"}," next ",-1)),Me={class:"grid-section note overflow-auto"},Pe={class:"grid-section bottom"},ze={class:"progress-bar"},Fe=B({__name:"Presenter",setup(o){const n=y();M(),P(n);const _=C.titleTemplate.replace("%s",C.title||"Slidev");z({title:`Presenter - ${_}`});const{timer:m,resetTimer:t}=ke(),l=y([]),s=h(()=>$.value<F.value?{route:S.value,clicks:$.value+1}:H.value?{route:R.value,clicks:0}:null);return I(),L(()=>{const b=n.value.querySelector("#slide-content"),r=q(O()),g=U();W(()=>{if(!g.value||G.value||!j.value)return;const c=b.getBoundingClientRect(),a=(r.x-c.left)/c.width*100,p=(r.y-c.top)/c.height*100;if(!(a<0||a>100||p<0||p>100))return{x:a,y:p}},c=>{Z.cursor=c})}),(b,r)=>{const g=ye,c=ve;return d(),k(te,null,[e("div",$e,[e("div",Ne,[e("div",Ae,[Ve,Be,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:r[0]||(r[0]=(...a)=>i(t)&&i(t)(...a))},[u(g,{class:"absolute"}),u(c,{class:"absolute opacity-0"})]),e("div",De,J(i(m)),1)]),e("div",{ref_key:"main",ref:n,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:x(i(N))},[u(V,{key:"main",class:"h-full w-full"},{default:A(()=>[u(se,{"render-context":"presenter"})]),_:1}),Ee],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:x(i(N))},[s.value?(d(),v(V,{key:"next",class:"h-full w-full"},{default:A(()=>{var a;return[u(i(le),{is:(a=s.value.route)==null?void 0:a.component,"clicks-elements":l.value,"onUpdate:clicksElements":r[1]||(r[1]=p=>l.value=p),clicks:s.value.clicks,"clicks-disabled":!1,class:D(i(oe)(s.value.route)),route:s.value.route,"render-context":"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):K("v-if",!0),Te],4),e("div",Me,[(d(),v(Ce,{key:2,class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",Pe,[u(ie,{persist:!0})]),(d(),v(ue,{key:0}))]),e("div",ze,[e("div",{class:"progress h-2px bg-primary transition-all",style:x({width:`${(i(Q)-1)/(i(X)-1)*100}%`})},null,4)])]),u(re),u(ee,{modelValue:i(w),"onUpdate:modelValue":r[2]||(r[2]=a=>Y(w)?w.value=a:null)},null,8,["modelValue"])],64)}}});const Le=E(Fe,[["__scopeId","data-v-9bf4990d"],["__file","D:/homework/科学与社会/开题报告/node_modules/.pnpm/@slidev+client@0.43.5_postcss@8.4.30_vite@4.4.9/node_modules/@slidev/client/internals/Presenter.vue"]]);export{Le as default};