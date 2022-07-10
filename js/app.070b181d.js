(function(){"use strict";var e={678:function(e,n,o){var t=o(963),a=o(252),r=o(262),l=o(577);function i(e){return Math.floor(Math.random()*e)}function s(e){const n=(0,r.iH)(!1);function o(){n.value=window.innerWidth<e}return o(),(0,a.bv)((()=>{window.addEventListener("resize",o)})),(0,a.Ah)((()=>{window.removeEventListener("resize",o)})),n}const u={class:"default-button"},c=(0,a.Uk)("Submit");var d={__name:"DefaultButton",setup(e){return(e,n)=>((0,a.wg)(),(0,a.iD)("div",u,[(0,a.WI)(e.$slots,"default",{},(()=>[c]))]))}};const m=d;var p=m;const f=["value"];var g={__name:"DefaultInput",props:{modelValue:[String,Number],max:[String,Number]},emits:["update:modelValue"],setup(e,{emit:n}){const o=e;return(0,a.YP)((()=>o.modelValue),((e,t)=>{e.length>3||isNaN(+e)?n("update:modelValue",t):e>+o.max?n("update:modelValue",+o.max):n("update:modelValue",+e)})),(o,t)=>((0,a.wg)(),(0,a.iD)("input",{type:"text",class:"default-input",value:e.modelValue,onInput:t[0]||(t[0]=e=>n("update:modelValue",e.target.value))},null,40,f))}};const v=g;var b=v;const C=(0,a._)("span",{class:"static"}," linear-gradient( ",-1),_=(0,a._)("span",{class:"static"}," deg, rgb( ",-1),h=(0,a._)("span",{class:"static"}," , ",-1),U=(0,a._)("span",{class:"static"}," , ",-1),V=(0,a._)("span",{class:"static"}," ), rgb( ",-1),w=(0,a._)("span",{class:"static"}," , ",-1),y=(0,a._)("span",{class:"static"}," , ",-1),S=(0,a._)("span",{class:"static"}," )) ",-1);var k={__name:"GradientInput",emits:["changeGradient"],setup(e,{emit:n}){const o=(0,a.f3)("gradientValues"),t=(0,a.f3)("isMobile");return(e,n)=>((0,a.wg)(),(0,a.iD)("div",{class:(0,l.C_)((0,r.SU)(t)?"gradient-input_mobile":"gradient-input")},[C,(0,a.Wm)(b,{max:"360",modelValue:(0,r.SU)(o).angle,"onUpdate:modelValue":n[0]||(n[0]=e=>(0,r.SU)(o).angle=e)},null,8,["modelValue"]),_,(0,a.Wm)(b,{max:"255",modelValue:(0,r.SU)(o).firstColor.r,"onUpdate:modelValue":n[1]||(n[1]=e=>(0,r.SU)(o).firstColor.r=e)},null,8,["modelValue"]),h,(0,a.Wm)(b,{max:"255",modelValue:(0,r.SU)(o).firstColor.g,"onUpdate:modelValue":n[2]||(n[2]=e=>(0,r.SU)(o).firstColor.g=e)},null,8,["modelValue"]),U,(0,a.Wm)(b,{max:"255",modelValue:(0,r.SU)(o).firstColor.b,"onUpdate:modelValue":n[3]||(n[3]=e=>(0,r.SU)(o).firstColor.b=e)},null,8,["modelValue"]),V,(0,a.Wm)(b,{max:"255",modelValue:(0,r.SU)(o).secondColor.r,"onUpdate:modelValue":n[4]||(n[4]=e=>(0,r.SU)(o).secondColor.r=e)},null,8,["modelValue"]),w,(0,a.Wm)(b,{max:"255",modelValue:(0,r.SU)(o).secondColor.g,"onUpdate:modelValue":n[5]||(n[5]=e=>(0,r.SU)(o).secondColor.g=e)},null,8,["modelValue"]),y,(0,a.Wm)(b,{max:"255",modelValue:(0,r.SU)(o).secondColor.b,"onUpdate:modelValue":n[6]||(n[6]=e=>(0,r.SU)(o).secondColor.b=e)},null,8,["modelValue"]),S],2))}};const G=k;var x=G;function W(e,n){let o,t,a=!1;function r(){if(a)return o=arguments,void(t=this);e.apply(this,arguments),a=!0,setTimeout((()=>{a=!1,o&&(r.apply(t,o),o=t=null)}),n)}return r}const $={class:"gradient-panel"},O=(0,a.Uk)(" Randomize ");var j={__name:"GradientPanel",emits:["changeGradient","copyGradient"],setup(e,{emit:n}){const o=(0,a.f3)("copy");function t(e){n("changeGradient",e)}const i=W((()=>{n("copyGradient"),console.log("2")}),750);return(e,s)=>((0,a.wg)(),(0,a.iD)("div",$,[(0,a.Wm)(p,{class:"change-button",onClick:s[0]||(s[0]=e=>n("changeGradient"))},{default:(0,a.w5)((()=>[O])),_:1}),(0,a.Wm)(x,{onChangeGradient:t}),(0,a.Wm)(p,{class:(0,l.C_)((0,r.SU)(o)?"copy-button_active":"copy-button"),onClick:(0,r.SU)(i)},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)((0,r.SU)(o)?"Copied!":"Copy"),1)])),_:1},8,["class","onClick"])]))}},D=o(744);const z=(0,D.Z)(j,[["__scopeId","data-v-333aa6fc"]]);var I=z;const J={class:"gradient-panel_mobile"},M={class:"gradient-buttons"},P=(0,a.Uk)(" Randomize ");var T={__name:"GradientPanelMobile",emits:["changeGradient","copyGradient"],setup(e,{emit:n}){const o=(0,a.f3)("copy");function t(e){n("changeGradient",e)}return(e,i)=>((0,a.wg)(),(0,a.iD)("div",J,[(0,a.Wm)(x,{onChangeGradient:t}),(0,a._)("div",M,[(0,a.Wm)(p,{class:"change-button",onClick:i[0]||(i[0]=e=>n("changeGradient"))},{default:(0,a.w5)((()=>[P])),_:1}),(0,a.Wm)(p,{class:(0,l.C_)((0,r.SU)(o)?"copy-button_active":"copy-button"),onClick:i[1]||(i[1]=e=>n("copyGradient"))},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)((0,r.SU)(o)?"Copied!":"Copy"),1)])),_:1},8,["class"])])]))}};const N=(0,D.Z)(T,[["__scopeId","data-v-5efbfb9c"]]);var q=N,E={__name:"App",setup(e){const n=s(910),o=(0,r.iH)(!1),t=(0,r.qj)({angle:0,firstColor:{r:0,g:0,b:0},secondColor:{r:0,g:0,b:0}});function u(){t.angle=i(90);for(let e in t.firstColor)t.firstColor[e]=i(255),t.secondColor[e]=i(255)}function c(){o.value=!0,navigator.clipboard.writeText(`linear-gradient(${t.angle}deg, rgb(${t.firstColor.r},${t.firstColor.g},${t.firstColor.b}), rgb(${t.secondColor.r},${t.secondColor.g},${t.secondColor.b}))`).then((()=>{setTimeout((()=>{o.value=!1}),350)}))}return(0,a.wF)((()=>{u()})),(0,a.JJ)("copy",o),(0,a.JJ)("gradientValues",t),(0,a.JJ)("isMobile",n),(e,o)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,r.SU)(n)?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(I,{key:0,onCopyGradient:c,onChangeGradient:u})),(0,a._)("div",{class:"gradient",style:(0,l.j5)(`background: linear-gradient(${t.angle}deg, rgb(${t.firstColor.r},${t.firstColor.g},${t.firstColor.b}), rgb(${t.secondColor.r},${t.secondColor.g},${t.secondColor.b}))`)},null,4),(0,r.SU)(n)?((0,a.wg)(),(0,a.j4)(q,{key:1,onCopyGradient:c,onChangeGradient:u})):(0,a.kq)("",!0)],64))}};const H=E;var A=H;(0,t.ri)(A).mount("#app")}},n={};function o(t){var a=n[t];if(void 0!==a)return a.exports;var r=n[t]={exports:{}};return e[t](r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(n,t,a,r){if(!t){var l=1/0;for(c=0;c<e.length;c++){t=e[c][0],a=e[c][1],r=e[c][2];for(var i=!0,s=0;s<t.length;s++)(!1&r||l>=r)&&Object.keys(o.O).every((function(e){return o.O[e](t[s])}))?t.splice(s--,1):(i=!1,r<l&&(l=r));if(i){e.splice(c--,1);var u=a();void 0!==u&&(n=u)}}return n}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[t,a,r]}}(),function(){o.d=function(e,n){for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};o.O.j=function(n){return 0===e[n]};var n=function(n,t){var a,r,l=t[0],i=t[1],s=t[2],u=0;if(l.some((function(n){return 0!==e[n]}))){for(a in i)o.o(i,a)&&(o.m[a]=i[a]);if(s)var c=s(o)}for(n&&n(t);u<l.length;u++)r=l[u],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(c)},t=self["webpackChunkrandom_css_gradient"]=self["webpackChunkrandom_css_gradient"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=o.O(void 0,[998],(function(){return o(678)}));t=o.O(t)})();
//# sourceMappingURL=app.070b181d.js.map