import{c as u,a as p,o as f,b as m,d as b,w as g,u as h,N as _,r as v,e as y,f as x,g as S}from"./vendor.ee9d4dfc.js";const L=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}};L();const w="modulepreload",d={},P="/",C=function(t,s){return!s||s.length===0?t():Promise.all(s.map(o=>{if(o=`${P}${o}`,o in d)return;d[o]=!0;const e=o.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const n=document.createElement("link");if(n.rel=e?"stylesheet":w,e||(n.as="script",n.crossOrigin=""),n.href=o,document.head.appendChild(n),e)return new Promise((c,l)=>{n.addEventListener("load",c),n.addEventListener("error",l)})})).then(()=>t())},O=u({history:p(),routes:[{path:"/",component:()=>C(()=>import("./Home.585e37fa.js"),["assets/Home.585e37fa.js","assets/Home.9318287f.css","assets/vendor.ee9d4dfc.js"])}]});const E={setup(a){const t={Input:{color:"rgba(0,0,0,0)",colorDisabled:"rgba(0,0,0,0)",border:"none",borderHover:"none",borderDisabled:"none",borderFocus:"none",boxShadowFocus:"none",borderRadius:"64px",paddingSmall:"0px",paddingMedium:"0px",paddingLarge:"0px",placeholderColor:"#bdbdbd",fontSizeMedium:"18px"},Select:{peers:{InternalSelection:{color:"rgba(0,0,0,0)",colorDisabled:"rgba(0,0,0,0)",border:"none",borderHover:"none",borderDisabled:"none",borderFocus:"none",borderRadius:"6px",boxShadowFocus:"none",paddingTiny:"0px",paddingSmall:"0px",paddingMedium:"0px",paddingLarge:"0px",placeholderColor:"#bdbdbd",fontSizeMedium:"18px"}}}};return f(()=>{console.log("app mounted")}),(s,o)=>{const e=v("router-view");return m(),b(h(_),{"theme-overrides":t},{default:g(()=>[y(e)]),_:1})}}};const i=x(E);i.use(O);i.use(S());i.mount("#app");
