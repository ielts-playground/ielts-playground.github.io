import{r as d,a3 as _,ai as g,ae as k,d as y,u as b,b as u,c as m,F as x,aj as B,n as h,e as C,t as H,I as S,ak as A,W as q,f as I,k as M}from"./entry.NQmA8Kpy.js";const T=()=>{const a=d(),s=d([]),c=d([]),i=e=>e.forEach(t=>{const r=t.target.id;t.isIntersecting?s.value.push(r):s.value=s.value.filter(n=>n!==r)}),l=e=>e.forEach(t=>{a.value.observe(t)});return _(s,(e,t)=>{e.length===0?c.value=t:c.value=e},{deep:!0}),g(()=>a.value=new IntersectionObserver(i)),k(()=>{var e;return(e=a.value)==null?void 0:e.disconnect()}),{visibleHeadings:s,activeHeadings:c,updateHeadings:l}},$={class:"docs-toc-links"},w=["href","onClick"],D=y({__name:"DocsTocLinks",props:{links:{type:Array,default:()=>[]}},emits:["move"],setup(a,{emit:s}){const c=s,i=b(),{activeHeadings:l,updateHeadings:e}=T();setTimeout(()=>{e([...document.querySelectorAll(".document-driven-page h1, .docus-content h1"),...document.querySelectorAll(".document-driven-page h2, .docus-content h2"),...document.querySelectorAll(".document-driven-page h3, .docus-content h3"),...document.querySelectorAll(".document-driven-page h4, .docus-content h4")])},300);function t(n){i.push(`#${n}`),c("move",n)}function r(n){c("move",n)}return(n,v)=>{const f=E;return u(),m("ul",$,[(u(!0),m(x,null,B(a.links,o=>(u(),m("li",{key:o.text,class:h([`depth-${o.depth}`])},[C("a",{href:`#${o.id}`,class:h([S(l).includes(o.id)&&"active"]),onClick:A(p=>t(o.id),["prevent"])},H(o.text),11,w),o.children?(u(),q(f,{key:0,links:o.children,onMove:v[0]||(v[0]=p=>r(p))},null,8,["links"])):I("",!0)],2))),128))])}}}),E=M(D,[["__scopeId","data-v-a97df893"]]);export{E as default};
