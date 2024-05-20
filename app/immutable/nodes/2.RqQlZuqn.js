import{y as Oh,z as Uh,q as ts,k as Vh,s as kn,n as X,b as Xt,o as Qi,A as Fr,e as ct,B as ti,h as Hh,C as $t,i as hr,r as qr,f as bt,D as Gh}from"../chunks/scheduler.GOssmixh.js";import{q as ea,a as Wt,n as ta,t as _t,S as ri,i as si,e as ee,s as Be,c as te,d as be,y as ot,h as Oe,g as Z,o as G,p as Zn,j as ke,k as Y,z as nt,A as Rt,B as au,b as an,f as on,l as Xi,C as Et,D as pl,E as dr,F as ao,m as Us,u as di,v as fi,w as pi,x as mi}from"../chunks/index.t7KkFELy.js";import{w as Mn}from"../chunks/index.8NwuiTUI.js";const ou=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function yn(r,e){const t=e.token={};function n(i,s,a,o){if(e.token!==t)return;e.resolved=o;let l=e.ctx;a!==void 0&&(l=l.slice(),l[a]=o);const c=i&&(e.current=i)(l);let u=!1;e.block&&(e.blocks?e.blocks.forEach((h,d)=>{d!==s&&h&&(ea(),Wt(h,1,1,()=>{e.blocks[d]===h&&(e.blocks[d]=null)}),ta())}):e.block.d(1),c.c(),_t(c,1),c.m(e.mount(),e.anchor),u=!0),e.block=c,e.blocks&&(e.blocks[s]=c),u&&Vh()}if(Oh(r)){const i=Uh();if(r.then(s=>{ts(i),n(e.then,1,e.value,s),ts(null)},s=>{if(ts(i),n(e.catch,2,e.error,s),ts(null),!e.hasCatch)throw s}),e.current!==e.pending)return n(e.pending,0),!0}else{if(e.current!==e.then)return n(e.then,1,e.value,r),!0;e.resolved=r}}function zr(r,e,t){const n=e.slice(),{resolved:i}=r;r.current===r.then&&(n[r.value]=i),r.current===r.catch&&(n[r.error]=i),r.block.p(n,t)}function Vs(r){return r?.length!==void 0?r:Array.from(r)}const Wh=!1,$_=Object.freeze(Object.defineProperty({__proto__:null,ssr:Wh},Symbol.toStringTag,{value:"Module"}));var oo={d:(r,e)=>{for(var t in e)oo.o(e,t)&&!oo.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:e[t]})},o:(r,e)=>Object.prototype.hasOwnProperty.call(r,e)},lu={};oo.d(lu,{Z:()=>Xh});const qh={root:"body",duration:1e3,easing:"cubic-bezier(0.15, 1, 0.4, 1)",offsets:[],fixedOffsets:[]},lo={speedY:1,speedX:1},jh=[{name:"easeInSine",value:[.12,0,.39,0]},{name:"easeOutSine",value:[.61,1,.88,1]},{name:"easeInOutSine",value:[.37,0,.63,1]},{name:"easeInQuad",value:[.11,0,.5,0]},{name:"easeOutQuad",value:[.5,1,.89,1]},{name:"easeInOutQuad",value:[.45,0,.55,1]},{name:"easeInCubic",value:[.32,0,.67,0]},{name:"easeOutCubic",value:[.33,1,.68,1]},{name:"easeInOutCubic",value:[.65,0,.35,1]},{name:"easeInQuart",value:[.5,0,.75,0]},{name:"easeOutQuart",value:[.25,1,.5,1]},{name:"easeInOutQuart",value:[.76,0,.24,1]},{name:"easeInQuint",value:[.64,0,.78,0]},{name:"easeOutQuint",value:[.22,1,.36,1]},{name:"easeInOutQuint",value:[.83,0,.17,1]},{name:"easeInExpo",value:[.7,0,.84,0]},{name:"easeOutExpo",value:[.16,1,.3,1]},{name:"easeInOutExpo",value:[.87,0,.13,1]},{name:"easeInCirc",value:[.55,0,1,.45]},{name:"easeOutCirc",value:[0,.55,.45,1]},{name:"easeInOutCirc",value:[.85,0,.15,1]}];function Jt(r,e){return typeof r=="string"?e?document.querySelectorAll(r):document.querySelector(r):r}function ml(r,e,t,n){let i=.1,s=typeof Float32Array=="function";function a(d,p){return 1-3*p+3*d}function o(d,p){return 3*p-6*d}function l(d){return 3*d}function c(d,p,g){return((a(p,g)*d+o(p,g))*d+l(p))*d}function u(d,p,g){return 3*a(p,g)*d*d+2*o(p,g)*d+l(p)}if(!(0<=r&&r<=1&&0<=t&&t<=1))throw new Error("bezier x values must be in [0, 1] range");if(r===e&&t===n)return function(d){return d};let h=s?new Float32Array(11):new Array(11);for(let d=0;d<11;++d)h[d]=c(d*i,r,t);return d=>d===0||d===1?d:c(function(p){let g=0,v=1;for(;v!==10&&h[v]<=p;++v)g+=i;--v;let x=g+(p-h[v])/(h[v+1]-h[v])*i,m=u(x,r,t);return m>=.001?function(f,b,y,_){for(let E=0;E<4;++E){let C=u(b,y,_);if(C===0)return b;b-=(c(b,y,_)-f)/C}return b}(p,x,r,t):m===0?x:function(f,b,y,_,E){let C,D,O=0;do D=b+(y-b)/2,C=c(D,_,E)-f,C>0?y=D:b=D;while(Math.abs(C)>1e-7&&++O<10);return D}(p,g,g+i,r,t)}(d),e,n)}var Ns,jn,Pn,Zt,In,yt,Ar,Dt,Ft,ks,cu,Hs,Gs,uu,Cr,Ot=function(r,e,t,n,i){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?r!==e||!i:!e.has(r))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?i.call(r,t):i?i.value=t:e.set(r,t),t},ye=function(r,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?r!==e||!n:!e.has(r))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(r):n?n.value:e.get(r)};class Xh{constructor(e){Ns.add(this),jn.set(this,void 0),Pn.set(this,{x:0,y:0}),Zt.set(this,{x:0,y:0}),In.set(this,void 0),yt.set(this,void 0),Ar.set(this,void 0),Dt.set(this,[]),Ft.set(this,[]),ks.set(this,void 0),Hs.set(this,t=>{Ot(this,Pn,{x:ye(this,yt,"f").scrollLeft,y:ye(this,yt,"f").scrollTop},"f"),ye(this,Pn,"f").x!==void 0&&ye(this,Pn,"f").y!==void 0||Ot(this,Pn,{x:ye(this,yt,"f").scrollX,y:ye(this,yt,"f").scrollY},"f"),ye(this,jn,"f").onScroll&&new Promise(n=>{ye(this,jn,"f").onScroll(t),n(!0)})}),Gs.set(this,()=>{if(ye(this,ks,"f"))return;let t=function(o){let l,c=jh.filter(u=>u.name==o);if(l=c[0]?c[0].value:(o=(o=o.split(/([^\(-\)]*)/))[3].split(/,(?![^()]*\()/)).map(u=>parseFloat(u)),Array.isArray(l)&&l.length==4)return l;throw"easing string is invalid."}(ye(this,jn,"f").easing),n=1/(ye(this,jn,"f").duration/10+1);ye(this,Zt,"f").x+=ml.apply(null,t)(n)*(ye(this,Pn,"f").x-ye(this,Zt,"f").x),ye(this,Zt,"f").y+=ml.apply(null,t)(n)*(ye(this,Pn,"f").y-ye(this,Zt,"f").y),ye(this,Zt,"f").x=Math.ceil(100*ye(this,Zt,"f").x)/100,ye(this,Zt,"f").y=Math.ceil(100*ye(this,Zt,"f").y)/100;let i=-1*ye(this,Zt,"f").x,s=-1*ye(this,Zt,"f").y,a=`translate3d(${i}px, ${s}px, 0px)`;if(ye(this,In,"f").fixed.style.webkitTransform=a,ye(this,In,"f").fixed.style.transform=a,Array.isArray(ye(this,Ft,"f")))for(let o=0;o<ye(this,Ft,"f").length;o++){let l=Object.assign({},lo,ye(this,Ft,"f")[o]),c=`translate3d(${i*(l.speedX-1)}px, ${s*(l.speedY-1)}px, 0)`,u=Jt(l.element,!0);if(NodeList.prototype.isPrototypeOf(u))for(let h of u)h.style.webkitTransform=c,h.style.transform=c;else u.style.webkitTransform=c,u.style.transform=c}if(Array.isArray(ye(this,Dt,"f")))for(let o=0;o<ye(this,Dt,"f").length;o++){let l=`translate3d(${-i}px, ${-s}px, 0px)`,c=Jt(ye(this,Dt,"f")[o],!0);if(NodeList.prototype.isPrototypeOf(c))for(let u of c)u.style.webkitTransform=l,u.style.transform=l;else c.style.webkitTransform=l,c.style.transform=l}requestAnimationFrame(()=>ye(this,Gs,"f").call(this))}),Cr.set(this,()=>{ye(this,In,"f")!==void 0&&(ye(this,In,"f").dummy.style.height=ye(this,In,"f").fixed.scrollHeight+"px")}),Ot(this,jn,Object.assign({},qh,e),"f"),Ot(this,yt,Jt(e.root),"f"),e.fixedOffsets!==void 0&&Ot(this,Dt,e.fixedOffsets,"f"),e.offsets!==void 0&&Ot(this,Ft,e.offsets,"f"),function(){let t=!1;var n;return n=navigator.userAgent||navigator.vendor,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(n)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(n.substring(0,4)))&&(t=!0),!t&&CSS.supports&&(t=!CSS.supports("position","sticky")),!t}()?ye(this,Ns,"m",cu).call(this):ye(this,Ns,"m",uu).call(this)}destroy(){let e=ye(this,yt,"f").querySelector("._SS_wrapper");ye(this,yt,"f").removeEventListener("scroll",ye(this,Hs,"f")),ye(this,yt,"f").removeEventListener("resize",ye(this,Cr,"f")),ye(this,Ar,"f").disconnect();for(let n=e.children.length;n>0;n--)e.children[n-1].removeProperty&&e.children[n-1].removeProperty("transform"),ye(this,yt,"f").insertBefore(e.children[n-1],ye(this,yt,"f").children[0]);function t(n){n&&n.forEach(i=>{let s=Jt(i.element,!0);if(i.element||(s=Jt(i,!0)),NodeList.prototype.isPrototypeOf(s))for(i of s)i.style.removeProperty("transform"),i.style.removeProperty("-webkit-transform");else s.style.removeProperty("transform"),s.style.removeProperty("-webkit-transform")})}e.remove(),Jt(ye(this,jn,"f").root).querySelector("._SS_dummy").remove(),ye(this,yt,"f").style.removeProperty("overflow"),ye(this,yt,"f").style.removeProperty("position"),Ot(this,ks,!0,"f"),t(ye(this,Ft,"f")),t(ye(this,Dt,"f"))}removeOffset(e){Ot(this,Ft,ye(this,Ft,"f").filter(n=>n.element!==e),"f"),Ot(this,Ft,ye(this,Ft,"f").filter(n=>n.element!==Jt(e,!0)),"f"),Ot(this,Dt,ye(this,Dt,"f").filter(n=>n!==e),"f"),Ot(this,Dt,ye(this,Dt,"f").filter(n=>n!==Jt(e,!0)),"f");let t=Jt(e,!0);if(NodeList.prototype.isPrototypeOf(t))for(let n of t)n.style.removeProperty("transform"),n.style.removeProperty("-webkit-transform"),n.style.position=="fixed"&&n.style.removeProperty("position");else t.style.removeProperty("transform"),t.style.removeProperty("-webkit-transform"),t.style.position=="fixed"&&t.style.removeProperty("position")}addOffset(e){typeof e=="object"&&!ye(this,Ft,"f").find(t=>t.element==e.element)&&e.element&&(e=Object.assign({},lo,e),ye(this,Ft,"f").push(e))}addFixedOffset(e){Jt(e,!0)&&!ye(this,Dt,"f").includes(e)&&ye(this,Dt,"f").push(e)}}jn=new WeakMap,Pn=new WeakMap,Zt=new WeakMap,In=new WeakMap,yt=new WeakMap,Ar=new WeakMap,Dt=new WeakMap,Ft=new WeakMap,ks=new WeakMap,Hs=new WeakMap,Gs=new WeakMap,Cr=new WeakMap,Ns=new WeakSet,cu=function(){Ot(this,In,function(e){getComputedStyle(e).position=="absolute"&&getComputedStyle(e).position=="fixed"||(e.style.position="relative");let t=document.createElement("div"),n=document.createElement("div");t.classList.add("_SS_wrapper"),n.classList.add("_SS_dummy");for(let i=e.children.length;i>0;i--)t.insertBefore(e.children[i-1],t.children[0]);return e.innerHTML="",e.style.overflow="auto",e.appendChild(t),e.appendChild(n),n.style.height=t.scrollHeight+"px",n.style.width=t.scrollWidth+"px",n.style.top="0px",n.style.left="0px",n.style.position="absolute",n.style.zIndex="-9999",t.style.zIndex="1",t.style.height="100%",t.style.width="100%",t.style.overflow="visible",t.style.top="0px",t.style.left="0px",t.style.position="sticky",{fixed:e.querySelector("div._SS_wrapper"),dummy:e.querySelector("div._SS_dummy")}}(ye(this,yt,"f")),"f");let r=new WebKitCSSMatrix(window.getComputedStyle(ye(this,In,"f").fixed).transform);Ot(this,Pn,{x:r.m41,y:r.m42},"f"),Ot(this,Ar,new MutationObserver(ye(this,Cr,"f")),"f"),ye(this,Ar,"f").observe(ye(this,yt,"f"),{childList:!0,attributes:!0,subtree:!0}),window.addEventListener("resize",ye(this,Cr,"f")),ye(this,yt,"f").addEventListener("scroll",ye(this,Hs,"f")),ye(this,Gs,"f").call(this)},uu=function(){ye(this,yt,"f").addEventListener("scroll",r=>{ye(this,Ft,"f")&&ye(this,Ft,"f").forEach(e=>{e=Object.assign({},lo,e);let t=`translate3d(${r.target.scrollLeft*(1-e.speedX)}px, ${r.target.scrollTop*(1-e.speedY)}px, 0px)`,n=Jt(e.element,!0);if(Symbol.iterator in Object(n))for(let i of n)i.style.webkitTransform=t,i.style.transform=t;else n.style.webkitTransform=t,n.style.transform=t})}),ye(this,Dt,"f")&&ye(this,Dt,"f").forEach(r=>{let e=Jt(r,!0);if(Symbol.iterator in Object(e))for(let t of e)t.style.position="fixed";else e.style.position="fixed"})};var Yh=lu.Z;let Ws=Mn(),Bs=Mn(!1),Lo=Mn(0),co=Mn(!1),uo=Mn(),ho=Mn(),fo=Mn(),Ro=Mn([]),hu,Ki=new Promise(r=>hu=r),du,Zh=new Promise(r=>du=r);const Po=Mn(),fu=Mn();async function Nr(r){const e=new Promise(async(t,n)=>{const i=await(await fetch(r)).blob(),s=new FileReader;s.readAsDataURL(i),s.onload=()=>t(s.result),s.onerror=a=>n(a)});return Ro.update(t=>[...t,e]),e}function gl(r){return new Promise(async e=>{const n=await(await fetch(r)).json();e(n)})}function Lr(r,e){const t=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting&&(e(i),t.disconnect())})},{root:null,threshold:.4});t.observe(r)}function Jh(){console.log("%cLooks like you're a developer.","font-size: 1.2rem; font-weight: bold;"+"color: #22c55e;")}var pu={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},Io={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},$h=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],qs={CSS:{},springs:{}};function vn(r,e,t){return Math.min(Math.max(r,e),t)}function Rr(r,e){return r.indexOf(e)>-1}function ya(r,e){return r.apply(null,e)}var Te={arr:function(r){return Array.isArray(r)},obj:function(r){return Rr(Object.prototype.toString.call(r),"Object")},pth:function(r){return Te.obj(r)&&r.hasOwnProperty("totalLength")},svg:function(r){return r instanceof SVGElement},inp:function(r){return r instanceof HTMLInputElement},dom:function(r){return r.nodeType||Te.svg(r)},str:function(r){return typeof r=="string"},fnc:function(r){return typeof r=="function"},und:function(r){return typeof r>"u"},nil:function(r){return Te.und(r)||r===null},hex:function(r){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(r)},rgb:function(r){return/^rgb/.test(r)},hsl:function(r){return/^hsl/.test(r)},col:function(r){return Te.hex(r)||Te.rgb(r)||Te.hsl(r)},key:function(r){return!pu.hasOwnProperty(r)&&!Io.hasOwnProperty(r)&&r!=="targets"&&r!=="keyframes"}};function mu(r){var e=/\(([^)]+)\)/.exec(r);return e?e[1].split(",").map(function(t){return parseFloat(t)}):[]}function gu(r,e){var t=mu(r),n=vn(Te.und(t[0])?1:t[0],.1,100),i=vn(Te.und(t[1])?100:t[1],.1,100),s=vn(Te.und(t[2])?10:t[2],.1,100),a=vn(Te.und(t[3])?0:t[3],.1,100),o=Math.sqrt(i/n),l=s/(2*Math.sqrt(i*n)),c=l<1?o*Math.sqrt(1-l*l):0,u=1,h=l<1?(l*o+-a)/c:-a+o;function d(g){var v=e?e*g/1e3:g;return l<1?v=Math.exp(-v*l*o)*(u*Math.cos(c*v)+h*Math.sin(c*v)):v=(u+h*v)*Math.exp(-v*o),g===0||g===1?g:1-v}function p(){var g=qs.springs[r];if(g)return g;for(var v=1/6,x=0,m=0;;)if(x+=v,d(x)===1){if(m++,m>=16)break}else m=0;var f=x*v*1e3;return qs.springs[r]=f,f}return e?d:p}function Qh(r){return r===void 0&&(r=10),function(e){return Math.ceil(vn(e,1e-6,1)*r)*(1/r)}}var Kh=function(){var r=11,e=1/(r-1);function t(u,h){return 1-3*h+3*u}function n(u,h){return 3*h-6*u}function i(u){return 3*u}function s(u,h,d){return((t(h,d)*u+n(h,d))*u+i(h))*u}function a(u,h,d){return 3*t(h,d)*u*u+2*n(h,d)*u+i(h)}function o(u,h,d,p,g){var v,x,m=0;do x=h+(d-h)/2,v=s(x,p,g)-u,v>0?d=x:h=x;while(Math.abs(v)>1e-7&&++m<10);return x}function l(u,h,d,p){for(var g=0;g<4;++g){var v=a(h,d,p);if(v===0)return h;var x=s(h,d,p)-u;h-=x/v}return h}function c(u,h,d,p){if(!(0<=u&&u<=1&&0<=d&&d<=1))return;var g=new Float32Array(r);if(u!==h||d!==p)for(var v=0;v<r;++v)g[v]=s(v*e,u,d);function x(m){for(var f=0,b=1,y=r-1;b!==y&&g[b]<=m;++b)f+=e;--b;var _=(m-g[b])/(g[b+1]-g[b]),E=f+_*e,C=a(E,u,d);return C>=.001?l(m,E,u,d):C===0?E:o(m,f,f+e,u,d)}return function(m){return u===h&&d===p||m===0||m===1?m:s(x(m),h,p)}}return c}(),vu=function(){var r={linear:function(){return function(n){return n}}},e={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Expo:function(){return function(n){return n?Math.pow(2,10*n-10):0}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var i,s=4;n<((i=Math.pow(2,--s))-1)/11;);return 1/Math.pow(4,3-s)-7.5625*Math.pow((i*3-2)/22-n,2)}},Elastic:function(n,i){n===void 0&&(n=1),i===void 0&&(i=.5);var s=vn(n,1,10),a=vn(i,.1,2);return function(o){return o===0||o===1?o:-s*Math.pow(2,10*(o-1))*Math.sin((o-1-a/(Math.PI*2)*Math.asin(1/s))*(Math.PI*2)/a)}}},t=["Quad","Cubic","Quart","Quint"];return t.forEach(function(n,i){e[n]=function(){return function(s){return Math.pow(s,i+2)}}}),Object.keys(e).forEach(function(n){var i=e[n];r["easeIn"+n]=i,r["easeOut"+n]=function(s,a){return function(o){return 1-i(s,a)(1-o)}},r["easeInOut"+n]=function(s,a){return function(o){return o<.5?i(s,a)(o*2)/2:1-i(s,a)(o*-2+2)/2}},r["easeOutIn"+n]=function(s,a){return function(o){return o<.5?(1-i(s,a)(1-o*2))/2:(i(s,a)(o*2-1)+1)/2}}}),r}();function Do(r,e){if(Te.fnc(r))return r;var t=r.split("(")[0],n=vu[t],i=mu(r);switch(t){case"spring":return gu(r,e);case"cubicBezier":return ya(Kh,i);case"steps":return ya(Qh,i);default:return ya(n,i)}}function xu(r){try{var e=document.querySelectorAll(r);return e}catch{return}}function na(r,e){for(var t=r.length,n=arguments.length>=2?arguments[1]:void 0,i=[],s=0;s<t;s++)if(s in r){var a=r[s];e.call(n,a,s,r)&&i.push(a)}return i}function ia(r){return r.reduce(function(e,t){return e.concat(Te.arr(t)?ia(t):t)},[])}function vl(r){return Te.arr(r)?r:(Te.str(r)&&(r=xu(r)||r),r instanceof NodeList||r instanceof HTMLCollection?[].slice.call(r):[r])}function Fo(r,e){return r.some(function(t){return t===e})}function zo(r){var e={};for(var t in r)e[t]=r[t];return e}function po(r,e){var t=zo(r);for(var n in r)t[n]=e.hasOwnProperty(n)?e[n]:r[n];return t}function ra(r,e){var t=zo(r);for(var n in e)t[n]=Te.und(r[n])?e[n]:r[n];return t}function ed(r){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(r);return e?"rgba("+e[1]+",1)":r}function td(r){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,t=r.replace(e,function(o,l,c,u){return l+l+c+c+u+u}),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),i=parseInt(n[1],16),s=parseInt(n[2],16),a=parseInt(n[3],16);return"rgba("+i+","+s+","+a+",1)"}function nd(r){var e=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(r)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(r),t=parseInt(e[1],10)/360,n=parseInt(e[2],10)/100,i=parseInt(e[3],10)/100,s=e[4]||1;function a(d,p,g){return g<0&&(g+=1),g>1&&(g-=1),g<1/6?d+(p-d)*6*g:g<1/2?p:g<2/3?d+(p-d)*(2/3-g)*6:d}var o,l,c;if(n==0)o=l=c=i;else{var u=i<.5?i*(1+n):i+n-i*n,h=2*i-u;o=a(h,u,t+1/3),l=a(h,u,t),c=a(h,u,t-1/3)}return"rgba("+o*255+","+l*255+","+c*255+","+s+")"}function id(r){if(Te.rgb(r))return ed(r);if(Te.hex(r))return td(r);if(Te.hsl(r))return nd(r)}function Fn(r){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(r);if(e)return e[1]}function rd(r){if(Rr(r,"translate")||r==="perspective")return"px";if(Rr(r,"rotate")||Rr(r,"skew"))return"deg"}function mo(r,e){return Te.fnc(r)?r(e.target,e.id,e.total):r}function xn(r,e){return r.getAttribute(e)}function No(r,e,t){var n=Fn(e);if(Fo([t,"deg","rad","turn"],n))return e;var i=qs.CSS[e+t];if(!Te.und(i))return i;var s=100,a=document.createElement(r.tagName),o=r.parentNode&&r.parentNode!==document?r.parentNode:document.body;o.appendChild(a),a.style.position="absolute",a.style.width=s+t;var l=s/a.offsetWidth;o.removeChild(a);var c=l*parseFloat(e);return qs.CSS[e+t]=c,c}function yu(r,e,t){if(e in r.style){var n=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),i=r.style[e]||getComputedStyle(r).getPropertyValue(n)||"0";return t?No(r,i,t):i}}function ko(r,e){if(Te.dom(r)&&!Te.inp(r)&&(!Te.nil(xn(r,e))||Te.svg(r)&&r[e]))return"attribute";if(Te.dom(r)&&Fo($h,e))return"transform";if(Te.dom(r)&&e!=="transform"&&yu(r,e))return"css";if(r[e]!=null)return"object"}function _u(r){if(Te.dom(r)){for(var e=r.style.transform||"",t=/(\w+)\(([^)]*)\)/g,n=new Map,i;i=t.exec(e);)n.set(i[1],i[2]);return n}}function sd(r,e,t,n){var i=Rr(e,"scale")?1:0+rd(e),s=_u(r).get(e)||i;return t&&(t.transforms.list.set(e,s),t.transforms.last=e),n?No(r,s,n):s}function Bo(r,e,t,n){switch(ko(r,e)){case"transform":return sd(r,e,n,t);case"css":return yu(r,e,t);case"attribute":return xn(r,e);default:return r[e]||0}}function Oo(r,e){var t=/^(\*=|\+=|-=)/.exec(r);if(!t)return r;var n=Fn(r)||0,i=parseFloat(e),s=parseFloat(r.replace(t[0],""));switch(t[0][0]){case"+":return i+s+n;case"-":return i-s+n;case"*":return i*s+n}}function bu(r,e){if(Te.col(r))return id(r);if(/\s/g.test(r))return r;var t=Fn(r),n=t?r.substr(0,r.length-t.length):r;return e?n+e:n}function Uo(r,e){return Math.sqrt(Math.pow(e.x-r.x,2)+Math.pow(e.y-r.y,2))}function ad(r){return Math.PI*2*xn(r,"r")}function od(r){return xn(r,"width")*2+xn(r,"height")*2}function ld(r){return Uo({x:xn(r,"x1"),y:xn(r,"y1")},{x:xn(r,"x2"),y:xn(r,"y2")})}function Mu(r){for(var e=r.points,t=0,n,i=0;i<e.numberOfItems;i++){var s=e.getItem(i);i>0&&(t+=Uo(n,s)),n=s}return t}function cd(r){var e=r.points;return Mu(r)+Uo(e.getItem(e.numberOfItems-1),e.getItem(0))}function wu(r){if(r.getTotalLength)return r.getTotalLength();switch(r.tagName.toLowerCase()){case"circle":return ad(r);case"rect":return od(r);case"line":return ld(r);case"polyline":return Mu(r);case"polygon":return cd(r)}}function ud(r){var e=wu(r);return r.setAttribute("stroke-dasharray",e),e}function hd(r){for(var e=r.parentNode;Te.svg(e)&&Te.svg(e.parentNode);)e=e.parentNode;return e}function Su(r,e){var t=e||{},n=t.el||hd(r),i=n.getBoundingClientRect(),s=xn(n,"viewBox"),a=i.width,o=i.height,l=t.viewBox||(s?s.split(" "):[0,0,a,o]);return{el:n,viewBox:l,x:l[0]/1,y:l[1]/1,w:a,h:o,vW:l[2],vH:l[3]}}function dd(r,e){var t=Te.str(r)?xu(r)[0]:r,n=e||100;return function(i){return{property:i,el:t,svg:Su(t),totalLength:wu(t)*(n/100)}}}function fd(r,e,t){function n(u){u===void 0&&(u=0);var h=e+u>=1?e+u:0;return r.el.getPointAtLength(h)}var i=Su(r.el,r.svg),s=n(),a=n(-1),o=n(1),l=t?1:i.w/i.vW,c=t?1:i.h/i.vH;switch(r.property){case"x":return(s.x-i.x)*l;case"y":return(s.y-i.y)*c;case"angle":return Math.atan2(o.y-a.y,o.x-a.x)*180/Math.PI}}function xl(r,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,n=bu(Te.pth(r)?r.totalLength:r,e)+"";return{original:n,numbers:n.match(t)?n.match(t).map(Number):[0],strings:Te.str(r)||e?n.split(t):[]}}function Vo(r){var e=r?ia(Te.arr(r)?r.map(vl):vl(r)):[];return na(e,function(t,n,i){return i.indexOf(t)===n})}function Tu(r){var e=Vo(r);return e.map(function(t,n){return{target:t,id:n,total:e.length,transforms:{list:_u(t)}}})}function pd(r,e){var t=zo(e);if(/^spring/.test(t.easing)&&(t.duration=gu(t.easing)),Te.arr(r)){var n=r.length,i=n===2&&!Te.obj(r[0]);i?r={value:r}:Te.fnc(e.duration)||(t.duration=e.duration/n)}var s=Te.arr(r)?r:[r];return s.map(function(a,o){var l=Te.obj(a)&&!Te.pth(a)?a:{value:a};return Te.und(l.delay)&&(l.delay=o?0:e.delay),Te.und(l.endDelay)&&(l.endDelay=o===s.length-1?e.endDelay:0),l}).map(function(a){return ra(a,t)})}function md(r){for(var e=na(ia(r.map(function(s){return Object.keys(s)})),function(s){return Te.key(s)}).reduce(function(s,a){return s.indexOf(a)<0&&s.push(a),s},[]),t={},n=function(s){var a=e[s];t[a]=r.map(function(o){var l={};for(var c in o)Te.key(c)?c==a&&(l.value=o[c]):l[c]=o[c];return l})},i=0;i<e.length;i++)n(i);return t}function gd(r,e){var t=[],n=e.keyframes;n&&(e=ra(md(n),e));for(var i in e)Te.key(i)&&t.push({name:i,tweens:pd(e[i],r)});return t}function vd(r,e){var t={};for(var n in r){var i=mo(r[n],e);Te.arr(i)&&(i=i.map(function(s){return mo(s,e)}),i.length===1&&(i=i[0])),t[n]=i}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}function xd(r,e){var t;return r.tweens.map(function(n){var i=vd(n,e),s=i.value,a=Te.arr(s)?s[1]:s,o=Fn(a),l=Bo(e.target,r.name,o,e),c=t?t.to.original:l,u=Te.arr(s)?s[0]:c,h=Fn(u)||Fn(l),d=o||h;return Te.und(a)&&(a=c),i.from=xl(u,d),i.to=xl(Oo(a,u),d),i.start=t?t.end:0,i.end=i.start+i.delay+i.duration+i.endDelay,i.easing=Do(i.easing,i.duration),i.isPath=Te.pth(s),i.isPathTargetInsideSVG=i.isPath&&Te.svg(e.target),i.isColor=Te.col(i.from.original),i.isColor&&(i.round=1),t=i,i})}var Eu={css:function(r,e,t){return r.style[e]=t},attribute:function(r,e,t){return r.setAttribute(e,t)},object:function(r,e,t){return r[e]=t},transform:function(r,e,t,n,i){if(n.list.set(e,t),e===n.last||i){var s="";n.list.forEach(function(a,o){s+=o+"("+a+") "}),r.style.transform=s}}};function Au(r,e){var t=Tu(r);t.forEach(function(n){for(var i in e){var s=mo(e[i],n),a=n.target,o=Fn(s),l=Bo(a,i,o,n),c=o||Fn(l),u=Oo(bu(s,c),l),h=ko(a,i);Eu[h](a,i,u,n.transforms,!0)}})}function yd(r,e){var t=ko(r.target,e.name);if(t){var n=xd(e,r),i=n[n.length-1];return{type:t,property:e.name,animatable:r,tweens:n,duration:i.end,delay:n[0].delay,endDelay:i.endDelay}}}function _d(r,e){return na(ia(r.map(function(t){return e.map(function(n){return yd(t,n)})})),function(t){return!Te.und(t)})}function Cu(r,e){var t=r.length,n=function(s){return s.timelineOffset?s.timelineOffset:0},i={};return i.duration=t?Math.max.apply(Math,r.map(function(s){return n(s)+s.duration})):e.duration,i.delay=t?Math.min.apply(Math,r.map(function(s){return n(s)+s.delay})):e.delay,i.endDelay=t?i.duration-Math.max.apply(Math,r.map(function(s){return n(s)+s.duration-s.endDelay})):e.endDelay,i}var yl=0;function bd(r){var e=po(pu,r),t=po(Io,r),n=gd(t,r),i=Tu(r.targets),s=_d(i,n),a=Cu(s,t),o=yl;return yl++,ra(e,{id:o,children:[],animatables:i,animations:s,duration:a.duration,delay:a.delay,endDelay:a.endDelay})}var sn=[],Lu=function(){var r;function e(){!r&&(!_l()||!Ze.suspendWhenDocumentHidden)&&sn.length>0&&(r=requestAnimationFrame(t))}function t(i){for(var s=sn.length,a=0;a<s;){var o=sn[a];o.paused?(sn.splice(a,1),s--):(o.tick(i),a++)}r=a>0?requestAnimationFrame(t):void 0}function n(){Ze.suspendWhenDocumentHidden&&(_l()?r=cancelAnimationFrame(r):(sn.forEach(function(i){return i._onDocumentVisibility()}),Lu()))}return typeof document<"u"&&document.addEventListener("visibilitychange",n),e}();function _l(){return!!document&&document.hidden}function Ze(r){r===void 0&&(r={});var e=0,t=0,n=0,i,s=0,a=null;function o(f){var b=window.Promise&&new Promise(function(y){return a=y});return f.finished=b,b}var l=bd(r);o(l);function c(){var f=l.direction;f!=="alternate"&&(l.direction=f!=="normal"?"normal":"reverse"),l.reversed=!l.reversed,i.forEach(function(b){return b.reversed=l.reversed})}function u(f){return l.reversed?l.duration-f:f}function h(){e=0,t=u(l.currentTime)*(1/Ze.speed)}function d(f,b){b&&b.seek(f-b.timelineOffset)}function p(f){if(l.reversePlayback)for(var y=s;y--;)d(f,i[y]);else for(var b=0;b<s;b++)d(f,i[b])}function g(f){for(var b=0,y=l.animations,_=y.length;b<_;){var E=y[b],C=E.animatable,D=E.tweens,O=D.length-1,k=D[O];O&&(k=na(D,function(W){return f<W.end})[0]||k);for(var R=vn(f-k.start-k.delay,0,k.duration)/k.duration,M=isNaN(R)?1:k.easing(R),w=k.to.strings,F=k.round,N=[],P=k.to.numbers.length,z=void 0,$=0;$<P;$++){var ne=void 0,V=k.to.numbers[$],q=k.from.numbers[$]||0;k.isPath?ne=fd(k.value,M*V,k.isPathTargetInsideSVG):ne=q+M*(V-q),F&&(k.isColor&&$>2||(ne=Math.round(ne*F)/F)),N.push(ne)}var Q=w.length;if(!Q)z=N[0];else{z=w[0];for(var ie=0;ie<Q;ie++){w[ie];var ce=w[ie+1],Ae=N[ie];isNaN(Ae)||(ce?z+=Ae+ce:z+=Ae+" ")}}Eu[E.type](C.target,E.property,z,C.transforms),E.currentValue=z,b++}}function v(f){l[f]&&!l.passThrough&&l[f](l)}function x(){l.remaining&&l.remaining!==!0&&l.remaining--}function m(f){var b=l.duration,y=l.delay,_=b-l.endDelay,E=u(f);l.progress=vn(E/b*100,0,100),l.reversePlayback=E<l.currentTime,i&&p(E),!l.began&&l.currentTime>0&&(l.began=!0,v("begin")),!l.loopBegan&&l.currentTime>0&&(l.loopBegan=!0,v("loopBegin")),E<=y&&l.currentTime!==0&&g(0),(E>=_&&l.currentTime!==b||!b)&&g(b),E>y&&E<_?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,v("changeBegin")),v("change"),g(E)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,v("changeComplete")),l.currentTime=vn(E,0,b),l.began&&v("update"),f>=b&&(t=0,x(),l.remaining?(e=n,v("loopComplete"),l.loopBegan=!1,l.direction==="alternate"&&c()):(l.paused=!0,l.completed||(l.completed=!0,v("loopComplete"),v("complete"),!l.passThrough&&"Promise"in window&&(a(),o(l)))))}return l.reset=function(){var f=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.loopBegan=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed=f==="reverse",l.remaining=l.loop,i=l.children,s=i.length;for(var b=s;b--;)l.children[b].reset();(l.reversed&&l.loop!==!0||f==="alternate"&&l.loop===1)&&l.remaining++,g(l.reversed?l.duration:0)},l._onDocumentVisibility=h,l.set=function(f,b){return Au(f,b),l},l.tick=function(f){n=f,e||(e=n),m((n+(t-e))*Ze.speed)},l.seek=function(f){m(u(f))},l.pause=function(){l.paused=!0,h()},l.play=function(){l.paused&&(l.completed&&l.reset(),l.paused=!1,sn.push(l),h(),Lu())},l.reverse=function(){c(),l.completed=!l.reversed,h()},l.restart=function(){l.reset(),l.play()},l.remove=function(f){var b=Vo(f);Ru(b,l)},l.reset(),l.autoplay&&l.play(),l}function bl(r,e){for(var t=e.length;t--;)Fo(r,e[t].animatable.target)&&e.splice(t,1)}function Ru(r,e){var t=e.animations,n=e.children;bl(r,t);for(var i=n.length;i--;){var s=n[i],a=s.animations;bl(r,a),!a.length&&!s.children.length&&n.splice(i,1)}!t.length&&!n.length&&e.pause()}function Md(r){for(var e=Vo(r),t=sn.length;t--;){var n=sn[t];Ru(e,n)}}function wd(r,e){e===void 0&&(e={});var t=e.direction||"normal",n=e.easing?Do(e.easing):null,i=e.grid,s=e.axis,a=e.from||0,o=a==="first",l=a==="center",c=a==="last",u=Te.arr(r),h=parseFloat(u?r[0]:r),d=u?parseFloat(r[1]):0,p=Fn(u?r[1]:r)||0,g=e.start||0+(u?h:0),v=[],x=0;return function(m,f,b){if(o&&(a=0),l&&(a=(b-1)/2),c&&(a=b-1),!v.length){for(var y=0;y<b;y++){if(!i)v.push(Math.abs(a-y));else{var _=l?(i[0]-1)/2:a%i[0],E=l?(i[1]-1)/2:Math.floor(a/i[0]),C=y%i[0],D=Math.floor(y/i[0]),O=_-C,k=E-D,R=Math.sqrt(O*O+k*k);s==="x"&&(R=-O),s==="y"&&(R=-k),v.push(R)}x=Math.max.apply(Math,v)}n&&(v=v.map(function(w){return n(w/x)*x})),t==="reverse"&&(v=v.map(function(w){return s?w<0?w*-1:-w:Math.abs(x-w)}))}var M=u?(d-h)/x:h;return g+M*(Math.round(v[f]*100)/100)+p}}function Sd(r){r===void 0&&(r={});var e=Ze(r);return e.duration=0,e.add=function(t,n){var i=sn.indexOf(e),s=e.children;i>-1&&sn.splice(i,1);function a(d){d.passThrough=!0}for(var o=0;o<s.length;o++)a(s[o]);var l=ra(t,po(Io,r));l.targets=l.targets||r.targets;var c=e.duration;l.autoplay=!1,l.direction=e.direction,l.timelineOffset=Te.und(n)?c:Oo(n,c),a(e),e.seek(l.timelineOffset);var u=Ze(l);a(u),s.push(u);var h=Cu(s,r);return e.delay=h.delay,e.endDelay=h.endDelay,e.duration=h.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e}Ze.version="3.2.1";Ze.speed=1;Ze.suspendWhenDocumentHidden=!0;Ze.running=sn;Ze.remove=Md;Ze.get=Bo;Ze.set=Au;Ze.convertPx=No;Ze.path=dd;Ze.setDashoffset=ud;Ze.stagger=wd;Ze.timeline=Sd;Ze.easing=Do;Ze.penner=vu;Ze.random=function(r,e){return Math.floor(Math.random()*(e-r+1))+r};function Td(r){return{c:X,l:X,m:X,d:X}}function Ed(r){let e,t;return{c(){e=ee("img"),this.h()},l(n){e=te(n,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){ti(e.src,t=r[21])||G(e,"src",t),G(e,"alt",""),G(e,"class","svelte-1v57rq0")},m(n,i){ke(n,e,i)},d(n){n&&Z(e)}}}function Ad(r){return{c:X,l:X,m:X,d:X}}function Cd(r){return{c:X,l:X,m:X,p:X,d:X}}function Ld(r){let e,t;return{c(){e=ee("img"),this.h()},l(n){e=te(n,"IMG",{src:!0,draggable:!0,alt:!0,style:!0,class:!0}),this.h()},h(){ti(e.src,t=r[21])||G(e,"src",t),G(e,"draggable","false"),G(e,"alt","Home Background"),Zn(e,"width","100%"),Zn(e,"height","100%"),Zn(e,"object-fit","cover"),G(e,"class","svelte-1v57rq0")},m(n,i){ke(n,e,i),r[11](e)},p:X,d(n){n&&Z(e),r[11](null)}}}function Rd(r){return{c:X,l:X,m:X,p:X,d:X}}function Pd(r){let e,t,n,i,s="",a,o,l,c,u,h="Евгения",d,p,g,v,x,m="Родина",f,b,y,_="художник, специалист в области иконописи и росписи храмов, Россия",E,C,D,O,k,R,M="scroll",w,F,N={ctx:r,current:null,token:null,hasCatch:!1,pending:Ad,then:Ed,catch:Td,value:21};yn(Nr("assets/imgs/scroll_arrow.png"),N);let P={ctx:r,current:null,token:null,hasCatch:!1,pending:Rd,then:Ld,catch:Cd,value:21};return yn(Nr("assets/imgs/home-back.jpg"),P),{c(){e=ee("div"),t=ee("div"),n=ee("div"),i=ee("div"),i.innerHTML=s,a=Be(),o=ee("div"),l=ee("h1"),c=ee("div"),u=ee("div"),u.textContent=h,d=Be(),p=ee("br"),g=Be(),v=ee("div"),x=ee("div"),x.textContent=m,f=Be(),b=ee("div"),y=ee("p"),y.textContent=_,E=Be(),C=ee("div"),D=ee("div"),O=ee("div"),N.block.c(),k=Be(),R=ee("div"),R.textContent=M,w=Be(),F=ee("div"),P.block.c(),this.h()},l(z){e=te(z,"DIV",{id:!0,style:!0,class:!0});var $=be(e);t=te($,"DIV",{class:!0});var ne=be(t);n=te(ne,"DIV",{class:!0});var V=be(n);i=te(V,"DIV",{class:!0,"data-svelte-h":!0}),ot(i)!=="svelte-ws33f2"&&(i.innerHTML=s),a=Oe(V),o=te(V,"DIV",{class:!0});var q=be(o);l=te(q,"H1",{class:!0});var Q=be(l);c=te(Q,"DIV",{class:!0});var ie=be(c);u=te(ie,"DIV",{class:!0,"data-svelte-h":!0}),ot(u)!=="svelte-ljur9j"&&(u.textContent=h),d=Oe(ie),ie.forEach(Z),p=te(Q,"BR",{class:!0}),g=Oe(Q),v=te(Q,"DIV",{class:!0});var ce=be(v);x=te(ce,"DIV",{class:!0,"data-svelte-h":!0}),ot(x)!=="svelte-dx5kzw"&&(x.textContent=m),ce.forEach(Z),Q.forEach(Z),f=Oe(q),b=te(q,"DIV",{class:!0});var Ae=be(b);y=te(Ae,"P",{class:!0,"data-svelte-h":!0}),ot(y)!=="svelte-1fi2rfr"&&(y.textContent=_),Ae.forEach(Z),E=Oe(q),C=te(q,"DIV",{class:!0});var W=be(C);D=te(W,"DIV",{class:!0});var re=be(D);O=te(re,"DIV",{class:!0});var _e=be(O);N.block.l(_e),_e.forEach(Z),k=Oe(re),R=te(re,"DIV",{class:!0,"data-svelte-h":!0}),ot(R)!=="svelte-1abg4og"&&(R.textContent=M),re.forEach(Z),W.forEach(Z),q.forEach(Z),w=Oe(V),F=te(V,"DIV",{class:!0});var ue=be(F);P.block.l(ue),ue.forEach(Z),V.forEach(Z),ne.forEach(Z),$.forEach(Z),this.h()},h(){G(i,"class","flex-wrapper first svelte-1v57rq0"),G(u,"class","word svelte-1v57rq0"),G(c,"class","title-mask svelte-1v57rq0"),G(p,"class","svelte-1v57rq0"),G(x,"class","word svelte-1v57rq0"),G(v,"class","title-mask svelte-1v57rq0"),G(l,"class","title svelte-1v57rq0"),G(y,"class","paragraph svelte-1v57rq0"),G(b,"class","occupation mask svelte-1v57rq0"),G(O,"class","mask svelte-1v57rq0"),G(R,"class","svelte-1v57rq0"),G(D,"class","action svelte-1v57rq0"),G(C,"class","wrapper action-mask svelte-1v57rq0"),G(o,"class","flex-wrapper second svelte-1v57rq0"),G(F,"class","parallax-wrapper home-back svelte-1v57rq0"),G(n,"class","flex svelte-1v57rq0"),G(t,"class","content-wrapper svelte-1v57rq0"),G(e,"id","content-container"),Zn(e,"padding-top","23vh"),G(e,"class","svelte-1v57rq0")},m(z,$){ke(z,e,$),Y(e,t),Y(t,n),Y(n,i),Y(n,a),Y(n,o),Y(o,l),Y(l,c),Y(c,u),r[7](u),Y(c,d),Y(l,p),Y(l,g),Y(l,v),Y(v,x),r[8](x),Y(o,f),Y(o,b),Y(b,y),r[9](y),Y(o,E),Y(o,C),Y(C,D),Y(D,O),N.block.m(O,N.anchor=null),N.mount=()=>O,N.anchor=null,Y(D,k),Y(D,R),r[10](D),Y(n,w),Y(n,F),P.block.m(F,P.anchor=null),P.mount=()=>F,P.anchor=null,r[12](F),r[13](e)},p(z,[$]){r=z,zr(P,r,$)},i:X,o:X,d(z){z&&Z(e),r[7](null),r[8](null),r[9](null),N.block.d(),N.token=null,N=null,r[10](null),P.block.d(),P.token=null,P=null,r[12](null),r[13](null)}}}function Id(r,e,t){let n,i;Xt(r,Ws,D=>t(14,n=D)),Xt(r,uo,D=>t(15,i=D));let s,a,o,l,c,u,h,d,p,g,v;Qi(async()=>{await Ki,Fr(uo,i=s,i),n.addOffset({element:a,speedY:.8}),x()});function x(){const D=[{strokeDashoffset:"0"}];d.animate(D,{duration:1e3,delay:500,easing:"cubic-bezier(.72,.3,.25,1)",fill:"forwards"}),p.animate(D,{duration:300,delay:1500,easing:"cubic-bezier(.47,.41,.26,1)",fill:"forwards"}),g.animate(D,{duration:200,delay:1800,easing:"cubic-bezier(.47,.41,.26,1)",fill:"forwards"}),v.animate(D,{duration:1e3,delay:2e3,easing:"cubic-bezier(.47,.41,.26,1)",fill:"forwards"}),Object.assign(a.style,{height:"0",transform:"scale(1.3)"}),t(2,o.style.transform="translateY(80%) scale(1.4)",o),Ze({targets:a,height:"100%",scale:1,easing:"cubicBezier(0.165, 0.84, 0.44, 1)",duration:1500,delay:500,complete:()=>{t(1,a.style.boxShadow="3px 9px 18px rgba(0, 0, 0, 0.2)",a)}}),Ze({targets:o,translateY:"0",scale:1,easing:"cubicBezier(0.165, 0.84, 0.44, 1)",duration:1500,delay:500});const O=[l,c,u,h];O.forEach(k=>{k.style.transform="translateY(130%) rotate(10deg)"}),Ze({targets:O,rotate:"0",translateY:"0%",easing:"cubicBezier(0.165, 0.84, 0.44, 1)",duration:900,delay:Ze.stagger(80,{start:500})})}function m(D){ct[D?"unshift":"push"](()=>{l=D,t(3,l)})}function f(D){ct[D?"unshift":"push"](()=>{c=D,t(4,c)})}function b(D){ct[D?"unshift":"push"](()=>{u=D,t(5,u)})}function y(D){ct[D?"unshift":"push"](()=>{h=D,t(6,h)})}function _(D){ct[D?"unshift":"push"](()=>{o=D,t(2,o)})}function E(D){ct[D?"unshift":"push"](()=>{a=D,t(1,a)})}function C(D){ct[D?"unshift":"push"](()=>{s=D,t(0,s)})}return[s,a,o,l,c,u,h,m,f,b,y,_,E,C]}class Dd extends ri{constructor(e){super(),si(this,e,Id,Pd,kn,{})}}function _a(r,e,t,n){return new(t||(t=Promise))(function(i,s){function a(c){try{l(n.next(c))}catch(u){s(u)}}function o(c){try{l(n.throw(c))}catch(u){s(u)}}function l(c){var u;c.done?i(c.value):(u=c.value,u instanceof t?u:new t(function(h){h(u)})).then(a,o)}l((n=n.apply(r,e||[])).next())})}const Fd=["geforce 320m","geforce 8600","geforce 8600m gt","geforce 8800 gs","geforce 8800 gt","geforce 9400","geforce 9400m g","geforce 9400m","geforce 9600m gt","geforce 9600m","geforce fx go5200","geforce gt 120","geforce gt 130","geforce gt 330m","geforce gtx 285","google swiftshader","intel g41","intel g45","intel gma 4500mhd","intel gma x3100","intel hd 3000","intel q45","legacy","mali-2","mali-3","mali-4","quadro fx 1500","quadro fx 4","quadro fx 5","radeon hd 2400","radeon hd 2600","radeon hd 4670","radeon hd 4850","radeon hd 4870","radeon hd 5670","radeon hd 5750","radeon hd 6290","radeon hd 6300","radeon hd 6310","radeon hd 6320","radeon hd 6490m","radeon hd 6630m","radeon hd 6750m","radeon hd 6770m","radeon hd 6970m","sgx 543","sgx543"];function Ml(r){return r=r.toLowerCase().replace(/^angle ?\((.+)\)*$/,"$1").replace(/\s(\d{1,2}gb|direct3d.+$)|\(r\)| \([^)]+\)$/g,"").replace(/(?:vulkan|opengl) \d+\.\d+(?:\.\d+)?(?: \((.*)\))?/,"$1")}const Pu=typeof window>"u",Xn=(()=>{if(Pu)return;const{userAgent:r,platform:e,maxTouchPoints:t}=window.navigator,n=/(iphone|ipod|ipad)/i.test(r),i=e==="iPad"||e==="MacIntel"&&t>0&&!window.MSStream;return{isIpad:i,isMobile:/android/i.test(r)||n||i,isSafari12:/Version\/12.+Safari/.test(r)}})();function zd(r,e,t){if(!t)return[e];const n=function(c){const u=`
    precision highp float;
    attribute vec3 aPosition;
    varying float vvv;
    void main() {
      vvv = 0.31622776601683794;
      gl_Position = vec4(aPosition, 1.0);
    }
  `,h=`
    precision highp float;
    varying float vvv;
    void main() {
      vec4 enc = vec4(1.0, 255.0, 65025.0, 16581375.0) * vvv;
      enc = fract(enc);
      enc -= enc.yzww * vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 0.0);
      gl_FragColor = enc;
    }
  `,d=c.createShader(35633),p=c.createShader(35632),g=c.createProgram();if(!(p&&d&&g))return;c.shaderSource(d,u),c.shaderSource(p,h),c.compileShader(d),c.compileShader(p),c.attachShader(g,d),c.attachShader(g,p),c.linkProgram(g),c.detachShader(g,d),c.detachShader(g,p),c.deleteShader(d),c.deleteShader(p),c.useProgram(g);const v=c.createBuffer();c.bindBuffer(34962,v),c.bufferData(34962,new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),35044);const x=c.getAttribLocation(g,"aPosition");c.vertexAttribPointer(x,3,5126,!1,0,0),c.enableVertexAttribArray(x),c.clearColor(1,1,1,1),c.clear(16384),c.viewport(0,0,1,1),c.drawArrays(4,0,3);const m=new Uint8Array(4);return c.readPixels(0,0,1,1,6408,5121,m),c.deleteProgram(g),c.deleteBuffer(v),m.join("")}(r),i="801621810",s="8016218135",a="80162181161",o=Xn?.isIpad?[["a7",a,12],["a8",s,15],["a8x",s,15],["a9",s,15],["a9x",s,15],["a10",s,15],["a10x",s,15],["a12",i,15],["a12x",i,15],["a12z",i,15],["a14",i,15],["m1",i,15]]:[["a7",a,12],["a8",s,12],["a9",s,15],["a10",s,15],["a11",i,15],["a12",i,15],["a13",i,15],["a14",i,15]];let l;return n==="80162181255"?l=o.filter(([,,c])=>c>=14):(l=o.filter(([,c])=>c===n),l.length||(l=o)),l.map(([c])=>`apple ${c} gpu`)}const ba=[],wl=[];function Nd(r,e){if(r===e)return 0;const t=r;r.length>e.length&&(r=e,e=t);let n=r.length,i=e.length;for(;n>0&&r.charCodeAt(~-n)===e.charCodeAt(~-i);)n--,i--;let s,a=0;for(;a<n&&r.charCodeAt(a)===e.charCodeAt(a);)a++;if(n-=a,i-=a,n===0)return i;let o,l,c=0,u=0,h=0;for(;u<n;)wl[u]=r.charCodeAt(a+u),ba[u]=++u;for(;h<i;)for(s=e.charCodeAt(a+h),o=h++,c=h,u=0;u<n;u++)l=s===wl[u]?o:o+1,o=ba[u],c=ba[u]=o>c?l>c?c+1:l:l>o?o+1:l;return c}function kd(r){return r!=null}class Sl extends Error{constructor(e){super(e),Object.setPrototypeOf(this,new.target.prototype)}}const Tl=({mobileTiers:r=[0,15,30,60],desktopTiers:e=[0,15,30,60],override:t={},glContext:n,failIfMajorPerformanceCaveat:i=!1,benchmarksURL:s="https://unpkg.com/detect-gpu@4.0.50/dist/benchmarks"}={})=>_a(void 0,void 0,void 0,function*(){const a={};if(Pu)return{tier:0,type:"SSR"};const{isIpad:o=!!Xn?.isIpad,isMobile:l=!!Xn?.isMobile,screenSize:c=window.screen,loadBenchmarks:u=_=>_a(void 0,void 0,void 0,function*(){const E=yield fetch(`${s}/${_}`).then(C=>C.json());if(parseInt(E.shift().split(".")[0],10)<4)throw new Sl("Detect GPU benchmark data is out of date. Please update to version 4x");return E})}=t;let{renderer:h}=t;const d=(_,E,C,D,O)=>({device:O,fps:D,gpu:C,isMobile:l,tier:_,type:E});let p,g="";if(h)h=Ml(h),p=[h];else{const _=n||function(C,D=!1){const O={alpha:!1,antialias:!1,depth:!1,failIfMajorPerformanceCaveat:D,powerPreference:"high-performance",stencil:!1};C&&delete O.powerPreference;const k=window.document.createElement("canvas"),R=k.getContext("webgl",O)||k.getContext("experimental-webgl",O);return R??void 0}(Xn?.isSafari12,i);if(!_)return d(0,"WEBGL_UNSUPPORTED");const E=_.getExtension("WEBGL_debug_renderer_info");if(E&&(h=_.getParameter(E.UNMASKED_RENDERER_WEBGL)),!h)return d(1,"FALLBACK");g=h,h=Ml(h),p=function(C,D,O){return D==="apple gpu"?zd(C,D,O):[D]}(_,h,l)}const v=(yield Promise.all(p.map(function(_){var E;return _a(this,void 0,void 0,function*(){const C=(Q=>{const ie=l?["adreno","apple","mali-t","mali","nvidia","powervr"]:["intel","apple","amd","radeon","nvidia","geforce"];for(const ce of ie)if(Q.includes(ce))return ce})(_);if(!C)return;const D=`${l?"m":"d"}-${C}${o?"-ipad":""}.json`,O=a[D]=(E=a[D])!==null&&E!==void 0?E:u(D);let k;try{k=yield O}catch(Q){if(Q instanceof Sl)throw Q;return}const R=function(Q){var ie;const ce=(Q=Q.replace(/\([^)]+\)/,"")).match(/\d+/)||Q.match(/(\W|^)([A-Za-z]{1,3})(\W|$)/g);return(ie=ce?.join("").replace(/\W|amd/g,""))!==null&&ie!==void 0?ie:""}(_);let M=k.filter(([,Q])=>Q===R);M.length||(M=k.filter(([Q])=>Q.includes(_)));const w=M.length;if(w===0)return;let F,[N,,,P]=w>1?M.map(Q=>[Q,Nd(_,Q[0])]).sort(([,Q],[,ie])=>Q-ie)[0][0]:M[0],z=Number.MAX_VALUE;const{devicePixelRatio:$}=window,ne=c.width*$*c.height*$;for(const Q of P){const[ie,ce]=Q,Ae=ie*ce,W=Math.abs(ne-Ae);W<z&&(z=W,F=Q)}if(!F)return;const[,,V,q]=F;return[z,V,N,q]})}))).filter(kd).sort(([_=Number.MAX_VALUE,E],[C=Number.MAX_VALUE,D])=>_===C?E-D:_-C);if(!v.length){const _=Fd.find(E=>h.includes(E));return _?d(0,"BLOCKLISTED",_):d(1,"FALLBACK",`${h} (${g})`)}const[,x,m,f]=v[0];if(x===-1)return d(0,"BLOCKLISTED",m,x,f);const b=l?r:e;let y=0;for(let _=0;_<b.length;_++)x>=b[_]&&(y=_);return d(y,"BENCHMARK",m,x,f)});function Bd(r){return--r*r*r*r*r+1}function ns(r,{delay:e=0,duration:t=400,easing:n=Hh}={}){const i=+getComputedStyle(r).opacity;return{delay:e,duration:t,easing:n,css:s=>`opacity: ${s*i}`}}/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ho="136",Od=0,El=1,Ud=2,Iu=1,Vd=2,wr=3,kr=0,pt=1,Yi=2,Du=1,Jn=0,Pr=1,Al=2,Cl=3,Ll=4,Hd=5,Vi=100,Gd=101,Wd=102,Rl=103,Pl=104,qd=200,jd=201,Xd=202,Yd=203,Fu=204,zu=205,Zd=206,Jd=207,$d=208,Qd=209,Kd=210,ef=0,tf=1,nf=2,go=3,rf=4,sf=5,af=6,of=7,sa=0,lf=1,cf=2,$n=0,uf=1,hf=2,df=3,ff=4,pf=5,Nu=300,jr=301,Xr=302,vo=303,xo=304,aa=306,Go=307,yo=1e3,jt=1001,_o=1002,mt=1003,Il=1004,Dl=1005,Nt=1006,mf=1007,oa=1008,zn=1009,gf=1010,vf=1011,Br=1012,xf=1013,Os=1014,Yn=1015,vi=1016,yf=1017,_f=1018,bf=1019,qi=1020,Mf=1021,xi=1022,Mt=1023,wf=1024,Sf=1025,yi=1026,Zi=1027,Tf=1028,Ef=1029,Af=1030,Cf=1031,Lf=1032,Rf=1033,Fl=33776,zl=33777,Nl=33778,kl=33779,Bl=35840,Ol=35841,Ul=35842,Vl=35843,Pf=36196,Hl=37492,Gl=37496,If=37808,Df=37809,Ff=37810,zf=37811,Nf=37812,kf=37813,Bf=37814,Of=37815,Uf=37816,Vf=37817,Hf=37818,Gf=37819,Wf=37820,qf=37821,jf=36492,Xf=37840,Yf=37841,Zf=37842,Jf=37843,$f=37844,Qf=37845,Kf=37846,ep=37847,tp=37848,np=37849,ip=37850,rp=37851,sp=37852,ap=37853,op=2200,lp=2201,cp=2202,js=2300,Xs=2301,Ma=2302,Hi=2400,Gi=2401,Ys=2402,Wo=2500,ku=2501,up=0,ln=3e3,er=3001,hp=3200,dp=3201,tr=0,fp=1,wa=7680,pp=519,Or=35044,Zs=35048,Wl="300 es";class _i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Tt=[];for(let r=0;r<256;r++)Tt[r]=(r<16?"0":"")+r.toString(16);const Sa=Math.PI/180,bo=180/Math.PI;function _n(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[r&255]+Tt[r>>8&255]+Tt[r>>16&255]+Tt[r>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toUpperCase()}function qt(r,e,t){return Math.max(e,Math.min(t,r))}function mp(r,e){return(r%e+e)%e}function Ta(r,e,t){return(1-t)*r+t*e}function ql(r){return(r&r-1)===0&&r!==0}function gp(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}class se{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}se.prototype.isVector2=!0;class At{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],v=i[0],x=i[3],m=i[6],f=i[1],b=i[4],y=i[7],_=i[2],E=i[5],C=i[8];return s[0]=a*v+o*f+l*_,s[3]=a*x+o*b+l*E,s[6]=a*m+o*y+l*C,s[1]=c*v+u*f+h*_,s[4]=c*x+u*b+h*E,s[7]=c*m+u*y+h*C,s[2]=d*v+p*f+g*_,s[5]=d*x+p*b+g*E,s[8]=d*m+p*y+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,p=c*s-a*l,g=t*h+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(i*c-u*n)*v,e[2]=(o*n-i*a)*v,e[3]=d*v,e[4]=(u*t-i*l)*v,e[5]=(i*s-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],a=i[3],o=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*s+n*l,i[3]=t*a+n*c,i[6]=t*o+n*u,i[1]=-n*s+t*l,i[4]=-n*a+t*c,i[7]=-n*o+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}At.prototype.isMatrix3=!0;function Bu(r){if(r.length===0)return-1/0;let e=r[0];for(let t=1,n=r.length;t<n;++t)r[t]>e&&(e=r[t]);return e}function la(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}let Mi;class nr{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Mi===void 0&&(Mi=la("canvas")),Mi.width=e.width,Mi.height=e.height;const n=Mi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Mi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let vp=0;class St extends _i{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=jt,i=jt,s=Nt,a=oa,o=Mt,l=zn,c=1,u=ln){super(),Object.defineProperty(this,"id",{value:vp++}),this.uuid=_n(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new At,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=_n()),!t&&e.images[i.uuid]===void 0){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Ea(i[a].image)):s.push(Ea(i[a]))}else s=Ea(i);e.images[i.uuid]={uuid:i.uuid,url:s}}n.image=i.uuid}return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yo:e.x=e.x-Math.floor(e.x);break;case jt:e.x=e.x<0?0:1;break;case _o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yo:e.y=e.y-Math.floor(e.y);break;case jt:e.y=e.y<0?0:1;break;case _o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}St.DEFAULT_IMAGE=void 0;St.DEFAULT_MAPPING=Nu;St.prototype.isTexture=!0;function Ea(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?nr.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class it{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],v=l[2],x=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-x)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+x)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,y=(p+1)/2,_=(m+1)/2,E=(u+d)/4,C=(h+v)/4,D=(g+x)/4;return b>y&&b>_?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=E/n,s=C/n):y>_?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=E/i,s=D/i):_<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(_),n=C/s,i=D/s),this.set(n,i,s,t),this}let f=Math.sqrt((x-g)*(x-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(f)<.001&&(f=1),this.x=(x-g)/f,this.y=(h-v)/f,this.z=(d-u)/f,this.w=Math.acos((c+p+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}it.prototype.isVector4=!0;class Qt extends _i{constructor(e,t,n={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t),this.texture=new St(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Nt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image={...this.texture.image},this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}Qt.prototype.isWebGLRenderTarget=!0;class xp extends Qt{constructor(e,t,n){super(e,t);const i=this.texture;this.texture=[];for(let s=0;s<n;s++)this.texture[s]=i.clone()}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.texture.length;i<s;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}}xp.prototype.isWebGLMultipleRenderTargets=!0;class qo extends Qt{constructor(e,t,n={}){super(e,t,n),this.samples=4,this.ignoreDepthForMultisampleCopy=n.ignoreDepth!==void 0?n.ignoreDepth:!0,this.useRenderToTexture=n.useRenderToTexture!==void 0?n.useRenderToTexture:!1,this.useRenderbuffer=this.useRenderToTexture===!1}copy(e){return super.copy.call(this,e),this.samples=e.samples,this.useRenderToTexture=e.useRenderToTexture,this.useRenderbuffer=e.useRenderbuffer,this}}qo.prototype.isWebGLMultisampleRenderTarget=!0;class Ut{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[a+0],p=s[a+1],g=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==d||c!==p||u!==g){let x=1-o;const m=l*d+c*p+u*g+h*v,f=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){const _=Math.sqrt(b),E=Math.atan2(_,m*f);x=Math.sin(x*E)/_,o=Math.sin(o*E)/_}const y=o*f;if(l=l*x+d*y,c=c*x+p*y,u=u*x+g*y,h=h*x+v*y,x===1-o){const _=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=_,c*=_,u*=_,h*=_}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-o*p,e[t+2]=c*g+u*p+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),d=l(n/2),p=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Ut.prototype.isQuaternion=!0;class L{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(jl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-s*i,h=l*i+s*n-a*t,d=-s*t-a*n-o*i;return this.x=c*l+d*-s+u*-o-h*-a,this.y=u*l+d*-a+h*-s-c*-o,this.z=h*l+d*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Aa.copy(this).projectOnVector(e),this.sub(Aa)}reflect(e){return this.sub(Aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}L.prototype.isVector3=!0;const Aa=new L,jl=new Ut;class cn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],d=e[l+2];u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>a&&(a=h),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),d=e.getZ(l);u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>a&&(a=h),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),Ca.copy(t.boundingBox),Ca.applyMatrix4(e.matrixWorld),this.union(Ca));const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,fr),fr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),is.subVectors(this.max,pr),wi.subVectors(e.a,pr),Si.subVectors(e.b,pr),Ti.subVectors(e.c,pr),Bn.subVectors(Si,wi),On.subVectors(Ti,Si),ci.subVectors(wi,Ti);let t=[0,-Bn.z,Bn.y,0,-On.z,On.y,0,-ci.z,ci.y,Bn.z,0,-Bn.x,On.z,0,-On.x,ci.z,0,-ci.x,-Bn.y,Bn.x,0,-On.y,On.x,0,-ci.y,ci.x,0];return!La(t,wi,Si,Ti,is)||(t=[1,0,0,0,1,0,0,0,1],!La(t,wi,Si,Ti,is))?!1:(rs.crossVectors(Bn,On),t=[rs.x,rs.y,rs.z],La(t,wi,Si,Ti,is))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return fr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(fr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}cn.prototype.isBox3=!0;const Tn=[new L,new L,new L,new L,new L,new L,new L,new L],fr=new L,Ca=new cn,wi=new L,Si=new L,Ti=new L,Bn=new L,On=new L,ci=new L,pr=new L,is=new L,rs=new L,ui=new L;function La(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ui.fromArray(r,s);const o=i.x*Math.abs(ui.x)+i.y*Math.abs(ui.y)+i.z*Math.abs(ui.z),l=e.dot(ui),c=t.dot(ui),u=n.dot(ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const yp=new cn,Xl=new L,ss=new L,Ra=new L;class ir{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):yp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Ra.subVectors(e,this.center);const t=Ra.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Ra.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?ss.set(0,0,1).multiplyScalar(e.radius):ss.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Xl.copy(e.center).add(ss)),this.expandByPoint(Xl.copy(e.center).sub(ss)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new L,Pa=new L,as=new L,Un=new L,Ia=new L,os=new L,Da=new L;class rr{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,En)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=En.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(En.copy(this.direction).multiplyScalar(t).add(this.origin),En.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Pa.copy(e).add(t).multiplyScalar(.5),as.copy(t).sub(e).normalize(),Un.copy(this.origin).sub(Pa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(as),o=Un.dot(this.direction),l=-Un.dot(as),c=Un.lengthSq(),u=Math.abs(1-a*a);let h,d,p,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(as).multiplyScalar(d).add(Pa),p}intersectSphere(e,t){En.subVectors(e.center,this.origin);const n=En.dot(this.direction),i=En.dot(En)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>i||((s>n||n!==n)&&(n=s),(a<i||i!==i)&&(i=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,En)!==null}intersectTriangle(e,t,n,i,s){Ia.subVectors(t,e),os.subVectors(n,e),Da.crossVectors(Ia,os);let a=this.direction.dot(Da),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Un.subVectors(this.origin,e);const l=o*this.direction.dot(os.crossVectors(Un,os));if(l<0)return null;const c=o*this.direction.dot(Ia.cross(Un));if(c<0||l+c>a)return null;const u=-o*Un.dot(Da);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Le{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,a,o,l,c,u,h,d,p,g,v,x){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=p,m[7]=g,m[11]=v,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ei.setFromMatrixColumn(e,0).length(),s=1/Ei.setFromMatrixColumn(e,1).length(),a=1/Ei.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,v=c*h;t[0]=d+v*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,v=c*h;t[0]=d-v*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-d*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-v*h}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_p,e,bp)}lookAt(e,t,n){const i=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Vn.crossVectors(n,Ht),Vn.lengthSq()===0&&(Math.abs(n.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Vn.crossVectors(n,Ht)),Vn.normalize(),ls.crossVectors(Ht,Vn),i[0]=Vn.x,i[4]=ls.x,i[8]=Ht.x,i[1]=Vn.y,i[5]=ls.y,i[9]=Ht.y,i[2]=Vn.z,i[6]=ls.z,i[10]=Ht.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],v=n[6],x=n[10],m=n[14],f=n[3],b=n[7],y=n[11],_=n[15],E=i[0],C=i[4],D=i[8],O=i[12],k=i[1],R=i[5],M=i[9],w=i[13],F=i[2],N=i[6],P=i[10],z=i[14],$=i[3],ne=i[7],V=i[11],q=i[15];return s[0]=a*E+o*k+l*F+c*$,s[4]=a*C+o*R+l*N+c*ne,s[8]=a*D+o*M+l*P+c*V,s[12]=a*O+o*w+l*z+c*q,s[1]=u*E+h*k+d*F+p*$,s[5]=u*C+h*R+d*N+p*ne,s[9]=u*D+h*M+d*P+p*V,s[13]=u*O+h*w+d*z+p*q,s[2]=g*E+v*k+x*F+m*$,s[6]=g*C+v*R+x*N+m*ne,s[10]=g*D+v*M+x*P+m*V,s[14]=g*O+v*w+x*z+m*q,s[3]=f*E+b*k+y*F+_*$,s[7]=f*C+b*R+y*N+_*ne,s[11]=f*D+b*M+y*P+_*V,s[15]=f*O+b*w+y*z+_*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],v=e[7],x=e[11],m=e[15];return g*(+s*l*h-i*c*h-s*o*d+n*c*d+i*o*p-n*l*p)+v*(+t*l*p-t*c*d+s*a*d-i*a*p+i*c*u-s*l*u)+x*(+t*c*h-t*o*p-s*a*h+n*a*p+s*o*u-n*c*u)+m*(-i*o*u-t*l*h+t*o*d+i*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],v=e[13],x=e[14],m=e[15],f=h*x*c-v*d*c+v*l*p-o*x*p-h*l*m+o*d*m,b=g*d*c-u*x*c-g*l*p+a*x*p+u*l*m-a*d*m,y=u*v*c-g*h*c+g*o*p-a*v*p-u*o*m+a*h*m,_=g*h*l-u*v*l-g*o*d+a*v*d+u*o*x-a*h*x,E=t*f+n*b+i*y+s*_;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=f*C,e[1]=(v*d*s-h*x*s-v*i*p+n*x*p+h*i*m-n*d*m)*C,e[2]=(o*x*s-v*l*s+v*i*c-n*x*c-o*i*m+n*l*m)*C,e[3]=(h*l*s-o*d*s-h*i*c+n*d*c+o*i*p-n*l*p)*C,e[4]=b*C,e[5]=(u*x*s-g*d*s+g*i*p-t*x*p-u*i*m+t*d*m)*C,e[6]=(g*l*s-a*x*s-g*i*c+t*x*c+a*i*m-t*l*m)*C,e[7]=(a*d*s-u*l*s+u*i*c-t*d*c-a*i*p+t*l*p)*C,e[8]=y*C,e[9]=(g*h*s-u*v*s-g*n*p+t*v*p+u*n*m-t*h*m)*C,e[10]=(a*v*s-g*o*s+g*n*c-t*v*c-a*n*m+t*o*m)*C,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*p-t*o*p)*C,e[12]=_*C,e[13]=(u*v*i-g*h*i+g*n*d-t*v*d-u*n*x+t*h*x)*C,e[14]=(g*o*i-a*v*i-g*n*l+t*v*l+a*n*x-t*o*x)*C,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*d+t*o*d)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,p=s*u,g=s*h,v=a*u,x=a*h,m=o*h,f=l*c,b=l*u,y=l*h,_=n.x,E=n.y,C=n.z;return i[0]=(1-(v+m))*_,i[1]=(p+y)*_,i[2]=(g-b)*_,i[3]=0,i[4]=(p-y)*E,i[5]=(1-(d+m))*E,i[6]=(x+f)*E,i[7]=0,i[8]=(g+b)*C,i[9]=(x-f)*C,i[10]=(1-(d+v))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ei.set(i[0],i[1],i[2]).length();const a=Ei.set(i[4],i[5],i[6]).length(),o=Ei.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],tn.copy(this);const c=1/s,u=1/a,h=1/o;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=u,tn.elements[5]*=u,tn.elements[6]*=u,tn.elements[8]*=h,tn.elements[9]*=h,tn.elements[10]*=h,t.setFromRotationMatrix(tn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(a+s)/(a-s),p=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-s),h=(t+e)*l,d=(n+i)*c,p=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}Le.prototype.isMatrix4=!0;const Ei=new L,tn=new Le,_p=new L(0,0,0),bp=new L(1,1,1),Vn=new L,ls=new L,Ht=new L,Yl=new Le,Zl=new Ut;class sr{constructor(e=0,t=0,n=0,i=sr.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zl.setFromEuler(this),this.setFromQuaternion(Zl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new L(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}sr.prototype.isEuler=!0;sr.DefaultOrder="XYZ";sr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ou{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mp=0;const Jl=new L,Ai=new Ut,An=new Le,cs=new L,mr=new L,wp=new L,Sp=new Ut,$l=new L(1,0,0),Ql=new L(0,1,0),Kl=new L(0,0,1),Tp={type:"added"},ec={type:"removed"};class Ke extends _i{constructor(){super(),Object.defineProperty(this,"id",{value:Mp++}),this.uuid=_n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ke.DefaultUp.clone();const e=new L,t=new sr,n=new Ut,i=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Le},normalMatrix:{value:new At}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=Ke.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Ou,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.premultiply(Ai),this}rotateX(e){return this.rotateOnAxis($l,e)}rotateY(e){return this.rotateOnAxis(Ql,e)}rotateZ(e){return this.rotateOnAxis(Kl,e)}translateOnAxis(e,t){return Jl.copy(e).applyQuaternion(this.quaternion),this.position.add(Jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($l,e)}translateY(e){return this.translateOnAxis(Ql,e)}translateZ(e){return this.translateOnAxis(Kl,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?cs.copy(e):cs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(mr,cs,this.up):An.lookAt(cs,mr,this.up),this.quaternion.setFromRotationMatrix(An),i&&(An.extractRotation(i.matrixWorld),Ai.setFromRotationMatrix(An),this.quaternion.premultiply(Ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Tp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ec)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ec)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,wp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,Sp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ke.DefaultUp=new L(0,1,0);Ke.DefaultMatrixAutoUpdate=!0;Ke.prototype.isObject3D=!0;const nn=new L,Cn=new L,Fa=new L,Ln=new L,Ci=new L,Li=new L,tc=new L,za=new L,Na=new L,ka=new L;class gt{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),nn.subVectors(e,t),i.cross(nn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){nn.subVectors(i,t),Cn.subVectors(n,t),Fa.subVectors(e,t);const a=nn.dot(nn),o=nn.dot(Cn),l=nn.dot(Fa),c=Cn.dot(Cn),u=Cn.dot(Fa),h=a*c-o*o;if(h===0)return s.set(-2,-1,-1);const d=1/h,p=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ln),Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getUV(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Ln),l.set(0,0),l.addScaledVector(s,Ln.x),l.addScaledVector(a,Ln.y),l.addScaledVector(o,Ln.z),l}static isFrontFacing(e,t,n,i){return nn.subVectors(n,t),Cn.subVectors(e,t),nn.cross(Cn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),nn.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return gt.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return gt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Ci.subVectors(i,n),Li.subVectors(s,n),za.subVectors(e,n);const l=Ci.dot(za),c=Li.dot(za);if(l<=0&&c<=0)return t.copy(n);Na.subVectors(e,i);const u=Ci.dot(Na),h=Li.dot(Na);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ci,a);ka.subVectors(e,s);const p=Ci.dot(ka),g=Li.dot(ka);if(g>=0&&p<=g)return t.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Li,o);const x=u*g-p*h;if(x<=0&&h-u>=0&&p-g>=0)return tc.subVectors(s,i),o=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector(tc,o);const m=1/(x+v+d);return a=v*m,o=d*m,t.copy(n).addScaledVector(Ci,a).addScaledVector(Li,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ep=0;class It extends _i{constructor(){super(),Object.defineProperty(this,"id",{value:Ep++}),this.uuid=_n(),this.name="",this.type="Material",this.fog=!0,this.blending=Pr,this.side=kr,this.vertexColors=!1,this.opacity=1,this.format=Mt,this.transparent=!1,this.blendSrc=Fu,this.blendDst=zu,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wa,this.stencilZFail=wa,this.stencilZPass=wa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Du;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pr&&(n.blending=this.blending),this.side!==kr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.format!==Mt&&(n.format=this.format),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.format=e.format,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}It.prototype.isMaterial=!0;const Uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rn={h:0,s:0,l:0},us={h:0,s:0,l:0};function Ba(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Oa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ua(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}class Ee{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=mp(e,1),t=qt(t,0,1),n=qt(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,s=2*n-i;this.r=Ba(s,i,e+1/3),this.g=Ba(s,i,e),this.b=Ba(s,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i;const s=n[1],a=n[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const o=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(o,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],s=i.length;if(s===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=Uu[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}copyLinearToSRGB(e){return this.r=Ua(e.r),this.g=Ua(e.g),this.b=Ua(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,n=this.g,i=this.b,s=Math.max(t,n,i),a=Math.min(t,n,i);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const u=s-a;switch(l=c<=.5?u/(s+a):u/(2-s-a),s){case t:o=(n-i)/u+(n<i?6:0);break;case n:o=(i-t)/u+2;break;case i:o=(t-n)/u+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(rn),rn.h+=e,rn.s+=t,rn.l+=n,this.setHSL(rn.h,rn.s,rn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(rn),e.getHSL(us);const n=Ta(rn.h,us.h,t),i=Ta(rn.s,us.s,t),s=Ta(rn.l,us.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}Ee.NAMES=Uu;Ee.prototype.isColor=!0;Ee.prototype.r=1;Ee.prototype.g=1;Ee.prototype.b=1;class jo extends It{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}jo.prototype.isMeshBasicMaterial=!0;const st=new L,hs=new se;class vt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Or,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new Ee),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new se),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new L),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new it),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hs.fromBufferAttribute(this,t),hs.applyMatrix3(e),this.setXY(t,hs.x,hs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)st.x=this.getX(t),st.y=this.getY(t),st.z=this.getZ(t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)st.x=this.getX(t),st.y=this.getY(t),st.z=this.getZ(t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)st.x=this.getX(t),st.y=this.getY(t),st.z=this.getZ(t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Or&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}vt.prototype.isBufferAttribute=!0;class Vu extends vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Hu extends vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ap extends vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}Ap.prototype.isFloat16BufferAttribute=!0;class wt extends vt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Cp=0;const Yt=new Le,Va=new Ke,Ri=new L,Gt=new cn,gr=new cn,xt=new L;class lt extends _i{constructor(){super(),Object.defineProperty(this,"id",{value:Cp++}),this.uuid=_n(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bu(e)>65535?Hu:Vu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new At().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,n){return Yt.makeTranslation(e,t,n),this.applyMatrix4(Yt),this}scale(e,t,n){return Yt.makeScale(e,t,n),this.applyMatrix4(Yt),this}lookAt(e){return Va.lookAt(e),Va.updateMatrix(),this.applyMatrix4(Va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ri).negate(),this.translate(Ri.x,Ri.y,Ri.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new wt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];gr.setFromBufferAttribute(o),this.morphTargetsRelative?(xt.addVectors(Gt.min,gr.min),Gt.expandByPoint(xt),xt.addVectors(Gt.max,gr.max),Gt.expandByPoint(xt)):(Gt.expandByPoint(gr.min),Gt.expandByPoint(gr.max))}Gt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)xt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(xt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)xt.fromBufferAttribute(o,c),l&&(Ri.fromBufferAttribute(e,c),xt.add(Ri)),i=Math.max(i,n.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new vt(new Float32Array(4*o),4));const l=t.tangent.array,c=[],u=[];for(let k=0;k<o;k++)c[k]=new L,u[k]=new L;const h=new L,d=new L,p=new L,g=new se,v=new se,x=new se,m=new L,f=new L;function b(k,R,M){h.fromArray(i,k*3),d.fromArray(i,R*3),p.fromArray(i,M*3),g.fromArray(a,k*2),v.fromArray(a,R*2),x.fromArray(a,M*2),d.sub(h),p.sub(h),v.sub(g),x.sub(g);const w=1/(v.x*x.y-x.x*v.y);isFinite(w)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(p,-v.y).multiplyScalar(w),f.copy(p).multiplyScalar(v.x).addScaledVector(d,-x.x).multiplyScalar(w),c[k].add(m),c[R].add(m),c[M].add(m),u[k].add(f),u[R].add(f),u[M].add(f))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let k=0,R=y.length;k<R;++k){const M=y[k],w=M.start,F=M.count;for(let N=w,P=w+F;N<P;N+=3)b(n[N+0],n[N+1],n[N+2])}const _=new L,E=new L,C=new L,D=new L;function O(k){C.fromArray(s,k*3),D.copy(C);const R=c[k];_.copy(R),_.sub(C.multiplyScalar(C.dot(R))).normalize(),E.crossVectors(D,R);const w=E.dot(u[k])<0?-1:1;l[k*4]=_.x,l[k*4+1]=_.y,l[k*4+2]=_.z,l[k*4+3]=w}for(let k=0,R=y.length;k<R;++k){const M=y[k],w=M.start,F=M.count;for(let N=w,P=w+F;N<P;N+=3)O(n[N+0]),O(n[N+1]),O(n[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new L,s=new L,a=new L,o=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),x=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,x),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,x),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const a=n[i].array,o=e.attributes[i],l=o.array,c=o.itemSize*t,u=Math.min(l.length,a.length-c);for(let h=0,d=c;h<u;h++,d++)a[d]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,x=l.length;v<x;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let m=0;m<u;m++)d[g++]=c[p++]}return new vt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new lt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}lt.prototype.isBufferGeometry=!0;const nc=new Le,Pi=new rr,Ha=new ir,Hn=new L,Gn=new L,Wn=new L,Ga=new L,Wa=new L,qa=new L,ds=new L,fs=new L,ps=new L,ms=new se,gs=new se,vs=new se,ja=new L,xs=new L;class kt extends Ke{constructor(e=new lt,t=new jo){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(s),e.ray.intersectsSphere(Ha)===!1)||(nc.copy(s).invert(),Pi.copy(e.ray).applyMatrix4(nc),n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1))return;let a;if(n.isBufferGeometry){const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,d=n.attributes.uv2,p=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(i))for(let v=0,x=p.length;v<x;v++){const m=p[v],f=i[m.materialIndex],b=Math.max(m.start,g.start),y=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let _=b,E=y;_<E;_+=3){const C=o.getX(_),D=o.getX(_+1),O=o.getX(_+2);a=ys(this,f,e,Pi,l,c,u,h,d,C,D,O),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const v=Math.max(0,g.start),x=Math.min(o.count,g.start+g.count);for(let m=v,f=x;m<f;m+=3){const b=o.getX(m),y=o.getX(m+1),_=o.getX(m+2);a=ys(this,i,e,Pi,l,c,u,h,d,b,y,_),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let v=0,x=p.length;v<x;v++){const m=p[v],f=i[m.materialIndex],b=Math.max(m.start,g.start),y=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let _=b,E=y;_<E;_+=3){const C=_,D=_+1,O=_+2;a=ys(this,f,e,Pi,l,c,u,h,d,C,D,O),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const v=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let m=v,f=x;m<f;m+=3){const b=m,y=m+1,_=m+2;a=ys(this,i,e,Pi,l,c,u,h,d,b,y,_),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}kt.prototype.isMesh=!0;function Lp(r,e,t,n,i,s,a,o){let l;if(e.side===pt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side!==Yi,o),l===null)return null;xs.copy(o),xs.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(xs);return c<t.near||c>t.far?null:{distance:c,point:xs.clone(),object:r}}function ys(r,e,t,n,i,s,a,o,l,c,u,h){Hn.fromBufferAttribute(i,c),Gn.fromBufferAttribute(i,u),Wn.fromBufferAttribute(i,h);const d=r.morphTargetInfluences;if(s&&d){ds.set(0,0,0),fs.set(0,0,0),ps.set(0,0,0);for(let g=0,v=s.length;g<v;g++){const x=d[g],m=s[g];x!==0&&(Ga.fromBufferAttribute(m,c),Wa.fromBufferAttribute(m,u),qa.fromBufferAttribute(m,h),a?(ds.addScaledVector(Ga,x),fs.addScaledVector(Wa,x),ps.addScaledVector(qa,x)):(ds.addScaledVector(Ga.sub(Hn),x),fs.addScaledVector(Wa.sub(Gn),x),ps.addScaledVector(qa.sub(Wn),x)))}Hn.add(ds),Gn.add(fs),Wn.add(ps)}r.isSkinnedMesh&&(r.boneTransform(c,Hn),r.boneTransform(u,Gn),r.boneTransform(h,Wn));const p=Lp(r,e,t,n,Hn,Gn,Wn,ja);if(p){o&&(ms.fromBufferAttribute(o,c),gs.fromBufferAttribute(o,u),vs.fromBufferAttribute(o,h),p.uv=gt.getUV(ja,Hn,Gn,Wn,ms,gs,vs,new se)),l&&(ms.fromBufferAttribute(l,c),gs.fromBufferAttribute(l,u),vs.fromBufferAttribute(l,h),p.uv2=gt.getUV(ja,Hn,Gn,Wn,ms,gs,vs,new se));const g={a:c,b:u,c:h,normal:new L,materialIndex:0};gt.getNormal(Hn,Gn,Wn,g.normal),p.face=g}return p}class Yr extends lt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(u,3)),this.setAttribute("uv",new wt(h,2));function g(v,x,m,f,b,y,_,E,C,D,O){const k=y/C,R=_/D,M=y/2,w=_/2,F=E/2,N=C+1,P=D+1;let z=0,$=0;const ne=new L;for(let V=0;V<P;V++){const q=V*R-w;for(let Q=0;Q<N;Q++){const ie=Q*k-M;ne[v]=ie*f,ne[x]=q*b,ne[m]=F,c.push(ne.x,ne.y,ne.z),ne[v]=0,ne[x]=0,ne[m]=E>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(Q/C),h.push(1-V/D),z+=1}}for(let V=0;V<D;V++)for(let q=0;q<C;q++){const Q=d+q+N*V,ie=d+q+N*(V+1),ce=d+(q+1)+N*(V+1),Ae=d+(q+1)+N*V;l.push(Q,ie,Ae),l.push(ie,ce,Ae),$+=6}o.addGroup(p,$,O),p+=$,d+=z}}static fromJSON(e){return new Yr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ji(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Lt(r){const e={};for(let t=0;t<r.length;t++){const n=Ji(r[t]);for(const i in n)e[i]=n[i]}return e}const Rp={clone:Ji,merge:Lt};var Pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends It{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Pp,this.fragmentShader=Ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ji(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}Nn.prototype.isShaderMaterial=!0;class Xo extends Ke{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}Xo.prototype.isCamera=!0;class zt extends Xo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bo*2*Math.atan(Math.tan(Sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}zt.prototype.isPerspectiveCamera=!0;const Ii=90,Di=1;class Yo extends Ke{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new zt(Ii,Di,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new L(1,0,0)),this.add(i);const s=new zt(Ii,Di,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new L(-1,0,0)),this.add(s);const a=new zt(Ii,Di,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new L(0,1,0)),this.add(a);const o=new zt(Ii,Di,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new L(0,-1,0)),this.add(o);const l=new zt(Ii,Di,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new L(0,0,1)),this.add(l);const c=new zt(Ii,Di,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new L(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,l,c]=this.children,u=e.xr.enabled,h=e.getRenderTarget();e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.xr.enabled=u}}class ca extends St{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:jr,super(e,t,n,i,s,a,o,l,c,u),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}ca.prototype.isCubeTexture=!0;class Gu extends Qt{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new ca(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nt,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=Mt,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Yr(5,5,5),s=new Nn({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pt,blending:Jn});s.uniforms.tEquirect.value=t;const a=new kt(i,s),o=t.minFilter;return t.minFilter===oa&&(t.minFilter=Nt),new Yo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}Gu.prototype.isWebGLCubeRenderTarget=!0;const Xa=new L,Dp=new L,Fp=new At;class Dn{constructor(e=new L(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Xa.subVectors(n,t).cross(Dp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Xa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Fp.getNormalMatrix(e),i=this.coplanarPoint(Xa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}Dn.prototype.isPlane=!0;const Fi=new ir,_s=new L;class ua{constructor(e=new Dn,t=new Dn,n=new Dn,i=new Dn,s=new Dn,a=new Dn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],p=n[9],g=n[10],v=n[11],x=n[12],m=n[13],f=n[14],b=n[15];return t[0].setComponents(o-i,h-l,v-d,b-x).normalize(),t[1].setComponents(o+i,h+l,v+d,b+x).normalize(),t[2].setComponents(o+s,h+c,v+p,b+m).normalize(),t[3].setComponents(o-s,h-c,v-p,b-m).normalize(),t[4].setComponents(o-a,h-u,v-g,b-f).normalize(),t[5].setComponents(o+a,h+u,v+g,b+f).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSprite(e){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(_s.x=i.normal.x>0?e.max.x:e.min.x,_s.y=i.normal.y>0?e.max.y:e.min.y,_s.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(_s)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wu(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function zp(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,p=r.createBuffer();r.bindBuffer(u,p),r.bufferData(u,h,d),c.onUploadCallback();let g=5126;return h instanceof Float32Array?g=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?c.isFloat16BufferAttribute?t?g=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):g=5123:h instanceof Int16Array?g=5122:h instanceof Uint32Array?g=5125:h instanceof Int32Array?g=5124:h instanceof Int8Array?g=5120:(h instanceof Uint8Array||h instanceof Uint8ClampedArray)&&(g=5121),{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const d=u.array,p=u.updateRange;r.bindBuffer(h,c),p.count===-1?r.bufferSubData(h,0,d):(t?r.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):r.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class ha extends lt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,p=[],g=[],v=[],x=[];for(let m=0;m<u;m++){const f=m*d-a;for(let b=0;b<c;b++){const y=b*h-s;g.push(y,-f,0),v.push(0,0,1),x.push(b/o),x.push(1-m/l)}}for(let m=0;m<l;m++)for(let f=0;f<o;f++){const b=f+c*m,y=f+c*(m+1),_=f+1+c*(m+1),E=f+1+c*m;p.push(b,y,E),p.push(y,_,E)}this.setIndex(p),this.setAttribute("position",new wt(g,3)),this.setAttribute("normal",new wt(v,3)),this.setAttribute("uv",new wt(x,2))}static fromJSON(e){return new ha(e.width,e.height,e.widthSegments,e.heightSegments)}}var Np=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,kp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Up=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hp="vec3 transformed = vec3( position );",Gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wp=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,qp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,em=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,tm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		return texture2D( envMap, uv ).rgb;
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nm=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,im=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,sm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,am=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,om="gl_FragColor = linearToOutputTexel( gl_FragColor );",lm=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		envColor = envMapTexelToLinear( envColor );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,um=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,ym=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,_m=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bm=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Mm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wm=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Sm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Am=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Cm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= specularColorMapTexelToLinear( texture2D( specularColorMap, vUv ) ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= sheenColorMapTexelToLinear( texture2D( sheenColorMap, vUv ) ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Lm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rm=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Im=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Dm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Nm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,km=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,Bm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Om=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Wm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,qm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,jm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Xm=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$m=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Qm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Km=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,eg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,tg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ng=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,ig=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ag=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,og=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cg=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ug=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hg=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,dg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,mg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_g=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bg=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Mg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( float roughness, float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,wg=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Sg=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Tg=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Eg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Ag=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Cg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Lg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pg=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Fg=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ng=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Og=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ug=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hg=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wg=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qg=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,Jg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$g=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Kg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ev=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,iv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rv=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,av=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ov=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,je={alphamap_fragment:Np,alphamap_pars_fragment:kp,alphatest_fragment:Bp,alphatest_pars_fragment:Op,aomap_fragment:Up,aomap_pars_fragment:Vp,begin_vertex:Hp,beginnormal_vertex:Gp,bsdfs:Wp,bumpmap_pars_fragment:qp,clipping_planes_fragment:jp,clipping_planes_pars_fragment:Xp,clipping_planes_pars_vertex:Yp,clipping_planes_vertex:Zp,color_fragment:Jp,color_pars_fragment:$p,color_pars_vertex:Qp,color_vertex:Kp,common:em,cube_uv_reflection_fragment:tm,defaultnormal_vertex:nm,displacementmap_pars_vertex:im,displacementmap_vertex:rm,emissivemap_fragment:sm,emissivemap_pars_fragment:am,encodings_fragment:om,encodings_pars_fragment:lm,envmap_fragment:cm,envmap_common_pars_fragment:um,envmap_pars_fragment:hm,envmap_pars_vertex:dm,envmap_physical_pars_fragment:wm,envmap_vertex:fm,fog_vertex:pm,fog_pars_vertex:mm,fog_fragment:gm,fog_pars_fragment:vm,gradientmap_pars_fragment:xm,lightmap_fragment:ym,lightmap_pars_fragment:_m,lights_lambert_vertex:bm,lights_pars_begin:Mm,lights_toon_fragment:Sm,lights_toon_pars_fragment:Tm,lights_phong_fragment:Em,lights_phong_pars_fragment:Am,lights_physical_fragment:Cm,lights_physical_pars_fragment:Lm,lights_fragment_begin:Rm,lights_fragment_maps:Pm,lights_fragment_end:Im,logdepthbuf_fragment:Dm,logdepthbuf_pars_fragment:Fm,logdepthbuf_pars_vertex:zm,logdepthbuf_vertex:Nm,map_fragment:km,map_pars_fragment:Bm,map_particle_fragment:Om,map_particle_pars_fragment:Um,metalnessmap_fragment:Vm,metalnessmap_pars_fragment:Hm,morphnormal_vertex:Gm,morphtarget_pars_vertex:Wm,morphtarget_vertex:qm,normal_fragment_begin:jm,normal_fragment_maps:Xm,normal_pars_fragment:Ym,normal_pars_vertex:Zm,normal_vertex:Jm,normalmap_pars_fragment:$m,clearcoat_normal_fragment_begin:Qm,clearcoat_normal_fragment_maps:Km,clearcoat_pars_fragment:eg,output_fragment:tg,packing:ng,premultiplied_alpha_fragment:ig,project_vertex:rg,dithering_fragment:sg,dithering_pars_fragment:ag,roughnessmap_fragment:og,roughnessmap_pars_fragment:lg,shadowmap_pars_fragment:cg,shadowmap_pars_vertex:ug,shadowmap_vertex:hg,shadowmask_pars_fragment:dg,skinbase_vertex:fg,skinning_pars_vertex:pg,skinning_vertex:mg,skinnormal_vertex:gg,specularmap_fragment:vg,specularmap_pars_fragment:xg,tonemapping_fragment:yg,tonemapping_pars_fragment:_g,transmission_fragment:bg,transmission_pars_fragment:Mg,uv_pars_fragment:wg,uv_pars_vertex:Sg,uv_vertex:Tg,uv2_pars_fragment:Eg,uv2_pars_vertex:Ag,uv2_vertex:Cg,worldpos_vertex:Lg,background_vert:Rg,background_frag:Pg,cube_vert:Ig,cube_frag:Dg,depth_vert:Fg,depth_frag:zg,distanceRGBA_vert:Ng,distanceRGBA_frag:kg,equirect_vert:Bg,equirect_frag:Og,linedashed_vert:Ug,linedashed_frag:Vg,meshbasic_vert:Hg,meshbasic_frag:Gg,meshlambert_vert:Wg,meshlambert_frag:qg,meshmatcap_vert:jg,meshmatcap_frag:Xg,meshnormal_vert:Yg,meshnormal_frag:Zg,meshphong_vert:Jg,meshphong_frag:$g,meshphysical_vert:Qg,meshphysical_frag:Kg,meshtoon_vert:ev,meshtoon_frag:tv,points_vert:nv,points_frag:iv,shadow_vert:rv,shadow_frag:sv,sprite_vert:av,sprite_frag:ov},ge={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new At},uv2Transform:{value:new At},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new At}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new At}}},gn={basic:{uniforms:Lt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Lt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.fog,ge.lights,{emissive:{value:new Ee(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Lt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Lt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Lt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ee(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Lt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Lt([ge.points,ge.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Lt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Lt([ge.common,ge.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Lt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Lt([ge.sprite,ge.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new At},t2D:{value:null}},vertexShader:je.background_vert,fragmentShader:je.background_frag},cube:{uniforms:Lt([ge.envmap,{opacity:{value:1}}]),vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Lt([ge.common,ge.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Lt([ge.lights,ge.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};gn.physical={uniforms:Lt([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new se(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenRoughness:{value:0},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};function lv(r,e,t,n,i){const s=new Ee(0);let a=0,o,l,c=null,u=0,h=null;function d(g,v){let x=!1,m=v.isScene===!0?v.background:null;m&&m.isTexture&&(m=e.get(m));const f=r.xr,b=f.getSession&&f.getSession();b&&b.environmentBlendMode==="additive"&&(m=null),m===null?p(s,a):m&&m.isColor&&(p(m,1),x=!0),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),m&&(m.isCubeTexture||m.mapping===aa)?(l===void 0&&(l=new kt(new Yr(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Ji(gn.cube.uniforms),vertexShader:gn.cube.vertexShader,fragmentShader:gn.cube.fragmentShader,side:pt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,_,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=m,l.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,(c!==m||u!==m.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,c=m,u=m.version,h=r.toneMapping),g.unshift(l,l.geometry,l.material,0,0,null)):m&&m.isTexture&&(o===void 0&&(o=new kt(new ha(2,2),new Nn({name:"BackgroundMaterial",uniforms:Ji(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:kr,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=m,m.matrixAutoUpdate===!0&&m.updateMatrix(),o.material.uniforms.uvTransform.value.copy(m.matrix),(c!==m||u!==m.version||h!==r.toneMapping)&&(o.material.needsUpdate=!0,c=m,u=m.version,h=r.toneMapping),g.unshift(o,o.geometry,o.material,0,0,null))}function p(g,v){t.buffers.color.setClear(g.r,g.g,g.b,v,i)}return{getClearColor:function(){return s},setClearColor:function(g,v=1){s.set(g),a=v,p(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,p(s,a)},render:d}}function cv(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=v(null);let c=l;function u(w,F,N,P,z){let $=!1;if(a){const ne=g(P,N,F);c!==ne&&(c=ne,d(c.object)),$=x(P,z),$&&m(P,z)}else{const ne=F.wireframe===!0;(c.geometry!==P.id||c.program!==N.id||c.wireframe!==ne)&&(c.geometry=P.id,c.program=N.id,c.wireframe=ne,$=!0)}w.isInstancedMesh===!0&&($=!0),z!==null&&t.update(z,34963),$&&(C(w,F,N,P),z!==null&&r.bindBuffer(34963,t.get(z).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(w){return n.isWebGL2?r.bindVertexArray(w):s.bindVertexArrayOES(w)}function p(w){return n.isWebGL2?r.deleteVertexArray(w):s.deleteVertexArrayOES(w)}function g(w,F,N){const P=N.wireframe===!0;let z=o[w.id];z===void 0&&(z={},o[w.id]=z);let $=z[F.id];$===void 0&&($={},z[F.id]=$);let ne=$[P];return ne===void 0&&(ne=v(h()),$[P]=ne),ne}function v(w){const F=[],N=[],P=[];for(let z=0;z<i;z++)F[z]=0,N[z]=0,P[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:N,attributeDivisors:P,object:w,attributes:{},index:null}}function x(w,F){const N=c.attributes,P=w.attributes;let z=0;for(const $ in P){const ne=N[$],V=P[$];if(ne===void 0||ne.attribute!==V||ne.data!==V.data)return!0;z++}return c.attributesNum!==z||c.index!==F}function m(w,F){const N={},P=w.attributes;let z=0;for(const $ in P){const ne=P[$],V={};V.attribute=ne,ne.data&&(V.data=ne.data),N[$]=V,z++}c.attributes=N,c.attributesNum=z,c.index=F}function f(){const w=c.newAttributes;for(let F=0,N=w.length;F<N;F++)w[F]=0}function b(w){y(w,0)}function y(w,F){const N=c.newAttributes,P=c.enabledAttributes,z=c.attributeDivisors;N[w]=1,P[w]===0&&(r.enableVertexAttribArray(w),P[w]=1),z[w]!==F&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](w,F),z[w]=F)}function _(){const w=c.newAttributes,F=c.enabledAttributes;for(let N=0,P=F.length;N<P;N++)F[N]!==w[N]&&(r.disableVertexAttribArray(N),F[N]=0)}function E(w,F,N,P,z,$){n.isWebGL2===!0&&(N===5124||N===5125)?r.vertexAttribIPointer(w,F,N,z,$):r.vertexAttribPointer(w,F,N,P,z,$)}function C(w,F,N,P){if(n.isWebGL2===!1&&(w.isInstancedMesh||P.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;f();const z=P.attributes,$=N.getAttributes(),ne=F.defaultAttributeValues;for(const V in $){const q=$[V];if(q.location>=0){let Q=z[V];if(Q===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(Q=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(Q=w.instanceColor)),Q!==void 0){const ie=Q.normalized,ce=Q.itemSize,Ae=t.get(Q);if(Ae===void 0)continue;const W=Ae.buffer,re=Ae.type,_e=Ae.bytesPerElement;if(Q.isInterleavedBufferAttribute){const ue=Q.data,we=ue.stride,He=Q.offset;if(ue&&ue.isInstancedInterleavedBuffer){for(let j=0;j<q.locationSize;j++)y(q.location+j,ue.meshPerAttribute);w.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let j=0;j<q.locationSize;j++)b(q.location+j);r.bindBuffer(34962,W);for(let j=0;j<q.locationSize;j++)E(q.location+j,ce/q.locationSize,re,ie,we*_e,(He+ce/q.locationSize*j)*_e)}else{if(Q.isInstancedBufferAttribute){for(let ue=0;ue<q.locationSize;ue++)y(q.location+ue,Q.meshPerAttribute);w.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ue=0;ue<q.locationSize;ue++)b(q.location+ue);r.bindBuffer(34962,W);for(let ue=0;ue<q.locationSize;ue++)E(q.location+ue,ce/q.locationSize,re,ie,ce*_e,ce/q.locationSize*ue*_e)}}else if(ne!==void 0){const ie=ne[V];if(ie!==void 0)switch(ie.length){case 2:r.vertexAttrib2fv(q.location,ie);break;case 3:r.vertexAttrib3fv(q.location,ie);break;case 4:r.vertexAttrib4fv(q.location,ie);break;default:r.vertexAttrib1fv(q.location,ie)}}}}_()}function D(){R();for(const w in o){const F=o[w];for(const N in F){const P=F[N];for(const z in P)p(P[z].object),delete P[z];delete F[N]}delete o[w]}}function O(w){if(o[w.id]===void 0)return;const F=o[w.id];for(const N in F){const P=F[N];for(const z in P)p(P[z].object),delete P[z];delete F[N]}delete o[w.id]}function k(w){for(const F in o){const N=o[F];if(N[w.id]===void 0)continue;const P=N[w.id];for(const z in P)p(P[z].object),delete P[z];delete N[w.id]}}function R(){M(),c!==l&&(c=l,d(c.object))}function M(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:R,resetDefaultState:M,dispose:D,releaseStatesOfGeometry:O,releaseStatesOfProgram:k,initAttributes:f,enableAttribute:b,disableUnusedAttributes:_}}function uv(r,e,t,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let d,p;if(i)d=r,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,c,u,h),t.update(u,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function hv(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(C){if(C==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),d=r.getParameter(35660),p=r.getParameter(3379),g=r.getParameter(34076),v=r.getParameter(34921),x=r.getParameter(36347),m=r.getParameter(36348),f=r.getParameter(36349),b=d>0,y=a||e.has("OES_texture_float"),_=b&&y,E=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:x,maxVaryings:m,maxFragmentUniforms:f,vertexTextures:b,floatFragmentTextures:y,floatVertexTextures:_,maxSamples:E}}function dv(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Dn,o=new At,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,p){const g=h.length!==0||d||n!==0||i;return i=d,t=u(h,p,0),n=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,d,p){const g=h.clippingPlanes,v=h.clipIntersection,x=h.clipShadows,m=r.get(h);if(!i||g===null||g.length===0||s&&!x)s?u(null):c();else{const f=s?0:n,b=f*4;let y=m.clippingState||null;l.value=y,y=u(g,d,b,p);for(let _=0;_!==b;++_)y[_]=t[_];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=f}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){const v=h!==null?h.length:0;let x=null;if(v!==0){if(x=l.value,g!==!0||x===null){const m=p+v*4,f=d.matrixWorldInverse;o.getNormalMatrix(f),(x===null||x.length<m)&&(x=new Float32Array(m));for(let b=0,y=p;b!==v;++b,y+=4)a.copy(h[b]).applyMatrix4(f,o),a.normal.toArray(x,y),x[y+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}function fv(r){let e=new WeakMap;function t(a,o){return o===vo?a.mapping=jr:o===xo&&(a.mapping=Xr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===vo||o===xo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=r.getRenderTarget(),u=new Gu(l.height/2);return u.fromEquirectangularTexture(r,a),e.set(a,u),r.setRenderTarget(c),a.addEventListener("dispose",i),t(u.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Zo extends Xo{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}Zo.prototype.isOrthographicCamera=!0;class da extends Nn{constructor(e){super(e),this.type="RawShaderMaterial"}}da.prototype.isRawShaderMaterial=!0;const ji=4,Qn=8,mn=Math.pow(2,Qn),qu=[.125,.215,.35,.446,.526,.582],ju=Qn-ji+1+qu.length,zi=20,Js={[ln]:0,[er]:1},Ya=new Zo,{_lodPlanes:vr,_sizeLods:ic,_sigmas:bs}=mv(),rc=new Ee;let Za=null;const gi=(1+Math.sqrt(5))/2,Ni=1/gi,sc=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,gi,Ni),new L(0,gi,-Ni),new L(Ni,0,gi),new L(-Ni,0,gi),new L(gi,Ni,0),new L(-gi,Ni,0)];class pv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=gv(zi),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Za=this._renderer.getRenderTarget();const s=this._allocateTargets();return this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=lc(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=oc(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<vr.length;e++)vr[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(Za),e.scissorTest=!1,Ms(e,0,0,e.width,e.height)}_fromTexture(e){Za=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:vi,format:Mt,encoding:ln,depthBuffer:!1},n=ac(t);return n.depthBuffer=!e,this._pingPongRenderTarget=ac(t),n}_compileMaterial(e){const t=new kt(vr[0],e);this._renderer.compile(t,Ya)}_sceneToCubeUV(e,t,n,i){const o=new zt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(rc),u.toneMapping=$n,u.autoClear=!1;const p=new jo({name:"PMREM.Background",side:pt,depthWrite:!1,depthTest:!1}),g=new kt(new Yr,p);let v=!1;const x=e.background;x?x.isColor&&(p.color.copy(x),e.background=null,v=!0):(p.color.copy(rc),v=!0);for(let m=0;m<6;m++){const f=m%3;f==0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):f==1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m])),Ms(i,f*mn,m>2?mn:0,mn,mn),u.setRenderTarget(i),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=x}_setEncoding(e,t){this._renderer.capabilities.isWebGL2===!0&&t.format===Mt&&t.type===zn&&t.encoding===er?e.value=Js[ln]:e.value=Js[t.encoding]}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===jr||e.mapping===Xr;i?this._cubemapShader==null&&(this._cubemapShader=lc()):this._equirectShader==null&&(this._equirectShader=oc());const s=i?this._cubemapShader:this._equirectShader,a=new kt(vr[0],s),o=s.uniforms;o.envMap.value=e,i||o.texelSize.value.set(1/e.image.width,1/e.image.height),this._setEncoding(o.inputEncoding,e),Ms(t,0,0,3*mn,2*mn),n.setRenderTarget(t),n.render(a,Ya)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<ju;i++){const s=Math.sqrt(bs[i]*bs[i]-bs[i-1]*bs[i-1]),a=sc[(i-1)%sc.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new kt(vr[i],c),d=c.uniforms,p=ic[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*zi-1),v=s/g,x=isFinite(s)?1+Math.floor(u*v):zi;x>zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${zi}`);const m=[];let f=0;for(let E=0;E<zi;++E){const C=E/v,D=Math.exp(-C*C/2);m.push(D),E==0?f+=D:E<x&&(f+=2*D)}for(let E=0;E<m.length;E++)m[E]=m[E]/f;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o),d.dTheta.value=g,d.mipInt.value=Qn-n;const b=ic[i],y=3*Math.max(0,mn-2*b),_=(i===0?0:2*mn)+2*b*(i>Qn-ji?i-Qn+ji:0);Ms(t,y,_,3*b,2*b),l.setRenderTarget(t),l.render(h,Ya)}}function mv(){const r=[],e=[],t=[];let n=Qn;for(let i=0;i<ju;i++){const s=Math.pow(2,n);e.push(s);let a=1/s;i>Qn-ji?a=qu[i-Qn+ji-1]:i==0&&(a=0),t.push(a);const o=1/(s-1),l=-o/2,c=1+o/2,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,p=3,g=2,v=1,x=new Float32Array(p*d*h),m=new Float32Array(g*d*h),f=new Float32Array(v*d*h);for(let y=0;y<h;y++){const _=y%3*2/3-1,E=y>2?0:-1,C=[_,E,0,_+2/3,E,0,_+2/3,E+1,0,_,E,0,_+2/3,E+1,0,_,E+1,0];x.set(C,p*d*y),m.set(u,g*d*y);const D=[y,y,y,y,y,y];f.set(D,v*d*y)}const b=new lt;b.setAttribute("position",new vt(x,p)),b.setAttribute("uv",new vt(m,g)),b.setAttribute("faceIndex",new vt(f,v)),r.push(b),n>ji&&n--}return{_lodPlanes:r,_sizeLods:e,_sigmas:t}}function ac(r){const e=new Qt(3*mn,3*mn,r);return e.texture.mapping=aa,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function Ms(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function gv(r){const e=new Float32Array(r),t=new L(0,1,0);return new da({name:"SphericalGaussianBlur",defines:{n:r},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${$o()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function oc(){const r=new se(1,1);return new da({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:r},inputEncoding:{value:Js[ln]}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${$o()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function lc(){return new da({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:Js[ln]}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${$o()}

			void main() {

				gl_FragColor = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Jo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $o(){return`

		uniform int inputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else {

				return sRGBToLinear( value );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function vv(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const l=o.mapping,c=l===vo||l===xo,u=l===jr||l===Xr;if(c||u){if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){const d=r.getRenderTarget();t===null&&(t=new pv(r));const p=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,p),r.setRenderTarget(d),o.addEventListener("dispose",s),p.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function xv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function yv(r,e,t,n){const i={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],34962);const p=h.morphAttributes;for(const g in p){const v=p[g];for(let x=0,m=v.length;x<m;x++)e.update(v[x],34962)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const f=p.array;v=p.version;for(let b=0,y=f.length;b<y;b+=3){const _=f[b+0],E=f[b+1],C=f[b+2];d.push(_,E,E,C,C,_)}}else{const f=g.array;v=g.version;for(let b=0,y=f.length/3-1;b<y;b+=3){const _=b+0,E=b+1,C=b+2;d.push(_,E,E,C,C,_)}}const x=new(Bu(d)>65535?Hu:Vu)(d,1);x.version=v;const m=s.get(h);m&&e.remove(m),s.set(h,x)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function _v(r,e,t,n){const i=n.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,p){r.drawElements(s,p,o,d*l),t.update(p,s,1)}function h(d,p,g){if(g===0)return;let v,x;if(i)v=r,x="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[x](s,p,o,d*l,g),t.update(p,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function bv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}class Qo extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=mt,this.minFilter=mt,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Qo.prototype.isDataTexture2DArray=!0;function Mv(r,e){return r[0]-e[0]}function wv(r,e){return Math.abs(e[1])-Math.abs(r[1])}function cc(r,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),r.divideScalar(t)}function Sv(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new L,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h,d){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position.length;let v=s.get(u);if(v===void 0||v.count!==g){v!==void 0&&v.texture.dispose();const f=u.morphAttributes.normal!==void 0,b=u.morphAttributes.position,y=u.morphAttributes.normal||[],_=u.attributes.position.count,E=f===!0?2:1;let C=_*E,D=1;C>e.maxTextureSize&&(D=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const O=new Float32Array(C*D*4*g),k=new Qo(O,C,D,g);k.format=Mt,k.type=Yn,k.needsUpdate=!0;const R=E*4;for(let M=0;M<g;M++){const w=b[M],F=y[M],N=C*D*4*M;for(let P=0;P<w.count;P++){a.fromBufferAttribute(w,P),w.normalized===!0&&cc(a,w);const z=P*R;O[N+z+0]=a.x,O[N+z+1]=a.y,O[N+z+2]=a.z,O[N+z+3]=0,f===!0&&(a.fromBufferAttribute(F,P),F.normalized===!0&&cc(a,F),O[N+z+4]=a.x,O[N+z+5]=a.y,O[N+z+6]=a.z,O[N+z+7]=0)}}v={count:g,texture:k,size:new se(C,D)},s.set(u,v)}let x=0;for(let f=0;f<p.length;f++)x+=p[f];const m=u.morphTargetsRelative?1:1-x;d.getUniforms().setValue(r,"morphTargetBaseInfluence",m),d.getUniforms().setValue(r,"morphTargetInfluences",p),d.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}else{const g=p===void 0?0:p.length;let v=n[u.id];if(v===void 0||v.length!==g){v=[];for(let y=0;y<g;y++)v[y]=[y,0];n[u.id]=v}for(let y=0;y<g;y++){const _=v[y];_[0]=y,_[1]=p[y]}v.sort(wv);for(let y=0;y<8;y++)y<g&&v[y][1]?(o[y][0]=v[y][0],o[y][1]=v[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Mv);const x=u.morphAttributes.position,m=u.morphAttributes.normal;let f=0;for(let y=0;y<8;y++){const _=o[y],E=_[0],C=_[1];E!==Number.MAX_SAFE_INTEGER&&C?(x&&u.getAttribute("morphTarget"+y)!==x[E]&&u.setAttribute("morphTarget"+y,x[E]),m&&u.getAttribute("morphNormal"+y)!==m[E]&&u.setAttribute("morphNormal"+y,m[E]),i[y]=C,f+=C):(x&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),m&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const b=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(r,"morphTargetBaseInfluence",b),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Tv(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Xu extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=mt,this.minFilter=mt,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Xu.prototype.isDataTexture3D=!0;const Yu=new St,Zu=new Qo,Ju=new Xu,$u=new ca,uc=[],hc=[],dc=new Float32Array(16),fc=new Float32Array(9),pc=new Float32Array(4);function ar(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=uc[i];if(s===void 0&&(s=new Float32Array(i),uc[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Bt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Pt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function fa(r,e){let t=hc[e];t===void 0&&(t=new Int32Array(e),hc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Ev(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Av(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;r.uniform2fv(this.addr,e),Pt(t,e)}}function Cv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;r.uniform3fv(this.addr,e),Pt(t,e)}}function Lv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;r.uniform4fv(this.addr,e),Pt(t,e)}}function Rv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Bt(t,n))return;pc.set(n),r.uniformMatrix2fv(this.addr,!1,pc),Pt(t,n)}}function Pv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Bt(t,n))return;fc.set(n),r.uniformMatrix3fv(this.addr,!1,fc),Pt(t,n)}}function Iv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Bt(t,n))return;dc.set(n),r.uniformMatrix4fv(this.addr,!1,dc),Pt(t,n)}}function Dv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Fv(r,e){const t=this.cache;Bt(t,e)||(r.uniform2iv(this.addr,e),Pt(t,e))}function zv(r,e){const t=this.cache;Bt(t,e)||(r.uniform3iv(this.addr,e),Pt(t,e))}function Nv(r,e){const t=this.cache;Bt(t,e)||(r.uniform4iv(this.addr,e),Pt(t,e))}function kv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Bv(r,e){const t=this.cache;Bt(t,e)||(r.uniform2uiv(this.addr,e),Pt(t,e))}function Ov(r,e){const t=this.cache;Bt(t,e)||(r.uniform3uiv(this.addr,e),Pt(t,e))}function Uv(r,e){const t=this.cache;Bt(t,e)||(r.uniform4uiv(this.addr,e),Pt(t,e))}function Vv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||Yu,i)}function Hv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ju,i)}function Gv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||$u,i)}function Wv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Zu,i)}function qv(r){switch(r){case 5126:return Ev;case 35664:return Av;case 35665:return Cv;case 35666:return Lv;case 35674:return Rv;case 35675:return Pv;case 35676:return Iv;case 5124:case 35670:return Dv;case 35667:case 35671:return Fv;case 35668:case 35672:return zv;case 35669:case 35673:return Nv;case 5125:return kv;case 36294:return Bv;case 36295:return Ov;case 36296:return Uv;case 35678:case 36198:case 36298:case 36306:case 35682:return Vv;case 35679:case 36299:case 36307:return Hv;case 35680:case 36300:case 36308:case 36293:return Gv;case 36289:case 36303:case 36311:case 36292:return Wv}}function jv(r,e){r.uniform1fv(this.addr,e)}function Xv(r,e){const t=ar(e,this.size,2);r.uniform2fv(this.addr,t)}function Yv(r,e){const t=ar(e,this.size,3);r.uniform3fv(this.addr,t)}function Zv(r,e){const t=ar(e,this.size,4);r.uniform4fv(this.addr,t)}function Jv(r,e){const t=ar(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function $v(r,e){const t=ar(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Qv(r,e){const t=ar(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Kv(r,e){r.uniform1iv(this.addr,e)}function e0(r,e){r.uniform2iv(this.addr,e)}function t0(r,e){r.uniform3iv(this.addr,e)}function n0(r,e){r.uniform4iv(this.addr,e)}function i0(r,e){r.uniform1uiv(this.addr,e)}function r0(r,e){r.uniform2uiv(this.addr,e)}function s0(r,e){r.uniform3uiv(this.addr,e)}function a0(r,e){r.uniform4uiv(this.addr,e)}function o0(r,e,t){const n=e.length,i=fa(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTexture2D(e[s]||Yu,i[s])}function l0(r,e,t){const n=e.length,i=fa(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Ju,i[s])}function c0(r,e,t){const n=e.length,i=fa(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTextureCube(e[s]||$u,i[s])}function u0(r,e,t){const n=e.length,i=fa(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||Zu,i[s])}function h0(r){switch(r){case 5126:return jv;case 35664:return Xv;case 35665:return Yv;case 35666:return Zv;case 35674:return Jv;case 35675:return $v;case 35676:return Qv;case 5124:case 35670:return Kv;case 35667:case 35671:return e0;case 35668:case 35672:return t0;case 35669:case 35673:return n0;case 5125:return i0;case 36294:return r0;case 36295:return s0;case 36296:return a0;case 35678:case 36198:case 36298:case 36306:case 35682:return o0;case 35679:case 36299:case 36307:return l0;case 35680:case 36300:case 36308:case 36293:return c0;case 36289:case 36303:case 36311:case 36292:return u0}}function d0(r,e,t){this.id=r,this.addr=t,this.cache=[],this.setValue=qv(e.type)}function Qu(r,e,t){this.id=r,this.addr=t,this.cache=[],this.size=e.size,this.setValue=h0(e.type)}Qu.prototype.updateCache=function(r){const e=this.cache;r instanceof Float32Array&&e.length!==r.length&&(this.cache=new Float32Array(r.length)),Pt(e,r)};function Ku(r){this.id=r,this.seq=[],this.map={}}Ku.prototype.setValue=function(r,e,t){const n=this.seq;for(let i=0,s=n.length;i!==s;++i){const a=n[i];a.setValue(r,e[a.id],t)}};const Ja=/(\w+)(\])?(\[|\.)?/g;function mc(r,e){r.seq.push(e),r.map[e.id]=e}function f0(r,e,t){const n=r.name,i=n.length;for(Ja.lastIndex=0;;){const s=Ja.exec(n),a=Ja.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){mc(t,c===void 0?new d0(o,r,e):new Qu(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new Ku(o),mc(t,h)),t=h}}}function Kn(r,e){this.seq=[],this.map={};const t=r.getProgramParameter(e,35718);for(let n=0;n<t;++n){const i=r.getActiveUniform(e,n),s=r.getUniformLocation(e,i.name);f0(i,s,this)}}Kn.prototype.setValue=function(r,e,t,n){const i=this.map[e];i!==void 0&&i.setValue(r,t,n)};Kn.prototype.setOptional=function(r,e,t){const n=e[t];n!==void 0&&this.setValue(r,t,n)};Kn.upload=function(r,e,t,n){for(let i=0,s=e.length;i!==s;++i){const a=e[i],o=t[a.id];o.needsUpdate!==!1&&a.setValue(r,o.value,n)}};Kn.seqWithValue=function(r,e){const t=[];for(let n=0,i=r.length;n!==i;++n){const s=r[n];s.id in e&&t.push(s)}return t};function gc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let p0=0;function m0(r){const e=r.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function eh(r){switch(r){case ln:return["Linear","( value )"];case er:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function vc(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();return n&&i===""?"":t.toUpperCase()+`

`+i+`

`+m0(r.getShaderSource(e))}function hi(r,e){const t=eh(e);return"vec4 "+r+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function g0(r,e){const t=eh(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function v0(r,e){let t;switch(e){case uf:t="Linear";break;case hf:t="Reinhard";break;case df:t="OptimizedCineon";break;case ff:t="ACESFilmic";break;case pf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function x0(r){return[r.extensionDerivatives||r.envMapCubeUV||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Sr).join(`
`)}function y0(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _0(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Sr(r){return r!==""}function xc(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const b0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mo(r){return r.replace(b0,M0)}function M0(r,e){const t=je[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Mo(t)}const w0=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,S0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _c(r){return r.replace(S0,th).replace(w0,T0)}function T0(r,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),th(r,e,t,n)}function th(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function bc(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function E0(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Iu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Vd?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===wr&&(e="SHADOWMAP_TYPE_VSM"),e}function A0(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case jr:case Xr:e="ENVMAP_TYPE_CUBE";break;case aa:case Go:e="ENVMAP_TYPE_CUBE_UV";break}return e}function C0(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Xr:case Go:e="ENVMAP_MODE_REFRACTION";break}return e}function L0(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case sa:e="ENVMAP_BLENDING_MULTIPLY";break;case lf:e="ENVMAP_BLENDING_MIX";break;case cf:e="ENVMAP_BLENDING_ADD";break}return e}function R0(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=E0(t),c=A0(t),u=C0(t),h=L0(t),d=t.isWebGL2?"":x0(t),p=y0(s),g=i.createProgram();let v,x,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=[p].filter(Sr).join(`
`),v.length>0&&(v+=`
`),x=[d,p].filter(Sr).join(`
`),x.length>0&&(x+=`
`)):(v=[bc(t),"#define SHADER_NAME "+t.shaderName,p,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),x=[d,bc(t),"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$n?"#define TONE_MAPPING":"",t.toneMapping!==$n?je.tonemapping_pars_fragment:"",t.toneMapping!==$n?v0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.format===xi?"#define OPAQUE":"",je.encodings_pars_fragment,t.map?hi("mapTexelToLinear",t.mapEncoding):"",t.matcap?hi("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?hi("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?hi("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.specularColorMap?hi("specularColorMapTexelToLinear",t.specularColorMapEncoding):"",t.sheenColorMap?hi("sheenColorMapTexelToLinear",t.sheenColorMapEncoding):"",t.lightMap?hi("lightMapTexelToLinear",t.lightMapEncoding):"",g0("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sr).join(`
`)),a=Mo(a),a=xc(a,t),a=yc(a,t),o=Mo(o),o=xc(o,t),o=yc(o,t),a=_c(a),o=_c(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,x=["#define varying in",t.glslVersion===Wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const f=m+v+a,b=m+x+o,y=gc(i,35633,f),_=gc(i,35632,b);if(i.attachShader(g,y),i.attachShader(g,_),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),r.debug.checkShaderErrors){const D=i.getProgramInfoLog(g).trim(),O=i.getShaderInfoLog(y).trim(),k=i.getShaderInfoLog(_).trim();let R=!0,M=!0;if(i.getProgramParameter(g,35714)===!1){R=!1;const w=vc(i,y,"vertex"),F=vc(i,_,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,35715)+`

Program Info Log: `+D+`
`+w+`
`+F)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(O===""||k==="")&&(M=!1);M&&(this.diagnostics={runnable:R,programLog:D,vertexShader:{log:O,prefix:v},fragmentShader:{log:k,prefix:x}})}i.deleteShader(y),i.deleteShader(_);let E;this.getUniforms=function(){return E===void 0&&(E=new Kn(i,g)),E};let C;return this.getAttributes=function(){return C===void 0&&(C=_0(i,g)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=p0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=_,this}let P0=0;class I0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new D0;t.set(e,n)}return t.get(e)}}class D0{constructor(){this.id=P0++,this.usedTimes=0}}function F0(r,e,t,n,i,s,a){const o=new Ou,l=new I0,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.floatVertexTextures,p=i.maxVertexUniforms,g=i.vertexTextures;let v=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){const F=M.skeleton.bones;if(d)return 1024;{const P=Math.floor((p-20)/4),z=Math.min(P,F.length);return z<F.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+F.length+" bones. This GPU supports "+z+"."),0):z}}function f(M){let w;return M&&M.isTexture?w=M.encoding:M&&M.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),w=M.texture.encoding):w=ln,u&&M&&M.isTexture&&M.format===Mt&&M.type===zn&&M.encoding===er&&(w=ln),w}function b(M,w,F,N,P){const z=N.fog,$=M.isMeshStandardMaterial?N.environment:null,ne=(M.isMeshStandardMaterial?t:e).get(M.envMap||$),V=x[M.type],q=P.isSkinnedMesh?m(P):0;M.precision!==null&&(v=i.getMaxPrecision(M.precision),v!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",v,"instead."));let Q,ie,ce,Ae;if(V){const we=gn[V];Q=we.vertexShader,ie=we.fragmentShader}else Q=M.vertexShader,ie=M.fragmentShader,l.update(M),ce=l.getVertexShaderID(M),Ae=l.getFragmentShaderID(M);const W=r.getRenderTarget(),re=M.alphaTest>0,_e=M.clearcoat>0;return{isWebGL2:u,shaderID:V,shaderName:M.type,vertexShader:Q,fragmentShader:ie,defines:M.defines,customVertexShaderID:ce,customFragmentShaderID:Ae,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:v,instancing:P.isInstancedMesh===!0,instancingColor:P.isInstancedMesh===!0&&P.instanceColor!==null,supportsVertexTextures:g,outputEncoding:W!==null?f(W.texture):r.outputEncoding,map:!!M.map,mapEncoding:f(M.map),matcap:!!M.matcap,matcapEncoding:f(M.matcap),envMap:!!ne,envMapMode:ne&&ne.mapping,envMapEncoding:f(ne),envMapCubeUV:!!ne&&(ne.mapping===aa||ne.mapping===Go),lightMap:!!M.lightMap,lightMapEncoding:f(M.lightMap),aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,emissiveMapEncoding:f(M.emissiveMap),bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===fp,tangentSpaceNormalMap:M.normalMapType===tr,clearcoat:_e,clearcoatMap:_e&&!!M.clearcoatMap,clearcoatRoughnessMap:_e&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:_e&&!!M.clearcoatNormalMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,specularColorMapEncoding:f(M.specularColorMap),alphaMap:!!M.alphaMap,alphaTest:re,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenColorMapEncoding:f(M.sheenColorMap),sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!P.geometry&&!!P.geometry.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!P.geometry&&!!P.geometry.attributes.color&&P.geometry.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(M.map||M.bumpMap||M.normalMap||M.specularMap||M.alphaMap||M.emissiveMap||M.roughnessMap||M.metalnessMap||M.clearcoatNormalMap||M.transmission>0||M.transmissionMap||M.thicknessMap||M.specularIntensityMap||M.specularColorMap||M.sheen>0||M.sheenColorMap||M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!z,useFog:M.fog,fogExp2:z&&z.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:h,skinning:P.isSkinnedMesh===!0&&q>0,maxBones:q,useVertexTexture:d,morphTargets:!!P.geometry&&!!P.geometry.morphAttributes.position,morphNormals:!!P.geometry&&!!P.geometry.morphAttributes.normal,morphTargetsCount:P.geometry&&P.geometry.morphAttributes.position?P.geometry.morphAttributes.position.length:0,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,format:M.format,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:M.toneMapped?r.toneMapping:$n,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Yi,flipSided:M.side===pt,depthPacking:M.depthPacking!==void 0?M.depthPacking:!1,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function y(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const F in M.defines)w.push(F),w.push(M.defines[F]);return M.isRawShaderMaterial===!1&&(_(w,M),E(w,M),w.push(r.outputEncoding)),w.push(M.customProgramCacheKey),w.join()}function _(M,w){M.push(w.precision),M.push(w.outputEncoding),M.push(w.mapEncoding),M.push(w.matcapEncoding),M.push(w.envMapMode),M.push(w.envMapEncoding),M.push(w.lightMapEncoding),M.push(w.emissiveMapEncoding),M.push(w.combine),M.push(w.vertexUvs),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.maxBones),M.push(w.morphTargetsCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.format),M.push(w.specularColorMapEncoding),M.push(w.sheenColorMapEncoding)}function E(M,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.map&&o.enable(4),w.matcap&&o.enable(5),w.envMap&&o.enable(6),w.envMapCubeUV&&o.enable(7),w.lightMap&&o.enable(8),w.aoMap&&o.enable(9),w.emissiveMap&&o.enable(10),w.bumpMap&&o.enable(11),w.normalMap&&o.enable(12),w.objectSpaceNormalMap&&o.enable(13),w.tangentSpaceNormalMap&&o.enable(14),w.clearcoat&&o.enable(15),w.clearcoatMap&&o.enable(16),w.clearcoatRoughnessMap&&o.enable(17),w.clearcoatNormalMap&&o.enable(18),w.displacementMap&&o.enable(19),w.specularMap&&o.enable(20),w.roughnessMap&&o.enable(21),w.metalnessMap&&o.enable(22),w.gradientMap&&o.enable(23),w.alphaMap&&o.enable(24),w.alphaTest&&o.enable(25),w.vertexColors&&o.enable(26),w.vertexAlphas&&o.enable(27),w.vertexUvs&&o.enable(28),w.vertexTangents&&o.enable(29),w.uvsVertexOnly&&o.enable(30),w.fog&&o.enable(31),M.push(o.mask),o.disableAll(),w.useFog&&o.enable(0),w.flatShading&&o.enable(1),w.logarithmicDepthBuffer&&o.enable(2),w.skinning&&o.enable(3),w.useVertexTexture&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.premultipliedAlpha&&o.enable(7),w.shadowMapEnabled&&o.enable(8),w.physicallyCorrectLights&&o.enable(9),w.doubleSided&&o.enable(10),w.flipSided&&o.enable(11),w.depthPacking&&o.enable(12),w.dithering&&o.enable(13),w.specularIntensityMap&&o.enable(14),w.specularColorMap&&o.enable(15),w.transmission&&o.enable(16),w.transmissionMap&&o.enable(17),w.thicknessMap&&o.enable(18),w.sheen&&o.enable(19),w.sheenColorMap&&o.enable(20),w.sheenRoughnessMap&&o.enable(21),M.push(o.mask)}function C(M){const w=x[M.type];let F;if(w){const N=gn[w];F=Rp.clone(N.uniforms)}else F=M.uniforms;return F}function D(M,w){let F;for(let N=0,P=c.length;N<P;N++){const z=c[N];if(z.cacheKey===w){F=z,++F.usedTimes;break}}return F===void 0&&(F=new R0(r,w,M,s),c.push(F)),F}function O(M){if(--M.usedTimes===0){const w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),M.destroy()}}function k(M){l.remove(M)}function R(){l.dispose()}return{getParameters:b,getProgramCacheKey:y,getUniforms:C,acquireProgram:D,releaseProgram:O,releaseShaderCache:k,programs:c,dispose:R}}function z0(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function N0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Mc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function wc(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,p,g,v,x){let m=r[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:x},r[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=p,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=v,m.group=x),e++,m}function o(h,d,p,g,v,x){const m=a(h,d,p,g,v,x);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):t.push(m)}function l(h,d,p,g,v,x){const m=a(h,d,p,g,v,x);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||N0),n.length>1&&n.sort(d||Mc),i.length>1&&i.sort(d||Mc)}function u(){for(let h=e,d=r.length;h<d;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function k0(){let r=new WeakMap;function e(n,i){let s;return r.has(n)===!1?(s=new wc,r.set(n,[s])):i>=r.get(n).length?(s=new wc,r.get(n).push(s)):s=r.get(n)[i],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function B0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ee};break;case"SpotLight":t={position:new L,direction:new L,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new L,halfWidth:new L,halfHeight:new L};break}return r[e.id]=t,t}}}function O0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let U0=0;function V0(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function H0(r,e){const t=new B0,n=O0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new L);const s=new L,a=new Le,o=new Le;function l(u,h){let d=0,p=0,g=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let v=0,x=0,m=0,f=0,b=0,y=0,_=0,E=0;u.sort(V0);const C=h!==!0?Math.PI:1;for(let O=0,k=u.length;O<k;O++){const R=u[O],M=R.color,w=R.intensity,F=R.distance,N=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=M.r*w*C,p+=M.g*w*C,g+=M.b*w*C;else if(R.isLightProbe)for(let P=0;P<9;P++)i.probe[P].addScaledVector(R.sh.coefficients[P],w);else if(R.isDirectionalLight){const P=t.get(R);if(P.color.copy(R.color).multiplyScalar(R.intensity*C),R.castShadow){const z=R.shadow,$=n.get(R);$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,i.directionalShadow[v]=$,i.directionalShadowMap[v]=N,i.directionalShadowMatrix[v]=R.shadow.matrix,y++}i.directional[v]=P,v++}else if(R.isSpotLight){const P=t.get(R);if(P.position.setFromMatrixPosition(R.matrixWorld),P.color.copy(M).multiplyScalar(w*C),P.distance=F,P.coneCos=Math.cos(R.angle),P.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),P.decay=R.decay,R.castShadow){const z=R.shadow,$=n.get(R);$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,i.spotShadow[m]=$,i.spotShadowMap[m]=N,i.spotShadowMatrix[m]=R.shadow.matrix,E++}i.spot[m]=P,m++}else if(R.isRectAreaLight){const P=t.get(R);P.color.copy(M).multiplyScalar(w),P.halfWidth.set(R.width*.5,0,0),P.halfHeight.set(0,R.height*.5,0),i.rectArea[f]=P,f++}else if(R.isPointLight){const P=t.get(R);if(P.color.copy(R.color).multiplyScalar(R.intensity*C),P.distance=R.distance,P.decay=R.decay,R.castShadow){const z=R.shadow,$=n.get(R);$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,$.shadowCameraNear=z.camera.near,$.shadowCameraFar=z.camera.far,i.pointShadow[x]=$,i.pointShadowMap[x]=N,i.pointShadowMatrix[x]=R.shadow.matrix,_++}i.point[x]=P,x++}else if(R.isHemisphereLight){const P=t.get(R);P.skyColor.copy(R.color).multiplyScalar(w*C),P.groundColor.copy(R.groundColor).multiplyScalar(w*C),i.hemi[b]=P,b++}}f>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;const D=i.hash;(D.directionalLength!==v||D.pointLength!==x||D.spotLength!==m||D.rectAreaLength!==f||D.hemiLength!==b||D.numDirectionalShadows!==y||D.numPointShadows!==_||D.numSpotShadows!==E)&&(i.directional.length=v,i.spot.length=m,i.rectArea.length=f,i.point.length=x,i.hemi.length=b,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=_,i.spotShadowMatrix.length=E,D.directionalLength=v,D.pointLength=x,D.spotLength=m,D.rectAreaLength=f,D.hemiLength=b,D.numDirectionalShadows=y,D.numPointShadows=_,D.numSpotShadows=E,i.version=U0++)}function c(u,h){let d=0,p=0,g=0,v=0,x=0;const m=h.matrixWorldInverse;for(let f=0,b=u.length;f<b;f++){const y=u[f];if(y.isDirectionalLight){const _=i.directional[d];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(y.isSpotLight){const _=i.spot[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),g++}else if(y.isRectAreaLight){const _=i.rectArea[v];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),a.copy(y.matrixWorld),a.premultiply(m),o.extractRotation(a),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const _=i.point[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),p++}else if(y.isHemisphereLight){const _=i.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),_.direction.normalize(),x++}}}return{setup:l,setupView:c,state:i}}function Sc(r,e){const t=new H0(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function G0(r,e){let t=new WeakMap;function n(s,a=0){let o;return t.has(s)===!1?(o=new Sc(r,e),t.set(s,[o])):a>=t.get(s).length?(o=new Sc(r,e),t.get(s).push(o)):o=t.get(s)[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class nh extends It{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=hp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}nh.prototype.isMeshDepthMaterial=!0;class ih extends It{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}ih.prototype.isMeshDistanceMaterial=!0;const W0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rh(r,e,t){let n=new ua;const i=new se,s=new se,a=new it,o=new nh({depthPacking:dp}),l=new ih,c={},u=t.maxTextureSize,h={0:pt,1:kr,2:Yi},d=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:W0,fragmentShader:q0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new lt;g.setAttribute("position",new vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new kt(g,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Iu,this.render=function(y,_,E){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||y.length===0)return;const C=r.getRenderTarget(),D=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),k=r.state;k.setBlending(Jn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);for(let R=0,M=y.length;R<M;R++){const w=y[R],F=w.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",w,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const N=F.getFrameExtents();if(i.multiply(N),s.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/N.x),i.x=s.x*N.x,F.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/N.y),i.y=s.y*N.y,F.mapSize.y=s.y)),F.map===null&&!F.isPointLightShadow&&this.type===wr){const z={minFilter:Nt,magFilter:Nt,format:Mt};F.map=new Qt(i.x,i.y,z),F.map.texture.name=w.name+".shadowMap",F.mapPass=new Qt(i.x,i.y,z),F.camera.updateProjectionMatrix()}if(F.map===null){const z={minFilter:mt,magFilter:mt,format:Mt};F.map=new Qt(i.x,i.y,z),F.map.texture.name=w.name+".shadowMap",F.camera.updateProjectionMatrix()}r.setRenderTarget(F.map),r.clear();const P=F.getViewportCount();for(let z=0;z<P;z++){const $=F.getViewport(z);a.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),k.viewport(a),F.updateMatrices(w,z),n=F.getFrustum(),b(_,E,F.camera,w,this.type)}!F.isPointLightShadow&&this.type===wr&&m(F,E),F.needsUpdate=!1}x.needsUpdate=!1,r.setRenderTarget(C,D,O)};function m(y,_){const E=e.update(v);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(_,null,E,d,v,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(_,null,E,p,v,null)}function f(y,_,E,C,D,O,k){let R=null;const M=C.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(M!==void 0?R=M:R=C.isPointLight===!0?l:o,r.localClippingEnabled&&E.clipShadows===!0&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0){const w=R.uuid,F=E.uuid;let N=c[w];N===void 0&&(N={},c[w]=N);let P=N[F];P===void 0&&(P=R.clone(),N[F]=P),R=P}return R.visible=E.visible,R.wireframe=E.wireframe,k===wr?R.side=E.shadowSide!==null?E.shadowSide:E.side:R.side=E.shadowSide!==null?E.shadowSide:h[E.side],R.alphaMap=E.alphaMap,R.alphaTest=E.alphaTest,R.clipShadows=E.clipShadows,R.clippingPlanes=E.clippingPlanes,R.clipIntersection=E.clipIntersection,R.displacementMap=E.displacementMap,R.displacementScale=E.displacementScale,R.displacementBias=E.displacementBias,R.wireframeLinewidth=E.wireframeLinewidth,R.linewidth=E.linewidth,C.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(C.matrixWorld),R.nearDistance=D,R.farDistance=O),R}function b(y,_,E,C,D){if(y.visible===!1)return;if(y.layers.test(_.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&D===wr)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,y.matrixWorld);const R=e.update(y),M=y.material;if(Array.isArray(M)){const w=R.groups;for(let F=0,N=w.length;F<N;F++){const P=w[F],z=M[P.materialIndex];if(z&&z.visible){const $=f(y,R,z,C,E.near,E.far,D);r.renderBufferDirect(E,null,R,$,y,P)}}}else if(M.visible){const w=f(y,R,M,C,E.near,E.far,D);r.renderBufferDirect(E,null,R,w,y,null)}}const k=y.children;for(let R=0,M=k.length;R<M;R++)b(k[R],_,E,C,D)}}function j0(r,e,t){const n=t.isWebGL2;function i(){let I=!1;const fe=new it;let de=null;const ze=new it(0,0,0,0);return{setMask:function(Se){de!==Se&&!I&&(r.colorMask(Se,Se,Se,Se),de=Se)},setLocked:function(Se){I=Se},setClear:function(Se,Ge,xe,Ve,rt){rt===!0&&(Se*=Ve,Ge*=Ve,xe*=Ve),fe.set(Se,Ge,xe,Ve),ze.equals(fe)===!1&&(r.clearColor(Se,Ge,xe,Ve),ze.copy(fe))},reset:function(){I=!1,de=null,ze.set(-1,0,0,0)}}}function s(){let I=!1,fe=null,de=null,ze=null;return{setTest:function(Se){Se?ie(2929):ce(2929)},setMask:function(Se){fe!==Se&&!I&&(r.depthMask(Se),fe=Se)},setFunc:function(Se){if(de!==Se){if(Se)switch(Se){case ef:r.depthFunc(512);break;case tf:r.depthFunc(519);break;case nf:r.depthFunc(513);break;case go:r.depthFunc(515);break;case rf:r.depthFunc(514);break;case sf:r.depthFunc(518);break;case af:r.depthFunc(516);break;case of:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);de=Se}},setLocked:function(Se){I=Se},setClear:function(Se){ze!==Se&&(r.clearDepth(Se),ze=Se)},reset:function(){I=!1,fe=null,de=null,ze=null}}}function a(){let I=!1,fe=null,de=null,ze=null,Se=null,Ge=null,xe=null,Ve=null,rt=null;return{setTest:function(tt){I||(tt?ie(2960):ce(2960))},setMask:function(tt){fe!==tt&&!I&&(r.stencilMask(tt),fe=tt)},setFunc:function(tt,un,hn){(de!==tt||ze!==un||Se!==hn)&&(r.stencilFunc(tt,un,hn),de=tt,ze=un,Se=hn)},setOp:function(tt,un,hn){(Ge!==tt||xe!==un||Ve!==hn)&&(r.stencilOp(tt,un,hn),Ge=tt,xe=un,Ve=hn)},setLocked:function(tt){I=tt},setClear:function(tt){rt!==tt&&(r.clearStencil(tt),rt=tt)},reset:function(){I=!1,fe=null,de=null,ze=null,Se=null,Ge=null,xe=null,Ve=null,rt=null}}}const o=new i,l=new s,c=new a;let u={},h={},d=null,p=!1,g=null,v=null,x=null,m=null,f=null,b=null,y=null,_=!1,E=null,C=null,D=null,O=null,k=null;const R=r.getParameter(35661);let M=!1,w=0;const F=r.getParameter(7938);F.indexOf("WebGL")!==-1?(w=parseFloat(/^WebGL (\d)/.exec(F)[1]),M=w>=1):F.indexOf("OpenGL ES")!==-1&&(w=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),M=w>=2);let N=null,P={};const z=r.getParameter(3088),$=r.getParameter(2978),ne=new it().fromArray(z),V=new it().fromArray($);function q(I,fe,de){const ze=new Uint8Array(4),Se=r.createTexture();r.bindTexture(I,Se),r.texParameteri(I,10241,9728),r.texParameteri(I,10240,9728);for(let Ge=0;Ge<de;Ge++)r.texImage2D(fe+Ge,0,6408,1,1,0,6408,5121,ze);return Se}const Q={};Q[3553]=q(3553,3553,1),Q[34067]=q(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ie(2929),l.setFunc(go),He(!1),j(El),ie(2884),ue(Jn);function ie(I){u[I]!==!0&&(r.enable(I),u[I]=!0)}function ce(I){u[I]!==!1&&(r.disable(I),u[I]=!1)}function Ae(I,fe){return h[I]!==fe?(r.bindFramebuffer(I,fe),h[I]=fe,n&&(I===36009&&(h[36160]=fe),I===36160&&(h[36009]=fe)),!0):!1}function W(I){return d!==I?(r.useProgram(I),d=I,!0):!1}const re={[Vi]:32774,[Gd]:32778,[Wd]:32779};if(n)re[Rl]=32775,re[Pl]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(re[Rl]=I.MIN_EXT,re[Pl]=I.MAX_EXT)}const _e={[qd]:0,[jd]:1,[Xd]:768,[Fu]:770,[Kd]:776,[$d]:774,[Zd]:772,[Yd]:769,[zu]:771,[Qd]:775,[Jd]:773};function ue(I,fe,de,ze,Se,Ge,xe,Ve){if(I===Jn){p===!0&&(ce(3042),p=!1);return}if(p===!1&&(ie(3042),p=!0),I!==Hd){if(I!==g||Ve!==_){if((v!==Vi||f!==Vi)&&(r.blendEquation(32774),v=Vi,f=Vi),Ve)switch(I){case Pr:r.blendFuncSeparate(1,771,1,771);break;case Al:r.blendFunc(1,1);break;case Cl:r.blendFuncSeparate(0,0,769,771);break;case Ll:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Pr:r.blendFuncSeparate(770,771,1,771);break;case Al:r.blendFunc(770,1);break;case Cl:r.blendFunc(0,769);break;case Ll:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}x=null,m=null,b=null,y=null,g=I,_=Ve}return}Se=Se||fe,Ge=Ge||de,xe=xe||ze,(fe!==v||Se!==f)&&(r.blendEquationSeparate(re[fe],re[Se]),v=fe,f=Se),(de!==x||ze!==m||Ge!==b||xe!==y)&&(r.blendFuncSeparate(_e[de],_e[ze],_e[Ge],_e[xe]),x=de,m=ze,b=Ge,y=xe),g=I,_=null}function we(I,fe){I.side===Yi?ce(2884):ie(2884);let de=I.side===pt;fe&&(de=!de),He(de),I.blending===Pr&&I.transparent===!1?ue(Jn):ue(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const ze=I.stencilWrite;c.setTest(ze),ze&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),he(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ie(32926):ce(32926)}function He(I){E!==I&&(I?r.frontFace(2304):r.frontFace(2305),E=I)}function j(I){I!==Od?(ie(2884),I!==C&&(I===El?r.cullFace(1029):I===Ud?r.cullFace(1028):r.cullFace(1032))):ce(2884),C=I}function ae(I){I!==D&&(M&&r.lineWidth(I),D=I)}function he(I,fe,de){I?(ie(32823),(O!==fe||k!==de)&&(r.polygonOffset(fe,de),O=fe,k=de)):ce(32823)}function Me(I){I?ie(3089):ce(3089)}function me(I){I===void 0&&(I=33984+R-1),N!==I&&(r.activeTexture(I),N=I)}function Re(I,fe){N===null&&me();let de=P[N];de===void 0&&(de={type:void 0,texture:void 0},P[N]=de),(de.type!==I||de.texture!==fe)&&(r.bindTexture(I,fe||Q[I]),de.type=I,de.texture=fe)}function Pe(){const I=P[N];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Ue(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $e(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function A(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function T(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(I){ne.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),ne.copy(I))}function Ce(I){V.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),V.copy(I))}function pe(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},N=null,P={},h={},d=null,p=!1,g=null,v=null,x=null,m=null,f=null,b=null,y=null,_=!1,E=null,C=null,D=null,O=null,k=null,ne.set(0,0,r.canvas.width,r.canvas.height),V.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ie,disable:ce,bindFramebuffer:Ae,useProgram:W,setBlending:ue,setMaterial:we,setFlipSided:He,setCullFace:j,setLineWidth:ae,setPolygonOffset:he,setScissorTest:Me,activeTexture:me,bindTexture:Re,unbindTexture:Pe,compressedTexImage2D:Ue,texImage2D:ve,texImage3D:oe,texStorage2D:K,texStorage3D:le,texSubImage2D:$e,texSubImage3D:A,compressedTexSubImage2D:T,scissor:Ie,viewport:Ce,reset:pe}}function X0(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):void 0,g=new WeakMap;let v,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,T){return x?new OffscreenCanvas(A,T):la("canvas")}function f(A,T,K,le){let ve=1;if((A.width>le||A.height>le)&&(ve=le/Math.max(A.width,A.height)),ve<1||T===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const oe=T?gp:Math.floor,Ie=oe(ve*A.width),Ce=oe(ve*A.height);v===void 0&&(v=m(Ie,Ce));const pe=K?m(Ie,Ce):v;return pe.width=Ie,pe.height=Ce,pe.getContext("2d").drawImage(A,0,0,Ie,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Ie+"x"+Ce+")."),pe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function b(A){return ql(A.width)&&ql(A.height)}function y(A){return o?!1:A.wrapS!==jt||A.wrapT!==jt||A.minFilter!==mt&&A.minFilter!==Nt}function _(A,T){return A.generateMipmaps&&T&&A.minFilter!==mt&&A.minFilter!==Nt}function E(A){r.generateMipmap(A)}function C(A,T,K,le){if(o===!1)return T;if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ve=T;return T===6403&&(K===5126&&(ve=33326),K===5131&&(ve=33325),K===5121&&(ve=33321)),T===6407&&(K===5126&&(ve=34837),K===5131&&(ve=34843),K===5121&&(ve=32849)),T===6408&&(K===5126&&(ve=34836),K===5131&&(ve=34842),K===5121&&(ve=le===er?35907:32856)),(ve===33325||ve===33326||ve===34842||ve===34836)&&e.get("EXT_color_buffer_float"),ve}function D(A,T,K){return _(A,K)===!0||A.isFramebufferTexture&&A.minFilter!==mt&&A.minFilter!==Nt?Math.log2(Math.max(T.width,T.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?T.mipmaps.length:1}function O(A){return A===mt||A===Il||A===Dl?9728:9729}function k(A){const T=A.target;T.removeEventListener("dispose",k),M(T),T.isVideoTexture&&g.delete(T),a.memory.textures--}function R(A){const T=A.target;T.removeEventListener("dispose",R),w(T)}function M(A){const T=n.get(A);T.__webglInit!==void 0&&(r.deleteTexture(T.__webglTexture),n.remove(A))}function w(A){const T=A.texture,K=n.get(A),le=n.get(T);if(A){if(le.__webglTexture!==void 0&&(r.deleteTexture(le.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++)r.deleteFramebuffer(K.__webglFramebuffer[ve]),K.__webglDepthbuffer&&r.deleteRenderbuffer(K.__webglDepthbuffer[ve]);else r.deleteFramebuffer(K.__webglFramebuffer),K.__webglDepthbuffer&&r.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&r.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer&&r.deleteRenderbuffer(K.__webglColorRenderbuffer),K.__webglDepthRenderbuffer&&r.deleteRenderbuffer(K.__webglDepthRenderbuffer);if(A.isWebGLMultipleRenderTargets)for(let ve=0,oe=T.length;ve<oe;ve++){const Ie=n.get(T[ve]);Ie.__webglTexture&&(r.deleteTexture(Ie.__webglTexture),a.memory.textures--),n.remove(T[ve])}n.remove(T),n.remove(A)}}let F=0;function N(){F=0}function P(){const A=F;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),F+=1,A}function z(A,T){const K=n.get(A);if(A.isVideoTexture&&me(A),A.version>0&&K.__version!==A.version){const le=A.image;if(le===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(K,A,T);return}}t.activeTexture(33984+T),t.bindTexture(3553,K.__webglTexture)}function $(A,T){const K=n.get(A);if(A.version>0&&K.__version!==A.version){Ae(K,A,T);return}t.activeTexture(33984+T),t.bindTexture(35866,K.__webglTexture)}function ne(A,T){const K=n.get(A);if(A.version>0&&K.__version!==A.version){Ae(K,A,T);return}t.activeTexture(33984+T),t.bindTexture(32879,K.__webglTexture)}function V(A,T){const K=n.get(A);if(A.version>0&&K.__version!==A.version){W(K,A,T);return}t.activeTexture(33984+T),t.bindTexture(34067,K.__webglTexture)}const q={[yo]:10497,[jt]:33071,[_o]:33648},Q={[mt]:9728,[Il]:9984,[Dl]:9986,[Nt]:9729,[mf]:9985,[oa]:9987};function ie(A,T,K){if(K?(r.texParameteri(A,10242,q[T.wrapS]),r.texParameteri(A,10243,q[T.wrapT]),(A===32879||A===35866)&&r.texParameteri(A,32882,q[T.wrapR]),r.texParameteri(A,10240,Q[T.magFilter]),r.texParameteri(A,10241,Q[T.minFilter])):(r.texParameteri(A,10242,33071),r.texParameteri(A,10243,33071),(A===32879||A===35866)&&r.texParameteri(A,32882,33071),(T.wrapS!==jt||T.wrapT!==jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(A,10240,O(T.magFilter)),r.texParameteri(A,10241,O(T.minFilter)),T.minFilter!==mt&&T.minFilter!==Nt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const le=e.get("EXT_texture_filter_anisotropic");if(T.type===Yn&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===vi&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(r.texParameterf(A,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function ce(A,T){A.__webglInit===void 0&&(A.__webglInit=!0,T.addEventListener("dispose",k),A.__webglTexture=r.createTexture(),a.memory.textures++)}function Ae(A,T,K){let le=3553;T.isDataTexture2DArray&&(le=35866),T.isDataTexture3D&&(le=32879),ce(A,T),t.activeTexture(33984+K),t.bindTexture(le,A.__webglTexture),r.pixelStorei(37440,T.flipY),r.pixelStorei(37441,T.premultiplyAlpha),r.pixelStorei(3317,T.unpackAlignment),r.pixelStorei(37443,0);const ve=y(T)&&b(T.image)===!1,oe=f(T.image,ve,!1,u),Ie=b(oe)||o,Ce=s.convert(T.format);let pe=s.convert(T.type),I=C(T.internalFormat,Ce,pe,T.encoding);ie(le,T,Ie);let fe;const de=T.mipmaps,ze=o&&T.isVideoTexture!==!0,Se=A.__version===void 0,Ge=D(T,oe,Ie);if(T.isDepthTexture)I=6402,o?T.type===Yn?I=36012:T.type===Os?I=33190:T.type===qi?I=35056:I=33189:T.type===Yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===yi&&I===6402&&T.type!==Br&&T.type!==Os&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Br,pe=s.convert(T.type)),T.format===Zi&&I===6402&&(I=34041,T.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=qi,pe=s.convert(T.type))),ze&&Se?t.texStorage2D(3553,1,I,oe.width,oe.height):t.texImage2D(3553,0,I,oe.width,oe.height,0,Ce,pe,null);else if(T.isDataTexture)if(de.length>0&&Ie){ze&&Se&&t.texStorage2D(3553,Ge,I,de[0].width,de[0].height);for(let xe=0,Ve=de.length;xe<Ve;xe++)fe=de[xe],ze?t.texSubImage2D(3553,0,0,0,fe.width,fe.height,Ce,pe,fe.data):t.texImage2D(3553,xe,I,fe.width,fe.height,0,Ce,pe,fe.data);T.generateMipmaps=!1}else ze?(Se&&t.texStorage2D(3553,Ge,I,oe.width,oe.height),t.texSubImage2D(3553,0,0,0,oe.width,oe.height,Ce,pe,oe.data)):t.texImage2D(3553,0,I,oe.width,oe.height,0,Ce,pe,oe.data);else if(T.isCompressedTexture){ze&&Se&&t.texStorage2D(3553,Ge,I,de[0].width,de[0].height);for(let xe=0,Ve=de.length;xe<Ve;xe++)fe=de[xe],T.format!==Mt&&T.format!==xi?Ce!==null?ze?t.compressedTexSubImage2D(3553,xe,0,0,fe.width,fe.height,Ce,fe.data):t.compressedTexImage2D(3553,xe,I,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage2D(3553,xe,0,0,fe.width,fe.height,Ce,pe,fe.data):t.texImage2D(3553,xe,I,fe.width,fe.height,0,Ce,pe,fe.data)}else if(T.isDataTexture2DArray)ze?(Se&&t.texStorage3D(35866,Ge,I,oe.width,oe.height,oe.depth),t.texSubImage3D(35866,0,0,0,0,oe.width,oe.height,oe.depth,Ce,pe,oe.data)):t.texImage3D(35866,0,I,oe.width,oe.height,oe.depth,0,Ce,pe,oe.data);else if(T.isDataTexture3D)ze?(Se&&t.texStorage3D(32879,Ge,I,oe.width,oe.height,oe.depth),t.texSubImage3D(32879,0,0,0,0,oe.width,oe.height,oe.depth,Ce,pe,oe.data)):t.texImage3D(32879,0,I,oe.width,oe.height,oe.depth,0,Ce,pe,oe.data);else if(T.isFramebufferTexture)ze&&Se?t.texStorage2D(3553,Ge,I,oe.width,oe.height):t.texImage2D(3553,0,I,oe.width,oe.height,0,Ce,pe,null);else if(de.length>0&&Ie){ze&&Se&&t.texStorage2D(3553,Ge,I,de[0].width,de[0].height);for(let xe=0,Ve=de.length;xe<Ve;xe++)fe=de[xe],ze?t.texSubImage2D(3553,xe,0,0,Ce,pe,fe):t.texImage2D(3553,xe,I,Ce,pe,fe);T.generateMipmaps=!1}else ze?(Se&&t.texStorage2D(3553,Ge,I,oe.width,oe.height),t.texSubImage2D(3553,0,0,0,Ce,pe,oe)):t.texImage2D(3553,0,I,Ce,pe,oe);_(T,Ie)&&E(le),A.__version=T.version,T.onUpdate&&T.onUpdate(T)}function W(A,T,K){if(T.image.length!==6)return;ce(A,T),t.activeTexture(33984+K),t.bindTexture(34067,A.__webglTexture),r.pixelStorei(37440,T.flipY),r.pixelStorei(37441,T.premultiplyAlpha),r.pixelStorei(3317,T.unpackAlignment),r.pixelStorei(37443,0);const le=T&&(T.isCompressedTexture||T.image[0].isCompressedTexture),ve=T.image[0]&&T.image[0].isDataTexture,oe=[];for(let xe=0;xe<6;xe++)!le&&!ve?oe[xe]=f(T.image[xe],!1,!0,c):oe[xe]=ve?T.image[xe].image:T.image[xe];const Ie=oe[0],Ce=b(Ie)||o,pe=s.convert(T.format),I=s.convert(T.type),fe=C(T.internalFormat,pe,I,T.encoding),de=o&&T.isVideoTexture!==!0,ze=A.__version===void 0;let Se=D(T,Ie,Ce);ie(34067,T,Ce);let Ge;if(le){de&&ze&&t.texStorage2D(34067,Se,fe,Ie.width,Ie.height);for(let xe=0;xe<6;xe++){Ge=oe[xe].mipmaps;for(let Ve=0;Ve<Ge.length;Ve++){const rt=Ge[Ve];T.format!==Mt&&T.format!==xi?pe!==null?de?t.compressedTexSubImage2D(34069+xe,Ve,0,0,rt.width,rt.height,pe,rt.data):t.compressedTexImage2D(34069+xe,Ve,fe,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):de?t.texSubImage2D(34069+xe,Ve,0,0,rt.width,rt.height,pe,I,rt.data):t.texImage2D(34069+xe,Ve,fe,rt.width,rt.height,0,pe,I,rt.data)}}}else{Ge=T.mipmaps,de&&ze&&(Ge.length>0&&Se++,t.texStorage2D(34067,Se,fe,oe[0].width,oe[0].height));for(let xe=0;xe<6;xe++)if(ve){de?t.texSubImage2D(34069+xe,0,0,0,oe[xe].width,oe[xe].height,pe,I,oe[xe].data):t.texImage2D(34069+xe,0,fe,oe[xe].width,oe[xe].height,0,pe,I,oe[xe].data);for(let Ve=0;Ve<Ge.length;Ve++){const tt=Ge[Ve].image[xe].image;de?t.texSubImage2D(34069+xe,Ve+1,0,0,tt.width,tt.height,pe,I,tt.data):t.texImage2D(34069+xe,Ve+1,fe,tt.width,tt.height,0,pe,I,tt.data)}}else{de?t.texSubImage2D(34069+xe,0,0,0,pe,I,oe[xe]):t.texImage2D(34069+xe,0,fe,pe,I,oe[xe]);for(let Ve=0;Ve<Ge.length;Ve++){const rt=Ge[Ve];de?t.texSubImage2D(34069+xe,Ve+1,0,0,pe,I,rt.image[xe]):t.texImage2D(34069+xe,Ve+1,fe,pe,I,rt.image[xe])}}}_(T,Ce)&&E(34067),A.__version=T.version,T.onUpdate&&T.onUpdate(T)}function re(A,T,K,le,ve){const oe=s.convert(K.format),Ie=s.convert(K.type),Ce=C(K.internalFormat,oe,Ie,K.encoding);n.get(T).__hasExternalTextures||(ve===32879||ve===35866?t.texImage3D(ve,0,Ce,T.width,T.height,T.depth,0,oe,Ie,null):t.texImage2D(ve,0,Ce,T.width,T.height,0,oe,Ie,null)),t.bindFramebuffer(36160,A),T.useRenderToTexture?p.framebufferTexture2DMultisampleEXT(36160,le,ve,n.get(K).__webglTexture,0,Me(T)):r.framebufferTexture2D(36160,le,ve,n.get(K).__webglTexture,0),t.bindFramebuffer(36160,null)}function _e(A,T,K){if(r.bindRenderbuffer(36161,A),T.depthBuffer&&!T.stencilBuffer){let le=33189;if(K||T.useRenderToTexture){const ve=T.depthTexture;ve&&ve.isDepthTexture&&(ve.type===Yn?le=36012:ve.type===Os&&(le=33190));const oe=Me(T);T.useRenderToTexture?p.renderbufferStorageMultisampleEXT(36161,oe,le,T.width,T.height):r.renderbufferStorageMultisample(36161,oe,le,T.width,T.height)}else r.renderbufferStorage(36161,le,T.width,T.height);r.framebufferRenderbuffer(36160,36096,36161,A)}else if(T.depthBuffer&&T.stencilBuffer){const le=Me(T);K&&T.useRenderbuffer?r.renderbufferStorageMultisample(36161,le,35056,T.width,T.height):T.useRenderToTexture?p.renderbufferStorageMultisampleEXT(36161,le,35056,T.width,T.height):r.renderbufferStorage(36161,34041,T.width,T.height),r.framebufferRenderbuffer(36160,33306,36161,A)}else{const le=T.isWebGLMultipleRenderTargets===!0?T.texture[0]:T.texture,ve=s.convert(le.format),oe=s.convert(le.type),Ie=C(le.internalFormat,ve,oe,le.encoding),Ce=Me(T);K&&T.useRenderbuffer?r.renderbufferStorageMultisample(36161,Ce,Ie,T.width,T.height):T.useRenderToTexture?p.renderbufferStorageMultisampleEXT(36161,Ce,Ie,T.width,T.height):r.renderbufferStorage(36161,Ie,T.width,T.height)}r.bindRenderbuffer(36161,null)}function ue(A,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),z(T.depthTexture,0);const le=n.get(T.depthTexture).__webglTexture,ve=Me(T);if(T.depthTexture.format===yi)T.useRenderToTexture?p.framebufferTexture2DMultisampleEXT(36160,36096,3553,le,0,ve):r.framebufferTexture2D(36160,36096,3553,le,0);else if(T.depthTexture.format===Zi)T.useRenderToTexture?p.framebufferTexture2DMultisampleEXT(36160,33306,3553,le,0,ve):r.framebufferTexture2D(36160,33306,3553,le,0);else throw new Error("Unknown depthTexture format")}function we(A){const T=n.get(A),K=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!T.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");ue(T.__webglFramebuffer,A)}else if(K){T.__webglDepthbuffer=[];for(let le=0;le<6;le++)t.bindFramebuffer(36160,T.__webglFramebuffer[le]),T.__webglDepthbuffer[le]=r.createRenderbuffer(),_e(T.__webglDepthbuffer[le],A,!1)}else t.bindFramebuffer(36160,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),_e(T.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function He(A,T,K){const le=n.get(A);T!==void 0&&re(le.__webglFramebuffer,A,A.texture,36064,3553),K!==void 0&&we(A)}function j(A){const T=A.texture,K=n.get(A),le=n.get(T);A.addEventListener("dispose",R),A.isWebGLMultipleRenderTargets!==!0&&(le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture()),le.__version=T.version,a.memory.textures++);const ve=A.isWebGLCubeRenderTarget===!0,oe=A.isWebGLMultipleRenderTargets===!0,Ie=T.isDataTexture3D||T.isDataTexture2DArray,Ce=b(A)||o;if(o&&T.format===xi&&(T.type===Yn||T.type===vi)&&(T.format=Mt,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),ve){K.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)K.__webglFramebuffer[pe]=r.createFramebuffer()}else if(K.__webglFramebuffer=r.createFramebuffer(),oe)if(i.drawBuffers){const pe=A.texture;for(let I=0,fe=pe.length;I<fe;I++){const de=n.get(pe[I]);de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(A.useRenderbuffer)if(o){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=r.createRenderbuffer(),r.bindRenderbuffer(36161,K.__webglColorRenderbuffer);const pe=s.convert(T.format),I=s.convert(T.type),fe=C(T.internalFormat,pe,I,T.encoding),de=Me(A);r.renderbufferStorageMultisample(36161,de,fe,A.width,A.height),t.bindFramebuffer(36160,K.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064,36161,K.__webglColorRenderbuffer),r.bindRenderbuffer(36161,null),A.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),_e(K.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(ve){t.bindTexture(34067,le.__webglTexture),ie(34067,T,Ce);for(let pe=0;pe<6;pe++)re(K.__webglFramebuffer[pe],A,T,36064,34069+pe);_(T,Ce)&&E(34067),t.unbindTexture()}else if(oe){const pe=A.texture;for(let I=0,fe=pe.length;I<fe;I++){const de=pe[I],ze=n.get(de);t.bindTexture(3553,ze.__webglTexture),ie(3553,de,Ce),re(K.__webglFramebuffer,A,de,36064+I,3553),_(de,Ce)&&E(3553)}t.unbindTexture()}else{let pe=3553;Ie&&(o?pe=T.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(pe,le.__webglTexture),ie(pe,T,Ce),re(K.__webglFramebuffer,A,T,36064,pe),_(T,Ce)&&E(pe),t.unbindTexture()}A.depthBuffer&&we(A)}function ae(A){const T=b(A)||o,K=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let le=0,ve=K.length;le<ve;le++){const oe=K[le];if(_(oe,T)){const Ie=A.isWebGLCubeRenderTarget?34067:3553,Ce=n.get(oe).__webglTexture;t.bindTexture(Ie,Ce),E(Ie),t.unbindTexture()}}}function he(A){if(A.useRenderbuffer)if(o){const T=A.width,K=A.height;let le=16384;const ve=[36064],oe=A.stencilBuffer?33306:36096;A.depthBuffer&&ve.push(oe),A.ignoreDepthForMultisampleCopy||(A.depthBuffer&&(le|=256),A.stencilBuffer&&(le|=1024));const Ie=n.get(A);t.bindFramebuffer(36008,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,Ie.__webglFramebuffer),A.ignoreDepthForMultisampleCopy&&(r.invalidateFramebuffer(36008,[oe]),r.invalidateFramebuffer(36009,[oe])),r.blitFramebuffer(0,0,T,K,0,0,T,K,le,9728),r.invalidateFramebuffer(36008,ve),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,Ie.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Me(A){return o&&(A.useRenderbuffer||A.useRenderToTexture)?Math.min(h,A.samples):0}function me(A){const T=a.render.frame;g.get(A)!==T&&(g.set(A,T),A.update())}let Re=!1,Pe=!1;function Ue(A,T){A&&A.isWebGLRenderTarget&&(Re===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),Re=!0),A=A.texture),z(A,T)}function $e(A,T){A&&A.isWebGLCubeRenderTarget&&(Pe===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),Pe=!0),A=A.texture),V(A,T)}this.allocateTextureUnit=P,this.resetTextureUnits=N,this.setTexture2D=z,this.setTexture2DArray=$,this.setTexture3D=ne,this.setTextureCube=V,this.rebindTextures=He,this.setupRenderTarget=j,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=re,this.safeSetTexture2D=Ue,this.safeSetTextureCube=$e}function Y0(r,e,t){const n=t.isWebGL2;function i(s){let a;if(s===zn)return 5121;if(s===yf)return 32819;if(s===_f)return 32820;if(s===bf)return 33635;if(s===gf)return 5120;if(s===vf)return 5122;if(s===Br)return 5123;if(s===xf)return 5124;if(s===Os)return 5125;if(s===Yn)return 5126;if(s===vi)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Mf)return 6406;if(s===xi)return 6407;if(s===Mt)return 6408;if(s===wf)return 6409;if(s===Sf)return 6410;if(s===yi)return 6402;if(s===Zi)return 34041;if(s===Tf)return 6403;if(s===Ef)return 36244;if(s===Af)return 33319;if(s===Cf)return 33320;if(s===Lf)return 36248;if(s===Rf)return 36249;if(s===Fl||s===zl||s===Nl||s===kl)if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Fl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===zl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Nl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===kl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Bl||s===Ol||s===Ul||s===Vl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Bl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ol)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ul)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Vl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Pf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===Hl||s===Gl)&&(a=e.get("WEBGL_compressed_texture_etc"),a!==null)){if(s===Hl)return a.COMPRESSED_RGB8_ETC2;if(s===Gl)return a.COMPRESSED_RGBA8_ETC2_EAC}if(s===If||s===Df||s===Ff||s===zf||s===Nf||s===kf||s===Bf||s===Of||s===Uf||s===Vf||s===Hf||s===Gf||s===Wf||s===qf||s===Xf||s===Yf||s===Zf||s===Jf||s===$f||s===Qf||s===Kf||s===ep||s===tp||s===np||s===ip||s===rp||s===sp||s===ap)return a=e.get("WEBGL_compressed_texture_astc"),a!==null?s:null;if(s===jf)return a=e.get("EXT_texture_compression_bptc"),a!==null?s:null;if(s===qi)return n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class sh extends zt{constructor(e=[]){super(),this.cameras=e}}sh.prototype.isArrayCamera=!0;class Tr extends Ke{constructor(){super(),this.type="Group"}}Tr.prototype.isGroup=!0;const Z0={type:"move"};class $a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Z0))),c&&e.hand){a=!0;for(const v of e.hand.values()){const x=t.getJointPose(v,n);if(c.joints[v.jointName]===void 0){const f=new Tr;f.matrixAutoUpdate=!1,f.visible=!1,c.joints[v.jointName]=f,c.add(f)}const m=c.joints[v.jointName];x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=x.radius),m.visible=x!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class wo extends St{constructor(e,t,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:yi,u!==yi&&u!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===yi&&(n=Br),n===void 0&&u===Zi&&(n=qi),super(null,i,s,a,o,l,u,n,c),this.image={width:e,height:t},this.magFilter=o!==void 0?o:mt,this.minFilter=l!==void 0?l:mt,this.flipY=!1,this.generateMipmaps=!1}}wo.prototype.isDepthTexture=!0;class J0 extends _i{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor";const l=e.extensions.has("WEBGL_multisampled_render_to_texture");let c=null,u=null,h=null,d=null,p=!1,g=null;const v=t.getContextAttributes();let x=null,m=null;const f=[],b=new Map,y=new zt;y.layers.enable(1),y.viewport=new it;const _=new zt;_.layers.enable(2),_.viewport=new it;const E=[y,_],C=new sh;C.layers.enable(1),C.layers.enable(2);let D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let q=f[V];return q===void 0&&(q=new $a,f[V]=q),q.getTargetRaySpace()},this.getControllerGrip=function(V){let q=f[V];return q===void 0&&(q=new $a,f[V]=q),q.getGripSpace()},this.getHand=function(V){let q=f[V];return q===void 0&&(q=new $a,f[V]=q),q.getHandSpace()};function k(V){const q=b.get(V.inputSource);q&&q.dispatchEvent({type:V.type,data:V.inputSource})}function R(){b.forEach(function(V,q){V.disconnect(q)}),b.clear(),D=null,O=null,e.setRenderTarget(x),d=null,h=null,u=null,i=null,m=null,ne.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",R),i.addEventListener("inputsourceschange",M),v.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,q),i.updateRenderState({baseLayer:d}),m=new Qt(d.framebufferWidth,d.framebufferHeight,{format:Mt,type:zn,encoding:e.outputEncoding})}else{p=v.antialias;let q=null,Q=null,ie=null;v.depth&&(ie=v.stencil?35056:33190,q=v.stencil?Zi:yi,Q=v.stencil?qi:Br);const ce={colorFormat:v.alpha||p?32856:32849,depthFormat:ie,scaleFactor:s};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(ce),i.updateRenderState({layers:[h]}),p?m=new qo(h.textureWidth,h.textureHeight,{format:Mt,type:zn,depthTexture:new wo(h.textureWidth,h.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:v.stencil,ignoreDepth:h.ignoreDepthValues,useRenderToTexture:l,encoding:e.outputEncoding}):m=new Qt(h.textureWidth,h.textureHeight,{format:v.alpha?Mt:xi,type:zn,depthTexture:new wo(h.textureWidth,h.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:v.stencil,ignoreDepth:h.ignoreDepthValues,encoding:e.outputEncoding})}this.setFoveation(1),a=await i.requestReferenceSpace(o),ne.setContext(i),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function M(V){const q=i.inputSources;for(let Q=0;Q<f.length;Q++)b.set(q[Q],f[Q]);for(let Q=0;Q<V.removed.length;Q++){const ie=V.removed[Q],ce=b.get(ie);ce&&(ce.dispatchEvent({type:"disconnected",data:ie}),b.delete(ie))}for(let Q=0;Q<V.added.length;Q++){const ie=V.added[Q],ce=b.get(ie);ce&&ce.dispatchEvent({type:"connected",data:ie})}}const w=new L,F=new L;function N(V,q,Q){w.setFromMatrixPosition(q.matrixWorld),F.setFromMatrixPosition(Q.matrixWorld);const ie=w.distanceTo(F),ce=q.projectionMatrix.elements,Ae=Q.projectionMatrix.elements,W=ce[14]/(ce[10]-1),re=ce[14]/(ce[10]+1),_e=(ce[9]+1)/ce[5],ue=(ce[9]-1)/ce[5],we=(ce[8]-1)/ce[0],He=(Ae[8]+1)/Ae[0],j=W*we,ae=W*He,he=ie/(-we+He),Me=he*-we;q.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Me),V.translateZ(he),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const me=W+he,Re=re+he,Pe=j-Me,Ue=ae+(ie-Me),$e=_e*re/Re*me,A=ue*re/Re*me;V.projectionMatrix.makePerspective(Pe,Ue,$e,A,me,Re)}function P(V,q){q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;C.near=_.near=y.near=V.near,C.far=_.far=y.far=V.far,(D!==C.near||O!==C.far)&&(i.updateRenderState({depthNear:C.near,depthFar:C.far}),D=C.near,O=C.far);const q=V.parent,Q=C.cameras;P(C,q);for(let ce=0;ce<Q.length;ce++)P(Q[ce],q);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),V.position.copy(C.position),V.quaternion.copy(C.quaternion),V.scale.copy(C.scale),V.matrix.copy(C.matrix),V.matrixWorld.copy(C.matrixWorld);const ie=V.children;for(let ce=0,Ae=ie.length;ce<Ae;ce++)ie[ce].updateMatrixWorld(!0);Q.length===2?N(C,y,_):C.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(V){h!==null&&(h.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)};let z=null;function $(V,q){if(c=q.getViewerPose(a),g=q,c!==null){const ie=c.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let ce=!1;ie.length!==C.cameras.length&&(C.cameras.length=0,ce=!0);for(let Ae=0;Ae<ie.length;Ae++){const W=ie[Ae];let re=null;if(d!==null)re=d.getViewport(W);else{const ue=u.getViewSubImage(h,W);re=ue.viewport,Ae===0&&(e.setRenderTargetTextures(m,ue.colorTexture,h.ignoreDepthValues?void 0:ue.depthStencilTexture),e.setRenderTarget(m))}const _e=E[Ae];_e.matrix.fromArray(W.transform.matrix),_e.projectionMatrix.fromArray(W.projectionMatrix),_e.viewport.set(re.x,re.y,re.width,re.height),Ae===0&&C.matrix.copy(_e.matrix),ce===!0&&C.cameras.push(_e)}}const Q=i.inputSources;for(let ie=0;ie<f.length;ie++){const ce=f[ie],Ae=Q[ie];ce.update(Ae,q,a)}z&&z(V,q),g=null}const ne=new Wu;ne.setAnimationLoop($),this.setAnimationLoop=function(V){z=V},this.dispose=function(){}}}function $0(r){function e(m,f){m.fogColor.value.copy(f.color),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function t(m,f,b,y,_){f.isMeshBasicMaterial?n(m,f):f.isMeshLambertMaterial?(n(m,f),l(m,f)):f.isMeshToonMaterial?(n(m,f),u(m,f)):f.isMeshPhongMaterial?(n(m,f),c(m,f)):f.isMeshStandardMaterial?(n(m,f),f.isMeshPhysicalMaterial?d(m,f,_):h(m,f)):f.isMeshMatcapMaterial?(n(m,f),p(m,f)):f.isMeshDepthMaterial?(n(m,f),g(m,f)):f.isMeshDistanceMaterial?(n(m,f),v(m,f)):f.isMeshNormalMaterial?(n(m,f),x(m,f)):f.isLineBasicMaterial?(i(m,f),f.isLineDashedMaterial&&s(m,f)):f.isPointsMaterial?a(m,f,b,y):f.isSpriteMaterial?o(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function n(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.specularMap&&(m.specularMap.value=f.specularMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const b=r.get(f).envMap;b&&(m.envMap.value=b,m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity);let y;f.map?y=f.map:f.specularMap?y=f.specularMap:f.displacementMap?y=f.displacementMap:f.normalMap?y=f.normalMap:f.bumpMap?y=f.bumpMap:f.roughnessMap?y=f.roughnessMap:f.metalnessMap?y=f.metalnessMap:f.alphaMap?y=f.alphaMap:f.emissiveMap?y=f.emissiveMap:f.clearcoatMap?y=f.clearcoatMap:f.clearcoatNormalMap?y=f.clearcoatNormalMap:f.clearcoatRoughnessMap?y=f.clearcoatRoughnessMap:f.specularIntensityMap?y=f.specularIntensityMap:f.specularColorMap?y=f.specularColorMap:f.transmissionMap?y=f.transmissionMap:f.thicknessMap?y=f.thicknessMap:f.sheenColorMap?y=f.sheenColorMap:f.sheenRoughnessMap&&(y=f.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uvTransform.value.copy(y.matrix));let _;f.aoMap?_=f.aoMap:f.lightMap&&(_=f.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uv2Transform.value.copy(_.matrix))}function i(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity}function s(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function a(m,f,b,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=y*.5,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let _;f.map?_=f.map:f.alphaMap&&(_=f.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let b;f.map?b=f.map:f.alphaMap&&(b=f.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uvTransform.value.copy(b.matrix))}function l(m,f){f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap),f.bumpMap&&(m.bumpMap.value=f.bumpMap,m.bumpScale.value=f.bumpScale,f.side===pt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,m.normalScale.value.copy(f.normalScale),f.side===pt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap),f.bumpMap&&(m.bumpMap.value=f.bumpMap,m.bumpScale.value=f.bumpScale,f.side===pt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,m.normalScale.value.copy(f.normalScale),f.side===pt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias)}function h(m,f){m.roughness.value=f.roughness,m.metalness.value=f.metalness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap),f.bumpMap&&(m.bumpMap.value=f.bumpMap,m.bumpScale.value=f.bumpScale,f.side===pt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,m.normalScale.value.copy(f.normalScale),f.side===pt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),r.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,b){h(m,f),m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),m.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===pt&&m.clearcoatNormalScale.value.negate())),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap)}function p(m,f){f.matcap&&(m.matcap.value=f.matcap),f.bumpMap&&(m.bumpMap.value=f.bumpMap,m.bumpScale.value=f.bumpScale,f.side===pt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,m.normalScale.value.copy(f.normalScale),f.side===pt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias)}function g(m,f){f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias)}function v(m,f){f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),m.referencePosition.value.copy(f.referencePosition),m.nearDistance.value=f.nearDistance,m.farDistance.value=f.farDistance}function x(m,f){f.bumpMap&&(m.bumpMap.value=f.bumpMap,m.bumpScale.value=f.bumpScale,f.side===pt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,m.normalScale.value.copy(f.normalScale),f.side===pt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function Q0(){const r=la("canvas");return r.style.display="block",r}function et(r={}){const e=r.canvas!==void 0?r.canvas:Q0(),t=r.context!==void 0?r.context:null,n=r.alpha!==void 0?r.alpha:!1,i=r.depth!==void 0?r.depth:!0,s=r.stencil!==void 0?r.stencil:!0,a=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,l=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",u=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let h=null,d=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ln,this.physicallyCorrectLights=!1,this.toneMapping=$n,this.toneMappingExposure=1;const v=this;let x=!1,m=0,f=0,b=null,y=-1,_=null;const E=new it,C=new it;let D=null,O=e.width,k=e.height,R=1,M=null,w=null;const F=new it(0,0,O,k),N=new it(0,0,O,k);let P=!1;const z=[],$=new ua;let ne=!1,V=!1,q=null;const Q=new Le,ie=new L,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return b===null?R:1}let W=t;function re(S,B){for(let H=0;H<S.length;H++){const U=S[H],J=e.getContext(U,B);if(J!==null)return J}return null}try{const S={alpha:n,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ho}`),e.addEventListener("webglcontextlost",ze,!1),e.addEventListener("webglcontextrestored",Se,!1),W===null){const B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),W=re(B,S),W===null)throw re(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let _e,ue,we,He,j,ae,he,Me,me,Re,Pe,Ue,$e,A,T,K,le,ve,oe,Ie,Ce,pe,I;function fe(){_e=new xv(W),ue=new hv(W,_e,r),_e.init(ue),pe=new Y0(W,_e,ue),we=new j0(W,_e,ue),z[0]=1029,He=new bv,j=new z0,ae=new X0(W,_e,we,j,ue,pe,He),he=new fv(v),Me=new vv(v),me=new zp(W,ue),I=new cv(W,_e,me,ue),Re=new yv(W,me,He,I),Pe=new Tv(W,Re,me,He),oe=new Sv(W,ue,ae),K=new dv(j),Ue=new F0(v,he,Me,_e,ue,I,K),$e=new $0(j),A=new k0,T=new G0(_e,ue),ve=new lv(v,he,we,Pe,o),le=new rh(v,Pe,ue),Ie=new uv(W,_e,He,ue),Ce=new _v(W,_e,He,ue),He.programs=Ue.programs,v.capabilities=ue,v.extensions=_e,v.properties=j,v.renderLists=A,v.shadowMap=le,v.state=we,v.info=He}fe();const de=new J0(v,W);this.xr=de,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const S=_e.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=_e.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return R},this.setPixelRatio=function(S){S!==void 0&&(R=S,this.setSize(O,k,!1))},this.getSize=function(S){return S.set(O,k)},this.setSize=function(S,B,H){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=S,k=B,e.width=Math.floor(S*R),e.height=Math.floor(B*R),H!==!1&&(e.style.width=S+"px",e.style.height=B+"px"),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(O*R,k*R).floor()},this.setDrawingBufferSize=function(S,B,H){O=S,k=B,R=H,e.width=Math.floor(S*H),e.height=Math.floor(B*H),this.setViewport(0,0,S,B)},this.getCurrentViewport=function(S){return S.copy(E)},this.getViewport=function(S){return S.copy(F)},this.setViewport=function(S,B,H,U){S.isVector4?F.set(S.x,S.y,S.z,S.w):F.set(S,B,H,U),we.viewport(E.copy(F).multiplyScalar(R).floor())},this.getScissor=function(S){return S.copy(N)},this.setScissor=function(S,B,H,U){S.isVector4?N.set(S.x,S.y,S.z,S.w):N.set(S,B,H,U),we.scissor(C.copy(N).multiplyScalar(R).floor())},this.getScissorTest=function(){return P},this.setScissorTest=function(S){we.setScissorTest(P=S)},this.setOpaqueSort=function(S){M=S},this.setTransparentSort=function(S){w=S},this.getClearColor=function(S){return S.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(S,B,H){let U=0;(S===void 0||S)&&(U|=16384),(B===void 0||B)&&(U|=256),(H===void 0||H)&&(U|=1024),W.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ze,!1),e.removeEventListener("webglcontextrestored",Se,!1),A.dispose(),T.dispose(),j.dispose(),he.dispose(),Me.dispose(),Pe.dispose(),I.dispose(),Ue.dispose(),de.dispose(),de.removeEventListener("sessionstart",un),de.removeEventListener("sessionend",hn),q&&(q.dispose(),q=null),oi.stop()};function ze(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const S=He.autoReset,B=le.enabled,H=le.autoUpdate,U=le.needsUpdate,J=le.type;fe(),He.autoReset=S,le.enabled=B,le.autoUpdate=H,le.needsUpdate=U,le.type=J}function Ge(S){const B=S.target;B.removeEventListener("dispose",Ge),xe(B)}function xe(S){Ve(S),j.remove(S)}function Ve(S){const B=j.get(S).programs;B!==void 0&&(B.forEach(function(H){Ue.releaseProgram(H)}),S.isShaderMaterial&&Ue.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,H,U,J,De){B===null&&(B=ce);const Ne=J.isMesh&&J.matrixWorld.determinant()<0,We=Nh(S,B,H,U,J);we.setMaterial(U,Ne);let Fe=H.index;const Ye=H.attributes.position;if(Fe===null){if(Ye===void 0||Ye.count===0)return}else if(Fe.count===0)return;let qe=1;U.wireframe===!0&&(Fe=Re.getWireframeAttribute(H),qe=2),I.setup(J,U,We,H,Fe);let Xe,ht=Ie;Fe!==null&&(Xe=me.get(Fe),ht=Ce,ht.setIndex(Xe));const li=Fe!==null?Fe.count:Ye.count,bi=H.drawRange.start*qe,Je=H.drawRange.count*qe,dn=De!==null?De.start*qe:0,ft=De!==null?De.count*qe:1/0,fn=Math.max(bi,dn),es=Math.min(li,bi+Je,dn+ft)-1,pn=Math.max(0,es-fn+1);if(pn!==0){if(J.isMesh)U.wireframe===!0?(we.setLineWidth(U.wireframeLinewidth*Ae()),ht.setMode(1)):ht.setMode(4);else if(J.isLine){let Sn=U.linewidth;Sn===void 0&&(Sn=1),we.setLineWidth(Sn*Ae()),J.isLineSegments?ht.setMode(1):J.isLineLoop?ht.setMode(2):ht.setMode(3)}else J.isPoints?ht.setMode(0):J.isSprite&&ht.setMode(4);if(J.isInstancedMesh)ht.renderInstances(fn,pn,J.count);else if(H.isInstancedBufferGeometry){const Sn=Math.min(H.instanceCount,H._maxInstanceCount);ht.renderInstances(fn,pn,Sn)}else ht.render(fn,pn)}},this.compile=function(S,B){d=T.get(S),d.init(),g.push(d),S.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),d.setupLights(v.physicallyCorrectLights),S.traverse(function(H){const U=H.material;if(U)if(Array.isArray(U))for(let J=0;J<U.length;J++){const De=U[J];xa(De,S,H)}else xa(U,S,H)}),g.pop(),d=null};let rt=null;function tt(S){rt&&rt(S)}function un(){oi.stop()}function hn(){oi.start()}const oi=new Wu;oi.setAnimationLoop(tt),typeof window<"u"&&oi.setContext(window),this.setAnimationLoop=function(S){rt=S,de.setAnimationLoop(S),S===null?oi.stop():oi.start()},de.addEventListener("sessionstart",un),de.addEventListener("sessionend",hn),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;S.autoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(B),B=de.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,B,b),d=T.get(S,g.length),d.init(),g.push(d),Q.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),$.setFromProjectionMatrix(Q),V=this.localClippingEnabled,ne=K.init(this.clippingPlanes,V,B),h=A.get(S,p.length),h.init(),p.push(h),hl(S,B,0,v.sortObjects),h.finish(),v.sortObjects===!0&&h.sort(M,w),ne===!0&&K.beginShadows();const H=d.state.shadowsArray;if(le.render(H,S,B),ne===!0&&K.endShadows(),this.info.autoReset===!0&&this.info.reset(),ve.render(h,S),d.setupLights(v.physicallyCorrectLights),B.isArrayCamera){const U=B.cameras;for(let J=0,De=U.length;J<De;J++){const Ne=U[J];dl(h,S,Ne,Ne.viewport)}}else dl(h,S,B);b!==null&&(ae.updateMultisampleRenderTarget(b),ae.updateRenderTargetMipmap(b)),S.isScene===!0&&S.onAfterRender(v,S,B),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1),I.resetDefaultState(),y=-1,_=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,p.pop(),p.length>0?h=p[p.length-1]:h=null};function hl(S,B,H,U){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||$.intersectsSprite(S)){U&&ie.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Q);const Ne=Pe.update(S),We=S.material;We.visible&&h.push(S,Ne,We,H,ie.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==He.render.frame&&(S.skeleton.update(),S.skeleton.frame=He.render.frame),!S.frustumCulled||$.intersectsObject(S))){U&&ie.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Q);const Ne=Pe.update(S),We=S.material;if(Array.isArray(We)){const Fe=Ne.groups;for(let Ye=0,qe=Fe.length;Ye<qe;Ye++){const Xe=Fe[Ye],ht=We[Xe.materialIndex];ht&&ht.visible&&h.push(S,Ne,ht,H,ie.z,Xe)}}else We.visible&&h.push(S,Ne,We,H,ie.z,null)}}const De=S.children;for(let Ne=0,We=De.length;Ne<We;Ne++)hl(De[Ne],B,H,U)}function dl(S,B,H,U){const J=S.opaque,De=S.transmissive,Ne=S.transparent;d.setupLightsView(H),De.length>0&&Fh(J,B,H),U&&we.viewport(E.copy(U)),J.length>0&&Kr(J,B,H),De.length>0&&Kr(De,B,H),Ne.length>0&&Kr(Ne,B,H)}function Fh(S,B,H){if(q===null){const Ne=a===!0&&ue.isWebGL2===!0?qo:Qt;q=new Ne(1024,1024,{generateMipmaps:!0,type:pe.convert(vi)!==null?vi:zn,minFilter:oa,magFilter:mt,wrapS:jt,wrapT:jt,useRenderToTexture:_e.has("WEBGL_multisampled_render_to_texture")})}const U=v.getRenderTarget();v.setRenderTarget(q),v.clear();const J=v.toneMapping;v.toneMapping=$n,Kr(S,B,H),v.toneMapping=J,ae.updateMultisampleRenderTarget(q),ae.updateRenderTargetMipmap(q),v.setRenderTarget(U)}function Kr(S,B,H){const U=B.isScene===!0?B.overrideMaterial:null;for(let J=0,De=S.length;J<De;J++){const Ne=S[J],We=Ne.object,Fe=Ne.geometry,Ye=U===null?Ne.material:U,qe=Ne.group;We.layers.test(H.layers)&&zh(We,B,H,Fe,Ye,qe)}}function zh(S,B,H,U,J,De){S.onBeforeRender(v,B,H,U,J,De),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),J.onBeforeRender(v,B,H,U,S,De),J.transparent===!0&&J.side===Yi?(J.side=pt,J.needsUpdate=!0,v.renderBufferDirect(H,B,U,J,S,De),J.side=kr,J.needsUpdate=!0,v.renderBufferDirect(H,B,U,J,S,De),J.side=Yi):v.renderBufferDirect(H,B,U,J,S,De),S.onAfterRender(v,B,H,U,J,De)}function xa(S,B,H){B.isScene!==!0&&(B=ce);const U=j.get(S),J=d.state.lights,De=d.state.shadowsArray,Ne=J.state.version,We=Ue.getParameters(S,J.state,De,B,H),Fe=Ue.getProgramCacheKey(We);let Ye=U.programs;U.environment=S.isMeshStandardMaterial?B.environment:null,U.fog=B.fog,U.envMap=(S.isMeshStandardMaterial?Me:he).get(S.envMap||U.environment),Ye===void 0&&(S.addEventListener("dispose",Ge),Ye=new Map,U.programs=Ye);let qe=Ye.get(Fe);if(qe!==void 0){if(U.currentProgram===qe&&U.lightsStateVersion===Ne)return fl(S,We),qe}else We.uniforms=Ue.getUniforms(S),S.onBuild(H,We,v),S.onBeforeCompile(We,v),qe=Ue.acquireProgram(We,Fe),Ye.set(Fe,qe),U.uniforms=We.uniforms;const Xe=U.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Xe.clippingPlanes=K.uniform),fl(S,We),U.needsLights=Bh(S),U.lightsStateVersion=Ne,U.needsLights&&(Xe.ambientLightColor.value=J.state.ambient,Xe.lightProbe.value=J.state.probe,Xe.directionalLights.value=J.state.directional,Xe.directionalLightShadows.value=J.state.directionalShadow,Xe.spotLights.value=J.state.spot,Xe.spotLightShadows.value=J.state.spotShadow,Xe.rectAreaLights.value=J.state.rectArea,Xe.ltc_1.value=J.state.rectAreaLTC1,Xe.ltc_2.value=J.state.rectAreaLTC2,Xe.pointLights.value=J.state.point,Xe.pointLightShadows.value=J.state.pointShadow,Xe.hemisphereLights.value=J.state.hemi,Xe.directionalShadowMap.value=J.state.directionalShadowMap,Xe.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Xe.spotShadowMap.value=J.state.spotShadowMap,Xe.spotShadowMatrix.value=J.state.spotShadowMatrix,Xe.pointShadowMap.value=J.state.pointShadowMap,Xe.pointShadowMatrix.value=J.state.pointShadowMatrix);const ht=qe.getUniforms(),li=Kn.seqWithValue(ht.seq,Xe);return U.currentProgram=qe,U.uniformsList=li,qe}function fl(S,B){const H=j.get(S);H.outputEncoding=B.outputEncoding,H.instancing=B.instancing,H.skinning=B.skinning,H.morphTargets=B.morphTargets,H.morphNormals=B.morphNormals,H.morphTargetsCount=B.morphTargetsCount,H.numClippingPlanes=B.numClippingPlanes,H.numIntersection=B.numClipIntersection,H.vertexAlphas=B.vertexAlphas,H.vertexTangents=B.vertexTangents,H.toneMapping=B.toneMapping}function Nh(S,B,H,U,J){B.isScene!==!0&&(B=ce),ae.resetTextureUnits();const De=B.fog,Ne=U.isMeshStandardMaterial?B.environment:null,We=b===null?v.outputEncoding:b.texture.encoding,Fe=(U.isMeshStandardMaterial?Me:he).get(U.envMap||Ne),Ye=U.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,qe=!!U.normalMap&&!!H.attributes.tangent,Xe=!!H.morphAttributes.position,ht=!!H.morphAttributes.normal,li=H.morphAttributes.position?H.morphAttributes.position.length:0,bi=U.toneMapped?v.toneMapping:$n,Je=j.get(U),dn=d.state.lights;if(ne===!0&&(V===!0||S!==_)){const en=S===_&&U.id===y;K.setState(U,S,en)}let ft=!1;U.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==dn.state.version||Je.outputEncoding!==We||J.isInstancedMesh&&Je.instancing===!1||!J.isInstancedMesh&&Je.instancing===!0||J.isSkinnedMesh&&Je.skinning===!1||!J.isSkinnedMesh&&Je.skinning===!0||Je.envMap!==Fe||U.fog&&Je.fog!==De||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==K.numPlanes||Je.numIntersection!==K.numIntersection)||Je.vertexAlphas!==Ye||Je.vertexTangents!==qe||Je.morphTargets!==Xe||Je.morphNormals!==ht||Je.toneMapping!==bi||ue.isWebGL2===!0&&Je.morphTargetsCount!==li)&&(ft=!0):(ft=!0,Je.__version=U.version);let fn=Je.currentProgram;ft===!0&&(fn=xa(U,B,J));let es=!1,pn=!1,Sn=!1;const Ct=fn.getUniforms(),ur=Je.uniforms;if(we.useProgram(fn.program)&&(es=!0,pn=!0,Sn=!0),U.id!==y&&(y=U.id,pn=!0),es||_!==S){if(Ct.setValue(W,"projectionMatrix",S.projectionMatrix),ue.logarithmicDepthBuffer&&Ct.setValue(W,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),_!==S&&(_=S,pn=!0,Sn=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const en=Ct.map.cameraPosition;en!==void 0&&en.setValue(W,ie.setFromMatrixPosition(S.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Ct.setValue(W,"isOrthographic",S.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||J.isSkinnedMesh)&&Ct.setValue(W,"viewMatrix",S.matrixWorldInverse)}if(J.isSkinnedMesh){Ct.setOptional(W,J,"bindMatrix"),Ct.setOptional(W,J,"bindMatrixInverse");const en=J.skeleton;en&&(ue.floatVertexTextures?(en.boneTexture===null&&en.computeBoneTexture(),Ct.setValue(W,"boneTexture",en.boneTexture,ae),Ct.setValue(W,"boneTextureSize",en.boneTextureSize)):Ct.setOptional(W,en,"boneMatrices"))}return H&&(H.morphAttributes.position!==void 0||H.morphAttributes.normal!==void 0)&&oe.update(J,H,U,fn),(pn||Je.receiveShadow!==J.receiveShadow)&&(Je.receiveShadow=J.receiveShadow,Ct.setValue(W,"receiveShadow",J.receiveShadow)),pn&&(Ct.setValue(W,"toneMappingExposure",v.toneMappingExposure),Je.needsLights&&kh(ur,Sn),De&&U.fog&&$e.refreshFogUniforms(ur,De),$e.refreshMaterialUniforms(ur,U,R,k,q),Kn.upload(W,Je.uniformsList,ur,ae)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Kn.upload(W,Je.uniformsList,ur,ae),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Ct.setValue(W,"center",J.center),Ct.setValue(W,"modelViewMatrix",J.modelViewMatrix),Ct.setValue(W,"normalMatrix",J.normalMatrix),Ct.setValue(W,"modelMatrix",J.matrixWorld),fn}function kh(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function Bh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return f},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(S,B,H){j.get(S.texture).__webglTexture=B,j.get(S.depthTexture).__webglTexture=H;const U=j.get(S);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=H===void 0,U.__autoAllocateDepthBuffer||S.useRenderToTexture&&(console.warn("render-to-texture extension was disabled because an external texture was provided"),S.useRenderToTexture=!1,S.useRenderbuffer=!0))},this.setRenderTargetFramebuffer=function(S,B){const H=j.get(S);H.__webglFramebuffer=B,H.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(S,B=0,H=0){b=S,m=B,f=H;let U=!0;if(S){const Fe=j.get(S);Fe.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(36160,null),U=!1):Fe.__webglFramebuffer===void 0?ae.setupRenderTarget(S):Fe.__hasExternalTextures&&ae.rebindTextures(S,j.get(S.texture).__webglTexture,j.get(S.depthTexture).__webglTexture)}let J=null,De=!1,Ne=!1;if(S){const Fe=S.texture;(Fe.isDataTexture3D||Fe.isDataTexture2DArray)&&(Ne=!0);const Ye=j.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(J=Ye[B],De=!0):S.useRenderbuffer?J=j.get(S).__webglMultisampledFramebuffer:J=Ye,E.copy(S.viewport),C.copy(S.scissor),D=S.scissorTest}else E.copy(F).multiplyScalar(R).floor(),C.copy(N).multiplyScalar(R).floor(),D=P;if(we.bindFramebuffer(36160,J)&&ue.drawBuffers&&U){let Fe=!1;if(S)if(S.isWebGLMultipleRenderTargets){const Ye=S.texture;if(z.length!==Ye.length||z[0]!==36064){for(let qe=0,Xe=Ye.length;qe<Xe;qe++)z[qe]=36064+qe;z.length=Ye.length,Fe=!0}}else(z.length!==1||z[0]!==36064)&&(z[0]=36064,z.length=1,Fe=!0);else(z.length!==1||z[0]!==1029)&&(z[0]=1029,z.length=1,Fe=!0);Fe&&(ue.isWebGL2?W.drawBuffers(z):_e.get("WEBGL_draw_buffers").drawBuffersWEBGL(z))}if(we.viewport(E),we.scissor(C),we.setScissorTest(D),De){const Fe=j.get(S.texture);W.framebufferTexture2D(36160,36064,34069+B,Fe.__webglTexture,H)}else if(Ne){const Fe=j.get(S.texture),Ye=B||0;W.framebufferTextureLayer(36160,36064,Fe.__webglTexture,H||0,Ye)}y=-1},this.readRenderTargetPixels=function(S,B,H,U,J,De,Ne){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=j.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ne!==void 0&&(We=We[Ne]),We){we.bindFramebuffer(36160,We);try{const Fe=S.texture,Ye=Fe.format,qe=Fe.type;if(Ye!==Mt&&pe.convert(Ye)!==W.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xe=qe===vi&&(_e.has("EXT_color_buffer_half_float")||ue.isWebGL2&&_e.has("EXT_color_buffer_float"));if(qe!==zn&&pe.convert(qe)!==W.getParameter(35738)&&!(qe===Yn&&(ue.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W.checkFramebufferStatus(36160)===36053?B>=0&&B<=S.width-U&&H>=0&&H<=S.height-J&&W.readPixels(B,H,U,J,pe.convert(Ye),pe.convert(qe),De):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Fe=b!==null?j.get(b).__webglFramebuffer:null;we.bindFramebuffer(36160,Fe)}}},this.copyFramebufferToTexture=function(S,B,H=0){if(B.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}const U=Math.pow(2,-H),J=Math.floor(B.image.width*U),De=Math.floor(B.image.height*U);ae.setTexture2D(B,0),W.copyTexSubImage2D(3553,H,0,0,S.x,S.y,J,De),we.unbindTexture()},this.copyTextureToTexture=function(S,B,H,U=0){const J=B.image.width,De=B.image.height,Ne=pe.convert(H.format),We=pe.convert(H.type);ae.setTexture2D(H,0),W.pixelStorei(37440,H.flipY),W.pixelStorei(37441,H.premultiplyAlpha),W.pixelStorei(3317,H.unpackAlignment),B.isDataTexture?W.texSubImage2D(3553,U,S.x,S.y,J,De,Ne,We,B.image.data):B.isCompressedTexture?W.compressedTexSubImage2D(3553,U,S.x,S.y,B.mipmaps[0].width,B.mipmaps[0].height,Ne,B.mipmaps[0].data):W.texSubImage2D(3553,U,S.x,S.y,Ne,We,B.image),U===0&&H.generateMipmaps&&W.generateMipmap(3553),we.unbindTexture()},this.copyTextureToTexture3D=function(S,B,H,U,J=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const De=S.max.x-S.min.x+1,Ne=S.max.y-S.min.y+1,We=S.max.z-S.min.z+1,Fe=pe.convert(U.format),Ye=pe.convert(U.type);let qe;if(U.isDataTexture3D)ae.setTexture3D(U,0),qe=32879;else if(U.isDataTexture2DArray)ae.setTexture2DArray(U,0),qe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(37440,U.flipY),W.pixelStorei(37441,U.premultiplyAlpha),W.pixelStorei(3317,U.unpackAlignment);const Xe=W.getParameter(3314),ht=W.getParameter(32878),li=W.getParameter(3316),bi=W.getParameter(3315),Je=W.getParameter(32877),dn=H.isCompressedTexture?H.mipmaps[0]:H.image;W.pixelStorei(3314,dn.width),W.pixelStorei(32878,dn.height),W.pixelStorei(3316,S.min.x),W.pixelStorei(3315,S.min.y),W.pixelStorei(32877,S.min.z),H.isDataTexture||H.isDataTexture3D?W.texSubImage3D(qe,J,B.x,B.y,B.z,De,Ne,We,Fe,Ye,dn.data):H.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(qe,J,B.x,B.y,B.z,De,Ne,We,Fe,dn.data)):W.texSubImage3D(qe,J,B.x,B.y,B.z,De,Ne,We,Fe,Ye,dn),W.pixelStorei(3314,Xe),W.pixelStorei(32878,ht),W.pixelStorei(3316,li),W.pixelStorei(3315,bi),W.pixelStorei(32877,Je),J===0&&U.generateMipmaps&&W.generateMipmap(qe),we.unbindTexture()},this.initTexture=function(S){ae.setTexture2D(S,0),we.unbindTexture()},this.resetState=function(){m=0,f=0,b=null,we.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}et.prototype.isWebGLRenderer=!0;class K0 extends et{}K0.prototype.isWebGL1Renderer=!0;class Ko extends Ke{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}Ko.prototype.isScene=!0;class Zr{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Or,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=_n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}Zr.prototype.isInterleavedBuffer=!0;const dt=new L;class Ur{constructor(e,t,n,i=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)dt.x=this.getX(t),dt.y=this.getY(t),dt.z=this.getZ(t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.x=this.getX(t),dt.y=this.getY(t),dt.z=this.getZ(t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.x=this.getX(t),dt.y=this.getY(t),dt.z=this.getZ(t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ur(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}Ur.prototype.isInterleavedBufferAttribute=!0;class ah extends It{constructor(e){super(),this.type="SpriteMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}ah.prototype.isSpriteMaterial=!0;let ki;const xr=new L,Bi=new L,Oi=new L,Ui=new se,yr=new se,oh=new Le,ws=new L,_r=new L,Ss=new L,Tc=new se,Qa=new se,Ec=new se;class ex extends Ke{constructor(e){if(super(),this.type="Sprite",ki===void 0){ki=new lt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Zr(t,5);ki.setIndex([0,1,2,0,2,3]),ki.setAttribute("position",new Ur(n,3,0,!1)),ki.setAttribute("uv",new Ur(n,2,3,!1))}this.geometry=ki,this.material=e!==void 0?e:new ah,this.center=new se(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Bi.setFromMatrixScale(this.matrixWorld),oh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Oi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Bi.multiplyScalar(-Oi.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;Ts(ws.set(-.5,-.5,0),Oi,a,Bi,i,s),Ts(_r.set(.5,-.5,0),Oi,a,Bi,i,s),Ts(Ss.set(.5,.5,0),Oi,a,Bi,i,s),Tc.set(0,0),Qa.set(1,0),Ec.set(1,1);let o=e.ray.intersectTriangle(ws,_r,Ss,!1,xr);if(o===null&&(Ts(_r.set(-.5,.5,0),Oi,a,Bi,i,s),Qa.set(0,1),o=e.ray.intersectTriangle(ws,Ss,_r,!1,xr),o===null))return;const l=e.ray.origin.distanceTo(xr);l<e.near||l>e.far||t.push({distance:l,point:xr.clone(),uv:gt.getUV(xr,ws,_r,Ss,Tc,Qa,Ec,new se),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}ex.prototype.isSprite=!0;function Ts(r,e,t,n,i,s){Ui.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(yr.x=s*Ui.x-i*Ui.y,yr.y=i*Ui.x+s*Ui.y):yr.copy(Ui),r.copy(e),r.x+=yr.x,r.y+=yr.y,r.applyMatrix4(oh)}const Ac=new L,Cc=new it,Lc=new it,tx=new L,Rc=new Le;class lh extends kt{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Le,this.bindMatrixInverse=new Le}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new it,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;Cc.fromBufferAttribute(i.attributes.skinIndex,e),Lc.fromBufferAttribute(i.attributes.skinWeight,e),Ac.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Lc.getComponent(s);if(a!==0){const o=Cc.getComponent(s);Rc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(tx.copy(Ac).applyMatrix4(Rc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}lh.prototype.isSkinnedMesh=!0;class nx extends Ke{constructor(){super(),this.type="Bone"}}nx.prototype.isBone=!0;class ix extends St{constructor(e=null,t=1,n=1,i,s,a,o,l,c=mt,u=mt,h,d){super(null,a,o,l,c,u,i,s,h,d),this.image={data:e,width:t,height:n},this.magFilter=c,this.minFilter=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}ix.prototype.isDataTexture=!0;class So extends vt{constructor(e,t,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}So.prototype.isInstancedBufferAttribute=!0;const Pc=new Le,Ic=new Le,Es=[],br=new kt;class rx extends kt{constructor(e,t,n){super(e,t),this.instanceMatrix=new So(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(br.geometry=this.geometry,br.material=this.material,br.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,Pc),Ic.multiplyMatrices(n,Pc),br.matrixWorld=Ic,br.raycast(e,Es);for(let a=0,o=Es.length;a<o;a++){const l=Es[a];l.instanceId=s,l.object=this,t.push(l)}Es.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new So(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}rx.prototype.isInstancedMesh=!0;class Jr extends It{constructor(e){super(),this.type="LineBasicMaterial",this.color=new Ee(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}Jr.prototype.isLineBasicMaterial=!0;const Dc=new L,Fc=new L,zc=new Le,Ka=new rr,As=new ir;class el extends Ke{constructor(e=new lt,t=new Jr){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Dc.fromBufferAttribute(t,i-1),Fc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Dc.distanceTo(Fc);e.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(i),As.radius+=s,e.ray.intersectsSphere(As)===!1)return;zc.copy(i).invert(),Ka.copy(e.ray).applyMatrix4(zc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new L,u=new L,h=new L,d=new L,p=this.isLineSegments?2:1;if(n.isBufferGeometry){const g=n.index,x=n.attributes.position;if(g!==null){const m=Math.max(0,a.start),f=Math.min(g.count,a.start+a.count);for(let b=m,y=f-1;b<y;b+=p){const _=g.getX(b),E=g.getX(b+1);if(c.fromBufferAttribute(x,_),u.fromBufferAttribute(x,E),Ka.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:h.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,a.start),f=Math.min(x.count,a.start+a.count);for(let b=m,y=f-1;b<y;b+=p){if(c.fromBufferAttribute(x,b),u.fromBufferAttribute(x,b+1),Ka.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||t.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}el.prototype.isLine=!0;const Nc=new L,kc=new L;class tl extends el{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Nc.fromBufferAttribute(t,i),kc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Nc.distanceTo(kc);e.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}tl.prototype.isLineSegments=!0;class sx extends el{constructor(e,t){super(e,t),this.type="LineLoop"}}sx.prototype.isLineLoop=!0;class ch extends It{constructor(e){super(),this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}ch.prototype.isPointsMaterial=!0;const Bc=new Le,To=new rr,Cs=new ir,Ls=new L;class ax extends Ke{constructor(e=new lt,t=new ch){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(i),Cs.radius+=s,e.ray.intersectsSphere(Cs)===!1)return;Bc.copy(i).invert(),To.copy(e.ray).applyMatrix4(Bc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o;if(n.isBufferGeometry){const c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,v=p;g<v;g++){const x=c.getX(g);Ls.fromBufferAttribute(h,x),Oc(Ls,x,l,i,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,v=p;g<v;g++)Ls.fromBufferAttribute(h,g),Oc(Ls,g,l,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}ax.prototype.isPoints=!0;function Oc(r,e,t,n,i,s,a){const o=To.distanceSqToPoint(r);if(o<t){const l=new L;To.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class ox extends St{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.format=o!==void 0?o:xi,this.minFilter=a!==void 0?a:Nt,this.magFilter=s!==void 0?s:Nt,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}ox.prototype.isVideoTexture=!0;class lx extends St{constructor(e,t,n){super({width:e,height:t}),this.format=n,this.magFilter=mt,this.minFilter=mt,this.generateMipmaps=!1,this.needsUpdate=!0}}lx.prototype.isFramebufferTexture=!0;class cx extends St{constructor(e,t,n,i,s,a,o,l,c,u,h,d){super(null,a,o,l,c,u,i,s,h,d),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}cx.prototype.isCompressedTexture=!0;class ux extends St{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.needsUpdate=!0}}ux.prototype.isCanvasTexture=!0;class Kt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const u=n[i],d=n[i+1]-u,p=(a-u)/d;return(i+p)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new se:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,i=[],s=[],a=[],o=new L,l=new Le;for(let p=0;p<=e;p++){const g=p/e;i[p]=this.getTangentAt(g,new L)}s[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(qt(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(qt(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class pa extends Kt{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new se,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}pa.prototype.isEllipseCurve=!0;class uh extends pa{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.type="ArcCurve"}}uh.prototype.isArcCurve=!0;function nl(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let d=(a-s)/c-(o-s)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,p*=u,i(a,o,d,p)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const Rs=new L,eo=new nl,to=new nl,no=new nl;class hh extends Kt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(Rs.subVectors(i[0],i[1]).add(i[0]),c=Rs);const h=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(Rs.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Rs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),x<1e-4&&(x=v),eo.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,v,x),to.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,v,x),no.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,v,x)}else this.curveType==="catmullrom"&&(eo.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),to.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),no.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(eo.calc(l),to.calc(l),no.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}hh.prototype.isCatmullRomCurve3=!0;function Uc(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function hx(r,e){const t=1-r;return t*t*e}function dx(r,e){return 2*(1-r)*r*e}function fx(r,e){return r*r*e}function Ir(r,e,t,n){return hx(r,e)+dx(r,t)+fx(r,n)}function px(r,e){const t=1-r;return t*t*t*e}function mx(r,e){const t=1-r;return 3*t*t*r*e}function gx(r,e){return 3*(1-r)*r*r*e}function vx(r,e){return r*r*r*e}function Dr(r,e,t,n,i){return px(r,e)+mx(r,t)+gx(r,n)+vx(r,i)}class il extends Kt{constructor(e=new se,t=new se,n=new se,i=new se){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new se){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Dr(e,i.x,s.x,a.x,o.x),Dr(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}il.prototype.isCubicBezierCurve=!0;class dh extends Kt{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Dr(e,i.x,s.x,a.x,o.x),Dr(e,i.y,s.y,a.y,o.y),Dr(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}dh.prototype.isCubicBezierCurve3=!0;class ma extends Kt{constructor(e=new se,t=new se){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new se;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}ma.prototype.isLineCurve=!0;class xx extends Kt{constructor(e=new L,t=new L){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rl extends Kt{constructor(e=new se,t=new se,n=new se){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Ir(e,i.x,s.x,a.x),Ir(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}rl.prototype.isQuadraticBezierCurve=!0;class fh extends Kt{constructor(e=new L,t=new L,n=new L){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Ir(e,i.x,s.x,a.x),Ir(e,i.y,s.y,a.y),Ir(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}fh.prototype.isQuadraticBezierCurve3=!0;class sl extends Kt{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new se){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(Uc(o,l.x,c.x,u.x,h.x),Uc(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new se().fromArray(i))}return this}}sl.prototype.isSplineCurve=!0;var ph=Object.freeze({__proto__:null,ArcCurve:uh,CatmullRomCurve3:hh,CubicBezierCurve:il,CubicBezierCurve3:dh,EllipseCurve:pa,LineCurve:ma,LineCurve3:xx,QuadraticBezierCurve:rl,QuadraticBezierCurve3:fh,SplineCurve:sl});class yx extends Kt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new ma(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a&&a.isEllipseCurve?e*2:a&&(a.isLineCurve||a.isLineCurve3)?1:a&&a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new ph[i.type]().fromJSON(i))}return this}}class Eo extends yx{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ma(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new rl(this.currentPoint.clone(),new se(e,t),new se(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new il(this.currentPoint.clone(),new se(e,t),new se(n,i),new se(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new sl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){const c=new pa(e,t,n,i,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class $r extends Eo{constructor(e){super(e),this.uuid=_n(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Eo().fromJSON(i))}return this}}const _x={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=mh(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,h,d,p;if(n&&(s=Tx(r,e,s,t)),r.length>80*t){o=c=r[0],l=u=r[1];for(let g=t;g<i;g+=t)h=r[g],d=r[g+1],h<o&&(o=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);p=Math.max(c-o,u-l),p=p!==0?1/p:0}return Vr(s,a,t,o,l,p),a}};function mh(r,e,t,n,i){let s,a;if(i===Nx(r,e,t,n)>0)for(s=e;s<t;s+=n)a=Vc(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=Vc(s,r[s],r[s+1],a);return a&&ga(a,a.next)&&(Gr(a),a=a.next),a}function ni(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(ga(t,t.next)||ut(t.prev,t,t.next)===0)){if(Gr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Vr(r,e,t,n,i,s,a){if(!r)return;!a&&s&&Rx(r,n,i,s);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?Mx(r,n,i,s):bx(r)){e.push(l.i/t),e.push(r.i/t),e.push(c.i/t),Gr(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=wx(ni(r),e,t),Vr(r,e,t,n,i,s,2)):a===2&&Sx(r,e,t,n,i,s):Vr(ni(r),e,t,n,i,s,1);break}}}function bx(r){const e=r.prev,t=r,n=r.next;if(ut(e,t,n)>=0)return!1;let i=r.next.next;for(;i!==r.prev;){if(Wi(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&ut(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function Mx(r,e,t,n){const i=r.prev,s=r,a=r.next;if(ut(i,s,a)>=0)return!1;const o=i.x<s.x?i.x<a.x?i.x:a.x:s.x<a.x?s.x:a.x,l=i.y<s.y?i.y<a.y?i.y:a.y:s.y<a.y?s.y:a.y,c=i.x>s.x?i.x>a.x?i.x:a.x:s.x>a.x?s.x:a.x,u=i.y>s.y?i.y>a.y?i.y:a.y:s.y>a.y?s.y:a.y,h=Ao(o,l,e,t,n),d=Ao(c,u,e,t,n);let p=r.prevZ,g=r.nextZ;for(;p&&p.z>=h&&g&&g.z<=d;){if(p!==r.prev&&p!==r.next&&Wi(i.x,i.y,s.x,s.y,a.x,a.y,p.x,p.y)&&ut(p.prev,p,p.next)>=0||(p=p.prevZ,g!==r.prev&&g!==r.next&&Wi(i.x,i.y,s.x,s.y,a.x,a.y,g.x,g.y)&&ut(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;p&&p.z>=h;){if(p!==r.prev&&p!==r.next&&Wi(i.x,i.y,s.x,s.y,a.x,a.y,p.x,p.y)&&ut(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;g&&g.z<=d;){if(g!==r.prev&&g!==r.next&&Wi(i.x,i.y,s.x,s.y,a.x,a.y,g.x,g.y)&&ut(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function wx(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!ga(i,s)&&gh(i,n,n.next,s)&&Hr(i,s)&&Hr(s,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(s.i/t),Gr(n),Gr(n.next),n=r=s),n=n.next}while(n!==r);return ni(n)}function Sx(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Dx(a,o)){let l=vh(a,o);a=ni(a,a.next),l=ni(l,l.next),Vr(a,e,t,n,i,s),Vr(l,e,t,n,i,s);return}o=o.next}a=a.next}while(a!==r)}function Tx(r,e,t,n){const i=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*n,l=s<a-1?e[s+1]*n:r.length,c=mh(r,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Ix(c));for(i.sort(Ex),s=0;s<i.length;s++)Ax(i[s],t),t=ni(t,t.next);return t}function Ex(r,e){return r.x-e.x}function Ax(r,e){if(e=Cx(r,e),e){const t=vh(e,r);ni(e,e.next),ni(t,t.next)}}function Cx(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,a;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s){if(s=d,d===n){if(i===t.y)return t;if(i===t.next.y)return t.next}a=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!a)return null;if(n===s)return a;const o=a,l=a.x,c=a.y;let u=1/0,h;t=a;do n>=t.x&&t.x>=l&&n!==t.x&&Wi(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)&&(h=Math.abs(i-t.y)/(n-t.x),Hr(t,r)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&Lx(a,t)))&&(a=t,u=h)),t=t.next;while(t!==o);return a}function Lx(r,e){return ut(r.prev,r,e.prev)<0&&ut(e.next,r,r.next)<0}function Rx(r,e,t,n){let i=r;do i.z===null&&(i.z=Ao(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Px(i)}function Px(r){let e,t,n,i,s,a,o,l,c=1;do{for(t=r,r=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(a>1);return r}function Ao(r,e,t,n,i){return r=32767*(r-t)*i,e=32767*(e-n)*i,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Ix(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Wi(r,e,t,n,i,s,a,o){return(i-a)*(e-o)-(r-a)*(s-o)>=0&&(r-a)*(n-o)-(t-a)*(e-o)>=0&&(t-a)*(s-o)-(i-a)*(n-o)>=0}function Dx(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!Fx(r,e)&&(Hr(r,e)&&Hr(e,r)&&zx(r,e)&&(ut(r.prev,r,e.prev)||ut(r,e.prev,e))||ga(r,e)&&ut(r.prev,r,r.next)>0&&ut(e.prev,e,e.next)>0)}function ut(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function ga(r,e){return r.x===e.x&&r.y===e.y}function gh(r,e,t,n){const i=Is(ut(r,e,t)),s=Is(ut(r,e,n)),a=Is(ut(t,n,r)),o=Is(ut(t,n,e));return!!(i!==s&&a!==o||i===0&&Ps(r,t,e)||s===0&&Ps(r,n,e)||a===0&&Ps(t,r,n)||o===0&&Ps(t,e,n))}function Ps(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Is(r){return r>0?1:r<0?-1:0}function Fx(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&gh(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Hr(r,e){return ut(r.prev,r,r.next)<0?ut(r,e,r.next)>=0&&ut(r,r.prev,e)>=0:ut(r,e,r.prev)<0||ut(r,r.next,e)<0}function zx(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function vh(r,e){const t=new Co(r.i,r.x,r.y),n=new Co(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Vc(r,e,t,n){const i=new Co(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Gr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Co(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Nx(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class ei{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return ei.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Hc(e),Gc(n,e);let a=e.length;t.forEach(Hc);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Gc(n,t[l]);const o=_x.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Hc(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Gc(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class or extends lt{constructor(e=new $r([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new wt(i,3)),this.setAttribute("uv",new wt(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1;let h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,f=t.UVGenerator!==void 0?t.UVGenerator:kx;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=t.amount);let b,y=!1,_,E,C,D;m&&(b=m.getSpacedPoints(u),y=!0,d=!1,_=m.computeFrenetFrames(u,!1),E=new L,C=new L,D=new L),d||(x=0,p=0,g=0,v=0);const O=o.extractPoints(c);let k=O.shape;const R=O.holes;if(!ei.isClockWise(k)){k=k.reverse();for(let j=0,ae=R.length;j<ae;j++){const he=R[j];ei.isClockWise(he)&&(R[j]=he.reverse())}}const w=ei.triangulateShape(k,R),F=k;for(let j=0,ae=R.length;j<ae;j++){const he=R[j];k=k.concat(he)}function N(j,ae,he){return ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),ae.clone().multiplyScalar(he).add(j)}const P=k.length,z=w.length;function $(j,ae,he){let Me,me,Re;const Pe=j.x-ae.x,Ue=j.y-ae.y,$e=he.x-j.x,A=he.y-j.y,T=Pe*Pe+Ue*Ue,K=Pe*A-Ue*$e;if(Math.abs(K)>Number.EPSILON){const le=Math.sqrt(T),ve=Math.sqrt($e*$e+A*A),oe=ae.x-Ue/le,Ie=ae.y+Pe/le,Ce=he.x-A/ve,pe=he.y+$e/ve,I=((Ce-oe)*A-(pe-Ie)*$e)/(Pe*A-Ue*$e);Me=oe+Pe*I-j.x,me=Ie+Ue*I-j.y;const fe=Me*Me+me*me;if(fe<=2)return new se(Me,me);Re=Math.sqrt(fe/2)}else{let le=!1;Pe>Number.EPSILON?$e>Number.EPSILON&&(le=!0):Pe<-Number.EPSILON?$e<-Number.EPSILON&&(le=!0):Math.sign(Ue)===Math.sign(A)&&(le=!0),le?(Me=-Ue,me=Pe,Re=Math.sqrt(T)):(Me=Pe,me=Ue,Re=Math.sqrt(T/2))}return new se(Me/Re,me/Re)}const ne=[];for(let j=0,ae=F.length,he=ae-1,Me=j+1;j<ae;j++,he++,Me++)he===ae&&(he=0),Me===ae&&(Me=0),ne[j]=$(F[j],F[he],F[Me]);const V=[];let q,Q=ne.concat();for(let j=0,ae=R.length;j<ae;j++){const he=R[j];q=[];for(let Me=0,me=he.length,Re=me-1,Pe=Me+1;Me<me;Me++,Re++,Pe++)Re===me&&(Re=0),Pe===me&&(Pe=0),q[Me]=$(he[Me],he[Re],he[Pe]);V.push(q),Q=Q.concat(q)}for(let j=0;j<x;j++){const ae=j/x,he=p*Math.cos(ae*Math.PI/2),Me=g*Math.sin(ae*Math.PI/2)+v;for(let me=0,Re=F.length;me<Re;me++){const Pe=N(F[me],ne[me],Me);re(Pe.x,Pe.y,-he)}for(let me=0,Re=R.length;me<Re;me++){const Pe=R[me];q=V[me];for(let Ue=0,$e=Pe.length;Ue<$e;Ue++){const A=N(Pe[Ue],q[Ue],Me);re(A.x,A.y,-he)}}}const ie=g+v;for(let j=0;j<P;j++){const ae=d?N(k[j],Q[j],ie):k[j];y?(C.copy(_.normals[0]).multiplyScalar(ae.x),E.copy(_.binormals[0]).multiplyScalar(ae.y),D.copy(b[0]).add(C).add(E),re(D.x,D.y,D.z)):re(ae.x,ae.y,0)}for(let j=1;j<=u;j++)for(let ae=0;ae<P;ae++){const he=d?N(k[ae],Q[ae],ie):k[ae];y?(C.copy(_.normals[j]).multiplyScalar(he.x),E.copy(_.binormals[j]).multiplyScalar(he.y),D.copy(b[j]).add(C).add(E),re(D.x,D.y,D.z)):re(he.x,he.y,h/u*j)}for(let j=x-1;j>=0;j--){const ae=j/x,he=p*Math.cos(ae*Math.PI/2),Me=g*Math.sin(ae*Math.PI/2)+v;for(let me=0,Re=F.length;me<Re;me++){const Pe=N(F[me],ne[me],Me);re(Pe.x,Pe.y,h+he)}for(let me=0,Re=R.length;me<Re;me++){const Pe=R[me];q=V[me];for(let Ue=0,$e=Pe.length;Ue<$e;Ue++){const A=N(Pe[Ue],q[Ue],Me);y?re(A.x,A.y+b[u-1].y,b[u-1].x+he):re(A.x,A.y,h+he)}}}ce(),Ae();function ce(){const j=i.length/3;if(d){let ae=0,he=P*ae;for(let Me=0;Me<z;Me++){const me=w[Me];_e(me[2]+he,me[1]+he,me[0]+he)}ae=u+x*2,he=P*ae;for(let Me=0;Me<z;Me++){const me=w[Me];_e(me[0]+he,me[1]+he,me[2]+he)}}else{for(let ae=0;ae<z;ae++){const he=w[ae];_e(he[2],he[1],he[0])}for(let ae=0;ae<z;ae++){const he=w[ae];_e(he[0]+P*u,he[1]+P*u,he[2]+P*u)}}n.addGroup(j,i.length/3-j,0)}function Ae(){const j=i.length/3;let ae=0;W(F,ae),ae+=F.length;for(let he=0,Me=R.length;he<Me;he++){const me=R[he];W(me,ae),ae+=me.length}n.addGroup(j,i.length/3-j,1)}function W(j,ae){let he=j.length;for(;--he>=0;){const Me=he;let me=he-1;me<0&&(me=j.length-1);for(let Re=0,Pe=u+x*2;Re<Pe;Re++){const Ue=P*Re,$e=P*(Re+1),A=ae+Me+Ue,T=ae+me+Ue,K=ae+me+$e,le=ae+Me+$e;ue(A,T,K,le)}}}function re(j,ae,he){l.push(j),l.push(ae),l.push(he)}function _e(j,ae,he){we(j),we(ae),we(he);const Me=i.length/3,me=f.generateTopUV(n,i,Me-3,Me-2,Me-1);He(me[0]),He(me[1]),He(me[2])}function ue(j,ae,he,Me){we(j),we(ae),we(Me),we(ae),we(he),we(Me);const me=i.length/3,Re=f.generateSideWallUV(n,i,me-6,me-3,me-2,me-1);He(Re[0]),He(Re[1]),He(Re[3]),He(Re[1]),He(Re[2]),He(Re[3])}function we(j){i.push(l[j*3+0]),i.push(l[j*3+1]),i.push(l[j*3+2])}function He(j){s.push(j.x),s.push(j.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Bx(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new ph[i.type]().fromJSON(i)),new or(n,e.options)}}const kx={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new se(s,a),new se(o,l),new se(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[i*3],p=e[i*3+1],g=e[i*3+2],v=e[s*3],x=e[s*3+1],m=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new se(a,1-l),new se(c,1-h),new se(d,1-g),new se(v,1-m)]:[new se(o,1-l),new se(u,1-h),new se(p,1-g),new se(x,1-m)]}};function Bx(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class al extends lt{constructor(e=new $r([new se(0,.5),new se(-.5,-.5),new se(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new wt(i,3)),this.setAttribute("normal",new wt(s,3)),this.setAttribute("uv",new wt(a,2));function c(u){const h=i.length/3,d=u.extractPoints(t);let p=d.shape;const g=d.holes;ei.isClockWise(p)===!1&&(p=p.reverse());for(let x=0,m=g.length;x<m;x++){const f=g[x];ei.isClockWise(f)===!0&&(g[x]=f.reverse())}const v=ei.triangulateShape(p,g);for(let x=0,m=g.length;x<m;x++){const f=g[x];p=p.concat(f)}for(let x=0,m=p.length;x<m;x++){const f=p[x];i.push(f.x,f.y,0),s.push(0,0,1),a.push(f.x,f.y)}for(let x=0,m=v.length;x<m;x++){const f=v[x],b=f[0]+h,y=f[1]+h,_=f[2]+h;n.push(b,y,_),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Ox(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const a=t[e.shapes[i]];n.push(a)}return new al(n,e.curveSegments)}}function Ox(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class Ux extends It{constructor(e){super(),this.type="ShadowMaterial",this.color=new Ee(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}Ux.prototype.isShadowMaterial=!0;class xh extends It{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tr,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}xh.prototype.isMeshStandardMaterial=!0;class Vx extends xh{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}Vx.prototype.isMeshPhysicalMaterial=!0;class Hx extends It{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new Ee(16777215),this.specular=new Ee(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tr,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Hx.prototype.isMeshPhongMaterial=!0;class Gx extends It{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ee(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tr,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Gx.prototype.isMeshToonMaterial=!0;class Wx extends It{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tr,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}Wx.prototype.isMeshNormalMaterial=!0;class qx extends It{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}qx.prototype.isMeshLambertMaterial=!0;class jx extends It{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ee(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tr,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}}jx.prototype.isMeshMatcapMaterial=!0;class Xx extends Jr{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}Xx.prototype.isLineDashedMaterial=!0;const at={arraySlice:function(r,e,t){return at.isTypedArray(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)},convertArray:function(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)},isTypedArray:function(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)},getKeyframeOrder:function(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i},flattenJSON:function(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)},subclip:function(r,e,t,n,i=30){const s=r.clone();s.name=e;const a=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],u=c.getValueSize(),h=[],d=[];for(let p=0;p<c.times.length;++p){const g=c.times[p]*i;if(!(g<t||g>=n)){h.push(c.times[p]);for(let v=0;v<u;++v)d.push(c.values[p*u+v])}}h.length!==0&&(c.times=at.convertArray(h,c.times.constructor),c.values=at.convertArray(d,c.values.constructor),a.push(c))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s},makeClipAdditive:function(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=r.tracks.find(function(m){return m.name===o.name&&m.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0;const p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=p/3);const g=o.times.length-1;let v;if(s<=o.times[0]){const m=u,f=h-u;v=at.arraySlice(o.values,m,f)}else if(s>=o.times[g]){const m=g*h+u,f=m+h-u;v=at.arraySlice(o.values,m,f)}else{const m=o.createInterpolant(),f=u,b=h-u;m.evaluate(s),v=at.arraySlice(m.resultBuffer,f,b)}l==="quaternion"&&new Ut().fromArray(v).normalize().conjugate().toArray(v);const x=c.times.length;for(let m=0;m<x;++m){const f=m*p+d;if(l==="quaternion")Ut.multiplyQuaternionsFlat(c.values,f,v,0,c.values,f);else{const b=p-d*2;for(let y=0;y<b;++y)c.values[f+y]-=v[y]}}}return r.blendMode=ku,r}};class ii{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,s)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,s,e)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}ii.prototype.beforeStart_=ii.prototype.copySampleValue_;ii.prototype.afterEnd_=ii.prototype.copySampleValue_;class Yx extends ii{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hi,endingEnd:Hi}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Gi:s=e,o=2*t-n;break;case Ys:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Gi:a=e,l=2*n-t;break;case Ys:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),v=g*g,x=v*g,m=-d*x+2*d*v-d*g,f=(1+d)*x+(-1.5-2*d)*v+(-.5+d)*g+1,b=(-1-p)*x+(1.5+p)*v+.5*g,y=p*x-p*v;for(let _=0;_!==o;++_)s[_]=m*a[u+_]+f*a[c+_]+b*a[l+_]+y*a[h+_];return s}}class yh extends ii{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)s[d]=a[c+d]*h+a[l+d]*u;return s}}class Zx extends ii{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class wn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=at.convertArray(t,this.TimeBufferType),this.values=at.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:at.convertArray(e.times,Array),values:at.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Zx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case js:t=this.InterpolantFactoryMethodDiscrete;break;case Xs:t=this.InterpolantFactoryMethodLinear;break;case Ma:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return js;case this.InterpolantFactoryMethodLinear:return Xs;case this.InterpolantFactoryMethodSmooth:return Ma}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=at.arraySlice(n,s,a),this.values=at.arraySlice(this.values,s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&at.isTypedArray(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=at.arraySlice(this.times),t=at.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===Ma,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){const v=t[h+g];if(v!==t[d+g]||v!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=at.arraySlice(e,0,a),this.values=at.arraySlice(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=at.arraySlice(this.times,0),t=at.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=Xs;class lr extends wn{}lr.prototype.ValueTypeName="bool";lr.prototype.ValueBufferType=Array;lr.prototype.DefaultInterpolation=js;lr.prototype.InterpolantFactoryMethodLinear=void 0;lr.prototype.InterpolantFactoryMethodSmooth=void 0;class _h extends wn{}_h.prototype.ValueTypeName="color";class $s extends wn{}$s.prototype.ValueTypeName="number";class Jx extends ii{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Ut.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Qr extends wn{InterpolantFactoryMethodLinear(e){return new Jx(this.times,this.values,this.getValueSize(),e)}}Qr.prototype.ValueTypeName="quaternion";Qr.prototype.DefaultInterpolation=Xs;Qr.prototype.InterpolantFactoryMethodSmooth=void 0;class cr extends wn{}cr.prototype.ValueTypeName="string";cr.prototype.ValueBufferType=Array;cr.prototype.DefaultInterpolation=js;cr.prototype.InterpolantFactoryMethodLinear=void 0;cr.prototype.InterpolantFactoryMethodSmooth=void 0;class Qs extends wn{}Qs.prototype.ValueTypeName="vector";class Wc{constructor(e,t=-1,n,i=Wo){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=_n(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Qx(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(wn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=at.getKeyframeOrder(l);l=at.sortedArray(l,1,u),c=at.sortedArray(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new $s(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,p,g,v){if(p.length!==0){const x=[],m=[];at.flattenJSON(p,x,m,g),x.length!==0&&v.push(new h(d,x,m))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)p[d[g].morphTargets[v]]=-1;for(const v in p){const x=[],m=[];for(let f=0;f!==d[g].morphTargets.length;++f){const b=d[g];x.push(b.time),m.push(b.morphTarget===v?1:0)}i.push(new $s(".morphTargetInfluence["+v+"]",x,m))}l=p.length*(a||1)}else{const p=".bones["+t[h].name+"]";n(Qs,p+".position",d,"pos",i),n(Qr,p+".quaternion",d,"rot",i),n(Qs,p+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function $x(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $s;case"vector":case"vector2":case"vector3":case"vector4":return Qs;case"color":return _h;case"quaternion":return Qr;case"bool":case"boolean":return lr;case"string":return cr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Qx(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=$x(r.type);if(r.times===void 0){const t=[],n=[];at.flattenJSON(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const $i={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Kx{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const ey=new Kx;let ai=class{constructor(e){this.manager=e!==void 0?e:ey,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};const Rn={};class ty extends ai{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=$i.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Rn[e]!==void 0){Rn[e].push({onLoad:t,onProgress:n,onError:i});return}Rn[e]=[],Rn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"});fetch(a).then(o=>{if(o.status===200||o.status===0){if(o.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||o.body.getReader===void 0)return o;const l=Rn[e],c=o.body.getReader(),u=o.headers.get("Content-Length"),h=u?parseInt(u):0,d=h!==0;let p=0;const g=new ReadableStream({start(v){x();function x(){c.read().then(({done:m,value:f})=>{if(m)v.close();else{p+=f.byteLength;const b=new ProgressEvent("progress",{lengthComputable:d,loaded:p,total:h});for(let y=0,_=l.length;y<_;y++){const E=l[y];E.onProgress&&E.onProgress(b)}v.enqueue(f),x()}})}}});return new Response(g)}else throw Error(`fetch for "${o.url}" responded with ${o.status}: ${o.statusText}`)}).then(o=>{switch(this.responseType){case"arraybuffer":return o.arrayBuffer();case"blob":return o.blob();case"document":return o.text().then(l=>new DOMParser().parseFromString(l,this.mimeType));case"json":return o.json();default:return o.text()}}).then(o=>{$i.add(e,o);const l=Rn[e];delete Rn[e];for(let c=0,u=l.length;c<u;c++){const h=l[c];h.onLoad&&h.onLoad(o)}}).catch(o=>{const l=Rn[e];if(l===void 0)throw this.manager.itemError(e),o;delete Rn[e];for(let c=0,u=l.length;c<u;c++){const h=l[c];h.onError&&h.onError(o)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class bh extends ai{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=$i.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=la("img");function l(){u(),$i.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class ny extends ai{constructor(e){super(e)}load(e,t,n,i){const s=new ca,a=new bh(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(u){s.images[c]=u,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class Mh extends ai{constructor(e){super(e)}load(e,t,n,i){const s=new St,a=new bh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class bn extends Ke{constructor(e,t=1){super(),this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}bn.prototype.isLight=!0;class iy extends bn{constructor(e,t,n){super(e,n),this.type="HemisphereLight",this.position.copy(Ke.DefaultUp),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e){return bn.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}iy.prototype.isHemisphereLight=!0;const qc=new Le,jc=new L,Xc=new L;class ol{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ua,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;jc.setFromMatrixPosition(e.matrixWorld),t.position.copy(jc),Xc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xc),t.updateMatrixWorld(),qc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class wh extends ol{constructor(){super(new zt(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,n=bo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}wh.prototype.isSpotLightShadow=!0;class ry extends bn{constructor(e,t,n=0,i=Math.PI/3,s=0,a=1){super(e,t),this.type="SpotLight",this.position.copy(Ke.DefaultUp),this.updateMatrix(),this.target=new Ke,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.shadow=new wh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}ry.prototype.isSpotLight=!0;const Yc=new Le,Mr=new L,io=new L;class Sh extends ol{constructor(){super(new zt(90,1,.5,500)),this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Mr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Mr),io.copy(n.position),io.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(io),n.updateMatrixWorld(),i.makeTranslation(-Mr.x,-Mr.y,-Mr.z),Yc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yc)}}Sh.prototype.isPointLightShadow=!0;class sy extends bn{constructor(e,t,n=0,i=1){super(e,t),this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Sh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}sy.prototype.isPointLight=!0;class Th extends ol{constructor(){super(new Zo(-5,5,5,-5,.5,500))}}Th.prototype.isDirectionalLightShadow=!0;class ay extends bn{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(Ke.DefaultUp),this.updateMatrix(),this.target=new Ke,this.shadow=new Th}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}ay.prototype.isDirectionalLight=!0;class oy extends bn{constructor(e,t){super(e,t),this.type="AmbientLight"}}oy.prototype.isAmbientLight=!0;class ly extends bn{constructor(e,t,n=10,i=10){super(e,t),this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}ly.prototype.isRectAreaLight=!0;class Eh{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new L)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(n*s)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*n*s),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}Eh.prototype.isSphericalHarmonics3=!0;class ll extends bn{constructor(e=new Eh,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}ll.prototype.isLightProbe=!0;class cy{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class uy extends lt{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}uy.prototype.isInstancedBufferGeometry=!0;class hy extends ai{constructor(e){super(e),typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=$i.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){$i.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}hy.prototype.isImageBitmapLoader=!0;let Ds;const dy={getContext:function(){return Ds===void 0&&(Ds=new(window.AudioContext||window.webkitAudioContext)),Ds},setContext:function(r){Ds=r}};class fy extends ai{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new ty(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{const l=o.slice(0);dy.getContext().decodeAudioData(l,function(u){t(u)})}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}}class py extends ll{constructor(e,t,n=1){super(void 0,n);const i=new Ee().set(e),s=new Ee().set(t),a=new L(i.r,i.g,i.b),o=new L(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(a).add(o).multiplyScalar(l),this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c)}}py.prototype.isHemisphereLightProbe=!0;class my extends ll{constructor(e,t=1){super(void 0,t);const n=new Ee().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}my.prototype.isAmbientLightProbe=!0;class gy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Zc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Zc(){return(typeof performance>"u"?Date:performance).now()}class vy extends Ke{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class xy{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Ut.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;Ut.multiplyQuaternionsFlat(e,a,e,t,e,n),Ut.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const cl="\\[\\]\\.:\\/",yy=new RegExp("["+cl+"]","g"),ul="[^"+cl+"]",_y="[^"+cl.replace("\\.","")+"]",by=/((?:WC+[\/:])*)/.source.replace("WC",ul),My=/(WCOD+)?/.source.replace("WCOD",_y),wy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ul),Sy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ul),Ty=new RegExp("^"+by+My+wy+Sy+"$"),Ey=["material","materials","bones"];class Ay{constructor(e,t,n){const i=n||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Qe{constructor(e,t,n){this.path=t,this.parsedPath=n||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Qe.Composite(e,t,n):new Qe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yy,"")}static parseTrackName(e){const t=Ty.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Ey.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Qe.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=Ay;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Cy{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,o=new Array(a),l={endingStart:Hi,endingEnd:Hi};for(let c=0;c!==a;++c){const u=s[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=lp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case ku:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case Wo:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===cp;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===op){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Gi,i.endingEnd=Gi):(e?i.endingStart=this.zeroSlopeAtStart?Gi:Hi:i.endingStart=Ys,t?i.endingEnd=this.zeroSlopeAtEnd?Gi:Hi:i.endingEnd=Ys)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}}class Ly extends _i{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){const d=i[h],p=d.name;let g=u[p];if(g!==void 0)a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}const v=t&&t._propertyBindings[h].binding.parsedPath;g=new xy(Qe.create(n,p,v),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),a[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new yh(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?Wc.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Wo),l!==void 0){const h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const u=new Cy(this,a,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,s),u}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Wc.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}Ly.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class Ry extends Zr{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}Ry.prototype.isInstancedInterleavedBuffer=!0;const qn=new L,Fs=new Le,ro=new Le;class Py extends tl{constructor(e){const t=Ah(e),n=new lt,i=[],s=[],a=new Ee(0,0,1),o=new Ee(0,1,0);for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(a.r,a.g,a.b),s.push(o.r,o.g,o.b))}n.setAttribute("position",new wt(i,3)),n.setAttribute("color",new wt(s,3));const l=new Jr({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");ro.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<t.length;s++){const o=t[s];o.parent&&o.parent.isBone&&(Fs.multiplyMatrices(ro,o.matrixWorld),qn.setFromMatrixPosition(Fs),i.setXYZ(a,qn.x,qn.y,qn.z),Fs.multiplyMatrices(ro,o.parent.matrixWorld),qn.setFromMatrixPosition(Fs),i.setXYZ(a+1,qn.x,qn.y,qn.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function Ah(r){const e=[];r&&r.isBone&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,Ah(r.children[t]));return e}class Iy extends tl{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ee(n),i=new Ee(i);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,p=0,g=-o;d<=t;d++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const v=d===s?n:i;v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3}const u=new lt;u.setAttribute("position",new wt(l,3)),u.setAttribute("color",new wt(c,3));const h=new Jr({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}}const Dy=new Float32Array(1);new Int32Array(Dy.buffer);Kt.create=function(r,e){return console.log("THREE.Curve.create() has been deprecated"),r.prototype=Object.create(Kt.prototype),r.prototype.constructor=r,r.prototype.getPoint=e,r};Eo.prototype.fromPoints=function(r){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(r)};Iy.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};Py.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};ai.prototype.extractUrlBase=function(r){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),cy.extractUrlBase(r)};ai.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};cn.prototype.center=function(r){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(r)};cn.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};cn.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};cn.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};cn.prototype.size=function(r){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(r)};ir.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};ua.prototype.setFromMatrix=function(r){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(r)};At.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};At.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};At.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};At.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};At.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};At.prototype.getInverse=function(r){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};Le.prototype.extractPosition=function(r){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(r)};Le.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};Le.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new L().setFromMatrixColumn(this,3)};Le.prototype.setRotationFromQuaternion=function(r){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(r)};Le.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};Le.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};Le.prototype.multiplyVector4=function(r){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};Le.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};Le.prototype.rotateAxis=function(r){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),r.transformDirection(this)};Le.prototype.crossVector=function(r){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};Le.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};Le.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};Le.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};Le.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};Le.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};Le.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};Le.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};Le.prototype.makeFrustum=function(r,e,t,n,i,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(r,e,n,t,i,s)};Le.prototype.getInverse=function(r){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};Dn.prototype.isIntersectionLine=function(r){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(r)};Ut.prototype.multiplyVector3=function(r){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),r.applyQuaternion(this)};Ut.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};rr.prototype.isIntersectionBox=function(r){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};rr.prototype.isIntersectionPlane=function(r){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(r)};rr.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};gt.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};gt.prototype.barycoordFromPoint=function(r,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(r,e)};gt.prototype.midpoint=function(r){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(r)};gt.prototypenormal=function(r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(r)};gt.prototype.plane=function(r){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(r)};gt.barycoordFromPoint=function(r,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),gt.getBarycoord(r,e,t,n,i)};gt.normal=function(r,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),gt.getNormal(r,e,t,n)};$r.prototype.extractAllPoints=function(r){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(r)};$r.prototype.extrude=function(r){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new or(this,r)};$r.prototype.makeGeometry=function(r){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new al(this,r)};se.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};se.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};se.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};L.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};L.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};L.prototype.getPositionFromMatrix=function(r){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(r)};L.prototype.getScaleFromMatrix=function(r){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(r)};L.prototype.getColumnFromMatrix=function(r,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,r)};L.prototype.applyProjection=function(r){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(r)};L.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};L.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};L.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};it.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};it.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Ke.prototype.getChildByName=function(r){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(r)};Ke.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Ke.prototype.translate=function(r,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,r)};Ke.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Ke.prototype.applyMatrix=function(r){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(Ke.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(r){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=r}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});kt.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(kt.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),up},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});lh.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};zt.prototype.setLens=function(r,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(r)};Object.defineProperties(bn.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(r){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=r}},shadowCameraLeft:{set:function(r){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=r}},shadowCameraRight:{set:function(r){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=r}},shadowCameraTop:{set:function(r){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=r}},shadowCameraBottom:{set:function(r){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=r}},shadowCameraNear:{set:function(r){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=r}},shadowCameraFar:{set:function(r){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=r}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(r){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=r}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(r){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=r}},shadowMapHeight:{set:function(r){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=r}}});Object.defineProperties(vt.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Zs},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Zs)}}});vt.prototype.setDynamic=function(r){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?Zs:Or),this};vt.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},vt.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};lt.prototype.addIndex=function(r){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(r)};lt.prototype.addAttribute=function(r,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(r,new vt(arguments[1],arguments[2]))):r==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(r,e)};lt.prototype.addDrawCall=function(r,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(r,e)};lt.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};lt.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};lt.prototype.removeAttribute=function(r){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(r)};lt.prototype.applyMatrix=function(r){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(lt.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Zr.prototype.setDynamic=function(r){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?Zs:Or),this};Zr.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};or.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};or.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};or.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Ko.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(It.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new Ee}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(r){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===Du}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(r){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=r}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(Nn.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(r){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=r}}});et.prototype.clearTarget=function(r,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(r),this.clear(e,t,n)};et.prototype.animate=function(r){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(r)};et.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};et.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};et.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};et.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};et.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};et.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};et.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};et.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};et.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};et.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};et.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};et.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};et.prototype.enableScissorTest=function(r){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(r)};et.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};et.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};et.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};et.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};et.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};et.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};et.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};et.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};et.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};et.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(et.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=r}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=r}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(r){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=r===!0?er:ln}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});Object.defineProperties(rh.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Qt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=r}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=r}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=r}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=r}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(r){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=r}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(r){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=r}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(r){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=r}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(r){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=r}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(r){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=r}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(r){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=r}}});vy.prototype.load=function(r){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new fy().load(r,function(n){e.setBuffer(n)}),this};Yo.prototype.updateCubeMap=function(r,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(r,e)};Yo.prototype.clear=function(r,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(r,e,t,n)};nr.crossOrigin=void 0;nr.loadTexture=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new Mh;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};nr.loadTextureCube=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new ny;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};nr.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};nr.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ho}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ho);class Fy{container;scene;camera;renderer;constructor(e){this.container=e,this.scene=new Ko}get dimensions(){let e=window.innerWidth,t=this.container.getBoundingClientRect().height,n=e/t;return{width:e,height:t,aspect:n}}setup(){const e=180*(2*Math.atan(this.dimensions.height/2/1e3))/Math.PI;this.camera=new zt(e,this.dimensions.aspect,1,1e3),this.camera.position.set(0,0,1e3),this.renderer=new et({antialias:!0,alpha:!0}),this.renderer.setSize(this.dimensions.width,this.dimensions.height),this.renderer.setPixelRatio(window.devicePixelRatio),this.container.appendChild(this.renderer.domElement),window.addEventListener("resize",this.windowResize.bind(this),!1),this.render()}windowResize(){this.camera.aspect=this.dimensions.aspect,this.camera.fov=180*(2*Math.atan(this.dimensions.height/2/1e3))/Math.PI,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.dimensions.width,this.dimensions.height)}render(){this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.render.bind(this))}}class zy{element;dimensionsNode;scene;offset;sizes;material;geometry;mesh;activeFragmentShader;uniforms;shaders;constructor(e,t,n,i,s){this.element=e,this.scene=t,this.shaders=n,this.uniforms=s,this.dimensionsNode=i,this.offset=new se(0,0),this.sizes=new se(0,0),this.createMesh()}setDimensions(){const{width:e,height:t,left:n}=this.dimensionsNode.getBoundingClientRect();this.sizes.set(e,t),this.offset.set(n-window.innerWidth/2+e/2,0)}createMesh(){this.setDimensions(),this.geometry=new ha(1,1,4,6);const{width:e,height:t}=this.element.getBoundingClientRect();this.uniforms={uTexture:{value:new Mh().load(this.element.src)},uMeshSize:{value:new se(this.sizes.x,this.sizes.y)},uImgSize:{value:new se(e,t)},...this.uniforms},this.activeFragmentShader=this.loadFragmentShader,this.mesh=new kt(this.geometry,new Nn({uniforms:this.uniforms,vertexShader:this.shaders.vertex,fragmentShader:this.activeFragmentShader,transparent:!0})),this.mesh.position.set(this.offset.x,this.offset.y,0),this.mesh.scale.set(this.sizes.x,this.sizes.y,1),this.scene.add(this.mesh)}render(){this.setDimensions(),this.checkShader(),this.mesh.position.set(this.offset.x,this.offset.y,0),this.mesh.scale.set(this.sizes.x,this.sizes.y,1);const{width:e,height:t}=this.element.getBoundingClientRect();this.uniforms.uImgSize.value.set(e,t),this.uniforms.uMeshSize.value.set(this.sizes.x,this.sizes.y)}checkShader(){this.loadFragmentShader!==this.activeFragmentShader&&(this.activeFragmentShader=this.loadFragmentShader,this.mesh.material=new Nn({uniforms:this.uniforms,vertexShader:this.shaders.vertex,fragmentShader:this.activeFragmentShader,transparent:!0}))}get loadFragmentShader(){return this.sizes.x/this.sizes.y<1?this.shaders.fragment.horizontal:this.shaders.fragment.vertical}}const Ny=`

	// Description : Array and textureless GLSL 2D/3D/4D simplex
	//               noise functions.
	//      Author : Ian McEwan, Ashima Arts.
	//  Maintainer : stegu
	//     Lastmod : 20201014 (stegu)
	//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
	//               Distributed under the MIT License. See LICENSE file.
	//               https://github.com/ashima/webgl-noise
	//               https://github.com/stegu/webgl-noise

	vec3 mod289(vec3 x) {
		return x - floor(x * (1.0 / 289.0)) * 289.0;
	}

	vec4 mod289(vec4 x) {
		return x - floor(x * (1.0 / 289.0)) * 289.0;
	}

	vec4 permute(vec4 x) {
		return mod289(((x*34.0)+10.0)*x);
	}

	vec4 taylorInvSqrt(vec4 r) {
		return 1.79284291400159 - 0.85373472095314 * r;
	}

	float snoise(vec3 v) { 
		const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
		const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

		// First corner
		vec3 i  = floor(v + dot(v, C.yyy) );
		vec3 x0 =   v - i + dot(i, C.xxx) ;

		// Other corners
		vec3 g = step(x0.yzx, x0.xyz);
		vec3 l = 1.0 - g;
		vec3 i1 = min( g.xyz, l.zxy );
		vec3 i2 = max( g.xyz, l.zxy );

		vec3 x1 = x0 - i1 + C.xxx;
		vec3 x2 = x0 - i2 + C.yyy;
		vec3 x3 = x0 - D.yyy;

		// Permutations
		i = mod289(i); 
		vec4 p = permute( permute( permute( 
						i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
					+ i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
					+ i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

		// Gradients: 7x7 points over a square, mapped onto an octahedron.
		// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
		float n_ = 0.142857142857; // 1.0/7.0
		vec3  ns = n_ * D.wyz - D.xzx;

		vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

		vec4 x_ = floor(j * ns.z);
		vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

		vec4 x = x_ *ns.x + ns.yyyy;
		vec4 y = y_ *ns.x + ns.yyyy;
		vec4 h = 1.0 - abs(x) - abs(y);

		vec4 b0 = vec4( x.xy, y.xy );
		vec4 b1 = vec4( x.zw, y.zw );

		//vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
		//vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
		vec4 s0 = floor(b0)*2.0 + 1.0;
		vec4 s1 = floor(b1)*2.0 + 1.0;
		vec4 sh = -step(h, vec4(0.0));

		vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
		vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

		vec3 p0 = vec3(a0.xy,h.x);
		vec3 p1 = vec3(a0.zw,h.y);
		vec3 p2 = vec3(a1.xy,h.z);
		vec3 p3 = vec3(a1.zw,h.w);

		// Normalise gradients
		vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
		p0 *= norm.x;
		p1 *= norm.y;
		p2 *= norm.z;
		p3 *= norm.w;

		// Mix final noise value
		vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
		m = m * m;
		return 105.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
	}
`,ky=`

	uniform sampler2D uTexture;
	uniform vec2 uOffset;
	uniform float uTime;
	varying vec2 vUv;
	varying float vWave;

	#define M_PI 3.1415926535897932384626433832795

	${Ny}

	vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset) {
		position.x = position.x + (sin(uv.y * M_PI) * offset.x);
		position.y = position.y + (sin(uv.x * M_PI) * offset.y);
		return position;
	}

	void main() {
		vUv = uv;
		vec3 newPosition = deformationCurve(position, uv, uOffset);

		vec3 pos = position;
		vec3 noisePosition = vec3(pos.x * 2.5 + uTime, pos.y, pos.z);
		pos.z += snoise(noisePosition) * 0.05;
		vWave = pos.z * 0.2;

		gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
	}

`;function Jc(){const r=`
		float centeredX = ((uv.x) * (uMeshSize.x / uMeshSize.y)) - ((uImgSize.x / uImgSize.y) / 2.0) + 0.5;
		vec2 pos = vec2(centeredX, uv.y);
	`,e=`
		float centeredY = ((uv.y) * (uMeshSize.y / uMeshSize.x)) - ((uImgSize.y / uImgSize.x) / 2.0) + 0.5;
		vec2 pos = vec2(uv.x, centeredY);
	`;function t(n){return`
			uniform sampler2D uTexture;
			uniform float uAlpha;
			uniform vec2 uOffset;
			uniform vec2 uMeshSize;
			uniform vec2 uImgSize;
			varying vec2 vUv;
			varying float vWave;

			vec3 rgbShift(sampler2D textureImage, vec2 uv, vec2 offset) {
				${n}
				
				float r = texture2D(textureImage,pos + offset + vWave).r;
				vec2 gb = texture2D(textureImage,pos + vWave).gb;
				return vec3(r,gb);
			}

			void main() {
				vec3 color = rgbShift(uTexture, vUv, uOffset);
				gl_FragColor = vec4(color,uAlpha);
			}
		`}return{horizontal:t(r),vertical:t(e)}}class By extends zy{speed;clock;constructor(e,t){let n={vertex:ky,fragment:{vertical:Jc().vertical,horizontal:Jc().horizontal}},i={uTime:{value:0},uOffset:{value:new se(0,0)},uAlpha:{value:.7}};super(e,t,n,e.parentElement,i),this.clock=new gy,Lo.subscribe(s=>{this.speed=s})}createMesh(){super.createMesh(),this.element.parentElement.style.visibility="hidden"}}class Oy extends Fy{meshItems;images;constructor(e,t){super(e),this.images=t,this.meshItems=[],this.setup()}setup(){this.images.forEach(e=>{let t=new By(e,this.scene);this.meshItems.push(t)}),super.setup()}render(){for(let e=0;e<this.meshItems.length;e++)this.meshItems[e].render();super.render()}}function Uy(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Vy=4,Hy=.001,Gy=1e-7,Wy=10,Er=11,zs=1/(Er-1),qy=typeof Float32Array=="function";function Ch(r,e){return 1-3*e+3*r}function Lh(r,e){return 3*e-6*r}function Rh(r){return 3*r}function Ks(r,e,t){return((Ch(e,t)*r+Lh(e,t))*r+Rh(e))*r}function Ph(r,e,t){return 3*Ch(e,t)*r*r+2*Lh(e,t)*r+Rh(e)}function jy(r,e,t,n,i){var s,a,o=0;do a=e+(t-e)/2,s=Ks(a,n,i)-r,s>0?t=a:e=a;while(Math.abs(s)>Gy&&++o<Wy);return a}function Xy(r,e,t,n){for(var i=0;i<Vy;++i){var s=Ph(e,t,n);if(s===0)return e;var a=Ks(e,t,n)-r;e-=a/s}return e}function Yy(r){return r}var Zy=function(e,t,n,i){if(!(0<=e&&e<=1&&0<=n&&n<=1))throw new Error("bezier x values must be in [0, 1] range");if(e===t&&n===i)return Yy;for(var s=qy?new Float32Array(Er):new Array(Er),a=0;a<Er;++a)s[a]=Ks(a*zs,e,n);function o(l){for(var c=0,u=1,h=Er-1;u!==h&&s[u]<=l;++u)c+=zs;--u;var d=(l-s[u])/(s[u+1]-s[u]),p=c+d*zs,g=Ph(p,e,n);return g>=Hy?Xy(l,p,e,n):g===0?p:jy(l,c,c+zs,e,n)}return function(c){return c===0?0:c===1?1:Ks(o(c),t,i)}};const va=Uy(Zy);function Wr(r,e){e=e===void 0?{}:e,e.delay||(e.delay=35),e.initDelay||(e.initDelay=0),e.duration||(e.duration=600),e.breakWord===void 0&&(e.breakWord=!0);let t=r.innerHTML,n=Ih(r,{breakWord:e.breakWord});n.forEach(a=>{a.childNodes.forEach(o=>{o.style.transform="translateX(150%)"}),a.style.transform="translateX(80%)",a.style.display="inline-flex",a.style.overflowY="visible",a.style.overflowX="clip"});let i=[];return n.forEach(a=>{const o=a.childNodes;i=[...i,a,...o]}),e.promise!==void 0&&e.promise.then(()=>{s()}),{delay:e.initDelay,duration:e.duration,tick:a=>{let o=va(.2,.58,.43,1)(a);n.forEach(l=>{l.childNodes.forEach(c=>{c.style.transform=`translate3d(${(150+-o*150).toFixed(2)}%, 0px, 0px)`}),l.style.transform=`translate3d(${(80+-o*80).toFixed(2)}%, 0px, 0px)`}),o>=1&&(r.innerHTML=t)},anime:s};function s(a){a===void 0&&(a={}),Ze({targets:i,translateX:"0%",easing:a.easing?a.easing:"cubicBezier(.2, .58, .43, 1)",duration:e.duration,delay:Ze.stagger(e.delay,{start:e.initDelay}),complete:()=>{r.innerHTML=t,a&&a.onComplete&&a.onComplete()}})}}function Jy(r,e){e=e===void 0?{}:e,e.delay||(e.delay=35),e.initDelay||(e.initDelay=0),e.duration||(e.duration=600),e.breakWord===void 0&&(e.breakWord=!0);let t=r.innerHTML,n=Ih(r,{breakWord:e.breakWord});n.forEach(s=>{s.style.display="inline-flex",s.style.overflow="hidden"});let i=[];return n.forEach(s=>{const a=s.childNodes;i=[...i,s,...a]}),{delay:e.initDelay,duration:e.duration,tick:s=>{let a=va(.32,.24,.76,.26)(s);n.forEach(o=>{o.childNodes.forEach(l=>{l.style.transform=`translate3d(${(-150+a*150).toFixed(2)}%, 0px, 0px)`}),o.style.transform=`translate3d(${(-80+a*80).toFixed(2)}%, 0px, 0px)`}),a>=1&&(r.innerHTML=t)},anime:s=>{Ze({targets:i,translateX:"-150%",easing:s||"cubicBezier(.2, .58, .43, 1)",duration:e.duration,delay:Ze.stagger(e.delay,{start:e.initDelay}),complete:()=>{r.innerHTML=t}})}}}function Vt(r,e){e=e===void 0?{}:e,e.delay||(e.delay=20),e.duration||(e.duration=700),e.reverse||(e.reverse=!1);let t=n();return e.promise!==void 0&&e.promise.then(()=>{i()}),{delay:e.delay,duration:e.duration,tick:s=>{let a=va(.58,.14,.06,.97)(s);e.reverse?(t.style.transform=`translate3d(${(100+-a*100).toFixed(2)}%, 0px, 0px)`,r.style.transform=`translate3d(${(-100+a*100).toFixed(2)}%, 0px, 0px)`):(t.style.transform=`translate3d(${(-100+a*100).toFixed(2)}%, 0px, 0px)`,r.style.transform=`translate3d(${(100+-a*100).toFixed(2)}%, 0px, 0px)`)},anime:i};function n(){let s=document.createElement("div"),a=r.parentNode,o=Array.from(a.children).indexOf(r);return e=e===void 0?{}:e,s.classList.add("a-mask"),r.classList.add("a-content"),s.insertBefore(r,s.children[0]),s.style.display="inline-block",s.style.overflow="hidden",e.maskStyles&&e.maskStyles.forEach(l=>{s.style[l.property]=l.value}),a.insertBefore(s,a.children[o]),e.reverse?(s.style.transform="translateX(-100%)",r.style.transform="translateX(100%)"):(s.style.transform="translateX(100%)",r.style.transform="translateX(-100%)"),s}function i(s){Ze({targets:[t,r],translateX:"0%",easing:s||"cubicBezier(.58,.14,.06,.97)",duration:e.duration,delay:e.delay})}}function so(r,e){return e=e===void 0?{}:e,e.delay||(e.delay=0),e.duration||(e.duration=400),{delay:e.delay,duration:e.duration,tick:t=>{let n=va(.32,.24,.76,.26)(t);r.parentElement?.classList.contains("a-mask")&&(r.parentElement.style.transform=`translate3d(${(-100+n*100).toFixed(2)}%, 0px, 0px)`),r.style.transform=`translate3d(${(100+-n*100).toFixed(2)}%, 0px, 0px)`}}}function $y(r,e){e!==void 0&&(e.delay||(e.delay=0),r.style.transition="none",r.style.marginRight="60%",e.promise.then(()=>{Ze({targets:r,marginRight:"0%",easing:"easeOutQuint",duration:1400,delay:e.delay,complete:()=>{r.style.marginRight="",r.style.transition=""}})}))}function Qy(r,e){e!==void 0&&(e.delay||(e.delay=0),r.style.transition="none",r.style.transform="translateX(100%)",e.promise.then(()=>{Ze({targets:r,translateX:"0%",easing:"easeOutQuint",duration:1600,delay:e.delay,update:t=>{const n=1-Bd(t.progress/100);Lo.set(n*2500)},complete:()=>{r.style.transform="",r.style.transition="",e.onComplete&&e.onComplete()}})}))}function Ih(r,e){let t=r.querySelectorAll(".a-text-mask");return t.length<1&&(r.innerHTML=n(r.innerHTML,'<div class="a-text-mask"><div class="a-text-block">',"</div></div>"),t=r.querySelectorAll(".a-text-mask")),e.breakWord?r.querySelectorAll(".a-word").forEach(s=>{s.style.display="inline-block",s.style.whiteSpace="nowrap"}):r.querySelectorAll(".a-text-mask").forEach(s=>{s.style.whiteSpace="no-wrap"}),t;function n(i,s,a){let o="",l=!1,c=!1;return[...i].forEach((u,h)=>{u==="<"&&(l=!0,c&&(c=!1,o+="</div>")),i[h-1]==">"&&u!=="<"&&(l=!1,c||(c=!0,o+='<div class="a-word">')),l?o+=u:((u===" "||i[h-1]===" "||h===0||h===i.length)&&(c=!c,o+=c?'<div class="a-word">':'</div><span class="a-spacer a-text-block"> </span>'),u!==" "&&(o+=s+u+a))}),o}}function $c(r,e,t){const n=r.slice();return n[29]=e[t],n}function Qc(r,e,t){const n=r.slice();return n[32]=e[t],n[33]=e,n[34]=t,n}function Ky(r){return{c:X,l:X,m:X,p:X,d:X}}function e_(r){let e,t,n,i=r[34],s,a;const o=()=>r[16](e,i),l=()=>r[16](null,i);return{c(){e=ee("img"),this.h()},l(c){e=te(c,"IMG",{class:!0,src:!0,draggable:!0,alt:!0}),this.h()},h(){G(e,"class","cover-image svelte-1tt2pza"),ti(e.src,t=r[36])||G(e,"src",t),G(e,"draggable","false"),G(e,"alt",n=r[32].title+" Background")},m(c,u){ke(c,e,u),o(),s||(a=Rt(e,"dragstart",ao(r[15])),s=!0)},p(c,u){r=c,u[0]&1&&!ti(e.src,t=r[36])&&G(e,"src",t),u[0]&1&&n!==(n=r[32].title+" Background")&&G(e,"alt",n),i!==r[34]&&(l(),i=r[34],o())},d(c){c&&Z(e),l(),s=!1,a()}}}function t_(r){return{c:X,l:X,m:X,p:X,d:X}}function n_(r){return{c:X,l:X,m:X,p:X,i:X,o:X,d:X}}function i_(r){let e,t,n=(r[34].toString().length>1?r[34]+1:"0"+(r[34]+1).toString())+"",i,s,a,o,l,c,u=r[32].title+"",h,d,p,g,v="view",x,m,f;function b(){return r[17](r[34])}return{c(){e=ee("div"),t=ee("p"),i=an(n),a=Be(),o=ee("div"),l=ee("h1"),c=ee("span"),h=an(u),p=Be(),g=ee("button"),g.textContent=v,this.h()},l(y){e=te(y,"DIV",{class:!0});var _=be(e);t=te(_,"P",{class:!0});var E=be(t);i=on(E,n),E.forEach(Z),_.forEach(Z),a=Oe(y),o=te(y,"DIV",{class:!0});var C=be(o);l=te(C,"H1",{class:!0});var D=be(l);c=te(D,"SPAN",{class:!0});var O=be(c);h=on(O,u),O.forEach(Z),D.forEach(Z),p=Oe(C),g=te(C,"BUTTON",{class:!0,"data-svelte-h":!0}),ot(g)!=="svelte-6jg3a6"&&(g.textContent=v),C.forEach(Z),this.h()},h(){G(t,"class","item-index svelte-1tt2pza"),G(e,"class","text-top-wrapper svelte-1tt2pza"),nt(e,"hidden",r[8]>=0||r[1]),G(c,"class","svelte-1tt2pza"),G(l,"class","item-title svelte-1tt2pza"),G(g,"class","button item-link interactive svelte-1tt2pza"),G(o,"class","text-wrapper svelte-1tt2pza"),nt(o,"hidden",r[8]>=0||r[1])},m(y,_){ke(y,e,_),Y(e,t),Y(t,i),ke(y,a,_),ke(y,o,_),Y(o,l),Y(l,c),Y(c,h),Y(o,p),Y(o,g),m||(f=Rt(g,"click",b),m=!0)},p(y,_){r=y,_[0]&258&&nt(e,"hidden",r[8]>=0||r[1]),_[0]&1&&u!==(u=r[32].title+"")&&Xi(h,u),_[0]&258&&nt(o,"hidden",r[8]>=0||r[1])},i(y){y&&(s||bt(()=>{s=Et(t,Vt,{delay:r[34]*30+100,reverse:!0}),s.start()})),y&&(d||bt(()=>{d=Et(c,Vt,{duration:900,delay:r[34]*30+300,reverse:!0}),d.start()})),y&&(x||bt(()=>{x=Et(g,Vt,{duration:900,delay:r[34]*30+450,reverse:!0}),x.start()}))},o:X,d(y){y&&(Z(e),Z(a),Z(o)),m=!1,f()}}}function r_(r){return{c:X,l:X,m:X,p:X,i:X,o:X,d:X}}function Kc(r){let e,t,n,i,s,a=r[34],o,l,c,u={ctx:r,current:null,token:null,hasCatch:!1,pending:t_,then:e_,catch:Ky,value:36};yn(i=Nr(`assets/imgs/work-back/${r[32].id}/cover.jpg`),u);let h={ctx:r,current:null,token:null,hasCatch:!1,pending:r_,then:i_,catch:n_,value:35};yn(r[11],h);const d=()=>r[18](t,a),p=()=>r[18](null,a);return{c(){e=ee("li"),t=ee("div"),n=ee("div"),u.block.c(),s=Be(),h.block.c(),o=Be(),this.h()},l(g){e=te(g,"LI",{class:!0});var v=be(e);t=te(v,"DIV",{class:!0});var x=be(t);n=te(x,"DIV",{class:!0});var m=be(n);u.block.l(m),m.forEach(Z),s=Oe(x),h.block.l(x),x.forEach(Z),o=Oe(v),v.forEach(Z),this.h()},h(){G(n,"class","img-wrapper svelte-1tt2pza"),G(t,"class","list-item clickable passive svelte-1tt2pza"),nt(t,"ambient",r[8]!==r[34]&&r[8]>=0),nt(t,"active",r[8]===r[34]),G(e,"class","svelte-1tt2pza")},m(g,v){ke(g,e,v),Y(e,t),Y(t,n),u.block.m(n,u.anchor=null),u.mount=()=>n,u.anchor=null,Y(t,s),h.block.m(t,h.anchor=null),h.mount=()=>t,h.anchor=null,d(),Y(e,o),l||(c=$t($y.call(null,e,{promise:r[11],delay:r[34]*30})),l=!0)},p(g,v){r=g,u.ctx=r,v[0]&1&&i!==(i=Nr(`assets/imgs/work-back/${r[32].id}/cover.jpg`))&&yn(i,u)||zr(u,r,v),zr(h,r,v),a!==r[34]&&(p(),a=r[34],d()),v[0]&256&&nt(t,"ambient",r[8]!==r[34]&&r[8]>=0),v[0]&256&&nt(t,"active",r[8]===r[34])},d(g){g&&Z(e),u.block.d(),u.token=null,u=null,h.block.d(),h.token=null,h=null,p(),l=!1,c()}}}function eu(r){let e,t,n,i,s,a,o,l,c,u,h,d,p,g,v=r[0][r[8]].details.summary+"",x,m,f,b,y,_,E,C,D,O,k=r[0][r[8]].title+"",R,M,w,F,N,P="×",z,$,ne,V,q;function Q(re,_e){return re[8]<9?a_:s_}let ie=Q(r),ce=ie(r),Ae=Vs(r[12]),W=[];for(let re=0;re<Ae.length;re+=1)W[re]=tu($c(r,Ae,re));return{c(){e=ee("div"),t=ee("div"),n=ee("div"),i=ee("div"),s=ee("div"),a=ee("div"),ce.c(),c=Be(),u=ee("span"),d=Be(),p=ee("h6"),g=ee("div"),x=an(v),b=Be(),y=ee("div");for(let re=0;re<W.length;re+=1)W[re].c();C=Be(),D=ee("div"),O=ee("h1"),R=an(k),w=Be(),F=ee("button"),N=ee("div"),N.textContent=P,this.h()},l(re){e=te(re,"DIV",{class:!0});var _e=be(e);t=te(_e,"DIV",{class:!0});var ue=be(t);n=te(ue,"DIV",{class:!0});var we=be(n);i=te(we,"DIV",{class:!0});var He=be(i);s=te(He,"DIV",{class:!0});var j=be(s);a=te(j,"DIV",{class:!0});var ae=be(a);ce.l(ae),ae.forEach(Z),j.forEach(Z),c=Oe(He),u=te(He,"SPAN",{class:!0}),be(u).forEach(Z),d=Oe(He),p=te(He,"H6",{class:!0});var he=be(p);g=te(he,"DIV",{class:!0});var Me=be(g);x=on(Me,v),Me.forEach(Z),he.forEach(Z),He.forEach(Z),we.forEach(Z),b=Oe(ue),y=te(ue,"DIV",{class:!0});var me=be(y);for(let $e=0;$e<W.length;$e+=1)W[$e].l(me);me.forEach(Z),C=Oe(ue),D=te(ue,"DIV",{class:!0});var Re=be(D);O=te(Re,"H1",{class:!0});var Pe=be(O);R=on(Pe,k),Pe.forEach(Z),w=Oe(Re),F=te(Re,"BUTTON",{class:!0});var Ue=be(F);N=te(Ue,"DIV",{class:!0,"data-svelte-h":!0}),ot(N)!=="svelte-bj613r"&&(N.textContent=P),Ue.forEach(Z),Re.forEach(Z),ue.forEach(Z),_e.forEach(Z),this.h()},h(){G(a,"class","svelte-1tt2pza"),G(s,"class","index svelte-1tt2pza"),G(u,"class","line svelte-1tt2pza"),G(g,"class","svelte-1tt2pza"),G(p,"class","caption svelte-1tt2pza"),G(i,"class","wrapper svelte-1tt2pza"),G(n,"class","top-align svelte-1tt2pza"),G(y,"class","image-grid svelte-1tt2pza"),G(O,"class","title svelte-1tt2pza"),nt(O,"breakTitleWords",r[7]),G(N,"class","close-button svelte-1tt2pza"),G(F,"class","close-button-wrapper interactive svelte-1tt2pza"),G(D,"class","mid-align svelte-1tt2pza"),G(t,"class","wrapper svelte-1tt2pza"),G(e,"class","details-container svelte-1tt2pza")},m(re,_e){ke(re,e,_e),Y(e,t),Y(t,n),Y(n,i),Y(i,s),Y(s,a),ce.m(a,null),Y(i,c),Y(i,u),Y(i,d),Y(i,p),Y(p,g),Y(g,x),Y(t,b),Y(t,y);for(let ue=0;ue<W.length;ue+=1)W[ue]&&W[ue].m(y,null);Y(t,C),Y(t,D),Y(D,O),Y(O,R),Y(D,w),Y(D,F),Y(F,N),ne=!0,V||(q=[$t(r[14].call(null,O)),Rt(O,"introend",r[20]),Rt(O,"outrostart",r[21]),Rt(F,"click",r[22])],V=!0)},p(re,_e){if(ie===(ie=Q(re))&&ce?ce.p(re,_e):(ce.d(1),ce=ie(re),ce&&(ce.c(),ce.m(a,null))),(!ne||_e[0]&257)&&v!==(v=re[0][re[8]].details.summary+"")&&Xi(x,v),_e[0]&4353){Ae=Vs(re[12]);let ue;for(ue=0;ue<Ae.length;ue+=1){const we=$c(re,Ae,ue);W[ue]?W[ue].p(we,_e):(W[ue]=tu(we),W[ue].c(),W[ue].m(y,null))}for(;ue<W.length;ue+=1)W[ue].d(1);W.length=Ae.length}(!ne||_e[0]&257)&&k!==(k=re[0][re[8]].title+"")&&Xi(R,k),(!ne||_e[0]&128)&&nt(O,"breakTitleWords",re[7])},i(re){ne||(re&&bt(()=>{ne&&(l&&l.end(1),o=Et(a,Vt,{reverse:!0}),o.start())}),re&&bt(()=>{ne&&(h||(h=pl(u,ns,{},!0)),h.run(1))}),re&&bt(()=>{ne&&(f&&f.end(1),m=Et(g,Vt,{reverse:!0}),m.start())}),re&&bt(()=>{ne&&(E&&E.end(1),_=Et(y,ns,{duration:400}),_.start())}),M&&M.end(1),re&&bt(()=>{ne&&($&&$.end(1),z=Et(N,Vt,{reverse:!0}),z.start())}),ne=!0)},o(re){o&&o.invalidate(),re&&(l=dr(a,so,{})),re&&(h||(h=pl(u,ns,{},!1)),h.run(0)),m&&m.invalidate(),re&&(f=dr(g,so,{})),_&&_.invalidate(),re&&(E=dr(y,ns,{duration:400})),re&&(M=dr(O,Jy,{})),z&&z.invalidate(),re&&($=dr(N,so,{})),ne=!1},d(re){re&&Z(e),ce.d(),re&&l&&l.end(),re&&h&&h.end(),re&&f&&f.end(),au(W,re),re&&E&&E.end(),re&&M&&M.end(),re&&$&&$.end(),V=!1,qr(q)}}}function s_(r){let e=r[8]+1+"",t;return{c(){t=an(e)},l(n){t=on(n,e)},m(n,i){ke(n,t,i)},p(n,i){i[0]&256&&e!==(e=n[8]+1+"")&&Xi(t,e)},d(n){n&&Z(t)}}}function a_(r){let e="0"+(r[8]+1),t;return{c(){t=an(e)},l(n){t=on(n,e)},m(n,i){ke(n,t,i)},p(n,i){i[0]&256&&e!==(e="0"+(n[8]+1))&&Xi(t,e)},d(n){n&&Z(t)}}}function tu(r){let e,t;return{c(){e=ee("img"),this.h()},l(n){e=te(n,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){ti(e.src,t=`assets/imgs/work-back/${r[0][r[8]].id}/${r[29]}`)||G(e,"src",t),G(e,"alt","Image"),G(e,"class","grid-image svelte-1tt2pza")},m(n,i){ke(n,e,i)},p(n,i){i[0]&257&&!ti(e.src,t=`assets/imgs/work-back/${n[0][n[8]].id}/${n[29]}`)&&G(e,"src",t)},d(n){n&&Z(e)}}}function o_(r){let e,t,n,i,s,a,o,l,c=Vs(r[0]),u=[];for(let d=0;d<c.length;d+=1)u[d]=Kc(Qc(r,c,d));let h=r[8]!==-1&&eu(r);return{c(){e=ee("div"),t=ee("div"),n=ee("div"),i=ee("ul");for(let d=0;d<u.length;d+=1)u[d].c();s=Be(),h&&h.c(),this.h()},l(d){e=te(d,"DIV",{id:!0,class:!0});var p=be(e);t=te(p,"DIV",{class:!0,role:!0,tabindex:!0});var g=be(t);n=te(g,"DIV",{class:!0});var v=be(n);i=te(v,"UL",{class:!0});var x=be(i);for(let m=0;m<u.length;m+=1)u[m].l(x);x.forEach(Z),v.forEach(Z),s=Oe(g),h&&h.l(g),g.forEach(Z),p.forEach(Z),this.h()},h(){G(i,"class","work-list svelte-1tt2pza"),nt(i,"hold",r[1]),G(n,"class","svelte-1tt2pza"),nt(n,"mobile",r[10]),G(t,"class","content-wrapper svelte-1tt2pza"),G(t,"role","listbox"),G(t,"tabindex","0"),nt(t,"disabled",r[8]>=0),G(e,"id","content-container"),G(e,"class","work-click-area svelte-1tt2pza")},m(d,p){ke(d,e,p),Y(e,t),Y(t,n),Y(n,i);for(let g=0;g<u.length;g+=1)u[g]&&u[g].m(i,null);r[19](i),Y(t,s),h&&h.m(t,null),r[23](t),r[25](e),o||(l=[Rt(t,"mousedown",ao(function(){hr(r[9].onHold)&&r[9].onHold.apply(this,arguments)})),Rt(t,"mouseup",function(){hr(r[9].onRelease)&&r[9].onRelease.apply(this,arguments)}),Rt(t,"mouseleave",function(){hr(r[9].onRelease)&&r[9].onRelease.apply(this,arguments)}),Rt(t,"mousemove",ao(function(){hr(r[9].onMouseMove)&&r[9].onMouseMove.apply(this,arguments)})),$t(a=Qy.call(null,t,{promise:r[11],onComplete:r[24]}))],o=!0)},p(d,p){if(r=d,p[0]&10595){c=Vs(r[0]);let g;for(g=0;g<c.length;g+=1){const v=Qc(r,c,g);u[g]?u[g].p(v,p):(u[g]=Kc(v),u[g].c(),u[g].m(i,null))}for(;g<u.length;g+=1)u[g].d(1);u.length=c.length}p[0]&2&&nt(i,"hold",r[1]),p[0]&1024&&nt(n,"mobile",r[10]),r[8]!==-1?h?(h.p(r,p),p[0]&256&&_t(h,1)):(h=eu(r),h.c(),_t(h,1),h.m(t,null)):h&&(ea(),Wt(h,1,1,()=>{h=null}),ta()),a&&hr(a.update)&&p[0]&512&&a.update.call(null,{promise:r[11],onComplete:r[24]}),p[0]&256&&nt(t,"disabled",r[8]>=0)},i(d){_t(h)},o(d){Wt(h)},d(d){d&&Z(e),au(u,d),r[19](null),h&&h.d(),r[23](null),r[25](null),o=!1,qr(l)}}}function l_(r,e,t){let n,i;Xt(r,ho,P=>t(27,n=P)),Xt(r,co,P=>t(10,i=P));let s=[];Po.subscribe(P=>{P!==void 0&&t(0,s=P)});let a=!1;Bs.subscribe(P=>t(1,a=P));let o,l,c,u=[],h=[],d=!1,p=-1,g;const v=new Promise(P=>{g=P}),x=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];class m{currentMouseX=0;initialMouseX=0;currentPosition=0;targetPosition=0;initialPosition=0;offsetSpeed=5e3;lerpSpeed=.1;onHold=z=>{if(!(p>=0||a||z.target.classList.contains("button"))&&(this.initialMouseX=z.clientX,this.currentMouseX=z.clientX,Bs.set(!0),a)){let $=window.getComputedStyle(c),ne=new WebKitCSSMatrix($.transform);this.initialPosition=ne.m41}};onRelease(){Bs.set(!1)}onMouseMove=z=>{if(!a)return;this.currentMouseX=z.clientX;let $=(this.currentMouseX-this.initialMouseX)*-1;this.targetPosition=Math.round((this.initialPosition-this.offsetSpeed*($/document.body.clientWidth))*100)/100};animate=()=>{if(p<0){let z=c.offsetWidth-document.body.clientWidth;z<0&&(z=c.offsetWidth),this.targetPosition>0&&(this.targetPosition=0),this.targetPosition<=z*-1&&(this.targetPosition=-z)}this.currentPosition=this.lerp(this.currentPosition,this.targetPosition,this.lerpSpeed),Lo.set(Math.round((this.currentPosition-this.targetPosition)*100)/100),t(4,c.style.transform=`translate3d(${Math.round(this.currentPosition*100)/100}px, 0px, 0px)`,c),requestAnimationFrame(()=>this.animate())};lerp(z,$,ne){return z*(1-ne)+$*ne}}const f=new m;Qi(async()=>{Lr(o,()=>g(!0));const P=await Tl();Fr(co,i=P.isMobile,i),await Ki,Fr(ho,n=o,n),t(4,c.style.transform="translate3d(0px, 0px, 0px)",c),P.tier>=2&&!P.isMobile&&P.fps>=30&&new Oy(l,u)});function b(P){t(8,p=p==P?-1:P),p>=0&&t(9,f.targetPosition=-(h[P].offsetLeft-window.innerWidth/4+window.innerWidth/10),f)}function y(P){Wr(P,{delay:5,breakWord:!1}).anime({onComplete:()=>t(7,d=!0)})}function _(P){Gh.call(this,r,P)}function E(P,z){ct[P?"unshift":"push"](()=>{u[z]=P,t(5,u)})}const C=P=>b(P);function D(P,z){ct[P?"unshift":"push"](()=>{h[z]=P,t(6,h)})}function O(P){ct[P?"unshift":"push"](()=>{c=P,t(4,c)})}const k=()=>setTimeout(()=>t(7,d=!0),100),R=()=>setTimeout(()=>t(7,d=!1),100),M=()=>b(p);function w(P){ct[P?"unshift":"push"](()=>{l=P,t(3,l)})}const F=async()=>{(await Tl()).isMobile||f.animate()};function N(P){ct[P?"unshift":"push"](()=>{o=P,t(2,o)})}return[s,a,o,l,c,u,h,d,p,f,i,v,x,b,y,_,E,C,D,O,k,R,M,w,F,N]}class c_ extends ri{constructor(e){super(),si(this,e,l_,o_,kn,{},null,[-1,-1])}}function u_(r){return{c:X,l:X,m:X,i:X,o:X,d:X}}function h_(r){let e,t,n="Привет! <br/> Меня зовут Евгения",i,s,a='<p class="paragraph svelte-1yk02l1">Я художник - специалист в области иконописи.</p>',o,l,c,u,h='<span class="button svelte-1yk02l1"><a href="mailto:zhenya2201art@gmail.com" target="_blank" class="clickable sublink link svelte-1yk02l1">Email Me</a></span>',d,p,g,v='<span class="button svelte-1yk02l1"><a href="https://www.instagram.com/art.rodina.e" target="_blank" class="clickable sublink link svelte-1yk02l1">Instagram</a></span>',x,m,f,b,y,_={ctx:r,current:null,token:null,hasCatch:!1,pending:p_,then:f_,catch:d_,value:17};return yn(Nr("assets/imgs/profile-photo.jpg"),_),{c(){e=ee("div"),t=ee("h1"),t.innerHTML=n,i=Be(),s=ee("div"),s.innerHTML=a,l=Be(),c=ee("div"),u=ee("div"),u.innerHTML=h,p=Be(),g=ee("div"),g.innerHTML=v,m=Be(),f=ee("div"),_.block.c(),this.h()},l(E){e=te(E,"DIV",{class:!0});var C=be(e);t=te(C,"H1",{class:!0,"data-svelte-h":!0}),ot(t)!=="svelte-7rytjj"&&(t.innerHTML=n),i=Oe(C),s=te(C,"DIV",{"data-svelte-h":!0}),ot(s)!=="svelte-1po87y0"&&(s.innerHTML=a),l=Oe(C),c=te(C,"DIV",{class:!0});var D=be(c);u=te(D,"DIV",{"data-svelte-h":!0}),ot(u)!=="svelte-jsydlz"&&(u.innerHTML=h),p=Oe(D),g=te(D,"DIV",{"data-svelte-h":!0}),ot(g)!=="svelte-1r8ism3"&&(g.innerHTML=v),D.forEach(Z),C.forEach(Z),m=Oe(E),f=te(E,"DIV",{class:!0});var O=be(f);_.block.l(O),O.forEach(Z),this.h()},h(){G(t,"class","title svelte-1yk02l1"),G(c,"class","social-button-wrapper svelte-1yk02l1"),G(e,"class","content-wrapper svelte-1yk02l1"),G(f,"class","profile-image svelte-1yk02l1")},m(E,C){ke(E,e,C),Y(e,t),Y(e,i),Y(e,s),Y(e,l),Y(e,c),Y(c,u),Y(c,p),Y(c,g),ke(E,m,C),ke(E,f,C),_.block.m(f,_.anchor=null),_.mount=()=>f,_.anchor=null,b||(y=[$t(r[4].call(null,t)),$t(r[5].call(null,f))],b=!0)},p(E,C){r=E},i(E){E&&(o||bt(()=>{o=Et(s,Vt,{duration:1200,reverse:!0,delay:150}),o.start()})),E&&(d||bt(()=>{d=Et(u,Vt,{delay:400,reverse:!0}),d.start()})),E&&(x||bt(()=>{x=Et(g,Vt,{delay:700,reverse:!0}),x.start()})),_t(_.block)},o:X,d(E){E&&(Z(e),Z(m),Z(f)),_.block.d(),_.token=null,_=null,b=!1,qr(y)}}}function d_(r){return{c:X,l:X,m:X,i:X,o:X,d:X}}function f_(r){let e,t,n;return{c(){e=ee("img"),this.h()},l(i){e=te(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){ti(e.src,t=r[17])||G(e,"src",t),G(e,"alt","Evgenia's Profile"),G(e,"class","profile-pic svelte-1yk02l1")},m(i,s){ke(i,e,s)},i(i){i&&(n||bt(()=>{n=Et(e,Vt,{duration:1200,delay:100,reverse:!0,maskStyles:[{property:"width",value:"100%"},{property:"height",value:"100%"}]}),n.start()}))},o:X,d(i){i&&Z(e)}}}function p_(r){return{c:X,l:X,m:X,i:X,o:X,d:X}}function m_(r){return{c:X,l:X,m:X,i:X,o:X,d:X}}function g_(r){return{c:X,l:X,m:X,i:X,o:X,d:X}}function v_(r){let e,t='<div class="section"><h2>Образование</h2> <p>Училась в МГОУ факультет ИЗО и НР по специальности иконопись (2002-2007 гг).</p></div> <div class="section"><h2>Профессиональная деятельность</h2> <p>Иконописец, монументалист. Работаю 15 лет в различных стилях канонического письма.</p> <p>Участвовала в монументальных росписях, написании иконостасов, реконструкциях и благоукрашении многих храмов России, ближнего зарубежья и Европы.</p> <h3>Участие в росписях</h3> <ul><li class="svelte-1yk02l1">Храм Знамения на Шереметьевом дворе (г. Москва)</li> <li class="svelte-1yk02l1">Храм Спиридона Тримифунтского (г. Самара)</li> <li class="svelte-1yk02l1">Храм Дмитрия Донского и Ефросинии Московской Тульского Кремля</li> <li class="svelte-1yk02l1">Храм Троицы Живоначальной на Шаболовской (г. Москва)</li> <li class="svelte-1yk02l1">Храм Благовещения Пресвятой Богородицы (Испания, Барселона)</li> <li class="svelte-1yk02l1">Храм Крестовоздвижения (Алматы, Казахстан)</li></ul> <h3>Участие в иконостасах</h3> <ul><li class="svelte-1yk02l1">Домовая церковь в с. Михалёво (Московская обл.)</li> <li class="svelte-1yk02l1">Церковь преподобного Сергия Радонежского на Куликовом поле</li> <li class="svelte-1yk02l1">Реконструкция икон храма Знамения в усадьбе Дубровицы (Московская обл.)</li></ul></div> <div class="section"><h2>Проектная работа</h2> <p>Работая с художественными творческими мастерскими, имею опыт разработки проектов росписей, отрисовки орнаментов, эскизов композиций - от калек до исполнения на стене, ведение бригадных работ на объектах.</p></div> <div class="section"><h2>Выставки</h2> <ul><li class="svelte-1yk02l1">Участник выставки МСХ «Монументальное искусство в церкви» 2022 и 2023 гг. в Москве</li> <li class="svelte-1yk02l1">Участник выставки «Окно в горний мир» 2024 г. в Главном храме Вооруженных сил РФ</li></ul></div> <div class="section"><h2>Дополнительная информация</h2> <p>Так же работаю лично вне художественных коллективов. В основном это иконы.</p> <p>Являюсь членом Национального Союза Пастелистов с 2021 г. Регулярно участвую в выставках.</p></div>',n;return{c(){e=ee("div"),e.innerHTML=t,this.h()},l(i){e=te(i,"DIV",{class:!0,"data-svelte-h":!0}),ot(e)!=="svelte-1i8oq8t"&&(e.innerHTML=t),this.h()},h(){G(e,"class","container svelte-1yk02l1")},m(i,s){ke(i,e,s)},i(i){i&&(n||bt(()=>{n=Et(e,Wr,{initDelay:400}),n.start()}))},o:X,d(i){i&&Z(e)}}}function x_(r){return{c:X,l:X,m:X,i:X,o:X,d:X}}function y_(r){let e,t,n,i={ctx:r,current:null,token:null,hasCatch:!1,pending:m_,then:h_,catch:u_,value:16};yn(r[2],i);let s={ctx:r,current:null,token:null,hasCatch:!1,pending:x_,then:v_,catch:g_,value:16};return yn(r[3],s),{c(){e=ee("div"),i.block.c(),t=Be(),n=ee("div"),s.block.c(),this.h()},l(a){e=te(a,"DIV",{id:!0,class:!0});var o=be(e);i.block.l(o),o.forEach(Z),t=Oe(a),n=te(a,"DIV",{class:!0});var l=be(n);s.block.l(l),l.forEach(Z),this.h()},h(){G(e,"id","content-container"),G(e,"class","about svelte-1yk02l1"),G(n,"class","horizontal-flex svelte-1yk02l1")},m(a,o){ke(a,e,o),i.block.m(e,i.anchor=null),i.mount=()=>e,i.anchor=null,r[6](e),ke(a,t,o),ke(a,n,o),s.block.m(n,s.anchor=null),s.mount=()=>n,s.anchor=null,r[7](n)},p(a,[o]){r=a},i(a){_t(i.block),_t(s.block)},o:X,d(a){a&&(Z(e),Z(t),Z(n)),i.block.d(),i.token=null,i=null,r[6](null),s.block.d(),s.token=null,s=null,r[7](null)}}}function __(r,e,t){let n,i;Xt(r,Ws,f=>t(11,n=f)),Xt(r,fo,f=>t(12,i=f));let s,a,o,l,c,u=new Promise(f=>c=f),h,d=new Promise(f=>h=f),p;new Promise(f=>p=f),Qi(async()=>{await Ki,Fr(fo,i=s,i),n.addOffset({element:l,speedY:.8}),Lr(s,()=>c(!0)),Lr(a,()=>h(!0)),Lr(o,()=>p(!0))});function g(f){Wr(f,{delay:15}).anime()}function v(f){n.addOffset({element:f,speedY:.8})}function x(f){ct[f?"unshift":"push"](()=>{s=f,t(0,s)})}function m(f){ct[f?"unshift":"push"](()=>{a=f,t(1,a)})}return[s,a,u,d,g,v,x,m]}class b_ extends ri{constructor(e){super(),si(this,e,__,y_,kn,{})}}const{window:M_}=ou;function w_(r){return{c:X,l:X,m:X,p:X,d:X}}function S_(r){let e,t,n,i,s,a,o,l,c,u=r[0],h,d,p,g='<div class="hb svelte-11y6gr6"><span class="svelte-11y6gr6"></span> <span class="svelte-11y6gr6"></span> <span class="svelte-11y6gr6"></span></div>',v,x,m=nu(r);return{c(){e=ee("div"),t=ee("div"),n=ee("button"),i=ee("img"),a=Be(),o=ee("div"),l=ee("div"),c=ee("ul"),m.c(),h=Be(),d=ee("div"),p=ee("button"),p.innerHTML=g,this.h()},l(f){e=te(f,"DIV",{class:!0,style:!0});var b=be(e);t=te(b,"DIV",{class:!0,style:!0});var y=be(t);n=te(y,"BUTTON",{class:!0});var _=be(n);i=te(_,"IMG",{src:!0,class:!0,alt:!0,draggable:!0}),_.forEach(Z),y.forEach(Z),a=Oe(b),o=te(b,"DIV",{class:!0});var E=be(o);l=te(E,"DIV",{class:!0});var C=be(l);c=te(C,"UL",{class:!0});var D=be(c);m.l(D),D.forEach(Z),C.forEach(Z),h=Oe(E),d=te(E,"DIV",{class:!0});var O=be(d);p=te(O,"BUTTON",{class:!0,"data-svelte-h":!0}),ot(p)!=="svelte-ddta8z"&&(p.innerHTML=g),O.forEach(Z),E.forEach(Z),b.forEach(Z),this.h()},h(){ti(i.src,s="assets/imgs/logo.svg")||G(i,"src",s),G(i,"class","logo-icon svelte-11y6gr6"),G(i,"alt","Logo"),G(i,"draggable","false"),G(n,"class","interactive clickable svelte-11y6gr6"),G(t,"class","flex-wrapper ico svelte-11y6gr6"),Zn(t,"z-index","21"),G(c,"class","nav-list svelte-11y6gr6"),G(l,"class","wrapper svelte-11y6gr6"),nt(l,"mobileMenuActive",r[0]),G(p,"class","interactive hb-button clickable svelte-11y6gr6"),nt(p,"mobileMenuActive",r[0]),G(d,"class","mask svelte-11y6gr6"),G(o,"class","flex-wrapper svelte-11y6gr6"),G(e,"class","nav-wrapper svelte-11y6gr6"),Zn(e,"transform","translate(0px)")},m(f,b){ke(f,e,b),Y(e,t),Y(t,n),Y(n,i),Y(e,a),Y(e,o),Y(o,l),Y(l,c),m.m(c,null),Y(o,h),Y(o,d),Y(d,p),v||(x=[$t(r[7].call(null,i,{delay:1e3})),Rt(n,"click",r[10]),$t(r[7].call(null,p,{delay:1e3})),Rt(p,"click",r[14])],v=!0)},p(f,b){b&1&&kn(u,u=f[0])?(ea(),Wt(m,1,1,X),ta(),m=nu(f),m.c(),_t(m,1),m.m(c,null)):m.p(f,b),b&1&&nt(l,"mobileMenuActive",f[0]),b&1&&nt(p,"mobileMenuActive",f[0])},d(f){f&&Z(e),m.d(f),v=!1,qr(x)}}}function nu(r){let e,t,n="Home",i,s,a,o,l='<p class="svelte-11y6gr6">Мои работы</p>',c,u,h,d,p="Обо мне",g,v,x,m,f="Email",b,y,_,E,C="Telegram",D,O,k;return{c(){e=ee("li"),t=ee("button"),t.textContent=n,s=Be(),a=ee("li"),o=ee("button"),o.innerHTML=l,u=Be(),h=ee("li"),d=ee("button"),d.textContent=p,v=Be(),x=ee("li"),m=ee("a"),m.textContent=f,y=Be(),_=ee("li"),E=ee("a"),E.textContent=C,this.h()},l(R){e=te(R,"LI",{class:!0});var M=be(e);t=te(M,"BUTTON",{class:!0,"data-svelte-h":!0}),ot(t)!=="svelte-1unzo50"&&(t.textContent=n),M.forEach(Z),s=Oe(R),a=te(R,"LI",{class:!0});var w=be(a);o=te(w,"BUTTON",{class:!0,"data-svelte-h":!0}),ot(o)!=="svelte-3t8vtr"&&(o.innerHTML=l),w.forEach(Z),u=Oe(R),h=te(R,"LI",{class:!0});var F=be(h);d=te(F,"BUTTON",{class:!0,"data-svelte-h":!0}),ot(d)!=="svelte-1mckxnx"&&(d.textContent=p),F.forEach(Z),v=Oe(R),x=te(R,"LI",{class:!0});var N=be(x);m=te(N,"A",{href:!0,target:!0,class:!0,"data-svelte-h":!0}),ot(m)!=="svelte-z6lnfo"&&(m.textContent=f),N.forEach(Z),y=Oe(R),_=te(R,"LI",{class:!0});var P=be(_);E=te(P,"A",{href:!0,target:!0,class:!0,"data-svelte-h":!0}),ot(E)!=="svelte-nby2ma"&&(E.textContent=C),P.forEach(Z),this.h()},h(){G(t,"class","interactive clickable svelte-11y6gr6"),G(e,"class","svelte-11y6gr6"),G(o,"class","interactive clickable svelte-11y6gr6"),G(a,"class","svelte-11y6gr6"),G(d,"class","interactive clickable svelte-11y6gr6"),G(h,"class","svelte-11y6gr6"),G(m,"href","mailto:zhenya2201art@gmail.com"),G(m,"target","_blank"),G(m,"class","svelte-11y6gr6"),G(x,"class","mobile svelte-11y6gr6"),G(E,"href","https://t.me/rodina_albom"),G(E,"target","_blank"),G(E,"class","svelte-11y6gr6"),G(_,"class","svelte-11y6gr6")},m(R,M){ke(R,e,M),Y(e,t),ke(R,s,M),ke(R,a,M),Y(a,o),ke(R,u,M),ke(R,h,M),Y(h,d),ke(R,v,M),ke(R,x,M),Y(x,m),ke(R,y,M),ke(R,_,M),Y(_,E),O||(k=[Rt(t,"click",r[11]),$t(r[7].call(null,e,{delay:1e3})),Rt(o,"click",r[12]),$t(r[7].call(null,a,{delay:1100})),Rt(d,"click",r[13]),$t(r[7].call(null,h,{delay:1200})),$t(r[7].call(null,_,{delay:1300}))],O=!0)},p:X,i(R){R&&(i||bt(()=>{i=Et(t,r[2],{delay:200}),i.start()})),R&&(c||bt(()=>{c=Et(o,r[2],{delay:250}),c.start()})),R&&(g||bt(()=>{g=Et(d,r[2],{delay:300}),g.start()})),R&&(b||bt(()=>{b=Et(m,r[2],{delay:350}),b.start()})),R&&(D||bt(()=>{D=Et(E,r[2],{delay:400}),D.start()}))},o:X,d(R){R&&(Z(e),Z(s),Z(a),Z(u),Z(h),Z(v),Z(x),Z(y),Z(_)),O=!1,qr(k)}}}function T_(r){return{c:X,l:X,m:X,p:X,d:X}}function E_(r){let e,t,n,i={ctx:r,current:null,token:null,hasCatch:!1,pending:T_,then:S_,catch:w_,value:15};return yn(Ki,i),{c(){e=Us(),i.block.c()},l(s){e=Us(),i.block.l(s)},m(s,a){ke(s,e,a),i.block.m(s,i.anchor=a),i.mount=()=>e.parentNode,i.anchor=e,t||(n=Rt(M_,"resize",r[9]),t=!0)},p(s,[a]){r=s,zr(i,r,a)},i:X,o:X,d(s){s&&Z(e),i.block.d(s),i.token=null,i=null,t=!1,n()}}}function A_(r,e,t){let n,i,s,a;Xt(r,uo,f=>t(3,i=f)),Xt(r,ho,f=>t(4,s=f)),Xt(r,fo,f=>t(5,a=f));let{scrollContainer:o}=e,l=!1,c=window.innerWidth<=950;function u(f){o.scrollTo({top:f.offsetTop-window.innerHeight/5,behavior:"smooth"}),t(0,l=!1)}function h(f,b){c||(f.style.transform="translateY(130%) rotate(7deg)",Ze({targets:f,rotate:0,translateY:"0%",easing:"cubicBezier(0.165, 0.84, 0.44, 1)",duration:1e3,delay:b.delay}))}const d=()=>t(1,c=window.innerWidth<=950),p=()=>u(i),g=()=>u(i),v=()=>u(s),x=()=>u(a),m=()=>t(0,l=!l);return r.$$set=f=>{"scrollContainer"in f&&t(8,o=f.scrollContainer)},r.$$.update=()=>{r.$$.dirty&1&&t(2,n=l?Vt:(f,b)=>{let y=Vt(f,{reverse:!0,duration:3e3});return{tick:_=>{let E=1-_;y.tick(E),_==1&&setTimeout(()=>y.tick(1),500)}}})},[l,c,n,i,s,a,u,h,o,d,p,g,v,x,m]}class C_ extends ri{constructor(e){super(),si(this,e,A_,E_,kn,{scrollContainer:8})}}function L_(r){let e,t,n,i,s=r[5].availablity_date+"",a,o;return{c(){e=ee("p"),t=an("Принимаю заказы на роспись, написание икон и прочие работы с "),n=ee("br"),i=Be(),a=an(s),o=an("."),this.h()},l(l){e=te(l,"P",{class:!0});var c=be(e);t=on(c,"Принимаю заказы на роспись, написание икон и прочие работы с "),n=te(c,"BR",{class:!0}),i=Oe(c),a=on(c,s),o=on(c,"."),c.forEach(Z),this.h()},h(){G(n,"class","svelte-g0q3jr"),G(e,"class","large-text svelte-g0q3jr")},m(l,c){ke(l,e,c),Y(e,t),Y(e,n),Y(e,i),Y(e,a),Y(e,o),r[9](e)},p(l,c){c&32&&s!==(s=l[5].availablity_date+"")&&Xi(a,s)},d(l){l&&Z(e),r[9](null)}}}function R_(r){let e,t="Принимаю заказы на роспись, написание икон и прочие работы.";return{c(){e=ee("p"),e.textContent=t,this.h()},l(n){e=te(n,"P",{class:!0,"data-svelte-h":!0}),ot(e)!=="svelte-13niust"&&(e.textContent=t),this.h()},h(){G(e,"class","large-text svelte-g0q3jr")},m(n,i){ke(n,e,i),r[8](e)},p:X,d(n){n&&Z(e),r[8](null)}}}function P_(r){let e,t,n,i,s='<img src="assets/imgs/logo.svg" alt="mh logo" class="logo svelte-g0q3jr"/>',a,o,l,c,u="zhenya2201art@gmail.com",h,d,p,g,v,x,m,f='Adapted from Musab Hassans`s work<br class="svelte-g0q3jr"/>',b,y,_='<svg id="signature" class="name-signature svelte-g0q3jr" x="0px" y="0px" viewBox="0 0 190 136.9" style="stroke: rgb(79, 78, 85);"></svg>';function E(O,k){return O[5].availablity_date===""?R_:L_}let C=E(r),D=C(r);return{c(){e=ee("div"),t=ee("div"),n=ee("div"),i=ee("div"),i.innerHTML=s,a=Be(),o=ee("div"),D.c(),l=Be(),c=ee("a"),c.textContent=u,h=Be(),d=ee("div"),p=ee("p"),g=an("© "),v=an(r[6]),x=Be(),m=ee("p"),m.innerHTML=f,b=Be(),y=ee("div"),y.innerHTML=_,this.h()},l(O){e=te(O,"DIV",{class:!0});var k=be(e);t=te(k,"DIV",{class:!0});var R=be(t);n=te(R,"DIV",{class:!0});var M=be(n);i=te(M,"DIV",{class:!0,"data-svelte-h":!0}),ot(i)!=="svelte-22qnc3"&&(i.innerHTML=s),M.forEach(Z),a=Oe(R),o=te(R,"DIV",{class:!0});var w=be(o);D.l(w),l=Oe(w),c=te(w,"A",{class:!0,href:!0,target:!0,"data-svelte-h":!0}),ot(c)!=="svelte-e1lm6w"&&(c.textContent=u),w.forEach(Z),h=Oe(R),d=te(R,"DIV",{class:!0});var F=be(d);p=te(F,"P",{class:!0});var N=be(p);g=on(N,"© "),v=on(N,r[6]),N.forEach(Z),x=Oe(F),m=te(F,"P",{class:!0,"data-svelte-h":!0}),ot(m)!=="svelte-q0dw5v"&&(m.innerHTML=f),F.forEach(Z),R.forEach(Z),b=Oe(k),y=te(k,"DIV",{class:!0,"data-svelte-h":!0}),ot(y)!=="svelte-1lrer4p"&&(y.innerHTML=_),k.forEach(Z),this.h()},h(){G(i,"class","inline-flex svelte-g0q3jr"),G(n,"class","logo-wrapper svelte-g0q3jr"),G(c,"class","button large-text svelte-g0q3jr"),G(c,"href","mailto:zhenya2201art@gmail.com"),G(c,"target","_blank"),G(o,"class","status-wrapper"),G(p,"class","year svelte-g0q3jr"),G(m,"class","credits svelte-g0q3jr"),G(d,"class","credits-wrapper svelte-g0q3jr"),G(t,"class","flex-wrapper svelte-g0q3jr"),G(y,"class","flex-wrapper decor svelte-g0q3jr"),G(e,"class","footer-wrapper svelte-g0q3jr")},m(O,k){ke(O,e,k),Y(e,t),Y(t,n),Y(n,i),r[7](i),Y(t,a),Y(t,o),D.m(o,null),Y(o,l),Y(o,c),r[10](c),Y(t,h),Y(t,d),Y(d,p),Y(p,g),Y(p,v),Y(d,x),Y(d,m),r[11](d),Y(e,b),Y(e,y),r[12](e)},p(O,[k]){C===(C=E(O))&&D?D.p(O,k):(D.d(1),D=C(O),D&&(D.c(),D.m(o,l)))},i:X,o:X,d(O){O&&Z(e),r[7](null),D.d(),r[10](null),r[11](null),r[12](null)}}}function I_(r,e,t){let n,i,s,a,o,l,c,u,h,d={availablity_date:""};fu.subscribe(_=>{_!==void 0&&t(5,d=_)});const p=new Date().getFullYear();function g(){const _=Vt(i,{}),E=Wr(o,{delay:6,initDelay:150}),C=Vt(s,{delay:150}),D=Wr(a,{delay:6,initDelay:100});Lr(n,()=>{_.anime(),C.anime(),E.anime(),D.anime();let O=[{strokeDashoffset:"0"}];l.animate(O,{duration:1e3,delay:0,easing:"cubic-bezier(.72,.3,.25,1)",fill:"forwards"}),c.animate(O,{duration:300,delay:1e3,easing:"cubic-bezier(.47,.41,.26,1)",fill:"forwards"}),u.animate(O,{duration:200,delay:1300,easing:"cubic-bezier(.47,.41,.26,1)",fill:"forwards"}),h.animate(O,{duration:1e3,delay:1500,easing:"cubic-bezier(.47,.41,.26,1)",fill:"forwards"})})}Qi(async()=>{await Ki,g()});function v(_){ct[_?"unshift":"push"](()=>{i=_,t(1,i)})}function x(_){ct[_?"unshift":"push"](()=>{a=_,t(3,a)})}function m(_){ct[_?"unshift":"push"](()=>{a=_,t(3,a)})}function f(_){ct[_?"unshift":"push"](()=>{o=_,t(4,o)})}function b(_){ct[_?"unshift":"push"](()=>{s=_,t(2,s)})}function y(_){ct[_?"unshift":"push"](()=>{n=_,t(0,n)})}return[n,i,s,a,o,d,p,v,x,m,f,b,y]}class D_ extends ri{constructor(e){super(),si(this,e,I_,P_,kn,{})}}const{document:F_}=ou;function z_(r){return{c:X,l:X,m:X,p:X,d:X}}function N_(r){let e,t='<div class="dot svelte-1l3lcu7"></div>',n,i;return{c(){e=ee("div"),e.innerHTML=t,this.h()},l(s){e=te(s,"DIV",{class:!0,"data-svelte-h":!0}),ot(e)!=="svelte-1kqyv5l"&&(e.innerHTML=t),this.h()},h(){G(e,"class","dot-container active svelte-1l3lcu7"),nt(e,"hover",r[0]),nt(e,"disabled",r[2]||r[1])},m(s,a){ke(s,e,a),n||(i=$t(r[4].call(null,e)),n=!0)},p(s,a){a&1&&nt(e,"hover",s[0]),a&6&&nt(e,"disabled",s[2]||s[1])},d(s){s&&Z(e),n=!1,i()}}}function k_(r){return{c:X,l:X,m:X,p:X,d:X}}function B_(r){let e,t,n,i,s={ctx:r,current:null,token:null,hasCatch:!1,pending:k_,then:N_,catch:z_,value:9};return yn(Ki,s),{c(){e=Be(),t=Us(),s.block.c()},l(a){e=Oe(a),t=Us(),s.block.l(a)},m(a,o){ke(a,e,o),ke(a,t,o),s.block.m(a,s.anchor=o),s.mount=()=>t.parentNode,s.anchor=t,n||(i=Rt(F_.body,"mousemove",r[5]),n=!0)},p(a,[o]){r=a,zr(s,r,o)},i:X,o:X,d(a){a&&(Z(e),Z(t)),s.block.d(a),s.token=null,s=null,n=!1,i()}}}function iu(r){return r<.5?2*r*r:-1+(4-2*r)*r}function O_(r,e,t){let n;Xt(r,co,d=>t(8,n=d));let i=!1,s=!1,a=!0;Bs.subscribe(d=>t(1,s=d));let o={x:0,y:0},l={x:0,y:0};function c(d){if(n)return;a&&setTimeout(()=>t(2,a=!1),200);let p=window.getComputedStyle(d.target).cursor;if(t(0,i=p==="pointer"),p==="pointer"){let g=document.elementFromPoint(d.clientX,d.clientY),v=g.clientWidth,x=g.clientHeight,m={x:g.getBoundingClientRect().left+v/2,y:g.getBoundingClientRect().top+x/2};l={x:m.x+(m.x-d.clientX)*.15,y:m.y+(m.y-d.clientY)*.15}}else l={x:d.clientX,y:d.clientY}}function u(d){let p=.4;o.x+=iu(p)*(l.x-o.x),o.y+=iu(p)*(l.y-o.y),o.x=Math.ceil(o.x*100)/100,o.y=Math.ceil(o.y*100)/100,d.style.transform=`translate3d(${o.x}px, ${o.y}px, 0px)`,requestAnimationFrame(()=>u(d))}return[i,s,a,c,u,d=>c(d)]}class U_ extends ri{constructor(e){super(),si(this,e,O_,B_,kn,{})}}const Dh=r=>{r=r.trim();const e=r.match("[0-9.]+");let t="ms",n;const i=e?e[0]:"";return i&&(t=r.split(i)[1],n=Number(i)),{num:n,unit:t}},V_=r=>{const e=Dh(r),t=e?e.num:void 0;if(!t)return"";const n=r.replace(t+"","");let i=t;return n==="s"&&(i=t*1e3),i+"ms"};function H_(r){const e=c=>c.replace(/-([a-z])/g,u=>u[1].toUpperCase()),t=c=>window.getComputedStyle(r).getPropertyValue(c)||r.style[e(c)],n=t("transition-delay")||"0ms",i=t("transition-duration")||"0ms",s=Array.isArray(i)?i:[i],a=Array.isArray(n)?n:[n];let o=0,l;return s.push.apply(s,a),s.forEach(c=>{c.split(",").forEach(u=>{u=V_(u),l=Dh(u),l.num&&l.num>o&&(o=l.num)})}),o}function ru(r){const e=H_(r);return new Promise(t=>{e>0?setTimeout(()=>{t(r)},e):t(r)})}function G_(r){let e,t,n,i,s;return{c(){e=ee("div"),t=ee("div"),n=ee("div"),i=Be(),s=ee("div"),this.h()},l(a){e=te(a,"DIV",{class:!0});var o=be(e);t=te(o,"DIV",{class:!0});var l=be(t);n=te(l,"DIV",{class:!0}),be(n).forEach(Z),i=Oe(l),s=te(l,"DIV",{class:!0,style:!0}),be(s).forEach(Z),l.forEach(Z),o.forEach(Z),this.h()},h(){G(n,"class","loader-background svelte-1995pyy"),nt(n,"outro",r[1]),G(s,"class","loader svelte-1995pyy"),Zn(s,"width",r[2]+"%"),nt(s,"outro",r[1]),G(t,"class","loader-wrapper svelte-1995pyy"),G(e,"class","page-cover svelte-1995pyy")},m(a,o){ke(a,e,o),Y(e,t),Y(t,n),Y(t,i),Y(t,s),r[3](s)},p(a,[o]){o&2&&nt(n,"outro",a[1]),o&4&&Zn(s,"width",a[2]+"%"),o&2&&nt(s,"outro",a[1])},i:X,o:X,d(a){a&&Z(e),r[3](null)}}}function W_(r,e,t){let n;Xt(r,Ro,l=>t(4,n=l));let i,s=!1,a=0;Qi(async()=>{let l=0,c=n.length;await Po,n.forEach(async u=>{await u,l++,t(2,a=Math.round(l/c*100)),a>99&&ru(i).then(()=>{t(1,s=!0),t(2,a=0),ru(i).then(()=>{du()})})})});function o(l){ct[l?"unshift":"push"](()=>{i=l,t(0,i)})}return[i,s,a,o]}class q_ extends ri{constructor(e){super(),si(this,e,W_,G_,kn,{})}}function su(r){let e,t;return e=new q_({}),{c(){di(e.$$.fragment)},l(n){fi(e.$$.fragment,n)},m(n,i){pi(e,n,i),t=!0},i(n){t||(_t(e.$$.fragment,n),t=!0)},o(n){Wt(e.$$.fragment,n),t=!1},d(n){mi(e,n)}}}function j_(r){let e,t,n,i,s,a,o,l,c,u,h,d,p,g,v;e=new U_({});let x=r[2]&&su();return a=new C_({props:{scrollContainer:r[0]}}),l=new Dd({}),u=new c_({}),d=new b_({}),g=new D_({}),{c(){di(e.$$.fragment),t=Be(),x&&x.c(),n=Be(),i=ee("div"),s=ee("div"),di(a.$$.fragment),o=Be(),di(l.$$.fragment),c=Be(),di(u.$$.fragment),h=Be(),di(d.$$.fragment),p=Be(),di(g.$$.fragment),this.h()},l(m){fi(e.$$.fragment,m),t=Oe(m),x&&x.l(m),n=Oe(m),i=te(m,"DIV",{id:!0,class:!0});var f=be(i);s=te(f,"DIV",{id:!0,class:!0});var b=be(s);fi(a.$$.fragment,b),b.forEach(Z),o=Oe(f),fi(l.$$.fragment,f),c=Oe(f),fi(u.$$.fragment,f),h=Oe(f),fi(d.$$.fragment,f),p=Oe(f),fi(g.$$.fragment,f),f.forEach(Z),this.h()},h(){G(s,"id","nav-bar"),G(s,"class","svelte-1srbcku"),G(i,"id","scroll-frame"),G(i,"class","svelte-1srbcku")},m(m,f){pi(e,m,f),ke(m,t,f),x&&x.m(m,f),ke(m,n,f),ke(m,i,f),Y(i,s),pi(a,s,null),r[3](s),Y(i,o),pi(l,i,null),Y(i,c),pi(u,i,null),Y(i,h),pi(d,i,null),Y(i,p),pi(g,i,null),r[4](i),v=!0},p(m,[f]){m[2]?x?f&4&&_t(x,1):(x=su(),x.c(),_t(x,1),x.m(n.parentNode,n)):x&&(ea(),Wt(x,1,1,()=>{x=null}),ta());const b={};f&1&&(b.scrollContainer=m[0]),a.$set(b)},i(m){v||(_t(e.$$.fragment,m),_t(x),_t(a.$$.fragment,m),_t(l.$$.fragment,m),_t(u.$$.fragment,m),_t(d.$$.fragment,m),_t(g.$$.fragment,m),v=!0)},o(m){Wt(e.$$.fragment,m),Wt(x),Wt(a.$$.fragment,m),Wt(l.$$.fragment,m),Wt(u.$$.fragment,m),Wt(d.$$.fragment,m),Wt(g.$$.fragment,m),v=!1},d(m){m&&(Z(t),Z(n),Z(i)),mi(e,m),x&&x.d(m),mi(a),r[3](null),mi(l),mi(u),mi(d),mi(g),r[4](null)}}}function X_(r,e,t){let n,i;Xt(r,Ws,u=>t(5,n=u)),Xt(r,Ro,u=>t(6,i=u));let s,a,o=!0;Qi(async()=>{t(0,s.style.overflowY="hidden",s),s.scrollTo(0,0),Po.set(await gl("/data/work-data.json")),fu.set(await gl("/data/data.json")),await Promise.allSettled(i),await Zh,t(2,o=!1),hu(),Jh(),Fr(Ws,n=new Yh({root:s,easing:"easeOutCirc",duration:1500,fixedOffsets:[a]}),n),t(0,s.style.overflowX="hidden",s),t(0,s.style.overflowY="auto",s)});function l(u){ct[u?"unshift":"push"](()=>{a=u,t(1,a)})}function c(u){ct[u?"unshift":"push"](()=>{s=u,t(0,s)})}return[s,a,o,l,c]}class K_ extends ri{constructor(e){super(),si(this,e,X_,j_,kn,{})}}export{K_ as component,$_ as universal};
