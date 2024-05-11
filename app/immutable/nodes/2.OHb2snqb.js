import{y as Oh,z as Uh,q as Kr,k as Vh,s as Bn,n as Z,b as Xt,o as Ki,A as Dr,e as ht,B as yi,h as Hh,C as Qt,i as dr,r as Gr,f as ot,D as Gh}from"../chunks/scheduler.GOssmixh.js";import{q as Ks,a as Wt,n as ea,t as Mt,S as ri,i as si,e as J,s as Re,c as $,d as _e,y as Ye,h as Pe,g as Y,o as V,p as Jn,j as ke,k as U,z as it,A as Rt,B as au,b as on,f as ln,l as Yi,C as lt,D as fl,E as es,F as so,m as Bs,u as di,v as fi,w as pi,x as mi}from"../chunks/index.t7KkFELy.js";import{w as wn}from"../chunks/index.8NwuiTUI.js";const ou=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function yn(r,e){const t=e.token={};function n(i,s,a,o){if(e.token!==t)return;e.resolved=o;let l=e.ctx;a!==void 0&&(l=l.slice(),l[a]=o);const c=i&&(e.current=i)(l);let u=!1;e.block&&(e.blocks?e.blocks.forEach((h,d)=>{d!==s&&h&&(Ks(),Wt(h,1,1,()=>{e.blocks[d]===h&&(e.blocks[d]=null)}),ea())}):e.block.d(1),c.c(),Mt(c,1),c.m(e.mount(),e.anchor),u=!0),e.block=c,e.blocks&&(e.blocks[s]=c),u&&Vh()}if(Oh(r)){const i=Uh();if(r.then(s=>{Kr(i),n(e.then,1,e.value,s),Kr(null)},s=>{if(Kr(i),n(e.catch,2,e.error,s),Kr(null),!e.hasCatch)throw s}),e.current!==e.pending)return n(e.pending,0),!0}else{if(e.current!==e.then)return n(e.then,1,e.value,r),!0;e.resolved=r}}function Fr(r,e,t){const n=e.slice(),{resolved:i}=r;r.current===r.then&&(n[r.value]=i),r.current===r.catch&&(n[r.error]=i),r.block.p(n,t)}function Os(r){return r?.length!==void 0?r:Array.from(r)}const Wh=!1,$y=Object.freeze(Object.defineProperty({__proto__:null,ssr:Wh},Symbol.toStringTag,{value:"Module"}));var ao={d:(r,e)=>{for(var t in e)ao.o(e,t)&&!ao.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:e[t]})},o:(r,e)=>Object.prototype.hasOwnProperty.call(r,e)},lu={};ao.d(lu,{Z:()=>Xh});const qh={root:"body",duration:1e3,easing:"cubic-bezier(0.15, 1, 0.4, 1)",offsets:[],fixedOffsets:[]},oo={speedY:1,speedX:1},jh=[{name:"easeInSine",value:[.12,0,.39,0]},{name:"easeOutSine",value:[.61,1,.88,1]},{name:"easeInOutSine",value:[.37,0,.63,1]},{name:"easeInQuad",value:[.11,0,.5,0]},{name:"easeOutQuad",value:[.5,1,.89,1]},{name:"easeInOutQuad",value:[.45,0,.55,1]},{name:"easeInCubic",value:[.32,0,.67,0]},{name:"easeOutCubic",value:[.33,1,.68,1]},{name:"easeInOutCubic",value:[.65,0,.35,1]},{name:"easeInQuart",value:[.5,0,.75,0]},{name:"easeOutQuart",value:[.25,1,.5,1]},{name:"easeInOutQuart",value:[.76,0,.24,1]},{name:"easeInQuint",value:[.64,0,.78,0]},{name:"easeOutQuint",value:[.22,1,.36,1]},{name:"easeInOutQuint",value:[.83,0,.17,1]},{name:"easeInExpo",value:[.7,0,.84,0]},{name:"easeOutExpo",value:[.16,1,.3,1]},{name:"easeInOutExpo",value:[.87,0,.13,1]},{name:"easeInCirc",value:[.55,0,1,.45]},{name:"easeOutCirc",value:[0,.55,.45,1]},{name:"easeInOutCirc",value:[.85,0,.15,1]}];function Jt(r,e){return typeof r=="string"?e?document.querySelectorAll(r):document.querySelector(r):r}function pl(r,e,t,n){let i=.1,s=typeof Float32Array=="function";function a(d,p){return 1-3*p+3*d}function o(d,p){return 3*p-6*d}function l(d){return 3*d}function c(d,p,g){return((a(p,g)*d+o(p,g))*d+l(p))*d}function u(d,p,g){return 3*a(p,g)*d*d+2*o(p,g)*d+l(p)}if(!(0<=r&&r<=1&&0<=t&&t<=1))throw new Error("bezier x values must be in [0, 1] range");if(r===e&&t===n)return function(d){return d};let h=s?new Float32Array(11):new Array(11);for(let d=0;d<11;++d)h[d]=c(d*i,r,t);return d=>d===0||d===1?d:c(function(p){let g=0,v=1;for(;v!==10&&h[v]<=p;++v)g+=i;--v;let x=g+(p-h[v])/(h[v+1]-h[v])*i,f=u(x,r,t);return f>=.001?function(m,b,_,y){for(let A=0;A<4;++A){let C=u(b,_,y);if(C===0)return b;b-=(c(b,_,y)-m)/C}return b}(p,x,r,t):f===0?x:function(m,b,_,y,A){let C,D,O=0;do D=b+(_-b)/2,C=c(D,y,A)-m,C>0?_=D:b=D;while(Math.abs(C)>1e-7&&++O<10);return D}(p,g,g+i,r,t)}(d),e,n)}var Fs,Xn,In,Zt,Dn,bt,Ar,Ft,Nt,Ns,cu,Us,Vs,uu,Cr,Ut=function(r,e,t,n,i){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?r!==e||!i:!e.has(r))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?i.call(r,t):i?i.value=t:e.set(r,t),t},be=function(r,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?r!==e||!n:!e.has(r))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(r):n?n.value:e.get(r)};class Xh{constructor(e){Fs.add(this),Xn.set(this,void 0),In.set(this,{x:0,y:0}),Zt.set(this,{x:0,y:0}),Dn.set(this,void 0),bt.set(this,void 0),Ar.set(this,void 0),Ft.set(this,[]),Nt.set(this,[]),Ns.set(this,void 0),Us.set(this,t=>{Ut(this,In,{x:be(this,bt,"f").scrollLeft,y:be(this,bt,"f").scrollTop},"f"),be(this,In,"f").x!==void 0&&be(this,In,"f").y!==void 0||Ut(this,In,{x:be(this,bt,"f").scrollX,y:be(this,bt,"f").scrollY},"f"),be(this,Xn,"f").onScroll&&new Promise(n=>{be(this,Xn,"f").onScroll(t),n(!0)})}),Vs.set(this,()=>{if(be(this,Ns,"f"))return;let t=function(o){let l,c=jh.filter(u=>u.name==o);if(l=c[0]?c[0].value:(o=(o=o.split(/([^\(-\)]*)/))[3].split(/,(?![^()]*\()/)).map(u=>parseFloat(u)),Array.isArray(l)&&l.length==4)return l;throw"easing string is invalid."}(be(this,Xn,"f").easing),n=1/(be(this,Xn,"f").duration/10+1);be(this,Zt,"f").x+=pl.apply(null,t)(n)*(be(this,In,"f").x-be(this,Zt,"f").x),be(this,Zt,"f").y+=pl.apply(null,t)(n)*(be(this,In,"f").y-be(this,Zt,"f").y),be(this,Zt,"f").x=Math.ceil(100*be(this,Zt,"f").x)/100,be(this,Zt,"f").y=Math.ceil(100*be(this,Zt,"f").y)/100;let i=-1*be(this,Zt,"f").x,s=-1*be(this,Zt,"f").y,a=`translate3d(${i}px, ${s}px, 0px)`;if(be(this,Dn,"f").fixed.style.webkitTransform=a,be(this,Dn,"f").fixed.style.transform=a,Array.isArray(be(this,Nt,"f")))for(let o=0;o<be(this,Nt,"f").length;o++){let l=Object.assign({},oo,be(this,Nt,"f")[o]),c=`translate3d(${i*(l.speedX-1)}px, ${s*(l.speedY-1)}px, 0)`,u=Jt(l.element,!0);if(NodeList.prototype.isPrototypeOf(u))for(let h of u)h.style.webkitTransform=c,h.style.transform=c;else u.style.webkitTransform=c,u.style.transform=c}if(Array.isArray(be(this,Ft,"f")))for(let o=0;o<be(this,Ft,"f").length;o++){let l=`translate3d(${-i}px, ${-s}px, 0px)`,c=Jt(be(this,Ft,"f")[o],!0);if(NodeList.prototype.isPrototypeOf(c))for(let u of c)u.style.webkitTransform=l,u.style.transform=l;else c.style.webkitTransform=l,c.style.transform=l}requestAnimationFrame(()=>be(this,Vs,"f").call(this))}),Cr.set(this,()=>{be(this,Dn,"f")!==void 0&&(be(this,Dn,"f").dummy.style.height=be(this,Dn,"f").fixed.scrollHeight+"px")}),Ut(this,Xn,Object.assign({},qh,e),"f"),Ut(this,bt,Jt(e.root),"f"),e.fixedOffsets!==void 0&&Ut(this,Ft,e.fixedOffsets,"f"),e.offsets!==void 0&&Ut(this,Nt,e.offsets,"f"),function(){let t=!1;var n;return n=navigator.userAgent||navigator.vendor,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(n)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(n.substring(0,4)))&&(t=!0),!t&&CSS.supports&&(t=!CSS.supports("position","sticky")),!t}()?be(this,Fs,"m",cu).call(this):be(this,Fs,"m",uu).call(this)}destroy(){let e=be(this,bt,"f").querySelector("._SS_wrapper");be(this,bt,"f").removeEventListener("scroll",be(this,Us,"f")),be(this,bt,"f").removeEventListener("resize",be(this,Cr,"f")),be(this,Ar,"f").disconnect();for(let n=e.children.length;n>0;n--)e.children[n-1].removeProperty&&e.children[n-1].removeProperty("transform"),be(this,bt,"f").insertBefore(e.children[n-1],be(this,bt,"f").children[0]);function t(n){n&&n.forEach(i=>{let s=Jt(i.element,!0);if(i.element||(s=Jt(i,!0)),NodeList.prototype.isPrototypeOf(s))for(i of s)i.style.removeProperty("transform"),i.style.removeProperty("-webkit-transform");else s.style.removeProperty("transform"),s.style.removeProperty("-webkit-transform")})}e.remove(),Jt(be(this,Xn,"f").root).querySelector("._SS_dummy").remove(),be(this,bt,"f").style.removeProperty("overflow"),be(this,bt,"f").style.removeProperty("position"),Ut(this,Ns,!0,"f"),t(be(this,Nt,"f")),t(be(this,Ft,"f"))}removeOffset(e){Ut(this,Nt,be(this,Nt,"f").filter(n=>n.element!==e),"f"),Ut(this,Nt,be(this,Nt,"f").filter(n=>n.element!==Jt(e,!0)),"f"),Ut(this,Ft,be(this,Ft,"f").filter(n=>n!==e),"f"),Ut(this,Ft,be(this,Ft,"f").filter(n=>n!==Jt(e,!0)),"f");let t=Jt(e,!0);if(NodeList.prototype.isPrototypeOf(t))for(let n of t)n.style.removeProperty("transform"),n.style.removeProperty("-webkit-transform"),n.style.position=="fixed"&&n.style.removeProperty("position");else t.style.removeProperty("transform"),t.style.removeProperty("-webkit-transform"),t.style.position=="fixed"&&t.style.removeProperty("position")}addOffset(e){typeof e=="object"&&!be(this,Nt,"f").find(t=>t.element==e.element)&&e.element&&(e=Object.assign({},oo,e),be(this,Nt,"f").push(e))}addFixedOffset(e){Jt(e,!0)&&!be(this,Ft,"f").includes(e)&&be(this,Ft,"f").push(e)}}Xn=new WeakMap,In=new WeakMap,Zt=new WeakMap,Dn=new WeakMap,bt=new WeakMap,Ar=new WeakMap,Ft=new WeakMap,Nt=new WeakMap,Ns=new WeakMap,Us=new WeakMap,Vs=new WeakMap,Cr=new WeakMap,Fs=new WeakSet,cu=function(){Ut(this,Dn,function(e){getComputedStyle(e).position=="absolute"&&getComputedStyle(e).position=="fixed"||(e.style.position="relative");let t=document.createElement("div"),n=document.createElement("div");t.classList.add("_SS_wrapper"),n.classList.add("_SS_dummy");for(let i=e.children.length;i>0;i--)t.insertBefore(e.children[i-1],t.children[0]);return e.innerHTML="",e.style.overflow="auto",e.appendChild(t),e.appendChild(n),n.style.height=t.scrollHeight+"px",n.style.width=t.scrollWidth+"px",n.style.top="0px",n.style.left="0px",n.style.position="absolute",n.style.zIndex="-9999",t.style.zIndex="1",t.style.height="100%",t.style.width="100%",t.style.overflow="visible",t.style.top="0px",t.style.left="0px",t.style.position="sticky",{fixed:e.querySelector("div._SS_wrapper"),dummy:e.querySelector("div._SS_dummy")}}(be(this,bt,"f")),"f");let r=new WebKitCSSMatrix(window.getComputedStyle(be(this,Dn,"f").fixed).transform);Ut(this,In,{x:r.m41,y:r.m42},"f"),Ut(this,Ar,new MutationObserver(be(this,Cr,"f")),"f"),be(this,Ar,"f").observe(be(this,bt,"f"),{childList:!0,attributes:!0,subtree:!0}),window.addEventListener("resize",be(this,Cr,"f")),be(this,bt,"f").addEventListener("scroll",be(this,Us,"f")),be(this,Vs,"f").call(this)},uu=function(){be(this,bt,"f").addEventListener("scroll",r=>{be(this,Nt,"f")&&be(this,Nt,"f").forEach(e=>{e=Object.assign({},oo,e);let t=`translate3d(${r.target.scrollLeft*(1-e.speedX)}px, ${r.target.scrollTop*(1-e.speedY)}px, 0px)`,n=Jt(e.element,!0);if(Symbol.iterator in Object(n))for(let i of n)i.style.webkitTransform=t,i.style.transform=t;else n.style.webkitTransform=t,n.style.transform=t})}),be(this,Ft,"f")&&be(this,Ft,"f").forEach(r=>{let e=Jt(r,!0);if(Symbol.iterator in Object(e))for(let t of e)t.style.position="fixed";else e.style.position="fixed"})};var Yh=lu.Z;let Hs=wn(),zs=wn(!1),Co=wn(0),lo=wn(!1),co=wn(),uo=wn(),ho=wn(),Lo=wn([]),hu,er=new Promise(r=>hu=r),du,Zh=new Promise(r=>du=r);const Ro=wn(),fu=wn();async function Nr(r){const e=new Promise(async(t,n)=>{const i=await(await fetch(r)).blob(),s=new FileReader;s.readAsDataURL(i),s.onload=()=>t(s.result),s.onerror=a=>n(a)});return Lo.update(t=>[...t,e]),e}function ml(r){return new Promise(async e=>{const n=await(await fetch(r)).json();e(n)})}function Gs(r,e){const t=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting&&(e(i),t.disconnect())})},{root:null,threshold:.4});t.observe(r)}function Jh(){const r="font-size: 1.2rem; font-weight: bold;";console.log("%cLooks like you're a developer.",r+"color: #22c55e;"),console.log("%cInterested in how this site works?",r+"color: #22c55e;"),console.log("%cCheckout the source code: https://github.com/Musab-Hassan/musabhassan.com",r)}var pu={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},Po={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},$h=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],Ws={CSS:{},springs:{}};function xn(r,e,t){return Math.min(Math.max(r,e),t)}function Lr(r,e){return r.indexOf(e)>-1}function xa(r,e){return r.apply(null,e)}var Ce={arr:function(r){return Array.isArray(r)},obj:function(r){return Lr(Object.prototype.toString.call(r),"Object")},pth:function(r){return Ce.obj(r)&&r.hasOwnProperty("totalLength")},svg:function(r){return r instanceof SVGElement},inp:function(r){return r instanceof HTMLInputElement},dom:function(r){return r.nodeType||Ce.svg(r)},str:function(r){return typeof r=="string"},fnc:function(r){return typeof r=="function"},und:function(r){return typeof r>"u"},nil:function(r){return Ce.und(r)||r===null},hex:function(r){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(r)},rgb:function(r){return/^rgb/.test(r)},hsl:function(r){return/^hsl/.test(r)},col:function(r){return Ce.hex(r)||Ce.rgb(r)||Ce.hsl(r)},key:function(r){return!pu.hasOwnProperty(r)&&!Po.hasOwnProperty(r)&&r!=="targets"&&r!=="keyframes"}};function mu(r){var e=/\(([^)]+)\)/.exec(r);return e?e[1].split(",").map(function(t){return parseFloat(t)}):[]}function gu(r,e){var t=mu(r),n=xn(Ce.und(t[0])?1:t[0],.1,100),i=xn(Ce.und(t[1])?100:t[1],.1,100),s=xn(Ce.und(t[2])?10:t[2],.1,100),a=xn(Ce.und(t[3])?0:t[3],.1,100),o=Math.sqrt(i/n),l=s/(2*Math.sqrt(i*n)),c=l<1?o*Math.sqrt(1-l*l):0,u=1,h=l<1?(l*o+-a)/c:-a+o;function d(g){var v=e?e*g/1e3:g;return l<1?v=Math.exp(-v*l*o)*(u*Math.cos(c*v)+h*Math.sin(c*v)):v=(u+h*v)*Math.exp(-v*o),g===0||g===1?g:1-v}function p(){var g=Ws.springs[r];if(g)return g;for(var v=1/6,x=0,f=0;;)if(x+=v,d(x)===1){if(f++,f>=16)break}else f=0;var m=x*v*1e3;return Ws.springs[r]=m,m}return e?d:p}function Qh(r){return r===void 0&&(r=10),function(e){return Math.ceil(xn(e,1e-6,1)*r)*(1/r)}}var Kh=function(){var r=11,e=1/(r-1);function t(u,h){return 1-3*h+3*u}function n(u,h){return 3*h-6*u}function i(u){return 3*u}function s(u,h,d){return((t(h,d)*u+n(h,d))*u+i(h))*u}function a(u,h,d){return 3*t(h,d)*u*u+2*n(h,d)*u+i(h)}function o(u,h,d,p,g){var v,x,f=0;do x=h+(d-h)/2,v=s(x,p,g)-u,v>0?d=x:h=x;while(Math.abs(v)>1e-7&&++f<10);return x}function l(u,h,d,p){for(var g=0;g<4;++g){var v=a(h,d,p);if(v===0)return h;var x=s(h,d,p)-u;h-=x/v}return h}function c(u,h,d,p){if(!(0<=u&&u<=1&&0<=d&&d<=1))return;var g=new Float32Array(r);if(u!==h||d!==p)for(var v=0;v<r;++v)g[v]=s(v*e,u,d);function x(f){for(var m=0,b=1,_=r-1;b!==_&&g[b]<=f;++b)m+=e;--b;var y=(f-g[b])/(g[b+1]-g[b]),A=m+y*e,C=a(A,u,d);return C>=.001?l(f,A,u,d):C===0?A:o(f,m,m+e,u,d)}return function(f){return u===h&&d===p||f===0||f===1?f:s(x(f),h,p)}}return c}(),vu=function(){var r={linear:function(){return function(n){return n}}},e={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Expo:function(){return function(n){return n?Math.pow(2,10*n-10):0}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var i,s=4;n<((i=Math.pow(2,--s))-1)/11;);return 1/Math.pow(4,3-s)-7.5625*Math.pow((i*3-2)/22-n,2)}},Elastic:function(n,i){n===void 0&&(n=1),i===void 0&&(i=.5);var s=xn(n,1,10),a=xn(i,.1,2);return function(o){return o===0||o===1?o:-s*Math.pow(2,10*(o-1))*Math.sin((o-1-a/(Math.PI*2)*Math.asin(1/s))*(Math.PI*2)/a)}}},t=["Quad","Cubic","Quart","Quint"];return t.forEach(function(n,i){e[n]=function(){return function(s){return Math.pow(s,i+2)}}}),Object.keys(e).forEach(function(n){var i=e[n];r["easeIn"+n]=i,r["easeOut"+n]=function(s,a){return function(o){return 1-i(s,a)(1-o)}},r["easeInOut"+n]=function(s,a){return function(o){return o<.5?i(s,a)(o*2)/2:1-i(s,a)(o*-2+2)/2}},r["easeOutIn"+n]=function(s,a){return function(o){return o<.5?(1-i(s,a)(1-o*2))/2:(i(s,a)(o*2-1)+1)/2}}}),r}();function Io(r,e){if(Ce.fnc(r))return r;var t=r.split("(")[0],n=vu[t],i=mu(r);switch(t){case"spring":return gu(r,e);case"cubicBezier":return xa(Kh,i);case"steps":return xa(Qh,i);default:return xa(n,i)}}function xu(r){try{var e=document.querySelectorAll(r);return e}catch{return}}function ta(r,e){for(var t=r.length,n=arguments.length>=2?arguments[1]:void 0,i=[],s=0;s<t;s++)if(s in r){var a=r[s];e.call(n,a,s,r)&&i.push(a)}return i}function na(r){return r.reduce(function(e,t){return e.concat(Ce.arr(t)?na(t):t)},[])}function gl(r){return Ce.arr(r)?r:(Ce.str(r)&&(r=xu(r)||r),r instanceof NodeList||r instanceof HTMLCollection?[].slice.call(r):[r])}function Do(r,e){return r.some(function(t){return t===e})}function Fo(r){var e={};for(var t in r)e[t]=r[t];return e}function fo(r,e){var t=Fo(r);for(var n in r)t[n]=e.hasOwnProperty(n)?e[n]:r[n];return t}function ia(r,e){var t=Fo(r);for(var n in e)t[n]=Ce.und(r[n])?e[n]:r[n];return t}function ed(r){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(r);return e?"rgba("+e[1]+",1)":r}function td(r){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,t=r.replace(e,function(o,l,c,u){return l+l+c+c+u+u}),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),i=parseInt(n[1],16),s=parseInt(n[2],16),a=parseInt(n[3],16);return"rgba("+i+","+s+","+a+",1)"}function nd(r){var e=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(r)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(r),t=parseInt(e[1],10)/360,n=parseInt(e[2],10)/100,i=parseInt(e[3],10)/100,s=e[4]||1;function a(d,p,g){return g<0&&(g+=1),g>1&&(g-=1),g<1/6?d+(p-d)*6*g:g<1/2?p:g<2/3?d+(p-d)*(2/3-g)*6:d}var o,l,c;if(n==0)o=l=c=i;else{var u=i<.5?i*(1+n):i+n-i*n,h=2*i-u;o=a(h,u,t+1/3),l=a(h,u,t),c=a(h,u,t-1/3)}return"rgba("+o*255+","+l*255+","+c*255+","+s+")"}function id(r){if(Ce.rgb(r))return ed(r);if(Ce.hex(r))return td(r);if(Ce.hsl(r))return nd(r)}function Nn(r){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(r);if(e)return e[1]}function rd(r){if(Lr(r,"translate")||r==="perspective")return"px";if(Lr(r,"rotate")||Lr(r,"skew"))return"deg"}function po(r,e){return Ce.fnc(r)?r(e.target,e.id,e.total):r}function _n(r,e){return r.getAttribute(e)}function No(r,e,t){var n=Nn(e);if(Do([t,"deg","rad","turn"],n))return e;var i=Ws.CSS[e+t];if(!Ce.und(i))return i;var s=100,a=document.createElement(r.tagName),o=r.parentNode&&r.parentNode!==document?r.parentNode:document.body;o.appendChild(a),a.style.position="absolute",a.style.width=s+t;var l=s/a.offsetWidth;o.removeChild(a);var c=l*parseFloat(e);return Ws.CSS[e+t]=c,c}function _u(r,e,t){if(e in r.style){var n=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),i=r.style[e]||getComputedStyle(r).getPropertyValue(n)||"0";return t?No(r,i,t):i}}function zo(r,e){if(Ce.dom(r)&&!Ce.inp(r)&&(!Ce.nil(_n(r,e))||Ce.svg(r)&&r[e]))return"attribute";if(Ce.dom(r)&&Do($h,e))return"transform";if(Ce.dom(r)&&e!=="transform"&&_u(r,e))return"css";if(r[e]!=null)return"object"}function yu(r){if(Ce.dom(r)){for(var e=r.style.transform||"",t=/(\w+)\(([^)]*)\)/g,n=new Map,i;i=t.exec(e);)n.set(i[1],i[2]);return n}}function sd(r,e,t,n){var i=Lr(e,"scale")?1:0+rd(e),s=yu(r).get(e)||i;return t&&(t.transforms.list.set(e,s),t.transforms.last=e),n?No(r,s,n):s}function ko(r,e,t,n){switch(zo(r,e)){case"transform":return sd(r,e,n,t);case"css":return _u(r,e,t);case"attribute":return _n(r,e);default:return r[e]||0}}function Bo(r,e){var t=/^(\*=|\+=|-=)/.exec(r);if(!t)return r;var n=Nn(r)||0,i=parseFloat(e),s=parseFloat(r.replace(t[0],""));switch(t[0][0]){case"+":return i+s+n;case"-":return i-s+n;case"*":return i*s+n}}function bu(r,e){if(Ce.col(r))return id(r);if(/\s/g.test(r))return r;var t=Nn(r),n=t?r.substr(0,r.length-t.length):r;return e?n+e:n}function Oo(r,e){return Math.sqrt(Math.pow(e.x-r.x,2)+Math.pow(e.y-r.y,2))}function ad(r){return Math.PI*2*_n(r,"r")}function od(r){return _n(r,"width")*2+_n(r,"height")*2}function ld(r){return Oo({x:_n(r,"x1"),y:_n(r,"y1")},{x:_n(r,"x2"),y:_n(r,"y2")})}function Mu(r){for(var e=r.points,t=0,n,i=0;i<e.numberOfItems;i++){var s=e.getItem(i);i>0&&(t+=Oo(n,s)),n=s}return t}function cd(r){var e=r.points;return Mu(r)+Oo(e.getItem(e.numberOfItems-1),e.getItem(0))}function wu(r){if(r.getTotalLength)return r.getTotalLength();switch(r.tagName.toLowerCase()){case"circle":return ad(r);case"rect":return od(r);case"line":return ld(r);case"polyline":return Mu(r);case"polygon":return cd(r)}}function ud(r){var e=wu(r);return r.setAttribute("stroke-dasharray",e),e}function hd(r){for(var e=r.parentNode;Ce.svg(e)&&Ce.svg(e.parentNode);)e=e.parentNode;return e}function Su(r,e){var t=e||{},n=t.el||hd(r),i=n.getBoundingClientRect(),s=_n(n,"viewBox"),a=i.width,o=i.height,l=t.viewBox||(s?s.split(" "):[0,0,a,o]);return{el:n,viewBox:l,x:l[0]/1,y:l[1]/1,w:a,h:o,vW:l[2],vH:l[3]}}function dd(r,e){var t=Ce.str(r)?xu(r)[0]:r,n=e||100;return function(i){return{property:i,el:t,svg:Su(t),totalLength:wu(t)*(n/100)}}}function fd(r,e,t){function n(u){u===void 0&&(u=0);var h=e+u>=1?e+u:0;return r.el.getPointAtLength(h)}var i=Su(r.el,r.svg),s=n(),a=n(-1),o=n(1),l=t?1:i.w/i.vW,c=t?1:i.h/i.vH;switch(r.property){case"x":return(s.x-i.x)*l;case"y":return(s.y-i.y)*c;case"angle":return Math.atan2(o.y-a.y,o.x-a.x)*180/Math.PI}}function vl(r,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,n=bu(Ce.pth(r)?r.totalLength:r,e)+"";return{original:n,numbers:n.match(t)?n.match(t).map(Number):[0],strings:Ce.str(r)||e?n.split(t):[]}}function Uo(r){var e=r?na(Ce.arr(r)?r.map(gl):gl(r)):[];return ta(e,function(t,n,i){return i.indexOf(t)===n})}function Tu(r){var e=Uo(r);return e.map(function(t,n){return{target:t,id:n,total:e.length,transforms:{list:yu(t)}}})}function pd(r,e){var t=Fo(e);if(/^spring/.test(t.easing)&&(t.duration=gu(t.easing)),Ce.arr(r)){var n=r.length,i=n===2&&!Ce.obj(r[0]);i?r={value:r}:Ce.fnc(e.duration)||(t.duration=e.duration/n)}var s=Ce.arr(r)?r:[r];return s.map(function(a,o){var l=Ce.obj(a)&&!Ce.pth(a)?a:{value:a};return Ce.und(l.delay)&&(l.delay=o?0:e.delay),Ce.und(l.endDelay)&&(l.endDelay=o===s.length-1?e.endDelay:0),l}).map(function(a){return ia(a,t)})}function md(r){for(var e=ta(na(r.map(function(s){return Object.keys(s)})),function(s){return Ce.key(s)}).reduce(function(s,a){return s.indexOf(a)<0&&s.push(a),s},[]),t={},n=function(s){var a=e[s];t[a]=r.map(function(o){var l={};for(var c in o)Ce.key(c)?c==a&&(l.value=o[c]):l[c]=o[c];return l})},i=0;i<e.length;i++)n(i);return t}function gd(r,e){var t=[],n=e.keyframes;n&&(e=ia(md(n),e));for(var i in e)Ce.key(i)&&t.push({name:i,tweens:pd(e[i],r)});return t}function vd(r,e){var t={};for(var n in r){var i=po(r[n],e);Ce.arr(i)&&(i=i.map(function(s){return po(s,e)}),i.length===1&&(i=i[0])),t[n]=i}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}function xd(r,e){var t;return r.tweens.map(function(n){var i=vd(n,e),s=i.value,a=Ce.arr(s)?s[1]:s,o=Nn(a),l=ko(e.target,r.name,o,e),c=t?t.to.original:l,u=Ce.arr(s)?s[0]:c,h=Nn(u)||Nn(l),d=o||h;return Ce.und(a)&&(a=c),i.from=vl(u,d),i.to=vl(Bo(a,u),d),i.start=t?t.end:0,i.end=i.start+i.delay+i.duration+i.endDelay,i.easing=Io(i.easing,i.duration),i.isPath=Ce.pth(s),i.isPathTargetInsideSVG=i.isPath&&Ce.svg(e.target),i.isColor=Ce.col(i.from.original),i.isColor&&(i.round=1),t=i,i})}var Eu={css:function(r,e,t){return r.style[e]=t},attribute:function(r,e,t){return r.setAttribute(e,t)},object:function(r,e,t){return r[e]=t},transform:function(r,e,t,n,i){if(n.list.set(e,t),e===n.last||i){var s="";n.list.forEach(function(a,o){s+=o+"("+a+") "}),r.style.transform=s}}};function Au(r,e){var t=Tu(r);t.forEach(function(n){for(var i in e){var s=po(e[i],n),a=n.target,o=Nn(s),l=ko(a,i,o,n),c=o||Nn(l),u=Bo(bu(s,c),l),h=zo(a,i);Eu[h](a,i,u,n.transforms,!0)}})}function _d(r,e){var t=zo(r.target,e.name);if(t){var n=xd(e,r),i=n[n.length-1];return{type:t,property:e.name,animatable:r,tweens:n,duration:i.end,delay:n[0].delay,endDelay:i.endDelay}}}function yd(r,e){return ta(na(r.map(function(t){return e.map(function(n){return _d(t,n)})})),function(t){return!Ce.und(t)})}function Cu(r,e){var t=r.length,n=function(s){return s.timelineOffset?s.timelineOffset:0},i={};return i.duration=t?Math.max.apply(Math,r.map(function(s){return n(s)+s.duration})):e.duration,i.delay=t?Math.min.apply(Math,r.map(function(s){return n(s)+s.delay})):e.delay,i.endDelay=t?i.duration-Math.max.apply(Math,r.map(function(s){return n(s)+s.duration-s.endDelay})):e.endDelay,i}var xl=0;function bd(r){var e=fo(pu,r),t=fo(Po,r),n=gd(t,r),i=Tu(r.targets),s=yd(i,n),a=Cu(s,t),o=xl;return xl++,ia(e,{id:o,children:[],animatables:i,animations:s,duration:a.duration,delay:a.delay,endDelay:a.endDelay})}var an=[],Lu=function(){var r;function e(){!r&&(!_l()||!Je.suspendWhenDocumentHidden)&&an.length>0&&(r=requestAnimationFrame(t))}function t(i){for(var s=an.length,a=0;a<s;){var o=an[a];o.paused?(an.splice(a,1),s--):(o.tick(i),a++)}r=a>0?requestAnimationFrame(t):void 0}function n(){Je.suspendWhenDocumentHidden&&(_l()?r=cancelAnimationFrame(r):(an.forEach(function(i){return i._onDocumentVisibility()}),Lu()))}return typeof document<"u"&&document.addEventListener("visibilitychange",n),e}();function _l(){return!!document&&document.hidden}function Je(r){r===void 0&&(r={});var e=0,t=0,n=0,i,s=0,a=null;function o(m){var b=window.Promise&&new Promise(function(_){return a=_});return m.finished=b,b}var l=bd(r);o(l);function c(){var m=l.direction;m!=="alternate"&&(l.direction=m!=="normal"?"normal":"reverse"),l.reversed=!l.reversed,i.forEach(function(b){return b.reversed=l.reversed})}function u(m){return l.reversed?l.duration-m:m}function h(){e=0,t=u(l.currentTime)*(1/Je.speed)}function d(m,b){b&&b.seek(m-b.timelineOffset)}function p(m){if(l.reversePlayback)for(var _=s;_--;)d(m,i[_]);else for(var b=0;b<s;b++)d(m,i[b])}function g(m){for(var b=0,_=l.animations,y=_.length;b<y;){var A=_[b],C=A.animatable,D=A.tweens,O=D.length-1,k=D[O];O&&(k=ta(D,function(j){return m<j.end})[0]||k);for(var P=xn(m-k.start-k.delay,0,k.duration)/k.duration,M=isNaN(P)?1:k.easing(P),w=k.to.strings,N=k.round,z=[],L=k.to.numbers.length,F=void 0,K=0;K<L;K++){var ae=void 0,G=k.to.numbers[K],W=k.from.numbers[K]||0;k.isPath?ae=fd(k.value,M*G,k.isPathTargetInsideSVG):ae=W+M*(G-W),N&&(k.isColor&&K>2||(ae=Math.round(ae*N)/N)),z.push(ae)}var Q=w.length;if(!Q)F=z[0];else{F=w[0];for(var ee=0;ee<Q;ee++){w[ee];var re=w[ee+1],ce=z[ee];isNaN(ce)||(re?F+=ce+re:F+=ce+" ")}}Eu[A.type](C.target,A.property,F,C.transforms),A.currentValue=F,b++}}function v(m){l[m]&&!l.passThrough&&l[m](l)}function x(){l.remaining&&l.remaining!==!0&&l.remaining--}function f(m){var b=l.duration,_=l.delay,y=b-l.endDelay,A=u(m);l.progress=xn(A/b*100,0,100),l.reversePlayback=A<l.currentTime,i&&p(A),!l.began&&l.currentTime>0&&(l.began=!0,v("begin")),!l.loopBegan&&l.currentTime>0&&(l.loopBegan=!0,v("loopBegin")),A<=_&&l.currentTime!==0&&g(0),(A>=y&&l.currentTime!==b||!b)&&g(b),A>_&&A<y?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,v("changeBegin")),v("change"),g(A)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,v("changeComplete")),l.currentTime=xn(A,0,b),l.began&&v("update"),m>=b&&(t=0,x(),l.remaining?(e=n,v("loopComplete"),l.loopBegan=!1,l.direction==="alternate"&&c()):(l.paused=!0,l.completed||(l.completed=!0,v("loopComplete"),v("complete"),!l.passThrough&&"Promise"in window&&(a(),o(l)))))}return l.reset=function(){var m=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.loopBegan=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed=m==="reverse",l.remaining=l.loop,i=l.children,s=i.length;for(var b=s;b--;)l.children[b].reset();(l.reversed&&l.loop!==!0||m==="alternate"&&l.loop===1)&&l.remaining++,g(l.reversed?l.duration:0)},l._onDocumentVisibility=h,l.set=function(m,b){return Au(m,b),l},l.tick=function(m){n=m,e||(e=n),f((n+(t-e))*Je.speed)},l.seek=function(m){f(u(m))},l.pause=function(){l.paused=!0,h()},l.play=function(){l.paused&&(l.completed&&l.reset(),l.paused=!1,an.push(l),h(),Lu())},l.reverse=function(){c(),l.completed=!l.reversed,h()},l.restart=function(){l.reset(),l.play()},l.remove=function(m){var b=Uo(m);Ru(b,l)},l.reset(),l.autoplay&&l.play(),l}function yl(r,e){for(var t=e.length;t--;)Do(r,e[t].animatable.target)&&e.splice(t,1)}function Ru(r,e){var t=e.animations,n=e.children;yl(r,t);for(var i=n.length;i--;){var s=n[i],a=s.animations;yl(r,a),!a.length&&!s.children.length&&n.splice(i,1)}!t.length&&!n.length&&e.pause()}function Md(r){for(var e=Uo(r),t=an.length;t--;){var n=an[t];Ru(e,n)}}function wd(r,e){e===void 0&&(e={});var t=e.direction||"normal",n=e.easing?Io(e.easing):null,i=e.grid,s=e.axis,a=e.from||0,o=a==="first",l=a==="center",c=a==="last",u=Ce.arr(r),h=parseFloat(u?r[0]:r),d=u?parseFloat(r[1]):0,p=Nn(u?r[1]:r)||0,g=e.start||0+(u?h:0),v=[],x=0;return function(f,m,b){if(o&&(a=0),l&&(a=(b-1)/2),c&&(a=b-1),!v.length){for(var _=0;_<b;_++){if(!i)v.push(Math.abs(a-_));else{var y=l?(i[0]-1)/2:a%i[0],A=l?(i[1]-1)/2:Math.floor(a/i[0]),C=_%i[0],D=Math.floor(_/i[0]),O=y-C,k=A-D,P=Math.sqrt(O*O+k*k);s==="x"&&(P=-O),s==="y"&&(P=-k),v.push(P)}x=Math.max.apply(Math,v)}n&&(v=v.map(function(w){return n(w/x)*x})),t==="reverse"&&(v=v.map(function(w){return s?w<0?w*-1:-w:Math.abs(x-w)}))}var M=u?(d-h)/x:h;return g+M*(Math.round(v[m]*100)/100)+p}}function Sd(r){r===void 0&&(r={});var e=Je(r);return e.duration=0,e.add=function(t,n){var i=an.indexOf(e),s=e.children;i>-1&&an.splice(i,1);function a(d){d.passThrough=!0}for(var o=0;o<s.length;o++)a(s[o]);var l=ia(t,fo(Po,r));l.targets=l.targets||r.targets;var c=e.duration;l.autoplay=!1,l.direction=e.direction,l.timelineOffset=Ce.und(n)?c:Bo(n,c),a(e),e.seek(l.timelineOffset);var u=Je(l);a(u),s.push(u);var h=Cu(s,r);return e.delay=h.delay,e.endDelay=h.endDelay,e.duration=h.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e}Je.version="3.2.1";Je.speed=1;Je.suspendWhenDocumentHidden=!0;Je.running=an;Je.remove=Md;Je.get=ko;Je.set=Au;Je.convertPx=No;Je.path=dd;Je.setDashoffset=ud;Je.stagger=wd;Je.timeline=Sd;Je.easing=Io;Je.penner=vu;Je.random=function(r,e){return Math.floor(Math.random()*(e-r+1))+r};function Td(r){return{c:Z,l:Z,m:Z,d:Z}}function Ed(r){let e,t;return{c(){e=J("img"),this.h()},l(n){e=$(n,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){yi(e.src,t=r[21])||V(e,"src",t),V(e,"alt",""),V(e,"class","svelte-1v57rq0")},m(n,i){ke(n,e,i)},d(n){n&&Y(e)}}}function Ad(r){return{c:Z,l:Z,m:Z,d:Z}}function Cd(r){return{c:Z,l:Z,m:Z,p:Z,d:Z}}function Ld(r){let e,t;return{c(){e=J("img"),this.h()},l(n){e=$(n,"IMG",{src:!0,draggable:!0,alt:!0,style:!0,class:!0}),this.h()},h(){yi(e.src,t=r[21])||V(e,"src",t),V(e,"draggable","false"),V(e,"alt","Home Background"),Jn(e,"width","100%"),Jn(e,"height","100%"),Jn(e,"object-fit","cover"),V(e,"class","svelte-1v57rq0")},m(n,i){ke(n,e,i),r[11](e)},p:Z,d(n){n&&Y(e),r[11](null)}}}function Rd(r){return{c:Z,l:Z,m:Z,p:Z,d:Z}}function Pd(r){let e,t,n,i,s="",a,o,l,c,u,h="Евгения",d,p,g,v,x,f="Родина",m,b,_,y="художник, специалист в области иконописи и росписи храмов, Россия",A,C,D,O,k,P,M="scroll",w,N,z={ctx:r,current:null,token:null,hasCatch:!1,pending:Ad,then:Ed,catch:Td,value:21};yn(Nr("assets/imgs/scroll_arrow.png"),z);let L={ctx:r,current:null,token:null,hasCatch:!1,pending:Rd,then:Ld,catch:Cd,value:21};return yn(Nr("assets/imgs/home-back.jpg"),L),{c(){e=J("div"),t=J("div"),n=J("div"),i=J("div"),i.innerHTML=s,a=Re(),o=J("div"),l=J("h1"),c=J("div"),u=J("div"),u.textContent=h,d=Re(),p=J("br"),g=Re(),v=J("div"),x=J("div"),x.textContent=f,m=Re(),b=J("div"),_=J("p"),_.textContent=y,A=Re(),C=J("div"),D=J("div"),O=J("div"),z.block.c(),k=Re(),P=J("div"),P.textContent=M,w=Re(),N=J("div"),L.block.c(),this.h()},l(F){e=$(F,"DIV",{id:!0,style:!0,class:!0});var K=_e(e);t=$(K,"DIV",{class:!0});var ae=_e(t);n=$(ae,"DIV",{class:!0});var G=_e(n);i=$(G,"DIV",{class:!0,"data-svelte-h":!0}),Ye(i)!=="svelte-ws33f2"&&(i.innerHTML=s),a=Pe(G),o=$(G,"DIV",{class:!0});var W=_e(o);l=$(W,"H1",{class:!0});var Q=_e(l);c=$(Q,"DIV",{class:!0});var ee=_e(c);u=$(ee,"DIV",{class:!0,"data-svelte-h":!0}),Ye(u)!=="svelte-ljur9j"&&(u.textContent=h),d=Pe(ee),ee.forEach(Y),p=$(Q,"BR",{class:!0}),g=Pe(Q),v=$(Q,"DIV",{class:!0});var re=_e(v);x=$(re,"DIV",{class:!0,"data-svelte-h":!0}),Ye(x)!=="svelte-dx5kzw"&&(x.textContent=f),re.forEach(Y),Q.forEach(Y),m=Pe(W),b=$(W,"DIV",{class:!0});var ce=_e(b);_=$(ce,"P",{class:!0,"data-svelte-h":!0}),Ye(_)!=="svelte-1fi2rfr"&&(_.textContent=y),ce.forEach(Y),A=Pe(W),C=$(W,"DIV",{class:!0});var j=_e(C);D=$(j,"DIV",{class:!0});var de=_e(D);O=$(de,"DIV",{class:!0});var we=_e(O);z.block.l(we),we.forEach(Y),k=Pe(de),P=$(de,"DIV",{class:!0,"data-svelte-h":!0}),Ye(P)!=="svelte-1abg4og"&&(P.textContent=M),de.forEach(Y),j.forEach(Y),W.forEach(Y),w=Pe(G),N=$(G,"DIV",{class:!0});var ve=_e(N);L.block.l(ve),ve.forEach(Y),G.forEach(Y),ae.forEach(Y),K.forEach(Y),this.h()},h(){V(i,"class","flex-wrapper first svelte-1v57rq0"),V(u,"class","word svelte-1v57rq0"),V(c,"class","title-mask svelte-1v57rq0"),V(p,"class","svelte-1v57rq0"),V(x,"class","word svelte-1v57rq0"),V(v,"class","title-mask svelte-1v57rq0"),V(l,"class","title svelte-1v57rq0"),V(_,"class","paragraph svelte-1v57rq0"),V(b,"class","occupation mask svelte-1v57rq0"),V(O,"class","mask svelte-1v57rq0"),V(P,"class","svelte-1v57rq0"),V(D,"class","action svelte-1v57rq0"),V(C,"class","wrapper action-mask svelte-1v57rq0"),V(o,"class","flex-wrapper second svelte-1v57rq0"),V(N,"class","parallax-wrapper home-back svelte-1v57rq0"),V(n,"class","flex svelte-1v57rq0"),V(t,"class","content-wrapper svelte-1v57rq0"),V(e,"id","content-container"),Jn(e,"padding-top","23vh"),V(e,"class","svelte-1v57rq0")},m(F,K){ke(F,e,K),U(e,t),U(t,n),U(n,i),U(n,a),U(n,o),U(o,l),U(l,c),U(c,u),r[7](u),U(c,d),U(l,p),U(l,g),U(l,v),U(v,x),r[8](x),U(o,m),U(o,b),U(b,_),r[9](_),U(o,A),U(o,C),U(C,D),U(D,O),z.block.m(O,z.anchor=null),z.mount=()=>O,z.anchor=null,U(D,k),U(D,P),r[10](D),U(n,w),U(n,N),L.block.m(N,L.anchor=null),L.mount=()=>N,L.anchor=null,r[12](N),r[13](e)},p(F,[K]){r=F,Fr(L,r,K)},i:Z,o:Z,d(F){F&&Y(e),r[7](null),r[8](null),r[9](null),z.block.d(),z.token=null,z=null,r[10](null),L.block.d(),L.token=null,L=null,r[12](null),r[13](null)}}}function Id(r,e,t){let n,i;Xt(r,Hs,D=>t(14,n=D)),Xt(r,co,D=>t(15,i=D));let s,a,o,l,c,u,h,d,p,g,v;Ki(async()=>{await er,Dr(co,i=s,i),n.addOffset({element:a,speedY:.8}),x()});function x(){const D=[{strokeDashoffset:"0"}];d.animate(D,{duration:1e3,delay:500,easing:"cubic-bezier(.72,.3,.25,1)",fill:"forwards"}),p.animate(D,{duration:300,delay:1500,easing:"cubic-bezier(.47,.41,.26,1)",fill:"forwards"}),g.animate(D,{duration:200,delay:1800,easing:"cubic-bezier(.47,.41,.26,1)",fill:"forwards"}),v.animate(D,{duration:1e3,delay:2e3,easing:"cubic-bezier(.47,.41,.26,1)",fill:"forwards"}),Object.assign(a.style,{height:"0",transform:"scale(1.3)"}),t(2,o.style.transform="translateY(80%) scale(1.4)",o),Je({targets:a,height:"100%",scale:1,easing:"cubicBezier(0.165, 0.84, 0.44, 1)",duration:1500,delay:500,complete:()=>{t(1,a.style.boxShadow="3px 9px 18px rgba(0, 0, 0, 0.2)",a)}}),Je({targets:o,translateY:"0",scale:1,easing:"cubicBezier(0.165, 0.84, 0.44, 1)",duration:1500,delay:500});const O=[l,c,u,h];O.forEach(k=>{k.style.transform="translateY(130%) rotate(10deg)"}),Je({targets:O,rotate:"0",translateY:"0%",easing:"cubicBezier(0.165, 0.84, 0.44, 1)",duration:900,delay:Je.stagger(80,{start:500})})}function f(D){ht[D?"unshift":"push"](()=>{l=D,t(3,l)})}function m(D){ht[D?"unshift":"push"](()=>{c=D,t(4,c)})}function b(D){ht[D?"unshift":"push"](()=>{u=D,t(5,u)})}function _(D){ht[D?"unshift":"push"](()=>{h=D,t(6,h)})}function y(D){ht[D?"unshift":"push"](()=>{o=D,t(2,o)})}function A(D){ht[D?"unshift":"push"](()=>{a=D,t(1,a)})}function C(D){ht[D?"unshift":"push"](()=>{s=D,t(0,s)})}return[s,a,o,l,c,u,h,f,m,b,_,y,A,C]}class Dd extends ri{constructor(e){super(),si(this,e,Id,Pd,Bn,{})}}function _a(r,e,t,n){return new(t||(t=Promise))(function(i,s){function a(c){try{l(n.next(c))}catch(u){s(u)}}function o(c){try{l(n.throw(c))}catch(u){s(u)}}function l(c){var u;c.done?i(c.value):(u=c.value,u instanceof t?u:new t(function(h){h(u)})).then(a,o)}l((n=n.apply(r,e||[])).next())})}const Fd=["geforce 320m","geforce 8600","geforce 8600m gt","geforce 8800 gs","geforce 8800 gt","geforce 9400","geforce 9400m g","geforce 9400m","geforce 9600m gt","geforce 9600m","geforce fx go5200","geforce gt 120","geforce gt 130","geforce gt 330m","geforce gtx 285","google swiftshader","intel g41","intel g45","intel gma 4500mhd","intel gma x3100","intel hd 3000","intel q45","legacy","mali-2","mali-3","mali-4","quadro fx 1500","quadro fx 4","quadro fx 5","radeon hd 2400","radeon hd 2600","radeon hd 4670","radeon hd 4850","radeon hd 4870","radeon hd 5670","radeon hd 5750","radeon hd 6290","radeon hd 6300","radeon hd 6310","radeon hd 6320","radeon hd 6490m","radeon hd 6630m","radeon hd 6750m","radeon hd 6770m","radeon hd 6970m","sgx 543","sgx543"];function bl(r){return r=r.toLowerCase().replace(/^angle ?\((.+)\)*$/,"$1").replace(/\s(\d{1,2}gb|direct3d.+$)|\(r\)| \([^)]+\)$/g,"").replace(/(?:vulkan|opengl) \d+\.\d+(?:\.\d+)?(?: \((.*)\))?/,"$1")}const Pu=typeof window>"u",Yn=(()=>{if(Pu)return;const{userAgent:r,platform:e,maxTouchPoints:t}=window.navigator,n=/(iphone|ipod|ipad)/i.test(r),i=e==="iPad"||e==="MacIntel"&&t>0&&!window.MSStream;return{isIpad:i,isMobile:/android/i.test(r)||n||i,isSafari12:/Version\/12.+Safari/.test(r)}})();function Nd(r,e,t){if(!t)return[e];const n=function(c){const u=`
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
  `,d=c.createShader(35633),p=c.createShader(35632),g=c.createProgram();if(!(p&&d&&g))return;c.shaderSource(d,u),c.shaderSource(p,h),c.compileShader(d),c.compileShader(p),c.attachShader(g,d),c.attachShader(g,p),c.linkProgram(g),c.detachShader(g,d),c.detachShader(g,p),c.deleteShader(d),c.deleteShader(p),c.useProgram(g);const v=c.createBuffer();c.bindBuffer(34962,v),c.bufferData(34962,new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),35044);const x=c.getAttribLocation(g,"aPosition");c.vertexAttribPointer(x,3,5126,!1,0,0),c.enableVertexAttribArray(x),c.clearColor(1,1,1,1),c.clear(16384),c.viewport(0,0,1,1),c.drawArrays(4,0,3);const f=new Uint8Array(4);return c.readPixels(0,0,1,1,6408,5121,f),c.deleteProgram(g),c.deleteBuffer(v),f.join("")}(r),i="801621810",s="8016218135",a="80162181161",o=Yn?.isIpad?[["a7",a,12],["a8",s,15],["a8x",s,15],["a9",s,15],["a9x",s,15],["a10",s,15],["a10x",s,15],["a12",i,15],["a12x",i,15],["a12z",i,15],["a14",i,15],["m1",i,15]]:[["a7",a,12],["a8",s,12],["a9",s,15],["a10",s,15],["a11",i,15],["a12",i,15],["a13",i,15],["a14",i,15]];let l;return n==="80162181255"?l=o.filter(([,,c])=>c>=14):(l=o.filter(([,c])=>c===n),l.length||(l=o)),l.map(([c])=>`apple ${c} gpu`)}const ya=[],Ml=[];function zd(r,e){if(r===e)return 0;const t=r;r.length>e.length&&(r=e,e=t);let n=r.length,i=e.length;for(;n>0&&r.charCodeAt(~-n)===e.charCodeAt(~-i);)n--,i--;let s,a=0;for(;a<n&&r.charCodeAt(a)===e.charCodeAt(a);)a++;if(n-=a,i-=a,n===0)return i;let o,l,c=0,u=0,h=0;for(;u<n;)Ml[u]=r.charCodeAt(a+u),ya[u]=++u;for(;h<i;)for(s=e.charCodeAt(a+h),o=h++,c=h,u=0;u<n;u++)l=s===Ml[u]?o:o+1,o=ya[u],c=ya[u]=o>c?l>c?c+1:l:l>o?o+1:l;return c}function kd(r){return r!=null}class wl extends Error{constructor(e){super(e),Object.setPrototypeOf(this,new.target.prototype)}}const Sl=({mobileTiers:r=[0,15,30,60],desktopTiers:e=[0,15,30,60],override:t={},glContext:n,failIfMajorPerformanceCaveat:i=!1,benchmarksURL:s="https://unpkg.com/detect-gpu@4.0.50/dist/benchmarks"}={})=>_a(void 0,void 0,void 0,function*(){const a={};if(Pu)return{tier:0,type:"SSR"};const{isIpad:o=!!Yn?.isIpad,isMobile:l=!!Yn?.isMobile,screenSize:c=window.screen,loadBenchmarks:u=y=>_a(void 0,void 0,void 0,function*(){const A=yield fetch(`${s}/${y}`).then(C=>C.json());if(parseInt(A.shift().split(".")[0],10)<4)throw new wl("Detect GPU benchmark data is out of date. Please update to version 4x");return A})}=t;let{renderer:h}=t;const d=(y,A,C,D,O)=>({device:O,fps:D,gpu:C,isMobile:l,tier:y,type:A});let p,g="";if(h)h=bl(h),p=[h];else{const y=n||function(C,D=!1){const O={alpha:!1,antialias:!1,depth:!1,failIfMajorPerformanceCaveat:D,powerPreference:"high-performance",stencil:!1};C&&delete O.powerPreference;const k=window.document.createElement("canvas"),P=k.getContext("webgl",O)||k.getContext("experimental-webgl",O);return P??void 0}(Yn?.isSafari12,i);if(!y)return d(0,"WEBGL_UNSUPPORTED");const A=y.getExtension("WEBGL_debug_renderer_info");if(A&&(h=y.getParameter(A.UNMASKED_RENDERER_WEBGL)),!h)return d(1,"FALLBACK");g=h,h=bl(h),p=function(C,D,O){return D==="apple gpu"?Nd(C,D,O):[D]}(y,h,l)}const v=(yield Promise.all(p.map(function(y){var A;return _a(this,void 0,void 0,function*(){const C=(Q=>{const ee=l?["adreno","apple","mali-t","mali","nvidia","powervr"]:["intel","apple","amd","radeon","nvidia","geforce"];for(const re of ee)if(Q.includes(re))return re})(y);if(!C)return;const D=`${l?"m":"d"}-${C}${o?"-ipad":""}.json`,O=a[D]=(A=a[D])!==null&&A!==void 0?A:u(D);let k;try{k=yield O}catch(Q){if(Q instanceof wl)throw Q;return}const P=function(Q){var ee;const re=(Q=Q.replace(/\([^)]+\)/,"")).match(/\d+/)||Q.match(/(\W|^)([A-Za-z]{1,3})(\W|$)/g);return(ee=re?.join("").replace(/\W|amd/g,""))!==null&&ee!==void 0?ee:""}(y);let M=k.filter(([,Q])=>Q===P);M.length||(M=k.filter(([Q])=>Q.includes(y)));const w=M.length;if(w===0)return;let N,[z,,,L]=w>1?M.map(Q=>[Q,zd(y,Q[0])]).sort(([,Q],[,ee])=>Q-ee)[0][0]:M[0],F=Number.MAX_VALUE;const{devicePixelRatio:K}=window,ae=c.width*K*c.height*K;for(const Q of L){const[ee,re]=Q,ce=ee*re,j=Math.abs(ae-ce);j<F&&(F=j,N=Q)}if(!N)return;const[,,G,W]=N;return[F,G,z,W]})}))).filter(kd).sort(([y=Number.MAX_VALUE,A],[C=Number.MAX_VALUE,D])=>y===C?A-D:y-C);if(!v.length){const y=Fd.find(A=>h.includes(A));return y?d(0,"BLOCKLISTED",y):d(1,"FALLBACK",`${h} (${g})`)}const[,x,f,m]=v[0];if(x===-1)return d(0,"BLOCKLISTED",f,x,m);const b=l?r:e;let _=0;for(let y=0;y<b.length;y++)x>=b[y]&&(_=y);return d(_,"BENCHMARK",f,x,m)});function Bd(r){return--r*r*r*r*r+1}function Tl(r,{delay:e=0,duration:t=400,easing:n=Hh}={}){const i=+getComputedStyle(r).opacity;return{delay:e,duration:t,easing:n,css:s=>`opacity: ${s*i}`}}/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vo="136",Od=0,El=1,Ud=2,Iu=1,Vd=2,wr=3,zr=0,gt=1,Zi=2,Du=1,$n=0,Rr=1,Al=2,Cl=3,Ll=4,Hd=5,Hi=100,Gd=101,Wd=102,Rl=103,Pl=104,qd=200,jd=201,Xd=202,Yd=203,Fu=204,Nu=205,Zd=206,Jd=207,$d=208,Qd=209,Kd=210,ef=0,tf=1,nf=2,mo=3,rf=4,sf=5,af=6,of=7,ra=0,lf=1,cf=2,Qn=0,uf=1,hf=2,df=3,ff=4,pf=5,zu=300,Wr=301,qr=302,go=303,vo=304,sa=306,Ho=307,xo=1e3,jt=1001,_o=1002,vt=1003,Il=1004,Dl=1005,kt=1006,mf=1007,aa=1008,zn=1009,gf=1010,vf=1011,kr=1012,xf=1013,ks=1014,Zn=1015,vi=1016,_f=1017,yf=1018,bf=1019,ji=1020,Mf=1021,xi=1022,wt=1023,wf=1024,Sf=1025,_i=1026,Ji=1027,Tf=1028,Ef=1029,Af=1030,Cf=1031,Lf=1032,Rf=1033,Fl=33776,Nl=33777,zl=33778,kl=33779,Bl=35840,Ol=35841,Ul=35842,Vl=35843,Pf=36196,Hl=37492,Gl=37496,If=37808,Df=37809,Ff=37810,Nf=37811,zf=37812,kf=37813,Bf=37814,Of=37815,Uf=37816,Vf=37817,Hf=37818,Gf=37819,Wf=37820,qf=37821,jf=36492,Xf=37840,Yf=37841,Zf=37842,Jf=37843,$f=37844,Qf=37845,Kf=37846,ep=37847,tp=37848,np=37849,ip=37850,rp=37851,sp=37852,ap=37853,op=2200,lp=2201,cp=2202,qs=2300,js=2301,ba=2302,Gi=2400,Wi=2401,Xs=2402,Go=2500,ku=2501,up=0,cn=3e3,tr=3001,hp=3200,dp=3201,nr=0,fp=1,Ma=7680,pp=519,Br=35044,Ys=35048,Wl="300 es";class bi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Et=[];for(let r=0;r<256;r++)Et[r]=(r<16?"0":"")+r.toString(16);const wa=Math.PI/180,yo=180/Math.PI;function bn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[r&255]+Et[r>>8&255]+Et[r>>16&255]+Et[r>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toUpperCase()}function qt(r,e,t){return Math.max(e,Math.min(t,r))}function mp(r,e){return(r%e+e)%e}function Sa(r,e,t){return(1-t)*r+t*e}function ql(r){return(r&r-1)===0&&r!==0}function gp(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}class le{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}le.prototype.isVector2=!0;class At{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],v=i[0],x=i[3],f=i[6],m=i[1],b=i[4],_=i[7],y=i[2],A=i[5],C=i[8];return s[0]=a*v+o*m+l*y,s[3]=a*x+o*b+l*A,s[6]=a*f+o*_+l*C,s[1]=c*v+u*m+h*y,s[4]=c*x+u*b+h*A,s[7]=c*f+u*_+h*C,s[2]=d*v+p*m+g*y,s[5]=d*x+p*b+g*A,s[8]=d*f+p*_+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,p=c*s-a*l,g=t*h+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(i*c-u*n)*v,e[2]=(o*n-i*a)*v,e[3]=d*v,e[4]=(u*t-i*l)*v,e[5]=(i*s-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],a=i[3],o=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*s+n*l,i[3]=t*a+n*c,i[6]=t*o+n*u,i[1]=-n*s+t*l,i[4]=-n*a+t*c,i[7]=-n*o+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}At.prototype.isMatrix3=!0;function Bu(r){if(r.length===0)return-1/0;let e=r[0];for(let t=1,n=r.length;t<n;++t)r[t]>e&&(e=r[t]);return e}function oa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}let wi;class ir{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wi===void 0&&(wi=oa("canvas")),wi.width=e.width,wi.height=e.height;const n=wi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=wi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let vp=0;class Tt extends bi{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=jt,i=jt,s=kt,a=aa,o=wt,l=zn,c=1,u=cn){super(),Object.defineProperty(this,"id",{value:vp++}),this.uuid=bn(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new At,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=bn()),!t&&e.images[i.uuid]===void 0){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Ta(i[a].image)):s.push(Ta(i[a]))}else s=Ta(i);e.images[i.uuid]={uuid:i.uuid,url:s}}n.image=i.uuid}return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xo:e.x=e.x-Math.floor(e.x);break;case jt:e.x=e.x<0?0:1;break;case _o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xo:e.y=e.y-Math.floor(e.y);break;case jt:e.y=e.y<0?0:1;break;case _o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}Tt.DEFAULT_IMAGE=void 0;Tt.DEFAULT_MAPPING=zu;Tt.prototype.isTexture=!0;function Ta(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ir.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class rt{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],v=l[2],x=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-x)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+x)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,_=(p+1)/2,y=(f+1)/2,A=(u+d)/4,C=(h+v)/4,D=(g+x)/4;return b>_&&b>y?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=A/n,s=C/n):_>y?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=A/i,s=D/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=C/s,i=D/s),this.set(n,i,s,t),this}let m=Math.sqrt((x-g)*(x-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(m)<.001&&(m=1),this.x=(x-g)/m,this.y=(h-v)/m,this.z=(d-u)/m,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}rt.prototype.isVector4=!0;class Kt extends bi{constructor(e,t,n={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t),this.texture=new Tt(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:kt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image={...this.texture.image},this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}Kt.prototype.isWebGLRenderTarget=!0;class xp extends Kt{constructor(e,t,n){super(e,t);const i=this.texture;this.texture=[];for(let s=0;s<n;s++)this.texture[s]=i.clone()}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.texture.length;i<s;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}}xp.prototype.isWebGLMultipleRenderTargets=!0;class Wo extends Kt{constructor(e,t,n={}){super(e,t,n),this.samples=4,this.ignoreDepthForMultisampleCopy=n.ignoreDepth!==void 0?n.ignoreDepth:!0,this.useRenderToTexture=n.useRenderToTexture!==void 0?n.useRenderToTexture:!1,this.useRenderbuffer=this.useRenderToTexture===!1}copy(e){return super.copy.call(this,e),this.samples=e.samples,this.useRenderToTexture=e.useRenderToTexture,this.useRenderbuffer=e.useRenderbuffer,this}}Wo.prototype.isWebGLMultisampleRenderTarget=!0;class Vt{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[a+0],p=s[a+1],g=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==d||c!==p||u!==g){let x=1-o;const f=l*d+c*p+u*g+h*v,m=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const y=Math.sqrt(b),A=Math.atan2(y,f*m);x=Math.sin(x*A)/y,o=Math.sin(o*A)/y}const _=o*m;if(l=l*x+d*_,c=c*x+p*_,u=u*x+g*_,h=h*x+v*_,x===1-o){const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-o*p,e[t+2]=c*g+u*p+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),d=l(n/2),p=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Vt.prototype.isQuaternion=!0;class R{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(jl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-s*i,h=l*i+s*n-a*t,d=-s*t-a*n-o*i;return this.x=c*l+d*-s+u*-o-h*-a,this.y=u*l+d*-a+h*-s-c*-o,this.z=h*l+d*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ea.copy(this).projectOnVector(e),this.sub(Ea)}reflect(e){return this.sub(Ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}R.prototype.isVector3=!0;const Ea=new R,jl=new Vt;class un{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],d=e[l+2];u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>a&&(a=h),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),d=e.getZ(l);u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>a&&(a=h),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),Aa.copy(t.boundingBox),Aa.applyMatrix4(e.matrixWorld),this.union(Aa));const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,fr),fr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),ts.subVectors(this.max,pr),Si.subVectors(e.a,pr),Ti.subVectors(e.b,pr),Ei.subVectors(e.c,pr),On.subVectors(Ti,Si),Un.subVectors(Ei,Ti),ci.subVectors(Si,Ei);let t=[0,-On.z,On.y,0,-Un.z,Un.y,0,-ci.z,ci.y,On.z,0,-On.x,Un.z,0,-Un.x,ci.z,0,-ci.x,-On.y,On.x,0,-Un.y,Un.x,0,-ci.y,ci.x,0];return!Ca(t,Si,Ti,Ei,ts)||(t=[1,0,0,0,1,0,0,0,1],!Ca(t,Si,Ti,Ei,ts))?!1:(ns.crossVectors(On,Un),t=[ns.x,ns.y,ns.z],Ca(t,Si,Ti,Ei,ts))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return fr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(fr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(En),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}un.prototype.isBox3=!0;const En=[new R,new R,new R,new R,new R,new R,new R,new R],fr=new R,Aa=new un,Si=new R,Ti=new R,Ei=new R,On=new R,Un=new R,ci=new R,pr=new R,ts=new R,ns=new R,ui=new R;function Ca(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ui.fromArray(r,s);const o=i.x*Math.abs(ui.x)+i.y*Math.abs(ui.y)+i.z*Math.abs(ui.z),l=e.dot(ui),c=t.dot(ui),u=n.dot(ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const _p=new un,Xl=new R,is=new R,La=new R;class rr{constructor(e=new R,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_p.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){La.subVectors(e,this.center);const t=La.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(La.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?is.set(0,0,1).multiplyScalar(e.radius):is.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Xl.copy(e.center).add(is)),this.expandByPoint(Xl.copy(e.center).sub(is)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new R,Ra=new R,rs=new R,Vn=new R,Pa=new R,ss=new R,Ia=new R;class sr{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.direction).multiplyScalar(t).add(this.origin),An.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ra.copy(e).add(t).multiplyScalar(.5),rs.copy(t).sub(e).normalize(),Vn.copy(this.origin).sub(Ra);const s=e.distanceTo(t)*.5,a=-this.direction.dot(rs),o=Vn.dot(this.direction),l=-Vn.dot(rs),c=Vn.lengthSq(),u=Math.abs(1-a*a);let h,d,p,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(rs).multiplyScalar(d).add(Ra),p}intersectSphere(e,t){An.subVectors(e.center,this.origin);const n=An.dot(this.direction),i=An.dot(An)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>i||((s>n||n!==n)&&(n=s),(a<i||i!==i)&&(i=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,n,i,s){Pa.subVectors(t,e),ss.subVectors(n,e),Ia.crossVectors(Pa,ss);let a=this.direction.dot(Ia),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vn.subVectors(this.origin,e);const l=o*this.direction.dot(ss.crossVectors(Vn,ss));if(l<0)return null;const c=o*this.direction.dot(Pa.cross(Vn));if(c<0||l+c>a)return null;const u=-o*Vn.dot(Ia);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,a,o,l,c,u,h,d,p,g,v,x){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ai.setFromMatrixColumn(e,0).length(),s=1/Ai.setFromMatrixColumn(e,1).length(),a=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,v=c*h;t[0]=d+v*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,v=c*h;t[0]=d-v*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-d*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-v*h}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yp,e,bp)}lookAt(e,t,n){const i=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Hn.crossVectors(n,Ht),Hn.lengthSq()===0&&(Math.abs(n.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Hn.crossVectors(n,Ht)),Hn.normalize(),as.crossVectors(Ht,Hn),i[0]=Hn.x,i[4]=as.x,i[8]=Ht.x,i[1]=Hn.y,i[5]=as.y,i[9]=Ht.y,i[2]=Hn.z,i[6]=as.z,i[10]=Ht.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],v=n[6],x=n[10],f=n[14],m=n[3],b=n[7],_=n[11],y=n[15],A=i[0],C=i[4],D=i[8],O=i[12],k=i[1],P=i[5],M=i[9],w=i[13],N=i[2],z=i[6],L=i[10],F=i[14],K=i[3],ae=i[7],G=i[11],W=i[15];return s[0]=a*A+o*k+l*N+c*K,s[4]=a*C+o*P+l*z+c*ae,s[8]=a*D+o*M+l*L+c*G,s[12]=a*O+o*w+l*F+c*W,s[1]=u*A+h*k+d*N+p*K,s[5]=u*C+h*P+d*z+p*ae,s[9]=u*D+h*M+d*L+p*G,s[13]=u*O+h*w+d*F+p*W,s[2]=g*A+v*k+x*N+f*K,s[6]=g*C+v*P+x*z+f*ae,s[10]=g*D+v*M+x*L+f*G,s[14]=g*O+v*w+x*F+f*W,s[3]=m*A+b*k+_*N+y*K,s[7]=m*C+b*P+_*z+y*ae,s[11]=m*D+b*M+_*L+y*G,s[15]=m*O+b*w+_*F+y*W,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],v=e[7],x=e[11],f=e[15];return g*(+s*l*h-i*c*h-s*o*d+n*c*d+i*o*p-n*l*p)+v*(+t*l*p-t*c*d+s*a*d-i*a*p+i*c*u-s*l*u)+x*(+t*c*h-t*o*p-s*a*h+n*a*p+s*o*u-n*c*u)+f*(-i*o*u-t*l*h+t*o*d+i*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],v=e[13],x=e[14],f=e[15],m=h*x*c-v*d*c+v*l*p-o*x*p-h*l*f+o*d*f,b=g*d*c-u*x*c-g*l*p+a*x*p+u*l*f-a*d*f,_=u*v*c-g*h*c+g*o*p-a*v*p-u*o*f+a*h*f,y=g*h*l-u*v*l-g*o*d+a*v*d+u*o*x-a*h*x,A=t*m+n*b+i*_+s*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=m*C,e[1]=(v*d*s-h*x*s-v*i*p+n*x*p+h*i*f-n*d*f)*C,e[2]=(o*x*s-v*l*s+v*i*c-n*x*c-o*i*f+n*l*f)*C,e[3]=(h*l*s-o*d*s-h*i*c+n*d*c+o*i*p-n*l*p)*C,e[4]=b*C,e[5]=(u*x*s-g*d*s+g*i*p-t*x*p-u*i*f+t*d*f)*C,e[6]=(g*l*s-a*x*s-g*i*c+t*x*c+a*i*f-t*l*f)*C,e[7]=(a*d*s-u*l*s+u*i*c-t*d*c-a*i*p+t*l*p)*C,e[8]=_*C,e[9]=(g*h*s-u*v*s-g*n*p+t*v*p+u*n*f-t*h*f)*C,e[10]=(a*v*s-g*o*s+g*n*c-t*v*c-a*n*f+t*o*f)*C,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*p-t*o*p)*C,e[12]=y*C,e[13]=(u*v*i-g*h*i+g*n*d-t*v*d-u*n*x+t*h*x)*C,e[14]=(g*o*i-a*v*i-g*n*l+t*v*l+a*n*x-t*o*x)*C,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*d+t*o*d)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,p=s*u,g=s*h,v=a*u,x=a*h,f=o*h,m=l*c,b=l*u,_=l*h,y=n.x,A=n.y,C=n.z;return i[0]=(1-(v+f))*y,i[1]=(p+_)*y,i[2]=(g-b)*y,i[3]=0,i[4]=(p-_)*A,i[5]=(1-(d+f))*A,i[6]=(x+m)*A,i[7]=0,i[8]=(g+b)*C,i[9]=(x-m)*C,i[10]=(1-(d+v))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ai.set(i[0],i[1],i[2]).length();const a=Ai.set(i[4],i[5],i[6]).length(),o=Ai.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],nn.copy(this);const c=1/s,u=1/a,h=1/o;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=h,nn.elements[9]*=h,nn.elements[10]*=h,t.setFromRotationMatrix(nn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(a+s)/(a-s),p=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-s),h=(t+e)*l,d=(n+i)*c,p=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}De.prototype.isMatrix4=!0;const Ai=new R,nn=new De,yp=new R(0,0,0),bp=new R(1,1,1),Hn=new R,as=new R,Ht=new R,Yl=new De,Zl=new Vt;class ar{constructor(e=0,t=0,n=0,i=ar.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zl.setFromEuler(this),this.setFromQuaternion(Zl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new R(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}ar.prototype.isEuler=!0;ar.DefaultOrder="XYZ";ar.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ou{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mp=0;const Jl=new R,Ci=new Vt,Cn=new De,os=new R,mr=new R,wp=new R,Sp=new Vt,$l=new R(1,0,0),Ql=new R(0,1,0),Kl=new R(0,0,1),Tp={type:"added"},ec={type:"removed"};class et extends bi{constructor(){super(),Object.defineProperty(this,"id",{value:Mp++}),this.uuid=bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=et.DefaultUp.clone();const e=new R,t=new ar,n=new Vt,i=new R(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new De},normalMatrix:{value:new At}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=et.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Ou,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.premultiply(Ci),this}rotateX(e){return this.rotateOnAxis($l,e)}rotateY(e){return this.rotateOnAxis(Ql,e)}rotateZ(e){return this.rotateOnAxis(Kl,e)}translateOnAxis(e,t){return Jl.copy(e).applyQuaternion(this.quaternion),this.position.add(Jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($l,e)}translateY(e){return this.translateOnAxis(Ql,e)}translateZ(e){return this.translateOnAxis(Kl,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?os.copy(e):os.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(mr,os,this.up):Cn.lookAt(os,mr,this.up),this.quaternion.setFromRotationMatrix(Cn),i&&(Cn.extractRotation(i.matrixWorld),Ci.setFromRotationMatrix(Cn),this.quaternion.premultiply(Ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Tp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ec)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ec)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,wp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,Sp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}et.DefaultUp=new R(0,1,0);et.DefaultMatrixAutoUpdate=!0;et.prototype.isObject3D=!0;const rn=new R,Ln=new R,Da=new R,Rn=new R,Li=new R,Ri=new R,tc=new R,Fa=new R,Na=new R,za=new R;class xt{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),rn.subVectors(e,t),i.cross(rn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){rn.subVectors(i,t),Ln.subVectors(n,t),Da.subVectors(e,t);const a=rn.dot(rn),o=rn.dot(Ln),l=rn.dot(Da),c=Ln.dot(Ln),u=Ln.dot(Da),h=a*c-o*o;if(h===0)return s.set(-2,-1,-1);const d=1/h,p=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Rn),Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getUV(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Rn),l.set(0,0),l.addScaledVector(s,Rn.x),l.addScaledVector(a,Rn.y),l.addScaledVector(o,Rn.z),l}static isFrontFacing(e,t,n,i){return rn.subVectors(n,t),Ln.subVectors(e,t),rn.cross(Ln).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),rn.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return xt.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return xt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Li.subVectors(i,n),Ri.subVectors(s,n),Fa.subVectors(e,n);const l=Li.dot(Fa),c=Ri.dot(Fa);if(l<=0&&c<=0)return t.copy(n);Na.subVectors(e,i);const u=Li.dot(Na),h=Ri.dot(Na);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Li,a);za.subVectors(e,s);const p=Li.dot(za),g=Ri.dot(za);if(g>=0&&p<=g)return t.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ri,o);const x=u*g-p*h;if(x<=0&&h-u>=0&&p-g>=0)return tc.subVectors(s,i),o=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector(tc,o);const f=1/(x+v+d);return a=v*f,o=d*f,t.copy(n).addScaledVector(Li,a).addScaledVector(Ri,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ep=0;class Dt extends bi{constructor(){super(),Object.defineProperty(this,"id",{value:Ep++}),this.uuid=bn(),this.name="",this.type="Material",this.fog=!0,this.blending=Rr,this.side=zr,this.vertexColors=!1,this.opacity=1,this.format=wt,this.transparent=!1,this.blendSrc=Fu,this.blendDst=Nu,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ma,this.stencilZFail=Ma,this.stencilZPass=Ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Du;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(n.blending=this.blending),this.side!==zr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.format!==wt&&(n.format=this.format),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.format=e.format,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}Dt.prototype.isMaterial=!0;const Uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sn={h:0,s:0,l:0},ls={h:0,s:0,l:0};function ka(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Ba(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Oa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}class Le{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=mp(e,1),t=qt(t,0,1),n=qt(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,s=2*n-i;this.r=ka(s,i,e+1/3),this.g=ka(s,i,e),this.b=ka(s,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i;const s=n[1],a=n[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const o=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(o,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],s=i.length;if(s===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=Uu[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ba(e.r),this.g=Ba(e.g),this.b=Ba(e.b),this}copyLinearToSRGB(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,n=this.g,i=this.b,s=Math.max(t,n,i),a=Math.min(t,n,i);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const u=s-a;switch(l=c<=.5?u/(s+a):u/(2-s-a),s){case t:o=(n-i)/u+(n<i?6:0);break;case n:o=(i-t)/u+2;break;case i:o=(t-n)/u+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(sn),sn.h+=e,sn.s+=t,sn.l+=n,this.setHSL(sn.h,sn.s,sn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(sn),e.getHSL(ls);const n=Sa(sn.h,ls.h,t),i=Sa(sn.s,ls.s,t),s=Sa(sn.l,ls.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}Le.NAMES=Uu;Le.prototype.isColor=!0;Le.prototype.r=1;Le.prototype.g=1;Le.prototype.b=1;class qo extends Dt{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}qo.prototype.isMeshBasicMaterial=!0;const at=new R,cs=new le;class _t{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Br,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new Le),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new le),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new R),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new rt),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)cs.fromBufferAttribute(this,t),cs.applyMatrix3(e),this.setXY(t,cs.x,cs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)at.x=this.getX(t),at.y=this.getY(t),at.z=this.getZ(t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)at.x=this.getX(t),at.y=this.getY(t),at.z=this.getZ(t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)at.x=this.getX(t),at.y=this.getY(t),at.z=this.getZ(t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Br&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}_t.prototype.isBufferAttribute=!0;class Vu extends _t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Hu extends _t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ap extends _t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}Ap.prototype.isFloat16BufferAttribute=!0;class St extends _t{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Cp=0;const Yt=new De,Ua=new et,Pi=new R,Gt=new un,gr=new un,yt=new R;class ut extends bi{constructor(){super(),Object.defineProperty(this,"id",{value:Cp++}),this.uuid=bn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bu(e)>65535?Hu:Vu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new At().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,n){return Yt.makeTranslation(e,t,n),this.applyMatrix4(Yt),this}scale(e,t,n){return Yt.makeScale(e,t,n),this.applyMatrix4(Yt),this}lookAt(e){return Ua.lookAt(e),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new St(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];gr.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(Gt.min,gr.min),Gt.expandByPoint(yt),yt.addVectors(Gt.max,gr.max),Gt.expandByPoint(yt)):(Gt.expandByPoint(gr.min),Gt.expandByPoint(gr.max))}Gt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)yt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(yt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)yt.fromBufferAttribute(o,c),l&&(Pi.fromBufferAttribute(e,c),yt.add(Pi)),i=Math.max(i,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new _t(new Float32Array(4*o),4));const l=t.tangent.array,c=[],u=[];for(let k=0;k<o;k++)c[k]=new R,u[k]=new R;const h=new R,d=new R,p=new R,g=new le,v=new le,x=new le,f=new R,m=new R;function b(k,P,M){h.fromArray(i,k*3),d.fromArray(i,P*3),p.fromArray(i,M*3),g.fromArray(a,k*2),v.fromArray(a,P*2),x.fromArray(a,M*2),d.sub(h),p.sub(h),v.sub(g),x.sub(g);const w=1/(v.x*x.y-x.x*v.y);isFinite(w)&&(f.copy(d).multiplyScalar(x.y).addScaledVector(p,-v.y).multiplyScalar(w),m.copy(p).multiplyScalar(v.x).addScaledVector(d,-x.x).multiplyScalar(w),c[k].add(f),c[P].add(f),c[M].add(f),u[k].add(m),u[P].add(m),u[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let k=0,P=_.length;k<P;++k){const M=_[k],w=M.start,N=M.count;for(let z=w,L=w+N;z<L;z+=3)b(n[z+0],n[z+1],n[z+2])}const y=new R,A=new R,C=new R,D=new R;function O(k){C.fromArray(s,k*3),D.copy(C);const P=c[k];y.copy(P),y.sub(C.multiplyScalar(C.dot(P))).normalize(),A.crossVectors(D,P);const w=A.dot(u[k])<0?-1:1;l[k*4]=y.x,l[k*4+1]=y.y,l[k*4+2]=y.z,l[k*4+3]=w}for(let k=0,P=_.length;k<P;++k){const M=_[k],w=M.start,N=M.count;for(let z=w,L=w+N;z<L;z+=3)O(n[z+0]),O(n[z+1]),O(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new R,s=new R,a=new R,o=new R,l=new R,c=new R,u=new R,h=new R;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),x=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,x),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,x),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const a=n[i].array,o=e.attributes[i],l=o.array,c=o.itemSize*t,u=Math.min(l.length,a.length-c);for(let h=0,d=c;h<u;h++,d++)a[d]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,x=l.length;v<x;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new _t(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ut,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}ut.prototype.isBufferGeometry=!0;const nc=new De,Ii=new sr,Va=new rr,Gn=new R,Wn=new R,qn=new R,Ha=new R,Ga=new R,Wa=new R,us=new R,hs=new R,ds=new R,fs=new le,ps=new le,ms=new le,qa=new R,gs=new R;class Bt extends et{constructor(e=new ut,t=new qo){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(s),e.ray.intersectsSphere(Va)===!1)||(nc.copy(s).invert(),Ii.copy(e.ray).applyMatrix4(nc),n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1))return;let a;if(n.isBufferGeometry){const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,d=n.attributes.uv2,p=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(i))for(let v=0,x=p.length;v<x;v++){const f=p[v],m=i[f.materialIndex],b=Math.max(f.start,g.start),_=Math.min(o.count,Math.min(f.start+f.count,g.start+g.count));for(let y=b,A=_;y<A;y+=3){const C=o.getX(y),D=o.getX(y+1),O=o.getX(y+2);a=vs(this,m,e,Ii,l,c,u,h,d,C,D,O),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=f.materialIndex,t.push(a))}}else{const v=Math.max(0,g.start),x=Math.min(o.count,g.start+g.count);for(let f=v,m=x;f<m;f+=3){const b=o.getX(f),_=o.getX(f+1),y=o.getX(f+2);a=vs(this,i,e,Ii,l,c,u,h,d,b,_,y),a&&(a.faceIndex=Math.floor(f/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let v=0,x=p.length;v<x;v++){const f=p[v],m=i[f.materialIndex],b=Math.max(f.start,g.start),_=Math.min(l.count,Math.min(f.start+f.count,g.start+g.count));for(let y=b,A=_;y<A;y+=3){const C=y,D=y+1,O=y+2;a=vs(this,m,e,Ii,l,c,u,h,d,C,D,O),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=f.materialIndex,t.push(a))}}else{const v=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let f=v,m=x;f<m;f+=3){const b=f,_=f+1,y=f+2;a=vs(this,i,e,Ii,l,c,u,h,d,b,_,y),a&&(a.faceIndex=Math.floor(f/3),t.push(a))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}Bt.prototype.isMesh=!0;function Lp(r,e,t,n,i,s,a,o){let l;if(e.side===gt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side!==Zi,o),l===null)return null;gs.copy(o),gs.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(gs);return c<t.near||c>t.far?null:{distance:c,point:gs.clone(),object:r}}function vs(r,e,t,n,i,s,a,o,l,c,u,h){Gn.fromBufferAttribute(i,c),Wn.fromBufferAttribute(i,u),qn.fromBufferAttribute(i,h);const d=r.morphTargetInfluences;if(s&&d){us.set(0,0,0),hs.set(0,0,0),ds.set(0,0,0);for(let g=0,v=s.length;g<v;g++){const x=d[g],f=s[g];x!==0&&(Ha.fromBufferAttribute(f,c),Ga.fromBufferAttribute(f,u),Wa.fromBufferAttribute(f,h),a?(us.addScaledVector(Ha,x),hs.addScaledVector(Ga,x),ds.addScaledVector(Wa,x)):(us.addScaledVector(Ha.sub(Gn),x),hs.addScaledVector(Ga.sub(Wn),x),ds.addScaledVector(Wa.sub(qn),x)))}Gn.add(us),Wn.add(hs),qn.add(ds)}r.isSkinnedMesh&&(r.boneTransform(c,Gn),r.boneTransform(u,Wn),r.boneTransform(h,qn));const p=Lp(r,e,t,n,Gn,Wn,qn,qa);if(p){o&&(fs.fromBufferAttribute(o,c),ps.fromBufferAttribute(o,u),ms.fromBufferAttribute(o,h),p.uv=xt.getUV(qa,Gn,Wn,qn,fs,ps,ms,new le)),l&&(fs.fromBufferAttribute(l,c),ps.fromBufferAttribute(l,u),ms.fromBufferAttribute(l,h),p.uv2=xt.getUV(qa,Gn,Wn,qn,fs,ps,ms,new le));const g={a:c,b:u,c:h,normal:new R,materialIndex:0};xt.getNormal(Gn,Wn,qn,g.normal),p.face=g}return p}class jr extends ut{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(u,3)),this.setAttribute("uv",new St(h,2));function g(v,x,f,m,b,_,y,A,C,D,O){const k=_/C,P=y/D,M=_/2,w=y/2,N=A/2,z=C+1,L=D+1;let F=0,K=0;const ae=new R;for(let G=0;G<L;G++){const W=G*P-w;for(let Q=0;Q<z;Q++){const ee=Q*k-M;ae[v]=ee*m,ae[x]=W*b,ae[f]=N,c.push(ae.x,ae.y,ae.z),ae[v]=0,ae[x]=0,ae[f]=A>0?1:-1,u.push(ae.x,ae.y,ae.z),h.push(Q/C),h.push(1-G/D),F+=1}}for(let G=0;G<D;G++)for(let W=0;W<C;W++){const Q=d+W+z*G,ee=d+W+z*(G+1),re=d+(W+1)+z*(G+1),ce=d+(W+1)+z*G;l.push(Q,ee,ce),l.push(ee,re,ce),K+=6}o.addGroup(p,K,O),p+=K,d+=F}}static fromJSON(e){return new jr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $i(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Lt(r){const e={};for(let t=0;t<r.length;t++){const n=$i(r[t]);for(const i in n)e[i]=n[i]}return e}const Rp={clone:$i,merge:Lt};var Pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends Dt{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Pp,this.fragmentShader=Ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$i(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}kn.prototype.isShaderMaterial=!0;class jo extends et{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}jo.prototype.isCamera=!0;class zt extends jo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yo*2*Math.atan(Math.tan(wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}zt.prototype.isPerspectiveCamera=!0;const Di=90,Fi=1;class Xo extends et{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new zt(Di,Fi,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new R(1,0,0)),this.add(i);const s=new zt(Di,Fi,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new R(-1,0,0)),this.add(s);const a=new zt(Di,Fi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new R(0,1,0)),this.add(a);const o=new zt(Di,Fi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new R(0,-1,0)),this.add(o);const l=new zt(Di,Fi,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new R(0,0,1)),this.add(l);const c=new zt(Di,Fi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new R(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,l,c]=this.children,u=e.xr.enabled,h=e.getRenderTarget();e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.xr.enabled=u}}class la extends Tt{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Wr,super(e,t,n,i,s,a,o,l,c,u),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}la.prototype.isCubeTexture=!0;class Gu extends Kt{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new la(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=wt,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new jr(5,5,5),s=new kn({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gt,blending:$n});s.uniforms.tEquirect.value=t;const a=new Bt(i,s),o=t.minFilter;return t.minFilter===aa&&(t.minFilter=kt),new Xo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}Gu.prototype.isWebGLCubeRenderTarget=!0;const ja=new R,Dp=new R,Fp=new At;class Fn{constructor(e=new R(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ja.subVectors(n,t).cross(Dp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(ja),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Fp.getNormalMatrix(e),i=this.coplanarPoint(ja).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}Fn.prototype.isPlane=!0;const Ni=new rr,xs=new R;class ca{constructor(e=new Fn,t=new Fn,n=new Fn,i=new Fn,s=new Fn,a=new Fn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],p=n[9],g=n[10],v=n[11],x=n[12],f=n[13],m=n[14],b=n[15];return t[0].setComponents(o-i,h-l,v-d,b-x).normalize(),t[1].setComponents(o+i,h+l,v+d,b+x).normalize(),t[2].setComponents(o+s,h+c,v+p,b+f).normalize(),t[3].setComponents(o-s,h-c,v-p,b-f).normalize(),t[4].setComponents(o-a,h-u,v-g,b-m).normalize(),t[5].setComponents(o+a,h+u,v+g,b+m).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSprite(e){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(xs.x=i.normal.x>0?e.max.x:e.min.x,xs.y=i.normal.y>0?e.max.y:e.min.y,xs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(xs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wu(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Np(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,p=r.createBuffer();r.bindBuffer(u,p),r.bufferData(u,h,d),c.onUploadCallback();let g=5126;return h instanceof Float32Array?g=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?c.isFloat16BufferAttribute?t?g=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):g=5123:h instanceof Int16Array?g=5122:h instanceof Uint32Array?g=5125:h instanceof Int32Array?g=5124:h instanceof Int8Array?g=5120:(h instanceof Uint8Array||h instanceof Uint8ClampedArray)&&(g=5121),{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const d=u.array,p=u.updateRange;r.bindBuffer(h,c),p.count===-1?r.bufferSubData(h,0,d):(t?r.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):r.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class ua extends ut{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,p=[],g=[],v=[],x=[];for(let f=0;f<u;f++){const m=f*d-a;for(let b=0;b<c;b++){const _=b*h-s;g.push(_,-m,0),v.push(0,0,1),x.push(b/o),x.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<o;m++){const b=m+c*f,_=m+c*(f+1),y=m+1+c*(f+1),A=m+1+c*f;p.push(b,_,A),p.push(_,y,A)}this.setIndex(p),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(v,3)),this.setAttribute("uv",new St(x,2))}static fromJSON(e){return new ua(e.width,e.height,e.widthSegments,e.heightSegments)}}var zp=`#ifdef USE_ALPHAMAP
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
}`,_m=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ym=`#ifdef USE_LIGHTMAP
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
#endif`,Nm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,zm=`#ifdef USE_LOGDEPTHBUF
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
#endif`,_g=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yg=`#ifndef saturate
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
}`,Ng=`#if DEPTH_PACKING == 3200
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
}`,zg=`#define DISTANCE
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
}`,je={alphamap_fragment:zp,alphamap_pars_fragment:kp,alphatest_fragment:Bp,alphatest_pars_fragment:Op,aomap_fragment:Up,aomap_pars_fragment:Vp,begin_vertex:Hp,beginnormal_vertex:Gp,bsdfs:Wp,bumpmap_pars_fragment:qp,clipping_planes_fragment:jp,clipping_planes_pars_fragment:Xp,clipping_planes_pars_vertex:Yp,clipping_planes_vertex:Zp,color_fragment:Jp,color_pars_fragment:$p,color_pars_vertex:Qp,color_vertex:Kp,common:em,cube_uv_reflection_fragment:tm,defaultnormal_vertex:nm,displacementmap_pars_vertex:im,displacementmap_vertex:rm,emissivemap_fragment:sm,emissivemap_pars_fragment:am,encodings_fragment:om,encodings_pars_fragment:lm,envmap_fragment:cm,envmap_common_pars_fragment:um,envmap_pars_fragment:hm,envmap_pars_vertex:dm,envmap_physical_pars_fragment:wm,envmap_vertex:fm,fog_vertex:pm,fog_pars_vertex:mm,fog_fragment:gm,fog_pars_fragment:vm,gradientmap_pars_fragment:xm,lightmap_fragment:_m,lightmap_pars_fragment:ym,lights_lambert_vertex:bm,lights_pars_begin:Mm,lights_toon_fragment:Sm,lights_toon_pars_fragment:Tm,lights_phong_fragment:Em,lights_phong_pars_fragment:Am,lights_physical_fragment:Cm,lights_physical_pars_fragment:Lm,lights_fragment_begin:Rm,lights_fragment_maps:Pm,lights_fragment_end:Im,logdepthbuf_fragment:Dm,logdepthbuf_pars_fragment:Fm,logdepthbuf_pars_vertex:Nm,logdepthbuf_vertex:zm,map_fragment:km,map_pars_fragment:Bm,map_particle_fragment:Om,map_particle_pars_fragment:Um,metalnessmap_fragment:Vm,metalnessmap_pars_fragment:Hm,morphnormal_vertex:Gm,morphtarget_pars_vertex:Wm,morphtarget_vertex:qm,normal_fragment_begin:jm,normal_fragment_maps:Xm,normal_pars_fragment:Ym,normal_pars_vertex:Zm,normal_vertex:Jm,normalmap_pars_fragment:$m,clearcoat_normal_fragment_begin:Qm,clearcoat_normal_fragment_maps:Km,clearcoat_pars_fragment:eg,output_fragment:tg,packing:ng,premultiplied_alpha_fragment:ig,project_vertex:rg,dithering_fragment:sg,dithering_pars_fragment:ag,roughnessmap_fragment:og,roughnessmap_pars_fragment:lg,shadowmap_pars_fragment:cg,shadowmap_pars_vertex:ug,shadowmap_vertex:hg,shadowmask_pars_fragment:dg,skinbase_vertex:fg,skinning_pars_vertex:pg,skinning_vertex:mg,skinnormal_vertex:gg,specularmap_fragment:vg,specularmap_pars_fragment:xg,tonemapping_fragment:_g,tonemapping_pars_fragment:yg,transmission_fragment:bg,transmission_pars_fragment:Mg,uv_pars_fragment:wg,uv_pars_vertex:Sg,uv_vertex:Tg,uv2_pars_fragment:Eg,uv2_pars_vertex:Ag,uv2_vertex:Cg,worldpos_vertex:Lg,background_vert:Rg,background_frag:Pg,cube_vert:Ig,cube_frag:Dg,depth_vert:Fg,depth_frag:Ng,distanceRGBA_vert:zg,distanceRGBA_frag:kg,equirect_vert:Bg,equirect_frag:Og,linedashed_vert:Ug,linedashed_frag:Vg,meshbasic_vert:Hg,meshbasic_frag:Gg,meshlambert_vert:Wg,meshlambert_frag:qg,meshmatcap_vert:jg,meshmatcap_frag:Xg,meshnormal_vert:Yg,meshnormal_frag:Zg,meshphong_vert:Jg,meshphong_frag:$g,meshphysical_vert:Qg,meshphysical_frag:Kg,meshtoon_vert:ev,meshtoon_frag:tv,points_vert:nv,points_frag:iv,shadow_vert:rv,shadow_frag:sv,sprite_vert:av,sprite_frag:ov},xe={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new At},uv2Transform:{value:new At},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new At}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new At}}},vn={basic:{uniforms:Lt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Lt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.fog,xe.lights,{emissive:{value:new Le(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Lt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Lt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Lt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Le(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Lt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Lt([xe.points,xe.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Lt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Lt([xe.common,xe.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Lt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Lt([xe.sprite,xe.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new At},t2D:{value:null}},vertexShader:je.background_vert,fragmentShader:je.background_frag},cube:{uniforms:Lt([xe.envmap,{opacity:{value:1}}]),vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Lt([xe.common,xe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Lt([xe.lights,xe.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};vn.physical={uniforms:Lt([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new le(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenRoughness:{value:0},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};function lv(r,e,t,n,i){const s=new Le(0);let a=0,o,l,c=null,u=0,h=null;function d(g,v){let x=!1,f=v.isScene===!0?v.background:null;f&&f.isTexture&&(f=e.get(f));const m=r.xr,b=m.getSession&&m.getSession();b&&b.environmentBlendMode==="additive"&&(f=null),f===null?p(s,a):f&&f.isColor&&(p(f,1),x=!0),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),f&&(f.isCubeTexture||f.mapping===sa)?(l===void 0&&(l=new Bt(new jr(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:$i(vn.cube.uniforms),vertexShader:vn.cube.vertexShader,fragmentShader:vn.cube.fragmentShader,side:gt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(_,y,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=f,l.material.uniforms.flipEnvMap.value=f.isCubeTexture&&f.isRenderTargetTexture===!1?-1:1,(c!==f||u!==f.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,c=f,u=f.version,h=r.toneMapping),g.unshift(l,l.geometry,l.material,0,0,null)):f&&f.isTexture&&(o===void 0&&(o=new Bt(new ua(2,2),new kn({name:"BackgroundMaterial",uniforms:$i(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:zr,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=f,f.matrixAutoUpdate===!0&&f.updateMatrix(),o.material.uniforms.uvTransform.value.copy(f.matrix),(c!==f||u!==f.version||h!==r.toneMapping)&&(o.material.needsUpdate=!0,c=f,u=f.version,h=r.toneMapping),g.unshift(o,o.geometry,o.material,0,0,null))}function p(g,v){t.buffers.color.setClear(g.r,g.g,g.b,v,i)}return{getClearColor:function(){return s},setClearColor:function(g,v=1){s.set(g),a=v,p(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,p(s,a)},render:d}}function cv(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=v(null);let c=l;function u(w,N,z,L,F){let K=!1;if(a){const ae=g(L,z,N);c!==ae&&(c=ae,d(c.object)),K=x(L,F),K&&f(L,F)}else{const ae=N.wireframe===!0;(c.geometry!==L.id||c.program!==z.id||c.wireframe!==ae)&&(c.geometry=L.id,c.program=z.id,c.wireframe=ae,K=!0)}w.isInstancedMesh===!0&&(K=!0),F!==null&&t.update(F,34963),K&&(C(w,N,z,L),F!==null&&r.bindBuffer(34963,t.get(F).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(w){return n.isWebGL2?r.bindVertexArray(w):s.bindVertexArrayOES(w)}function p(w){return n.isWebGL2?r.deleteVertexArray(w):s.deleteVertexArrayOES(w)}function g(w,N,z){const L=z.wireframe===!0;let F=o[w.id];F===void 0&&(F={},o[w.id]=F);let K=F[N.id];K===void 0&&(K={},F[N.id]=K);let ae=K[L];return ae===void 0&&(ae=v(h()),K[L]=ae),ae}function v(w){const N=[],z=[],L=[];for(let F=0;F<i;F++)N[F]=0,z[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:L,object:w,attributes:{},index:null}}function x(w,N){const z=c.attributes,L=w.attributes;let F=0;for(const K in L){const ae=z[K],G=L[K];if(ae===void 0||ae.attribute!==G||ae.data!==G.data)return!0;F++}return c.attributesNum!==F||c.index!==N}function f(w,N){const z={},L=w.attributes;let F=0;for(const K in L){const ae=L[K],G={};G.attribute=ae,ae.data&&(G.data=ae.data),z[K]=G,F++}c.attributes=z,c.attributesNum=F,c.index=N}function m(){const w=c.newAttributes;for(let N=0,z=w.length;N<z;N++)w[N]=0}function b(w){_(w,0)}function _(w,N){const z=c.newAttributes,L=c.enabledAttributes,F=c.attributeDivisors;z[w]=1,L[w]===0&&(r.enableVertexAttribArray(w),L[w]=1),F[w]!==N&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](w,N),F[w]=N)}function y(){const w=c.newAttributes,N=c.enabledAttributes;for(let z=0,L=N.length;z<L;z++)N[z]!==w[z]&&(r.disableVertexAttribArray(z),N[z]=0)}function A(w,N,z,L,F,K){n.isWebGL2===!0&&(z===5124||z===5125)?r.vertexAttribIPointer(w,N,z,F,K):r.vertexAttribPointer(w,N,z,L,F,K)}function C(w,N,z,L){if(n.isWebGL2===!1&&(w.isInstancedMesh||L.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const F=L.attributes,K=z.getAttributes(),ae=N.defaultAttributeValues;for(const G in K){const W=K[G];if(W.location>=0){let Q=F[G];if(Q===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(Q=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(Q=w.instanceColor)),Q!==void 0){const ee=Q.normalized,re=Q.itemSize,ce=t.get(Q);if(ce===void 0)continue;const j=ce.buffer,de=ce.type,we=ce.bytesPerElement;if(Q.isInterleavedBufferAttribute){const ve=Q.data,Se=ve.stride,He=Q.offset;if(ve&&ve.isInstancedInterleavedBuffer){for(let X=0;X<W.locationSize;X++)_(W.location+X,ve.meshPerAttribute);w.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let X=0;X<W.locationSize;X++)b(W.location+X);r.bindBuffer(34962,j);for(let X=0;X<W.locationSize;X++)A(W.location+X,re/W.locationSize,de,ee,Se*we,(He+re/W.locationSize*X)*we)}else{if(Q.isInstancedBufferAttribute){for(let ve=0;ve<W.locationSize;ve++)_(W.location+ve,Q.meshPerAttribute);w.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ve=0;ve<W.locationSize;ve++)b(W.location+ve);r.bindBuffer(34962,j);for(let ve=0;ve<W.locationSize;ve++)A(W.location+ve,re/W.locationSize,de,ee,re*we,re/W.locationSize*ve*we)}}else if(ae!==void 0){const ee=ae[G];if(ee!==void 0)switch(ee.length){case 2:r.vertexAttrib2fv(W.location,ee);break;case 3:r.vertexAttrib3fv(W.location,ee);break;case 4:r.vertexAttrib4fv(W.location,ee);break;default:r.vertexAttrib1fv(W.location,ee)}}}}y()}function D(){P();for(const w in o){const N=o[w];for(const z in N){const L=N[z];for(const F in L)p(L[F].object),delete L[F];delete N[z]}delete o[w]}}function O(w){if(o[w.id]===void 0)return;const N=o[w.id];for(const z in N){const L=N[z];for(const F in L)p(L[F].object),delete L[F];delete N[z]}delete o[w.id]}function k(w){for(const N in o){const z=o[N];if(z[w.id]===void 0)continue;const L=z[w.id];for(const F in L)p(L[F].object),delete L[F];delete z[w.id]}}function P(){M(),c!==l&&(c=l,d(c.object))}function M(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:P,resetDefaultState:M,dispose:D,releaseStatesOfGeometry:O,releaseStatesOfProgram:k,initAttributes:m,enableAttribute:b,disableUnusedAttributes:y}}function uv(r,e,t,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let d,p;if(i)d=r,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,c,u,h),t.update(u,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function hv(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(C){if(C==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),d=r.getParameter(35660),p=r.getParameter(3379),g=r.getParameter(34076),v=r.getParameter(34921),x=r.getParameter(36347),f=r.getParameter(36348),m=r.getParameter(36349),b=d>0,_=a||e.has("OES_texture_float"),y=b&&_,A=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:x,maxVaryings:f,maxFragmentUniforms:m,vertexTextures:b,floatFragmentTextures:_,floatVertexTextures:y,maxSamples:A}}function dv(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Fn,o=new At,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,p){const g=h.length!==0||d||n!==0||i;return i=d,t=u(h,p,0),n=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,d,p){const g=h.clippingPlanes,v=h.clipIntersection,x=h.clipShadows,f=r.get(h);if(!i||g===null||g.length===0||s&&!x)s?u(null):c();else{const m=s?0:n,b=m*4;let _=f.clippingState||null;l.value=_,_=u(g,d,b,p);for(let y=0;y!==b;++y)_[y]=t[y];f.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){const v=h!==null?h.length:0;let x=null;if(v!==0){if(x=l.value,g!==!0||x===null){const f=p+v*4,m=d.matrixWorldInverse;o.getNormalMatrix(m),(x===null||x.length<f)&&(x=new Float32Array(f));for(let b=0,_=p;b!==v;++b,_+=4)a.copy(h[b]).applyMatrix4(m,o),a.normal.toArray(x,_),x[_+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}function fv(r){let e=new WeakMap;function t(a,o){return o===go?a.mapping=Wr:o===vo&&(a.mapping=qr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===go||o===vo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=r.getRenderTarget(),u=new Gu(l.height/2);return u.fromEquirectangularTexture(r,a),e.set(a,u),r.setRenderTarget(c),a.addEventListener("dispose",i),t(u.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Yo extends jo{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}Yo.prototype.isOrthographicCamera=!0;class ha extends kn{constructor(e){super(e),this.type="RawShaderMaterial"}}ha.prototype.isRawShaderMaterial=!0;const Xi=4,Kn=8,gn=Math.pow(2,Kn),qu=[.125,.215,.35,.446,.526,.582],ju=Kn-Xi+1+qu.length,zi=20,Zs={[cn]:0,[tr]:1},Xa=new Yo,{_lodPlanes:vr,_sizeLods:ic,_sigmas:_s}=mv(),rc=new Le;let Ya=null;const gi=(1+Math.sqrt(5))/2,ki=1/gi,sc=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,gi,ki),new R(0,gi,-ki),new R(ki,0,gi),new R(-ki,0,gi),new R(gi,ki,0),new R(-gi,ki,0)];class pv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=gv(zi),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ya=this._renderer.getRenderTarget();const s=this._allocateTargets();return this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=lc(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=oc(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<vr.length;e++)vr[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(Ya),e.scissorTest=!1,ys(e,0,0,e.width,e.height)}_fromTexture(e){Ya=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:vi,format:wt,encoding:cn,depthBuffer:!1},n=ac(t);return n.depthBuffer=!e,this._pingPongRenderTarget=ac(t),n}_compileMaterial(e){const t=new Bt(vr[0],e);this._renderer.compile(t,Xa)}_sceneToCubeUV(e,t,n,i){const o=new zt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(rc),u.toneMapping=Qn,u.autoClear=!1;const p=new qo({name:"PMREM.Background",side:gt,depthWrite:!1,depthTest:!1}),g=new Bt(new jr,p);let v=!1;const x=e.background;x?x.isColor&&(p.color.copy(x),e.background=null,v=!0):(p.color.copy(rc),v=!0);for(let f=0;f<6;f++){const m=f%3;m==0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):m==1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f])),ys(i,m*gn,f>2?gn:0,gn,gn),u.setRenderTarget(i),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=x}_setEncoding(e,t){this._renderer.capabilities.isWebGL2===!0&&t.format===wt&&t.type===zn&&t.encoding===tr?e.value=Zs[cn]:e.value=Zs[t.encoding]}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Wr||e.mapping===qr;i?this._cubemapShader==null&&(this._cubemapShader=lc()):this._equirectShader==null&&(this._equirectShader=oc());const s=i?this._cubemapShader:this._equirectShader,a=new Bt(vr[0],s),o=s.uniforms;o.envMap.value=e,i||o.texelSize.value.set(1/e.image.width,1/e.image.height),this._setEncoding(o.inputEncoding,e),ys(t,0,0,3*gn,2*gn),n.setRenderTarget(t),n.render(a,Xa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<ju;i++){const s=Math.sqrt(_s[i]*_s[i]-_s[i-1]*_s[i-1]),a=sc[(i-1)%sc.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Bt(vr[i],c),d=c.uniforms,p=ic[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*zi-1),v=s/g,x=isFinite(s)?1+Math.floor(u*v):zi;x>zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${zi}`);const f=[];let m=0;for(let A=0;A<zi;++A){const C=A/v,D=Math.exp(-C*C/2);f.push(D),A==0?m+=D:A<x&&(m+=2*D)}for(let A=0;A<f.length;A++)f[A]=f[A]/m;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o),d.dTheta.value=g,d.mipInt.value=Kn-n;const b=ic[i],_=3*Math.max(0,gn-2*b),y=(i===0?0:2*gn)+2*b*(i>Kn-Xi?i-Kn+Xi:0);ys(t,_,y,3*b,2*b),l.setRenderTarget(t),l.render(h,Xa)}}function mv(){const r=[],e=[],t=[];let n=Kn;for(let i=0;i<ju;i++){const s=Math.pow(2,n);e.push(s);let a=1/s;i>Kn-Xi?a=qu[i-Kn+Xi-1]:i==0&&(a=0),t.push(a);const o=1/(s-1),l=-o/2,c=1+o/2,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,p=3,g=2,v=1,x=new Float32Array(p*d*h),f=new Float32Array(g*d*h),m=new Float32Array(v*d*h);for(let _=0;_<h;_++){const y=_%3*2/3-1,A=_>2?0:-1,C=[y,A,0,y+2/3,A,0,y+2/3,A+1,0,y,A,0,y+2/3,A+1,0,y,A+1,0];x.set(C,p*d*_),f.set(u,g*d*_);const D=[_,_,_,_,_,_];m.set(D,v*d*_)}const b=new ut;b.setAttribute("position",new _t(x,p)),b.setAttribute("uv",new _t(f,g)),b.setAttribute("faceIndex",new _t(m,v)),r.push(b),n>Xi&&n--}return{_lodPlanes:r,_sizeLods:e,_sigmas:t}}function ac(r){const e=new Kt(3*gn,3*gn,r);return e.texture.mapping=sa,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function ys(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function gv(r){const e=new Float32Array(r),t=new R(0,1,0);return new ha({name:"SphericalGaussianBlur",defines:{n:r},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t}},vertexShader:Zo(),fragmentShader:`

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

			${Jo()}

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function oc(){const r=new le(1,1);return new ha({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:r},inputEncoding:{value:Zs[cn]}},vertexShader:Zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${Jo()}

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function lc(){return new ha({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:Zs[cn]}},vertexShader:Zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${Jo()}

			void main() {

				gl_FragColor = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Zo(){return`

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
	`}function Jo(){return`

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
	`}function vv(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const l=o.mapping,c=l===go||l===vo,u=l===Wr||l===qr;if(c||u){if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){const d=r.getRenderTarget();t===null&&(t=new pv(r));const p=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,p),r.setRenderTarget(d),o.addEventListener("dispose",s),p.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function xv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function _v(r,e,t,n){const i={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],34962);const p=h.morphAttributes;for(const g in p){const v=p[g];for(let x=0,f=v.length;x<f;x++)e.update(v[x],34962)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const m=p.array;v=p.version;for(let b=0,_=m.length;b<_;b+=3){const y=m[b+0],A=m[b+1],C=m[b+2];d.push(y,A,A,C,C,y)}}else{const m=g.array;v=g.version;for(let b=0,_=m.length/3-1;b<_;b+=3){const y=b+0,A=b+1,C=b+2;d.push(y,A,A,C,C,y)}}const x=new(Bu(d)>65535?Hu:Vu)(d,1);x.version=v;const f=s.get(h);f&&e.remove(f),s.set(h,x)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function yv(r,e,t,n){const i=n.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,p){r.drawElements(s,p,o,d*l),t.update(p,s,1)}function h(d,p,g){if(g===0)return;let v,x;if(i)v=r,x="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[x](s,p,o,d*l,g),t.update(p,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function bv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}class $o extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=vt,this.minFilter=vt,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}$o.prototype.isDataTexture2DArray=!0;function Mv(r,e){return r[0]-e[0]}function wv(r,e){return Math.abs(e[1])-Math.abs(r[1])}function cc(r,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),r.divideScalar(t)}function Sv(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new R,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h,d){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position.length;let v=s.get(u);if(v===void 0||v.count!==g){v!==void 0&&v.texture.dispose();const m=u.morphAttributes.normal!==void 0,b=u.morphAttributes.position,_=u.morphAttributes.normal||[],y=u.attributes.position.count,A=m===!0?2:1;let C=y*A,D=1;C>e.maxTextureSize&&(D=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const O=new Float32Array(C*D*4*g),k=new $o(O,C,D,g);k.format=wt,k.type=Zn,k.needsUpdate=!0;const P=A*4;for(let M=0;M<g;M++){const w=b[M],N=_[M],z=C*D*4*M;for(let L=0;L<w.count;L++){a.fromBufferAttribute(w,L),w.normalized===!0&&cc(a,w);const F=L*P;O[z+F+0]=a.x,O[z+F+1]=a.y,O[z+F+2]=a.z,O[z+F+3]=0,m===!0&&(a.fromBufferAttribute(N,L),N.normalized===!0&&cc(a,N),O[z+F+4]=a.x,O[z+F+5]=a.y,O[z+F+6]=a.z,O[z+F+7]=0)}}v={count:g,texture:k,size:new le(C,D)},s.set(u,v)}let x=0;for(let m=0;m<p.length;m++)x+=p[m];const f=u.morphTargetsRelative?1:1-x;d.getUniforms().setValue(r,"morphTargetBaseInfluence",f),d.getUniforms().setValue(r,"morphTargetInfluences",p),d.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}else{const g=p===void 0?0:p.length;let v=n[u.id];if(v===void 0||v.length!==g){v=[];for(let _=0;_<g;_++)v[_]=[_,0];n[u.id]=v}for(let _=0;_<g;_++){const y=v[_];y[0]=_,y[1]=p[_]}v.sort(wv);for(let _=0;_<8;_++)_<g&&v[_][1]?(o[_][0]=v[_][0],o[_][1]=v[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(Mv);const x=u.morphAttributes.position,f=u.morphAttributes.normal;let m=0;for(let _=0;_<8;_++){const y=o[_],A=y[0],C=y[1];A!==Number.MAX_SAFE_INTEGER&&C?(x&&u.getAttribute("morphTarget"+_)!==x[A]&&u.setAttribute("morphTarget"+_,x[A]),f&&u.getAttribute("morphNormal"+_)!==f[A]&&u.setAttribute("morphNormal"+_,f[A]),i[_]=C,m+=C):(x&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),f&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),i[_]=0)}const b=u.morphTargetsRelative?1:1-m;d.getUniforms().setValue(r,"morphTargetBaseInfluence",b),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Tv(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Xu extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=vt,this.minFilter=vt,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Xu.prototype.isDataTexture3D=!0;const Yu=new Tt,Zu=new $o,Ju=new Xu,$u=new la,uc=[],hc=[],dc=new Float32Array(16),fc=new Float32Array(9),pc=new Float32Array(4);function or(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=uc[i];if(s===void 0&&(s=new Float32Array(i),uc[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Ot(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function It(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function da(r,e){let t=hc[e];t===void 0&&(t=new Int32Array(e),hc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Ev(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Av(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;r.uniform2fv(this.addr,e),It(t,e)}}function Cv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;r.uniform3fv(this.addr,e),It(t,e)}}function Lv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;r.uniform4fv(this.addr,e),It(t,e)}}function Rv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Ot(t,n))return;pc.set(n),r.uniformMatrix2fv(this.addr,!1,pc),It(t,n)}}function Pv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Ot(t,n))return;fc.set(n),r.uniformMatrix3fv(this.addr,!1,fc),It(t,n)}}function Iv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Ot(t,n))return;dc.set(n),r.uniformMatrix4fv(this.addr,!1,dc),It(t,n)}}function Dv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Fv(r,e){const t=this.cache;Ot(t,e)||(r.uniform2iv(this.addr,e),It(t,e))}function Nv(r,e){const t=this.cache;Ot(t,e)||(r.uniform3iv(this.addr,e),It(t,e))}function zv(r,e){const t=this.cache;Ot(t,e)||(r.uniform4iv(this.addr,e),It(t,e))}function kv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Bv(r,e){const t=this.cache;Ot(t,e)||(r.uniform2uiv(this.addr,e),It(t,e))}function Ov(r,e){const t=this.cache;Ot(t,e)||(r.uniform3uiv(this.addr,e),It(t,e))}function Uv(r,e){const t=this.cache;Ot(t,e)||(r.uniform4uiv(this.addr,e),It(t,e))}function Vv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||Yu,i)}function Hv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ju,i)}function Gv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||$u,i)}function Wv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Zu,i)}function qv(r){switch(r){case 5126:return Ev;case 35664:return Av;case 35665:return Cv;case 35666:return Lv;case 35674:return Rv;case 35675:return Pv;case 35676:return Iv;case 5124:case 35670:return Dv;case 35667:case 35671:return Fv;case 35668:case 35672:return Nv;case 35669:case 35673:return zv;case 5125:return kv;case 36294:return Bv;case 36295:return Ov;case 36296:return Uv;case 35678:case 36198:case 36298:case 36306:case 35682:return Vv;case 35679:case 36299:case 36307:return Hv;case 35680:case 36300:case 36308:case 36293:return Gv;case 36289:case 36303:case 36311:case 36292:return Wv}}function jv(r,e){r.uniform1fv(this.addr,e)}function Xv(r,e){const t=or(e,this.size,2);r.uniform2fv(this.addr,t)}function Yv(r,e){const t=or(e,this.size,3);r.uniform3fv(this.addr,t)}function Zv(r,e){const t=or(e,this.size,4);r.uniform4fv(this.addr,t)}function Jv(r,e){const t=or(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function $v(r,e){const t=or(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Qv(r,e){const t=or(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Kv(r,e){r.uniform1iv(this.addr,e)}function e0(r,e){r.uniform2iv(this.addr,e)}function t0(r,e){r.uniform3iv(this.addr,e)}function n0(r,e){r.uniform4iv(this.addr,e)}function i0(r,e){r.uniform1uiv(this.addr,e)}function r0(r,e){r.uniform2uiv(this.addr,e)}function s0(r,e){r.uniform3uiv(this.addr,e)}function a0(r,e){r.uniform4uiv(this.addr,e)}function o0(r,e,t){const n=e.length,i=da(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTexture2D(e[s]||Yu,i[s])}function l0(r,e,t){const n=e.length,i=da(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Ju,i[s])}function c0(r,e,t){const n=e.length,i=da(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTextureCube(e[s]||$u,i[s])}function u0(r,e,t){const n=e.length,i=da(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||Zu,i[s])}function h0(r){switch(r){case 5126:return jv;case 35664:return Xv;case 35665:return Yv;case 35666:return Zv;case 35674:return Jv;case 35675:return $v;case 35676:return Qv;case 5124:case 35670:return Kv;case 35667:case 35671:return e0;case 35668:case 35672:return t0;case 35669:case 35673:return n0;case 5125:return i0;case 36294:return r0;case 36295:return s0;case 36296:return a0;case 35678:case 36198:case 36298:case 36306:case 35682:return o0;case 35679:case 36299:case 36307:return l0;case 35680:case 36300:case 36308:case 36293:return c0;case 36289:case 36303:case 36311:case 36292:return u0}}function d0(r,e,t){this.id=r,this.addr=t,this.cache=[],this.setValue=qv(e.type)}function Qu(r,e,t){this.id=r,this.addr=t,this.cache=[],this.size=e.size,this.setValue=h0(e.type)}Qu.prototype.updateCache=function(r){const e=this.cache;r instanceof Float32Array&&e.length!==r.length&&(this.cache=new Float32Array(r.length)),It(e,r)};function Ku(r){this.id=r,this.seq=[],this.map={}}Ku.prototype.setValue=function(r,e,t){const n=this.seq;for(let i=0,s=n.length;i!==s;++i){const a=n[i];a.setValue(r,e[a.id],t)}};const Za=/(\w+)(\])?(\[|\.)?/g;function mc(r,e){r.seq.push(e),r.map[e.id]=e}function f0(r,e,t){const n=r.name,i=n.length;for(Za.lastIndex=0;;){const s=Za.exec(n),a=Za.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){mc(t,c===void 0?new d0(o,r,e):new Qu(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new Ku(o),mc(t,h)),t=h}}}function ei(r,e){this.seq=[],this.map={};const t=r.getProgramParameter(e,35718);for(let n=0;n<t;++n){const i=r.getActiveUniform(e,n),s=r.getUniformLocation(e,i.name);f0(i,s,this)}}ei.prototype.setValue=function(r,e,t,n){const i=this.map[e];i!==void 0&&i.setValue(r,t,n)};ei.prototype.setOptional=function(r,e,t){const n=e[t];n!==void 0&&this.setValue(r,t,n)};ei.upload=function(r,e,t,n){for(let i=0,s=e.length;i!==s;++i){const a=e[i],o=t[a.id];o.needsUpdate!==!1&&a.setValue(r,o.value,n)}};ei.seqWithValue=function(r,e){const t=[];for(let n=0,i=r.length;n!==i;++n){const s=r[n];s.id in e&&t.push(s)}return t};function gc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let p0=0;function m0(r){const e=r.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function eh(r){switch(r){case cn:return["Linear","( value )"];case tr:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function vc(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();return n&&i===""?"":t.toUpperCase()+`

`+i+`

`+m0(r.getShaderSource(e))}function hi(r,e){const t=eh(e);return"vec4 "+r+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function g0(r,e){const t=eh(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function v0(r,e){let t;switch(e){case uf:t="Linear";break;case hf:t="Reinhard";break;case df:t="OptimizedCineon";break;case ff:t="ACESFilmic";break;case pf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function x0(r){return[r.extensionDerivatives||r.envMapCubeUV||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Sr).join(`
`)}function _0(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function y0(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Sr(r){return r!==""}function xc(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _c(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const b0=/^[ \t]*#include +<([\w\d./]+)>/gm;function bo(r){return r.replace(b0,M0)}function M0(r,e){const t=je[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return bo(t)}const w0=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,S0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yc(r){return r.replace(S0,th).replace(w0,T0)}function T0(r,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),th(r,e,t,n)}function th(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function bc(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function E0(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Iu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Vd?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===wr&&(e="SHADOWMAP_TYPE_VSM"),e}function A0(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Wr:case qr:e="ENVMAP_TYPE_CUBE";break;case sa:case Ho:e="ENVMAP_TYPE_CUBE_UV";break}return e}function C0(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case qr:case Ho:e="ENVMAP_MODE_REFRACTION";break}return e}function L0(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ra:e="ENVMAP_BLENDING_MULTIPLY";break;case lf:e="ENVMAP_BLENDING_MIX";break;case cf:e="ENVMAP_BLENDING_ADD";break}return e}function R0(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=E0(t),c=A0(t),u=C0(t),h=L0(t),d=t.isWebGL2?"":x0(t),p=_0(s),g=i.createProgram();let v,x,f=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=[p].filter(Sr).join(`
`),v.length>0&&(v+=`
`),x=[d,p].filter(Sr).join(`
`),x.length>0&&(x+=`
`)):(v=[bc(t),"#define SHADER_NAME "+t.shaderName,p,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),x=[d,bc(t),"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?je.tonemapping_pars_fragment:"",t.toneMapping!==Qn?v0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.format===xi?"#define OPAQUE":"",je.encodings_pars_fragment,t.map?hi("mapTexelToLinear",t.mapEncoding):"",t.matcap?hi("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?hi("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?hi("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.specularColorMap?hi("specularColorMapTexelToLinear",t.specularColorMapEncoding):"",t.sheenColorMap?hi("sheenColorMapTexelToLinear",t.sheenColorMapEncoding):"",t.lightMap?hi("lightMapTexelToLinear",t.lightMapEncoding):"",g0("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sr).join(`
`)),a=bo(a),a=xc(a,t),a=_c(a,t),o=bo(o),o=xc(o,t),o=_c(o,t),a=yc(a),o=yc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,v=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,x=["#define varying in",t.glslVersion===Wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const m=f+v+a,b=f+x+o,_=gc(i,35633,m),y=gc(i,35632,b);if(i.attachShader(g,_),i.attachShader(g,y),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),r.debug.checkShaderErrors){const D=i.getProgramInfoLog(g).trim(),O=i.getShaderInfoLog(_).trim(),k=i.getShaderInfoLog(y).trim();let P=!0,M=!0;if(i.getProgramParameter(g,35714)===!1){P=!1;const w=vc(i,_,"vertex"),N=vc(i,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,35715)+`

Program Info Log: `+D+`
`+w+`
`+N)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(O===""||k==="")&&(M=!1);M&&(this.diagnostics={runnable:P,programLog:D,vertexShader:{log:O,prefix:v},fragmentShader:{log:k,prefix:x}})}i.deleteShader(_),i.deleteShader(y);let A;this.getUniforms=function(){return A===void 0&&(A=new ei(i,g)),A};let C;return this.getAttributes=function(){return C===void 0&&(C=y0(i,g)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=p0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=_,this.fragmentShader=y,this}let P0=0;class I0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new D0;t.set(e,n)}return t.get(e)}}class D0{constructor(){this.id=P0++,this.usedTimes=0}}function F0(r,e,t,n,i,s,a){const o=new Ou,l=new I0,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.floatVertexTextures,p=i.maxVertexUniforms,g=i.vertexTextures;let v=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(M){const N=M.skeleton.bones;if(d)return 1024;{const L=Math.floor((p-20)/4),F=Math.min(L,N.length);return F<N.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+N.length+" bones. This GPU supports "+F+"."),0):F}}function m(M){let w;return M&&M.isTexture?w=M.encoding:M&&M.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),w=M.texture.encoding):w=cn,u&&M&&M.isTexture&&M.format===wt&&M.type===zn&&M.encoding===tr&&(w=cn),w}function b(M,w,N,z,L){const F=z.fog,K=M.isMeshStandardMaterial?z.environment:null,ae=(M.isMeshStandardMaterial?t:e).get(M.envMap||K),G=x[M.type],W=L.isSkinnedMesh?f(L):0;M.precision!==null&&(v=i.getMaxPrecision(M.precision),v!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",v,"instead."));let Q,ee,re,ce;if(G){const Se=vn[G];Q=Se.vertexShader,ee=Se.fragmentShader}else Q=M.vertexShader,ee=M.fragmentShader,l.update(M),re=l.getVertexShaderID(M),ce=l.getFragmentShaderID(M);const j=r.getRenderTarget(),de=M.alphaTest>0,we=M.clearcoat>0;return{isWebGL2:u,shaderID:G,shaderName:M.type,vertexShader:Q,fragmentShader:ee,defines:M.defines,customVertexShaderID:re,customFragmentShaderID:ce,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:v,instancing:L.isInstancedMesh===!0,instancingColor:L.isInstancedMesh===!0&&L.instanceColor!==null,supportsVertexTextures:g,outputEncoding:j!==null?m(j.texture):r.outputEncoding,map:!!M.map,mapEncoding:m(M.map),matcap:!!M.matcap,matcapEncoding:m(M.matcap),envMap:!!ae,envMapMode:ae&&ae.mapping,envMapEncoding:m(ae),envMapCubeUV:!!ae&&(ae.mapping===sa||ae.mapping===Ho),lightMap:!!M.lightMap,lightMapEncoding:m(M.lightMap),aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,emissiveMapEncoding:m(M.emissiveMap),bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===fp,tangentSpaceNormalMap:M.normalMapType===nr,clearcoat:we,clearcoatMap:we&&!!M.clearcoatMap,clearcoatRoughnessMap:we&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:we&&!!M.clearcoatNormalMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,specularColorMapEncoding:m(M.specularColorMap),alphaMap:!!M.alphaMap,alphaTest:de,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenColorMapEncoding:m(M.sheenColorMap),sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!L.geometry&&!!L.geometry.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!L.geometry&&!!L.geometry.attributes.color&&L.geometry.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(M.map||M.bumpMap||M.normalMap||M.specularMap||M.alphaMap||M.emissiveMap||M.roughnessMap||M.metalnessMap||M.clearcoatNormalMap||M.transmission>0||M.transmissionMap||M.thicknessMap||M.specularIntensityMap||M.specularColorMap||M.sheen>0||M.sheenColorMap||M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!F,useFog:M.fog,fogExp2:F&&F.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:h,skinning:L.isSkinnedMesh===!0&&W>0,maxBones:W,useVertexTexture:d,morphTargets:!!L.geometry&&!!L.geometry.morphAttributes.position,morphNormals:!!L.geometry&&!!L.geometry.morphAttributes.normal,morphTargetsCount:L.geometry&&L.geometry.morphAttributes.position?L.geometry.morphAttributes.position.length:0,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,format:M.format,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&N.length>0,shadowMapType:r.shadowMap.type,toneMapping:M.toneMapped?r.toneMapping:Qn,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Zi,flipSided:M.side===gt,depthPacking:M.depthPacking!==void 0?M.depthPacking:!1,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function _(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)w.push(N),w.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(y(w,M),A(w,M),w.push(r.outputEncoding)),w.push(M.customProgramCacheKey),w.join()}function y(M,w){M.push(w.precision),M.push(w.outputEncoding),M.push(w.mapEncoding),M.push(w.matcapEncoding),M.push(w.envMapMode),M.push(w.envMapEncoding),M.push(w.lightMapEncoding),M.push(w.emissiveMapEncoding),M.push(w.combine),M.push(w.vertexUvs),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.maxBones),M.push(w.morphTargetsCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.format),M.push(w.specularColorMapEncoding),M.push(w.sheenColorMapEncoding)}function A(M,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.map&&o.enable(4),w.matcap&&o.enable(5),w.envMap&&o.enable(6),w.envMapCubeUV&&o.enable(7),w.lightMap&&o.enable(8),w.aoMap&&o.enable(9),w.emissiveMap&&o.enable(10),w.bumpMap&&o.enable(11),w.normalMap&&o.enable(12),w.objectSpaceNormalMap&&o.enable(13),w.tangentSpaceNormalMap&&o.enable(14),w.clearcoat&&o.enable(15),w.clearcoatMap&&o.enable(16),w.clearcoatRoughnessMap&&o.enable(17),w.clearcoatNormalMap&&o.enable(18),w.displacementMap&&o.enable(19),w.specularMap&&o.enable(20),w.roughnessMap&&o.enable(21),w.metalnessMap&&o.enable(22),w.gradientMap&&o.enable(23),w.alphaMap&&o.enable(24),w.alphaTest&&o.enable(25),w.vertexColors&&o.enable(26),w.vertexAlphas&&o.enable(27),w.vertexUvs&&o.enable(28),w.vertexTangents&&o.enable(29),w.uvsVertexOnly&&o.enable(30),w.fog&&o.enable(31),M.push(o.mask),o.disableAll(),w.useFog&&o.enable(0),w.flatShading&&o.enable(1),w.logarithmicDepthBuffer&&o.enable(2),w.skinning&&o.enable(3),w.useVertexTexture&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.premultipliedAlpha&&o.enable(7),w.shadowMapEnabled&&o.enable(8),w.physicallyCorrectLights&&o.enable(9),w.doubleSided&&o.enable(10),w.flipSided&&o.enable(11),w.depthPacking&&o.enable(12),w.dithering&&o.enable(13),w.specularIntensityMap&&o.enable(14),w.specularColorMap&&o.enable(15),w.transmission&&o.enable(16),w.transmissionMap&&o.enable(17),w.thicknessMap&&o.enable(18),w.sheen&&o.enable(19),w.sheenColorMap&&o.enable(20),w.sheenRoughnessMap&&o.enable(21),M.push(o.mask)}function C(M){const w=x[M.type];let N;if(w){const z=vn[w];N=Rp.clone(z.uniforms)}else N=M.uniforms;return N}function D(M,w){let N;for(let z=0,L=c.length;z<L;z++){const F=c[z];if(F.cacheKey===w){N=F,++N.usedTimes;break}}return N===void 0&&(N=new R0(r,w,M,s),c.push(N)),N}function O(M){if(--M.usedTimes===0){const w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),M.destroy()}}function k(M){l.remove(M)}function P(){l.dispose()}return{getParameters:b,getProgramCacheKey:_,getUniforms:C,acquireProgram:D,releaseProgram:O,releaseShaderCache:k,programs:c,dispose:P}}function N0(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function z0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Mc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function wc(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,p,g,v,x){let f=r[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:x},r[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=v,f.group=x),e++,f}function o(h,d,p,g,v,x){const f=a(h,d,p,g,v,x);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(h,d,p,g,v,x){const f=a(h,d,p,g,v,x);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||z0),n.length>1&&n.sort(d||Mc),i.length>1&&i.sort(d||Mc)}function u(){for(let h=e,d=r.length;h<d;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function k0(){let r=new WeakMap;function e(n,i){let s;return r.has(n)===!1?(s=new wc,r.set(n,[s])):i>=r.get(n).length?(s=new wc,r.get(n).push(s)):s=r.get(n)[i],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function B0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Le};break;case"SpotLight":t={position:new R,direction:new R,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new R,halfWidth:new R,halfHeight:new R};break}return r[e.id]=t,t}}}function O0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let U0=0;function V0(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function H0(r,e){const t=new B0,n=O0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new R);const s=new R,a=new De,o=new De;function l(u,h){let d=0,p=0,g=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let v=0,x=0,f=0,m=0,b=0,_=0,y=0,A=0;u.sort(V0);const C=h!==!0?Math.PI:1;for(let O=0,k=u.length;O<k;O++){const P=u[O],M=P.color,w=P.intensity,N=P.distance,z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=M.r*w*C,p+=M.g*w*C,g+=M.b*w*C;else if(P.isLightProbe)for(let L=0;L<9;L++)i.probe[L].addScaledVector(P.sh.coefficients[L],w);else if(P.isDirectionalLight){const L=t.get(P);if(L.color.copy(P.color).multiplyScalar(P.intensity*C),P.castShadow){const F=P.shadow,K=n.get(P);K.shadowBias=F.bias,K.shadowNormalBias=F.normalBias,K.shadowRadius=F.radius,K.shadowMapSize=F.mapSize,i.directionalShadow[v]=K,i.directionalShadowMap[v]=z,i.directionalShadowMatrix[v]=P.shadow.matrix,_++}i.directional[v]=L,v++}else if(P.isSpotLight){const L=t.get(P);if(L.position.setFromMatrixPosition(P.matrixWorld),L.color.copy(M).multiplyScalar(w*C),L.distance=N,L.coneCos=Math.cos(P.angle),L.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),L.decay=P.decay,P.castShadow){const F=P.shadow,K=n.get(P);K.shadowBias=F.bias,K.shadowNormalBias=F.normalBias,K.shadowRadius=F.radius,K.shadowMapSize=F.mapSize,i.spotShadow[f]=K,i.spotShadowMap[f]=z,i.spotShadowMatrix[f]=P.shadow.matrix,A++}i.spot[f]=L,f++}else if(P.isRectAreaLight){const L=t.get(P);L.color.copy(M).multiplyScalar(w),L.halfWidth.set(P.width*.5,0,0),L.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=L,m++}else if(P.isPointLight){const L=t.get(P);if(L.color.copy(P.color).multiplyScalar(P.intensity*C),L.distance=P.distance,L.decay=P.decay,P.castShadow){const F=P.shadow,K=n.get(P);K.shadowBias=F.bias,K.shadowNormalBias=F.normalBias,K.shadowRadius=F.radius,K.shadowMapSize=F.mapSize,K.shadowCameraNear=F.camera.near,K.shadowCameraFar=F.camera.far,i.pointShadow[x]=K,i.pointShadowMap[x]=z,i.pointShadowMatrix[x]=P.shadow.matrix,y++}i.point[x]=L,x++}else if(P.isHemisphereLight){const L=t.get(P);L.skyColor.copy(P.color).multiplyScalar(w*C),L.groundColor.copy(P.groundColor).multiplyScalar(w*C),i.hemi[b]=L,b++}}m>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;const D=i.hash;(D.directionalLength!==v||D.pointLength!==x||D.spotLength!==f||D.rectAreaLength!==m||D.hemiLength!==b||D.numDirectionalShadows!==_||D.numPointShadows!==y||D.numSpotShadows!==A)&&(i.directional.length=v,i.spot.length=f,i.rectArea.length=m,i.point.length=x,i.hemi.length=b,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=y,i.spotShadowMatrix.length=A,D.directionalLength=v,D.pointLength=x,D.spotLength=f,D.rectAreaLength=m,D.hemiLength=b,D.numDirectionalShadows=_,D.numPointShadows=y,D.numSpotShadows=A,i.version=U0++)}function c(u,h){let d=0,p=0,g=0,v=0,x=0;const f=h.matrixWorldInverse;for(let m=0,b=u.length;m<b;m++){const _=u[m];if(_.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),d++}else if(_.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(f),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),g++}else if(_.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(f),o.identity(),a.copy(_.matrixWorld),a.premultiply(f),o.extractRotation(a),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){const y=i.point[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(f),p++}else if(_.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(f),y.direction.normalize(),x++}}}return{setup:l,setupView:c,state:i}}function Sc(r,e){const t=new H0(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function G0(r,e){let t=new WeakMap;function n(s,a=0){let o;return t.has(s)===!1?(o=new Sc(r,e),t.set(s,[o])):a>=t.get(s).length?(o=new Sc(r,e),t.get(s).push(o)):o=t.get(s)[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class nh extends Dt{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=hp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}nh.prototype.isMeshDepthMaterial=!0;class ih extends Dt{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new R,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}ih.prototype.isMeshDistanceMaterial=!0;const W0=`void main() {
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
}`;function rh(r,e,t){let n=new ca;const i=new le,s=new le,a=new rt,o=new nh({depthPacking:dp}),l=new ih,c={},u=t.maxTextureSize,h={0:gt,1:zr,2:Zi},d=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:W0,fragmentShader:q0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new ut;g.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Bt(g,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Iu,this.render=function(_,y,A){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||_.length===0)return;const C=r.getRenderTarget(),D=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),k=r.state;k.setBlending($n),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);for(let P=0,M=_.length;P<M;P++){const w=_[P],N=w.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",w,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);const z=N.getFrameExtents();if(i.multiply(z),s.copy(N.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/z.x),i.x=s.x*z.x,N.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/z.y),i.y=s.y*z.y,N.mapSize.y=s.y)),N.map===null&&!N.isPointLightShadow&&this.type===wr){const F={minFilter:kt,magFilter:kt,format:wt};N.map=new Kt(i.x,i.y,F),N.map.texture.name=w.name+".shadowMap",N.mapPass=new Kt(i.x,i.y,F),N.camera.updateProjectionMatrix()}if(N.map===null){const F={minFilter:vt,magFilter:vt,format:wt};N.map=new Kt(i.x,i.y,F),N.map.texture.name=w.name+".shadowMap",N.camera.updateProjectionMatrix()}r.setRenderTarget(N.map),r.clear();const L=N.getViewportCount();for(let F=0;F<L;F++){const K=N.getViewport(F);a.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),k.viewport(a),N.updateMatrices(w,F),n=N.getFrustum(),b(y,A,N.camera,w,this.type)}!N.isPointLightShadow&&this.type===wr&&f(N,A),N.needsUpdate=!1}x.needsUpdate=!1,r.setRenderTarget(C,D,O)};function f(_,y){const A=e.update(v);d.defines.VSM_SAMPLES!==_.blurSamples&&(d.defines.VSM_SAMPLES=_.blurSamples,p.defines.VSM_SAMPLES=_.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),d.uniforms.shadow_pass.value=_.map.texture,d.uniforms.resolution.value=_.mapSize,d.uniforms.radius.value=_.radius,r.setRenderTarget(_.mapPass),r.clear(),r.renderBufferDirect(y,null,A,d,v,null),p.uniforms.shadow_pass.value=_.mapPass.texture,p.uniforms.resolution.value=_.mapSize,p.uniforms.radius.value=_.radius,r.setRenderTarget(_.map),r.clear(),r.renderBufferDirect(y,null,A,p,v,null)}function m(_,y,A,C,D,O,k){let P=null;const M=C.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(M!==void 0?P=M:P=C.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0){const w=P.uuid,N=A.uuid;let z=c[w];z===void 0&&(z={},c[w]=z);let L=z[N];L===void 0&&(L=P.clone(),z[N]=L),P=L}return P.visible=A.visible,P.wireframe=A.wireframe,k===wr?P.side=A.shadowSide!==null?A.shadowSide:A.side:P.side=A.shadowSide!==null?A.shadowSide:h[A.side],P.alphaMap=A.alphaMap,P.alphaTest=A.alphaTest,P.clipShadows=A.clipShadows,P.clippingPlanes=A.clippingPlanes,P.clipIntersection=A.clipIntersection,P.displacementMap=A.displacementMap,P.displacementScale=A.displacementScale,P.displacementBias=A.displacementBias,P.wireframeLinewidth=A.wireframeLinewidth,P.linewidth=A.linewidth,C.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(C.matrixWorld),P.nearDistance=D,P.farDistance=O),P}function b(_,y,A,C,D){if(_.visible===!1)return;if(_.layers.test(y.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&D===wr)&&(!_.frustumCulled||n.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,_.matrixWorld);const P=e.update(_),M=_.material;if(Array.isArray(M)){const w=P.groups;for(let N=0,z=w.length;N<z;N++){const L=w[N],F=M[L.materialIndex];if(F&&F.visible){const K=m(_,P,F,C,A.near,A.far,D);r.renderBufferDirect(A,null,P,K,_,L)}}}else if(M.visible){const w=m(_,P,M,C,A.near,A.far,D);r.renderBufferDirect(A,null,P,w,_,null)}}const k=_.children;for(let P=0,M=k.length;P<M;P++)b(k[P],y,A,C,D)}}function j0(r,e,t){const n=t.isWebGL2;function i(){let I=!1;const ge=new rt;let he=null;const Be=new rt(0,0,0,0);return{setMask:function(Te){he!==Te&&!I&&(r.colorMask(Te,Te,Te,Te),he=Te)},setLocked:function(Te){I=Te},setClear:function(Te,Ge,ye,Ve,st){st===!0&&(Te*=Ve,Ge*=Ve,ye*=Ve),ge.set(Te,Ge,ye,Ve),Be.equals(ge)===!1&&(r.clearColor(Te,Ge,ye,Ve),Be.copy(ge))},reset:function(){I=!1,he=null,Be.set(-1,0,0,0)}}}function s(){let I=!1,ge=null,he=null,Be=null;return{setTest:function(Te){Te?ee(2929):re(2929)},setMask:function(Te){ge!==Te&&!I&&(r.depthMask(Te),ge=Te)},setFunc:function(Te){if(he!==Te){if(Te)switch(Te){case ef:r.depthFunc(512);break;case tf:r.depthFunc(519);break;case nf:r.depthFunc(513);break;case mo:r.depthFunc(515);break;case rf:r.depthFunc(514);break;case sf:r.depthFunc(518);break;case af:r.depthFunc(516);break;case of:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);he=Te}},setLocked:function(Te){I=Te},setClear:function(Te){Be!==Te&&(r.clearDepth(Te),Be=Te)},reset:function(){I=!1,ge=null,he=null,Be=null}}}function a(){let I=!1,ge=null,he=null,Be=null,Te=null,Ge=null,ye=null,Ve=null,st=null;return{setTest:function(nt){I||(nt?ee(2960):re(2960))},setMask:function(nt){ge!==nt&&!I&&(r.stencilMask(nt),ge=nt)},setFunc:function(nt,hn,dn){(he!==nt||Be!==hn||Te!==dn)&&(r.stencilFunc(nt,hn,dn),he=nt,Be=hn,Te=dn)},setOp:function(nt,hn,dn){(Ge!==nt||ye!==hn||Ve!==dn)&&(r.stencilOp(nt,hn,dn),Ge=nt,ye=hn,Ve=dn)},setLocked:function(nt){I=nt},setClear:function(nt){st!==nt&&(r.clearStencil(nt),st=nt)},reset:function(){I=!1,ge=null,he=null,Be=null,Te=null,Ge=null,ye=null,Ve=null,st=null}}}const o=new i,l=new s,c=new a;let u={},h={},d=null,p=!1,g=null,v=null,x=null,f=null,m=null,b=null,_=null,y=!1,A=null,C=null,D=null,O=null,k=null;const P=r.getParameter(35661);let M=!1,w=0;const N=r.getParameter(7938);N.indexOf("WebGL")!==-1?(w=parseFloat(/^WebGL (\d)/.exec(N)[1]),M=w>=1):N.indexOf("OpenGL ES")!==-1&&(w=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),M=w>=2);let z=null,L={};const F=r.getParameter(3088),K=r.getParameter(2978),ae=new rt().fromArray(F),G=new rt().fromArray(K);function W(I,ge,he){const Be=new Uint8Array(4),Te=r.createTexture();r.bindTexture(I,Te),r.texParameteri(I,10241,9728),r.texParameteri(I,10240,9728);for(let Ge=0;Ge<he;Ge++)r.texImage2D(ge+Ge,0,6408,1,1,0,6408,5121,Be);return Te}const Q={};Q[3553]=W(3553,3553,1),Q[34067]=W(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ee(2929),l.setFunc(mo),He(!1),X(El),ee(2884),ve($n);function ee(I){u[I]!==!0&&(r.enable(I),u[I]=!0)}function re(I){u[I]!==!1&&(r.disable(I),u[I]=!1)}function ce(I,ge){return h[I]!==ge?(r.bindFramebuffer(I,ge),h[I]=ge,n&&(I===36009&&(h[36160]=ge),I===36160&&(h[36009]=ge)),!0):!1}function j(I){return d!==I?(r.useProgram(I),d=I,!0):!1}const de={[Hi]:32774,[Gd]:32778,[Wd]:32779};if(n)de[Rl]=32775,de[Pl]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(de[Rl]=I.MIN_EXT,de[Pl]=I.MAX_EXT)}const we={[qd]:0,[jd]:1,[Xd]:768,[Fu]:770,[Kd]:776,[$d]:774,[Zd]:772,[Yd]:769,[Nu]:771,[Qd]:775,[Jd]:773};function ve(I,ge,he,Be,Te,Ge,ye,Ve){if(I===$n){p===!0&&(re(3042),p=!1);return}if(p===!1&&(ee(3042),p=!0),I!==Hd){if(I!==g||Ve!==y){if((v!==Hi||m!==Hi)&&(r.blendEquation(32774),v=Hi,m=Hi),Ve)switch(I){case Rr:r.blendFuncSeparate(1,771,1,771);break;case Al:r.blendFunc(1,1);break;case Cl:r.blendFuncSeparate(0,0,769,771);break;case Ll:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Rr:r.blendFuncSeparate(770,771,1,771);break;case Al:r.blendFunc(770,1);break;case Cl:r.blendFunc(0,769);break;case Ll:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}x=null,f=null,b=null,_=null,g=I,y=Ve}return}Te=Te||ge,Ge=Ge||he,ye=ye||Be,(ge!==v||Te!==m)&&(r.blendEquationSeparate(de[ge],de[Te]),v=ge,m=Te),(he!==x||Be!==f||Ge!==b||ye!==_)&&(r.blendFuncSeparate(we[he],we[Be],we[Ge],we[ye]),x=he,f=Be,b=Ge,_=ye),g=I,y=null}function Se(I,ge){I.side===Zi?re(2884):ee(2884);let he=I.side===gt;ge&&(he=!he),He(he),I.blending===Rr&&I.transparent===!1?ve($n):ve(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const Be=I.stencilWrite;c.setTest(Be),Be&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ue(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ee(32926):re(32926)}function He(I){A!==I&&(I?r.frontFace(2304):r.frontFace(2305),A=I)}function X(I){I!==Od?(ee(2884),I!==C&&(I===El?r.cullFace(1029):I===Ud?r.cullFace(1028):r.cullFace(1032))):re(2884),C=I}function ie(I){I!==D&&(M&&r.lineWidth(I),D=I)}function ue(I,ge,he){I?(ee(32823),(O!==ge||k!==he)&&(r.polygonOffset(ge,he),O=ge,k=he)):re(32823)}function Me(I){I?ee(3089):re(3089)}function pe(I){I===void 0&&(I=33984+P-1),z!==I&&(r.activeTexture(I),z=I)}function Ie(I,ge){z===null&&pe();let he=L[z];he===void 0&&(he={type:void 0,texture:void 0},L[z]=he),(he.type!==I||he.texture!==ge)&&(r.bindTexture(I,ge||Q[I]),he.type=I,he.texture=ge)}function Ae(){const I=L[z];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Ue(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Qe(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function E(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function S(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Fe(I){ae.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),ae.copy(I))}function Ee(I){G.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),G.copy(I))}function fe(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},z=null,L={},h={},d=null,p=!1,g=null,v=null,x=null,f=null,m=null,b=null,_=null,y=!1,A=null,C=null,D=null,O=null,k=null,ae.set(0,0,r.canvas.width,r.canvas.height),G.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ee,disable:re,bindFramebuffer:ce,useProgram:j,setBlending:ve,setMaterial:Se,setFlipSided:He,setCullFace:X,setLineWidth:ie,setPolygonOffset:ue,setScissorTest:Me,activeTexture:pe,bindTexture:Ie,unbindTexture:Ae,compressedTexImage2D:Ue,texImage2D:me,texImage3D:se,texStorage2D:ne,texStorage3D:oe,texSubImage2D:Qe,texSubImage3D:E,compressedTexSubImage2D:S,scissor:Fe,viewport:Ee,reset:fe}}function X0(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):void 0,g=new WeakMap;let v,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(E,S){return x?new OffscreenCanvas(E,S):oa("canvas")}function m(E,S,ne,oe){let me=1;if((E.width>oe||E.height>oe)&&(me=oe/Math.max(E.width,E.height)),me<1||S===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const se=S?gp:Math.floor,Fe=se(me*E.width),Ee=se(me*E.height);v===void 0&&(v=f(Fe,Ee));const fe=ne?f(Fe,Ee):v;return fe.width=Fe,fe.height=Ee,fe.getContext("2d").drawImage(E,0,0,Fe,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+Fe+"x"+Ee+")."),fe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function b(E){return ql(E.width)&&ql(E.height)}function _(E){return o?!1:E.wrapS!==jt||E.wrapT!==jt||E.minFilter!==vt&&E.minFilter!==kt}function y(E,S){return E.generateMipmaps&&S&&E.minFilter!==vt&&E.minFilter!==kt}function A(E){r.generateMipmap(E)}function C(E,S,ne,oe){if(o===!1)return S;if(E!==null){if(r[E]!==void 0)return r[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let me=S;return S===6403&&(ne===5126&&(me=33326),ne===5131&&(me=33325),ne===5121&&(me=33321)),S===6407&&(ne===5126&&(me=34837),ne===5131&&(me=34843),ne===5121&&(me=32849)),S===6408&&(ne===5126&&(me=34836),ne===5131&&(me=34842),ne===5121&&(me=oe===tr?35907:32856)),(me===33325||me===33326||me===34842||me===34836)&&e.get("EXT_color_buffer_float"),me}function D(E,S,ne){return y(E,ne)===!0||E.isFramebufferTexture&&E.minFilter!==vt&&E.minFilter!==kt?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function O(E){return E===vt||E===Il||E===Dl?9728:9729}function k(E){const S=E.target;S.removeEventListener("dispose",k),M(S),S.isVideoTexture&&g.delete(S),a.memory.textures--}function P(E){const S=E.target;S.removeEventListener("dispose",P),w(S)}function M(E){const S=n.get(E);S.__webglInit!==void 0&&(r.deleteTexture(S.__webglTexture),n.remove(E))}function w(E){const S=E.texture,ne=n.get(E),oe=n.get(S);if(E){if(oe.__webglTexture!==void 0&&(r.deleteTexture(oe.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let me=0;me<6;me++)r.deleteFramebuffer(ne.__webglFramebuffer[me]),ne.__webglDepthbuffer&&r.deleteRenderbuffer(ne.__webglDepthbuffer[me]);else r.deleteFramebuffer(ne.__webglFramebuffer),ne.__webglDepthbuffer&&r.deleteRenderbuffer(ne.__webglDepthbuffer),ne.__webglMultisampledFramebuffer&&r.deleteFramebuffer(ne.__webglMultisampledFramebuffer),ne.__webglColorRenderbuffer&&r.deleteRenderbuffer(ne.__webglColorRenderbuffer),ne.__webglDepthRenderbuffer&&r.deleteRenderbuffer(ne.__webglDepthRenderbuffer);if(E.isWebGLMultipleRenderTargets)for(let me=0,se=S.length;me<se;me++){const Fe=n.get(S[me]);Fe.__webglTexture&&(r.deleteTexture(Fe.__webglTexture),a.memory.textures--),n.remove(S[me])}n.remove(S),n.remove(E)}}let N=0;function z(){N=0}function L(){const E=N;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),N+=1,E}function F(E,S){const ne=n.get(E);if(E.isVideoTexture&&pe(E),E.version>0&&ne.__version!==E.version){const oe=E.image;if(oe===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(ne,E,S);return}}t.activeTexture(33984+S),t.bindTexture(3553,ne.__webglTexture)}function K(E,S){const ne=n.get(E);if(E.version>0&&ne.__version!==E.version){ce(ne,E,S);return}t.activeTexture(33984+S),t.bindTexture(35866,ne.__webglTexture)}function ae(E,S){const ne=n.get(E);if(E.version>0&&ne.__version!==E.version){ce(ne,E,S);return}t.activeTexture(33984+S),t.bindTexture(32879,ne.__webglTexture)}function G(E,S){const ne=n.get(E);if(E.version>0&&ne.__version!==E.version){j(ne,E,S);return}t.activeTexture(33984+S),t.bindTexture(34067,ne.__webglTexture)}const W={[xo]:10497,[jt]:33071,[_o]:33648},Q={[vt]:9728,[Il]:9984,[Dl]:9986,[kt]:9729,[mf]:9985,[aa]:9987};function ee(E,S,ne){if(ne?(r.texParameteri(E,10242,W[S.wrapS]),r.texParameteri(E,10243,W[S.wrapT]),(E===32879||E===35866)&&r.texParameteri(E,32882,W[S.wrapR]),r.texParameteri(E,10240,Q[S.magFilter]),r.texParameteri(E,10241,Q[S.minFilter])):(r.texParameteri(E,10242,33071),r.texParameteri(E,10243,33071),(E===32879||E===35866)&&r.texParameteri(E,32882,33071),(S.wrapS!==jt||S.wrapT!==jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(E,10240,O(S.magFilter)),r.texParameteri(E,10241,O(S.minFilter)),S.minFilter!==vt&&S.minFilter!==kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const oe=e.get("EXT_texture_filter_anisotropic");if(S.type===Zn&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===vi&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(E,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function re(E,S){E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",k),E.__webglTexture=r.createTexture(),a.memory.textures++)}function ce(E,S,ne){let oe=3553;S.isDataTexture2DArray&&(oe=35866),S.isDataTexture3D&&(oe=32879),re(E,S),t.activeTexture(33984+ne),t.bindTexture(oe,E.__webglTexture),r.pixelStorei(37440,S.flipY),r.pixelStorei(37441,S.premultiplyAlpha),r.pixelStorei(3317,S.unpackAlignment),r.pixelStorei(37443,0);const me=_(S)&&b(S.image)===!1,se=m(S.image,me,!1,u),Fe=b(se)||o,Ee=s.convert(S.format);let fe=s.convert(S.type),I=C(S.internalFormat,Ee,fe,S.encoding);ee(oe,S,Fe);let ge;const he=S.mipmaps,Be=o&&S.isVideoTexture!==!0,Te=E.__version===void 0,Ge=D(S,se,Fe);if(S.isDepthTexture)I=6402,o?S.type===Zn?I=36012:S.type===ks?I=33190:S.type===ji?I=35056:I=33189:S.type===Zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===_i&&I===6402&&S.type!==kr&&S.type!==ks&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=kr,fe=s.convert(S.type)),S.format===Ji&&I===6402&&(I=34041,S.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=ji,fe=s.convert(S.type))),Be&&Te?t.texStorage2D(3553,1,I,se.width,se.height):t.texImage2D(3553,0,I,se.width,se.height,0,Ee,fe,null);else if(S.isDataTexture)if(he.length>0&&Fe){Be&&Te&&t.texStorage2D(3553,Ge,I,he[0].width,he[0].height);for(let ye=0,Ve=he.length;ye<Ve;ye++)ge=he[ye],Be?t.texSubImage2D(3553,0,0,0,ge.width,ge.height,Ee,fe,ge.data):t.texImage2D(3553,ye,I,ge.width,ge.height,0,Ee,fe,ge.data);S.generateMipmaps=!1}else Be?(Te&&t.texStorage2D(3553,Ge,I,se.width,se.height),t.texSubImage2D(3553,0,0,0,se.width,se.height,Ee,fe,se.data)):t.texImage2D(3553,0,I,se.width,se.height,0,Ee,fe,se.data);else if(S.isCompressedTexture){Be&&Te&&t.texStorage2D(3553,Ge,I,he[0].width,he[0].height);for(let ye=0,Ve=he.length;ye<Ve;ye++)ge=he[ye],S.format!==wt&&S.format!==xi?Ee!==null?Be?t.compressedTexSubImage2D(3553,ye,0,0,ge.width,ge.height,Ee,ge.data):t.compressedTexImage2D(3553,ye,I,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage2D(3553,ye,0,0,ge.width,ge.height,Ee,fe,ge.data):t.texImage2D(3553,ye,I,ge.width,ge.height,0,Ee,fe,ge.data)}else if(S.isDataTexture2DArray)Be?(Te&&t.texStorage3D(35866,Ge,I,se.width,se.height,se.depth),t.texSubImage3D(35866,0,0,0,0,se.width,se.height,se.depth,Ee,fe,se.data)):t.texImage3D(35866,0,I,se.width,se.height,se.depth,0,Ee,fe,se.data);else if(S.isDataTexture3D)Be?(Te&&t.texStorage3D(32879,Ge,I,se.width,se.height,se.depth),t.texSubImage3D(32879,0,0,0,0,se.width,se.height,se.depth,Ee,fe,se.data)):t.texImage3D(32879,0,I,se.width,se.height,se.depth,0,Ee,fe,se.data);else if(S.isFramebufferTexture)Be&&Te?t.texStorage2D(3553,Ge,I,se.width,se.height):t.texImage2D(3553,0,I,se.width,se.height,0,Ee,fe,null);else if(he.length>0&&Fe){Be&&Te&&t.texStorage2D(3553,Ge,I,he[0].width,he[0].height);for(let ye=0,Ve=he.length;ye<Ve;ye++)ge=he[ye],Be?t.texSubImage2D(3553,ye,0,0,Ee,fe,ge):t.texImage2D(3553,ye,I,Ee,fe,ge);S.generateMipmaps=!1}else Be?(Te&&t.texStorage2D(3553,Ge,I,se.width,se.height),t.texSubImage2D(3553,0,0,0,Ee,fe,se)):t.texImage2D(3553,0,I,Ee,fe,se);y(S,Fe)&&A(oe),E.__version=S.version,S.onUpdate&&S.onUpdate(S)}function j(E,S,ne){if(S.image.length!==6)return;re(E,S),t.activeTexture(33984+ne),t.bindTexture(34067,E.__webglTexture),r.pixelStorei(37440,S.flipY),r.pixelStorei(37441,S.premultiplyAlpha),r.pixelStorei(3317,S.unpackAlignment),r.pixelStorei(37443,0);const oe=S&&(S.isCompressedTexture||S.image[0].isCompressedTexture),me=S.image[0]&&S.image[0].isDataTexture,se=[];for(let ye=0;ye<6;ye++)!oe&&!me?se[ye]=m(S.image[ye],!1,!0,c):se[ye]=me?S.image[ye].image:S.image[ye];const Fe=se[0],Ee=b(Fe)||o,fe=s.convert(S.format),I=s.convert(S.type),ge=C(S.internalFormat,fe,I,S.encoding),he=o&&S.isVideoTexture!==!0,Be=E.__version===void 0;let Te=D(S,Fe,Ee);ee(34067,S,Ee);let Ge;if(oe){he&&Be&&t.texStorage2D(34067,Te,ge,Fe.width,Fe.height);for(let ye=0;ye<6;ye++){Ge=se[ye].mipmaps;for(let Ve=0;Ve<Ge.length;Ve++){const st=Ge[Ve];S.format!==wt&&S.format!==xi?fe!==null?he?t.compressedTexSubImage2D(34069+ye,Ve,0,0,st.width,st.height,fe,st.data):t.compressedTexImage2D(34069+ye,Ve,ge,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):he?t.texSubImage2D(34069+ye,Ve,0,0,st.width,st.height,fe,I,st.data):t.texImage2D(34069+ye,Ve,ge,st.width,st.height,0,fe,I,st.data)}}}else{Ge=S.mipmaps,he&&Be&&(Ge.length>0&&Te++,t.texStorage2D(34067,Te,ge,se[0].width,se[0].height));for(let ye=0;ye<6;ye++)if(me){he?t.texSubImage2D(34069+ye,0,0,0,se[ye].width,se[ye].height,fe,I,se[ye].data):t.texImage2D(34069+ye,0,ge,se[ye].width,se[ye].height,0,fe,I,se[ye].data);for(let Ve=0;Ve<Ge.length;Ve++){const nt=Ge[Ve].image[ye].image;he?t.texSubImage2D(34069+ye,Ve+1,0,0,nt.width,nt.height,fe,I,nt.data):t.texImage2D(34069+ye,Ve+1,ge,nt.width,nt.height,0,fe,I,nt.data)}}else{he?t.texSubImage2D(34069+ye,0,0,0,fe,I,se[ye]):t.texImage2D(34069+ye,0,ge,fe,I,se[ye]);for(let Ve=0;Ve<Ge.length;Ve++){const st=Ge[Ve];he?t.texSubImage2D(34069+ye,Ve+1,0,0,fe,I,st.image[ye]):t.texImage2D(34069+ye,Ve+1,ge,fe,I,st.image[ye])}}}y(S,Ee)&&A(34067),E.__version=S.version,S.onUpdate&&S.onUpdate(S)}function de(E,S,ne,oe,me){const se=s.convert(ne.format),Fe=s.convert(ne.type),Ee=C(ne.internalFormat,se,Fe,ne.encoding);n.get(S).__hasExternalTextures||(me===32879||me===35866?t.texImage3D(me,0,Ee,S.width,S.height,S.depth,0,se,Fe,null):t.texImage2D(me,0,Ee,S.width,S.height,0,se,Fe,null)),t.bindFramebuffer(36160,E),S.useRenderToTexture?p.framebufferTexture2DMultisampleEXT(36160,oe,me,n.get(ne).__webglTexture,0,Me(S)):r.framebufferTexture2D(36160,oe,me,n.get(ne).__webglTexture,0),t.bindFramebuffer(36160,null)}function we(E,S,ne){if(r.bindRenderbuffer(36161,E),S.depthBuffer&&!S.stencilBuffer){let oe=33189;if(ne||S.useRenderToTexture){const me=S.depthTexture;me&&me.isDepthTexture&&(me.type===Zn?oe=36012:me.type===ks&&(oe=33190));const se=Me(S);S.useRenderToTexture?p.renderbufferStorageMultisampleEXT(36161,se,oe,S.width,S.height):r.renderbufferStorageMultisample(36161,se,oe,S.width,S.height)}else r.renderbufferStorage(36161,oe,S.width,S.height);r.framebufferRenderbuffer(36160,36096,36161,E)}else if(S.depthBuffer&&S.stencilBuffer){const oe=Me(S);ne&&S.useRenderbuffer?r.renderbufferStorageMultisample(36161,oe,35056,S.width,S.height):S.useRenderToTexture?p.renderbufferStorageMultisampleEXT(36161,oe,35056,S.width,S.height):r.renderbufferStorage(36161,34041,S.width,S.height),r.framebufferRenderbuffer(36160,33306,36161,E)}else{const oe=S.isWebGLMultipleRenderTargets===!0?S.texture[0]:S.texture,me=s.convert(oe.format),se=s.convert(oe.type),Fe=C(oe.internalFormat,me,se,oe.encoding),Ee=Me(S);ne&&S.useRenderbuffer?r.renderbufferStorageMultisample(36161,Ee,Fe,S.width,S.height):S.useRenderToTexture?p.renderbufferStorageMultisampleEXT(36161,Ee,Fe,S.width,S.height):r.renderbufferStorage(36161,Fe,S.width,S.height)}r.bindRenderbuffer(36161,null)}function ve(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),F(S.depthTexture,0);const oe=n.get(S.depthTexture).__webglTexture,me=Me(S);if(S.depthTexture.format===_i)S.useRenderToTexture?p.framebufferTexture2DMultisampleEXT(36160,36096,3553,oe,0,me):r.framebufferTexture2D(36160,36096,3553,oe,0);else if(S.depthTexture.format===Ji)S.useRenderToTexture?p.framebufferTexture2DMultisampleEXT(36160,33306,3553,oe,0,me):r.framebufferTexture2D(36160,33306,3553,oe,0);else throw new Error("Unknown depthTexture format")}function Se(E){const S=n.get(E),ne=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");ve(S.__webglFramebuffer,E)}else if(ne){S.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(36160,S.__webglFramebuffer[oe]),S.__webglDepthbuffer[oe]=r.createRenderbuffer(),we(S.__webglDepthbuffer[oe],E,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),we(S.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function He(E,S,ne){const oe=n.get(E);S!==void 0&&de(oe.__webglFramebuffer,E,E.texture,36064,3553),ne!==void 0&&Se(E)}function X(E){const S=E.texture,ne=n.get(E),oe=n.get(S);E.addEventListener("dispose",P),E.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture()),oe.__version=S.version,a.memory.textures++);const me=E.isWebGLCubeRenderTarget===!0,se=E.isWebGLMultipleRenderTargets===!0,Fe=S.isDataTexture3D||S.isDataTexture2DArray,Ee=b(E)||o;if(o&&S.format===xi&&(S.type===Zn||S.type===vi)&&(S.format=wt,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),me){ne.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)ne.__webglFramebuffer[fe]=r.createFramebuffer()}else if(ne.__webglFramebuffer=r.createFramebuffer(),se)if(i.drawBuffers){const fe=E.texture;for(let I=0,ge=fe.length;I<ge;I++){const he=n.get(fe[I]);he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(E.useRenderbuffer)if(o){ne.__webglMultisampledFramebuffer=r.createFramebuffer(),ne.__webglColorRenderbuffer=r.createRenderbuffer(),r.bindRenderbuffer(36161,ne.__webglColorRenderbuffer);const fe=s.convert(S.format),I=s.convert(S.type),ge=C(S.internalFormat,fe,I,S.encoding),he=Me(E);r.renderbufferStorageMultisample(36161,he,ge,E.width,E.height),t.bindFramebuffer(36160,ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064,36161,ne.__webglColorRenderbuffer),r.bindRenderbuffer(36161,null),E.depthBuffer&&(ne.__webglDepthRenderbuffer=r.createRenderbuffer(),we(ne.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(me){t.bindTexture(34067,oe.__webglTexture),ee(34067,S,Ee);for(let fe=0;fe<6;fe++)de(ne.__webglFramebuffer[fe],E,S,36064,34069+fe);y(S,Ee)&&A(34067),t.unbindTexture()}else if(se){const fe=E.texture;for(let I=0,ge=fe.length;I<ge;I++){const he=fe[I],Be=n.get(he);t.bindTexture(3553,Be.__webglTexture),ee(3553,he,Ee),de(ne.__webglFramebuffer,E,he,36064+I,3553),y(he,Ee)&&A(3553)}t.unbindTexture()}else{let fe=3553;Fe&&(o?fe=S.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(fe,oe.__webglTexture),ee(fe,S,Ee),de(ne.__webglFramebuffer,E,S,36064,fe),y(S,Ee)&&A(fe),t.unbindTexture()}E.depthBuffer&&Se(E)}function ie(E){const S=b(E)||o,ne=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let oe=0,me=ne.length;oe<me;oe++){const se=ne[oe];if(y(se,S)){const Fe=E.isWebGLCubeRenderTarget?34067:3553,Ee=n.get(se).__webglTexture;t.bindTexture(Fe,Ee),A(Fe),t.unbindTexture()}}}function ue(E){if(E.useRenderbuffer)if(o){const S=E.width,ne=E.height;let oe=16384;const me=[36064],se=E.stencilBuffer?33306:36096;E.depthBuffer&&me.push(se),E.ignoreDepthForMultisampleCopy||(E.depthBuffer&&(oe|=256),E.stencilBuffer&&(oe|=1024));const Fe=n.get(E);t.bindFramebuffer(36008,Fe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,Fe.__webglFramebuffer),E.ignoreDepthForMultisampleCopy&&(r.invalidateFramebuffer(36008,[se]),r.invalidateFramebuffer(36009,[se])),r.blitFramebuffer(0,0,S,ne,0,0,S,ne,oe,9728),r.invalidateFramebuffer(36008,me),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,Fe.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Me(E){return o&&(E.useRenderbuffer||E.useRenderToTexture)?Math.min(h,E.samples):0}function pe(E){const S=a.render.frame;g.get(E)!==S&&(g.set(E,S),E.update())}let Ie=!1,Ae=!1;function Ue(E,S){E&&E.isWebGLRenderTarget&&(Ie===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),Ie=!0),E=E.texture),F(E,S)}function Qe(E,S){E&&E.isWebGLCubeRenderTarget&&(Ae===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),Ae=!0),E=E.texture),G(E,S)}this.allocateTextureUnit=L,this.resetTextureUnits=z,this.setTexture2D=F,this.setTexture2DArray=K,this.setTexture3D=ae,this.setTextureCube=G,this.rebindTextures=He,this.setupRenderTarget=X,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=de,this.safeSetTexture2D=Ue,this.safeSetTextureCube=Qe}function Y0(r,e,t){const n=t.isWebGL2;function i(s){let a;if(s===zn)return 5121;if(s===_f)return 32819;if(s===yf)return 32820;if(s===bf)return 33635;if(s===gf)return 5120;if(s===vf)return 5122;if(s===kr)return 5123;if(s===xf)return 5124;if(s===ks)return 5125;if(s===Zn)return 5126;if(s===vi)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Mf)return 6406;if(s===xi)return 6407;if(s===wt)return 6408;if(s===wf)return 6409;if(s===Sf)return 6410;if(s===_i)return 6402;if(s===Ji)return 34041;if(s===Tf)return 6403;if(s===Ef)return 36244;if(s===Af)return 33319;if(s===Cf)return 33320;if(s===Lf)return 36248;if(s===Rf)return 36249;if(s===Fl||s===Nl||s===zl||s===kl)if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Fl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Nl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===zl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===kl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Bl||s===Ol||s===Ul||s===Vl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Bl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ol)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ul)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Vl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Pf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===Hl||s===Gl)&&(a=e.get("WEBGL_compressed_texture_etc"),a!==null)){if(s===Hl)return a.COMPRESSED_RGB8_ETC2;if(s===Gl)return a.COMPRESSED_RGBA8_ETC2_EAC}if(s===If||s===Df||s===Ff||s===Nf||s===zf||s===kf||s===Bf||s===Of||s===Uf||s===Vf||s===Hf||s===Gf||s===Wf||s===qf||s===Xf||s===Yf||s===Zf||s===Jf||s===$f||s===Qf||s===Kf||s===ep||s===tp||s===np||s===ip||s===rp||s===sp||s===ap)return a=e.get("WEBGL_compressed_texture_astc"),a!==null?s:null;if(s===jf)return a=e.get("EXT_texture_compression_bptc"),a!==null?s:null;if(s===ji)return n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class sh extends zt{constructor(e=[]){super(),this.cameras=e}}sh.prototype.isArrayCamera=!0;class Tr extends et{constructor(){super(),this.type="Group"}}Tr.prototype.isGroup=!0;const Z0={type:"move"};class Ja{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Z0))),c&&e.hand){a=!0;for(const v of e.hand.values()){const x=t.getJointPose(v,n);if(c.joints[v.jointName]===void 0){const m=new Tr;m.matrixAutoUpdate=!1,m.visible=!1,c.joints[v.jointName]=m,c.add(m)}const f=c.joints[v.jointName];x!==null&&(f.matrix.fromArray(x.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.jointRadius=x.radius),f.visible=x!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class Mo extends Tt{constructor(e,t,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:_i,u!==_i&&u!==Ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===_i&&(n=kr),n===void 0&&u===Ji&&(n=ji),super(null,i,s,a,o,l,u,n,c),this.image={width:e,height:t},this.magFilter=o!==void 0?o:vt,this.minFilter=l!==void 0?l:vt,this.flipY=!1,this.generateMipmaps=!1}}Mo.prototype.isDepthTexture=!0;class J0 extends bi{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor";const l=e.extensions.has("WEBGL_multisampled_render_to_texture");let c=null,u=null,h=null,d=null,p=!1,g=null;const v=t.getContextAttributes();let x=null,f=null;const m=[],b=new Map,_=new zt;_.layers.enable(1),_.viewport=new rt;const y=new zt;y.layers.enable(2),y.viewport=new rt;const A=[_,y],C=new sh;C.layers.enable(1),C.layers.enable(2);let D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let W=m[G];return W===void 0&&(W=new Ja,m[G]=W),W.getTargetRaySpace()},this.getControllerGrip=function(G){let W=m[G];return W===void 0&&(W=new Ja,m[G]=W),W.getGripSpace()},this.getHand=function(G){let W=m[G];return W===void 0&&(W=new Ja,m[G]=W),W.getHandSpace()};function k(G){const W=b.get(G.inputSource);W&&W.dispatchEvent({type:G.type,data:G.inputSource})}function P(){b.forEach(function(G,W){G.disconnect(W)}),b.clear(),D=null,O=null,e.setRenderTarget(x),d=null,h=null,u=null,i=null,f=null,ae.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",P),i.addEventListener("inputsourceschange",M),v.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,W),i.updateRenderState({baseLayer:d}),f=new Kt(d.framebufferWidth,d.framebufferHeight,{format:wt,type:zn,encoding:e.outputEncoding})}else{p=v.antialias;let W=null,Q=null,ee=null;v.depth&&(ee=v.stencil?35056:33190,W=v.stencil?Ji:_i,Q=v.stencil?ji:kr);const re={colorFormat:v.alpha||p?32856:32849,depthFormat:ee,scaleFactor:s};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(re),i.updateRenderState({layers:[h]}),p?f=new Wo(h.textureWidth,h.textureHeight,{format:wt,type:zn,depthTexture:new Mo(h.textureWidth,h.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:v.stencil,ignoreDepth:h.ignoreDepthValues,useRenderToTexture:l,encoding:e.outputEncoding}):f=new Kt(h.textureWidth,h.textureHeight,{format:v.alpha?wt:xi,type:zn,depthTexture:new Mo(h.textureWidth,h.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:v.stencil,ignoreDepth:h.ignoreDepthValues,encoding:e.outputEncoding})}this.setFoveation(1),a=await i.requestReferenceSpace(o),ae.setContext(i),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function M(G){const W=i.inputSources;for(let Q=0;Q<m.length;Q++)b.set(W[Q],m[Q]);for(let Q=0;Q<G.removed.length;Q++){const ee=G.removed[Q],re=b.get(ee);re&&(re.dispatchEvent({type:"disconnected",data:ee}),b.delete(ee))}for(let Q=0;Q<G.added.length;Q++){const ee=G.added[Q],re=b.get(ee);re&&re.dispatchEvent({type:"connected",data:ee})}}const w=new R,N=new R;function z(G,W,Q){w.setFromMatrixPosition(W.matrixWorld),N.setFromMatrixPosition(Q.matrixWorld);const ee=w.distanceTo(N),re=W.projectionMatrix.elements,ce=Q.projectionMatrix.elements,j=re[14]/(re[10]-1),de=re[14]/(re[10]+1),we=(re[9]+1)/re[5],ve=(re[9]-1)/re[5],Se=(re[8]-1)/re[0],He=(ce[8]+1)/ce[0],X=j*Se,ie=j*He,ue=ee/(-Se+He),Me=ue*-Se;W.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Me),G.translateZ(ue),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const pe=j+ue,Ie=de+ue,Ae=X-Me,Ue=ie+(ee-Me),Qe=we*de/Ie*pe,E=ve*de/Ie*pe;G.projectionMatrix.makePerspective(Ae,Ue,Qe,E,pe,Ie)}function L(G,W){W===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(W.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;C.near=y.near=_.near=G.near,C.far=y.far=_.far=G.far,(D!==C.near||O!==C.far)&&(i.updateRenderState({depthNear:C.near,depthFar:C.far}),D=C.near,O=C.far);const W=G.parent,Q=C.cameras;L(C,W);for(let re=0;re<Q.length;re++)L(Q[re],W);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),G.position.copy(C.position),G.quaternion.copy(C.quaternion),G.scale.copy(C.scale),G.matrix.copy(C.matrix),G.matrixWorld.copy(C.matrixWorld);const ee=G.children;for(let re=0,ce=ee.length;re<ce;re++)ee[re].updateMatrixWorld(!0);Q.length===2?z(C,_,y):C.projectionMatrix.copy(_.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(G){h!==null&&(h.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)};let F=null;function K(G,W){if(c=W.getViewerPose(a),g=W,c!==null){const ee=c.views;d!==null&&(e.setRenderTargetFramebuffer(f,d.framebuffer),e.setRenderTarget(f));let re=!1;ee.length!==C.cameras.length&&(C.cameras.length=0,re=!0);for(let ce=0;ce<ee.length;ce++){const j=ee[ce];let de=null;if(d!==null)de=d.getViewport(j);else{const ve=u.getViewSubImage(h,j);de=ve.viewport,ce===0&&(e.setRenderTargetTextures(f,ve.colorTexture,h.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(f))}const we=A[ce];we.matrix.fromArray(j.transform.matrix),we.projectionMatrix.fromArray(j.projectionMatrix),we.viewport.set(de.x,de.y,de.width,de.height),ce===0&&C.matrix.copy(we.matrix),re===!0&&C.cameras.push(we)}}const Q=i.inputSources;for(let ee=0;ee<m.length;ee++){const re=m[ee],ce=Q[ee];re.update(ce,W,a)}F&&F(G,W),g=null}const ae=new Wu;ae.setAnimationLoop(K),this.setAnimationLoop=function(G){F=G},this.dispose=function(){}}}function $0(r){function e(f,m){f.fogColor.value.copy(m.color),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function t(f,m,b,_,y){m.isMeshBasicMaterial?n(f,m):m.isMeshLambertMaterial?(n(f,m),l(f,m)):m.isMeshToonMaterial?(n(f,m),u(f,m)):m.isMeshPhongMaterial?(n(f,m),c(f,m)):m.isMeshStandardMaterial?(n(f,m),m.isMeshPhysicalMaterial?d(f,m,y):h(f,m)):m.isMeshMatcapMaterial?(n(f,m),p(f,m)):m.isMeshDepthMaterial?(n(f,m),g(f,m)):m.isMeshDistanceMaterial?(n(f,m),v(f,m)):m.isMeshNormalMaterial?(n(f,m),x(f,m)):m.isLineBasicMaterial?(i(f,m),m.isLineDashedMaterial&&s(f,m)):m.isPointsMaterial?a(f,m,b,_):m.isSpriteMaterial?o(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function n(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map),m.alphaMap&&(f.alphaMap.value=m.alphaMap),m.specularMap&&(f.specularMap.value=m.specularMap),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const b=r.get(m).envMap;b&&(f.envMap.value=b,f.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity);let _;m.map?_=m.map:m.specularMap?_=m.specularMap:m.displacementMap?_=m.displacementMap:m.normalMap?_=m.normalMap:m.bumpMap?_=m.bumpMap:m.roughnessMap?_=m.roughnessMap:m.metalnessMap?_=m.metalnessMap:m.alphaMap?_=m.alphaMap:m.emissiveMap?_=m.emissiveMap:m.clearcoatMap?_=m.clearcoatMap:m.clearcoatNormalMap?_=m.clearcoatNormalMap:m.clearcoatRoughnessMap?_=m.clearcoatRoughnessMap:m.specularIntensityMap?_=m.specularIntensityMap:m.specularColorMap?_=m.specularColorMap:m.transmissionMap?_=m.transmissionMap:m.thicknessMap?_=m.thicknessMap:m.sheenColorMap?_=m.sheenColorMap:m.sheenRoughnessMap&&(_=m.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),f.uvTransform.value.copy(_.matrix));let y;m.aoMap?y=m.aoMap:m.lightMap&&(y=m.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),f.uv2Transform.value.copy(y.matrix))}function i(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity}function s(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function a(f,m,b,_){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*b,f.scale.value=_*.5,m.map&&(f.map.value=m.map),m.alphaMap&&(f.alphaMap.value=m.alphaMap),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let y;m.map?y=m.map:m.alphaMap&&(y=m.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),f.uvTransform.value.copy(y.matrix))}function o(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map),m.alphaMap&&(f.alphaMap.value=m.alphaMap),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let b;m.map?b=m.map:m.alphaMap&&(b=m.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),f.uvTransform.value.copy(b.matrix))}function l(f,m){m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap)}function c(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap),m.bumpMap&&(f.bumpMap.value=m.bumpMap,f.bumpScale.value=m.bumpScale,m.side===gt&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,f.normalScale.value.copy(m.normalScale),m.side===gt&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias)}function u(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap),m.bumpMap&&(f.bumpMap.value=m.bumpMap,f.bumpScale.value=m.bumpScale,m.side===gt&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,f.normalScale.value.copy(m.normalScale),m.side===gt&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias)}function h(f,m){f.roughness.value=m.roughness,f.metalness.value=m.metalness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap),m.bumpMap&&(f.bumpMap.value=m.bumpMap,f.bumpScale.value=m.bumpScale,m.side===gt&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,f.normalScale.value.copy(m.normalScale),m.side===gt&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),r.get(m).envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function d(f,m,b){h(f,m),f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),f.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===gt&&f.clearcoatNormalScale.value.negate())),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=b.texture,f.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap)}function p(f,m){m.matcap&&(f.matcap.value=m.matcap),m.bumpMap&&(f.bumpMap.value=m.bumpMap,f.bumpScale.value=m.bumpScale,m.side===gt&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,f.normalScale.value.copy(m.normalScale),m.side===gt&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias)}function g(f,m){m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias)}function v(f,m){m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),f.referencePosition.value.copy(m.referencePosition),f.nearDistance.value=m.nearDistance,f.farDistance.value=m.farDistance}function x(f,m){m.bumpMap&&(f.bumpMap.value=m.bumpMap,f.bumpScale.value=m.bumpScale,m.side===gt&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,f.normalScale.value.copy(m.normalScale),m.side===gt&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function Q0(){const r=oa("canvas");return r.style.display="block",r}function tt(r={}){const e=r.canvas!==void 0?r.canvas:Q0(),t=r.context!==void 0?r.context:null,n=r.alpha!==void 0?r.alpha:!1,i=r.depth!==void 0?r.depth:!0,s=r.stencil!==void 0?r.stencil:!0,a=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,l=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",u=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let h=null,d=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=cn,this.physicallyCorrectLights=!1,this.toneMapping=Qn,this.toneMappingExposure=1;const v=this;let x=!1,f=0,m=0,b=null,_=-1,y=null;const A=new rt,C=new rt;let D=null,O=e.width,k=e.height,P=1,M=null,w=null;const N=new rt(0,0,O,k),z=new rt(0,0,O,k);let L=!1;const F=[],K=new ca;let ae=!1,G=!1,W=null;const Q=new De,ee=new R,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ce(){return b===null?P:1}let j=t;function de(T,B){for(let q=0;q<T.length;q++){const H=T[q],te=e.getContext(H,B);if(te!==null)return te}return null}try{const T={alpha:n,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Vo}`),e.addEventListener("webglcontextlost",Be,!1),e.addEventListener("webglcontextrestored",Te,!1),j===null){const B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),j=de(B,T),j===null)throw de(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let we,ve,Se,He,X,ie,ue,Me,pe,Ie,Ae,Ue,Qe,E,S,ne,oe,me,se,Fe,Ee,fe,I;function ge(){we=new xv(j),ve=new hv(j,we,r),we.init(ve),fe=new Y0(j,we,ve),Se=new j0(j,we,ve),F[0]=1029,He=new bv,X=new N0,ie=new X0(j,we,Se,X,ve,fe,He),ue=new fv(v),Me=new vv(v),pe=new Np(j,ve),I=new cv(j,we,pe,ve),Ie=new _v(j,pe,He,I),Ae=new Tv(j,Ie,pe,He),se=new Sv(j,ve,ie),ne=new dv(X),Ue=new F0(v,ue,Me,we,ve,I,ne),Qe=new $0(X),E=new k0,S=new G0(we,ve),me=new lv(v,ue,Se,Ae,o),oe=new rh(v,Ae,ve),Fe=new uv(j,we,He,ve),Ee=new yv(j,we,He,ve),He.programs=Ue.programs,v.capabilities=ve,v.extensions=we,v.properties=X,v.renderLists=E,v.shadowMap=oe,v.state=Se,v.info=He}ge();const he=new J0(v,j);this.xr=he,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const T=we.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=we.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(T){T!==void 0&&(P=T,this.setSize(O,k,!1))},this.getSize=function(T){return T.set(O,k)},this.setSize=function(T,B,q){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=T,k=B,e.width=Math.floor(T*P),e.height=Math.floor(B*P),q!==!1&&(e.style.width=T+"px",e.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(O*P,k*P).floor()},this.setDrawingBufferSize=function(T,B,q){O=T,k=B,P=q,e.width=Math.floor(T*q),e.height=Math.floor(B*q),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(N)},this.setViewport=function(T,B,q,H){T.isVector4?N.set(T.x,T.y,T.z,T.w):N.set(T,B,q,H),Se.viewport(A.copy(N).multiplyScalar(P).floor())},this.getScissor=function(T){return T.copy(z)},this.setScissor=function(T,B,q,H){T.isVector4?z.set(T.x,T.y,T.z,T.w):z.set(T,B,q,H),Se.scissor(C.copy(z).multiplyScalar(P).floor())},this.getScissorTest=function(){return L},this.setScissorTest=function(T){Se.setScissorTest(L=T)},this.setOpaqueSort=function(T){M=T},this.setTransparentSort=function(T){w=T},this.getClearColor=function(T){return T.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(T,B,q){let H=0;(T===void 0||T)&&(H|=16384),(B===void 0||B)&&(H|=256),(q===void 0||q)&&(H|=1024),j.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Be,!1),e.removeEventListener("webglcontextrestored",Te,!1),E.dispose(),S.dispose(),X.dispose(),ue.dispose(),Me.dispose(),Ae.dispose(),I.dispose(),Ue.dispose(),he.dispose(),he.removeEventListener("sessionstart",hn),he.removeEventListener("sessionend",dn),W&&(W.dispose(),W=null),oi.stop()};function Be(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const T=He.autoReset,B=oe.enabled,q=oe.autoUpdate,H=oe.needsUpdate,te=oe.type;ge(),He.autoReset=T,oe.enabled=B,oe.autoUpdate=q,oe.needsUpdate=H,oe.type=te}function Ge(T){const B=T.target;B.removeEventListener("dispose",Ge),ye(B)}function ye(T){Ve(T),X.remove(T)}function Ve(T){const B=X.get(T).programs;B!==void 0&&(B.forEach(function(q){Ue.releaseProgram(q)}),T.isShaderMaterial&&Ue.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,q,H,te,Ne){B===null&&(B=re);const Oe=te.isMesh&&te.matrixWorld.determinant()<0,We=zh(T,B,q,H,te);Se.setMaterial(H,Oe);let ze=q.index;const Ze=q.attributes.position;if(ze===null){if(Ze===void 0||Ze.count===0)return}else if(ze.count===0)return;let qe=1;H.wireframe===!0&&(ze=Ie.getWireframeAttribute(q),qe=2),I.setup(te,H,We,q,ze);let Xe,ft=Fe;ze!==null&&(Xe=pe.get(ze),ft=Ee,ft.setIndex(Xe));const li=ze!==null?ze.count:Ze.count,Mi=q.drawRange.start*qe,$e=q.drawRange.count*qe,fn=Ne!==null?Ne.start*qe:0,mt=Ne!==null?Ne.count*qe:1/0,pn=Math.max(Mi,fn),Qr=Math.min(li,Mi+$e,fn+mt)-1,mn=Math.max(0,Qr-pn+1);if(mn!==0){if(te.isMesh)H.wireframe===!0?(Se.setLineWidth(H.wireframeLinewidth*ce()),ft.setMode(1)):ft.setMode(4);else if(te.isLine){let Tn=H.linewidth;Tn===void 0&&(Tn=1),Se.setLineWidth(Tn*ce()),te.isLineSegments?ft.setMode(1):te.isLineLoop?ft.setMode(2):ft.setMode(3)}else te.isPoints?ft.setMode(0):te.isSprite&&ft.setMode(4);if(te.isInstancedMesh)ft.renderInstances(pn,mn,te.count);else if(q.isInstancedBufferGeometry){const Tn=Math.min(q.instanceCount,q._maxInstanceCount);ft.renderInstances(pn,mn,Tn)}else ft.render(pn,mn)}},this.compile=function(T,B){d=S.get(T),d.init(),g.push(d),T.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(d.pushLight(q),q.castShadow&&d.pushShadow(q))}),d.setupLights(v.physicallyCorrectLights),T.traverse(function(q){const H=q.material;if(H)if(Array.isArray(H))for(let te=0;te<H.length;te++){const Ne=H[te];va(Ne,T,q)}else va(H,T,q)}),g.pop(),d=null};let st=null;function nt(T){st&&st(T)}function hn(){oi.stop()}function dn(){oi.start()}const oi=new Wu;oi.setAnimationLoop(nt),typeof window<"u"&&oi.setContext(window),this.setAnimationLoop=function(T){st=T,he.setAnimationLoop(T),T===null?oi.stop():oi.start()},he.addEventListener("sessionstart",hn),he.addEventListener("sessionend",dn),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;T.autoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(B),B=he.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,B,b),d=S.get(T,g.length),d.init(),g.push(d),Q.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),K.setFromProjectionMatrix(Q),G=this.localClippingEnabled,ae=ne.init(this.clippingPlanes,G,B),h=E.get(T,p.length),h.init(),p.push(h),ul(T,B,0,v.sortObjects),h.finish(),v.sortObjects===!0&&h.sort(M,w),ae===!0&&ne.beginShadows();const q=d.state.shadowsArray;if(oe.render(q,T,B),ae===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),me.render(h,T),d.setupLights(v.physicallyCorrectLights),B.isArrayCamera){const H=B.cameras;for(let te=0,Ne=H.length;te<Ne;te++){const Oe=H[te];hl(h,T,Oe,Oe.viewport)}}else hl(h,T,B);b!==null&&(ie.updateMultisampleRenderTarget(b),ie.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(v,T,B),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1),I.resetDefaultState(),_=-1,y=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,p.pop(),p.length>0?h=p[p.length-1]:h=null};function ul(T,B,q,H){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||K.intersectsSprite(T)){H&&ee.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Q);const Oe=Ae.update(T),We=T.material;We.visible&&h.push(T,Oe,We,q,ee.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==He.render.frame&&(T.skeleton.update(),T.skeleton.frame=He.render.frame),!T.frustumCulled||K.intersectsObject(T))){H&&ee.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Q);const Oe=Ae.update(T),We=T.material;if(Array.isArray(We)){const ze=Oe.groups;for(let Ze=0,qe=ze.length;Ze<qe;Ze++){const Xe=ze[Ze],ft=We[Xe.materialIndex];ft&&ft.visible&&h.push(T,Oe,ft,q,ee.z,Xe)}}else We.visible&&h.push(T,Oe,We,q,ee.z,null)}}const Ne=T.children;for(let Oe=0,We=Ne.length;Oe<We;Oe++)ul(Ne[Oe],B,q,H)}function hl(T,B,q,H){const te=T.opaque,Ne=T.transmissive,Oe=T.transparent;d.setupLightsView(q),Ne.length>0&&Fh(te,B,q),H&&Se.viewport(A.copy(H)),te.length>0&&$r(te,B,q),Ne.length>0&&$r(Ne,B,q),Oe.length>0&&$r(Oe,B,q)}function Fh(T,B,q){if(W===null){const Oe=a===!0&&ve.isWebGL2===!0?Wo:Kt;W=new Oe(1024,1024,{generateMipmaps:!0,type:fe.convert(vi)!==null?vi:zn,minFilter:aa,magFilter:vt,wrapS:jt,wrapT:jt,useRenderToTexture:we.has("WEBGL_multisampled_render_to_texture")})}const H=v.getRenderTarget();v.setRenderTarget(W),v.clear();const te=v.toneMapping;v.toneMapping=Qn,$r(T,B,q),v.toneMapping=te,ie.updateMultisampleRenderTarget(W),ie.updateRenderTargetMipmap(W),v.setRenderTarget(H)}function $r(T,B,q){const H=B.isScene===!0?B.overrideMaterial:null;for(let te=0,Ne=T.length;te<Ne;te++){const Oe=T[te],We=Oe.object,ze=Oe.geometry,Ze=H===null?Oe.material:H,qe=Oe.group;We.layers.test(q.layers)&&Nh(We,B,q,ze,Ze,qe)}}function Nh(T,B,q,H,te,Ne){T.onBeforeRender(v,B,q,H,te,Ne),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),te.onBeforeRender(v,B,q,H,T,Ne),te.transparent===!0&&te.side===Zi?(te.side=gt,te.needsUpdate=!0,v.renderBufferDirect(q,B,H,te,T,Ne),te.side=zr,te.needsUpdate=!0,v.renderBufferDirect(q,B,H,te,T,Ne),te.side=Zi):v.renderBufferDirect(q,B,H,te,T,Ne),T.onAfterRender(v,B,q,H,te,Ne)}function va(T,B,q){B.isScene!==!0&&(B=re);const H=X.get(T),te=d.state.lights,Ne=d.state.shadowsArray,Oe=te.state.version,We=Ue.getParameters(T,te.state,Ne,B,q),ze=Ue.getProgramCacheKey(We);let Ze=H.programs;H.environment=T.isMeshStandardMaterial?B.environment:null,H.fog=B.fog,H.envMap=(T.isMeshStandardMaterial?Me:ue).get(T.envMap||H.environment),Ze===void 0&&(T.addEventListener("dispose",Ge),Ze=new Map,H.programs=Ze);let qe=Ze.get(ze);if(qe!==void 0){if(H.currentProgram===qe&&H.lightsStateVersion===Oe)return dl(T,We),qe}else We.uniforms=Ue.getUniforms(T),T.onBuild(q,We,v),T.onBeforeCompile(We,v),qe=Ue.acquireProgram(We,ze),Ze.set(ze,qe),H.uniforms=We.uniforms;const Xe=H.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Xe.clippingPlanes=ne.uniform),dl(T,We),H.needsLights=Bh(T),H.lightsStateVersion=Oe,H.needsLights&&(Xe.ambientLightColor.value=te.state.ambient,Xe.lightProbe.value=te.state.probe,Xe.directionalLights.value=te.state.directional,Xe.directionalLightShadows.value=te.state.directionalShadow,Xe.spotLights.value=te.state.spot,Xe.spotLightShadows.value=te.state.spotShadow,Xe.rectAreaLights.value=te.state.rectArea,Xe.ltc_1.value=te.state.rectAreaLTC1,Xe.ltc_2.value=te.state.rectAreaLTC2,Xe.pointLights.value=te.state.point,Xe.pointLightShadows.value=te.state.pointShadow,Xe.hemisphereLights.value=te.state.hemi,Xe.directionalShadowMap.value=te.state.directionalShadowMap,Xe.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Xe.spotShadowMap.value=te.state.spotShadowMap,Xe.spotShadowMatrix.value=te.state.spotShadowMatrix,Xe.pointShadowMap.value=te.state.pointShadowMap,Xe.pointShadowMatrix.value=te.state.pointShadowMatrix);const ft=qe.getUniforms(),li=ei.seqWithValue(ft.seq,Xe);return H.currentProgram=qe,H.uniformsList=li,qe}function dl(T,B){const q=X.get(T);q.outputEncoding=B.outputEncoding,q.instancing=B.instancing,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function zh(T,B,q,H,te){B.isScene!==!0&&(B=re),ie.resetTextureUnits();const Ne=B.fog,Oe=H.isMeshStandardMaterial?B.environment:null,We=b===null?v.outputEncoding:b.texture.encoding,ze=(H.isMeshStandardMaterial?Me:ue).get(H.envMap||Oe),Ze=H.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,qe=!!H.normalMap&&!!q.attributes.tangent,Xe=!!q.morphAttributes.position,ft=!!q.morphAttributes.normal,li=q.morphAttributes.position?q.morphAttributes.position.length:0,Mi=H.toneMapped?v.toneMapping:Qn,$e=X.get(H),fn=d.state.lights;if(ae===!0&&(G===!0||T!==y)){const tn=T===y&&H.id===_;ne.setState(H,T,tn)}let mt=!1;H.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==fn.state.version||$e.outputEncoding!==We||te.isInstancedMesh&&$e.instancing===!1||!te.isInstancedMesh&&$e.instancing===!0||te.isSkinnedMesh&&$e.skinning===!1||!te.isSkinnedMesh&&$e.skinning===!0||$e.envMap!==ze||H.fog&&$e.fog!==Ne||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==ne.numPlanes||$e.numIntersection!==ne.numIntersection)||$e.vertexAlphas!==Ze||$e.vertexTangents!==qe||$e.morphTargets!==Xe||$e.morphNormals!==ft||$e.toneMapping!==Mi||ve.isWebGL2===!0&&$e.morphTargetsCount!==li)&&(mt=!0):(mt=!0,$e.__version=H.version);let pn=$e.currentProgram;mt===!0&&(pn=va(H,B,te));let Qr=!1,mn=!1,Tn=!1;const Ct=pn.getUniforms(),hr=$e.uniforms;if(Se.useProgram(pn.program)&&(Qr=!0,mn=!0,Tn=!0),H.id!==_&&(_=H.id,mn=!0),Qr||y!==T){if(Ct.setValue(j,"projectionMatrix",T.projectionMatrix),ve.logarithmicDepthBuffer&&Ct.setValue(j,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),y!==T&&(y=T,mn=!0,Tn=!0),H.isShaderMaterial||H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshStandardMaterial||H.envMap){const tn=Ct.map.cameraPosition;tn!==void 0&&tn.setValue(j,ee.setFromMatrixPosition(T.matrixWorld))}(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ct.setValue(j,"isOrthographic",T.isOrthographicCamera===!0),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial||H.isShadowMaterial||te.isSkinnedMesh)&&Ct.setValue(j,"viewMatrix",T.matrixWorldInverse)}if(te.isSkinnedMesh){Ct.setOptional(j,te,"bindMatrix"),Ct.setOptional(j,te,"bindMatrixInverse");const tn=te.skeleton;tn&&(ve.floatVertexTextures?(tn.boneTexture===null&&tn.computeBoneTexture(),Ct.setValue(j,"boneTexture",tn.boneTexture,ie),Ct.setValue(j,"boneTextureSize",tn.boneTextureSize)):Ct.setOptional(j,tn,"boneMatrices"))}return q&&(q.morphAttributes.position!==void 0||q.morphAttributes.normal!==void 0)&&se.update(te,q,H,pn),(mn||$e.receiveShadow!==te.receiveShadow)&&($e.receiveShadow=te.receiveShadow,Ct.setValue(j,"receiveShadow",te.receiveShadow)),mn&&(Ct.setValue(j,"toneMappingExposure",v.toneMappingExposure),$e.needsLights&&kh(hr,Tn),Ne&&H.fog&&Qe.refreshFogUniforms(hr,Ne),Qe.refreshMaterialUniforms(hr,H,P,k,W),ei.upload(j,$e.uniformsList,hr,ie)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ei.upload(j,$e.uniformsList,hr,ie),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ct.setValue(j,"center",te.center),Ct.setValue(j,"modelViewMatrix",te.modelViewMatrix),Ct.setValue(j,"normalMatrix",te.normalMatrix),Ct.setValue(j,"modelMatrix",te.matrixWorld),pn}function kh(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function Bh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return f},this.getActiveMipmapLevel=function(){return m},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,B,q){X.get(T.texture).__webglTexture=B,X.get(T.depthTexture).__webglTexture=q;const H=X.get(T);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=q===void 0,H.__autoAllocateDepthBuffer||T.useRenderToTexture&&(console.warn("render-to-texture extension was disabled because an external texture was provided"),T.useRenderToTexture=!1,T.useRenderbuffer=!0))},this.setRenderTargetFramebuffer=function(T,B){const q=X.get(T);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,q=0){b=T,f=B,m=q;let H=!0;if(T){const ze=X.get(T);ze.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(36160,null),H=!1):ze.__webglFramebuffer===void 0?ie.setupRenderTarget(T):ze.__hasExternalTextures&&ie.rebindTextures(T,X.get(T.texture).__webglTexture,X.get(T.depthTexture).__webglTexture)}let te=null,Ne=!1,Oe=!1;if(T){const ze=T.texture;(ze.isDataTexture3D||ze.isDataTexture2DArray)&&(Oe=!0);const Ze=X.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(te=Ze[B],Ne=!0):T.useRenderbuffer?te=X.get(T).__webglMultisampledFramebuffer:te=Ze,A.copy(T.viewport),C.copy(T.scissor),D=T.scissorTest}else A.copy(N).multiplyScalar(P).floor(),C.copy(z).multiplyScalar(P).floor(),D=L;if(Se.bindFramebuffer(36160,te)&&ve.drawBuffers&&H){let ze=!1;if(T)if(T.isWebGLMultipleRenderTargets){const Ze=T.texture;if(F.length!==Ze.length||F[0]!==36064){for(let qe=0,Xe=Ze.length;qe<Xe;qe++)F[qe]=36064+qe;F.length=Ze.length,ze=!0}}else(F.length!==1||F[0]!==36064)&&(F[0]=36064,F.length=1,ze=!0);else(F.length!==1||F[0]!==1029)&&(F[0]=1029,F.length=1,ze=!0);ze&&(ve.isWebGL2?j.drawBuffers(F):we.get("WEBGL_draw_buffers").drawBuffersWEBGL(F))}if(Se.viewport(A),Se.scissor(C),Se.setScissorTest(D),Ne){const ze=X.get(T.texture);j.framebufferTexture2D(36160,36064,34069+B,ze.__webglTexture,q)}else if(Oe){const ze=X.get(T.texture),Ze=B||0;j.framebufferTextureLayer(36160,36064,ze.__webglTexture,q||0,Ze)}_=-1},this.readRenderTargetPixels=function(T,B,q,H,te,Ne,Oe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=X.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Oe!==void 0&&(We=We[Oe]),We){Se.bindFramebuffer(36160,We);try{const ze=T.texture,Ze=ze.format,qe=ze.type;if(Ze!==wt&&fe.convert(Ze)!==j.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xe=qe===vi&&(we.has("EXT_color_buffer_half_float")||ve.isWebGL2&&we.has("EXT_color_buffer_float"));if(qe!==zn&&fe.convert(qe)!==j.getParameter(35738)&&!(qe===Zn&&(ve.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j.checkFramebufferStatus(36160)===36053?B>=0&&B<=T.width-H&&q>=0&&q<=T.height-te&&j.readPixels(B,q,H,te,fe.convert(Ze),fe.convert(qe),Ne):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const ze=b!==null?X.get(b).__webglFramebuffer:null;Se.bindFramebuffer(36160,ze)}}},this.copyFramebufferToTexture=function(T,B,q=0){if(B.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}const H=Math.pow(2,-q),te=Math.floor(B.image.width*H),Ne=Math.floor(B.image.height*H);ie.setTexture2D(B,0),j.copyTexSubImage2D(3553,q,0,0,T.x,T.y,te,Ne),Se.unbindTexture()},this.copyTextureToTexture=function(T,B,q,H=0){const te=B.image.width,Ne=B.image.height,Oe=fe.convert(q.format),We=fe.convert(q.type);ie.setTexture2D(q,0),j.pixelStorei(37440,q.flipY),j.pixelStorei(37441,q.premultiplyAlpha),j.pixelStorei(3317,q.unpackAlignment),B.isDataTexture?j.texSubImage2D(3553,H,T.x,T.y,te,Ne,Oe,We,B.image.data):B.isCompressedTexture?j.compressedTexSubImage2D(3553,H,T.x,T.y,B.mipmaps[0].width,B.mipmaps[0].height,Oe,B.mipmaps[0].data):j.texSubImage2D(3553,H,T.x,T.y,Oe,We,B.image),H===0&&q.generateMipmaps&&j.generateMipmap(3553),Se.unbindTexture()},this.copyTextureToTexture3D=function(T,B,q,H,te=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ne=T.max.x-T.min.x+1,Oe=T.max.y-T.min.y+1,We=T.max.z-T.min.z+1,ze=fe.convert(H.format),Ze=fe.convert(H.type);let qe;if(H.isDataTexture3D)ie.setTexture3D(H,0),qe=32879;else if(H.isDataTexture2DArray)ie.setTexture2DArray(H,0),qe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(37440,H.flipY),j.pixelStorei(37441,H.premultiplyAlpha),j.pixelStorei(3317,H.unpackAlignment);const Xe=j.getParameter(3314),ft=j.getParameter(32878),li=j.getParameter(3316),Mi=j.getParameter(3315),$e=j.getParameter(32877),fn=q.isCompressedTexture?q.mipmaps[0]:q.image;j.pixelStorei(3314,fn.width),j.pixelStorei(32878,fn.height),j.pixelStorei(3316,T.min.x),j.pixelStorei(3315,T.min.y),j.pixelStorei(32877,T.min.z),q.isDataTexture||q.isDataTexture3D?j.texSubImage3D(qe,te,B.x,B.y,B.z,Ne,Oe,We,ze,Ze,fn.data):q.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(qe,te,B.x,B.y,B.z,Ne,Oe,We,ze,fn.data)):j.texSubImage3D(qe,te,B.x,B.y,B.z,Ne,Oe,We,ze,Ze,fn),j.pixelStorei(3314,Xe),j.pixelStorei(32878,ft),j.pixelStorei(3316,li),j.pixelStorei(3315,Mi),j.pixelStorei(32877,$e),te===0&&H.generateMipmaps&&j.generateMipmap(qe),Se.unbindTexture()},this.initTexture=function(T){ie.setTexture2D(T,0),Se.unbindTexture()},this.resetState=function(){f=0,m=0,b=null,Se.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}tt.prototype.isWebGLRenderer=!0;class K0 extends tt{}K0.prototype.isWebGL1Renderer=!0;class Qo extends et{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}Qo.prototype.isScene=!0;class Xr{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Br,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}Xr.prototype.isInterleavedBuffer=!0;const pt=new R;class Or{constructor(e,t,n,i=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pt.x=this.getX(t),pt.y=this.getY(t),pt.z=this.getZ(t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.x=this.getX(t),pt.y=this.getY(t),pt.z=this.getZ(t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.x=this.getX(t),pt.y=this.getY(t),pt.z=this.getZ(t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new _t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Or(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}Or.prototype.isInterleavedBufferAttribute=!0;class ah extends Dt{constructor(e){super(),this.type="SpriteMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}ah.prototype.isSpriteMaterial=!0;let Bi;const xr=new R,Oi=new R,Ui=new R,Vi=new le,_r=new le,oh=new De,bs=new R,yr=new R,Ms=new R,Tc=new le,$a=new le,Ec=new le;class ex extends et{constructor(e){if(super(),this.type="Sprite",Bi===void 0){Bi=new ut;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Xr(t,5);Bi.setIndex([0,1,2,0,2,3]),Bi.setAttribute("position",new Or(n,3,0,!1)),Bi.setAttribute("uv",new Or(n,2,3,!1))}this.geometry=Bi,this.material=e!==void 0?e:new ah,this.center=new le(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Oi.setFromMatrixScale(this.matrixWorld),oh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ui.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Oi.multiplyScalar(-Ui.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;ws(bs.set(-.5,-.5,0),Ui,a,Oi,i,s),ws(yr.set(.5,-.5,0),Ui,a,Oi,i,s),ws(Ms.set(.5,.5,0),Ui,a,Oi,i,s),Tc.set(0,0),$a.set(1,0),Ec.set(1,1);let o=e.ray.intersectTriangle(bs,yr,Ms,!1,xr);if(o===null&&(ws(yr.set(-.5,.5,0),Ui,a,Oi,i,s),$a.set(0,1),o=e.ray.intersectTriangle(bs,Ms,yr,!1,xr),o===null))return;const l=e.ray.origin.distanceTo(xr);l<e.near||l>e.far||t.push({distance:l,point:xr.clone(),uv:xt.getUV(xr,bs,yr,Ms,Tc,$a,Ec,new le),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}ex.prototype.isSprite=!0;function ws(r,e,t,n,i,s){Vi.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(_r.x=s*Vi.x-i*Vi.y,_r.y=i*Vi.x+s*Vi.y):_r.copy(Vi),r.copy(e),r.x+=_r.x,r.y+=_r.y,r.applyMatrix4(oh)}const Ac=new R,Cc=new rt,Lc=new rt,tx=new R,Rc=new De;class lh extends Bt{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new De,this.bindMatrixInverse=new De}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;Cc.fromBufferAttribute(i.attributes.skinIndex,e),Lc.fromBufferAttribute(i.attributes.skinWeight,e),Ac.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Lc.getComponent(s);if(a!==0){const o=Cc.getComponent(s);Rc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(tx.copy(Ac).applyMatrix4(Rc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}lh.prototype.isSkinnedMesh=!0;class nx extends et{constructor(){super(),this.type="Bone"}}nx.prototype.isBone=!0;class ix extends Tt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=vt,u=vt,h,d){super(null,a,o,l,c,u,i,s,h,d),this.image={data:e,width:t,height:n},this.magFilter=c,this.minFilter=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}ix.prototype.isDataTexture=!0;class wo extends _t{constructor(e,t,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}wo.prototype.isInstancedBufferAttribute=!0;const Pc=new De,Ic=new De,Ss=[],br=new Bt;class rx extends Bt{constructor(e,t,n){super(e,t),this.instanceMatrix=new wo(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(br.geometry=this.geometry,br.material=this.material,br.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,Pc),Ic.multiplyMatrices(n,Pc),br.matrixWorld=Ic,br.raycast(e,Ss);for(let a=0,o=Ss.length;a<o;a++){const l=Ss[a];l.instanceId=s,l.object=this,t.push(l)}Ss.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new wo(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}rx.prototype.isInstancedMesh=!0;class Yr extends Dt{constructor(e){super(),this.type="LineBasicMaterial",this.color=new Le(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}Yr.prototype.isLineBasicMaterial=!0;const Dc=new R,Fc=new R,Nc=new De,Qa=new sr,Ts=new rr;class Ko extends et{constructor(e=new ut,t=new Yr){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Dc.fromBufferAttribute(t,i-1),Fc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Dc.distanceTo(Fc);e.setAttribute("lineDistance",new St(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ts.copy(n.boundingSphere),Ts.applyMatrix4(i),Ts.radius+=s,e.ray.intersectsSphere(Ts)===!1)return;Nc.copy(i).invert(),Qa.copy(e.ray).applyMatrix4(Nc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new R,u=new R,h=new R,d=new R,p=this.isLineSegments?2:1;if(n.isBufferGeometry){const g=n.index,x=n.attributes.position;if(g!==null){const f=Math.max(0,a.start),m=Math.min(g.count,a.start+a.count);for(let b=f,_=m-1;b<_;b+=p){const y=g.getX(b),A=g.getX(b+1);if(c.fromBufferAttribute(x,y),u.fromBufferAttribute(x,A),Qa.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:h.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),m=Math.min(x.count,a.start+a.count);for(let b=f,_=m-1;b<_;b+=p){if(c.fromBufferAttribute(x,b),u.fromBufferAttribute(x,b+1),Qa.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Ko.prototype.isLine=!0;const zc=new R,kc=new R;class el extends Ko{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)zc.fromBufferAttribute(t,i),kc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+zc.distanceTo(kc);e.setAttribute("lineDistance",new St(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}el.prototype.isLineSegments=!0;class sx extends Ko{constructor(e,t){super(e,t),this.type="LineLoop"}}sx.prototype.isLineLoop=!0;class ch extends Dt{constructor(e){super(),this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}ch.prototype.isPointsMaterial=!0;const Bc=new De,So=new sr,Es=new rr,As=new R;class ax extends et{constructor(e=new ut,t=new ch){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(i),Es.radius+=s,e.ray.intersectsSphere(Es)===!1)return;Bc.copy(i).invert(),So.copy(e.ray).applyMatrix4(Bc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o;if(n.isBufferGeometry){const c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,v=p;g<v;g++){const x=c.getX(g);As.fromBufferAttribute(h,x),Oc(As,x,l,i,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,v=p;g<v;g++)As.fromBufferAttribute(h,g),Oc(As,g,l,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}ax.prototype.isPoints=!0;function Oc(r,e,t,n,i,s,a){const o=So.distanceSqToPoint(r);if(o<t){const l=new R;So.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class ox extends Tt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.format=o!==void 0?o:xi,this.minFilter=a!==void 0?a:kt,this.magFilter=s!==void 0?s:kt,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}ox.prototype.isVideoTexture=!0;class lx extends Tt{constructor(e,t,n){super({width:e,height:t}),this.format=n,this.magFilter=vt,this.minFilter=vt,this.generateMipmaps=!1,this.needsUpdate=!0}}lx.prototype.isFramebufferTexture=!0;class cx extends Tt{constructor(e,t,n,i,s,a,o,l,c,u,h,d){super(null,a,o,l,c,u,i,s,h,d),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}cx.prototype.isCompressedTexture=!0;class ux extends Tt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.needsUpdate=!0}}ux.prototype.isCanvasTexture=!0;class en{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const u=n[i],d=n[i+1]-u,p=(a-u)/d;return(i+p)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new le:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new R,i=[],s=[],a=[],o=new R,l=new De;for(let p=0;p<=e;p++){const g=p/e;i[p]=this.getTangentAt(g,new R)}s[0]=new R,a[0]=new R;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(qt(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(qt(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class fa extends en{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new le,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}fa.prototype.isEllipseCurve=!0;class uh extends fa{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.type="ArcCurve"}}uh.prototype.isArcCurve=!0;function tl(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let d=(a-s)/c-(o-s)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,p*=u,i(a,o,d,p)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const Cs=new R,Ka=new tl,eo=new tl,to=new tl;class hh extends en{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new R){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(Cs.subVectors(i[0],i[1]).add(i[0]),c=Cs);const h=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(Cs.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Cs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),x<1e-4&&(x=v),Ka.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,v,x),eo.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,v,x),to.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,v,x)}else this.curveType==="catmullrom"&&(Ka.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),eo.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),to.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Ka.calc(l),eo.calc(l),to.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}hh.prototype.isCatmullRomCurve3=!0;function Uc(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function hx(r,e){const t=1-r;return t*t*e}function dx(r,e){return 2*(1-r)*r*e}function fx(r,e){return r*r*e}function Pr(r,e,t,n){return hx(r,e)+dx(r,t)+fx(r,n)}function px(r,e){const t=1-r;return t*t*t*e}function mx(r,e){const t=1-r;return 3*t*t*r*e}function gx(r,e){return 3*(1-r)*r*r*e}function vx(r,e){return r*r*r*e}function Ir(r,e,t,n,i){return px(r,e)+mx(r,t)+gx(r,n)+vx(r,i)}class nl extends en{constructor(e=new le,t=new le,n=new le,i=new le){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new le){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ir(e,i.x,s.x,a.x,o.x),Ir(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}nl.prototype.isCubicBezierCurve=!0;class dh extends en{constructor(e=new R,t=new R,n=new R,i=new R){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new R){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ir(e,i.x,s.x,a.x,o.x),Ir(e,i.y,s.y,a.y,o.y),Ir(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}dh.prototype.isCubicBezierCurve3=!0;class pa extends en{constructor(e=new le,t=new le){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new le;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}pa.prototype.isLineCurve=!0;class xx extends en{constructor(e=new R,t=new R){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class il extends en{constructor(e=new le,t=new le,n=new le){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Pr(e,i.x,s.x,a.x),Pr(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}il.prototype.isQuadraticBezierCurve=!0;class fh extends en{constructor(e=new R,t=new R,n=new R){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Pr(e,i.x,s.x,a.x),Pr(e,i.y,s.y,a.y),Pr(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}fh.prototype.isQuadraticBezierCurve3=!0;class rl extends en{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(Uc(o,l.x,c.x,u.x,h.x),Uc(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new le().fromArray(i))}return this}}rl.prototype.isSplineCurve=!0;var ph=Object.freeze({__proto__:null,ArcCurve:uh,CatmullRomCurve3:hh,CubicBezierCurve:nl,CubicBezierCurve3:dh,EllipseCurve:fa,LineCurve:pa,LineCurve3:xx,QuadraticBezierCurve:il,QuadraticBezierCurve3:fh,SplineCurve:rl});class _x extends en{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new pa(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a&&a.isEllipseCurve?e*2:a&&(a.isLineCurve||a.isLineCurve3)?1:a&&a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new ph[i.type]().fromJSON(i))}return this}}class To extends _x{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new pa(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new il(this.currentPoint.clone(),new le(e,t),new le(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new nl(this.currentPoint.clone(),new le(e,t),new le(n,i),new le(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new rl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){const c=new fa(e,t,n,i,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Zr extends To{constructor(e){super(e),this.uuid=bn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new To().fromJSON(i))}return this}}const yx={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=mh(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,h,d,p;if(n&&(s=Tx(r,e,s,t)),r.length>80*t){o=c=r[0],l=u=r[1];for(let g=t;g<i;g+=t)h=r[g],d=r[g+1],h<o&&(o=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);p=Math.max(c-o,u-l),p=p!==0?1/p:0}return Ur(s,a,t,o,l,p),a}};function mh(r,e,t,n,i){let s,a;if(i===zx(r,e,t,n)>0)for(s=e;s<t;s+=n)a=Vc(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=Vc(s,r[s],r[s+1],a);return a&&ma(a,a.next)&&(Hr(a),a=a.next),a}function ni(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(ma(t,t.next)||dt(t.prev,t,t.next)===0)){if(Hr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ur(r,e,t,n,i,s,a){if(!r)return;!a&&s&&Rx(r,n,i,s);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?Mx(r,n,i,s):bx(r)){e.push(l.i/t),e.push(r.i/t),e.push(c.i/t),Hr(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=wx(ni(r),e,t),Ur(r,e,t,n,i,s,2)):a===2&&Sx(r,e,t,n,i,s):Ur(ni(r),e,t,n,i,s,1);break}}}function bx(r){const e=r.prev,t=r,n=r.next;if(dt(e,t,n)>=0)return!1;let i=r.next.next;for(;i!==r.prev;){if(qi(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&dt(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function Mx(r,e,t,n){const i=r.prev,s=r,a=r.next;if(dt(i,s,a)>=0)return!1;const o=i.x<s.x?i.x<a.x?i.x:a.x:s.x<a.x?s.x:a.x,l=i.y<s.y?i.y<a.y?i.y:a.y:s.y<a.y?s.y:a.y,c=i.x>s.x?i.x>a.x?i.x:a.x:s.x>a.x?s.x:a.x,u=i.y>s.y?i.y>a.y?i.y:a.y:s.y>a.y?s.y:a.y,h=Eo(o,l,e,t,n),d=Eo(c,u,e,t,n);let p=r.prevZ,g=r.nextZ;for(;p&&p.z>=h&&g&&g.z<=d;){if(p!==r.prev&&p!==r.next&&qi(i.x,i.y,s.x,s.y,a.x,a.y,p.x,p.y)&&dt(p.prev,p,p.next)>=0||(p=p.prevZ,g!==r.prev&&g!==r.next&&qi(i.x,i.y,s.x,s.y,a.x,a.y,g.x,g.y)&&dt(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;p&&p.z>=h;){if(p!==r.prev&&p!==r.next&&qi(i.x,i.y,s.x,s.y,a.x,a.y,p.x,p.y)&&dt(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;g&&g.z<=d;){if(g!==r.prev&&g!==r.next&&qi(i.x,i.y,s.x,s.y,a.x,a.y,g.x,g.y)&&dt(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function wx(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!ma(i,s)&&gh(i,n,n.next,s)&&Vr(i,s)&&Vr(s,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(s.i/t),Hr(n),Hr(n.next),n=r=s),n=n.next}while(n!==r);return ni(n)}function Sx(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Dx(a,o)){let l=vh(a,o);a=ni(a,a.next),l=ni(l,l.next),Ur(a,e,t,n,i,s),Ur(l,e,t,n,i,s);return}o=o.next}a=a.next}while(a!==r)}function Tx(r,e,t,n){const i=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*n,l=s<a-1?e[s+1]*n:r.length,c=mh(r,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Ix(c));for(i.sort(Ex),s=0;s<i.length;s++)Ax(i[s],t),t=ni(t,t.next);return t}function Ex(r,e){return r.x-e.x}function Ax(r,e){if(e=Cx(r,e),e){const t=vh(e,r);ni(e,e.next),ni(t,t.next)}}function Cx(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,a;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s){if(s=d,d===n){if(i===t.y)return t;if(i===t.next.y)return t.next}a=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!a)return null;if(n===s)return a;const o=a,l=a.x,c=a.y;let u=1/0,h;t=a;do n>=t.x&&t.x>=l&&n!==t.x&&qi(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)&&(h=Math.abs(i-t.y)/(n-t.x),Vr(t,r)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&Lx(a,t)))&&(a=t,u=h)),t=t.next;while(t!==o);return a}function Lx(r,e){return dt(r.prev,r,e.prev)<0&&dt(e.next,r,r.next)<0}function Rx(r,e,t,n){let i=r;do i.z===null&&(i.z=Eo(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Px(i)}function Px(r){let e,t,n,i,s,a,o,l,c=1;do{for(t=r,r=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(a>1);return r}function Eo(r,e,t,n,i){return r=32767*(r-t)*i,e=32767*(e-n)*i,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Ix(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function qi(r,e,t,n,i,s,a,o){return(i-a)*(e-o)-(r-a)*(s-o)>=0&&(r-a)*(n-o)-(t-a)*(e-o)>=0&&(t-a)*(s-o)-(i-a)*(n-o)>=0}function Dx(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!Fx(r,e)&&(Vr(r,e)&&Vr(e,r)&&Nx(r,e)&&(dt(r.prev,r,e.prev)||dt(r,e.prev,e))||ma(r,e)&&dt(r.prev,r,r.next)>0&&dt(e.prev,e,e.next)>0)}function dt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function ma(r,e){return r.x===e.x&&r.y===e.y}function gh(r,e,t,n){const i=Rs(dt(r,e,t)),s=Rs(dt(r,e,n)),a=Rs(dt(t,n,r)),o=Rs(dt(t,n,e));return!!(i!==s&&a!==o||i===0&&Ls(r,t,e)||s===0&&Ls(r,n,e)||a===0&&Ls(t,r,n)||o===0&&Ls(t,e,n))}function Ls(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Rs(r){return r>0?1:r<0?-1:0}function Fx(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&gh(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Vr(r,e){return dt(r.prev,r,r.next)<0?dt(r,e,r.next)>=0&&dt(r,r.prev,e)>=0:dt(r,e,r.prev)<0||dt(r,r.next,e)<0}function Nx(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function vh(r,e){const t=new Ao(r.i,r.x,r.y),n=new Ao(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Vc(r,e,t,n){const i=new Ao(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Hr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Ao(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function zx(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class ti{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return ti.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Hc(e),Gc(n,e);let a=e.length;t.forEach(Hc);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Gc(n,t[l]);const o=yx.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Hc(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Gc(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class lr extends ut{constructor(e=new Zr([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new St(i,3)),this.setAttribute("uv",new St(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1;let h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:kx;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=t.amount);let b,_=!1,y,A,C,D;f&&(b=f.getSpacedPoints(u),_=!0,d=!1,y=f.computeFrenetFrames(u,!1),A=new R,C=new R,D=new R),d||(x=0,p=0,g=0,v=0);const O=o.extractPoints(c);let k=O.shape;const P=O.holes;if(!ti.isClockWise(k)){k=k.reverse();for(let X=0,ie=P.length;X<ie;X++){const ue=P[X];ti.isClockWise(ue)&&(P[X]=ue.reverse())}}const w=ti.triangulateShape(k,P),N=k;for(let X=0,ie=P.length;X<ie;X++){const ue=P[X];k=k.concat(ue)}function z(X,ie,ue){return ie||console.error("THREE.ExtrudeGeometry: vec does not exist"),ie.clone().multiplyScalar(ue).add(X)}const L=k.length,F=w.length;function K(X,ie,ue){let Me,pe,Ie;const Ae=X.x-ie.x,Ue=X.y-ie.y,Qe=ue.x-X.x,E=ue.y-X.y,S=Ae*Ae+Ue*Ue,ne=Ae*E-Ue*Qe;if(Math.abs(ne)>Number.EPSILON){const oe=Math.sqrt(S),me=Math.sqrt(Qe*Qe+E*E),se=ie.x-Ue/oe,Fe=ie.y+Ae/oe,Ee=ue.x-E/me,fe=ue.y+Qe/me,I=((Ee-se)*E-(fe-Fe)*Qe)/(Ae*E-Ue*Qe);Me=se+Ae*I-X.x,pe=Fe+Ue*I-X.y;const ge=Me*Me+pe*pe;if(ge<=2)return new le(Me,pe);Ie=Math.sqrt(ge/2)}else{let oe=!1;Ae>Number.EPSILON?Qe>Number.EPSILON&&(oe=!0):Ae<-Number.EPSILON?Qe<-Number.EPSILON&&(oe=!0):Math.sign(Ue)===Math.sign(E)&&(oe=!0),oe?(Me=-Ue,pe=Ae,Ie=Math.sqrt(S)):(Me=Ae,pe=Ue,Ie=Math.sqrt(S/2))}return new le(Me/Ie,pe/Ie)}const ae=[];for(let X=0,ie=N.length,ue=ie-1,Me=X+1;X<ie;X++,ue++,Me++)ue===ie&&(ue=0),Me===ie&&(Me=0),ae[X]=K(N[X],N[ue],N[Me]);const G=[];let W,Q=ae.concat();for(let X=0,ie=P.length;X<ie;X++){const ue=P[X];W=[];for(let Me=0,pe=ue.length,Ie=pe-1,Ae=Me+1;Me<pe;Me++,Ie++,Ae++)Ie===pe&&(Ie=0),Ae===pe&&(Ae=0),W[Me]=K(ue[Me],ue[Ie],ue[Ae]);G.push(W),Q=Q.concat(W)}for(let X=0;X<x;X++){const ie=X/x,ue=p*Math.cos(ie*Math.PI/2),Me=g*Math.sin(ie*Math.PI/2)+v;for(let pe=0,Ie=N.length;pe<Ie;pe++){const Ae=z(N[pe],ae[pe],Me);de(Ae.x,Ae.y,-ue)}for(let pe=0,Ie=P.length;pe<Ie;pe++){const Ae=P[pe];W=G[pe];for(let Ue=0,Qe=Ae.length;Ue<Qe;Ue++){const E=z(Ae[Ue],W[Ue],Me);de(E.x,E.y,-ue)}}}const ee=g+v;for(let X=0;X<L;X++){const ie=d?z(k[X],Q[X],ee):k[X];_?(C.copy(y.normals[0]).multiplyScalar(ie.x),A.copy(y.binormals[0]).multiplyScalar(ie.y),D.copy(b[0]).add(C).add(A),de(D.x,D.y,D.z)):de(ie.x,ie.y,0)}for(let X=1;X<=u;X++)for(let ie=0;ie<L;ie++){const ue=d?z(k[ie],Q[ie],ee):k[ie];_?(C.copy(y.normals[X]).multiplyScalar(ue.x),A.copy(y.binormals[X]).multiplyScalar(ue.y),D.copy(b[X]).add(C).add(A),de(D.x,D.y,D.z)):de(ue.x,ue.y,h/u*X)}for(let X=x-1;X>=0;X--){const ie=X/x,ue=p*Math.cos(ie*Math.PI/2),Me=g*Math.sin(ie*Math.PI/2)+v;for(let pe=0,Ie=N.length;pe<Ie;pe++){const Ae=z(N[pe],ae[pe],Me);de(Ae.x,Ae.y,h+ue)}for(let pe=0,Ie=P.length;pe<Ie;pe++){const Ae=P[pe];W=G[pe];for(let Ue=0,Qe=Ae.length;Ue<Qe;Ue++){const E=z(Ae[Ue],W[Ue],Me);_?de(E.x,E.y+b[u-1].y,b[u-1].x+ue):de(E.x,E.y,h+ue)}}}re(),ce();function re(){const X=i.length/3;if(d){let ie=0,ue=L*ie;for(let Me=0;Me<F;Me++){const pe=w[Me];we(pe[2]+ue,pe[1]+ue,pe[0]+ue)}ie=u+x*2,ue=L*ie;for(let Me=0;Me<F;Me++){const pe=w[Me];we(pe[0]+ue,pe[1]+ue,pe[2]+ue)}}else{for(let ie=0;ie<F;ie++){const ue=w[ie];we(ue[2],ue[1],ue[0])}for(let ie=0;ie<F;ie++){const ue=w[ie];we(ue[0]+L*u,ue[1]+L*u,ue[2]+L*u)}}n.addGroup(X,i.length/3-X,0)}function ce(){const X=i.length/3;let ie=0;j(N,ie),ie+=N.length;for(let ue=0,Me=P.length;ue<Me;ue++){const pe=P[ue];j(pe,ie),ie+=pe.length}n.addGroup(X,i.length/3-X,1)}function j(X,ie){let ue=X.length;for(;--ue>=0;){const Me=ue;let pe=ue-1;pe<0&&(pe=X.length-1);for(let Ie=0,Ae=u+x*2;Ie<Ae;Ie++){const Ue=L*Ie,Qe=L*(Ie+1),E=ie+Me+Ue,S=ie+pe+Ue,ne=ie+pe+Qe,oe=ie+Me+Qe;ve(E,S,ne,oe)}}}function de(X,ie,ue){l.push(X),l.push(ie),l.push(ue)}function we(X,ie,ue){Se(X),Se(ie),Se(ue);const Me=i.length/3,pe=m.generateTopUV(n,i,Me-3,Me-2,Me-1);He(pe[0]),He(pe[1]),He(pe[2])}function ve(X,ie,ue,Me){Se(X),Se(ie),Se(Me),Se(ie),Se(ue),Se(Me);const pe=i.length/3,Ie=m.generateSideWallUV(n,i,pe-6,pe-3,pe-2,pe-1);He(Ie[0]),He(Ie[1]),He(Ie[3]),He(Ie[1]),He(Ie[2]),He(Ie[3])}function Se(X){i.push(l[X*3+0]),i.push(l[X*3+1]),i.push(l[X*3+2])}function He(X){s.push(X.x),s.push(X.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Bx(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new ph[i.type]().fromJSON(i)),new lr(n,e.options)}}const kx={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new le(s,a),new le(o,l),new le(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[i*3],p=e[i*3+1],g=e[i*3+2],v=e[s*3],x=e[s*3+1],f=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new le(a,1-l),new le(c,1-h),new le(d,1-g),new le(v,1-f)]:[new le(o,1-l),new le(u,1-h),new le(p,1-g),new le(x,1-f)]}};function Bx(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class sl extends ut{constructor(e=new Zr([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new St(i,3)),this.setAttribute("normal",new St(s,3)),this.setAttribute("uv",new St(a,2));function c(u){const h=i.length/3,d=u.extractPoints(t);let p=d.shape;const g=d.holes;ti.isClockWise(p)===!1&&(p=p.reverse());for(let x=0,f=g.length;x<f;x++){const m=g[x];ti.isClockWise(m)===!0&&(g[x]=m.reverse())}const v=ti.triangulateShape(p,g);for(let x=0,f=g.length;x<f;x++){const m=g[x];p=p.concat(m)}for(let x=0,f=p.length;x<f;x++){const m=p[x];i.push(m.x,m.y,0),s.push(0,0,1),a.push(m.x,m.y)}for(let x=0,f=v.length;x<f;x++){const m=v[x],b=m[0]+h,_=m[1]+h,y=m[2]+h;n.push(b,_,y),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Ox(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const a=t[e.shapes[i]];n.push(a)}return new sl(n,e.curveSegments)}}function Ox(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class Ux extends Dt{constructor(e){super(),this.type="ShadowMaterial",this.color=new Le(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}Ux.prototype.isShadowMaterial=!0;class xh extends Dt{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}xh.prototype.isMeshStandardMaterial=!0;class Vx extends xh{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}Vx.prototype.isMeshPhysicalMaterial=!0;class Hx extends Dt{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new Le(16777215),this.specular=new Le(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Hx.prototype.isMeshPhongMaterial=!0;class Gx extends Dt{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Le(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Gx.prototype.isMeshToonMaterial=!0;class Wx extends Dt{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}Wx.prototype.isMeshNormalMaterial=!0;class qx extends Dt{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}qx.prototype.isMeshLambertMaterial=!0;class jx extends Dt{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Le(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}}jx.prototype.isMeshMatcapMaterial=!0;class Xx extends Yr{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}Xx.prototype.isLineDashedMaterial=!0;const ct={arraySlice:function(r,e,t){return ct.isTypedArray(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)},convertArray:function(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)},isTypedArray:function(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)},getKeyframeOrder:function(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i},flattenJSON:function(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)},subclip:function(r,e,t,n,i=30){const s=r.clone();s.name=e;const a=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],u=c.getValueSize(),h=[],d=[];for(let p=0;p<c.times.length;++p){const g=c.times[p]*i;if(!(g<t||g>=n)){h.push(c.times[p]);for(let v=0;v<u;++v)d.push(c.values[p*u+v])}}h.length!==0&&(c.times=ct.convertArray(h,c.times.constructor),c.values=ct.convertArray(d,c.values.constructor),a.push(c))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s},makeClipAdditive:function(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=r.tracks.find(function(f){return f.name===o.name&&f.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0;const p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=p/3);const g=o.times.length-1;let v;if(s<=o.times[0]){const f=u,m=h-u;v=ct.arraySlice(o.values,f,m)}else if(s>=o.times[g]){const f=g*h+u,m=f+h-u;v=ct.arraySlice(o.values,f,m)}else{const f=o.createInterpolant(),m=u,b=h-u;f.evaluate(s),v=ct.arraySlice(f.resultBuffer,m,b)}l==="quaternion"&&new Vt().fromArray(v).normalize().conjugate().toArray(v);const x=c.times.length;for(let f=0;f<x;++f){const m=f*p+d;if(l==="quaternion")Vt.multiplyQuaternionsFlat(c.values,m,v,0,c.values,m);else{const b=p-d*2;for(let _=0;_<b;++_)c.values[m+_]-=v[_]}}}return r.blendMode=ku,r}};class ii{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,s)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,s,e)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}ii.prototype.beforeStart_=ii.prototype.copySampleValue_;ii.prototype.afterEnd_=ii.prototype.copySampleValue_;class Yx extends ii{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gi,endingEnd:Gi}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Wi:s=e,o=2*t-n;break;case Xs:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Wi:a=e,l=2*n-t;break;case Xs:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),v=g*g,x=v*g,f=-d*x+2*d*v-d*g,m=(1+d)*x+(-1.5-2*d)*v+(-.5+d)*g+1,b=(-1-p)*x+(1.5+p)*v+.5*g,_=p*x-p*v;for(let y=0;y!==o;++y)s[y]=f*a[u+y]+m*a[c+y]+b*a[l+y]+_*a[h+y];return s}}class _h extends ii{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)s[d]=a[c+d]*h+a[l+d]*u;return s}}class Zx extends ii{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Sn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ct.convertArray(t,this.TimeBufferType),this.values=ct.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ct.convertArray(e.times,Array),values:ct.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Zx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _h(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case qs:t=this.InterpolantFactoryMethodDiscrete;break;case js:t=this.InterpolantFactoryMethodLinear;break;case ba:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qs;case this.InterpolantFactoryMethodLinear:return js;case this.InterpolantFactoryMethodSmooth:return ba}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=ct.arraySlice(n,s,a),this.values=ct.arraySlice(this.values,s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&ct.isTypedArray(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=ct.arraySlice(this.times),t=ct.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===ba,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){const v=t[h+g];if(v!==t[d+g]||v!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=ct.arraySlice(e,0,a),this.values=ct.arraySlice(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=ct.arraySlice(this.times,0),t=ct.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=js;class cr extends Sn{}cr.prototype.ValueTypeName="bool";cr.prototype.ValueBufferType=Array;cr.prototype.DefaultInterpolation=qs;cr.prototype.InterpolantFactoryMethodLinear=void 0;cr.prototype.InterpolantFactoryMethodSmooth=void 0;class yh extends Sn{}yh.prototype.ValueTypeName="color";class Js extends Sn{}Js.prototype.ValueTypeName="number";class Jx extends ii{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Vt.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Jr extends Sn{InterpolantFactoryMethodLinear(e){return new Jx(this.times,this.values,this.getValueSize(),e)}}Jr.prototype.ValueTypeName="quaternion";Jr.prototype.DefaultInterpolation=js;Jr.prototype.InterpolantFactoryMethodSmooth=void 0;class ur extends Sn{}ur.prototype.ValueTypeName="string";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=qs;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;class $s extends Sn{}$s.prototype.ValueTypeName="vector";class Wc{constructor(e,t=-1,n,i=Go){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=bn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Qx(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Sn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=ct.getKeyframeOrder(l);l=ct.sortedArray(l,1,u),c=ct.sortedArray(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Js(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,p,g,v){if(p.length!==0){const x=[],f=[];ct.flattenJSON(p,x,f,g),x.length!==0&&v.push(new h(d,x,f))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)p[d[g].morphTargets[v]]=-1;for(const v in p){const x=[],f=[];for(let m=0;m!==d[g].morphTargets.length;++m){const b=d[g];x.push(b.time),f.push(b.morphTarget===v?1:0)}i.push(new Js(".morphTargetInfluence["+v+"]",x,f))}l=p.length*(a||1)}else{const p=".bones["+t[h].name+"]";n($s,p+".position",d,"pos",i),n(Jr,p+".quaternion",d,"rot",i),n($s,p+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function $x(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Js;case"vector":case"vector2":case"vector3":case"vector4":return $s;case"color":return yh;case"quaternion":return Jr;case"bool":case"boolean":return cr;case"string":return ur}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Qx(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=$x(r.type);if(r.times===void 0){const t=[],n=[];ct.flattenJSON(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Qi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Kx{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const e_=new Kx;let ai=class{constructor(e){this.manager=e!==void 0?e:e_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};const Pn={};class t_ extends ai{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Qi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Pn[e]!==void 0){Pn[e].push({onLoad:t,onProgress:n,onError:i});return}Pn[e]=[],Pn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"});fetch(a).then(o=>{if(o.status===200||o.status===0){if(o.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||o.body.getReader===void 0)return o;const l=Pn[e],c=o.body.getReader(),u=o.headers.get("Content-Length"),h=u?parseInt(u):0,d=h!==0;let p=0;const g=new ReadableStream({start(v){x();function x(){c.read().then(({done:f,value:m})=>{if(f)v.close();else{p+=m.byteLength;const b=new ProgressEvent("progress",{lengthComputable:d,loaded:p,total:h});for(let _=0,y=l.length;_<y;_++){const A=l[_];A.onProgress&&A.onProgress(b)}v.enqueue(m),x()}})}}});return new Response(g)}else throw Error(`fetch for "${o.url}" responded with ${o.status}: ${o.statusText}`)}).then(o=>{switch(this.responseType){case"arraybuffer":return o.arrayBuffer();case"blob":return o.blob();case"document":return o.text().then(l=>new DOMParser().parseFromString(l,this.mimeType));case"json":return o.json();default:return o.text()}}).then(o=>{Qi.add(e,o);const l=Pn[e];delete Pn[e];for(let c=0,u=l.length;c<u;c++){const h=l[c];h.onLoad&&h.onLoad(o)}}).catch(o=>{const l=Pn[e];if(l===void 0)throw this.manager.itemError(e),o;delete Pn[e];for(let c=0,u=l.length;c<u;c++){const h=l[c];h.onError&&h.onError(o)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class bh extends ai{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Qi.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=oa("img");function l(){u(),Qi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class n_ extends ai{constructor(e){super(e)}load(e,t,n,i){const s=new la,a=new bh(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(u){s.images[c]=u,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class Mh extends ai{constructor(e){super(e)}load(e,t,n,i){const s=new Tt,a=new bh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Mn extends et{constructor(e,t=1){super(),this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}Mn.prototype.isLight=!0;class i_ extends Mn{constructor(e,t,n){super(e,n),this.type="HemisphereLight",this.position.copy(et.DefaultUp),this.updateMatrix(),this.groundColor=new Le(t)}copy(e){return Mn.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}i_.prototype.isHemisphereLight=!0;const qc=new De,jc=new R,Xc=new R;class al{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ca,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;jc.setFromMatrixPosition(e.matrixWorld),t.position.copy(jc),Xc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xc),t.updateMatrixWorld(),qc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class wh extends al{constructor(){super(new zt(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,n=yo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}wh.prototype.isSpotLightShadow=!0;class r_ extends Mn{constructor(e,t,n=0,i=Math.PI/3,s=0,a=1){super(e,t),this.type="SpotLight",this.position.copy(et.DefaultUp),this.updateMatrix(),this.target=new et,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.shadow=new wh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}r_.prototype.isSpotLight=!0;const Yc=new De,Mr=new R,no=new R;class Sh extends al{constructor(){super(new zt(90,1,.5,500)),this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Mr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Mr),no.copy(n.position),no.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(no),n.updateMatrixWorld(),i.makeTranslation(-Mr.x,-Mr.y,-Mr.z),Yc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yc)}}Sh.prototype.isPointLightShadow=!0;class s_ extends Mn{constructor(e,t,n=0,i=1){super(e,t),this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Sh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}s_.prototype.isPointLight=!0;class Th extends al{constructor(){super(new Yo(-5,5,5,-5,.5,500))}}Th.prototype.isDirectionalLightShadow=!0;class a_ extends Mn{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(et.DefaultUp),this.updateMatrix(),this.target=new et,this.shadow=new Th}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}a_.prototype.isDirectionalLight=!0;class o_ extends Mn{constructor(e,t){super(e,t),this.type="AmbientLight"}}o_.prototype.isAmbientLight=!0;class l_ extends Mn{constructor(e,t,n=10,i=10){super(e,t),this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}l_.prototype.isRectAreaLight=!0;class Eh{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new R)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(n*s)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*n*s),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}Eh.prototype.isSphericalHarmonics3=!0;class ol extends Mn{constructor(e=new Eh,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}ol.prototype.isLightProbe=!0;class c_{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class u_ extends ut{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}u_.prototype.isInstancedBufferGeometry=!0;class h_ extends ai{constructor(e){super(e),typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Qi.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Qi.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}h_.prototype.isImageBitmapLoader=!0;let Ps;const d_={getContext:function(){return Ps===void 0&&(Ps=new(window.AudioContext||window.webkitAudioContext)),Ps},setContext:function(r){Ps=r}};class f_ extends ai{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new t_(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{const l=o.slice(0);d_.getContext().decodeAudioData(l,function(u){t(u)})}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}}class p_ extends ol{constructor(e,t,n=1){super(void 0,n);const i=new Le().set(e),s=new Le().set(t),a=new R(i.r,i.g,i.b),o=new R(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(a).add(o).multiplyScalar(l),this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c)}}p_.prototype.isHemisphereLightProbe=!0;class m_ extends ol{constructor(e,t=1){super(void 0,t);const n=new Le().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}m_.prototype.isAmbientLightProbe=!0;class g_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Zc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Zc(){return(typeof performance>"u"?Date:performance).now()}class v_ extends et{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class x_{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Vt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;Vt.multiplyQuaternionsFlat(e,a,e,t,e,n),Vt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const ll="\\[\\]\\.:\\/",__=new RegExp("["+ll+"]","g"),cl="[^"+ll+"]",y_="[^"+ll.replace("\\.","")+"]",b_=/((?:WC+[\/:])*)/.source.replace("WC",cl),M_=/(WCOD+)?/.source.replace("WCOD",y_),w_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cl),S_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cl),T_=new RegExp("^"+b_+M_+w_+S_+"$"),E_=["material","materials","bones"];class A_{constructor(e,t,n){const i=n||Ke.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ke{constructor(e,t,n){this.path=t,this.parsedPath=n||Ke.parseTrackName(t),this.node=Ke.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ke.Composite(e,t,n):new Ke(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(__,"")}static parseTrackName(e){const t=T_.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);E_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Ke.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ke.Composite=A_;Ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ke.prototype.GetterByBindingType=[Ke.prototype._getValue_direct,Ke.prototype._getValue_array,Ke.prototype._getValue_arrayElement,Ke.prototype._getValue_toArray];Ke.prototype.SetterByBindingTypeAndVersioning=[[Ke.prototype._setValue_direct,Ke.prototype._setValue_direct_setNeedsUpdate,Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_array,Ke.prototype._setValue_array_setNeedsUpdate,Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_arrayElement,Ke.prototype._setValue_arrayElement_setNeedsUpdate,Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_fromArray,Ke.prototype._setValue_fromArray_setNeedsUpdate,Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class C_{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,o=new Array(a),l={endingStart:Gi,endingEnd:Gi};for(let c=0;c!==a;++c){const u=s[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=lp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case ku:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case Go:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===cp;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===op){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Wi,i.endingEnd=Wi):(e?i.endingStart=this.zeroSlopeAtStart?Wi:Gi:i.endingStart=Xs,t?i.endingEnd=this.zeroSlopeAtEnd?Wi:Gi:i.endingEnd=Xs)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}}class L_ extends bi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){const d=i[h],p=d.name;let g=u[p];if(g!==void 0)a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}const v=t&&t._propertyBindings[h].binding.parsedPath;g=new x_(Ke.create(n,p,v),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),a[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new _h(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?Wc.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Go),l!==void 0){const h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const u=new C_(this,a,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,s),u}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Wc.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}L_.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class R_ extends Xr{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}R_.prototype.isInstancedInterleavedBuffer=!0;const jn=new R,Is=new De,io=new De;class P_ extends el{constructor(e){const t=Ah(e),n=new ut,i=[],s=[],a=new Le(0,0,1),o=new Le(0,1,0);for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(a.r,a.g,a.b),s.push(o.r,o.g,o.b))}n.setAttribute("position",new St(i,3)),n.setAttribute("color",new St(s,3));const l=new Yr({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");io.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<t.length;s++){const o=t[s];o.parent&&o.parent.isBone&&(Is.multiplyMatrices(io,o.matrixWorld),jn.setFromMatrixPosition(Is),i.setXYZ(a,jn.x,jn.y,jn.z),Is.multiplyMatrices(io,o.parent.matrixWorld),jn.setFromMatrixPosition(Is),i.setXYZ(a+1,jn.x,jn.y,jn.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function Ah(r){const e=[];r&&r.isBone&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,Ah(r.children[t]));return e}class I_ extends el{constructor(e=10,t=10,n=4473924,i=8947848){n=new Le(n),i=new Le(i);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,p=0,g=-o;d<=t;d++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const v=d===s?n:i;v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3}const u=new ut;u.setAttribute("position",new St(l,3)),u.setAttribute("color",new St(c,3));const h=new Yr({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}}const D_=new Float32Array(1);new Int32Array(D_.buffer);en.create=function(r,e){return console.log("THREE.Curve.create() has been deprecated"),r.prototype=Object.create(en.prototype),r.prototype.constructor=r,r.prototype.getPoint=e,r};To.prototype.fromPoints=function(r){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(r)};I_.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};P_.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};ai.prototype.extractUrlBase=function(r){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),c_.extractUrlBase(r)};ai.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};un.prototype.center=function(r){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(r)};un.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};un.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};un.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};un.prototype.size=function(r){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(r)};rr.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};ca.prototype.setFromMatrix=function(r){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(r)};At.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};At.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};At.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};At.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};At.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};At.prototype.getInverse=function(r){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};De.prototype.extractPosition=function(r){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(r)};De.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};De.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new R().setFromMatrixColumn(this,3)};De.prototype.setRotationFromQuaternion=function(r){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(r)};De.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};De.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};De.prototype.multiplyVector4=function(r){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};De.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};De.prototype.rotateAxis=function(r){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),r.transformDirection(this)};De.prototype.crossVector=function(r){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};De.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};De.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};De.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};De.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};De.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};De.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};De.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};De.prototype.makeFrustum=function(r,e,t,n,i,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(r,e,n,t,i,s)};De.prototype.getInverse=function(r){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};Fn.prototype.isIntersectionLine=function(r){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(r)};Vt.prototype.multiplyVector3=function(r){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),r.applyQuaternion(this)};Vt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};sr.prototype.isIntersectionBox=function(r){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};sr.prototype.isIntersectionPlane=function(r){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(r)};sr.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};xt.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};xt.prototype.barycoordFromPoint=function(r,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(r,e)};xt.prototype.midpoint=function(r){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(r)};xt.prototypenormal=function(r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(r)};xt.prototype.plane=function(r){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(r)};xt.barycoordFromPoint=function(r,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),xt.getBarycoord(r,e,t,n,i)};xt.normal=function(r,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),xt.getNormal(r,e,t,n)};Zr.prototype.extractAllPoints=function(r){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(r)};Zr.prototype.extrude=function(r){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new lr(this,r)};Zr.prototype.makeGeometry=function(r){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new sl(this,r)};le.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};le.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};le.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};R.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};R.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};R.prototype.getPositionFromMatrix=function(r){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(r)};R.prototype.getScaleFromMatrix=function(r){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(r)};R.prototype.getColumnFromMatrix=function(r,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,r)};R.prototype.applyProjection=function(r){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(r)};R.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};R.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};R.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};rt.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};rt.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};et.prototype.getChildByName=function(r){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(r)};et.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};et.prototype.translate=function(r,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,r)};et.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};et.prototype.applyMatrix=function(r){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(et.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(r){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=r}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Bt.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(Bt.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),up},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});lh.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};zt.prototype.setLens=function(r,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(r)};Object.defineProperties(Mn.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(r){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=r}},shadowCameraLeft:{set:function(r){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=r}},shadowCameraRight:{set:function(r){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=r}},shadowCameraTop:{set:function(r){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=r}},shadowCameraBottom:{set:function(r){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=r}},shadowCameraNear:{set:function(r){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=r}},shadowCameraFar:{set:function(r){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=r}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(r){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=r}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(r){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=r}},shadowMapHeight:{set:function(r){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=r}}});Object.defineProperties(_t.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Ys},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Ys)}}});_t.prototype.setDynamic=function(r){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?Ys:Br),this};_t.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},_t.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};ut.prototype.addIndex=function(r){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(r)};ut.prototype.addAttribute=function(r,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(r,new _t(arguments[1],arguments[2]))):r==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(r,e)};ut.prototype.addDrawCall=function(r,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(r,e)};ut.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};ut.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};ut.prototype.removeAttribute=function(r){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(r)};ut.prototype.applyMatrix=function(r){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(ut.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Xr.prototype.setDynamic=function(r){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?Ys:Br),this};Xr.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};lr.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};lr.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};lr.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Qo.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(Dt.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new Le}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(r){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===Du}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(r){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=r}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(kn.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(r){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=r}}});tt.prototype.clearTarget=function(r,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(r),this.clear(e,t,n)};tt.prototype.animate=function(r){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(r)};tt.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};tt.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};tt.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};tt.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};tt.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};tt.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};tt.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};tt.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};tt.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};tt.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};tt.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};tt.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};tt.prototype.enableScissorTest=function(r){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(r)};tt.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};tt.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};tt.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};tt.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};tt.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};tt.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};tt.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};tt.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};tt.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};tt.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(tt.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=r}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=r}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(r){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=r===!0?tr:cn}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});Object.defineProperties(rh.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Kt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=r}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=r}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=r}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=r}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(r){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=r}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(r){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=r}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(r){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=r}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(r){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=r}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(r){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=r}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(r){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=r}}});v_.prototype.load=function(r){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new f_().load(r,function(n){e.setBuffer(n)}),this};Xo.prototype.updateCubeMap=function(r,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(r,e)};Xo.prototype.clear=function(r,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(r,e,t,n)};ir.crossOrigin=void 0;ir.loadTexture=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new Mh;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};ir.loadTextureCube=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new n_;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};ir.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};ir.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vo);class F_{container;scene;camera;renderer;constructor(e){this.container=e,this.scene=new Qo}get dimensions(){let e=window.innerWidth,t=this.container.getBoundingClientRect().height,n=e/t;return{width:e,height:t,aspect:n}}setup(){const e=180*(2*Math.atan(this.dimensions.height/2/1e3))/Math.PI;this.camera=new zt(e,this.dimensions.aspect,1,1e3),this.camera.position.set(0,0,1e3),this.renderer=new tt({antialias:!0,alpha:!0}),this.renderer.setSize(this.dimensions.width,this.dimensions.height),this.renderer.setPixelRatio(window.devicePixelRatio),this.container.appendChild(this.renderer.domElement),window.addEventListener("resize",this.windowResize.bind(this),!1),this.render()}windowResize(){this.camera.aspect=this.dimensions.aspect,this.camera.fov=180*(2*Math.atan(this.dimensions.height/2/1e3))/Math.PI,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.dimensions.width,this.dimensions.height)}render(){this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.render.bind(this))}}class N_{element;dimensionsNode;scene;offset;sizes;material;geometry;mesh;activeFragmentShader;uniforms;shaders;constructor(e,t,n,i,s){this.element=e,this.scene=t,this.shaders=n,this.uniforms=s,this.dimensionsNode=i,this.offset=new le(0,0),this.sizes=new le(0,0),this.createMesh()}setDimensions(){const{width:e,height:t,left:n}=this.dimensionsNode.getBoundingClientRect();this.sizes.set(e,t),this.offset.set(n-window.innerWidth/2+e/2,0)}createMesh(){this.setDimensions(),this.geometry=new ua(1,1,4,6);const{width:e,height:t}=this.element.getBoundingClientRect();this.uniforms={uTexture:{value:new Mh().load(this.element.src)},uMeshSize:{value:new le(this.sizes.x,this.sizes.y)},uImgSize:{value:new le(e,t)},...this.uniforms},this.activeFragmentShader=this.loadFragmentShader,this.mesh=new Bt(this.geometry,new kn({uniforms:this.uniforms,vertexShader:this.shaders.vertex,fragmentShader:this.activeFragmentShader,transparent:!0})),this.mesh.position.set(this.offset.x,this.offset.y,0),this.mesh.scale.set(this.sizes.x,this.sizes.y,1),this.scene.add(this.mesh)}render(){this.setDimensions(),this.checkShader(),this.mesh.position.set(this.offset.x,this.offset.y,0),this.mesh.scale.set(this.sizes.x,this.sizes.y,1);const{width:e,height:t}=this.element.getBoundingClientRect();this.uniforms.uImgSize.value.set(e,t),this.uniforms.uMeshSize.value.set(this.sizes.x,this.sizes.y)}checkShader(){this.loadFragmentShader!==this.activeFragmentShader&&(this.activeFragmentShader=this.loadFragmentShader,this.mesh.material=new kn({uniforms:this.uniforms,vertexShader:this.shaders.vertex,fragmentShader:this.activeFragmentShader,transparent:!0}))}get loadFragmentShader(){return this.sizes.x/this.sizes.y<1?this.shaders.fragment.horizontal:this.shaders.fragment.vertical}}const z_=`

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
`,k_=`

	uniform sampler2D uTexture;
	uniform vec2 uOffset;
	uniform float uTime;
	varying vec2 vUv;
	varying float vWave;

	#define M_PI 3.1415926535897932384626433832795

	${z_}

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
		`}return{horizontal:t(r),vertical:t(e)}}class B_ extends N_{speed;clock;constructor(e,t){let n={vertex:k_,fragment:{vertical:Jc().vertical,horizontal:Jc().horizontal}},i={uTime:{value:0},uOffset:{value:new le(0,0)},uAlpha:{value:.7}};super(e,t,n,e.parentElement,i),this.clock=new g_,Co.subscribe(s=>{this.speed=s})}createMesh(){super.createMesh(),this.element.parentElement.style.visibility="hidden"}render(){super.render(),this.uniforms.uOffset.value.set(this.speed*-3e-4,Math.abs(this.speed*5e-5)),this.uniforms.uTime.value=this.clock.getElapsedTime()*.8}}class O_ extends F_{meshItems;images;constructor(e,t){super(e),this.images=t,this.meshItems=[],this.setup()}setup(){this.images.forEach(e=>{let t=new B_(e,this.scene);this.meshItems.push(t)}),super.setup()}render(){for(let e=0;e<this.meshItems.length;e++)this.meshItems[e].render();super.render()}}function U_(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var V_=4,H_=.001,G_=1e-7,W_=10,Er=11,Ds=1/(Er-1),q_=typeof Float32Array=="function";function Ch(r,e){return 1-3*e+3*r}function Lh(r,e){return 3*e-6*r}function Rh(r){return 3*r}function Qs(r,e,t){return((Ch(e,t)*r+Lh(e,t))*r+Rh(e))*r}function Ph(r,e,t){return 3*Ch(e,t)*r*r+2*Lh(e,t)*r+Rh(e)}function j_(r,e,t,n,i){var s,a,o=0;do a=e+(t-e)/2,s=Qs(a,n,i)-r,s>0?t=a:e=a;while(Math.abs(s)>G_&&++o<W_);return a}function X_(r,e,t,n){for(var i=0;i<V_;++i){var s=Ph(e,t,n);if(s===0)return e;var a=Qs(e,t,n)-r;e-=a/s}return e}function Y_(r){return r}var Z_=function(e,t,n,i){if(!(0<=e&&e<=1&&0<=n&&n<=1))throw new Error("bezier x values must be in [0, 1] range");if(e===t&&n===i)return Y_;for(var s=q_?new Float32Array(Er):new Array(Er),a=0;a<Er;++a)s[a]=Qs(a*Ds,e,n);function o(l){for(var c=0,u=1,h=Er-1;u!==h&&s[u]<=l;++u)c+=Ds;--u;var d=(l-s[u])/(s[u+1]-s[u]),p=c+d*Ds,g=Ph(p,e,n);return g>=H_?X_(l,p,e,n):g===0?p:j_(l,c,c+Ds,e,n)}return function(c){return c===0?0:c===1?1:Qs(o(c),t,i)}};const ga=U_(Z_);function $t(r,e){e=e===void 0?{}:e,e.delay||(e.delay=35),e.initDelay||(e.initDelay=0),e.duration||(e.duration=600),e.breakWord===void 0&&(e.breakWord=!0);let t=r.innerHTML,n=Ih(r,{breakWord:e.breakWord});n.forEach(a=>{a.childNodes.forEach(o=>{o.style.transform="translateX(150%)"}),a.style.transform="translateX(80%)",a.style.display="inline-flex",a.style.overflowY="visible",a.style.overflowX="clip"});let i=[];return n.forEach(a=>{const o=a.childNodes;i=[...i,a,...o]}),e.promise!==void 0&&e.promise.then(()=>{s()}),{delay:e.initDelay,duration:e.duration,tick:a=>{let o=ga(.2,.58,.43,1)(a);n.forEach(l=>{l.childNodes.forEach(c=>{c.style.transform=`translate3d(${(150+-o*150).toFixed(2)}%, 0px, 0px)`}),l.style.transform=`translate3d(${(80+-o*80).toFixed(2)}%, 0px, 0px)`}),o>=1&&(r.innerHTML=t)},anime:s};function s(a){a===void 0&&(a={}),Je({targets:i,translateX:"0%",easing:a.easing?a.easing:"cubicBezier(.2, .58, .43, 1)",duration:e.duration,delay:Je.stagger(e.delay,{start:e.initDelay}),complete:()=>{r.innerHTML=t,a&&a.onComplete&&a.onComplete()}})}}function J_(r,e){e=e===void 0?{}:e,e.delay||(e.delay=35),e.initDelay||(e.initDelay=0),e.duration||(e.duration=600),e.breakWord===void 0&&(e.breakWord=!0);let t=r.innerHTML,n=Ih(r,{breakWord:e.breakWord});n.forEach(s=>{s.style.display="inline-flex",s.style.overflow="hidden"});let i=[];return n.forEach(s=>{const a=s.childNodes;i=[...i,s,...a]}),{delay:e.initDelay,duration:e.duration,tick:s=>{let a=ga(.32,.24,.76,.26)(s);n.forEach(o=>{o.childNodes.forEach(l=>{l.style.transform=`translate3d(${(-150+a*150).toFixed(2)}%, 0px, 0px)`}),o.style.transform=`translate3d(${(-80+a*80).toFixed(2)}%, 0px, 0px)`}),a>=1&&(r.innerHTML=t)},anime:s=>{Je({targets:i,translateX:"-150%",easing:s||"cubicBezier(.2, .58, .43, 1)",duration:e.duration,delay:Je.stagger(e.delay,{start:e.initDelay}),complete:()=>{r.innerHTML=t}})}}}function Pt(r,e){e=e===void 0?{}:e,e.delay||(e.delay=20),e.duration||(e.duration=700),e.reverse||(e.reverse=!1);let t=n();return e.promise!==void 0&&e.promise.then(()=>{i()}),{delay:e.delay,duration:e.duration,tick:s=>{let a=ga(.58,.14,.06,.97)(s);e.reverse?(t.style.transform=`translate3d(${(100+-a*100).toFixed(2)}%, 0px, 0px)`,r.style.transform=`translate3d(${(-100+a*100).toFixed(2)}%, 0px, 0px)`):(t.style.transform=`translate3d(${(-100+a*100).toFixed(2)}%, 0px, 0px)`,r.style.transform=`translate3d(${(100+-a*100).toFixed(2)}%, 0px, 0px)`)},anime:i};function n(){let s=document.createElement("div"),a=r.parentNode,o=Array.from(a.children).indexOf(r);return e=e===void 0?{}:e,s.classList.add("a-mask"),r.classList.add("a-content"),s.insertBefore(r,s.children[0]),s.style.display="inline-block",s.style.overflow="hidden",e.maskStyles&&e.maskStyles.forEach(l=>{s.style[l.property]=l.value}),a.insertBefore(s,a.children[o]),e.reverse?(s.style.transform="translateX(-100%)",r.style.transform="translateX(100%)"):(s.style.transform="translateX(100%)",r.style.transform="translateX(-100%)"),s}function i(s){Je({targets:[t,r],translateX:"0%",easing:s||"cubicBezier(.58,.14,.06,.97)",duration:e.duration,delay:e.delay})}}function ro(r,e){return e=e===void 0?{}:e,e.delay||(e.delay=0),e.duration||(e.duration=400),{delay:e.delay,duration:e.duration,tick:t=>{let n=ga(.32,.24,.76,.26)(t);r.parentElement?.classList.contains("a-mask")&&(r.parentElement.style.transform=`translate3d(${(-100+n*100).toFixed(2)}%, 0px, 0px)`),r.style.transform=`translate3d(${(100+-n*100).toFixed(2)}%, 0px, 0px)`}}}function $_(r,e){e!==void 0&&(e.delay||(e.delay=0),r.style.transition="none",r.style.marginRight="60%",e.promise.then(()=>{Je({targets:r,marginRight:"0%",easing:"easeOutQuint",duration:1400,delay:e.delay,complete:()=>{r.style.marginRight="",r.style.transition=""}})}))}function Q_(r,e){e!==void 0&&(e.delay||(e.delay=0),r.style.transition="none",r.style.transform="translateX(100%)",e.promise.then(()=>{Je({targets:r,translateX:"0%",easing:"easeOutQuint",duration:1600,delay:e.delay,update:t=>{const n=1-Bd(t.progress/100);Co.set(n*2500)},complete:()=>{r.style.transform="",r.style.transition="",e.onComplete&&e.onComplete()}})}))}function Ih(r,e){let t=r.querySelectorAll(".a-text-mask");return t.length<1&&(r.innerHTML=n(r.innerHTML,'<div class="a-text-mask"><div class="a-text-block">',"</div></div>"),t=r.querySelectorAll(".a-text-mask")),e.breakWord?r.querySelectorAll(".a-word").forEach(s=>{s.style.display="inline-block",s.style.whiteSpace="nowrap"}):r.querySelectorAll(".a-text-mask").forEach(s=>{s.style.whiteSpace="no-wrap"}),t;function n(i,s,a){let o="",l=!1,c=!1;return[...i].forEach((u,h)=>{u==="<"&&(l=!0,c&&(c=!1,o+="</div>")),i[h-1]==">"&&u!=="<"&&(l=!1,c||(c=!0,o+='<div class="a-word">')),l?o+=u:((u===" "||i[h-1]===" "||h===0||h===i.length)&&(c=!c,o+=c?'<div class="a-word">':'</div><span class="a-spacer a-text-block"> </span>'),u!==" "&&(o+=s+u+a))}),o}}function $c(r,e,t){const n=r.slice();return n[29]=e[t],n}function Qc(r,e,t){const n=r.slice();return n[32]=e[t],n[33]=e,n[34]=t,n}function K_(r){return{c:Z,l:Z,m:Z,p:Z,d:Z}}function ey(r){let e,t,n,i=r[34],s,a;const o=()=>r[16](e,i),l=()=>r[16](null,i);return{c(){e=J("img"),this.h()},l(c){e=$(c,"IMG",{src:!0,draggable:!0,alt:!0,class:!0}),this.h()},h(){yi(e.src,t=r[36])||V(e,"src",t),V(e,"draggable","false"),V(e,"alt",n=r[32].title+" Background"),V(e,"class","svelte-1ldrcfx")},m(c,u){ke(c,e,u),o(),s||(a=Rt(e,"dragstart",so(r[15])),s=!0)},p(c,u){r=c,u[0]&1&&!yi(e.src,t=r[36])&&V(e,"src",t),u[0]&1&&n!==(n=r[32].title+" Background")&&V(e,"alt",n),i!==r[34]&&(l(),i=r[34],o())},d(c){c&&Y(e),l(),s=!1,a()}}}function ty(r){return{c:Z,l:Z,m:Z,p:Z,d:Z}}function ny(r){return{c:Z,l:Z,m:Z,p:Z,i:Z,o:Z,d:Z}}function iy(r){let e,t,n=(r[34].toString().length>1?r[34]+1:"0"+(r[34]+1).toString())+"",i,s,a,o,l,c,u=r[32].title+"",h,d,p,g,v="view",x,f,m;function b(){return r[17](r[34])}return{c(){e=J("div"),t=J("p"),i=on(n),a=Re(),o=J("div"),l=J("h1"),c=J("span"),h=on(u),p=Re(),g=J("button"),g.textContent=v,this.h()},l(_){e=$(_,"DIV",{class:!0});var y=_e(e);t=$(y,"P",{class:!0});var A=_e(t);i=ln(A,n),A.forEach(Y),y.forEach(Y),a=Pe(_),o=$(_,"DIV",{class:!0});var C=_e(o);l=$(C,"H1",{class:!0});var D=_e(l);c=$(D,"SPAN",{class:!0});var O=_e(c);h=ln(O,u),O.forEach(Y),D.forEach(Y),p=Pe(C),g=$(C,"BUTTON",{class:!0,"data-svelte-h":!0}),Ye(g)!=="svelte-6jg3a6"&&(g.textContent=v),C.forEach(Y),this.h()},h(){V(t,"class","item-index svelte-1ldrcfx"),V(e,"class","text-top-wrapper svelte-1ldrcfx"),it(e,"hidden",r[8]>=0||r[1]),V(c,"class","svelte-1ldrcfx"),V(l,"class","item-title svelte-1ldrcfx"),V(g,"class","button item-link interactive svelte-1ldrcfx"),V(o,"class","text-wrapper svelte-1ldrcfx"),it(o,"hidden",r[8]>=0||r[1])},m(_,y){ke(_,e,y),U(e,t),U(t,i),ke(_,a,y),ke(_,o,y),U(o,l),U(l,c),U(c,h),U(o,p),U(o,g),f||(m=Rt(g,"click",b),f=!0)},p(_,y){r=_,y[0]&258&&it(e,"hidden",r[8]>=0||r[1]),y[0]&1&&u!==(u=r[32].title+"")&&Yi(h,u),y[0]&258&&it(o,"hidden",r[8]>=0||r[1])},i(_){_&&(s||ot(()=>{s=lt(t,Pt,{delay:r[34]*30+100,reverse:!0}),s.start()})),_&&(d||ot(()=>{d=lt(c,Pt,{duration:900,delay:r[34]*30+300,reverse:!0}),d.start()})),_&&(x||ot(()=>{x=lt(g,Pt,{duration:900,delay:r[34]*30+450,reverse:!0}),x.start()}))},o:Z,d(_){_&&(Y(e),Y(a),Y(o)),f=!1,m()}}}function ry(r){return{c:Z,l:Z,m:Z,p:Z,i:Z,o:Z,d:Z}}function Kc(r){let e,t,n,i,s,a=r[34],o,l,c,u={ctx:r,current:null,token:null,hasCatch:!1,pending:ty,then:ey,catch:K_,value:36};yn(i=Nr(`assets/imgs/work-back/${r[32].id}/cover.jpg`),u);let h={ctx:r,current:null,token:null,hasCatch:!1,pending:ry,then:iy,catch:ny,value:35};yn(r[11],h);const d=()=>r[18](t,a),p=()=>r[18](null,a);return{c(){e=J("li"),t=J("div"),n=J("div"),u.block.c(),s=Re(),h.block.c(),o=Re(),this.h()},l(g){e=$(g,"LI",{class:!0});var v=_e(e);t=$(v,"DIV",{class:!0});var x=_e(t);n=$(x,"DIV",{class:!0});var f=_e(n);u.block.l(f),f.forEach(Y),s=Pe(x),h.block.l(x),x.forEach(Y),o=Pe(v),v.forEach(Y),this.h()},h(){V(n,"class","img-wrapper svelte-1ldrcfx"),V(t,"class","list-item clickable passive svelte-1ldrcfx"),it(t,"ambient",r[8]!==r[34]&&r[8]>=0),it(t,"active",r[8]===r[34]),V(e,"class","svelte-1ldrcfx")},m(g,v){ke(g,e,v),U(e,t),U(t,n),u.block.m(n,u.anchor=null),u.mount=()=>n,u.anchor=null,U(t,s),h.block.m(t,h.anchor=null),h.mount=()=>t,h.anchor=null,d(),U(e,o),l||(c=Qt($_.call(null,e,{promise:r[11],delay:r[34]*30})),l=!0)},p(g,v){r=g,u.ctx=r,v[0]&1&&i!==(i=Nr(`assets/imgs/work-back/${r[32].id}/cover.jpg`))&&yn(i,u)||Fr(u,r,v),Fr(h,r,v),a!==r[34]&&(p(),a=r[34],d()),v[0]&256&&it(t,"ambient",r[8]!==r[34]&&r[8]>=0),v[0]&256&&it(t,"active",r[8]===r[34])},d(g){g&&Y(e),u.block.d(),u.token=null,u=null,h.block.d(),h.token=null,h=null,p(),l=!1,c()}}}function eu(r){let e,t,n,i,s,a,o,l,c,u,h,d,p,g,v=r[0][r[8]].details.summary+"",x,f,m,b,_,y,A,C,D=r[0][r[8]].title+"",O,k,P,M,w,N="×",z,L,F,K,ae;function G(ce,j){return ce[8]<9?ay:sy}let W=G(r),Q=W(r),ee=Os(r[12]),re=[];for(let ce=0;ce<ee.length;ce+=1)re[ce]=tu($c(r,ee,ce));return{c(){e=J("div"),t=J("div"),n=J("div"),i=J("div"),s=J("div"),a=J("div"),Q.c(),c=Re(),u=J("span"),d=Re(),p=J("h6"),g=J("div"),x=on(v),b=Re(),_=J("div");for(let ce=0;ce<re.length;ce+=1)re[ce].c();y=Re(),A=J("div"),C=J("h1"),O=on(D),P=Re(),M=J("button"),w=J("div"),w.textContent=N,this.h()},l(ce){e=$(ce,"DIV",{class:!0});var j=_e(e);t=$(j,"DIV",{class:!0});var de=_e(t);n=$(de,"DIV",{class:!0});var we=_e(n);i=$(we,"DIV",{class:!0});var ve=_e(i);s=$(ve,"DIV",{class:!0});var Se=_e(s);a=$(Se,"DIV",{class:!0});var He=_e(a);Q.l(He),He.forEach(Y),Se.forEach(Y),c=Pe(ve),u=$(ve,"SPAN",{class:!0}),_e(u).forEach(Y),d=Pe(ve),p=$(ve,"H6",{class:!0});var X=_e(p);g=$(X,"DIV",{class:!0});var ie=_e(g);x=ln(ie,v),ie.forEach(Y),X.forEach(Y),ve.forEach(Y),we.forEach(Y),b=Pe(de),_=$(de,"DIV",{class:!0});var ue=_e(_);for(let Ae=0;Ae<re.length;Ae+=1)re[Ae].l(ue);ue.forEach(Y),y=Pe(de),A=$(de,"DIV",{class:!0});var Me=_e(A);C=$(Me,"H1",{class:!0});var pe=_e(C);O=ln(pe,D),pe.forEach(Y),P=Pe(Me),M=$(Me,"BUTTON",{class:!0});var Ie=_e(M);w=$(Ie,"DIV",{class:!0,"data-svelte-h":!0}),Ye(w)!=="svelte-bj613r"&&(w.textContent=N),Ie.forEach(Y),Me.forEach(Y),de.forEach(Y),j.forEach(Y),this.h()},h(){V(a,"class","svelte-1ldrcfx"),V(s,"class","index svelte-1ldrcfx"),V(u,"class","line svelte-1ldrcfx"),V(g,"class","svelte-1ldrcfx"),V(p,"class","caption svelte-1ldrcfx"),V(i,"class","wrapper svelte-1ldrcfx"),V(n,"class","top-align svelte-1ldrcfx"),V(_,"class","image-grid svelte-1ldrcfx"),V(C,"class","title svelte-1ldrcfx"),it(C,"breakTitleWords",r[7]),V(w,"class","close-button svelte-1ldrcfx"),V(M,"class","close-button-wrapper interactive svelte-1ldrcfx"),V(A,"class","mid-align svelte-1ldrcfx"),V(t,"class","wrapper svelte-1ldrcfx"),V(e,"class","details-container svelte-1ldrcfx")},m(ce,j){ke(ce,e,j),U(e,t),U(t,n),U(n,i),U(i,s),U(s,a),Q.m(a,null),U(i,c),U(i,u),U(i,d),U(i,p),U(p,g),U(g,x),U(t,b),U(t,_);for(let de=0;de<re.length;de+=1)re[de]&&re[de].m(_,null);U(t,y),U(t,A),U(A,C),U(C,O),U(A,P),U(A,M),U(M,w),F=!0,K||(ae=[Qt(r[14].call(null,C)),Rt(C,"introend",r[20]),Rt(C,"outrostart",r[21]),Rt(M,"click",r[22])],K=!0)},p(ce,j){if(W===(W=G(ce))&&Q?Q.p(ce,j):(Q.d(1),Q=W(ce),Q&&(Q.c(),Q.m(a,null))),(!F||j[0]&257)&&v!==(v=ce[0][ce[8]].details.summary+"")&&Yi(x,v),j[0]&4096){ee=Os(ce[12]);let de;for(de=0;de<ee.length;de+=1){const we=$c(ce,ee,de);re[de]?re[de].p(we,j):(re[de]=tu(we),re[de].c(),re[de].m(_,null))}for(;de<re.length;de+=1)re[de].d(1);re.length=ee.length}(!F||j[0]&257)&&D!==(D=ce[0][ce[8]].title+"")&&Yi(O,D),(!F||j[0]&128)&&it(C,"breakTitleWords",ce[7])},i(ce){F||(ce&&ot(()=>{F&&(l&&l.end(1),o=lt(a,Pt,{reverse:!0}),o.start())}),ce&&ot(()=>{F&&(h||(h=fl(u,Tl,{},!0)),h.run(1))}),ce&&ot(()=>{F&&(m&&m.end(1),f=lt(g,Pt,{reverse:!0}),f.start())}),k&&k.end(1),ce&&ot(()=>{F&&(L&&L.end(1),z=lt(w,Pt,{reverse:!0}),z.start())}),F=!0)},o(ce){o&&o.invalidate(),ce&&(l=es(a,ro,{})),ce&&(h||(h=fl(u,Tl,{},!1)),h.run(0)),f&&f.invalidate(),ce&&(m=es(g,ro,{})),ce&&(k=es(C,J_,{})),z&&z.invalidate(),ce&&(L=es(w,ro,{})),F=!1},d(ce){ce&&Y(e),Q.d(),ce&&l&&l.end(),ce&&h&&h.end(),ce&&m&&m.end(),au(re,ce),ce&&k&&k.end(),ce&&L&&L.end(),K=!1,Gr(ae)}}}function sy(r){let e=r[8]+1+"",t;return{c(){t=on(e)},l(n){t=ln(n,e)},m(n,i){ke(n,t,i)},p(n,i){i[0]&256&&e!==(e=n[8]+1+"")&&Yi(t,e)},d(n){n&&Y(t)}}}function ay(r){let e="0"+(r[8]+1),t;return{c(){t=on(e)},l(n){t=ln(n,e)},m(n,i){ke(n,t,i)},p(n,i){i[0]&256&&e!==(e="0"+(n[8]+1))&&Yi(t,e)},d(n){n&&Y(t)}}}function tu(r){let e,t;return{c(){e=J("img"),this.h()},l(n){e=$(n,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){yi(e.src,t=`data/${r[29]}`)||V(e,"src",t),V(e,"alt","Image"),V(e,"class","grid-image svelte-1ldrcfx")},m(n,i){ke(n,e,i)},p:Z,d(n){n&&Y(e)}}}function oy(r){let e,t,n,i,s,a,o,l,c=Os(r[0]),u=[];for(let d=0;d<c.length;d+=1)u[d]=Kc(Qc(r,c,d));let h=r[8]!==-1&&eu(r);return{c(){e=J("div"),t=J("div"),n=J("div"),i=J("ul");for(let d=0;d<u.length;d+=1)u[d].c();s=Re(),h&&h.c(),this.h()},l(d){e=$(d,"DIV",{id:!0,class:!0});var p=_e(e);t=$(p,"DIV",{class:!0,role:!0,tabindex:!0});var g=_e(t);n=$(g,"DIV",{class:!0});var v=_e(n);i=$(v,"UL",{class:!0});var x=_e(i);for(let f=0;f<u.length;f+=1)u[f].l(x);x.forEach(Y),v.forEach(Y),s=Pe(g),h&&h.l(g),g.forEach(Y),p.forEach(Y),this.h()},h(){V(i,"class","work-list svelte-1ldrcfx"),it(i,"hold",r[1]),V(n,"class","svelte-1ldrcfx"),it(n,"mobile",r[10]),V(t,"class","content-wrapper svelte-1ldrcfx"),V(t,"role","listbox"),V(t,"tabindex","0"),it(t,"disabled",r[8]>=0),V(e,"id","content-container"),V(e,"class","work-click-area svelte-1ldrcfx")},m(d,p){ke(d,e,p),U(e,t),U(t,n),U(n,i);for(let g=0;g<u.length;g+=1)u[g]&&u[g].m(i,null);r[19](i),U(t,s),h&&h.m(t,null),r[23](t),r[25](e),o||(l=[Rt(t,"mousedown",so(function(){dr(r[9].onHold)&&r[9].onHold.apply(this,arguments)})),Rt(t,"mouseup",function(){dr(r[9].onRelease)&&r[9].onRelease.apply(this,arguments)}),Rt(t,"mouseleave",function(){dr(r[9].onRelease)&&r[9].onRelease.apply(this,arguments)}),Rt(t,"mousemove",so(function(){dr(r[9].onMouseMove)&&r[9].onMouseMove.apply(this,arguments)})),Qt(a=Q_.call(null,t,{promise:r[11],onComplete:r[24]}))],o=!0)},p(d,p){if(r=d,p[0]&10595){c=Os(r[0]);let g;for(g=0;g<c.length;g+=1){const v=Qc(r,c,g);u[g]?u[g].p(v,p):(u[g]=Kc(v),u[g].c(),u[g].m(i,null))}for(;g<u.length;g+=1)u[g].d(1);u.length=c.length}p[0]&2&&it(i,"hold",r[1]),p[0]&1024&&it(n,"mobile",r[10]),r[8]!==-1?h?(h.p(r,p),p[0]&256&&Mt(h,1)):(h=eu(r),h.c(),Mt(h,1),h.m(t,null)):h&&(Ks(),Wt(h,1,1,()=>{h=null}),ea()),a&&dr(a.update)&&p[0]&512&&a.update.call(null,{promise:r[11],onComplete:r[24]}),p[0]&256&&it(t,"disabled",r[8]>=0)},i(d){Mt(h)},o(d){Wt(h)},d(d){d&&Y(e),au(u,d),r[19](null),h&&h.d(),r[23](null),r[25](null),o=!1,Gr(l)}}}function ly(r,e,t){let n,i;Xt(r,uo,L=>t(27,n=L)),Xt(r,lo,L=>t(10,i=L));let s=[];Ro.subscribe(L=>{L!==void 0&&t(0,s=L)});let a=!1;zs.subscribe(L=>t(1,a=L));let o,l,c,u=[],h=[],d=!1,p=-1,g;const v=new Promise(L=>{g=L}),x=["1.jpg","2.jpg","3.jpg"];class f{currentMouseX=0;initialMouseX=0;currentPosition=0;targetPosition=0;initialPosition=0;offsetSpeed=5e3;lerpSpeed=.1;onHold=F=>{if(!(p>=0||a||F.target.classList.contains("button"))&&(this.initialMouseX=F.clientX,this.currentMouseX=F.clientX,zs.set(!0),a)){let K=window.getComputedStyle(c),ae=new WebKitCSSMatrix(K.transform);this.initialPosition=ae.m41}};onRelease(){zs.set(!1)}onMouseMove=F=>{if(!a)return;this.currentMouseX=F.clientX;let K=(this.currentMouseX-this.initialMouseX)*-1;this.targetPosition=Math.round((this.initialPosition-this.offsetSpeed*(K/document.body.clientWidth))*100)/100};animate=()=>{if(p<0){let F=c.offsetWidth-document.body.clientWidth;F<0&&(F=c.offsetWidth),this.targetPosition>0&&(this.targetPosition=0),this.targetPosition<=F*-1&&(this.targetPosition=-F)}this.currentPosition=this.lerp(this.currentPosition,this.targetPosition,this.lerpSpeed),Co.set(Math.round((this.currentPosition-this.targetPosition)*100)/100),t(4,c.style.transform=`translate3d(${Math.round(this.currentPosition*100)/100}px, 0px, 0px)`,c),requestAnimationFrame(()=>this.animate())};lerp(F,K,ae){return F*(1-ae)+K*ae}}const m=new f;Ki(async()=>{Gs(o,()=>g(!0));const L=await Sl();Dr(lo,i=L.isMobile,i),await er,Dr(uo,n=o,n),t(4,c.style.transform="translate3d(0px, 0px, 0px)",c),L.tier>=2&&!L.isMobile&&L.fps>=30&&new O_(l,u)});function b(L){t(8,p=p==L?-1:L),p>=0&&t(9,m.targetPosition=-(h[L].offsetLeft-window.innerWidth/4+window.innerWidth/10),m)}function _(L){$t(L,{delay:5,breakWord:!1}).anime({onComplete:()=>t(7,d=!0)})}function y(L){Gh.call(this,r,L)}function A(L,F){ht[L?"unshift":"push"](()=>{u[F]=L,t(5,u)})}const C=L=>b(L);function D(L,F){ht[L?"unshift":"push"](()=>{h[F]=L,t(6,h)})}function O(L){ht[L?"unshift":"push"](()=>{c=L,t(4,c)})}const k=()=>setTimeout(()=>t(7,d=!0),100),P=()=>setTimeout(()=>t(7,d=!1),100),M=()=>b(p);function w(L){ht[L?"unshift":"push"](()=>{l=L,t(3,l)})}const N=async()=>{(await Sl()).isMobile||m.animate()};function z(L){ht[L?"unshift":"push"](()=>{o=L,t(2,o)})}return[s,a,o,l,c,u,h,d,p,m,i,v,x,b,_,y,A,C,D,O,k,P,M,w,N,z]}class cy extends ri{constructor(e){super(),si(this,e,ly,oy,Bn,{},null,[-1,-1])}}function uy(r){return{c:Z,l:Z,m:Z,i:Z,o:Z,d:Z}}function hy(r){let e,t,n="Привет! <br/> Меня зовут Евгения",i,s,a='<p class="paragraph svelte-xtjyci">Я специалист в области иконописи.</p>',o,l,c,u="",h,d,p,g,v={ctx:r,current:null,token:null,hasCatch:!1,pending:py,then:fy,catch:dy,value:14};return yn(Nr("assets/imgs/profile-photo.jpg"),v),{c(){e=J("div"),t=J("h1"),t.innerHTML=n,i=Re(),s=J("div"),s.innerHTML=a,l=Re(),c=J("div"),c.innerHTML=u,h=Re(),d=J("div"),v.block.c(),this.h()},l(x){e=$(x,"DIV",{class:!0});var f=_e(e);t=$(f,"H1",{class:!0,"data-svelte-h":!0}),Ye(t)!=="svelte-7rytjj"&&(t.innerHTML=n),i=Pe(f),s=$(f,"DIV",{"data-svelte-h":!0}),Ye(s)!=="svelte-96ay7e"&&(s.innerHTML=a),l=Pe(f),c=$(f,"DIV",{class:!0,"data-svelte-h":!0}),Ye(c)!=="svelte-dr7gig"&&(c.innerHTML=u),f.forEach(Y),h=Pe(x),d=$(x,"DIV",{class:!0});var m=_e(d);v.block.l(m),m.forEach(Y),this.h()},h(){V(t,"class","title svelte-xtjyci"),V(c,"class","social-button-wrapper svelte-xtjyci"),V(e,"class","content-wrapper svelte-xtjyci"),V(d,"class","profile-image svelte-xtjyci")},m(x,f){ke(x,e,f),U(e,t),U(e,i),U(e,s),U(e,l),U(e,c),ke(x,h,f),ke(x,d,f),v.block.m(d,v.anchor=null),v.mount=()=>d,v.anchor=null,p||(g=[Qt(r[4].call(null,t)),Qt(r[5].call(null,d))],p=!0)},p(x,f){r=x},i(x){x&&(o||ot(()=>{o=lt(s,Pt,{duration:1200,reverse:!0,delay:150}),o.start()})),Mt(v.block)},o:Z,d(x){x&&(Y(e),Y(h),Y(d)),v.block.d(),v.token=null,v=null,p=!1,Gr(g)}}}function dy(r){return{c:Z,l:Z,m:Z,i:Z,o:Z,d:Z}}function fy(r){let e,t,n;return{c(){e=J("img"),this.h()},l(i){e=$(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){yi(e.src,t=r[14])||V(e,"src",t),V(e,"alt","Evgenia's Profile"),V(e,"class","profile-pic svelte-xtjyci")},m(i,s){ke(i,e,s)},i(i){i&&(n||ot(()=>{n=lt(e,Pt,{duration:1200,delay:100,reverse:!0,maskStyles:[{property:"width",value:"100%"},{property:"height",value:"100%"}]}),n.start()}))},o:Z,d(i){i&&Y(e)}}}function py(r){return{c:Z,l:Z,m:Z,i:Z,o:Z,d:Z}}function my(r){return{c:Z,l:Z,m:Z,i:Z,o:Z,d:Z}}function gy(r){return{c:Z,l:Z,m:Z,i:Z,o:Z,d:Z}}function vy(r){let e,t,n,i="Направления художественной деятельности",s,a,o,l,c="Иконопись",u,h,d,p="",g,v,x,f,m="Пастель",b,_,y,A="",C,D,O,k,P="Роспись храмов",M,w,N,z="",L,F,K,ae,G="Роспись мебели",W,Q,ee,re="",ce,j,de,we,ve,Se="Награды и номинации",He,X,ie,ue,Me="Лучшая икона 2020",pe,Ie,Ae,Ue="Самый красивый орнамент 2021",Qe;return{c(){e=J("ul"),t=J("li"),n=J("div"),n.textContent=i,a=Re(),o=J("li"),l=J("div"),l.textContent=c,h=Re(),d=J("div"),d.innerHTML=p,v=Re(),x=J("li"),f=J("div"),f.textContent=m,_=Re(),y=J("div"),y.innerHTML=A,D=Re(),O=J("li"),k=J("div"),k.textContent=P,w=Re(),N=J("div"),N.innerHTML=z,F=Re(),K=J("li"),ae=J("div"),ae.textContent=G,Q=Re(),ee=J("div"),ee.innerHTML=re,j=Re(),de=J("ul"),we=J("li"),ve=J("div"),ve.textContent=Se,X=Re(),ie=J("li"),ue=J("div"),ue.textContent=Me,Ie=Re(),Ae=J("div"),Ae.textContent=Ue,this.h()},l(E){e=$(E,"UL",{class:!0});var S=_e(e);t=$(S,"LI",{class:!0});var ne=_e(t);n=$(ne,"DIV",{"data-svelte-h":!0}),Ye(n)!=="svelte-1oei956"&&(n.textContent=i),ne.forEach(Y),a=Pe(S),o=$(S,"LI",{class:!0});var oe=_e(o);l=$(oe,"DIV",{"data-svelte-h":!0}),Ye(l)!=="svelte-1yzagzn"&&(l.textContent=c),h=Pe(oe),d=$(oe,"DIV",{class:!0,"data-svelte-h":!0}),Ye(d)!=="svelte-40l7oh"&&(d.innerHTML=p),oe.forEach(Y),v=Pe(S),x=$(S,"LI",{class:!0});var me=_e(x);f=$(me,"DIV",{"data-svelte-h":!0}),Ye(f)!=="svelte-1373dp1"&&(f.textContent=m),_=Pe(me),y=$(me,"DIV",{class:!0,"data-svelte-h":!0}),Ye(y)!=="svelte-1c6rz7y"&&(y.innerHTML=A),me.forEach(Y),D=Pe(S),O=$(S,"LI",{class:!0});var se=_e(O);k=$(se,"DIV",{"data-svelte-h":!0}),Ye(k)!=="svelte-8xv0me"&&(k.textContent=P),w=Pe(se),N=$(se,"DIV",{class:!0,"data-svelte-h":!0}),Ye(N)!=="svelte-sz101o"&&(N.innerHTML=z),se.forEach(Y),F=Pe(S),K=$(S,"LI",{class:!0});var Fe=_e(K);ae=$(Fe,"DIV",{"data-svelte-h":!0}),Ye(ae)!=="svelte-790zec"&&(ae.textContent=G),Q=Pe(Fe),ee=$(Fe,"DIV",{class:!0,"data-svelte-h":!0}),Ye(ee)!=="svelte-jb1xl5"&&(ee.innerHTML=re),Fe.forEach(Y),S.forEach(Y),j=Pe(E),de=$(E,"UL",{class:!0});var Ee=_e(de);we=$(Ee,"LI",{class:!0});var fe=_e(we);ve=$(fe,"DIV",{"data-svelte-h":!0}),Ye(ve)!=="svelte-1oshtkn"&&(ve.textContent=Se),fe.forEach(Y),X=Pe(Ee),ie=$(Ee,"LI",{class:!0});var I=_e(ie);ue=$(I,"DIV",{"data-svelte-h":!0}),Ye(ue)!=="svelte-w6pa5p"&&(ue.textContent=Me),Ie=Pe(I),Ae=$(I,"DIV",{"data-svelte-h":!0}),Ye(Ae)!=="svelte-mgdkx8"&&(Ae.textContent=Ue),I.forEach(Y),Ee.forEach(Y),this.h()},h(){V(t,"class","list-title svelte-xtjyci"),V(d,"class","flex-item"),V(o,"class","svelte-xtjyci"),V(y,"class","flex-item"),V(x,"class","svelte-xtjyci"),V(N,"class","flex-item"),V(O,"class","svelte-xtjyci"),V(ee,"class","flex-item"),V(K,"class","svelte-xtjyci"),V(e,"class","list first svelte-xtjyci"),V(we,"class","list-title svelte-xtjyci"),V(ie,"class","svelte-xtjyci"),V(de,"class","list svelte-xtjyci")},m(E,S){ke(E,e,S),U(e,t),U(t,n),U(e,a),U(e,o),U(o,l),U(o,h),U(o,d),U(e,v),U(e,x),U(x,f),U(x,_),U(x,y),U(e,D),U(e,O),U(O,k),U(O,w),U(O,N),U(e,F),U(e,K),U(K,ae),U(K,Q),U(K,ee),ke(E,j,S),ke(E,de,S),U(de,we),U(we,ve),U(de,X),U(de,ie),U(ie,ue),U(ie,Ie),U(ie,Ae)},i(E){E&&(s||ot(()=>{s=lt(n,$t,{initDelay:400}),s.start()})),E&&(u||ot(()=>{u=lt(l,$t,{initDelay:550}),u.start()})),E&&(g||ot(()=>{g=lt(d,Pt,{delay:600}),g.start()})),E&&(b||ot(()=>{b=lt(f,$t,{initDelay:650}),b.start()})),E&&(C||ot(()=>{C=lt(y,Pt,{delay:700}),C.start()})),E&&(M||ot(()=>{M=lt(k,$t,{initDelay:750}),M.start()})),E&&(L||ot(()=>{L=lt(N,Pt,{delay:800}),L.start()})),E&&(W||ot(()=>{W=lt(ae,$t,{initDelay:850}),W.start()})),E&&(ce||ot(()=>{ce=lt(ee,Pt,{delay:900}),ce.start()})),E&&(He||ot(()=>{He=lt(ve,$t,{initDelay:400}),He.start()})),E&&(pe||ot(()=>{pe=lt(ue,$t,{initDelay:550}),pe.start()})),E&&(Qe||ot(()=>{Qe=lt(Ae,$t,{initDelay:550}),Qe.start()}))},o:Z,d(E){E&&(Y(e),Y(j),Y(de))}}}function xy(r){return{c:Z,l:Z,m:Z,i:Z,o:Z,d:Z}}function _y(r){let e,t,n,i={ctx:r,current:null,token:null,hasCatch:!1,pending:my,then:hy,catch:uy,value:13};yn(r[2],i);let s={ctx:r,current:null,token:null,hasCatch:!1,pending:xy,then:vy,catch:gy,value:13};return yn(r[3],s),{c(){e=J("div"),i.block.c(),t=Re(),n=J("div"),s.block.c(),this.h()},l(a){e=$(a,"DIV",{id:!0,class:!0});var o=_e(e);i.block.l(o),o.forEach(Y),t=Pe(a),n=$(a,"DIV",{class:!0});var l=_e(n);s.block.l(l),l.forEach(Y),this.h()},h(){V(e,"id","content-container"),V(e,"class","about svelte-xtjyci"),V(n,"class","horizontal-flex svelte-xtjyci")},m(a,o){ke(a,e,o),i.block.m(e,i.anchor=null),i.mount=()=>e,i.anchor=null,r[6](e),ke(a,t,o),ke(a,n,o),s.block.m(n,s.anchor=null),s.mount=()=>n,s.anchor=null,r[7](n)},p(a,[o]){r=a},i(a){Mt(i.block),Mt(s.block)},o:Z,d(a){a&&(Y(e),Y(t),Y(n)),i.block.d(),i.token=null,i=null,r[6](null),s.block.d(),s.token=null,s=null,r[7](null)}}}function yy(r,e,t){let n,i;Xt(r,Hs,x=>t(10,n=x)),Xt(r,ho,x=>t(11,i=x));let s,a,o,l,c=new Promise(x=>l=x),u,h=new Promise(x=>u=x);Ki(async()=>{await er,Dr(ho,i=s,i),n.addOffset({element:o,speedY:.8}),Gs(s,()=>l(!0)),Gs(a,()=>u(!0))});function d(x){$t(x,{delay:15}).anime()}function p(x){n.addOffset({element:x,speedY:.8})}function g(x){ht[x?"unshift":"push"](()=>{s=x,t(0,s)})}function v(x){ht[x?"unshift":"push"](()=>{a=x,t(1,a)})}return[s,a,c,h,d,p,g,v]}class by extends ri{constructor(e){super(),si(this,e,yy,_y,Bn,{})}}const{window:My}=ou;function wy(r){return{c:Z,l:Z,m:Z,p:Z,d:Z}}function Sy(r){let e,t,n,i,s,a,o,l,c,u=r[0],h,d,p,g='<div class="hb svelte-11y6gr6"><span class="svelte-11y6gr6"></span> <span class="svelte-11y6gr6"></span> <span class="svelte-11y6gr6"></span></div>',v,x,f=nu(r);return{c(){e=J("div"),t=J("div"),n=J("button"),i=J("img"),a=Re(),o=J("div"),l=J("div"),c=J("ul"),f.c(),h=Re(),d=J("div"),p=J("button"),p.innerHTML=g,this.h()},l(m){e=$(m,"DIV",{class:!0,style:!0});var b=_e(e);t=$(b,"DIV",{class:!0,style:!0});var _=_e(t);n=$(_,"BUTTON",{class:!0});var y=_e(n);i=$(y,"IMG",{src:!0,class:!0,alt:!0,draggable:!0}),y.forEach(Y),_.forEach(Y),a=Pe(b),o=$(b,"DIV",{class:!0});var A=_e(o);l=$(A,"DIV",{class:!0});var C=_e(l);c=$(C,"UL",{class:!0});var D=_e(c);f.l(D),D.forEach(Y),C.forEach(Y),h=Pe(A),d=$(A,"DIV",{class:!0});var O=_e(d);p=$(O,"BUTTON",{class:!0,"data-svelte-h":!0}),Ye(p)!=="svelte-ddta8z"&&(p.innerHTML=g),O.forEach(Y),A.forEach(Y),b.forEach(Y),this.h()},h(){yi(i.src,s="assets/imgs/logo.svg")||V(i,"src",s),V(i,"class","logo-icon svelte-11y6gr6"),V(i,"alt","Logo"),V(i,"draggable","false"),V(n,"class","interactive clickable svelte-11y6gr6"),V(t,"class","flex-wrapper ico svelte-11y6gr6"),Jn(t,"z-index","21"),V(c,"class","nav-list svelte-11y6gr6"),V(l,"class","wrapper svelte-11y6gr6"),it(l,"mobileMenuActive",r[0]),V(p,"class","interactive hb-button clickable svelte-11y6gr6"),it(p,"mobileMenuActive",r[0]),V(d,"class","mask svelte-11y6gr6"),V(o,"class","flex-wrapper svelte-11y6gr6"),V(e,"class","nav-wrapper svelte-11y6gr6"),Jn(e,"transform","translate(0px)")},m(m,b){ke(m,e,b),U(e,t),U(t,n),U(n,i),U(e,a),U(e,o),U(o,l),U(l,c),f.m(c,null),U(o,h),U(o,d),U(d,p),v||(x=[Qt(r[7].call(null,i,{delay:1e3})),Rt(n,"click",r[10]),Qt(r[7].call(null,p,{delay:1e3})),Rt(p,"click",r[14])],v=!0)},p(m,b){b&1&&Bn(u,u=m[0])?(Ks(),Wt(f,1,1,Z),ea(),f=nu(m),f.c(),Mt(f,1),f.m(c,null)):f.p(m,b),b&1&&it(l,"mobileMenuActive",m[0]),b&1&&it(p,"mobileMenuActive",m[0])},d(m){m&&Y(e),f.d(m),v=!1,Gr(x)}}}function nu(r){let e,t,n="Home",i,s,a,o,l='<p class="svelte-11y6gr6">Мои работы</p>',c,u,h,d,p="Обо мне",g,v,x,f,m="Email",b,_,y,A,C="Telegram",D,O,k;return{c(){e=J("li"),t=J("button"),t.textContent=n,s=Re(),a=J("li"),o=J("button"),o.innerHTML=l,u=Re(),h=J("li"),d=J("button"),d.textContent=p,v=Re(),x=J("li"),f=J("a"),f.textContent=m,_=Re(),y=J("li"),A=J("a"),A.textContent=C,this.h()},l(P){e=$(P,"LI",{class:!0});var M=_e(e);t=$(M,"BUTTON",{class:!0,"data-svelte-h":!0}),Ye(t)!=="svelte-1unzo50"&&(t.textContent=n),M.forEach(Y),s=Pe(P),a=$(P,"LI",{class:!0});var w=_e(a);o=$(w,"BUTTON",{class:!0,"data-svelte-h":!0}),Ye(o)!=="svelte-3t8vtr"&&(o.innerHTML=l),w.forEach(Y),u=Pe(P),h=$(P,"LI",{class:!0});var N=_e(h);d=$(N,"BUTTON",{class:!0,"data-svelte-h":!0}),Ye(d)!=="svelte-1mckxnx"&&(d.textContent=p),N.forEach(Y),v=Pe(P),x=$(P,"LI",{class:!0});var z=_e(x);f=$(z,"A",{href:!0,target:!0,class:!0,"data-svelte-h":!0}),Ye(f)!=="svelte-z6lnfo"&&(f.textContent=m),z.forEach(Y),_=Pe(P),y=$(P,"LI",{class:!0});var L=_e(y);A=$(L,"A",{href:!0,target:!0,class:!0,"data-svelte-h":!0}),Ye(A)!=="svelte-nby2ma"&&(A.textContent=C),L.forEach(Y),this.h()},h(){V(t,"class","interactive clickable svelte-11y6gr6"),V(e,"class","svelte-11y6gr6"),V(o,"class","interactive clickable svelte-11y6gr6"),V(a,"class","svelte-11y6gr6"),V(d,"class","interactive clickable svelte-11y6gr6"),V(h,"class","svelte-11y6gr6"),V(f,"href","mailto:zhenya2201art@gmail.com"),V(f,"target","_blank"),V(f,"class","svelte-11y6gr6"),V(x,"class","mobile svelte-11y6gr6"),V(A,"href","https://t.me/rodina_albom"),V(A,"target","_blank"),V(A,"class","svelte-11y6gr6"),V(y,"class","svelte-11y6gr6")},m(P,M){ke(P,e,M),U(e,t),ke(P,s,M),ke(P,a,M),U(a,o),ke(P,u,M),ke(P,h,M),U(h,d),ke(P,v,M),ke(P,x,M),U(x,f),ke(P,_,M),ke(P,y,M),U(y,A),O||(k=[Rt(t,"click",r[11]),Qt(r[7].call(null,e,{delay:1e3})),Rt(o,"click",r[12]),Qt(r[7].call(null,a,{delay:1100})),Rt(d,"click",r[13]),Qt(r[7].call(null,h,{delay:1200})),Qt(r[7].call(null,y,{delay:1300}))],O=!0)},p:Z,i(P){P&&(i||ot(()=>{i=lt(t,r[2],{delay:200}),i.start()})),P&&(c||ot(()=>{c=lt(o,r[2],{delay:250}),c.start()})),P&&(g||ot(()=>{g=lt(d,r[2],{delay:300}),g.start()})),P&&(b||ot(()=>{b=lt(f,r[2],{delay:350}),b.start()})),P&&(D||ot(()=>{D=lt(A,r[2],{delay:400}),D.start()}))},o:Z,d(P){P&&(Y(e),Y(s),Y(a),Y(u),Y(h),Y(v),Y(x),Y(_),Y(y)),O=!1,Gr(k)}}}function Ty(r){return{c:Z,l:Z,m:Z,p:Z,d:Z}}function Ey(r){let e,t,n,i={ctx:r,current:null,token:null,hasCatch:!1,pending:Ty,then:Sy,catch:wy,value:15};return yn(er,i),{c(){e=Bs(),i.block.c()},l(s){e=Bs(),i.block.l(s)},m(s,a){ke(s,e,a),i.block.m(s,i.anchor=a),i.mount=()=>e.parentNode,i.anchor=e,t||(n=Rt(My,"resize",r[9]),t=!0)},p(s,[a]){r=s,Fr(i,r,a)},i:Z,o:Z,d(s){s&&Y(e),i.block.d(s),i.token=null,i=null,t=!1,n()}}}function Ay(r,e,t){let n,i,s,a;Xt(r,co,m=>t(3,i=m)),Xt(r,uo,m=>t(4,s=m)),Xt(r,ho,m=>t(5,a=m));let{scrollContainer:o}=e,l=!1,c=window.innerWidth<=950;function u(m){o.scrollTo({top:m.offsetTop-window.innerHeight/5,behavior:"smooth"}),t(0,l=!1)}function h(m,b){c||(m.style.transform="translateY(130%) rotate(7deg)",Je({targets:m,rotate:0,translateY:"0%",easing:"cubicBezier(0.165, 0.84, 0.44, 1)",duration:1e3,delay:b.delay}))}const d=()=>t(1,c=window.innerWidth<=950),p=()=>u(i),g=()=>u(i),v=()=>u(s),x=()=>u(a),f=()=>t(0,l=!l);return r.$$set=m=>{"scrollContainer"in m&&t(8,o=m.scrollContainer)},r.$$.update=()=>{r.$$.dirty&1&&t(2,n=l?Pt:(m,b)=>{let _=Pt(m,{reverse:!0,duration:3e3});return{tick:y=>{let A=1-y;_.tick(A),y==1&&setTimeout(()=>_.tick(1),500)}}})},[l,c,n,i,s,a,u,h,o,d,p,g,v,x,f]}class Cy extends ri{constructor(e){super(),si(this,e,Ay,Ey,Bn,{scrollContainer:8})}}function Ly(r){let e,t,n,i,s=r[5].availablity_date+"",a,o;return{c(){e=J("p"),t=on("Принимаю заказы на роспись, написание икон и прочие работы с "),n=J("br"),i=Re(),a=on(s),o=on("."),this.h()},l(l){e=$(l,"P",{class:!0});var c=_e(e);t=ln(c,"Принимаю заказы на роспись, написание икон и прочие работы с "),n=$(c,"BR",{class:!0}),i=Pe(c),a=ln(c,s),o=ln(c,"."),c.forEach(Y),this.h()},h(){V(n,"class","svelte-g0q3jr"),V(e,"class","large-text svelte-g0q3jr")},m(l,c){ke(l,e,c),U(e,t),U(e,n),U(e,i),U(e,a),U(e,o),r[9](e)},p(l,c){c&32&&s!==(s=l[5].availablity_date+"")&&Yi(a,s)},d(l){l&&Y(e),r[9](null)}}}function Ry(r){let e,t="Принимаю заказы на роспись, написание икон и прочие работы.";return{c(){e=J("p"),e.textContent=t,this.h()},l(n){e=$(n,"P",{class:!0,"data-svelte-h":!0}),Ye(e)!=="svelte-13niust"&&(e.textContent=t),this.h()},h(){V(e,"class","large-text svelte-g0q3jr")},m(n,i){ke(n,e,i),r[8](e)},p:Z,d(n){n&&Y(e),r[8](null)}}}function Py(r){let e,t,n,i,s='<img src="assets/imgs/logo.svg" alt="mh logo" class="logo svelte-g0q3jr"/>',a,o,l,c,u="zhenya2201art@gmail.com",h,d,p,g,v,x,f,m='Adapted from Musab Hassans`s work<br class="svelte-g0q3jr"/>',b,_,y='<svg id="signature" class="name-signature svelte-g0q3jr" x="0px" y="0px" viewBox="0 0 190 136.9" style="stroke: rgb(79, 78, 85);"></svg>';function A(O,k){return O[5].availablity_date===""?Ry:Ly}let C=A(r),D=C(r);return{c(){e=J("div"),t=J("div"),n=J("div"),i=J("div"),i.innerHTML=s,a=Re(),o=J("div"),D.c(),l=Re(),c=J("a"),c.textContent=u,h=Re(),d=J("div"),p=J("p"),g=on("© "),v=on(r[6]),x=Re(),f=J("p"),f.innerHTML=m,b=Re(),_=J("div"),_.innerHTML=y,this.h()},l(O){e=$(O,"DIV",{class:!0});var k=_e(e);t=$(k,"DIV",{class:!0});var P=_e(t);n=$(P,"DIV",{class:!0});var M=_e(n);i=$(M,"DIV",{class:!0,"data-svelte-h":!0}),Ye(i)!=="svelte-22qnc3"&&(i.innerHTML=s),M.forEach(Y),a=Pe(P),o=$(P,"DIV",{class:!0});var w=_e(o);D.l(w),l=Pe(w),c=$(w,"A",{class:!0,href:!0,target:!0,"data-svelte-h":!0}),Ye(c)!=="svelte-e1lm6w"&&(c.textContent=u),w.forEach(Y),h=Pe(P),d=$(P,"DIV",{class:!0});var N=_e(d);p=$(N,"P",{class:!0});var z=_e(p);g=ln(z,"© "),v=ln(z,r[6]),z.forEach(Y),x=Pe(N),f=$(N,"P",{class:!0,"data-svelte-h":!0}),Ye(f)!=="svelte-q0dw5v"&&(f.innerHTML=m),N.forEach(Y),P.forEach(Y),b=Pe(k),_=$(k,"DIV",{class:!0,"data-svelte-h":!0}),Ye(_)!=="svelte-1lrer4p"&&(_.innerHTML=y),k.forEach(Y),this.h()},h(){V(i,"class","inline-flex svelte-g0q3jr"),V(n,"class","logo-wrapper svelte-g0q3jr"),V(c,"class","button large-text svelte-g0q3jr"),V(c,"href","mailto:zhenya2201art@gmail.com"),V(c,"target","_blank"),V(o,"class","status-wrapper"),V(p,"class","year svelte-g0q3jr"),V(f,"class","credits svelte-g0q3jr"),V(d,"class","credits-wrapper svelte-g0q3jr"),V(t,"class","flex-wrapper svelte-g0q3jr"),V(_,"class","flex-wrapper decor svelte-g0q3jr"),V(e,"class","footer-wrapper svelte-g0q3jr")},m(O,k){ke(O,e,k),U(e,t),U(t,n),U(n,i),r[7](i),U(t,a),U(t,o),D.m(o,null),U(o,l),U(o,c),r[10](c),U(t,h),U(t,d),U(d,p),U(p,g),U(p,v),U(d,x),U(d,f),r[11](d),U(e,b),U(e,_),r[12](e)},p(O,[k]){C===(C=A(O))&&D?D.p(O,k):(D.d(1),D=C(O),D&&(D.c(),D.m(o,l)))},i:Z,o:Z,d(O){O&&Y(e),r[7](null),D.d(),r[10](null),r[11](null),r[12](null)}}}function Iy(r,e,t){let n,i,s,a,o,l,c,u,h,d={availablity_date:""};fu.subscribe(y=>{y!==void 0&&t(5,d=y)});const p=new Date().getFullYear();function g(){const y=Pt(i,{}),A=$t(o,{delay:6,initDelay:150}),C=Pt(s,{delay:150}),D=$t(a,{delay:6,initDelay:100});Gs(n,()=>{y.anime(),C.anime(),A.anime(),D.anime();let O=[{strokeDashoffset:"0"}];l.animate(O,{duration:1e3,delay:0,easing:"cubic-bezier(.72,.3,.25,1)",fill:"forwards"}),c.animate(O,{duration:300,delay:1e3,easing:"cubic-bezier(.47,.41,.26,1)",fill:"forwards"}),u.animate(O,{duration:200,delay:1300,easing:"cubic-bezier(.47,.41,.26,1)",fill:"forwards"}),h.animate(O,{duration:1e3,delay:1500,easing:"cubic-bezier(.47,.41,.26,1)",fill:"forwards"})})}Ki(async()=>{await er,g()});function v(y){ht[y?"unshift":"push"](()=>{i=y,t(1,i)})}function x(y){ht[y?"unshift":"push"](()=>{a=y,t(3,a)})}function f(y){ht[y?"unshift":"push"](()=>{a=y,t(3,a)})}function m(y){ht[y?"unshift":"push"](()=>{o=y,t(4,o)})}function b(y){ht[y?"unshift":"push"](()=>{s=y,t(2,s)})}function _(y){ht[y?"unshift":"push"](()=>{n=y,t(0,n)})}return[n,i,s,a,o,d,p,v,x,f,m,b,_]}class Dy extends ri{constructor(e){super(),si(this,e,Iy,Py,Bn,{})}}const{document:Fy}=ou;function Ny(r){return{c:Z,l:Z,m:Z,p:Z,d:Z}}function zy(r){let e,t='<div class="dot svelte-1l3lcu7"></div>',n,i;return{c(){e=J("div"),e.innerHTML=t,this.h()},l(s){e=$(s,"DIV",{class:!0,"data-svelte-h":!0}),Ye(e)!=="svelte-1kqyv5l"&&(e.innerHTML=t),this.h()},h(){V(e,"class","dot-container active svelte-1l3lcu7"),it(e,"hover",r[0]),it(e,"disabled",r[2]||r[1])},m(s,a){ke(s,e,a),n||(i=Qt(r[4].call(null,e)),n=!0)},p(s,a){a&1&&it(e,"hover",s[0]),a&6&&it(e,"disabled",s[2]||s[1])},d(s){s&&Y(e),n=!1,i()}}}function ky(r){return{c:Z,l:Z,m:Z,p:Z,d:Z}}function By(r){let e,t,n,i,s={ctx:r,current:null,token:null,hasCatch:!1,pending:ky,then:zy,catch:Ny,value:9};return yn(er,s),{c(){e=Re(),t=Bs(),s.block.c()},l(a){e=Pe(a),t=Bs(),s.block.l(a)},m(a,o){ke(a,e,o),ke(a,t,o),s.block.m(a,s.anchor=o),s.mount=()=>t.parentNode,s.anchor=t,n||(i=Rt(Fy.body,"mousemove",r[5]),n=!0)},p(a,[o]){r=a,Fr(s,r,o)},i:Z,o:Z,d(a){a&&(Y(e),Y(t)),s.block.d(a),s.token=null,s=null,n=!1,i()}}}function iu(r){return r<.5?2*r*r:-1+(4-2*r)*r}function Oy(r,e,t){let n;Xt(r,lo,d=>t(8,n=d));let i=!1,s=!1,a=!0;zs.subscribe(d=>t(1,s=d));let o={x:0,y:0},l={x:0,y:0};function c(d){if(n)return;a&&setTimeout(()=>t(2,a=!1),200);let p=window.getComputedStyle(d.target).cursor;if(t(0,i=p==="pointer"),p==="pointer"){let g=document.elementFromPoint(d.clientX,d.clientY),v=g.clientWidth,x=g.clientHeight,f={x:g.getBoundingClientRect().left+v/2,y:g.getBoundingClientRect().top+x/2};l={x:f.x+(f.x-d.clientX)*.15,y:f.y+(f.y-d.clientY)*.15}}else l={x:d.clientX,y:d.clientY}}function u(d){let p=.4;o.x+=iu(p)*(l.x-o.x),o.y+=iu(p)*(l.y-o.y),o.x=Math.ceil(o.x*100)/100,o.y=Math.ceil(o.y*100)/100,d.style.transform=`translate3d(${o.x}px, ${o.y}px, 0px)`,requestAnimationFrame(()=>u(d))}return[i,s,a,c,u,d=>c(d)]}class Uy extends ri{constructor(e){super(),si(this,e,Oy,By,Bn,{})}}const Dh=r=>{r=r.trim();const e=r.match("[0-9.]+");let t="ms",n;const i=e?e[0]:"";return i&&(t=r.split(i)[1],n=Number(i)),{num:n,unit:t}},Vy=r=>{const e=Dh(r),t=e?e.num:void 0;if(!t)return"";const n=r.replace(t+"","");let i=t;return n==="s"&&(i=t*1e3),i+"ms"};function Hy(r){const e=c=>c.replace(/-([a-z])/g,u=>u[1].toUpperCase()),t=c=>window.getComputedStyle(r).getPropertyValue(c)||r.style[e(c)],n=t("transition-delay")||"0ms",i=t("transition-duration")||"0ms",s=Array.isArray(i)?i:[i],a=Array.isArray(n)?n:[n];let o=0,l;return s.push.apply(s,a),s.forEach(c=>{c.split(",").forEach(u=>{u=Vy(u),l=Dh(u),l.num&&l.num>o&&(o=l.num)})}),o}function ru(r){const e=Hy(r);return new Promise(t=>{e>0?setTimeout(()=>{t(r)},e):t(r)})}function Gy(r){let e,t,n,i,s;return{c(){e=J("div"),t=J("div"),n=J("div"),i=Re(),s=J("div"),this.h()},l(a){e=$(a,"DIV",{class:!0});var o=_e(e);t=$(o,"DIV",{class:!0});var l=_e(t);n=$(l,"DIV",{class:!0}),_e(n).forEach(Y),i=Pe(l),s=$(l,"DIV",{class:!0,style:!0}),_e(s).forEach(Y),l.forEach(Y),o.forEach(Y),this.h()},h(){V(n,"class","loader-background svelte-1995pyy"),it(n,"outro",r[1]),V(s,"class","loader svelte-1995pyy"),Jn(s,"width",r[2]+"%"),it(s,"outro",r[1]),V(t,"class","loader-wrapper svelte-1995pyy"),V(e,"class","page-cover svelte-1995pyy")},m(a,o){ke(a,e,o),U(e,t),U(t,n),U(t,i),U(t,s),r[3](s)},p(a,[o]){o&2&&it(n,"outro",a[1]),o&4&&Jn(s,"width",a[2]+"%"),o&2&&it(s,"outro",a[1])},i:Z,o:Z,d(a){a&&Y(e),r[3](null)}}}function Wy(r,e,t){let n;Xt(r,Lo,l=>t(4,n=l));let i,s=!1,a=0;Ki(async()=>{let l=0,c=n.length;await Ro,n.forEach(async u=>{await u,l++,t(2,a=Math.round(l/c*100)),a>99&&ru(i).then(()=>{t(1,s=!0),t(2,a=0),ru(i).then(()=>{du()})})})});function o(l){ht[l?"unshift":"push"](()=>{i=l,t(0,i)})}return[i,s,a,o]}class qy extends ri{constructor(e){super(),si(this,e,Wy,Gy,Bn,{})}}function su(r){let e,t;return e=new qy({}),{c(){di(e.$$.fragment)},l(n){fi(e.$$.fragment,n)},m(n,i){pi(e,n,i),t=!0},i(n){t||(Mt(e.$$.fragment,n),t=!0)},o(n){Wt(e.$$.fragment,n),t=!1},d(n){mi(e,n)}}}function jy(r){let e,t,n,i,s,a,o,l,c,u,h,d,p,g,v;e=new Uy({});let x=r[2]&&su();return a=new Cy({props:{scrollContainer:r[0]}}),l=new Dd({}),u=new cy({}),d=new by({}),g=new Dy({}),{c(){di(e.$$.fragment),t=Re(),x&&x.c(),n=Re(),i=J("div"),s=J("div"),di(a.$$.fragment),o=Re(),di(l.$$.fragment),c=Re(),di(u.$$.fragment),h=Re(),di(d.$$.fragment),p=Re(),di(g.$$.fragment),this.h()},l(f){fi(e.$$.fragment,f),t=Pe(f),x&&x.l(f),n=Pe(f),i=$(f,"DIV",{id:!0,class:!0});var m=_e(i);s=$(m,"DIV",{id:!0,class:!0});var b=_e(s);fi(a.$$.fragment,b),b.forEach(Y),o=Pe(m),fi(l.$$.fragment,m),c=Pe(m),fi(u.$$.fragment,m),h=Pe(m),fi(d.$$.fragment,m),p=Pe(m),fi(g.$$.fragment,m),m.forEach(Y),this.h()},h(){V(s,"id","nav-bar"),V(s,"class","svelte-1srbcku"),V(i,"id","scroll-frame"),V(i,"class","svelte-1srbcku")},m(f,m){pi(e,f,m),ke(f,t,m),x&&x.m(f,m),ke(f,n,m),ke(f,i,m),U(i,s),pi(a,s,null),r[3](s),U(i,o),pi(l,i,null),U(i,c),pi(u,i,null),U(i,h),pi(d,i,null),U(i,p),pi(g,i,null),r[4](i),v=!0},p(f,[m]){f[2]?x?m&4&&Mt(x,1):(x=su(),x.c(),Mt(x,1),x.m(n.parentNode,n)):x&&(Ks(),Wt(x,1,1,()=>{x=null}),ea());const b={};m&1&&(b.scrollContainer=f[0]),a.$set(b)},i(f){v||(Mt(e.$$.fragment,f),Mt(x),Mt(a.$$.fragment,f),Mt(l.$$.fragment,f),Mt(u.$$.fragment,f),Mt(d.$$.fragment,f),Mt(g.$$.fragment,f),v=!0)},o(f){Wt(e.$$.fragment,f),Wt(x),Wt(a.$$.fragment,f),Wt(l.$$.fragment,f),Wt(u.$$.fragment,f),Wt(d.$$.fragment,f),Wt(g.$$.fragment,f),v=!1},d(f){f&&(Y(t),Y(n),Y(i)),mi(e,f),x&&x.d(f),mi(a),r[3](null),mi(l),mi(u),mi(d),mi(g),r[4](null)}}}function Xy(r,e,t){let n,i;Xt(r,Hs,u=>t(5,n=u)),Xt(r,Lo,u=>t(6,i=u));let s,a,o=!0;Ki(async()=>{t(0,s.style.overflowY="hidden",s),s.scrollTo(0,0),Ro.set(await ml("/data/work-data.json")),fu.set(await ml("/data/data.json")),await Promise.allSettled(i),await Zh,t(2,o=!1),hu(),Jh(),Dr(Hs,n=new Yh({root:s,easing:"easeOutCirc",duration:1500,fixedOffsets:[a]}),n),t(0,s.style.overflowX="hidden",s),t(0,s.style.overflowY="auto",s)});function l(u){ht[u?"unshift":"push"](()=>{a=u,t(1,a)})}function c(u){ht[u?"unshift":"push"](()=>{s=u,t(0,s)})}return[s,a,o,l,c]}class Ky extends ri{constructor(e){super(),si(this,e,Xy,jy,Bn,{})}}export{Ky as component,$y as universal};
