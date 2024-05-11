import{y as Vh,z as Hh,q as us,k as Gh,s as Vn,n as Q,b as Qt,o as ar,A as Gr,e as ht,B as tr,h as Wh,C as rn,i as Mr,r as Kr,f as et,D as qh}from"../chunks/scheduler.GOssmixh.js";import{q as la,a as Zt,n as ca,t as wt,S as li,i as ci,e as Y,s as Re,c as Z,d as pe,y as Ye,h as Pe,g as W,o as O,p as ei,j as Be,k as B,z as at,A as Pt,B as fo,b as Ht,f as Gt,l as kn,C as it,D as xl,E as Hn,F as po,m as Ys,u as vi,v as xi,w as _i,x as yi}from"../chunks/index.t7KkFELy.js";import{w as Sn}from"../chunks/index.8NwuiTUI.js";const fu=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function bn(r,e){const t=e.token={};function n(i,s,a,o){if(e.token!==t)return;e.resolved=o;let l=e.ctx;a!==void 0&&(l=l.slice(),l[a]=o);const c=i&&(e.current=i)(l);let u=!1;e.block&&(e.blocks?e.blocks.forEach((h,d)=>{d!==s&&h&&(la(),Zt(h,1,1,()=>{e.blocks[d]===h&&(e.blocks[d]=null)}),ca())}):e.block.d(1),c.c(),wt(c,1),c.m(e.mount(),e.anchor),u=!0),e.block=c,e.blocks&&(e.blocks[s]=c),u&&Gh()}if(Vh(r)){const i=Hh();if(r.then(s=>{us(i),n(e.then,1,e.value,s),us(null)},s=>{if(us(i),n(e.catch,2,e.error,s),us(null),!e.hasCatch)throw s}),e.current!==e.pending)return n(e.pending,0),!0}else{if(e.current!==e.then)return n(e.then,1,e.value,r),!0;e.resolved=r}}function Wr(r,e,t){const n=e.slice(),{resolved:i}=r;r.current===r.then&&(n[r.value]=i),r.current===r.catch&&(n[r.error]=i),r.block.p(n,t)}function Zi(r){return r?.length!==void 0?r:Array.from(r)}const jh=!1,Ky=Object.freeze(Object.defineProperty({__proto__:null,ssr:jh},Symbol.toStringTag,{value:"Module"}));var mo={d:(r,e)=>{for(var t in e)mo.o(e,t)&&!mo.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:e[t]})},o:(r,e)=>Object.prototype.hasOwnProperty.call(r,e)},pu={};mo.d(pu,{Z:()=>Zh});const Xh={root:"body",duration:1e3,easing:"cubic-bezier(0.15, 1, 0.4, 1)",offsets:[],fixedOffsets:[]},go={speedY:1,speedX:1},Yh=[{name:"easeInSine",value:[.12,0,.39,0]},{name:"easeOutSine",value:[.61,1,.88,1]},{name:"easeInOutSine",value:[.37,0,.63,1]},{name:"easeInQuad",value:[.11,0,.5,0]},{name:"easeOutQuad",value:[.5,1,.89,1]},{name:"easeInOutQuad",value:[.45,0,.55,1]},{name:"easeInCubic",value:[.32,0,.67,0]},{name:"easeOutCubic",value:[.33,1,.68,1]},{name:"easeInOutCubic",value:[.65,0,.35,1]},{name:"easeInQuart",value:[.5,0,.75,0]},{name:"easeOutQuart",value:[.25,1,.5,1]},{name:"easeInOutQuart",value:[.76,0,.24,1]},{name:"easeInQuint",value:[.64,0,.78,0]},{name:"easeOutQuint",value:[.22,1,.36,1]},{name:"easeInOutQuint",value:[.83,0,.17,1]},{name:"easeInExpo",value:[.7,0,.84,0]},{name:"easeOutExpo",value:[.16,1,.3,1]},{name:"easeInOutExpo",value:[.87,0,.13,1]},{name:"easeInCirc",value:[.55,0,1,.45]},{name:"easeOutCirc",value:[0,.55,.45,1]},{name:"easeInOutCirc",value:[.85,0,.15,1]}];function tn(r,e){return typeof r=="string"?e?document.querySelectorAll(r):document.querySelector(r):r}function _l(r,e,t,n){let i=.1,s=typeof Float32Array=="function";function a(d,p){return 1-3*p+3*d}function o(d,p){return 3*p-6*d}function l(d){return 3*d}function c(d,p,g){return((a(p,g)*d+o(p,g))*d+l(p))*d}function u(d,p,g){return 3*a(p,g)*d*d+2*o(p,g)*d+l(p)}if(!(0<=r&&r<=1&&0<=t&&t<=1))throw new Error("bezier x values must be in [0, 1] range");if(r===e&&t===n)return function(d){return d};let h=s?new Float32Array(11):new Array(11);for(let d=0;d<11;++d)h[d]=c(d*i,r,t);return d=>d===0||d===1?d:c(function(p){let g=0,v=1;for(;v!==10&&h[v]<=p;++v)g+=i;--v;let x=g+(p-h[v])/(h[v+1]-h[v])*i,f=u(x,r,t);return f>=.001?function(m,b,_,y){for(let C=0;C<4;++C){let L=u(b,_,y);if(L===0)return b;b-=(c(b,_,y)-m)/L}return b}(p,x,r,t):f===0?x:function(m,b,_,y,C){let L,F,V=0;do F=b+(_-b)/2,L=c(F,y,C)-m,L>0?_=F:b=F;while(Math.abs(L)>1e-7&&++V<10);return F}(p,g,g+i,r,t)}(d),e,n)}var Ws,$n,Fn,en,zn,Mt,kr,Ft,zt,qs,mu,Zs,Js,gu,Br,Vt=function(r,e,t,n,i){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?r!==e||!i:!e.has(r))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?i.call(r,t):i?i.value=t:e.set(r,t),t},_e=function(r,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?r!==e||!n:!e.has(r))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(r):n?n.value:e.get(r)};class Zh{constructor(e){Ws.add(this),$n.set(this,void 0),Fn.set(this,{x:0,y:0}),en.set(this,{x:0,y:0}),zn.set(this,void 0),Mt.set(this,void 0),kr.set(this,void 0),Ft.set(this,[]),zt.set(this,[]),qs.set(this,void 0),Zs.set(this,t=>{Vt(this,Fn,{x:_e(this,Mt,"f").scrollLeft,y:_e(this,Mt,"f").scrollTop},"f"),_e(this,Fn,"f").x!==void 0&&_e(this,Fn,"f").y!==void 0||Vt(this,Fn,{x:_e(this,Mt,"f").scrollX,y:_e(this,Mt,"f").scrollY},"f"),_e(this,$n,"f").onScroll&&new Promise(n=>{_e(this,$n,"f").onScroll(t),n(!0)})}),Js.set(this,()=>{if(_e(this,qs,"f"))return;let t=function(o){let l,c=Yh.filter(u=>u.name==o);if(l=c[0]?c[0].value:(o=(o=o.split(/([^\(-\)]*)/))[3].split(/,(?![^()]*\()/)).map(u=>parseFloat(u)),Array.isArray(l)&&l.length==4)return l;throw"easing string is invalid."}(_e(this,$n,"f").easing),n=1/(_e(this,$n,"f").duration/10+1);_e(this,en,"f").x+=_l.apply(null,t)(n)*(_e(this,Fn,"f").x-_e(this,en,"f").x),_e(this,en,"f").y+=_l.apply(null,t)(n)*(_e(this,Fn,"f").y-_e(this,en,"f").y),_e(this,en,"f").x=Math.ceil(100*_e(this,en,"f").x)/100,_e(this,en,"f").y=Math.ceil(100*_e(this,en,"f").y)/100;let i=-1*_e(this,en,"f").x,s=-1*_e(this,en,"f").y,a=`translate3d(${i}px, ${s}px, 0px)`;if(_e(this,zn,"f").fixed.style.webkitTransform=a,_e(this,zn,"f").fixed.style.transform=a,Array.isArray(_e(this,zt,"f")))for(let o=0;o<_e(this,zt,"f").length;o++){let l=Object.assign({},go,_e(this,zt,"f")[o]),c=`translate3d(${i*(l.speedX-1)}px, ${s*(l.speedY-1)}px, 0)`,u=tn(l.element,!0);if(NodeList.prototype.isPrototypeOf(u))for(let h of u)h.style.webkitTransform=c,h.style.transform=c;else u.style.webkitTransform=c,u.style.transform=c}if(Array.isArray(_e(this,Ft,"f")))for(let o=0;o<_e(this,Ft,"f").length;o++){let l=`translate3d(${-i}px, ${-s}px, 0px)`,c=tn(_e(this,Ft,"f")[o],!0);if(NodeList.prototype.isPrototypeOf(c))for(let u of c)u.style.webkitTransform=l,u.style.transform=l;else c.style.webkitTransform=l,c.style.transform=l}requestAnimationFrame(()=>_e(this,Js,"f").call(this))}),Br.set(this,()=>{_e(this,zn,"f")!==void 0&&(_e(this,zn,"f").dummy.style.height=_e(this,zn,"f").fixed.scrollHeight+"px")}),Vt(this,$n,Object.assign({},Xh,e),"f"),Vt(this,Mt,tn(e.root),"f"),e.fixedOffsets!==void 0&&Vt(this,Ft,e.fixedOffsets,"f"),e.offsets!==void 0&&Vt(this,zt,e.offsets,"f"),function(){let t=!1;var n;return n=navigator.userAgent||navigator.vendor,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(n)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(n.substring(0,4)))&&(t=!0),!t&&CSS.supports&&(t=!CSS.supports("position","sticky")),!t}()?_e(this,Ws,"m",mu).call(this):_e(this,Ws,"m",gu).call(this)}destroy(){let e=_e(this,Mt,"f").querySelector("._SS_wrapper");_e(this,Mt,"f").removeEventListener("scroll",_e(this,Zs,"f")),_e(this,Mt,"f").removeEventListener("resize",_e(this,Br,"f")),_e(this,kr,"f").disconnect();for(let n=e.children.length;n>0;n--)e.children[n-1].removeProperty&&e.children[n-1].removeProperty("transform"),_e(this,Mt,"f").insertBefore(e.children[n-1],_e(this,Mt,"f").children[0]);function t(n){n&&n.forEach(i=>{let s=tn(i.element,!0);if(i.element||(s=tn(i,!0)),NodeList.prototype.isPrototypeOf(s))for(i of s)i.style.removeProperty("transform"),i.style.removeProperty("-webkit-transform");else s.style.removeProperty("transform"),s.style.removeProperty("-webkit-transform")})}e.remove(),tn(_e(this,$n,"f").root).querySelector("._SS_dummy").remove(),_e(this,Mt,"f").style.removeProperty("overflow"),_e(this,Mt,"f").style.removeProperty("position"),Vt(this,qs,!0,"f"),t(_e(this,zt,"f")),t(_e(this,Ft,"f"))}removeOffset(e){Vt(this,zt,_e(this,zt,"f").filter(n=>n.element!==e),"f"),Vt(this,zt,_e(this,zt,"f").filter(n=>n.element!==tn(e,!0)),"f"),Vt(this,Ft,_e(this,Ft,"f").filter(n=>n!==e),"f"),Vt(this,Ft,_e(this,Ft,"f").filter(n=>n!==tn(e,!0)),"f");let t=tn(e,!0);if(NodeList.prototype.isPrototypeOf(t))for(let n of t)n.style.removeProperty("transform"),n.style.removeProperty("-webkit-transform"),n.style.position=="fixed"&&n.style.removeProperty("position");else t.style.removeProperty("transform"),t.style.removeProperty("-webkit-transform"),t.style.position=="fixed"&&t.style.removeProperty("position")}addOffset(e){typeof e=="object"&&!_e(this,zt,"f").find(t=>t.element==e.element)&&e.element&&(e=Object.assign({},go,e),_e(this,zt,"f").push(e))}addFixedOffset(e){tn(e,!0)&&!_e(this,Ft,"f").includes(e)&&_e(this,Ft,"f").push(e)}}$n=new WeakMap,Fn=new WeakMap,en=new WeakMap,zn=new WeakMap,Mt=new WeakMap,kr=new WeakMap,Ft=new WeakMap,zt=new WeakMap,qs=new WeakMap,Zs=new WeakMap,Js=new WeakMap,Br=new WeakMap,Ws=new WeakSet,mu=function(){Vt(this,zn,function(e){getComputedStyle(e).position=="absolute"&&getComputedStyle(e).position=="fixed"||(e.style.position="relative");let t=document.createElement("div"),n=document.createElement("div");t.classList.add("_SS_wrapper"),n.classList.add("_SS_dummy");for(let i=e.children.length;i>0;i--)t.insertBefore(e.children[i-1],t.children[0]);return e.innerHTML="",e.style.overflow="auto",e.appendChild(t),e.appendChild(n),n.style.height=t.scrollHeight+"px",n.style.width=t.scrollWidth+"px",n.style.top="0px",n.style.left="0px",n.style.position="absolute",n.style.zIndex="-9999",t.style.zIndex="1",t.style.height="100%",t.style.width="100%",t.style.overflow="visible",t.style.top="0px",t.style.left="0px",t.style.position="sticky",{fixed:e.querySelector("div._SS_wrapper"),dummy:e.querySelector("div._SS_dummy")}}(_e(this,Mt,"f")),"f");let r=new WebKitCSSMatrix(window.getComputedStyle(_e(this,zn,"f").fixed).transform);Vt(this,Fn,{x:r.m41,y:r.m42},"f"),Vt(this,kr,new MutationObserver(_e(this,Br,"f")),"f"),_e(this,kr,"f").observe(_e(this,Mt,"f"),{childList:!0,attributes:!0,subtree:!0}),window.addEventListener("resize",_e(this,Br,"f")),_e(this,Mt,"f").addEventListener("scroll",_e(this,Zs,"f")),_e(this,Js,"f").call(this)},gu=function(){_e(this,Mt,"f").addEventListener("scroll",r=>{_e(this,zt,"f")&&_e(this,zt,"f").forEach(e=>{e=Object.assign({},go,e);let t=`translate3d(${r.target.scrollLeft*(1-e.speedX)}px, ${r.target.scrollTop*(1-e.speedY)}px, 0px)`,n=tn(e.element,!0);if(Symbol.iterator in Object(n))for(let i of n)i.style.webkitTransform=t,i.style.transform=t;else n.style.webkitTransform=t,n.style.transform=t})}),_e(this,Ft,"f")&&_e(this,Ft,"f").forEach(r=>{let e=tn(r,!0);if(Symbol.iterator in Object(e))for(let t of e)t.style.position="fixed";else e.style.position="fixed"})};var Jh=pu.Z;let $s=Sn(),js=Sn(!1),No=Sn(0),vo=Sn(!1),xo=Sn(),_o=Sn(),yo=Sn(),ko=Sn([]),vu,or=new Promise(r=>vu=r),xu,$h=new Promise(r=>xu=r);const Bo=Sn(),_u=Sn();async function qr(r){const e=new Promise(async(t,n)=>{const i=await(await fetch(r)).blob(),s=new FileReader;s.readAsDataURL(i),s.onload=()=>t(s.result),s.onerror=a=>n(a)});return ko.update(t=>[...t,e]),e}function yl(r){return new Promise(async e=>{const n=await(await fetch(r)).json();e(n)})}function Qs(r,e){const t=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting&&(e(i),t.disconnect())})},{root:null,threshold:.4});t.observe(r)}function Qh(){const r="font-size: 1.2rem; font-weight: bold;";console.log("%cLooks like you're a developer.",r+"color: #22c55e;"),console.log("%cInterested in how this site works?",r+"color: #22c55e;"),console.log("%cCheckout the source code: https://github.com/Musab-Hassan/musabhassan.com",r)}var yu={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},Oo={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},Kh=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],Ks={CSS:{},springs:{}};function _n(r,e,t){return Math.min(Math.max(r,e),t)}function Or(r,e){return r.indexOf(e)>-1}function Ea(r,e){return r.apply(null,e)}var Ie={arr:function(r){return Array.isArray(r)},obj:function(r){return Or(Object.prototype.toString.call(r),"Object")},pth:function(r){return Ie.obj(r)&&r.hasOwnProperty("totalLength")},svg:function(r){return r instanceof SVGElement},inp:function(r){return r instanceof HTMLInputElement},dom:function(r){return r.nodeType||Ie.svg(r)},str:function(r){return typeof r=="string"},fnc:function(r){return typeof r=="function"},und:function(r){return typeof r>"u"},nil:function(r){return Ie.und(r)||r===null},hex:function(r){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(r)},rgb:function(r){return/^rgb/.test(r)},hsl:function(r){return/^hsl/.test(r)},col:function(r){return Ie.hex(r)||Ie.rgb(r)||Ie.hsl(r)},key:function(r){return!yu.hasOwnProperty(r)&&!Oo.hasOwnProperty(r)&&r!=="targets"&&r!=="keyframes"}};function bu(r){var e=/\(([^)]+)\)/.exec(r);return e?e[1].split(",").map(function(t){return parseFloat(t)}):[]}function Mu(r,e){var t=bu(r),n=_n(Ie.und(t[0])?1:t[0],.1,100),i=_n(Ie.und(t[1])?100:t[1],.1,100),s=_n(Ie.und(t[2])?10:t[2],.1,100),a=_n(Ie.und(t[3])?0:t[3],.1,100),o=Math.sqrt(i/n),l=s/(2*Math.sqrt(i*n)),c=l<1?o*Math.sqrt(1-l*l):0,u=1,h=l<1?(l*o+-a)/c:-a+o;function d(g){var v=e?e*g/1e3:g;return l<1?v=Math.exp(-v*l*o)*(u*Math.cos(c*v)+h*Math.sin(c*v)):v=(u+h*v)*Math.exp(-v*o),g===0||g===1?g:1-v}function p(){var g=Ks.springs[r];if(g)return g;for(var v=1/6,x=0,f=0;;)if(x+=v,d(x)===1){if(f++,f>=16)break}else f=0;var m=x*v*1e3;return Ks.springs[r]=m,m}return e?d:p}function ed(r){return r===void 0&&(r=10),function(e){return Math.ceil(_n(e,1e-6,1)*r)*(1/r)}}var td=function(){var r=11,e=1/(r-1);function t(u,h){return 1-3*h+3*u}function n(u,h){return 3*h-6*u}function i(u){return 3*u}function s(u,h,d){return((t(h,d)*u+n(h,d))*u+i(h))*u}function a(u,h,d){return 3*t(h,d)*u*u+2*n(h,d)*u+i(h)}function o(u,h,d,p,g){var v,x,f=0;do x=h+(d-h)/2,v=s(x,p,g)-u,v>0?d=x:h=x;while(Math.abs(v)>1e-7&&++f<10);return x}function l(u,h,d,p){for(var g=0;g<4;++g){var v=a(h,d,p);if(v===0)return h;var x=s(h,d,p)-u;h-=x/v}return h}function c(u,h,d,p){if(!(0<=u&&u<=1&&0<=d&&d<=1))return;var g=new Float32Array(r);if(u!==h||d!==p)for(var v=0;v<r;++v)g[v]=s(v*e,u,d);function x(f){for(var m=0,b=1,_=r-1;b!==_&&g[b]<=f;++b)m+=e;--b;var y=(f-g[b])/(g[b+1]-g[b]),C=m+y*e,L=a(C,u,d);return L>=.001?l(f,C,u,d):L===0?C:o(f,m,m+e,u,d)}return function(f){return u===h&&d===p||f===0||f===1?f:s(x(f),h,p)}}return c}(),wu=function(){var r={linear:function(){return function(n){return n}}},e={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Expo:function(){return function(n){return n?Math.pow(2,10*n-10):0}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var i,s=4;n<((i=Math.pow(2,--s))-1)/11;);return 1/Math.pow(4,3-s)-7.5625*Math.pow((i*3-2)/22-n,2)}},Elastic:function(n,i){n===void 0&&(n=1),i===void 0&&(i=.5);var s=_n(n,1,10),a=_n(i,.1,2);return function(o){return o===0||o===1?o:-s*Math.pow(2,10*(o-1))*Math.sin((o-1-a/(Math.PI*2)*Math.asin(1/s))*(Math.PI*2)/a)}}},t=["Quad","Cubic","Quart","Quint"];return t.forEach(function(n,i){e[n]=function(){return function(s){return Math.pow(s,i+2)}}}),Object.keys(e).forEach(function(n){var i=e[n];r["easeIn"+n]=i,r["easeOut"+n]=function(s,a){return function(o){return 1-i(s,a)(1-o)}},r["easeInOut"+n]=function(s,a){return function(o){return o<.5?i(s,a)(o*2)/2:1-i(s,a)(o*-2+2)/2}},r["easeOutIn"+n]=function(s,a){return function(o){return o<.5?(1-i(s,a)(1-o*2))/2:(i(s,a)(o*2-1)+1)/2}}}),r}();function Uo(r,e){if(Ie.fnc(r))return r;var t=r.split("(")[0],n=wu[t],i=bu(r);switch(t){case"spring":return Mu(r,e);case"cubicBezier":return Ea(td,i);case"steps":return Ea(ed,i);default:return Ea(n,i)}}function Su(r){try{var e=document.querySelectorAll(r);return e}catch{return}}function ua(r,e){for(var t=r.length,n=arguments.length>=2?arguments[1]:void 0,i=[],s=0;s<t;s++)if(s in r){var a=r[s];e.call(n,a,s,r)&&i.push(a)}return i}function ha(r){return r.reduce(function(e,t){return e.concat(Ie.arr(t)?ha(t):t)},[])}function bl(r){return Ie.arr(r)?r:(Ie.str(r)&&(r=Su(r)||r),r instanceof NodeList||r instanceof HTMLCollection?[].slice.call(r):[r])}function Vo(r,e){return r.some(function(t){return t===e})}function Ho(r){var e={};for(var t in r)e[t]=r[t];return e}function bo(r,e){var t=Ho(r);for(var n in r)t[n]=e.hasOwnProperty(n)?e[n]:r[n];return t}function da(r,e){var t=Ho(r);for(var n in e)t[n]=Ie.und(r[n])?e[n]:r[n];return t}function nd(r){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(r);return e?"rgba("+e[1]+",1)":r}function id(r){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,t=r.replace(e,function(o,l,c,u){return l+l+c+c+u+u}),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),i=parseInt(n[1],16),s=parseInt(n[2],16),a=parseInt(n[3],16);return"rgba("+i+","+s+","+a+",1)"}function rd(r){var e=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(r)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(r),t=parseInt(e[1],10)/360,n=parseInt(e[2],10)/100,i=parseInt(e[3],10)/100,s=e[4]||1;function a(d,p,g){return g<0&&(g+=1),g>1&&(g-=1),g<1/6?d+(p-d)*6*g:g<1/2?p:g<2/3?d+(p-d)*(2/3-g)*6:d}var o,l,c;if(n==0)o=l=c=i;else{var u=i<.5?i*(1+n):i+n-i*n,h=2*i-u;o=a(h,u,t+1/3),l=a(h,u,t),c=a(h,u,t-1/3)}return"rgba("+o*255+","+l*255+","+c*255+","+s+")"}function sd(r){if(Ie.rgb(r))return nd(r);if(Ie.hex(r))return id(r);if(Ie.hsl(r))return rd(r)}function Bn(r){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(r);if(e)return e[1]}function ad(r){if(Or(r,"translate")||r==="perspective")return"px";if(Or(r,"rotate")||Or(r,"skew"))return"deg"}function Mo(r,e){return Ie.fnc(r)?r(e.target,e.id,e.total):r}function yn(r,e){return r.getAttribute(e)}function Go(r,e,t){var n=Bn(e);if(Vo([t,"deg","rad","turn"],n))return e;var i=Ks.CSS[e+t];if(!Ie.und(i))return i;var s=100,a=document.createElement(r.tagName),o=r.parentNode&&r.parentNode!==document?r.parentNode:document.body;o.appendChild(a),a.style.position="absolute",a.style.width=s+t;var l=s/a.offsetWidth;o.removeChild(a);var c=l*parseFloat(e);return Ks.CSS[e+t]=c,c}function Tu(r,e,t){if(e in r.style){var n=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),i=r.style[e]||getComputedStyle(r).getPropertyValue(n)||"0";return t?Go(r,i,t):i}}function Wo(r,e){if(Ie.dom(r)&&!Ie.inp(r)&&(!Ie.nil(yn(r,e))||Ie.svg(r)&&r[e]))return"attribute";if(Ie.dom(r)&&Vo(Kh,e))return"transform";if(Ie.dom(r)&&e!=="transform"&&Tu(r,e))return"css";if(r[e]!=null)return"object"}function Eu(r){if(Ie.dom(r)){for(var e=r.style.transform||"",t=/(\w+)\(([^)]*)\)/g,n=new Map,i;i=t.exec(e);)n.set(i[1],i[2]);return n}}function od(r,e,t,n){var i=Or(e,"scale")?1:0+ad(e),s=Eu(r).get(e)||i;return t&&(t.transforms.list.set(e,s),t.transforms.last=e),n?Go(r,s,n):s}function qo(r,e,t,n){switch(Wo(r,e)){case"transform":return od(r,e,n,t);case"css":return Tu(r,e,t);case"attribute":return yn(r,e);default:return r[e]||0}}function jo(r,e){var t=/^(\*=|\+=|-=)/.exec(r);if(!t)return r;var n=Bn(r)||0,i=parseFloat(e),s=parseFloat(r.replace(t[0],""));switch(t[0][0]){case"+":return i+s+n;case"-":return i-s+n;case"*":return i*s+n}}function Au(r,e){if(Ie.col(r))return sd(r);if(/\s/g.test(r))return r;var t=Bn(r),n=t?r.substr(0,r.length-t.length):r;return e?n+e:n}function Xo(r,e){return Math.sqrt(Math.pow(e.x-r.x,2)+Math.pow(e.y-r.y,2))}function ld(r){return Math.PI*2*yn(r,"r")}function cd(r){return yn(r,"width")*2+yn(r,"height")*2}function ud(r){return Xo({x:yn(r,"x1"),y:yn(r,"y1")},{x:yn(r,"x2"),y:yn(r,"y2")})}function Cu(r){for(var e=r.points,t=0,n,i=0;i<e.numberOfItems;i++){var s=e.getItem(i);i>0&&(t+=Xo(n,s)),n=s}return t}function hd(r){var e=r.points;return Cu(r)+Xo(e.getItem(e.numberOfItems-1),e.getItem(0))}function Lu(r){if(r.getTotalLength)return r.getTotalLength();switch(r.tagName.toLowerCase()){case"circle":return ld(r);case"rect":return cd(r);case"line":return ud(r);case"polyline":return Cu(r);case"polygon":return hd(r)}}function dd(r){var e=Lu(r);return r.setAttribute("stroke-dasharray",e),e}function fd(r){for(var e=r.parentNode;Ie.svg(e)&&Ie.svg(e.parentNode);)e=e.parentNode;return e}function Ru(r,e){var t=e||{},n=t.el||fd(r),i=n.getBoundingClientRect(),s=yn(n,"viewBox"),a=i.width,o=i.height,l=t.viewBox||(s?s.split(" "):[0,0,a,o]);return{el:n,viewBox:l,x:l[0]/1,y:l[1]/1,w:a,h:o,vW:l[2],vH:l[3]}}function pd(r,e){var t=Ie.str(r)?Su(r)[0]:r,n=e||100;return function(i){return{property:i,el:t,svg:Ru(t),totalLength:Lu(t)*(n/100)}}}function md(r,e,t){function n(u){u===void 0&&(u=0);var h=e+u>=1?e+u:0;return r.el.getPointAtLength(h)}var i=Ru(r.el,r.svg),s=n(),a=n(-1),o=n(1),l=t?1:i.w/i.vW,c=t?1:i.h/i.vH;switch(r.property){case"x":return(s.x-i.x)*l;case"y":return(s.y-i.y)*c;case"angle":return Math.atan2(o.y-a.y,o.x-a.x)*180/Math.PI}}function Ml(r,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,n=Au(Ie.pth(r)?r.totalLength:r,e)+"";return{original:n,numbers:n.match(t)?n.match(t).map(Number):[0],strings:Ie.str(r)||e?n.split(t):[]}}function Yo(r){var e=r?ha(Ie.arr(r)?r.map(bl):bl(r)):[];return ua(e,function(t,n,i){return i.indexOf(t)===n})}function Pu(r){var e=Yo(r);return e.map(function(t,n){return{target:t,id:n,total:e.length,transforms:{list:Eu(t)}}})}function gd(r,e){var t=Ho(e);if(/^spring/.test(t.easing)&&(t.duration=Mu(t.easing)),Ie.arr(r)){var n=r.length,i=n===2&&!Ie.obj(r[0]);i?r={value:r}:Ie.fnc(e.duration)||(t.duration=e.duration/n)}var s=Ie.arr(r)?r:[r];return s.map(function(a,o){var l=Ie.obj(a)&&!Ie.pth(a)?a:{value:a};return Ie.und(l.delay)&&(l.delay=o?0:e.delay),Ie.und(l.endDelay)&&(l.endDelay=o===s.length-1?e.endDelay:0),l}).map(function(a){return da(a,t)})}function vd(r){for(var e=ua(ha(r.map(function(s){return Object.keys(s)})),function(s){return Ie.key(s)}).reduce(function(s,a){return s.indexOf(a)<0&&s.push(a),s},[]),t={},n=function(s){var a=e[s];t[a]=r.map(function(o){var l={};for(var c in o)Ie.key(c)?c==a&&(l.value=o[c]):l[c]=o[c];return l})},i=0;i<e.length;i++)n(i);return t}function xd(r,e){var t=[],n=e.keyframes;n&&(e=da(vd(n),e));for(var i in e)Ie.key(i)&&t.push({name:i,tweens:gd(e[i],r)});return t}function _d(r,e){var t={};for(var n in r){var i=Mo(r[n],e);Ie.arr(i)&&(i=i.map(function(s){return Mo(s,e)}),i.length===1&&(i=i[0])),t[n]=i}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}function yd(r,e){var t;return r.tweens.map(function(n){var i=_d(n,e),s=i.value,a=Ie.arr(s)?s[1]:s,o=Bn(a),l=qo(e.target,r.name,o,e),c=t?t.to.original:l,u=Ie.arr(s)?s[0]:c,h=Bn(u)||Bn(l),d=o||h;return Ie.und(a)&&(a=c),i.from=Ml(u,d),i.to=Ml(jo(a,u),d),i.start=t?t.end:0,i.end=i.start+i.delay+i.duration+i.endDelay,i.easing=Uo(i.easing,i.duration),i.isPath=Ie.pth(s),i.isPathTargetInsideSVG=i.isPath&&Ie.svg(e.target),i.isColor=Ie.col(i.from.original),i.isColor&&(i.round=1),t=i,i})}var Iu={css:function(r,e,t){return r.style[e]=t},attribute:function(r,e,t){return r.setAttribute(e,t)},object:function(r,e,t){return r[e]=t},transform:function(r,e,t,n,i){if(n.list.set(e,t),e===n.last||i){var s="";n.list.forEach(function(a,o){s+=o+"("+a+") "}),r.style.transform=s}}};function Du(r,e){var t=Pu(r);t.forEach(function(n){for(var i in e){var s=Mo(e[i],n),a=n.target,o=Bn(s),l=qo(a,i,o,n),c=o||Bn(l),u=jo(Au(s,c),l),h=Wo(a,i);Iu[h](a,i,u,n.transforms,!0)}})}function bd(r,e){var t=Wo(r.target,e.name);if(t){var n=yd(e,r),i=n[n.length-1];return{type:t,property:e.name,animatable:r,tweens:n,duration:i.end,delay:n[0].delay,endDelay:i.endDelay}}}function Md(r,e){return ua(ha(r.map(function(t){return e.map(function(n){return bd(t,n)})})),function(t){return!Ie.und(t)})}function Fu(r,e){var t=r.length,n=function(s){return s.timelineOffset?s.timelineOffset:0},i={};return i.duration=t?Math.max.apply(Math,r.map(function(s){return n(s)+s.duration})):e.duration,i.delay=t?Math.min.apply(Math,r.map(function(s){return n(s)+s.delay})):e.delay,i.endDelay=t?i.duration-Math.max.apply(Math,r.map(function(s){return n(s)+s.duration-s.endDelay})):e.endDelay,i}var wl=0;function wd(r){var e=bo(yu,r),t=bo(Oo,r),n=xd(t,r),i=Pu(r.targets),s=Md(i,n),a=Fu(s,t),o=wl;return wl++,da(e,{id:o,children:[],animatables:i,animations:s,duration:a.duration,delay:a.delay,endDelay:a.endDelay})}var hn=[],zu=function(){var r;function e(){!r&&(!Sl()||!Qe.suspendWhenDocumentHidden)&&hn.length>0&&(r=requestAnimationFrame(t))}function t(i){for(var s=hn.length,a=0;a<s;){var o=hn[a];o.paused?(hn.splice(a,1),s--):(o.tick(i),a++)}r=a>0?requestAnimationFrame(t):void 0}function n(){Qe.suspendWhenDocumentHidden&&(Sl()?r=cancelAnimationFrame(r):(hn.forEach(function(i){return i._onDocumentVisibility()}),zu()))}return typeof document<"u"&&document.addEventListener("visibilitychange",n),e}();function Sl(){return!!document&&document.hidden}function Qe(r){r===void 0&&(r={});var e=0,t=0,n=0,i,s=0,a=null;function o(m){var b=window.Promise&&new Promise(function(_){return a=_});return m.finished=b,b}var l=wd(r);o(l);function c(){var m=l.direction;m!=="alternate"&&(l.direction=m!=="normal"?"normal":"reverse"),l.reversed=!l.reversed,i.forEach(function(b){return b.reversed=l.reversed})}function u(m){return l.reversed?l.duration-m:m}function h(){e=0,t=u(l.currentTime)*(1/Qe.speed)}function d(m,b){b&&b.seek(m-b.timelineOffset)}function p(m){if(l.reversePlayback)for(var _=s;_--;)d(m,i[_]);else for(var b=0;b<s;b++)d(m,i[b])}function g(m){for(var b=0,_=l.animations,y=_.length;b<y;){var C=_[b],L=C.animatable,F=C.tweens,V=F.length-1,k=F[V];V&&(k=ua(F,function($){return m<$.end})[0]||k);for(var R=_n(m-k.start-k.delay,0,k.duration)/k.duration,S=isNaN(R)?1:k.easing(R),T=k.to.strings,z=k.round,I=[],D=k.to.numbers.length,N=void 0,K=0;K<D;K++){var ce=void 0,G=k.to.numbers[K],j=k.from.numbers[K]||0;k.isPath?ce=md(k.value,S*G,k.isPathTargetInsideSVG):ce=j+S*(G-j),z&&(k.isColor&&K>2||(ce=Math.round(ce*z)/z)),I.push(ce)}var ee=T.length;if(!ee)N=I[0];else{N=T[0];for(var ie=0;ie<ee;ie++){T[ie];var me=T[ie+1],Ce=I[ie];isNaN(Ce)||(me?N+=Ce+me:N+=Ce+" ")}}Iu[C.type](L.target,C.property,N,L.transforms),C.currentValue=N,b++}}function v(m){l[m]&&!l.passThrough&&l[m](l)}function x(){l.remaining&&l.remaining!==!0&&l.remaining--}function f(m){var b=l.duration,_=l.delay,y=b-l.endDelay,C=u(m);l.progress=_n(C/b*100,0,100),l.reversePlayback=C<l.currentTime,i&&p(C),!l.began&&l.currentTime>0&&(l.began=!0,v("begin")),!l.loopBegan&&l.currentTime>0&&(l.loopBegan=!0,v("loopBegin")),C<=_&&l.currentTime!==0&&g(0),(C>=y&&l.currentTime!==b||!b)&&g(b),C>_&&C<y?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,v("changeBegin")),v("change"),g(C)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,v("changeComplete")),l.currentTime=_n(C,0,b),l.began&&v("update"),m>=b&&(t=0,x(),l.remaining?(e=n,v("loopComplete"),l.loopBegan=!1,l.direction==="alternate"&&c()):(l.paused=!0,l.completed||(l.completed=!0,v("loopComplete"),v("complete"),!l.passThrough&&"Promise"in window&&(a(),o(l)))))}return l.reset=function(){var m=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.loopBegan=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed=m==="reverse",l.remaining=l.loop,i=l.children,s=i.length;for(var b=s;b--;)l.children[b].reset();(l.reversed&&l.loop!==!0||m==="alternate"&&l.loop===1)&&l.remaining++,g(l.reversed?l.duration:0)},l._onDocumentVisibility=h,l.set=function(m,b){return Du(m,b),l},l.tick=function(m){n=m,e||(e=n),f((n+(t-e))*Qe.speed)},l.seek=function(m){f(u(m))},l.pause=function(){l.paused=!0,h()},l.play=function(){l.paused&&(l.completed&&l.reset(),l.paused=!1,hn.push(l),h(),zu())},l.reverse=function(){c(),l.completed=!l.reversed,h()},l.restart=function(){l.reset(),l.play()},l.remove=function(m){var b=Yo(m);Nu(b,l)},l.reset(),l.autoplay&&l.play(),l}function Tl(r,e){for(var t=e.length;t--;)Vo(r,e[t].animatable.target)&&e.splice(t,1)}function Nu(r,e){var t=e.animations,n=e.children;Tl(r,t);for(var i=n.length;i--;){var s=n[i],a=s.animations;Tl(r,a),!a.length&&!s.children.length&&n.splice(i,1)}!t.length&&!n.length&&e.pause()}function Sd(r){for(var e=Yo(r),t=hn.length;t--;){var n=hn[t];Nu(e,n)}}function Td(r,e){e===void 0&&(e={});var t=e.direction||"normal",n=e.easing?Uo(e.easing):null,i=e.grid,s=e.axis,a=e.from||0,o=a==="first",l=a==="center",c=a==="last",u=Ie.arr(r),h=parseFloat(u?r[0]:r),d=u?parseFloat(r[1]):0,p=Bn(u?r[1]:r)||0,g=e.start||0+(u?h:0),v=[],x=0;return function(f,m,b){if(o&&(a=0),l&&(a=(b-1)/2),c&&(a=b-1),!v.length){for(var _=0;_<b;_++){if(!i)v.push(Math.abs(a-_));else{var y=l?(i[0]-1)/2:a%i[0],C=l?(i[1]-1)/2:Math.floor(a/i[0]),L=_%i[0],F=Math.floor(_/i[0]),V=y-L,k=C-F,R=Math.sqrt(V*V+k*k);s==="x"&&(R=-V),s==="y"&&(R=-k),v.push(R)}x=Math.max.apply(Math,v)}n&&(v=v.map(function(T){return n(T/x)*x})),t==="reverse"&&(v=v.map(function(T){return s?T<0?T*-1:-T:Math.abs(x-T)}))}var S=u?(d-h)/x:h;return g+S*(Math.round(v[m]*100)/100)+p}}function Ed(r){r===void 0&&(r={});var e=Qe(r);return e.duration=0,e.add=function(t,n){var i=hn.indexOf(e),s=e.children;i>-1&&hn.splice(i,1);function a(d){d.passThrough=!0}for(var o=0;o<s.length;o++)a(s[o]);var l=da(t,bo(Oo,r));l.targets=l.targets||r.targets;var c=e.duration;l.autoplay=!1,l.direction=e.direction,l.timelineOffset=Ie.und(n)?c:jo(n,c),a(e),e.seek(l.timelineOffset);var u=Qe(l);a(u),s.push(u);var h=Fu(s,r);return e.delay=h.delay,e.endDelay=h.endDelay,e.duration=h.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e}Qe.version="3.2.1";Qe.speed=1;Qe.suspendWhenDocumentHidden=!0;Qe.running=hn;Qe.remove=Sd;Qe.get=qo;Qe.set=Du;Qe.convertPx=Go;Qe.path=pd;Qe.setDashoffset=dd;Qe.stagger=Td;Qe.timeline=Ed;Qe.easing=Uo;Qe.penner=wu;Qe.random=function(r,e){return Math.floor(Math.random()*(e-r+1))+r};function Ad(r){return{c:Q,l:Q,m:Q,d:Q}}function Cd(r){let e,t;return{c(){e=Y("img"),this.h()},l(n){e=Z(n,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){tr(e.src,t=r[21])||O(e,"src",t),O(e,"alt",""),O(e,"class","svelte-1v57rq0")},m(n,i){Be(n,e,i)},d(n){n&&W(e)}}}function Ld(r){return{c:Q,l:Q,m:Q,d:Q}}function Rd(r){return{c:Q,l:Q,m:Q,p:Q,d:Q}}function Pd(r){let e,t;return{c(){e=Y("img"),this.h()},l(n){e=Z(n,"IMG",{src:!0,draggable:!0,alt:!0,style:!0,class:!0}),this.h()},h(){tr(e.src,t=r[21])||O(e,"src",t),O(e,"draggable","false"),O(e,"alt","Home Background"),ei(e,"width","100%"),ei(e,"height","100%"),ei(e,"object-fit","cover"),O(e,"class","svelte-1v57rq0")},m(n,i){Be(n,e,i),r[11](e)},p:Q,d(n){n&&W(e),r[11](null)}}}function Id(r){return{c:Q,l:Q,m:Q,p:Q,d:Q}}function Dd(r){let e,t,n,i,s="",a,o,l,c,u,h="Евгения",d,p,g,v,x,f="Родина",m,b,_,y="художник, специалист в области иконописи и росписи храмов, Россия",C,L,F,V,k,R,S="scroll",T,z,I={ctx:r,current:null,token:null,hasCatch:!1,pending:Ld,then:Cd,catch:Ad,value:21};bn(qr("assets/imgs/scroll_arrow.png"),I);let D={ctx:r,current:null,token:null,hasCatch:!1,pending:Id,then:Pd,catch:Rd,value:21};return bn(qr("assets/imgs/home-back.jpg"),D),{c(){e=Y("div"),t=Y("div"),n=Y("div"),i=Y("div"),i.innerHTML=s,a=Re(),o=Y("div"),l=Y("h1"),c=Y("div"),u=Y("div"),u.textContent=h,d=Re(),p=Y("br"),g=Re(),v=Y("div"),x=Y("div"),x.textContent=f,m=Re(),b=Y("div"),_=Y("p"),_.textContent=y,C=Re(),L=Y("div"),F=Y("div"),V=Y("div"),I.block.c(),k=Re(),R=Y("div"),R.textContent=S,T=Re(),z=Y("div"),D.block.c(),this.h()},l(N){e=Z(N,"DIV",{id:!0,style:!0,class:!0});var K=pe(e);t=Z(K,"DIV",{class:!0});var ce=pe(t);n=Z(ce,"DIV",{class:!0});var G=pe(n);i=Z(G,"DIV",{class:!0,"data-svelte-h":!0}),Ye(i)!=="svelte-ws33f2"&&(i.innerHTML=s),a=Pe(G),o=Z(G,"DIV",{class:!0});var j=pe(o);l=Z(j,"H1",{class:!0});var ee=pe(l);c=Z(ee,"DIV",{class:!0});var ie=pe(c);u=Z(ie,"DIV",{class:!0,"data-svelte-h":!0}),Ye(u)!=="svelte-ljur9j"&&(u.textContent=h),d=Pe(ie),ie.forEach(W),p=Z(ee,"BR",{class:!0}),g=Pe(ee),v=Z(ee,"DIV",{class:!0});var me=pe(v);x=Z(me,"DIV",{class:!0,"data-svelte-h":!0}),Ye(x)!=="svelte-dx5kzw"&&(x.textContent=f),me.forEach(W),ee.forEach(W),m=Pe(j),b=Z(j,"DIV",{class:!0});var Ce=pe(b);_=Z(Ce,"P",{class:!0,"data-svelte-h":!0}),Ye(_)!=="svelte-1fi2rfr"&&(_.textContent=y),Ce.forEach(W),C=Pe(j),L=Z(j,"DIV",{class:!0});var $=pe(L);F=Z($,"DIV",{class:!0});var Me=pe(F);V=Z(Me,"DIV",{class:!0});var Se=pe(V);I.block.l(Se),Se.forEach(W),k=Pe(Me),R=Z(Me,"DIV",{class:!0,"data-svelte-h":!0}),Ye(R)!=="svelte-1abg4og"&&(R.textContent=S),Me.forEach(W),$.forEach(W),j.forEach(W),T=Pe(G),z=Z(G,"DIV",{class:!0});var xe=pe(z);D.block.l(xe),xe.forEach(W),G.forEach(W),ce.forEach(W),K.forEach(W),this.h()},h(){O(i,"class","flex-wrapper first svelte-1v57rq0"),O(u,"class","word svelte-1v57rq0"),O(c,"class","title-mask svelte-1v57rq0"),O(p,"class","svelte-1v57rq0"),O(x,"class","word svelte-1v57rq0"),O(v,"class","title-mask svelte-1v57rq0"),O(l,"class","title svelte-1v57rq0"),O(_,"class","paragraph svelte-1v57rq0"),O(b,"class","occupation mask svelte-1v57rq0"),O(V,"class","mask svelte-1v57rq0"),O(R,"class","svelte-1v57rq0"),O(F,"class","action svelte-1v57rq0"),O(L,"class","wrapper action-mask svelte-1v57rq0"),O(o,"class","flex-wrapper second svelte-1v57rq0"),O(z,"class","parallax-wrapper home-back svelte-1v57rq0"),O(n,"class","flex svelte-1v57rq0"),O(t,"class","content-wrapper svelte-1v57rq0"),O(e,"id","content-container"),ei(e,"padding-top","23vh"),O(e,"class","svelte-1v57rq0")},m(N,K){Be(N,e,K),B(e,t),B(t,n),B(n,i),B(n,a),B(n,o),B(o,l),B(l,c),B(c,u),r[7](u),B(c,d),B(l,p),B(l,g),B(l,v),B(v,x),r[8](x),B(o,m),B(o,b),B(b,_),r[9](_),B(o,C),B(o,L),B(L,F),B(F,V),I.block.m(V,I.anchor=null),I.mount=()=>V,I.anchor=null,B(F,k),B(F,R),r[10](F),B(n,T),B(n,z),D.block.m(z,D.anchor=null),D.mount=()=>z,D.anchor=null,r[12](z),r[13](e)},p(N,[K]){r=N,Wr(D,r,K)},i:Q,o:Q,d(N){N&&W(e),r[7](null),r[8](null),r[9](null),I.block.d(),I.token=null,I=null,r[10](null),D.block.d(),D.token=null,D=null,r[12](null),r[13](null)}}}function Fd(r,e,t){let n,i;Qt(r,$s,F=>t(14,n=F)),Qt(r,xo,F=>t(15,i=F));let s,a,o,l,c,u,h,d,p,g,v;ar(async()=>{await or,Gr(xo,i=s,i),n.addOffset({element:a,speedY:.8}),x()});function x(){const F=[{strokeDashoffset:"0"}];d.animate(F,{duration:1e3,delay:500,easing:"cubic-bezier(.72,.3,.25,1)",fill:"forwards"}),p.animate(F,{duration:300,delay:1500,easing:"cubic-bezier(.47,.41,.26,1)",fill:"forwards"}),g.animate(F,{duration:200,delay:1800,easing:"cubic-bezier(.47,.41,.26,1)",fill:"forwards"}),v.animate(F,{duration:1e3,delay:2e3,easing:"cubic-bezier(.47,.41,.26,1)",fill:"forwards"}),Object.assign(a.style,{height:"0",transform:"scale(1.3)"}),t(2,o.style.transform="translateY(80%) scale(1.4)",o),Qe({targets:a,height:"100%",scale:1,easing:"cubicBezier(0.165, 0.84, 0.44, 1)",duration:1500,delay:500,complete:()=>{t(1,a.style.boxShadow="3px 9px 18px rgba(0, 0, 0, 0.2)",a)}}),Qe({targets:o,translateY:"0",scale:1,easing:"cubicBezier(0.165, 0.84, 0.44, 1)",duration:1500,delay:500});const V=[l,c,u,h];V.forEach(k=>{k.style.transform="translateY(130%) rotate(10deg)"}),Qe({targets:V,rotate:"0",translateY:"0%",easing:"cubicBezier(0.165, 0.84, 0.44, 1)",duration:900,delay:Qe.stagger(80,{start:500})})}function f(F){ht[F?"unshift":"push"](()=>{l=F,t(3,l)})}function m(F){ht[F?"unshift":"push"](()=>{c=F,t(4,c)})}function b(F){ht[F?"unshift":"push"](()=>{u=F,t(5,u)})}function _(F){ht[F?"unshift":"push"](()=>{h=F,t(6,h)})}function y(F){ht[F?"unshift":"push"](()=>{o=F,t(2,o)})}function C(F){ht[F?"unshift":"push"](()=>{a=F,t(1,a)})}function L(F){ht[F?"unshift":"push"](()=>{s=F,t(0,s)})}return[s,a,o,l,c,u,h,f,m,b,_,y,C,L]}class zd extends li{constructor(e){super(),ci(this,e,Fd,Dd,Vn,{})}}function Aa(r,e,t,n){return new(t||(t=Promise))(function(i,s){function a(c){try{l(n.next(c))}catch(u){s(u)}}function o(c){try{l(n.throw(c))}catch(u){s(u)}}function l(c){var u;c.done?i(c.value):(u=c.value,u instanceof t?u:new t(function(h){h(u)})).then(a,o)}l((n=n.apply(r,e||[])).next())})}const Nd=["geforce 320m","geforce 8600","geforce 8600m gt","geforce 8800 gs","geforce 8800 gt","geforce 9400","geforce 9400m g","geforce 9400m","geforce 9600m gt","geforce 9600m","geforce fx go5200","geforce gt 120","geforce gt 130","geforce gt 330m","geforce gtx 285","google swiftshader","intel g41","intel g45","intel gma 4500mhd","intel gma x3100","intel hd 3000","intel q45","legacy","mali-2","mali-3","mali-4","quadro fx 1500","quadro fx 4","quadro fx 5","radeon hd 2400","radeon hd 2600","radeon hd 4670","radeon hd 4850","radeon hd 4870","radeon hd 5670","radeon hd 5750","radeon hd 6290","radeon hd 6300","radeon hd 6310","radeon hd 6320","radeon hd 6490m","radeon hd 6630m","radeon hd 6750m","radeon hd 6770m","radeon hd 6970m","sgx 543","sgx543"];function El(r){return r=r.toLowerCase().replace(/^angle ?\((.+)\)*$/,"$1").replace(/\s(\d{1,2}gb|direct3d.+$)|\(r\)| \([^)]+\)$/g,"").replace(/(?:vulkan|opengl) \d+\.\d+(?:\.\d+)?(?: \((.*)\))?/,"$1")}const ku=typeof window>"u",Qn=(()=>{if(ku)return;const{userAgent:r,platform:e,maxTouchPoints:t}=window.navigator,n=/(iphone|ipod|ipad)/i.test(r),i=e==="iPad"||e==="MacIntel"&&t>0&&!window.MSStream;return{isIpad:i,isMobile:/android/i.test(r)||n||i,isSafari12:/Version\/12.+Safari/.test(r)}})();function kd(r,e,t){if(!t)return[e];const n=function(c){const u=`
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
  `,d=c.createShader(35633),p=c.createShader(35632),g=c.createProgram();if(!(p&&d&&g))return;c.shaderSource(d,u),c.shaderSource(p,h),c.compileShader(d),c.compileShader(p),c.attachShader(g,d),c.attachShader(g,p),c.linkProgram(g),c.detachShader(g,d),c.detachShader(g,p),c.deleteShader(d),c.deleteShader(p),c.useProgram(g);const v=c.createBuffer();c.bindBuffer(34962,v),c.bufferData(34962,new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),35044);const x=c.getAttribLocation(g,"aPosition");c.vertexAttribPointer(x,3,5126,!1,0,0),c.enableVertexAttribArray(x),c.clearColor(1,1,1,1),c.clear(16384),c.viewport(0,0,1,1),c.drawArrays(4,0,3);const f=new Uint8Array(4);return c.readPixels(0,0,1,1,6408,5121,f),c.deleteProgram(g),c.deleteBuffer(v),f.join("")}(r),i="801621810",s="8016218135",a="80162181161",o=Qn?.isIpad?[["a7",a,12],["a8",s,15],["a8x",s,15],["a9",s,15],["a9x",s,15],["a10",s,15],["a10x",s,15],["a12",i,15],["a12x",i,15],["a12z",i,15],["a14",i,15],["m1",i,15]]:[["a7",a,12],["a8",s,12],["a9",s,15],["a10",s,15],["a11",i,15],["a12",i,15],["a13",i,15],["a14",i,15]];let l;return n==="80162181255"?l=o.filter(([,,c])=>c>=14):(l=o.filter(([,c])=>c===n),l.length||(l=o)),l.map(([c])=>`apple ${c} gpu`)}const Ca=[],Al=[];function Bd(r,e){if(r===e)return 0;const t=r;r.length>e.length&&(r=e,e=t);let n=r.length,i=e.length;for(;n>0&&r.charCodeAt(~-n)===e.charCodeAt(~-i);)n--,i--;let s,a=0;for(;a<n&&r.charCodeAt(a)===e.charCodeAt(a);)a++;if(n-=a,i-=a,n===0)return i;let o,l,c=0,u=0,h=0;for(;u<n;)Al[u]=r.charCodeAt(a+u),Ca[u]=++u;for(;h<i;)for(s=e.charCodeAt(a+h),o=h++,c=h,u=0;u<n;u++)l=s===Al[u]?o:o+1,o=Ca[u],c=Ca[u]=o>c?l>c?c+1:l:l>o?o+1:l;return c}function Od(r){return r!=null}class Cl extends Error{constructor(e){super(e),Object.setPrototypeOf(this,new.target.prototype)}}const Ll=({mobileTiers:r=[0,15,30,60],desktopTiers:e=[0,15,30,60],override:t={},glContext:n,failIfMajorPerformanceCaveat:i=!1,benchmarksURL:s="https://unpkg.com/detect-gpu@4.0.50/dist/benchmarks"}={})=>Aa(void 0,void 0,void 0,function*(){const a={};if(ku)return{tier:0,type:"SSR"};const{isIpad:o=!!Qn?.isIpad,isMobile:l=!!Qn?.isMobile,screenSize:c=window.screen,loadBenchmarks:u=y=>Aa(void 0,void 0,void 0,function*(){const C=yield fetch(`${s}/${y}`).then(L=>L.json());if(parseInt(C.shift().split(".")[0],10)<4)throw new Cl("Detect GPU benchmark data is out of date. Please update to version 4x");return C})}=t;let{renderer:h}=t;const d=(y,C,L,F,V)=>({device:V,fps:F,gpu:L,isMobile:l,tier:y,type:C});let p,g="";if(h)h=El(h),p=[h];else{const y=n||function(L,F=!1){const V={alpha:!1,antialias:!1,depth:!1,failIfMajorPerformanceCaveat:F,powerPreference:"high-performance",stencil:!1};L&&delete V.powerPreference;const k=window.document.createElement("canvas"),R=k.getContext("webgl",V)||k.getContext("experimental-webgl",V);return R??void 0}(Qn?.isSafari12,i);if(!y)return d(0,"WEBGL_UNSUPPORTED");const C=y.getExtension("WEBGL_debug_renderer_info");if(C&&(h=y.getParameter(C.UNMASKED_RENDERER_WEBGL)),!h)return d(1,"FALLBACK");g=h,h=El(h),p=function(L,F,V){return F==="apple gpu"?kd(L,F,V):[F]}(y,h,l)}const v=(yield Promise.all(p.map(function(y){var C;return Aa(this,void 0,void 0,function*(){const L=(ee=>{const ie=l?["adreno","apple","mali-t","mali","nvidia","powervr"]:["intel","apple","amd","radeon","nvidia","geforce"];for(const me of ie)if(ee.includes(me))return me})(y);if(!L)return;const F=`${l?"m":"d"}-${L}${o?"-ipad":""}.json`,V=a[F]=(C=a[F])!==null&&C!==void 0?C:u(F);let k;try{k=yield V}catch(ee){if(ee instanceof Cl)throw ee;return}const R=function(ee){var ie;const me=(ee=ee.replace(/\([^)]+\)/,"")).match(/\d+/)||ee.match(/(\W|^)([A-Za-z]{1,3})(\W|$)/g);return(ie=me?.join("").replace(/\W|amd/g,""))!==null&&ie!==void 0?ie:""}(y);let S=k.filter(([,ee])=>ee===R);S.length||(S=k.filter(([ee])=>ee.includes(y)));const T=S.length;if(T===0)return;let z,[I,,,D]=T>1?S.map(ee=>[ee,Bd(y,ee[0])]).sort(([,ee],[,ie])=>ee-ie)[0][0]:S[0],N=Number.MAX_VALUE;const{devicePixelRatio:K}=window,ce=c.width*K*c.height*K;for(const ee of D){const[ie,me]=ee,Ce=ie*me,$=Math.abs(ce-Ce);$<N&&(N=$,z=ee)}if(!z)return;const[,,G,j]=z;return[N,G,I,j]})}))).filter(Od).sort(([y=Number.MAX_VALUE,C],[L=Number.MAX_VALUE,F])=>y===L?C-F:y-L);if(!v.length){const y=Nd.find(C=>h.includes(C));return y?d(0,"BLOCKLISTED",y):d(1,"FALLBACK",`${h} (${g})`)}const[,x,f,m]=v[0];if(x===-1)return d(0,"BLOCKLISTED",f,x,m);const b=l?r:e;let _=0;for(let y=0;y<b.length;y++)x>=b[y]&&(_=y);return d(_,"BENCHMARK",f,x,m)});function Ud(r){return--r*r*r*r*r+1}function Rl(r,{delay:e=0,duration:t=400,easing:n=Wh}={}){const i=+getComputedStyle(r).opacity;return{delay:e,duration:t,easing:n,css:s=>`opacity: ${s*i}`}}/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zo="136",Vd=0,Pl=1,Hd=2,Bu=1,Gd=2,Dr=3,jr=0,vt=1,nr=2,Ou=1,ti=0,Ur=1,Il=2,Dl=3,Fl=4,Wd=5,Yi=100,qd=101,jd=102,zl=103,Nl=104,Xd=200,Yd=201,Zd=202,Jd=203,Uu=204,Vu=205,$d=206,Qd=207,Kd=208,ef=209,tf=210,nf=0,rf=1,sf=2,wo=3,af=4,of=5,lf=6,cf=7,fa=0,uf=1,hf=2,ni=0,df=1,ff=2,pf=3,mf=4,gf=5,Hu=300,es=301,ts=302,So=303,To=304,pa=306,Jo=307,Eo=1e3,$t=1001,Ao=1002,xt=1003,kl=1004,Bl=1005,kt=1006,vf=1007,ma=1008,On=1009,xf=1010,_f=1011,Xr=1012,yf=1013,Xs=1014,Kn=1015,Mi=1016,bf=1017,Mf=1018,wf=1019,Ki=1020,Sf=1021,wi=1022,St=1023,Tf=1024,Ef=1025,Si=1026,ir=1027,Af=1028,Cf=1029,Lf=1030,Rf=1031,Pf=1032,If=1033,Ol=33776,Ul=33777,Vl=33778,Hl=33779,Gl=35840,Wl=35841,ql=35842,jl=35843,Df=36196,Xl=37492,Yl=37496,Ff=37808,zf=37809,Nf=37810,kf=37811,Bf=37812,Of=37813,Uf=37814,Vf=37815,Hf=37816,Gf=37817,Wf=37818,qf=37819,jf=37820,Xf=37821,Yf=36492,Zf=37840,Jf=37841,$f=37842,Qf=37843,Kf=37844,ep=37845,tp=37846,np=37847,ip=37848,rp=37849,sp=37850,ap=37851,op=37852,lp=37853,cp=2200,up=2201,hp=2202,ea=2300,ta=2301,La=2302,Ji=2400,$i=2401,na=2402,$o=2500,Gu=2501,dp=0,dn=3e3,lr=3001,fp=3200,pp=3201,cr=0,mp=1,Ra=7680,gp=519,Yr=35044,ia=35048,Zl="300 es";class Ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const At=[];for(let r=0;r<256;r++)At[r]=(r<16?"0":"")+r.toString(16);const Pa=Math.PI/180,Co=180/Math.PI;function Mn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[r&255]+At[r>>8&255]+At[r>>16&255]+At[r>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toUpperCase()}function Jt(r,e,t){return Math.max(e,Math.min(t,r))}function vp(r,e){return(r%e+e)%e}function Ia(r,e,t){return(1-t)*r+t*e}function Jl(r){return(r&r-1)===0&&r!==0}function xp(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}class he{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}he.prototype.isVector2=!0;class Ct{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],v=i[0],x=i[3],f=i[6],m=i[1],b=i[4],_=i[7],y=i[2],C=i[5],L=i[8];return s[0]=a*v+o*m+l*y,s[3]=a*x+o*b+l*C,s[6]=a*f+o*_+l*L,s[1]=c*v+u*m+h*y,s[4]=c*x+u*b+h*C,s[7]=c*f+u*_+h*L,s[2]=d*v+p*m+g*y,s[5]=d*x+p*b+g*C,s[8]=d*f+p*_+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,p=c*s-a*l,g=t*h+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(i*c-u*n)*v,e[2]=(o*n-i*a)*v,e[3]=d*v,e[4]=(u*t-i*l)*v,e[5]=(i*s-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],a=i[3],o=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*s+n*l,i[3]=t*a+n*c,i[6]=t*o+n*u,i[1]=-n*s+t*l,i[4]=-n*a+t*c,i[7]=-n*o+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}Ct.prototype.isMatrix3=!0;function Wu(r){if(r.length===0)return-1/0;let e=r[0];for(let t=1,n=r.length;t<n;++t)r[t]>e&&(e=r[t]);return e}function ga(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}let Li;class ur{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Li===void 0&&(Li=ga("canvas")),Li.width=e.width,Li.height=e.height;const n=Li.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Li}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let _p=0;class Et extends Ti{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,n=$t,i=$t,s=kt,a=ma,o=St,l=On,c=1,u=dn){super(),Object.defineProperty(this,"id",{value:_p++}),this.uuid=Mn(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=Mn()),!t&&e.images[i.uuid]===void 0){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Da(i[a].image)):s.push(Da(i[a]))}else s=Da(i);e.images[i.uuid]={uuid:i.uuid,url:s}}n.image=i.uuid}return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Eo:e.x=e.x-Math.floor(e.x);break;case $t:e.x=e.x<0?0:1;break;case Ao:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Eo:e.y=e.y-Math.floor(e.y);break;case $t:e.y=e.y<0?0:1;break;case Ao:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}Et.DEFAULT_IMAGE=void 0;Et.DEFAULT_MAPPING=Hu;Et.prototype.isTexture=!0;function Da(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ur.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class ot{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],v=l[2],x=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-x)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+x)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,_=(p+1)/2,y=(f+1)/2,C=(u+d)/4,L=(h+v)/4,F=(g+x)/4;return b>_&&b>y?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=C/n,s=L/n):_>y?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=C/i,s=F/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=L/s,i=F/s),this.set(n,i,s,t),this}let m=Math.sqrt((x-g)*(x-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(m)<.001&&(m=1),this.x=(x-g)/m,this.y=(h-v)/m,this.z=(d-u)/m,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}ot.prototype.isVector4=!0;class sn extends Ti{constructor(e,t,n={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t),this.texture=new Et(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:kt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image={...this.texture.image},this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}sn.prototype.isWebGLRenderTarget=!0;class yp extends sn{constructor(e,t,n){super(e,t);const i=this.texture;this.texture=[];for(let s=0;s<n;s++)this.texture[s]=i.clone()}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.texture.length;i<s;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}}yp.prototype.isWebGLMultipleRenderTargets=!0;class Qo extends sn{constructor(e,t,n={}){super(e,t,n),this.samples=4,this.ignoreDepthForMultisampleCopy=n.ignoreDepth!==void 0?n.ignoreDepth:!0,this.useRenderToTexture=n.useRenderToTexture!==void 0?n.useRenderToTexture:!1,this.useRenderbuffer=this.useRenderToTexture===!1}copy(e){return super.copy.call(this,e),this.samples=e.samples,this.useRenderToTexture=e.useRenderToTexture,this.useRenderbuffer=e.useRenderbuffer,this}}Qo.prototype.isWebGLMultisampleRenderTarget=!0;class Wt{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[a+0],p=s[a+1],g=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==d||c!==p||u!==g){let x=1-o;const f=l*d+c*p+u*g+h*v,m=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const y=Math.sqrt(b),C=Math.atan2(y,f*m);x=Math.sin(x*C)/y,o=Math.sin(o*C)/y}const _=o*m;if(l=l*x+d*_,c=c*x+p*_,u=u*x+g*_,h=h*x+v*_,x===1-o){const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-o*p,e[t+2]=c*g+u*p+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),d=l(n/2),p=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Wt.prototype.isQuaternion=!0;class P{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion($l.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($l.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-s*i,h=l*i+s*n-a*t,d=-s*t-a*n-o*i;return this.x=c*l+d*-s+u*-o-h*-a,this.y=u*l+d*-a+h*-s-c*-o,this.z=h*l+d*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fa.copy(this).projectOnVector(e),this.sub(Fa)}reflect(e){return this.sub(Fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}P.prototype.isVector3=!0;const Fa=new P,$l=new Wt;class fn{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],d=e[l+2];u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>a&&(a=h),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),d=e.getZ(l);u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>a&&(a=h),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),za.copy(t.boundingBox),za.applyMatrix4(e.matrixWorld),this.union(za));const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,wr),wr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sr),hs.subVectors(this.max,Sr),Ri.subVectors(e.a,Sr),Pi.subVectors(e.b,Sr),Ii.subVectors(e.c,Sr),Gn.subVectors(Pi,Ri),Wn.subVectors(Ii,Pi),fi.subVectors(Ri,Ii);let t=[0,-Gn.z,Gn.y,0,-Wn.z,Wn.y,0,-fi.z,fi.y,Gn.z,0,-Gn.x,Wn.z,0,-Wn.x,fi.z,0,-fi.x,-Gn.y,Gn.x,0,-Wn.y,Wn.x,0,-fi.y,fi.x,0];return!Na(t,Ri,Pi,Ii,hs)||(t=[1,0,0,0,1,0,0,0,1],!Na(t,Ri,Pi,Ii,hs))?!1:(ds.crossVectors(Gn,Wn),t=[ds.x,ds.y,ds.z],Na(t,Ri,Pi,Ii,hs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return wr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(wr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}fn.prototype.isBox3=!0;const Cn=[new P,new P,new P,new P,new P,new P,new P,new P],wr=new P,za=new fn,Ri=new P,Pi=new P,Ii=new P,Gn=new P,Wn=new P,fi=new P,Sr=new P,hs=new P,ds=new P,pi=new P;function Na(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){pi.fromArray(r,s);const o=i.x*Math.abs(pi.x)+i.y*Math.abs(pi.y)+i.z*Math.abs(pi.z),l=e.dot(pi),c=t.dot(pi),u=n.dot(pi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const bp=new fn,Ql=new P,fs=new P,ka=new P;class hr{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){ka.subVectors(e,this.center);const t=ka.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(ka.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?fs.set(0,0,1).multiplyScalar(e.radius):fs.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Ql.copy(e.center).add(fs)),this.expandByPoint(Ql.copy(e.center).sub(fs)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new P,Ba=new P,ps=new P,qn=new P,Oa=new P,ms=new P,Ua=new P;class dr{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ln.copy(this.direction).multiplyScalar(t).add(this.origin),Ln.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ba.copy(e).add(t).multiplyScalar(.5),ps.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(Ba);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ps),o=qn.dot(this.direction),l=-qn.dot(ps),c=qn.lengthSq(),u=Math.abs(1-a*a);let h,d,p,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(ps).multiplyScalar(d).add(Ba),p}intersectSphere(e,t){Ln.subVectors(e.center,this.origin);const n=Ln.dot(this.direction),i=Ln.dot(Ln)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>i||((s>n||n!==n)&&(n=s),(a<i||i!==i)&&(i=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,t,n,i,s){Oa.subVectors(t,e),ms.subVectors(n,e),Ua.crossVectors(Oa,ms);let a=this.direction.dot(Ua),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qn.subVectors(this.origin,e);const l=o*this.direction.dot(ms.crossVectors(qn,ms));if(l<0)return null;const c=o*this.direction.dot(Oa.cross(qn));if(c<0||l+c>a)return null;const u=-o*qn.dot(Ua);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ze{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,a,o,l,c,u,h,d,p,g,v,x){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Di.setFromMatrixColumn(e,0).length(),s=1/Di.setFromMatrixColumn(e,1).length(),a=1/Di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,v=c*h;t[0]=d+v*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,v=c*h;t[0]=d-v*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-d*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-v*h}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mp,e,wp)}lookAt(e,t,n){const i=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),jn.crossVectors(n,Xt),jn.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),jn.crossVectors(n,Xt)),jn.normalize(),gs.crossVectors(Xt,jn),i[0]=jn.x,i[4]=gs.x,i[8]=Xt.x,i[1]=jn.y,i[5]=gs.y,i[9]=Xt.y,i[2]=jn.z,i[6]=gs.z,i[10]=Xt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],v=n[6],x=n[10],f=n[14],m=n[3],b=n[7],_=n[11],y=n[15],C=i[0],L=i[4],F=i[8],V=i[12],k=i[1],R=i[5],S=i[9],T=i[13],z=i[2],I=i[6],D=i[10],N=i[14],K=i[3],ce=i[7],G=i[11],j=i[15];return s[0]=a*C+o*k+l*z+c*K,s[4]=a*L+o*R+l*I+c*ce,s[8]=a*F+o*S+l*D+c*G,s[12]=a*V+o*T+l*N+c*j,s[1]=u*C+h*k+d*z+p*K,s[5]=u*L+h*R+d*I+p*ce,s[9]=u*F+h*S+d*D+p*G,s[13]=u*V+h*T+d*N+p*j,s[2]=g*C+v*k+x*z+f*K,s[6]=g*L+v*R+x*I+f*ce,s[10]=g*F+v*S+x*D+f*G,s[14]=g*V+v*T+x*N+f*j,s[3]=m*C+b*k+_*z+y*K,s[7]=m*L+b*R+_*I+y*ce,s[11]=m*F+b*S+_*D+y*G,s[15]=m*V+b*T+_*N+y*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],v=e[7],x=e[11],f=e[15];return g*(+s*l*h-i*c*h-s*o*d+n*c*d+i*o*p-n*l*p)+v*(+t*l*p-t*c*d+s*a*d-i*a*p+i*c*u-s*l*u)+x*(+t*c*h-t*o*p-s*a*h+n*a*p+s*o*u-n*c*u)+f*(-i*o*u-t*l*h+t*o*d+i*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],v=e[13],x=e[14],f=e[15],m=h*x*c-v*d*c+v*l*p-o*x*p-h*l*f+o*d*f,b=g*d*c-u*x*c-g*l*p+a*x*p+u*l*f-a*d*f,_=u*v*c-g*h*c+g*o*p-a*v*p-u*o*f+a*h*f,y=g*h*l-u*v*l-g*o*d+a*v*d+u*o*x-a*h*x,C=t*m+n*b+i*_+s*y;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return e[0]=m*L,e[1]=(v*d*s-h*x*s-v*i*p+n*x*p+h*i*f-n*d*f)*L,e[2]=(o*x*s-v*l*s+v*i*c-n*x*c-o*i*f+n*l*f)*L,e[3]=(h*l*s-o*d*s-h*i*c+n*d*c+o*i*p-n*l*p)*L,e[4]=b*L,e[5]=(u*x*s-g*d*s+g*i*p-t*x*p-u*i*f+t*d*f)*L,e[6]=(g*l*s-a*x*s-g*i*c+t*x*c+a*i*f-t*l*f)*L,e[7]=(a*d*s-u*l*s+u*i*c-t*d*c-a*i*p+t*l*p)*L,e[8]=_*L,e[9]=(g*h*s-u*v*s-g*n*p+t*v*p+u*n*f-t*h*f)*L,e[10]=(a*v*s-g*o*s+g*n*c-t*v*c-a*n*f+t*o*f)*L,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*p-t*o*p)*L,e[12]=y*L,e[13]=(u*v*i-g*h*i+g*n*d-t*v*d-u*n*x+t*h*x)*L,e[14]=(g*o*i-a*v*i-g*n*l+t*v*l+a*n*x-t*o*x)*L,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*d+t*o*d)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,p=s*u,g=s*h,v=a*u,x=a*h,f=o*h,m=l*c,b=l*u,_=l*h,y=n.x,C=n.y,L=n.z;return i[0]=(1-(v+f))*y,i[1]=(p+_)*y,i[2]=(g-b)*y,i[3]=0,i[4]=(p-_)*C,i[5]=(1-(d+f))*C,i[6]=(x+m)*C,i[7]=0,i[8]=(g+b)*L,i[9]=(x-m)*L,i[10]=(1-(d+v))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Di.set(i[0],i[1],i[2]).length();const a=Di.set(i[4],i[5],i[6]).length(),o=Di.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ln.copy(this);const c=1/s,u=1/a,h=1/o;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=u,ln.elements[5]*=u,ln.elements[6]*=u,ln.elements[8]*=h,ln.elements[9]*=h,ln.elements[10]*=h,t.setFromRotationMatrix(ln),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(a+s)/(a-s),p=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-s),h=(t+e)*l,d=(n+i)*c,p=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}ze.prototype.isMatrix4=!0;const Di=new P,ln=new ze,Mp=new P(0,0,0),wp=new P(1,1,1),jn=new P,gs=new P,Xt=new P,Kl=new ze,ec=new Wt;class fr{constructor(e=0,t=0,n=0,i=fr.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Kl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ec.setFromEuler(this),this.setFromQuaternion(ec,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new P(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}fr.prototype.isEuler=!0;fr.DefaultOrder="XYZ";fr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class qu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sp=0;const tc=new P,Fi=new Wt,Rn=new ze,vs=new P,Tr=new P,Tp=new P,Ep=new Wt,nc=new P(1,0,0),ic=new P(0,1,0),rc=new P(0,0,1),Ap={type:"added"},sc={type:"removed"};class rt extends Ti{constructor(){super(),Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rt.DefaultUp.clone();const e=new P,t=new fr,n=new Wt,i=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ze},normalMatrix:{value:new Ct}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=rt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new qu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis(nc,e)}rotateY(e){return this.rotateOnAxis(ic,e)}rotateZ(e){return this.rotateOnAxis(rc,e)}translateOnAxis(e,t){return tc.copy(e).applyQuaternion(this.quaternion),this.position.add(tc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nc,e)}translateY(e){return this.translateOnAxis(ic,e)}translateZ(e){return this.translateOnAxis(rc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vs.copy(e):vs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(Tr,vs,this.up):Rn.lookAt(vs,Tr,this.up),this.quaternion.setFromRotationMatrix(Rn),i&&(Rn.extractRotation(i.matrixWorld),Fi.setFromRotationMatrix(Rn),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ap)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(sc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,e,Tp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,Ep,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}rt.DefaultUp=new P(0,1,0);rt.DefaultMatrixAutoUpdate=!0;rt.prototype.isObject3D=!0;const cn=new P,Pn=new P,Va=new P,In=new P,zi=new P,Ni=new P,ac=new P,Ha=new P,Ga=new P,Wa=new P;class _t{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),cn.subVectors(e,t),i.cross(cn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){cn.subVectors(i,t),Pn.subVectors(n,t),Va.subVectors(e,t);const a=cn.dot(cn),o=cn.dot(Pn),l=cn.dot(Va),c=Pn.dot(Pn),u=Pn.dot(Va),h=a*c-o*o;if(h===0)return s.set(-2,-1,-1);const d=1/h,p=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,In),In.x>=0&&In.y>=0&&In.x+In.y<=1}static getUV(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,In),l.set(0,0),l.addScaledVector(s,In.x),l.addScaledVector(a,In.y),l.addScaledVector(o,In.z),l}static isFrontFacing(e,t,n,i){return cn.subVectors(n,t),Pn.subVectors(e,t),cn.cross(Pn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),cn.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _t.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return _t.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return _t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;zi.subVectors(i,n),Ni.subVectors(s,n),Ha.subVectors(e,n);const l=zi.dot(Ha),c=Ni.dot(Ha);if(l<=0&&c<=0)return t.copy(n);Ga.subVectors(e,i);const u=zi.dot(Ga),h=Ni.dot(Ga);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(zi,a);Wa.subVectors(e,s);const p=zi.dot(Wa),g=Ni.dot(Wa);if(g>=0&&p<=g)return t.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ni,o);const x=u*g-p*h;if(x<=0&&h-u>=0&&p-g>=0)return ac.subVectors(s,i),o=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector(ac,o);const f=1/(x+v+d);return a=v*f,o=d*f,t.copy(n).addScaledVector(zi,a).addScaledVector(Ni,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Cp=0;class Dt extends Ti{constructor(){super(),Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Mn(),this.name="",this.type="Material",this.fog=!0,this.blending=Ur,this.side=jr,this.vertexColors=!1,this.opacity=1,this.format=St,this.transparent=!1,this.blendSrc=Uu,this.blendDst=Vu,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ra,this.stencilZFail=Ra,this.stencilZPass=Ra,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Ou;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ur&&(n.blending=this.blending),this.side!==jr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.format!==St&&(n.format=this.format),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.format=e.format,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}Dt.prototype.isMaterial=!0;const ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},un={h:0,s:0,l:0},xs={h:0,s:0,l:0};function qa(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function ja(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Xa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}class De{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=vp(e,1),t=Jt(t,0,1),n=Jt(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,s=2*n-i;this.r=qa(s,i,e+1/3),this.g=qa(s,i,e),this.b=qa(s,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i;const s=n[1],a=n[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const o=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(o,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],s=i.length;if(s===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=ju[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ja(e.r),this.g=ja(e.g),this.b=ja(e.b),this}copyLinearToSRGB(e){return this.r=Xa(e.r),this.g=Xa(e.g),this.b=Xa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,n=this.g,i=this.b,s=Math.max(t,n,i),a=Math.min(t,n,i);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const u=s-a;switch(l=c<=.5?u/(s+a):u/(2-s-a),s){case t:o=(n-i)/u+(n<i?6:0);break;case n:o=(i-t)/u+2;break;case i:o=(t-n)/u+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(un),un.h+=e,un.s+=t,un.l+=n,this.setHSL(un.h,un.s,un.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(un),e.getHSL(xs);const n=Ia(un.h,xs.h,t),i=Ia(un.s,xs.s,t),s=Ia(un.l,xs.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}De.NAMES=ju;De.prototype.isColor=!0;De.prototype.r=1;De.prototype.g=1;De.prototype.b=1;class Ko extends Dt{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Ko.prototype.isMeshBasicMaterial=!0;const lt=new P,_s=new he;class yt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Yr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new De),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new he),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new P),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new ot),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_s.fromBufferAttribute(this,t),_s.applyMatrix3(e),this.setXY(t,_s.x,_s.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lt.x=this.getX(t),lt.y=this.getY(t),lt.z=this.getZ(t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.x=this.getX(t),lt.y=this.getY(t),lt.z=this.getZ(t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.x=this.getX(t),lt.y=this.getY(t),lt.z=this.getZ(t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}yt.prototype.isBufferAttribute=!0;class Xu extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yu extends yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Lp extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}Lp.prototype.isFloat16BufferAttribute=!0;class Tt extends yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Rp=0;const Kt=new ze,Ya=new rt,ki=new P,Yt=new fn,Er=new fn,bt=new P;class ut extends Ti{constructor(){super(),Object.defineProperty(this,"id",{value:Rp++}),this.uuid=Mn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wu(e)>65535?Yu:Xu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ct().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return Ya.lookAt(e),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Yt.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Er.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(Yt.min,Er.min),Yt.expandByPoint(bt),bt.addVectors(Yt.max,Er.max),Yt.expandByPoint(bt)):(Yt.expandByPoint(Er.min),Yt.expandByPoint(Er.max))}Yt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)bt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(bt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)bt.fromBufferAttribute(o,c),l&&(ki.fromBufferAttribute(e,c),bt.add(ki)),i=Math.max(i,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new yt(new Float32Array(4*o),4));const l=t.tangent.array,c=[],u=[];for(let k=0;k<o;k++)c[k]=new P,u[k]=new P;const h=new P,d=new P,p=new P,g=new he,v=new he,x=new he,f=new P,m=new P;function b(k,R,S){h.fromArray(i,k*3),d.fromArray(i,R*3),p.fromArray(i,S*3),g.fromArray(a,k*2),v.fromArray(a,R*2),x.fromArray(a,S*2),d.sub(h),p.sub(h),v.sub(g),x.sub(g);const T=1/(v.x*x.y-x.x*v.y);isFinite(T)&&(f.copy(d).multiplyScalar(x.y).addScaledVector(p,-v.y).multiplyScalar(T),m.copy(p).multiplyScalar(v.x).addScaledVector(d,-x.x).multiplyScalar(T),c[k].add(f),c[R].add(f),c[S].add(f),u[k].add(m),u[R].add(m),u[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let k=0,R=_.length;k<R;++k){const S=_[k],T=S.start,z=S.count;for(let I=T,D=T+z;I<D;I+=3)b(n[I+0],n[I+1],n[I+2])}const y=new P,C=new P,L=new P,F=new P;function V(k){L.fromArray(s,k*3),F.copy(L);const R=c[k];y.copy(R),y.sub(L.multiplyScalar(L.dot(R))).normalize(),C.crossVectors(F,R);const T=C.dot(u[k])<0?-1:1;l[k*4]=y.x,l[k*4+1]=y.y,l[k*4+2]=y.z,l[k*4+3]=T}for(let k=0,R=_.length;k<R;++k){const S=_[k],T=S.start,z=S.count;for(let I=T,D=T+z;I<D;I+=3)V(n[I+0]),V(n[I+1]),V(n[I+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new P,s=new P,a=new P,o=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),x=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,x),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,x),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const a=n[i].array,o=e.attributes[i],l=o.array,c=o.itemSize*t,u=Math.min(l.length,a.length-c);for(let h=0,d=c;h<u;h++,d++)a[d]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,x=l.length;v<x;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new yt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ut,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}ut.prototype.isBufferGeometry=!0;const oc=new ze,Bi=new dr,Za=new hr,Xn=new P,Yn=new P,Zn=new P,Ja=new P,$a=new P,Qa=new P,ys=new P,bs=new P,Ms=new P,ws=new he,Ss=new he,Ts=new he,Ka=new P,Es=new P;class Bt extends rt{constructor(e=new ut,t=new Ko){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(s),e.ray.intersectsSphere(Za)===!1)||(oc.copy(s).invert(),Bi.copy(e.ray).applyMatrix4(oc),n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1))return;let a;if(n.isBufferGeometry){const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,d=n.attributes.uv2,p=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(i))for(let v=0,x=p.length;v<x;v++){const f=p[v],m=i[f.materialIndex],b=Math.max(f.start,g.start),_=Math.min(o.count,Math.min(f.start+f.count,g.start+g.count));for(let y=b,C=_;y<C;y+=3){const L=o.getX(y),F=o.getX(y+1),V=o.getX(y+2);a=As(this,m,e,Bi,l,c,u,h,d,L,F,V),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=f.materialIndex,t.push(a))}}else{const v=Math.max(0,g.start),x=Math.min(o.count,g.start+g.count);for(let f=v,m=x;f<m;f+=3){const b=o.getX(f),_=o.getX(f+1),y=o.getX(f+2);a=As(this,i,e,Bi,l,c,u,h,d,b,_,y),a&&(a.faceIndex=Math.floor(f/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let v=0,x=p.length;v<x;v++){const f=p[v],m=i[f.materialIndex],b=Math.max(f.start,g.start),_=Math.min(l.count,Math.min(f.start+f.count,g.start+g.count));for(let y=b,C=_;y<C;y+=3){const L=y,F=y+1,V=y+2;a=As(this,m,e,Bi,l,c,u,h,d,L,F,V),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=f.materialIndex,t.push(a))}}else{const v=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let f=v,m=x;f<m;f+=3){const b=f,_=f+1,y=f+2;a=As(this,i,e,Bi,l,c,u,h,d,b,_,y),a&&(a.faceIndex=Math.floor(f/3),t.push(a))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}Bt.prototype.isMesh=!0;function Pp(r,e,t,n,i,s,a,o){let l;if(e.side===vt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side!==nr,o),l===null)return null;Es.copy(o),Es.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Es);return c<t.near||c>t.far?null:{distance:c,point:Es.clone(),object:r}}function As(r,e,t,n,i,s,a,o,l,c,u,h){Xn.fromBufferAttribute(i,c),Yn.fromBufferAttribute(i,u),Zn.fromBufferAttribute(i,h);const d=r.morphTargetInfluences;if(s&&d){ys.set(0,0,0),bs.set(0,0,0),Ms.set(0,0,0);for(let g=0,v=s.length;g<v;g++){const x=d[g],f=s[g];x!==0&&(Ja.fromBufferAttribute(f,c),$a.fromBufferAttribute(f,u),Qa.fromBufferAttribute(f,h),a?(ys.addScaledVector(Ja,x),bs.addScaledVector($a,x),Ms.addScaledVector(Qa,x)):(ys.addScaledVector(Ja.sub(Xn),x),bs.addScaledVector($a.sub(Yn),x),Ms.addScaledVector(Qa.sub(Zn),x)))}Xn.add(ys),Yn.add(bs),Zn.add(Ms)}r.isSkinnedMesh&&(r.boneTransform(c,Xn),r.boneTransform(u,Yn),r.boneTransform(h,Zn));const p=Pp(r,e,t,n,Xn,Yn,Zn,Ka);if(p){o&&(ws.fromBufferAttribute(o,c),Ss.fromBufferAttribute(o,u),Ts.fromBufferAttribute(o,h),p.uv=_t.getUV(Ka,Xn,Yn,Zn,ws,Ss,Ts,new he)),l&&(ws.fromBufferAttribute(l,c),Ss.fromBufferAttribute(l,u),Ts.fromBufferAttribute(l,h),p.uv2=_t.getUV(Ka,Xn,Yn,Zn,ws,Ss,Ts,new he));const g={a:c,b:u,c:h,normal:new P,materialIndex:0};_t.getNormal(Xn,Yn,Zn,g.normal),p.face=g}return p}class ns extends ut{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(h,2));function g(v,x,f,m,b,_,y,C,L,F,V){const k=_/L,R=y/F,S=_/2,T=y/2,z=C/2,I=L+1,D=F+1;let N=0,K=0;const ce=new P;for(let G=0;G<D;G++){const j=G*R-T;for(let ee=0;ee<I;ee++){const ie=ee*k-S;ce[v]=ie*m,ce[x]=j*b,ce[f]=z,c.push(ce.x,ce.y,ce.z),ce[v]=0,ce[x]=0,ce[f]=C>0?1:-1,u.push(ce.x,ce.y,ce.z),h.push(ee/L),h.push(1-G/F),N+=1}}for(let G=0;G<F;G++)for(let j=0;j<L;j++){const ee=d+j+I*G,ie=d+j+I*(G+1),me=d+(j+1)+I*(G+1),Ce=d+(j+1)+I*G;l.push(ee,ie,Ce),l.push(ie,me,Ce),K+=6}o.addGroup(p,K,V),p+=K,d+=N}}static fromJSON(e){return new ns(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function rr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Rt(r){const e={};for(let t=0;t<r.length;t++){const n=rr(r[t]);for(const i in n)e[i]=n[i]}return e}const Ip={clone:rr,merge:Rt};var Dp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends Dt{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Dp,this.fragmentShader=Fp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}Un.prototype.isShaderMaterial=!0;class el extends rt{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}el.prototype.isCamera=!0;class Nt extends el{constructor(e=50,t=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Co*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Co*2*Math.atan(Math.tan(Pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}Nt.prototype.isPerspectiveCamera=!0;const Oi=90,Ui=1;class tl extends rt{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Nt(Oi,Ui,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new P(1,0,0)),this.add(i);const s=new Nt(Oi,Ui,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new P(-1,0,0)),this.add(s);const a=new Nt(Oi,Ui,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new P(0,1,0)),this.add(a);const o=new Nt(Oi,Ui,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new P(0,-1,0)),this.add(o);const l=new Nt(Oi,Ui,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new P(0,0,1)),this.add(l);const c=new Nt(Oi,Ui,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new P(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,l,c]=this.children,u=e.xr.enabled,h=e.getRenderTarget();e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.xr.enabled=u}}class va extends Et{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:es,super(e,t,n,i,s,a,o,l,c,u),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}va.prototype.isCubeTexture=!0;class Zu extends sn{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new va(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=St,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ns(5,5,5),s=new Un({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vt,blending:ti});s.uniforms.tEquirect.value=t;const a=new Bt(i,s),o=t.minFilter;return t.minFilter===ma&&(t.minFilter=kt),new tl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}Zu.prototype.isWebGLCubeRenderTarget=!0;const eo=new P,zp=new P,Np=new Ct;class Nn{constructor(e=new P(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=eo.subVectors(n,t).cross(zp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(eo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Np.getNormalMatrix(e),i=this.coplanarPoint(eo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}Nn.prototype.isPlane=!0;const Vi=new hr,Cs=new P;class xa{constructor(e=new Nn,t=new Nn,n=new Nn,i=new Nn,s=new Nn,a=new Nn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],p=n[9],g=n[10],v=n[11],x=n[12],f=n[13],m=n[14],b=n[15];return t[0].setComponents(o-i,h-l,v-d,b-x).normalize(),t[1].setComponents(o+i,h+l,v+d,b+x).normalize(),t[2].setComponents(o+s,h+c,v+p,b+f).normalize(),t[3].setComponents(o-s,h-c,v-p,b-f).normalize(),t[4].setComponents(o-a,h-u,v-g,b-m).normalize(),t[5].setComponents(o+a,h+u,v+g,b+m).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSprite(e){return Vi.center.set(0,0,0),Vi.radius=.7071067811865476,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Cs.x=i.normal.x>0?e.max.x:e.min.x,Cs.y=i.normal.y>0?e.max.y:e.min.y,Cs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Cs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ju(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function kp(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,p=r.createBuffer();r.bindBuffer(u,p),r.bufferData(u,h,d),c.onUploadCallback();let g=5126;return h instanceof Float32Array?g=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?c.isFloat16BufferAttribute?t?g=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):g=5123:h instanceof Int16Array?g=5122:h instanceof Uint32Array?g=5125:h instanceof Int32Array?g=5124:h instanceof Int8Array?g=5120:(h instanceof Uint8Array||h instanceof Uint8ClampedArray)&&(g=5121),{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const d=u.array,p=u.updateRange;r.bindBuffer(h,c),p.count===-1?r.bufferSubData(h,0,d):(t?r.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):r.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class _a extends ut{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,p=[],g=[],v=[],x=[];for(let f=0;f<u;f++){const m=f*d-a;for(let b=0;b<c;b++){const _=b*h-s;g.push(_,-m,0),v.push(0,0,1),x.push(b/o),x.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<o;m++){const b=m+c*f,_=m+c*(f+1),y=m+1+c*(f+1),C=m+1+c*f;p.push(b,_,C),p.push(_,y,C)}this.setIndex(p),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(v,3)),this.setAttribute("uv",new Tt(x,2))}static fromJSON(e){return new _a(e.width,e.height,e.widthSegments,e.heightSegments)}}var Bp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Op=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Up=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Vp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wp="vec3 transformed = vec3( position );",qp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jp=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Xp=`#ifdef USE_BUMPMAP
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
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,nm=`#define PI 3.141592653589793
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
}`,im=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rm=`vec3 transformedNormal = objectNormal;
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
#endif`,sm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,am=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,om=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cm="gl_FragColor = linearToOutputTexel( gl_FragColor );",um=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hm=`#ifdef USE_ENVMAP
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
#endif`,dm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fm=`#ifdef USE_ENVMAP
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
#endif`,pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mm=`#ifdef USE_ENVMAP
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
#endif`,gm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_m=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ym=`#ifdef USE_GRADIENTMAP
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
}`,bm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Mm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wm=`vec3 diffuse = vec3( 1.0 );
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
#endif`,Sm=`uniform bool receiveShadow;
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
#endif`,Tm=`#if defined( USE_ENVMAP )
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
#endif`,Em=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Am=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Cm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lm=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Rm=`PhysicalMaterial material;
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
#endif`,Pm=`struct PhysicalMaterial {
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
}`,Im=`
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
#endif`,Dm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,zm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,km=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Bm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Om=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,Um=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Hm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qm=`#ifdef USE_MORPHNORMALS
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
#endif`,jm=`#ifdef USE_MORPHTARGETS
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
#endif`,Xm=`#ifdef USE_MORPHTARGETS
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
#endif`,Ym=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Zm=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Km=`#ifdef USE_NORMALMAP
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
#endif`,eg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,tg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,ng=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,ig=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ag=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,og=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ug=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hg=`#ifdef USE_SHADOWMAP
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
#endif`,dg=`#ifdef USE_SHADOWMAP
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
#endif`,fg=`#ifdef USE_SHADOWMAP
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
#endif`,pg=`float getShadowMask() {
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
}`,mg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gg=`#ifdef USE_SKINNING
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
#endif`,vg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xg=`#ifdef USE_SKINNING
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
#endif`,_g=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wg=`#ifdef USE_TRANSMISSION
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
#endif`,Sg=`#ifdef USE_TRANSMISSION
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
#endif`,Tg=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Eg=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Ag=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Cg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Lg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Rg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Pg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ig=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dg=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zg=`#include <envmap_common_pars_fragment>
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
}`,Ng=`#include <common>
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
}`,kg=`#if DEPTH_PACKING == 3200
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
}`,Bg=`#define DISTANCE
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
}`,Og=`#define DISTANCE
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
}`,Ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Hg=`uniform float scale;
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
}`,Gg=`uniform vec3 diffuse;
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
}`,Wg=`#include <common>
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
}`,qg=`uniform vec3 diffuse;
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
}`,jg=`#define LAMBERT
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
}`,Xg=`uniform vec3 diffuse;
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
}`,Yg=`#define MATCAP
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
}`,Zg=`#define MATCAP
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
}`,Jg=`#define NORMAL
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
}`,$g=`#define NORMAL
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
}`,Qg=`#define PHONG
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
}`,Kg=`#define PHONG
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
}`,ev=`#define STANDARD
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
}`,tv=`#define STANDARD
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
}`,nv=`#define TOON
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
}`,iv=`#define TOON
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
}`,rv=`uniform float size;
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
}`,sv=`uniform vec3 diffuse;
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
}`,av=`#include <common>
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
}`,ov=`uniform vec3 color;
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
}`,lv=`uniform float rotation;
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
}`,cv=`uniform vec3 diffuse;
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
}`,Xe={alphamap_fragment:Bp,alphamap_pars_fragment:Op,alphatest_fragment:Up,alphatest_pars_fragment:Vp,aomap_fragment:Hp,aomap_pars_fragment:Gp,begin_vertex:Wp,beginnormal_vertex:qp,bsdfs:jp,bumpmap_pars_fragment:Xp,clipping_planes_fragment:Yp,clipping_planes_pars_fragment:Zp,clipping_planes_pars_vertex:Jp,clipping_planes_vertex:$p,color_fragment:Qp,color_pars_fragment:Kp,color_pars_vertex:em,color_vertex:tm,common:nm,cube_uv_reflection_fragment:im,defaultnormal_vertex:rm,displacementmap_pars_vertex:sm,displacementmap_vertex:am,emissivemap_fragment:om,emissivemap_pars_fragment:lm,encodings_fragment:cm,encodings_pars_fragment:um,envmap_fragment:hm,envmap_common_pars_fragment:dm,envmap_pars_fragment:fm,envmap_pars_vertex:pm,envmap_physical_pars_fragment:Tm,envmap_vertex:mm,fog_vertex:gm,fog_pars_vertex:vm,fog_fragment:xm,fog_pars_fragment:_m,gradientmap_pars_fragment:ym,lightmap_fragment:bm,lightmap_pars_fragment:Mm,lights_lambert_vertex:wm,lights_pars_begin:Sm,lights_toon_fragment:Em,lights_toon_pars_fragment:Am,lights_phong_fragment:Cm,lights_phong_pars_fragment:Lm,lights_physical_fragment:Rm,lights_physical_pars_fragment:Pm,lights_fragment_begin:Im,lights_fragment_maps:Dm,lights_fragment_end:Fm,logdepthbuf_fragment:zm,logdepthbuf_pars_fragment:Nm,logdepthbuf_pars_vertex:km,logdepthbuf_vertex:Bm,map_fragment:Om,map_pars_fragment:Um,map_particle_fragment:Vm,map_particle_pars_fragment:Hm,metalnessmap_fragment:Gm,metalnessmap_pars_fragment:Wm,morphnormal_vertex:qm,morphtarget_pars_vertex:jm,morphtarget_vertex:Xm,normal_fragment_begin:Ym,normal_fragment_maps:Zm,normal_pars_fragment:Jm,normal_pars_vertex:$m,normal_vertex:Qm,normalmap_pars_fragment:Km,clearcoat_normal_fragment_begin:eg,clearcoat_normal_fragment_maps:tg,clearcoat_pars_fragment:ng,output_fragment:ig,packing:rg,premultiplied_alpha_fragment:sg,project_vertex:ag,dithering_fragment:og,dithering_pars_fragment:lg,roughnessmap_fragment:cg,roughnessmap_pars_fragment:ug,shadowmap_pars_fragment:hg,shadowmap_pars_vertex:dg,shadowmap_vertex:fg,shadowmask_pars_fragment:pg,skinbase_vertex:mg,skinning_pars_vertex:gg,skinning_vertex:vg,skinnormal_vertex:xg,specularmap_fragment:_g,specularmap_pars_fragment:yg,tonemapping_fragment:bg,tonemapping_pars_fragment:Mg,transmission_fragment:wg,transmission_pars_fragment:Sg,uv_pars_fragment:Tg,uv_pars_vertex:Eg,uv_vertex:Ag,uv2_pars_fragment:Cg,uv2_pars_vertex:Lg,uv2_vertex:Rg,worldpos_vertex:Pg,background_vert:Ig,background_frag:Dg,cube_vert:Fg,cube_frag:zg,depth_vert:Ng,depth_frag:kg,distanceRGBA_vert:Bg,distanceRGBA_frag:Og,equirect_vert:Ug,equirect_frag:Vg,linedashed_vert:Hg,linedashed_frag:Gg,meshbasic_vert:Wg,meshbasic_frag:qg,meshlambert_vert:jg,meshlambert_frag:Xg,meshmatcap_vert:Yg,meshmatcap_frag:Zg,meshnormal_vert:Jg,meshnormal_frag:$g,meshphong_vert:Qg,meshphong_frag:Kg,meshphysical_vert:ev,meshphysical_frag:tv,meshtoon_vert:nv,meshtoon_frag:iv,points_vert:rv,points_frag:sv,shadow_vert:av,shadow_frag:ov,sprite_vert:lv,sprite_frag:cv},ve={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ct},uv2Transform:{value:new Ct},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ct}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ct}}},xn={basic:{uniforms:Rt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Rt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.fog,ve.lights,{emissive:{value:new De(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Rt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Rt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Rt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new De(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Rt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Rt([ve.points,ve.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Rt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Rt([ve.common,ve.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Rt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Rt([ve.sprite,ve.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ct},t2D:{value:null}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},cube:{uniforms:Rt([ve.envmap,{opacity:{value:1}}]),vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Rt([ve.common,ve.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Rt([ve.lights,ve.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};xn.physical={uniforms:Rt([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new he(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenRoughness:{value:0},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};function uv(r,e,t,n,i){const s=new De(0);let a=0,o,l,c=null,u=0,h=null;function d(g,v){let x=!1,f=v.isScene===!0?v.background:null;f&&f.isTexture&&(f=e.get(f));const m=r.xr,b=m.getSession&&m.getSession();b&&b.environmentBlendMode==="additive"&&(f=null),f===null?p(s,a):f&&f.isColor&&(p(f,1),x=!0),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),f&&(f.isCubeTexture||f.mapping===pa)?(l===void 0&&(l=new Bt(new ns(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:rr(xn.cube.uniforms),vertexShader:xn.cube.vertexShader,fragmentShader:xn.cube.fragmentShader,side:vt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(_,y,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=f,l.material.uniforms.flipEnvMap.value=f.isCubeTexture&&f.isRenderTargetTexture===!1?-1:1,(c!==f||u!==f.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,c=f,u=f.version,h=r.toneMapping),g.unshift(l,l.geometry,l.material,0,0,null)):f&&f.isTexture&&(o===void 0&&(o=new Bt(new _a(2,2),new Un({name:"BackgroundMaterial",uniforms:rr(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:jr,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=f,f.matrixAutoUpdate===!0&&f.updateMatrix(),o.material.uniforms.uvTransform.value.copy(f.matrix),(c!==f||u!==f.version||h!==r.toneMapping)&&(o.material.needsUpdate=!0,c=f,u=f.version,h=r.toneMapping),g.unshift(o,o.geometry,o.material,0,0,null))}function p(g,v){t.buffers.color.setClear(g.r,g.g,g.b,v,i)}return{getClearColor:function(){return s},setClearColor:function(g,v=1){s.set(g),a=v,p(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,p(s,a)},render:d}}function hv(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=v(null);let c=l;function u(T,z,I,D,N){let K=!1;if(a){const ce=g(D,I,z);c!==ce&&(c=ce,d(c.object)),K=x(D,N),K&&f(D,N)}else{const ce=z.wireframe===!0;(c.geometry!==D.id||c.program!==I.id||c.wireframe!==ce)&&(c.geometry=D.id,c.program=I.id,c.wireframe=ce,K=!0)}T.isInstancedMesh===!0&&(K=!0),N!==null&&t.update(N,34963),K&&(L(T,z,I,D),N!==null&&r.bindBuffer(34963,t.get(N).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(T){return n.isWebGL2?r.bindVertexArray(T):s.bindVertexArrayOES(T)}function p(T){return n.isWebGL2?r.deleteVertexArray(T):s.deleteVertexArrayOES(T)}function g(T,z,I){const D=I.wireframe===!0;let N=o[T.id];N===void 0&&(N={},o[T.id]=N);let K=N[z.id];K===void 0&&(K={},N[z.id]=K);let ce=K[D];return ce===void 0&&(ce=v(h()),K[D]=ce),ce}function v(T){const z=[],I=[],D=[];for(let N=0;N<i;N++)z[N]=0,I[N]=0,D[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:I,attributeDivisors:D,object:T,attributes:{},index:null}}function x(T,z){const I=c.attributes,D=T.attributes;let N=0;for(const K in D){const ce=I[K],G=D[K];if(ce===void 0||ce.attribute!==G||ce.data!==G.data)return!0;N++}return c.attributesNum!==N||c.index!==z}function f(T,z){const I={},D=T.attributes;let N=0;for(const K in D){const ce=D[K],G={};G.attribute=ce,ce.data&&(G.data=ce.data),I[K]=G,N++}c.attributes=I,c.attributesNum=N,c.index=z}function m(){const T=c.newAttributes;for(let z=0,I=T.length;z<I;z++)T[z]=0}function b(T){_(T,0)}function _(T,z){const I=c.newAttributes,D=c.enabledAttributes,N=c.attributeDivisors;I[T]=1,D[T]===0&&(r.enableVertexAttribArray(T),D[T]=1),N[T]!==z&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](T,z),N[T]=z)}function y(){const T=c.newAttributes,z=c.enabledAttributes;for(let I=0,D=z.length;I<D;I++)z[I]!==T[I]&&(r.disableVertexAttribArray(I),z[I]=0)}function C(T,z,I,D,N,K){n.isWebGL2===!0&&(I===5124||I===5125)?r.vertexAttribIPointer(T,z,I,N,K):r.vertexAttribPointer(T,z,I,D,N,K)}function L(T,z,I,D){if(n.isWebGL2===!1&&(T.isInstancedMesh||D.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const N=D.attributes,K=I.getAttributes(),ce=z.defaultAttributeValues;for(const G in K){const j=K[G];if(j.location>=0){let ee=N[G];if(ee===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(ee=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(ee=T.instanceColor)),ee!==void 0){const ie=ee.normalized,me=ee.itemSize,Ce=t.get(ee);if(Ce===void 0)continue;const $=Ce.buffer,Me=Ce.type,Se=Ce.bytesPerElement;if(ee.isInterleavedBufferAttribute){const xe=ee.data,Ee=xe.stride,We=ee.offset;if(xe&&xe.isInstancedInterleavedBuffer){for(let q=0;q<j.locationSize;q++)_(j.location+q,xe.meshPerAttribute);T.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let q=0;q<j.locationSize;q++)b(j.location+q);r.bindBuffer(34962,$);for(let q=0;q<j.locationSize;q++)C(j.location+q,me/j.locationSize,Me,ie,Ee*Se,(We+me/j.locationSize*q)*Se)}else{if(ee.isInstancedBufferAttribute){for(let xe=0;xe<j.locationSize;xe++)_(j.location+xe,ee.meshPerAttribute);T.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let xe=0;xe<j.locationSize;xe++)b(j.location+xe);r.bindBuffer(34962,$);for(let xe=0;xe<j.locationSize;xe++)C(j.location+xe,me/j.locationSize,Me,ie,me*Se,me/j.locationSize*xe*Se)}}else if(ce!==void 0){const ie=ce[G];if(ie!==void 0)switch(ie.length){case 2:r.vertexAttrib2fv(j.location,ie);break;case 3:r.vertexAttrib3fv(j.location,ie);break;case 4:r.vertexAttrib4fv(j.location,ie);break;default:r.vertexAttrib1fv(j.location,ie)}}}}y()}function F(){R();for(const T in o){const z=o[T];for(const I in z){const D=z[I];for(const N in D)p(D[N].object),delete D[N];delete z[I]}delete o[T]}}function V(T){if(o[T.id]===void 0)return;const z=o[T.id];for(const I in z){const D=z[I];for(const N in D)p(D[N].object),delete D[N];delete z[I]}delete o[T.id]}function k(T){for(const z in o){const I=o[z];if(I[T.id]===void 0)continue;const D=I[T.id];for(const N in D)p(D[N].object),delete D[N];delete I[T.id]}}function R(){S(),c!==l&&(c=l,d(c.object))}function S(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:R,resetDefaultState:S,dispose:F,releaseStatesOfGeometry:V,releaseStatesOfProgram:k,initAttributes:m,enableAttribute:b,disableUnusedAttributes:y}}function dv(r,e,t,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let d,p;if(i)d=r,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,c,u,h),t.update(u,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function fv(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),d=r.getParameter(35660),p=r.getParameter(3379),g=r.getParameter(34076),v=r.getParameter(34921),x=r.getParameter(36347),f=r.getParameter(36348),m=r.getParameter(36349),b=d>0,_=a||e.has("OES_texture_float"),y=b&&_,C=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:x,maxVaryings:f,maxFragmentUniforms:m,vertexTextures:b,floatFragmentTextures:_,floatVertexTextures:y,maxSamples:C}}function pv(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Nn,o=new Ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,p){const g=h.length!==0||d||n!==0||i;return i=d,t=u(h,p,0),n=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,d,p){const g=h.clippingPlanes,v=h.clipIntersection,x=h.clipShadows,f=r.get(h);if(!i||g===null||g.length===0||s&&!x)s?u(null):c();else{const m=s?0:n,b=m*4;let _=f.clippingState||null;l.value=_,_=u(g,d,b,p);for(let y=0;y!==b;++y)_[y]=t[y];f.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){const v=h!==null?h.length:0;let x=null;if(v!==0){if(x=l.value,g!==!0||x===null){const f=p+v*4,m=d.matrixWorldInverse;o.getNormalMatrix(m),(x===null||x.length<f)&&(x=new Float32Array(f));for(let b=0,_=p;b!==v;++b,_+=4)a.copy(h[b]).applyMatrix4(m,o),a.normal.toArray(x,_),x[_+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}function mv(r){let e=new WeakMap;function t(a,o){return o===So?a.mapping=es:o===To&&(a.mapping=ts),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===So||o===To)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=r.getRenderTarget(),u=new Zu(l.height/2);return u.fromEquirectangularTexture(r,a),e.set(a,u),r.setRenderTarget(c),a.addEventListener("dispose",i),t(u.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class nl extends el{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}nl.prototype.isOrthographicCamera=!0;class ya extends Un{constructor(e){super(e),this.type="RawShaderMaterial"}}ya.prototype.isRawShaderMaterial=!0;const er=4,ii=8,vn=Math.pow(2,ii),$u=[.125,.215,.35,.446,.526,.582],Qu=ii-er+1+$u.length,Hi=20,ra={[dn]:0,[lr]:1},to=new nl,{_lodPlanes:Ar,_sizeLods:lc,_sigmas:Ls}=vv(),cc=new De;let no=null;const bi=(1+Math.sqrt(5))/2,Gi=1/bi,uc=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,bi,Gi),new P(0,bi,-Gi),new P(Gi,0,bi),new P(-Gi,0,bi),new P(bi,Gi,0),new P(-bi,Gi,0)];class gv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=xv(Hi),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){no=this._renderer.getRenderTarget();const s=this._allocateTargets();return this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=fc(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=dc(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<Ar.length;e++)Ar[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(no),e.scissorTest=!1,Rs(e,0,0,e.width,e.height)}_fromTexture(e){no=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Mi,format:St,encoding:dn,depthBuffer:!1},n=hc(t);return n.depthBuffer=!e,this._pingPongRenderTarget=hc(t),n}_compileMaterial(e){const t=new Bt(Ar[0],e);this._renderer.compile(t,to)}_sceneToCubeUV(e,t,n,i){const o=new Nt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(cc),u.toneMapping=ni,u.autoClear=!1;const p=new Ko({name:"PMREM.Background",side:vt,depthWrite:!1,depthTest:!1}),g=new Bt(new ns,p);let v=!1;const x=e.background;x?x.isColor&&(p.color.copy(x),e.background=null,v=!0):(p.color.copy(cc),v=!0);for(let f=0;f<6;f++){const m=f%3;m==0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):m==1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f])),Rs(i,m*vn,f>2?vn:0,vn,vn),u.setRenderTarget(i),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=x}_setEncoding(e,t){this._renderer.capabilities.isWebGL2===!0&&t.format===St&&t.type===On&&t.encoding===lr?e.value=ra[dn]:e.value=ra[t.encoding]}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===es||e.mapping===ts;i?this._cubemapShader==null&&(this._cubemapShader=fc()):this._equirectShader==null&&(this._equirectShader=dc());const s=i?this._cubemapShader:this._equirectShader,a=new Bt(Ar[0],s),o=s.uniforms;o.envMap.value=e,i||o.texelSize.value.set(1/e.image.width,1/e.image.height),this._setEncoding(o.inputEncoding,e),Rs(t,0,0,3*vn,2*vn),n.setRenderTarget(t),n.render(a,to)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<Qu;i++){const s=Math.sqrt(Ls[i]*Ls[i]-Ls[i-1]*Ls[i-1]),a=uc[(i-1)%uc.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Bt(Ar[i],c),d=c.uniforms,p=lc[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Hi-1),v=s/g,x=isFinite(s)?1+Math.floor(u*v):Hi;x>Hi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Hi}`);const f=[];let m=0;for(let C=0;C<Hi;++C){const L=C/v,F=Math.exp(-L*L/2);f.push(F),C==0?m+=F:C<x&&(m+=2*F)}for(let C=0;C<f.length;C++)f[C]=f[C]/m;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o),d.dTheta.value=g,d.mipInt.value=ii-n;const b=lc[i],_=3*Math.max(0,vn-2*b),y=(i===0?0:2*vn)+2*b*(i>ii-er?i-ii+er:0);Rs(t,_,y,3*b,2*b),l.setRenderTarget(t),l.render(h,to)}}function vv(){const r=[],e=[],t=[];let n=ii;for(let i=0;i<Qu;i++){const s=Math.pow(2,n);e.push(s);let a=1/s;i>ii-er?a=$u[i-ii+er-1]:i==0&&(a=0),t.push(a);const o=1/(s-1),l=-o/2,c=1+o/2,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,p=3,g=2,v=1,x=new Float32Array(p*d*h),f=new Float32Array(g*d*h),m=new Float32Array(v*d*h);for(let _=0;_<h;_++){const y=_%3*2/3-1,C=_>2?0:-1,L=[y,C,0,y+2/3,C,0,y+2/3,C+1,0,y,C,0,y+2/3,C+1,0,y,C+1,0];x.set(L,p*d*_),f.set(u,g*d*_);const F=[_,_,_,_,_,_];m.set(F,v*d*_)}const b=new ut;b.setAttribute("position",new yt(x,p)),b.setAttribute("uv",new yt(f,g)),b.setAttribute("faceIndex",new yt(m,v)),r.push(b),n>er&&n--}return{_lodPlanes:r,_sizeLods:e,_sigmas:t}}function hc(r){const e=new sn(3*vn,3*vn,r);return e.texture.mapping=pa,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function Rs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function xv(r){const e=new Float32Array(r),t=new P(0,1,0);return new ya({name:"SphericalGaussianBlur",defines:{n:r},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t}},vertexShader:il(),fragmentShader:`

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

			${rl()}

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function dc(){const r=new he(1,1);return new ya({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:r},inputEncoding:{value:ra[dn]}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${rl()}

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function fc(){return new ya({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:ra[dn]}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${rl()}

			void main() {

				gl_FragColor = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function il(){return`

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
	`}function rl(){return`

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
	`}function _v(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const l=o.mapping,c=l===So||l===To,u=l===es||l===ts;if(c||u){if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){const d=r.getRenderTarget();t===null&&(t=new gv(r));const p=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,p),r.setRenderTarget(d),o.addEventListener("dispose",s),p.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function yv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function bv(r,e,t,n){const i={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],34962);const p=h.morphAttributes;for(const g in p){const v=p[g];for(let x=0,f=v.length;x<f;x++)e.update(v[x],34962)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const m=p.array;v=p.version;for(let b=0,_=m.length;b<_;b+=3){const y=m[b+0],C=m[b+1],L=m[b+2];d.push(y,C,C,L,L,y)}}else{const m=g.array;v=g.version;for(let b=0,_=m.length/3-1;b<_;b+=3){const y=b+0,C=b+1,L=b+2;d.push(y,C,C,L,L,y)}}const x=new(Wu(d)>65535?Yu:Xu)(d,1);x.version=v;const f=s.get(h);f&&e.remove(f),s.set(h,x)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Mv(r,e,t,n){const i=n.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,p){r.drawElements(s,p,o,d*l),t.update(p,s,1)}function h(d,p,g){if(g===0)return;let v,x;if(i)v=r,x="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[x](s,p,o,d*l,g),t.update(p,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function wv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}class sl extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=xt,this.minFilter=xt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}sl.prototype.isDataTexture2DArray=!0;function Sv(r,e){return r[0]-e[0]}function Tv(r,e){return Math.abs(e[1])-Math.abs(r[1])}function pc(r,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),r.divideScalar(t)}function Ev(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new P,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h,d){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position.length;let v=s.get(u);if(v===void 0||v.count!==g){v!==void 0&&v.texture.dispose();const m=u.morphAttributes.normal!==void 0,b=u.morphAttributes.position,_=u.morphAttributes.normal||[],y=u.attributes.position.count,C=m===!0?2:1;let L=y*C,F=1;L>e.maxTextureSize&&(F=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const V=new Float32Array(L*F*4*g),k=new sl(V,L,F,g);k.format=St,k.type=Kn,k.needsUpdate=!0;const R=C*4;for(let S=0;S<g;S++){const T=b[S],z=_[S],I=L*F*4*S;for(let D=0;D<T.count;D++){a.fromBufferAttribute(T,D),T.normalized===!0&&pc(a,T);const N=D*R;V[I+N+0]=a.x,V[I+N+1]=a.y,V[I+N+2]=a.z,V[I+N+3]=0,m===!0&&(a.fromBufferAttribute(z,D),z.normalized===!0&&pc(a,z),V[I+N+4]=a.x,V[I+N+5]=a.y,V[I+N+6]=a.z,V[I+N+7]=0)}}v={count:g,texture:k,size:new he(L,F)},s.set(u,v)}let x=0;for(let m=0;m<p.length;m++)x+=p[m];const f=u.morphTargetsRelative?1:1-x;d.getUniforms().setValue(r,"morphTargetBaseInfluence",f),d.getUniforms().setValue(r,"morphTargetInfluences",p),d.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}else{const g=p===void 0?0:p.length;let v=n[u.id];if(v===void 0||v.length!==g){v=[];for(let _=0;_<g;_++)v[_]=[_,0];n[u.id]=v}for(let _=0;_<g;_++){const y=v[_];y[0]=_,y[1]=p[_]}v.sort(Tv);for(let _=0;_<8;_++)_<g&&v[_][1]?(o[_][0]=v[_][0],o[_][1]=v[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(Sv);const x=u.morphAttributes.position,f=u.morphAttributes.normal;let m=0;for(let _=0;_<8;_++){const y=o[_],C=y[0],L=y[1];C!==Number.MAX_SAFE_INTEGER&&L?(x&&u.getAttribute("morphTarget"+_)!==x[C]&&u.setAttribute("morphTarget"+_,x[C]),f&&u.getAttribute("morphNormal"+_)!==f[C]&&u.setAttribute("morphNormal"+_,f[C]),i[_]=L,m+=L):(x&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),f&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),i[_]=0)}const b=u.morphTargetsRelative?1:1-m;d.getUniforms().setValue(r,"morphTargetBaseInfluence",b),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Av(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Ku extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=xt,this.minFilter=xt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Ku.prototype.isDataTexture3D=!0;const eh=new Et,th=new sl,nh=new Ku,ih=new va,mc=[],gc=[],vc=new Float32Array(16),xc=new Float32Array(9),_c=new Float32Array(4);function pr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=mc[i];if(s===void 0&&(s=new Float32Array(i),mc[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Ot(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function It(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ba(r,e){let t=gc[e];t===void 0&&(t=new Int32Array(e),gc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Cv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Lv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;r.uniform2fv(this.addr,e),It(t,e)}}function Rv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;r.uniform3fv(this.addr,e),It(t,e)}}function Pv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;r.uniform4fv(this.addr,e),It(t,e)}}function Iv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Ot(t,n))return;_c.set(n),r.uniformMatrix2fv(this.addr,!1,_c),It(t,n)}}function Dv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Ot(t,n))return;xc.set(n),r.uniformMatrix3fv(this.addr,!1,xc),It(t,n)}}function Fv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Ot(t,n))return;vc.set(n),r.uniformMatrix4fv(this.addr,!1,vc),It(t,n)}}function zv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Nv(r,e){const t=this.cache;Ot(t,e)||(r.uniform2iv(this.addr,e),It(t,e))}function kv(r,e){const t=this.cache;Ot(t,e)||(r.uniform3iv(this.addr,e),It(t,e))}function Bv(r,e){const t=this.cache;Ot(t,e)||(r.uniform4iv(this.addr,e),It(t,e))}function Ov(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Uv(r,e){const t=this.cache;Ot(t,e)||(r.uniform2uiv(this.addr,e),It(t,e))}function Vv(r,e){const t=this.cache;Ot(t,e)||(r.uniform3uiv(this.addr,e),It(t,e))}function Hv(r,e){const t=this.cache;Ot(t,e)||(r.uniform4uiv(this.addr,e),It(t,e))}function Gv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||eh,i)}function Wv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||nh,i)}function qv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||ih,i)}function jv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||th,i)}function Xv(r){switch(r){case 5126:return Cv;case 35664:return Lv;case 35665:return Rv;case 35666:return Pv;case 35674:return Iv;case 35675:return Dv;case 35676:return Fv;case 5124:case 35670:return zv;case 35667:case 35671:return Nv;case 35668:case 35672:return kv;case 35669:case 35673:return Bv;case 5125:return Ov;case 36294:return Uv;case 36295:return Vv;case 36296:return Hv;case 35678:case 36198:case 36298:case 36306:case 35682:return Gv;case 35679:case 36299:case 36307:return Wv;case 35680:case 36300:case 36308:case 36293:return qv;case 36289:case 36303:case 36311:case 36292:return jv}}function Yv(r,e){r.uniform1fv(this.addr,e)}function Zv(r,e){const t=pr(e,this.size,2);r.uniform2fv(this.addr,t)}function Jv(r,e){const t=pr(e,this.size,3);r.uniform3fv(this.addr,t)}function $v(r,e){const t=pr(e,this.size,4);r.uniform4fv(this.addr,t)}function Qv(r,e){const t=pr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Kv(r,e){const t=pr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function e0(r,e){const t=pr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function t0(r,e){r.uniform1iv(this.addr,e)}function n0(r,e){r.uniform2iv(this.addr,e)}function i0(r,e){r.uniform3iv(this.addr,e)}function r0(r,e){r.uniform4iv(this.addr,e)}function s0(r,e){r.uniform1uiv(this.addr,e)}function a0(r,e){r.uniform2uiv(this.addr,e)}function o0(r,e){r.uniform3uiv(this.addr,e)}function l0(r,e){r.uniform4uiv(this.addr,e)}function c0(r,e,t){const n=e.length,i=ba(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTexture2D(e[s]||eh,i[s])}function u0(r,e,t){const n=e.length,i=ba(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||nh,i[s])}function h0(r,e,t){const n=e.length,i=ba(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTextureCube(e[s]||ih,i[s])}function d0(r,e,t){const n=e.length,i=ba(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||th,i[s])}function f0(r){switch(r){case 5126:return Yv;case 35664:return Zv;case 35665:return Jv;case 35666:return $v;case 35674:return Qv;case 35675:return Kv;case 35676:return e0;case 5124:case 35670:return t0;case 35667:case 35671:return n0;case 35668:case 35672:return i0;case 35669:case 35673:return r0;case 5125:return s0;case 36294:return a0;case 36295:return o0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return c0;case 35679:case 36299:case 36307:return u0;case 35680:case 36300:case 36308:case 36293:return h0;case 36289:case 36303:case 36311:case 36292:return d0}}function p0(r,e,t){this.id=r,this.addr=t,this.cache=[],this.setValue=Xv(e.type)}function rh(r,e,t){this.id=r,this.addr=t,this.cache=[],this.size=e.size,this.setValue=f0(e.type)}rh.prototype.updateCache=function(r){const e=this.cache;r instanceof Float32Array&&e.length!==r.length&&(this.cache=new Float32Array(r.length)),It(e,r)};function sh(r){this.id=r,this.seq=[],this.map={}}sh.prototype.setValue=function(r,e,t){const n=this.seq;for(let i=0,s=n.length;i!==s;++i){const a=n[i];a.setValue(r,e[a.id],t)}};const io=/(\w+)(\])?(\[|\.)?/g;function yc(r,e){r.seq.push(e),r.map[e.id]=e}function m0(r,e,t){const n=r.name,i=n.length;for(io.lastIndex=0;;){const s=io.exec(n),a=io.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){yc(t,c===void 0?new p0(o,r,e):new rh(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new sh(o),yc(t,h)),t=h}}}function ri(r,e){this.seq=[],this.map={};const t=r.getProgramParameter(e,35718);for(let n=0;n<t;++n){const i=r.getActiveUniform(e,n),s=r.getUniformLocation(e,i.name);m0(i,s,this)}}ri.prototype.setValue=function(r,e,t,n){const i=this.map[e];i!==void 0&&i.setValue(r,t,n)};ri.prototype.setOptional=function(r,e,t){const n=e[t];n!==void 0&&this.setValue(r,t,n)};ri.upload=function(r,e,t,n){for(let i=0,s=e.length;i!==s;++i){const a=e[i],o=t[a.id];o.needsUpdate!==!1&&a.setValue(r,o.value,n)}};ri.seqWithValue=function(r,e){const t=[];for(let n=0,i=r.length;n!==i;++n){const s=r[n];s.id in e&&t.push(s)}return t};function bc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let g0=0;function v0(r){const e=r.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function ah(r){switch(r){case dn:return["Linear","( value )"];case lr:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Mc(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();return n&&i===""?"":t.toUpperCase()+`

`+i+`

`+v0(r.getShaderSource(e))}function mi(r,e){const t=ah(e);return"vec4 "+r+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function x0(r,e){const t=ah(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function _0(r,e){let t;switch(e){case df:t="Linear";break;case ff:t="Reinhard";break;case pf:t="OptimizedCineon";break;case mf:t="ACESFilmic";break;case gf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function y0(r){return[r.extensionDerivatives||r.envMapCubeUV||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Fr).join(`
`)}function b0(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function M0(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Fr(r){return r!==""}function wc(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const w0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lo(r){return r.replace(w0,S0)}function S0(r,e){const t=Xe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Lo(t)}const T0=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,E0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tc(r){return r.replace(E0,oh).replace(T0,A0)}function A0(r,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),oh(r,e,t,n)}function oh(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ec(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function C0(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Bu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Gd?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Dr&&(e="SHADOWMAP_TYPE_VSM"),e}function L0(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case es:case ts:e="ENVMAP_TYPE_CUBE";break;case pa:case Jo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function R0(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ts:case Jo:e="ENVMAP_MODE_REFRACTION";break}return e}function P0(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case fa:e="ENVMAP_BLENDING_MULTIPLY";break;case uf:e="ENVMAP_BLENDING_MIX";break;case hf:e="ENVMAP_BLENDING_ADD";break}return e}function I0(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=C0(t),c=L0(t),u=R0(t),h=P0(t),d=t.isWebGL2?"":y0(t),p=b0(s),g=i.createProgram();let v,x,f=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=[p].filter(Fr).join(`
`),v.length>0&&(v+=`
`),x=[d,p].filter(Fr).join(`
`),x.length>0&&(x+=`
`)):(v=[Ec(t),"#define SHADER_NAME "+t.shaderName,p,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),x=[d,Ec(t),"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?Xe.tonemapping_pars_fragment:"",t.toneMapping!==ni?_0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.format===wi?"#define OPAQUE":"",Xe.encodings_pars_fragment,t.map?mi("mapTexelToLinear",t.mapEncoding):"",t.matcap?mi("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?mi("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?mi("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.specularColorMap?mi("specularColorMapTexelToLinear",t.specularColorMapEncoding):"",t.sheenColorMap?mi("sheenColorMapTexelToLinear",t.sheenColorMapEncoding):"",t.lightMap?mi("lightMapTexelToLinear",t.lightMapEncoding):"",x0("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fr).join(`
`)),a=Lo(a),a=wc(a,t),a=Sc(a,t),o=Lo(o),o=wc(o,t),o=Sc(o,t),a=Tc(a),o=Tc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,v=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,x=["#define varying in",t.glslVersion===Zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const m=f+v+a,b=f+x+o,_=bc(i,35633,m),y=bc(i,35632,b);if(i.attachShader(g,_),i.attachShader(g,y),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),r.debug.checkShaderErrors){const F=i.getProgramInfoLog(g).trim(),V=i.getShaderInfoLog(_).trim(),k=i.getShaderInfoLog(y).trim();let R=!0,S=!0;if(i.getProgramParameter(g,35714)===!1){R=!1;const T=Mc(i,_,"vertex"),z=Mc(i,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,35715)+`

Program Info Log: `+F+`
`+T+`
`+z)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(V===""||k==="")&&(S=!1);S&&(this.diagnostics={runnable:R,programLog:F,vertexShader:{log:V,prefix:v},fragmentShader:{log:k,prefix:x}})}i.deleteShader(_),i.deleteShader(y);let C;this.getUniforms=function(){return C===void 0&&(C=new ri(i,g)),C};let L;return this.getAttributes=function(){return L===void 0&&(L=M0(i,g)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=g0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=_,this.fragmentShader=y,this}let D0=0;class F0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new z0;t.set(e,n)}return t.get(e)}}class z0{constructor(){this.id=D0++,this.usedTimes=0}}function N0(r,e,t,n,i,s,a){const o=new qu,l=new F0,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.floatVertexTextures,p=i.maxVertexUniforms,g=i.vertexTextures;let v=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(S){const z=S.skeleton.bones;if(d)return 1024;{const D=Math.floor((p-20)/4),N=Math.min(D,z.length);return N<z.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+z.length+" bones. This GPU supports "+N+"."),0):N}}function m(S){let T;return S&&S.isTexture?T=S.encoding:S&&S.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),T=S.texture.encoding):T=dn,u&&S&&S.isTexture&&S.format===St&&S.type===On&&S.encoding===lr&&(T=dn),T}function b(S,T,z,I,D){const N=I.fog,K=S.isMeshStandardMaterial?I.environment:null,ce=(S.isMeshStandardMaterial?t:e).get(S.envMap||K),G=x[S.type],j=D.isSkinnedMesh?f(D):0;S.precision!==null&&(v=i.getMaxPrecision(S.precision),v!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",v,"instead."));let ee,ie,me,Ce;if(G){const Ee=xn[G];ee=Ee.vertexShader,ie=Ee.fragmentShader}else ee=S.vertexShader,ie=S.fragmentShader,l.update(S),me=l.getVertexShaderID(S),Ce=l.getFragmentShaderID(S);const $=r.getRenderTarget(),Me=S.alphaTest>0,Se=S.clearcoat>0;return{isWebGL2:u,shaderID:G,shaderName:S.type,vertexShader:ee,fragmentShader:ie,defines:S.defines,customVertexShaderID:me,customFragmentShaderID:Ce,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:v,instancing:D.isInstancedMesh===!0,instancingColor:D.isInstancedMesh===!0&&D.instanceColor!==null,supportsVertexTextures:g,outputEncoding:$!==null?m($.texture):r.outputEncoding,map:!!S.map,mapEncoding:m(S.map),matcap:!!S.matcap,matcapEncoding:m(S.matcap),envMap:!!ce,envMapMode:ce&&ce.mapping,envMapEncoding:m(ce),envMapCubeUV:!!ce&&(ce.mapping===pa||ce.mapping===Jo),lightMap:!!S.lightMap,lightMapEncoding:m(S.lightMap),aoMap:!!S.aoMap,emissiveMap:!!S.emissiveMap,emissiveMapEncoding:m(S.emissiveMap),bumpMap:!!S.bumpMap,normalMap:!!S.normalMap,objectSpaceNormalMap:S.normalMapType===mp,tangentSpaceNormalMap:S.normalMapType===cr,clearcoat:Se,clearcoatMap:Se&&!!S.clearcoatMap,clearcoatRoughnessMap:Se&&!!S.clearcoatRoughnessMap,clearcoatNormalMap:Se&&!!S.clearcoatNormalMap,displacementMap:!!S.displacementMap,roughnessMap:!!S.roughnessMap,metalnessMap:!!S.metalnessMap,specularMap:!!S.specularMap,specularIntensityMap:!!S.specularIntensityMap,specularColorMap:!!S.specularColorMap,specularColorMapEncoding:m(S.specularColorMap),alphaMap:!!S.alphaMap,alphaTest:Me,gradientMap:!!S.gradientMap,sheen:S.sheen>0,sheenColorMap:!!S.sheenColorMap,sheenColorMapEncoding:m(S.sheenColorMap),sheenRoughnessMap:!!S.sheenRoughnessMap,transmission:S.transmission>0,transmissionMap:!!S.transmissionMap,thicknessMap:!!S.thicknessMap,combine:S.combine,vertexTangents:!!S.normalMap&&!!D.geometry&&!!D.geometry.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!D.geometry&&!!D.geometry.attributes.color&&D.geometry.attributes.color.itemSize===4,vertexUvs:!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatMap||!!S.clearcoatRoughnessMap||!!S.clearcoatNormalMap||!!S.displacementMap||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||!!S.sheenColorMap||!!S.sheenRoughnessMap,uvsVertexOnly:!(S.map||S.bumpMap||S.normalMap||S.specularMap||S.alphaMap||S.emissiveMap||S.roughnessMap||S.metalnessMap||S.clearcoatNormalMap||S.transmission>0||S.transmissionMap||S.thicknessMap||S.specularIntensityMap||S.specularColorMap||S.sheen>0||S.sheenColorMap||S.sheenRoughnessMap)&&!!S.displacementMap,fog:!!N,useFog:S.fog,fogExp2:N&&N.isFogExp2,flatShading:!!S.flatShading,sizeAttenuation:S.sizeAttenuation,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0&&j>0,maxBones:j,useVertexTexture:d,morphTargets:!!D.geometry&&!!D.geometry.morphAttributes.position,morphNormals:!!D.geometry&&!!D.geometry.morphAttributes.normal,morphTargetsCount:D.geometry&&D.geometry.morphAttributes.position?D.geometry.morphAttributes.position.length:0,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,format:S.format,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:S.toneMapped?r.toneMapping:ni,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===nr,flipSided:S.side===vt,depthPacking:S.depthPacking!==void 0?S.depthPacking:!1,index0AttributeName:S.index0AttributeName,extensionDerivatives:S.extensions&&S.extensions.derivatives,extensionFragDepth:S.extensions&&S.extensions.fragDepth,extensionDrawBuffers:S.extensions&&S.extensions.drawBuffers,extensionShaderTextureLOD:S.extensions&&S.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function _(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const z in S.defines)T.push(z),T.push(S.defines[z]);return S.isRawShaderMaterial===!1&&(y(T,S),C(T,S),T.push(r.outputEncoding)),T.push(S.customProgramCacheKey),T.join()}function y(S,T){S.push(T.precision),S.push(T.outputEncoding),S.push(T.mapEncoding),S.push(T.matcapEncoding),S.push(T.envMapMode),S.push(T.envMapEncoding),S.push(T.lightMapEncoding),S.push(T.emissiveMapEncoding),S.push(T.combine),S.push(T.vertexUvs),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.maxBones),S.push(T.morphTargetsCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.format),S.push(T.specularColorMapEncoding),S.push(T.sheenColorMapEncoding)}function C(S,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.map&&o.enable(4),T.matcap&&o.enable(5),T.envMap&&o.enable(6),T.envMapCubeUV&&o.enable(7),T.lightMap&&o.enable(8),T.aoMap&&o.enable(9),T.emissiveMap&&o.enable(10),T.bumpMap&&o.enable(11),T.normalMap&&o.enable(12),T.objectSpaceNormalMap&&o.enable(13),T.tangentSpaceNormalMap&&o.enable(14),T.clearcoat&&o.enable(15),T.clearcoatMap&&o.enable(16),T.clearcoatRoughnessMap&&o.enable(17),T.clearcoatNormalMap&&o.enable(18),T.displacementMap&&o.enable(19),T.specularMap&&o.enable(20),T.roughnessMap&&o.enable(21),T.metalnessMap&&o.enable(22),T.gradientMap&&o.enable(23),T.alphaMap&&o.enable(24),T.alphaTest&&o.enable(25),T.vertexColors&&o.enable(26),T.vertexAlphas&&o.enable(27),T.vertexUvs&&o.enable(28),T.vertexTangents&&o.enable(29),T.uvsVertexOnly&&o.enable(30),T.fog&&o.enable(31),S.push(o.mask),o.disableAll(),T.useFog&&o.enable(0),T.flatShading&&o.enable(1),T.logarithmicDepthBuffer&&o.enable(2),T.skinning&&o.enable(3),T.useVertexTexture&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.premultipliedAlpha&&o.enable(7),T.shadowMapEnabled&&o.enable(8),T.physicallyCorrectLights&&o.enable(9),T.doubleSided&&o.enable(10),T.flipSided&&o.enable(11),T.depthPacking&&o.enable(12),T.dithering&&o.enable(13),T.specularIntensityMap&&o.enable(14),T.specularColorMap&&o.enable(15),T.transmission&&o.enable(16),T.transmissionMap&&o.enable(17),T.thicknessMap&&o.enable(18),T.sheen&&o.enable(19),T.sheenColorMap&&o.enable(20),T.sheenRoughnessMap&&o.enable(21),S.push(o.mask)}function L(S){const T=x[S.type];let z;if(T){const I=xn[T];z=Ip.clone(I.uniforms)}else z=S.uniforms;return z}function F(S,T){let z;for(let I=0,D=c.length;I<D;I++){const N=c[I];if(N.cacheKey===T){z=N,++z.usedTimes;break}}return z===void 0&&(z=new I0(r,T,S,s),c.push(z)),z}function V(S){if(--S.usedTimes===0){const T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),S.destroy()}}function k(S){l.remove(S)}function R(){l.dispose()}return{getParameters:b,getProgramCacheKey:_,getUniforms:L,acquireProgram:F,releaseProgram:V,releaseShaderCache:k,programs:c,dispose:R}}function k0(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function B0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ac(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Cc(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,p,g,v,x){let f=r[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:x},r[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=v,f.group=x),e++,f}function o(h,d,p,g,v,x){const f=a(h,d,p,g,v,x);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(h,d,p,g,v,x){const f=a(h,d,p,g,v,x);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||B0),n.length>1&&n.sort(d||Ac),i.length>1&&i.sort(d||Ac)}function u(){for(let h=e,d=r.length;h<d;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function O0(){let r=new WeakMap;function e(n,i){let s;return r.has(n)===!1?(s=new Cc,r.set(n,[s])):i>=r.get(n).length?(s=new Cc,r.get(n).push(s)):s=r.get(n)[i],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function U0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new De};break;case"SpotLight":t={position:new P,direction:new P,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new P,halfWidth:new P,halfHeight:new P};break}return r[e.id]=t,t}}}function V0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let H0=0;function G0(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function W0(r,e){const t=new U0,n=V0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new P);const s=new P,a=new ze,o=new ze;function l(u,h){let d=0,p=0,g=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let v=0,x=0,f=0,m=0,b=0,_=0,y=0,C=0;u.sort(G0);const L=h!==!0?Math.PI:1;for(let V=0,k=u.length;V<k;V++){const R=u[V],S=R.color,T=R.intensity,z=R.distance,I=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=S.r*T*L,p+=S.g*T*L,g+=S.b*T*L;else if(R.isLightProbe)for(let D=0;D<9;D++)i.probe[D].addScaledVector(R.sh.coefficients[D],T);else if(R.isDirectionalLight){const D=t.get(R);if(D.color.copy(R.color).multiplyScalar(R.intensity*L),R.castShadow){const N=R.shadow,K=n.get(R);K.shadowBias=N.bias,K.shadowNormalBias=N.normalBias,K.shadowRadius=N.radius,K.shadowMapSize=N.mapSize,i.directionalShadow[v]=K,i.directionalShadowMap[v]=I,i.directionalShadowMatrix[v]=R.shadow.matrix,_++}i.directional[v]=D,v++}else if(R.isSpotLight){const D=t.get(R);if(D.position.setFromMatrixPosition(R.matrixWorld),D.color.copy(S).multiplyScalar(T*L),D.distance=z,D.coneCos=Math.cos(R.angle),D.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),D.decay=R.decay,R.castShadow){const N=R.shadow,K=n.get(R);K.shadowBias=N.bias,K.shadowNormalBias=N.normalBias,K.shadowRadius=N.radius,K.shadowMapSize=N.mapSize,i.spotShadow[f]=K,i.spotShadowMap[f]=I,i.spotShadowMatrix[f]=R.shadow.matrix,C++}i.spot[f]=D,f++}else if(R.isRectAreaLight){const D=t.get(R);D.color.copy(S).multiplyScalar(T),D.halfWidth.set(R.width*.5,0,0),D.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=D,m++}else if(R.isPointLight){const D=t.get(R);if(D.color.copy(R.color).multiplyScalar(R.intensity*L),D.distance=R.distance,D.decay=R.decay,R.castShadow){const N=R.shadow,K=n.get(R);K.shadowBias=N.bias,K.shadowNormalBias=N.normalBias,K.shadowRadius=N.radius,K.shadowMapSize=N.mapSize,K.shadowCameraNear=N.camera.near,K.shadowCameraFar=N.camera.far,i.pointShadow[x]=K,i.pointShadowMap[x]=I,i.pointShadowMatrix[x]=R.shadow.matrix,y++}i.point[x]=D,x++}else if(R.isHemisphereLight){const D=t.get(R);D.skyColor.copy(R.color).multiplyScalar(T*L),D.groundColor.copy(R.groundColor).multiplyScalar(T*L),i.hemi[b]=D,b++}}m>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;const F=i.hash;(F.directionalLength!==v||F.pointLength!==x||F.spotLength!==f||F.rectAreaLength!==m||F.hemiLength!==b||F.numDirectionalShadows!==_||F.numPointShadows!==y||F.numSpotShadows!==C)&&(i.directional.length=v,i.spot.length=f,i.rectArea.length=m,i.point.length=x,i.hemi.length=b,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=y,i.spotShadowMatrix.length=C,F.directionalLength=v,F.pointLength=x,F.spotLength=f,F.rectAreaLength=m,F.hemiLength=b,F.numDirectionalShadows=_,F.numPointShadows=y,F.numSpotShadows=C,i.version=H0++)}function c(u,h){let d=0,p=0,g=0,v=0,x=0;const f=h.matrixWorldInverse;for(let m=0,b=u.length;m<b;m++){const _=u[m];if(_.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),d++}else if(_.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(f),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),g++}else if(_.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(f),o.identity(),a.copy(_.matrixWorld),a.premultiply(f),o.extractRotation(a),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){const y=i.point[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(f),p++}else if(_.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(f),y.direction.normalize(),x++}}}return{setup:l,setupView:c,state:i}}function Lc(r,e){const t=new W0(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function q0(r,e){let t=new WeakMap;function n(s,a=0){let o;return t.has(s)===!1?(o=new Lc(r,e),t.set(s,[o])):a>=t.get(s).length?(o=new Lc(r,e),t.get(s).push(o)):o=t.get(s)[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class lh extends Dt{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=fp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}lh.prototype.isMeshDepthMaterial=!0;class ch extends Dt{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new P,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}ch.prototype.isMeshDistanceMaterial=!0;const j0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X0=`uniform sampler2D shadow_pass;
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
}`;function uh(r,e,t){let n=new xa;const i=new he,s=new he,a=new ot,o=new lh({depthPacking:pp}),l=new ch,c={},u=t.maxTextureSize,h={0:vt,1:jr,2:nr},d=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:j0,fragmentShader:X0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new ut;g.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Bt(g,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bu,this.render=function(_,y,C){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||_.length===0)return;const L=r.getRenderTarget(),F=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),k=r.state;k.setBlending(ti),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);for(let R=0,S=_.length;R<S;R++){const T=_[R],z=T.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",T,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const I=z.getFrameExtents();if(i.multiply(I),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/I.x),i.x=s.x*I.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/I.y),i.y=s.y*I.y,z.mapSize.y=s.y)),z.map===null&&!z.isPointLightShadow&&this.type===Dr){const N={minFilter:kt,magFilter:kt,format:St};z.map=new sn(i.x,i.y,N),z.map.texture.name=T.name+".shadowMap",z.mapPass=new sn(i.x,i.y,N),z.camera.updateProjectionMatrix()}if(z.map===null){const N={minFilter:xt,magFilter:xt,format:St};z.map=new sn(i.x,i.y,N),z.map.texture.name=T.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const D=z.getViewportCount();for(let N=0;N<D;N++){const K=z.getViewport(N);a.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),k.viewport(a),z.updateMatrices(T,N),n=z.getFrustum(),b(y,C,z.camera,T,this.type)}!z.isPointLightShadow&&this.type===Dr&&f(z,C),z.needsUpdate=!1}x.needsUpdate=!1,r.setRenderTarget(L,F,V)};function f(_,y){const C=e.update(v);d.defines.VSM_SAMPLES!==_.blurSamples&&(d.defines.VSM_SAMPLES=_.blurSamples,p.defines.VSM_SAMPLES=_.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),d.uniforms.shadow_pass.value=_.map.texture,d.uniforms.resolution.value=_.mapSize,d.uniforms.radius.value=_.radius,r.setRenderTarget(_.mapPass),r.clear(),r.renderBufferDirect(y,null,C,d,v,null),p.uniforms.shadow_pass.value=_.mapPass.texture,p.uniforms.resolution.value=_.mapSize,p.uniforms.radius.value=_.radius,r.setRenderTarget(_.map),r.clear(),r.renderBufferDirect(y,null,C,p,v,null)}function m(_,y,C,L,F,V,k){let R=null;const S=L.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(S!==void 0?R=S:R=L.isPointLight===!0?l:o,r.localClippingEnabled&&C.clipShadows===!0&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0){const T=R.uuid,z=C.uuid;let I=c[T];I===void 0&&(I={},c[T]=I);let D=I[z];D===void 0&&(D=R.clone(),I[z]=D),R=D}return R.visible=C.visible,R.wireframe=C.wireframe,k===Dr?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:h[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaTest,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,L.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(L.matrixWorld),R.nearDistance=F,R.farDistance=V),R}function b(_,y,C,L,F){if(_.visible===!1)return;if(_.layers.test(y.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&F===Dr)&&(!_.frustumCulled||n.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,_.matrixWorld);const R=e.update(_),S=_.material;if(Array.isArray(S)){const T=R.groups;for(let z=0,I=T.length;z<I;z++){const D=T[z],N=S[D.materialIndex];if(N&&N.visible){const K=m(_,R,N,L,C.near,C.far,F);r.renderBufferDirect(C,null,R,K,_,D)}}}else if(S.visible){const T=m(_,R,S,L,C.near,C.far,F);r.renderBufferDirect(C,null,R,T,_,null)}}const k=_.children;for(let R=0,S=k.length;R<S;R++)b(k[R],y,C,L,F)}}function Y0(r,e,t){const n=t.isWebGL2;function i(){let M=!1;const le=new ot;let J=null;const Fe=new ot(0,0,0,0);return{setMask:function(we){J!==we&&!M&&(r.colorMask(we,we,we,we),J=we)},setLocked:function(we){M=we},setClear:function(we,Ge,ge,Oe,tt){tt===!0&&(we*=Oe,Ge*=Oe,ge*=Oe),le.set(we,Ge,ge,Oe),Fe.equals(le)===!1&&(r.clearColor(we,Ge,ge,Oe),Fe.copy(le))},reset:function(){M=!1,J=null,Fe.set(-1,0,0,0)}}}function s(){let M=!1,le=null,J=null,Fe=null;return{setTest:function(we){we?ie(2929):me(2929)},setMask:function(we){le!==we&&!M&&(r.depthMask(we),le=we)},setFunc:function(we){if(J!==we){if(we)switch(we){case nf:r.depthFunc(512);break;case rf:r.depthFunc(519);break;case sf:r.depthFunc(513);break;case wo:r.depthFunc(515);break;case af:r.depthFunc(514);break;case of:r.depthFunc(518);break;case lf:r.depthFunc(516);break;case cf:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);J=we}},setLocked:function(we){M=we},setClear:function(we){Fe!==we&&(r.clearDepth(we),Fe=we)},reset:function(){M=!1,le=null,J=null,Fe=null}}}function a(){let M=!1,le=null,J=null,Fe=null,we=null,Ge=null,ge=null,Oe=null,tt=null;return{setTest:function(Je){M||(Je?ie(2960):me(2960))},setMask:function(Je){le!==Je&&!M&&(r.stencilMask(Je),le=Je)},setFunc:function(Je,qt,jt){(J!==Je||Fe!==qt||we!==jt)&&(r.stencilFunc(Je,qt,jt),J=Je,Fe=qt,we=jt)},setOp:function(Je,qt,jt){(Ge!==Je||ge!==qt||Oe!==jt)&&(r.stencilOp(Je,qt,jt),Ge=Je,ge=qt,Oe=jt)},setLocked:function(Je){M=Je},setClear:function(Je){tt!==Je&&(r.clearStencil(Je),tt=Je)},reset:function(){M=!1,le=null,J=null,Fe=null,we=null,Ge=null,ge=null,Oe=null,tt=null}}}const o=new i,l=new s,c=new a;let u={},h={},d=null,p=!1,g=null,v=null,x=null,f=null,m=null,b=null,_=null,y=!1,C=null,L=null,F=null,V=null,k=null;const R=r.getParameter(35661);let S=!1,T=0;const z=r.getParameter(7938);z.indexOf("WebGL")!==-1?(T=parseFloat(/^WebGL (\d)/.exec(z)[1]),S=T>=1):z.indexOf("OpenGL ES")!==-1&&(T=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),S=T>=2);let I=null,D={};const N=r.getParameter(3088),K=r.getParameter(2978),ce=new ot().fromArray(N),G=new ot().fromArray(K);function j(M,le,J){const Fe=new Uint8Array(4),we=r.createTexture();r.bindTexture(M,we),r.texParameteri(M,10241,9728),r.texParameteri(M,10240,9728);for(let Ge=0;Ge<J;Ge++)r.texImage2D(le+Ge,0,6408,1,1,0,6408,5121,Fe);return we}const ee={};ee[3553]=j(3553,3553,1),ee[34067]=j(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ie(2929),l.setFunc(wo),We(!1),q(Pl),ie(2884),xe(ti);function ie(M){u[M]!==!0&&(r.enable(M),u[M]=!0)}function me(M){u[M]!==!1&&(r.disable(M),u[M]=!1)}function Ce(M,le){return h[M]!==le?(r.bindFramebuffer(M,le),h[M]=le,n&&(M===36009&&(h[36160]=le),M===36160&&(h[36009]=le)),!0):!1}function $(M){return d!==M?(r.useProgram(M),d=M,!0):!1}const Me={[Yi]:32774,[qd]:32778,[jd]:32779};if(n)Me[zl]=32775,Me[Nl]=32776;else{const M=e.get("EXT_blend_minmax");M!==null&&(Me[zl]=M.MIN_EXT,Me[Nl]=M.MAX_EXT)}const Se={[Xd]:0,[Yd]:1,[Zd]:768,[Uu]:770,[tf]:776,[Kd]:774,[$d]:772,[Jd]:769,[Vu]:771,[ef]:775,[Qd]:773};function xe(M,le,J,Fe,we,Ge,ge,Oe){if(M===ti){p===!0&&(me(3042),p=!1);return}if(p===!1&&(ie(3042),p=!0),M!==Wd){if(M!==g||Oe!==y){if((v!==Yi||m!==Yi)&&(r.blendEquation(32774),v=Yi,m=Yi),Oe)switch(M){case Ur:r.blendFuncSeparate(1,771,1,771);break;case Il:r.blendFunc(1,1);break;case Dl:r.blendFuncSeparate(0,0,769,771);break;case Fl:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}else switch(M){case Ur:r.blendFuncSeparate(770,771,1,771);break;case Il:r.blendFunc(770,1);break;case Dl:r.blendFunc(0,769);break;case Fl:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}x=null,f=null,b=null,_=null,g=M,y=Oe}return}we=we||le,Ge=Ge||J,ge=ge||Fe,(le!==v||we!==m)&&(r.blendEquationSeparate(Me[le],Me[we]),v=le,m=we),(J!==x||Fe!==f||Ge!==b||ge!==_)&&(r.blendFuncSeparate(Se[J],Se[Fe],Se[Ge],Se[ge]),x=J,f=Fe,b=Ge,_=ge),g=M,y=null}function Ee(M,le){M.side===nr?me(2884):ie(2884);let J=M.side===vt;le&&(J=!J),We(J),M.blending===Ur&&M.transparent===!1?xe(ti):xe(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.premultipliedAlpha),l.setFunc(M.depthFunc),l.setTest(M.depthTest),l.setMask(M.depthWrite),o.setMask(M.colorWrite);const Fe=M.stencilWrite;c.setTest(Fe),Fe&&(c.setMask(M.stencilWriteMask),c.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),c.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),ue(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?ie(32926):me(32926)}function We(M){C!==M&&(M?r.frontFace(2304):r.frontFace(2305),C=M)}function q(M){M!==Vd?(ie(2884),M!==L&&(M===Pl?r.cullFace(1029):M===Hd?r.cullFace(1028):r.cullFace(1032))):me(2884),L=M}function se(M){M!==F&&(S&&r.lineWidth(M),F=M)}function ue(M,le,J){M?(ie(32823),(V!==le||k!==J)&&(r.polygonOffset(le,J),V=le,k=J)):me(32823)}function ye(M){M?ie(3089):me(3089)}function fe(M){M===void 0&&(M=33984+R-1),I!==M&&(r.activeTexture(M),I=M)}function Le(M,le){I===null&&fe();let J=D[I];J===void 0&&(J={type:void 0,texture:void 0},D[I]=J),(J.type!==M||J.texture!==le)&&(r.bindTexture(M,le||ee[M]),J.type=M,J.texture=le)}function Ae(){const M=D[I];M!==void 0&&M.type!==void 0&&(r.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)}function Ne(){try{r.compressedTexImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ke(){try{r.texSubImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function A(){try{r.texSubImage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function w(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function te(){try{r.texStorage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ae(){try{r.texStorage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function de(){try{r.texImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function re(){try{r.texImage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function be(M){ce.equals(M)===!1&&(r.scissor(M.x,M.y,M.z,M.w),ce.copy(M))}function Te(M){G.equals(M)===!1&&(r.viewport(M.x,M.y,M.z,M.w),G.copy(M))}function oe(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},I=null,D={},h={},d=null,p=!1,g=null,v=null,x=null,f=null,m=null,b=null,_=null,y=!1,C=null,L=null,F=null,V=null,k=null,ce.set(0,0,r.canvas.width,r.canvas.height),G.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ie,disable:me,bindFramebuffer:Ce,useProgram:$,setBlending:xe,setMaterial:Ee,setFlipSided:We,setCullFace:q,setLineWidth:se,setPolygonOffset:ue,setScissorTest:ye,activeTexture:fe,bindTexture:Le,unbindTexture:Ae,compressedTexImage2D:Ne,texImage2D:de,texImage3D:re,texStorage2D:te,texStorage3D:ae,texSubImage2D:ke,texSubImage3D:A,compressedTexSubImage2D:w,scissor:be,viewport:Te,reset:oe}}function Z0(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):void 0,g=new WeakMap;let v,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(A,w){return x?new OffscreenCanvas(A,w):ga("canvas")}function m(A,w,te,ae){let de=1;if((A.width>ae||A.height>ae)&&(de=ae/Math.max(A.width,A.height)),de<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const re=w?xp:Math.floor,be=re(de*A.width),Te=re(de*A.height);v===void 0&&(v=f(be,Te));const oe=te?f(be,Te):v;return oe.width=be,oe.height=Te,oe.getContext("2d").drawImage(A,0,0,be,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+be+"x"+Te+")."),oe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function b(A){return Jl(A.width)&&Jl(A.height)}function _(A){return o?!1:A.wrapS!==$t||A.wrapT!==$t||A.minFilter!==xt&&A.minFilter!==kt}function y(A,w){return A.generateMipmaps&&w&&A.minFilter!==xt&&A.minFilter!==kt}function C(A){r.generateMipmap(A)}function L(A,w,te,ae){if(o===!1)return w;if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let de=w;return w===6403&&(te===5126&&(de=33326),te===5131&&(de=33325),te===5121&&(de=33321)),w===6407&&(te===5126&&(de=34837),te===5131&&(de=34843),te===5121&&(de=32849)),w===6408&&(te===5126&&(de=34836),te===5131&&(de=34842),te===5121&&(de=ae===lr?35907:32856)),(de===33325||de===33326||de===34842||de===34836)&&e.get("EXT_color_buffer_float"),de}function F(A,w,te){return y(A,te)===!0||A.isFramebufferTexture&&A.minFilter!==xt&&A.minFilter!==kt?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function V(A){return A===xt||A===kl||A===Bl?9728:9729}function k(A){const w=A.target;w.removeEventListener("dispose",k),S(w),w.isVideoTexture&&g.delete(w),a.memory.textures--}function R(A){const w=A.target;w.removeEventListener("dispose",R),T(w)}function S(A){const w=n.get(A);w.__webglInit!==void 0&&(r.deleteTexture(w.__webglTexture),n.remove(A))}function T(A){const w=A.texture,te=n.get(A),ae=n.get(w);if(A){if(ae.__webglTexture!==void 0&&(r.deleteTexture(ae.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let de=0;de<6;de++)r.deleteFramebuffer(te.__webglFramebuffer[de]),te.__webglDepthbuffer&&r.deleteRenderbuffer(te.__webglDepthbuffer[de]);else r.deleteFramebuffer(te.__webglFramebuffer),te.__webglDepthbuffer&&r.deleteRenderbuffer(te.__webglDepthbuffer),te.__webglMultisampledFramebuffer&&r.deleteFramebuffer(te.__webglMultisampledFramebuffer),te.__webglColorRenderbuffer&&r.deleteRenderbuffer(te.__webglColorRenderbuffer),te.__webglDepthRenderbuffer&&r.deleteRenderbuffer(te.__webglDepthRenderbuffer);if(A.isWebGLMultipleRenderTargets)for(let de=0,re=w.length;de<re;de++){const be=n.get(w[de]);be.__webglTexture&&(r.deleteTexture(be.__webglTexture),a.memory.textures--),n.remove(w[de])}n.remove(w),n.remove(A)}}let z=0;function I(){z=0}function D(){const A=z;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),z+=1,A}function N(A,w){const te=n.get(A);if(A.isVideoTexture&&fe(A),A.version>0&&te.__version!==A.version){const ae=A.image;if(ae===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(te,A,w);return}}t.activeTexture(33984+w),t.bindTexture(3553,te.__webglTexture)}function K(A,w){const te=n.get(A);if(A.version>0&&te.__version!==A.version){Ce(te,A,w);return}t.activeTexture(33984+w),t.bindTexture(35866,te.__webglTexture)}function ce(A,w){const te=n.get(A);if(A.version>0&&te.__version!==A.version){Ce(te,A,w);return}t.activeTexture(33984+w),t.bindTexture(32879,te.__webglTexture)}function G(A,w){const te=n.get(A);if(A.version>0&&te.__version!==A.version){$(te,A,w);return}t.activeTexture(33984+w),t.bindTexture(34067,te.__webglTexture)}const j={[Eo]:10497,[$t]:33071,[Ao]:33648},ee={[xt]:9728,[kl]:9984,[Bl]:9986,[kt]:9729,[vf]:9985,[ma]:9987};function ie(A,w,te){if(te?(r.texParameteri(A,10242,j[w.wrapS]),r.texParameteri(A,10243,j[w.wrapT]),(A===32879||A===35866)&&r.texParameteri(A,32882,j[w.wrapR]),r.texParameteri(A,10240,ee[w.magFilter]),r.texParameteri(A,10241,ee[w.minFilter])):(r.texParameteri(A,10242,33071),r.texParameteri(A,10243,33071),(A===32879||A===35866)&&r.texParameteri(A,32882,33071),(w.wrapS!==$t||w.wrapT!==$t)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(A,10240,V(w.magFilter)),r.texParameteri(A,10241,V(w.minFilter)),w.minFilter!==xt&&w.minFilter!==kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(w.type===Kn&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===Mi&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(r.texParameterf(A,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function me(A,w){A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",k),A.__webglTexture=r.createTexture(),a.memory.textures++)}function Ce(A,w,te){let ae=3553;w.isDataTexture2DArray&&(ae=35866),w.isDataTexture3D&&(ae=32879),me(A,w),t.activeTexture(33984+te),t.bindTexture(ae,A.__webglTexture),r.pixelStorei(37440,w.flipY),r.pixelStorei(37441,w.premultiplyAlpha),r.pixelStorei(3317,w.unpackAlignment),r.pixelStorei(37443,0);const de=_(w)&&b(w.image)===!1,re=m(w.image,de,!1,u),be=b(re)||o,Te=s.convert(w.format);let oe=s.convert(w.type),M=L(w.internalFormat,Te,oe,w.encoding);ie(ae,w,be);let le;const J=w.mipmaps,Fe=o&&w.isVideoTexture!==!0,we=A.__version===void 0,Ge=F(w,re,be);if(w.isDepthTexture)M=6402,o?w.type===Kn?M=36012:w.type===Xs?M=33190:w.type===Ki?M=35056:M=33189:w.type===Kn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Si&&M===6402&&w.type!==Xr&&w.type!==Xs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Xr,oe=s.convert(w.type)),w.format===ir&&M===6402&&(M=34041,w.type!==Ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Ki,oe=s.convert(w.type))),Fe&&we?t.texStorage2D(3553,1,M,re.width,re.height):t.texImage2D(3553,0,M,re.width,re.height,0,Te,oe,null);else if(w.isDataTexture)if(J.length>0&&be){Fe&&we&&t.texStorage2D(3553,Ge,M,J[0].width,J[0].height);for(let ge=0,Oe=J.length;ge<Oe;ge++)le=J[ge],Fe?t.texSubImage2D(3553,0,0,0,le.width,le.height,Te,oe,le.data):t.texImage2D(3553,ge,M,le.width,le.height,0,Te,oe,le.data);w.generateMipmaps=!1}else Fe?(we&&t.texStorage2D(3553,Ge,M,re.width,re.height),t.texSubImage2D(3553,0,0,0,re.width,re.height,Te,oe,re.data)):t.texImage2D(3553,0,M,re.width,re.height,0,Te,oe,re.data);else if(w.isCompressedTexture){Fe&&we&&t.texStorage2D(3553,Ge,M,J[0].width,J[0].height);for(let ge=0,Oe=J.length;ge<Oe;ge++)le=J[ge],w.format!==St&&w.format!==wi?Te!==null?Fe?t.compressedTexSubImage2D(3553,ge,0,0,le.width,le.height,Te,le.data):t.compressedTexImage2D(3553,ge,M,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?t.texSubImage2D(3553,ge,0,0,le.width,le.height,Te,oe,le.data):t.texImage2D(3553,ge,M,le.width,le.height,0,Te,oe,le.data)}else if(w.isDataTexture2DArray)Fe?(we&&t.texStorage3D(35866,Ge,M,re.width,re.height,re.depth),t.texSubImage3D(35866,0,0,0,0,re.width,re.height,re.depth,Te,oe,re.data)):t.texImage3D(35866,0,M,re.width,re.height,re.depth,0,Te,oe,re.data);else if(w.isDataTexture3D)Fe?(we&&t.texStorage3D(32879,Ge,M,re.width,re.height,re.depth),t.texSubImage3D(32879,0,0,0,0,re.width,re.height,re.depth,Te,oe,re.data)):t.texImage3D(32879,0,M,re.width,re.height,re.depth,0,Te,oe,re.data);else if(w.isFramebufferTexture)Fe&&we?t.texStorage2D(3553,Ge,M,re.width,re.height):t.texImage2D(3553,0,M,re.width,re.height,0,Te,oe,null);else if(J.length>0&&be){Fe&&we&&t.texStorage2D(3553,Ge,M,J[0].width,J[0].height);for(let ge=0,Oe=J.length;ge<Oe;ge++)le=J[ge],Fe?t.texSubImage2D(3553,ge,0,0,Te,oe,le):t.texImage2D(3553,ge,M,Te,oe,le);w.generateMipmaps=!1}else Fe?(we&&t.texStorage2D(3553,Ge,M,re.width,re.height),t.texSubImage2D(3553,0,0,0,Te,oe,re)):t.texImage2D(3553,0,M,Te,oe,re);y(w,be)&&C(ae),A.__version=w.version,w.onUpdate&&w.onUpdate(w)}function $(A,w,te){if(w.image.length!==6)return;me(A,w),t.activeTexture(33984+te),t.bindTexture(34067,A.__webglTexture),r.pixelStorei(37440,w.flipY),r.pixelStorei(37441,w.premultiplyAlpha),r.pixelStorei(3317,w.unpackAlignment),r.pixelStorei(37443,0);const ae=w&&(w.isCompressedTexture||w.image[0].isCompressedTexture),de=w.image[0]&&w.image[0].isDataTexture,re=[];for(let ge=0;ge<6;ge++)!ae&&!de?re[ge]=m(w.image[ge],!1,!0,c):re[ge]=de?w.image[ge].image:w.image[ge];const be=re[0],Te=b(be)||o,oe=s.convert(w.format),M=s.convert(w.type),le=L(w.internalFormat,oe,M,w.encoding),J=o&&w.isVideoTexture!==!0,Fe=A.__version===void 0;let we=F(w,be,Te);ie(34067,w,Te);let Ge;if(ae){J&&Fe&&t.texStorage2D(34067,we,le,be.width,be.height);for(let ge=0;ge<6;ge++){Ge=re[ge].mipmaps;for(let Oe=0;Oe<Ge.length;Oe++){const tt=Ge[Oe];w.format!==St&&w.format!==wi?oe!==null?J?t.compressedTexSubImage2D(34069+ge,Oe,0,0,tt.width,tt.height,oe,tt.data):t.compressedTexImage2D(34069+ge,Oe,le,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?t.texSubImage2D(34069+ge,Oe,0,0,tt.width,tt.height,oe,M,tt.data):t.texImage2D(34069+ge,Oe,le,tt.width,tt.height,0,oe,M,tt.data)}}}else{Ge=w.mipmaps,J&&Fe&&(Ge.length>0&&we++,t.texStorage2D(34067,we,le,re[0].width,re[0].height));for(let ge=0;ge<6;ge++)if(de){J?t.texSubImage2D(34069+ge,0,0,0,re[ge].width,re[ge].height,oe,M,re[ge].data):t.texImage2D(34069+ge,0,le,re[ge].width,re[ge].height,0,oe,M,re[ge].data);for(let Oe=0;Oe<Ge.length;Oe++){const Je=Ge[Oe].image[ge].image;J?t.texSubImage2D(34069+ge,Oe+1,0,0,Je.width,Je.height,oe,M,Je.data):t.texImage2D(34069+ge,Oe+1,le,Je.width,Je.height,0,oe,M,Je.data)}}else{J?t.texSubImage2D(34069+ge,0,0,0,oe,M,re[ge]):t.texImage2D(34069+ge,0,le,oe,M,re[ge]);for(let Oe=0;Oe<Ge.length;Oe++){const tt=Ge[Oe];J?t.texSubImage2D(34069+ge,Oe+1,0,0,oe,M,tt.image[ge]):t.texImage2D(34069+ge,Oe+1,le,oe,M,tt.image[ge])}}}y(w,Te)&&C(34067),A.__version=w.version,w.onUpdate&&w.onUpdate(w)}function Me(A,w,te,ae,de){const re=s.convert(te.format),be=s.convert(te.type),Te=L(te.internalFormat,re,be,te.encoding);n.get(w).__hasExternalTextures||(de===32879||de===35866?t.texImage3D(de,0,Te,w.width,w.height,w.depth,0,re,be,null):t.texImage2D(de,0,Te,w.width,w.height,0,re,be,null)),t.bindFramebuffer(36160,A),w.useRenderToTexture?p.framebufferTexture2DMultisampleEXT(36160,ae,de,n.get(te).__webglTexture,0,ye(w)):r.framebufferTexture2D(36160,ae,de,n.get(te).__webglTexture,0),t.bindFramebuffer(36160,null)}function Se(A,w,te){if(r.bindRenderbuffer(36161,A),w.depthBuffer&&!w.stencilBuffer){let ae=33189;if(te||w.useRenderToTexture){const de=w.depthTexture;de&&de.isDepthTexture&&(de.type===Kn?ae=36012:de.type===Xs&&(ae=33190));const re=ye(w);w.useRenderToTexture?p.renderbufferStorageMultisampleEXT(36161,re,ae,w.width,w.height):r.renderbufferStorageMultisample(36161,re,ae,w.width,w.height)}else r.renderbufferStorage(36161,ae,w.width,w.height);r.framebufferRenderbuffer(36160,36096,36161,A)}else if(w.depthBuffer&&w.stencilBuffer){const ae=ye(w);te&&w.useRenderbuffer?r.renderbufferStorageMultisample(36161,ae,35056,w.width,w.height):w.useRenderToTexture?p.renderbufferStorageMultisampleEXT(36161,ae,35056,w.width,w.height):r.renderbufferStorage(36161,34041,w.width,w.height),r.framebufferRenderbuffer(36160,33306,36161,A)}else{const ae=w.isWebGLMultipleRenderTargets===!0?w.texture[0]:w.texture,de=s.convert(ae.format),re=s.convert(ae.type),be=L(ae.internalFormat,de,re,ae.encoding),Te=ye(w);te&&w.useRenderbuffer?r.renderbufferStorageMultisample(36161,Te,be,w.width,w.height):w.useRenderToTexture?p.renderbufferStorageMultisampleEXT(36161,Te,be,w.width,w.height):r.renderbufferStorage(36161,be,w.width,w.height)}r.bindRenderbuffer(36161,null)}function xe(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),N(w.depthTexture,0);const ae=n.get(w.depthTexture).__webglTexture,de=ye(w);if(w.depthTexture.format===Si)w.useRenderToTexture?p.framebufferTexture2DMultisampleEXT(36160,36096,3553,ae,0,de):r.framebufferTexture2D(36160,36096,3553,ae,0);else if(w.depthTexture.format===ir)w.useRenderToTexture?p.framebufferTexture2DMultisampleEXT(36160,33306,3553,ae,0,de):r.framebufferTexture2D(36160,33306,3553,ae,0);else throw new Error("Unknown depthTexture format")}function Ee(A){const w=n.get(A),te=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");xe(w.__webglFramebuffer,A)}else if(te){w.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(36160,w.__webglFramebuffer[ae]),w.__webglDepthbuffer[ae]=r.createRenderbuffer(),Se(w.__webglDepthbuffer[ae],A,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=r.createRenderbuffer(),Se(w.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function We(A,w,te){const ae=n.get(A);w!==void 0&&Me(ae.__webglFramebuffer,A,A.texture,36064,3553),te!==void 0&&Ee(A)}function q(A){const w=A.texture,te=n.get(A),ae=n.get(w);A.addEventListener("dispose",R),A.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture()),ae.__version=w.version,a.memory.textures++);const de=A.isWebGLCubeRenderTarget===!0,re=A.isWebGLMultipleRenderTargets===!0,be=w.isDataTexture3D||w.isDataTexture2DArray,Te=b(A)||o;if(o&&w.format===wi&&(w.type===Kn||w.type===Mi)&&(w.format=St,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),de){te.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)te.__webglFramebuffer[oe]=r.createFramebuffer()}else if(te.__webglFramebuffer=r.createFramebuffer(),re)if(i.drawBuffers){const oe=A.texture;for(let M=0,le=oe.length;M<le;M++){const J=n.get(oe[M]);J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(A.useRenderbuffer)if(o){te.__webglMultisampledFramebuffer=r.createFramebuffer(),te.__webglColorRenderbuffer=r.createRenderbuffer(),r.bindRenderbuffer(36161,te.__webglColorRenderbuffer);const oe=s.convert(w.format),M=s.convert(w.type),le=L(w.internalFormat,oe,M,w.encoding),J=ye(A);r.renderbufferStorageMultisample(36161,J,le,A.width,A.height),t.bindFramebuffer(36160,te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064,36161,te.__webglColorRenderbuffer),r.bindRenderbuffer(36161,null),A.depthBuffer&&(te.__webglDepthRenderbuffer=r.createRenderbuffer(),Se(te.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(de){t.bindTexture(34067,ae.__webglTexture),ie(34067,w,Te);for(let oe=0;oe<6;oe++)Me(te.__webglFramebuffer[oe],A,w,36064,34069+oe);y(w,Te)&&C(34067),t.unbindTexture()}else if(re){const oe=A.texture;for(let M=0,le=oe.length;M<le;M++){const J=oe[M],Fe=n.get(J);t.bindTexture(3553,Fe.__webglTexture),ie(3553,J,Te),Me(te.__webglFramebuffer,A,J,36064+M,3553),y(J,Te)&&C(3553)}t.unbindTexture()}else{let oe=3553;be&&(o?oe=w.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(oe,ae.__webglTexture),ie(oe,w,Te),Me(te.__webglFramebuffer,A,w,36064,oe),y(w,Te)&&C(oe),t.unbindTexture()}A.depthBuffer&&Ee(A)}function se(A){const w=b(A)||o,te=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ae=0,de=te.length;ae<de;ae++){const re=te[ae];if(y(re,w)){const be=A.isWebGLCubeRenderTarget?34067:3553,Te=n.get(re).__webglTexture;t.bindTexture(be,Te),C(be),t.unbindTexture()}}}function ue(A){if(A.useRenderbuffer)if(o){const w=A.width,te=A.height;let ae=16384;const de=[36064],re=A.stencilBuffer?33306:36096;A.depthBuffer&&de.push(re),A.ignoreDepthForMultisampleCopy||(A.depthBuffer&&(ae|=256),A.stencilBuffer&&(ae|=1024));const be=n.get(A);t.bindFramebuffer(36008,be.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,be.__webglFramebuffer),A.ignoreDepthForMultisampleCopy&&(r.invalidateFramebuffer(36008,[re]),r.invalidateFramebuffer(36009,[re])),r.blitFramebuffer(0,0,w,te,0,0,w,te,ae,9728),r.invalidateFramebuffer(36008,de),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,be.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function ye(A){return o&&(A.useRenderbuffer||A.useRenderToTexture)?Math.min(h,A.samples):0}function fe(A){const w=a.render.frame;g.get(A)!==w&&(g.set(A,w),A.update())}let Le=!1,Ae=!1;function Ne(A,w){A&&A.isWebGLRenderTarget&&(Le===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),Le=!0),A=A.texture),N(A,w)}function ke(A,w){A&&A.isWebGLCubeRenderTarget&&(Ae===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),Ae=!0),A=A.texture),G(A,w)}this.allocateTextureUnit=D,this.resetTextureUnits=I,this.setTexture2D=N,this.setTexture2DArray=K,this.setTexture3D=ce,this.setTextureCube=G,this.rebindTextures=We,this.setupRenderTarget=q,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Me,this.safeSetTexture2D=Ne,this.safeSetTextureCube=ke}function J0(r,e,t){const n=t.isWebGL2;function i(s){let a;if(s===On)return 5121;if(s===bf)return 32819;if(s===Mf)return 32820;if(s===wf)return 33635;if(s===xf)return 5120;if(s===_f)return 5122;if(s===Xr)return 5123;if(s===yf)return 5124;if(s===Xs)return 5125;if(s===Kn)return 5126;if(s===Mi)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Sf)return 6406;if(s===wi)return 6407;if(s===St)return 6408;if(s===Tf)return 6409;if(s===Ef)return 6410;if(s===Si)return 6402;if(s===ir)return 34041;if(s===Af)return 6403;if(s===Cf)return 36244;if(s===Lf)return 33319;if(s===Rf)return 33320;if(s===Pf)return 36248;if(s===If)return 36249;if(s===Ol||s===Ul||s===Vl||s===Hl)if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ol)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ul)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Vl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Hl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Gl||s===Wl||s===ql||s===jl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Gl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Wl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ql)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===jl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Df)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===Xl||s===Yl)&&(a=e.get("WEBGL_compressed_texture_etc"),a!==null)){if(s===Xl)return a.COMPRESSED_RGB8_ETC2;if(s===Yl)return a.COMPRESSED_RGBA8_ETC2_EAC}if(s===Ff||s===zf||s===Nf||s===kf||s===Bf||s===Of||s===Uf||s===Vf||s===Hf||s===Gf||s===Wf||s===qf||s===jf||s===Xf||s===Zf||s===Jf||s===$f||s===Qf||s===Kf||s===ep||s===tp||s===np||s===ip||s===rp||s===sp||s===ap||s===op||s===lp)return a=e.get("WEBGL_compressed_texture_astc"),a!==null?s:null;if(s===Yf)return a=e.get("EXT_texture_compression_bptc"),a!==null?s:null;if(s===Ki)return n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class hh extends Nt{constructor(e=[]){super(),this.cameras=e}}hh.prototype.isArrayCamera=!0;class zr extends rt{constructor(){super(),this.type="Group"}}zr.prototype.isGroup=!0;const $0={type:"move"};class ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($0))),c&&e.hand){a=!0;for(const v of e.hand.values()){const x=t.getJointPose(v,n);if(c.joints[v.jointName]===void 0){const m=new zr;m.matrixAutoUpdate=!1,m.visible=!1,c.joints[v.jointName]=m,c.add(m)}const f=c.joints[v.jointName];x!==null&&(f.matrix.fromArray(x.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.jointRadius=x.radius),f.visible=x!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class Ro extends Et{constructor(e,t,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:Si,u!==Si&&u!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Si&&(n=Xr),n===void 0&&u===ir&&(n=Ki),super(null,i,s,a,o,l,u,n,c),this.image={width:e,height:t},this.magFilter=o!==void 0?o:xt,this.minFilter=l!==void 0?l:xt,this.flipY=!1,this.generateMipmaps=!1}}Ro.prototype.isDepthTexture=!0;class Q0 extends Ti{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor";const l=e.extensions.has("WEBGL_multisampled_render_to_texture");let c=null,u=null,h=null,d=null,p=!1,g=null;const v=t.getContextAttributes();let x=null,f=null;const m=[],b=new Map,_=new Nt;_.layers.enable(1),_.viewport=new ot;const y=new Nt;y.layers.enable(2),y.viewport=new ot;const C=[_,y],L=new hh;L.layers.enable(1),L.layers.enable(2);let F=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let j=m[G];return j===void 0&&(j=new ro,m[G]=j),j.getTargetRaySpace()},this.getControllerGrip=function(G){let j=m[G];return j===void 0&&(j=new ro,m[G]=j),j.getGripSpace()},this.getHand=function(G){let j=m[G];return j===void 0&&(j=new ro,m[G]=j),j.getHandSpace()};function k(G){const j=b.get(G.inputSource);j&&j.dispatchEvent({type:G.type,data:G.inputSource})}function R(){b.forEach(function(G,j){G.disconnect(j)}),b.clear(),F=null,V=null,e.setRenderTarget(x),d=null,h=null,u=null,i=null,f=null,ce.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",R),i.addEventListener("inputsourceschange",S),v.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,j),i.updateRenderState({baseLayer:d}),f=new sn(d.framebufferWidth,d.framebufferHeight,{format:St,type:On,encoding:e.outputEncoding})}else{p=v.antialias;let j=null,ee=null,ie=null;v.depth&&(ie=v.stencil?35056:33190,j=v.stencil?ir:Si,ee=v.stencil?Ki:Xr);const me={colorFormat:v.alpha||p?32856:32849,depthFormat:ie,scaleFactor:s};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(me),i.updateRenderState({layers:[h]}),p?f=new Qo(h.textureWidth,h.textureHeight,{format:St,type:On,depthTexture:new Ro(h.textureWidth,h.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:v.stencil,ignoreDepth:h.ignoreDepthValues,useRenderToTexture:l,encoding:e.outputEncoding}):f=new sn(h.textureWidth,h.textureHeight,{format:v.alpha?St:wi,type:On,depthTexture:new Ro(h.textureWidth,h.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:v.stencil,ignoreDepth:h.ignoreDepthValues,encoding:e.outputEncoding})}this.setFoveation(1),a=await i.requestReferenceSpace(o),ce.setContext(i),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function S(G){const j=i.inputSources;for(let ee=0;ee<m.length;ee++)b.set(j[ee],m[ee]);for(let ee=0;ee<G.removed.length;ee++){const ie=G.removed[ee],me=b.get(ie);me&&(me.dispatchEvent({type:"disconnected",data:ie}),b.delete(ie))}for(let ee=0;ee<G.added.length;ee++){const ie=G.added[ee],me=b.get(ie);me&&me.dispatchEvent({type:"connected",data:ie})}}const T=new P,z=new P;function I(G,j,ee){T.setFromMatrixPosition(j.matrixWorld),z.setFromMatrixPosition(ee.matrixWorld);const ie=T.distanceTo(z),me=j.projectionMatrix.elements,Ce=ee.projectionMatrix.elements,$=me[14]/(me[10]-1),Me=me[14]/(me[10]+1),Se=(me[9]+1)/me[5],xe=(me[9]-1)/me[5],Ee=(me[8]-1)/me[0],We=(Ce[8]+1)/Ce[0],q=$*Ee,se=$*We,ue=ie/(-Ee+We),ye=ue*-Ee;j.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ye),G.translateZ(ue),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const fe=$+ue,Le=Me+ue,Ae=q-ye,Ne=se+(ie-ye),ke=Se*Me/Le*fe,A=xe*Me/Le*fe;G.projectionMatrix.makePerspective(Ae,Ne,ke,A,fe,Le)}function D(G,j){j===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(j.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;L.near=y.near=_.near=G.near,L.far=y.far=_.far=G.far,(F!==L.near||V!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),F=L.near,V=L.far);const j=G.parent,ee=L.cameras;D(L,j);for(let me=0;me<ee.length;me++)D(ee[me],j);L.matrixWorld.decompose(L.position,L.quaternion,L.scale),G.position.copy(L.position),G.quaternion.copy(L.quaternion),G.scale.copy(L.scale),G.matrix.copy(L.matrix),G.matrixWorld.copy(L.matrixWorld);const ie=G.children;for(let me=0,Ce=ie.length;me<Ce;me++)ie[me].updateMatrixWorld(!0);ee.length===2?I(L,_,y):L.projectionMatrix.copy(_.projectionMatrix)},this.getCamera=function(){return L},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(G){h!==null&&(h.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)};let N=null;function K(G,j){if(c=j.getViewerPose(a),g=j,c!==null){const ie=c.views;d!==null&&(e.setRenderTargetFramebuffer(f,d.framebuffer),e.setRenderTarget(f));let me=!1;ie.length!==L.cameras.length&&(L.cameras.length=0,me=!0);for(let Ce=0;Ce<ie.length;Ce++){const $=ie[Ce];let Me=null;if(d!==null)Me=d.getViewport($);else{const xe=u.getViewSubImage(h,$);Me=xe.viewport,Ce===0&&(e.setRenderTargetTextures(f,xe.colorTexture,h.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(f))}const Se=C[Ce];Se.matrix.fromArray($.transform.matrix),Se.projectionMatrix.fromArray($.projectionMatrix),Se.viewport.set(Me.x,Me.y,Me.width,Me.height),Ce===0&&L.matrix.copy(Se.matrix),me===!0&&L.cameras.push(Se)}}const ee=i.inputSources;for(let ie=0;ie<m.length;ie++){const me=m[ie],Ce=ee[ie];me.update(Ce,j,a)}N&&N(G,j),g=null}const ce=new Ju;ce.setAnimationLoop(K),this.setAnimationLoop=function(G){N=G},this.dispose=function(){}}}function K0(r){function e(f,m){f.fogColor.value.copy(m.color),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function t(f,m,b,_,y){m.isMeshBasicMaterial?n(f,m):m.isMeshLambertMaterial?(n(f,m),l(f,m)):m.isMeshToonMaterial?(n(f,m),u(f,m)):m.isMeshPhongMaterial?(n(f,m),c(f,m)):m.isMeshStandardMaterial?(n(f,m),m.isMeshPhysicalMaterial?d(f,m,y):h(f,m)):m.isMeshMatcapMaterial?(n(f,m),p(f,m)):m.isMeshDepthMaterial?(n(f,m),g(f,m)):m.isMeshDistanceMaterial?(n(f,m),v(f,m)):m.isMeshNormalMaterial?(n(f,m),x(f,m)):m.isLineBasicMaterial?(i(f,m),m.isLineDashedMaterial&&s(f,m)):m.isPointsMaterial?a(f,m,b,_):m.isSpriteMaterial?o(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function n(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map),m.alphaMap&&(f.alphaMap.value=m.alphaMap),m.specularMap&&(f.specularMap.value=m.specularMap),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const b=r.get(m).envMap;b&&(f.envMap.value=b,f.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity);let _;m.map?_=m.map:m.specularMap?_=m.specularMap:m.displacementMap?_=m.displacementMap:m.normalMap?_=m.normalMap:m.bumpMap?_=m.bumpMap:m.roughnessMap?_=m.roughnessMap:m.metalnessMap?_=m.metalnessMap:m.alphaMap?_=m.alphaMap:m.emissiveMap?_=m.emissiveMap:m.clearcoatMap?_=m.clearcoatMap:m.clearcoatNormalMap?_=m.clearcoatNormalMap:m.clearcoatRoughnessMap?_=m.clearcoatRoughnessMap:m.specularIntensityMap?_=m.specularIntensityMap:m.specularColorMap?_=m.specularColorMap:m.transmissionMap?_=m.transmissionMap:m.thicknessMap?_=m.thicknessMap:m.sheenColorMap?_=m.sheenColorMap:m.sheenRoughnessMap&&(_=m.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),f.uvTransform.value.copy(_.matrix));let y;m.aoMap?y=m.aoMap:m.lightMap&&(y=m.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),f.uv2Transform.value.copy(y.matrix))}function i(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity}function s(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function a(f,m,b,_){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*b,f.scale.value=_*.5,m.map&&(f.map.value=m.map),m.alphaMap&&(f.alphaMap.value=m.alphaMap),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let y;m.map?y=m.map:m.alphaMap&&(y=m.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),f.uvTransform.value.copy(y.matrix))}function o(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map),m.alphaMap&&(f.alphaMap.value=m.alphaMap),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let b;m.map?b=m.map:m.alphaMap&&(b=m.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),f.uvTransform.value.copy(b.matrix))}function l(f,m){m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap)}function c(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap),m.bumpMap&&(f.bumpMap.value=m.bumpMap,f.bumpScale.value=m.bumpScale,m.side===vt&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,f.normalScale.value.copy(m.normalScale),m.side===vt&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias)}function u(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap),m.bumpMap&&(f.bumpMap.value=m.bumpMap,f.bumpScale.value=m.bumpScale,m.side===vt&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,f.normalScale.value.copy(m.normalScale),m.side===vt&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias)}function h(f,m){f.roughness.value=m.roughness,f.metalness.value=m.metalness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap),m.bumpMap&&(f.bumpMap.value=m.bumpMap,f.bumpScale.value=m.bumpScale,m.side===vt&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,f.normalScale.value.copy(m.normalScale),m.side===vt&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),r.get(m).envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function d(f,m,b){h(f,m),f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),f.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===vt&&f.clearcoatNormalScale.value.negate())),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=b.texture,f.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap)}function p(f,m){m.matcap&&(f.matcap.value=m.matcap),m.bumpMap&&(f.bumpMap.value=m.bumpMap,f.bumpScale.value=m.bumpScale,m.side===vt&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,f.normalScale.value.copy(m.normalScale),m.side===vt&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias)}function g(f,m){m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias)}function v(f,m){m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),f.referencePosition.value.copy(m.referencePosition),f.nearDistance.value=m.nearDistance,f.farDistance.value=m.farDistance}function x(f,m){m.bumpMap&&(f.bumpMap.value=m.bumpMap,f.bumpScale.value=m.bumpScale,m.side===vt&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,f.normalScale.value.copy(m.normalScale),m.side===vt&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function ex(){const r=ga("canvas");return r.style.display="block",r}function st(r={}){const e=r.canvas!==void 0?r.canvas:ex(),t=r.context!==void 0?r.context:null,n=r.alpha!==void 0?r.alpha:!1,i=r.depth!==void 0?r.depth:!0,s=r.stencil!==void 0?r.stencil:!0,a=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,l=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",u=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let h=null,d=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=dn,this.physicallyCorrectLights=!1,this.toneMapping=ni,this.toneMappingExposure=1;const v=this;let x=!1,f=0,m=0,b=null,_=-1,y=null;const C=new ot,L=new ot;let F=null,V=e.width,k=e.height,R=1,S=null,T=null;const z=new ot(0,0,V,k),I=new ot(0,0,V,k);let D=!1;const N=[],K=new xa;let ce=!1,G=!1,j=null;const ee=new ze,ie=new P,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ce(){return b===null?R:1}let $=t;function Me(E,U){for(let X=0;X<E.length;X++){const H=E[X],ne=e.getContext(H,U);if(ne!==null)return ne}return null}try{const E={alpha:n,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Zo}`),e.addEventListener("webglcontextlost",Fe,!1),e.addEventListener("webglcontextrestored",we,!1),$===null){const U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),$=Me(U,E),$===null)throw Me(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Se,xe,Ee,We,q,se,ue,ye,fe,Le,Ae,Ne,ke,A,w,te,ae,de,re,be,Te,oe,M;function le(){Se=new yv($),xe=new fv($,Se,r),Se.init(xe),oe=new J0($,Se,xe),Ee=new Y0($,Se,xe),N[0]=1029,We=new wv,q=new k0,se=new Z0($,Se,Ee,q,xe,oe,We),ue=new mv(v),ye=new _v(v),fe=new kp($,xe),M=new hv($,Se,fe,xe),Le=new bv($,fe,We,M),Ae=new Av($,Le,fe,We),re=new Ev($,xe,se),te=new pv(q),Ne=new N0(v,ue,ye,Se,xe,M,te),ke=new K0(q),A=new O0,w=new q0(Se,xe),de=new uv(v,ue,Ee,Ae,o),ae=new uh(v,Ae,xe),be=new dv($,Se,We,xe),Te=new Mv($,Se,We,xe),We.programs=Ne.programs,v.capabilities=xe,v.extensions=Se,v.properties=q,v.renderLists=A,v.shadowMap=ae,v.state=Ee,v.info=We}le();const J=new Q0(v,$);this.xr=J,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const E=Se.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Se.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return R},this.setPixelRatio=function(E){E!==void 0&&(R=E,this.setSize(V,k,!1))},this.getSize=function(E){return E.set(V,k)},this.setSize=function(E,U,X){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=E,k=U,e.width=Math.floor(E*R),e.height=Math.floor(U*R),X!==!1&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(V*R,k*R).floor()},this.setDrawingBufferSize=function(E,U,X){V=E,k=U,R=X,e.width=Math.floor(E*X),e.height=Math.floor(U*X),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(z)},this.setViewport=function(E,U,X,H){E.isVector4?z.set(E.x,E.y,E.z,E.w):z.set(E,U,X,H),Ee.viewport(C.copy(z).multiplyScalar(R).floor())},this.getScissor=function(E){return E.copy(I)},this.setScissor=function(E,U,X,H){E.isVector4?I.set(E.x,E.y,E.z,E.w):I.set(E,U,X,H),Ee.scissor(L.copy(I).multiplyScalar(R).floor())},this.getScissorTest=function(){return D},this.setScissorTest=function(E){Ee.setScissorTest(D=E)},this.setOpaqueSort=function(E){S=E},this.setTransparentSort=function(E){T=E},this.getClearColor=function(E){return E.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(E,U,X){let H=0;(E===void 0||E)&&(H|=16384),(U===void 0||U)&&(H|=256),(X===void 0||X)&&(H|=1024),$.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Fe,!1),e.removeEventListener("webglcontextrestored",we,!1),A.dispose(),w.dispose(),q.dispose(),ue.dispose(),ye.dispose(),Ae.dispose(),M.dispose(),Ne.dispose(),J.dispose(),J.removeEventListener("sessionstart",qt),J.removeEventListener("sessionend",jt),j&&(j.dispose(),j=null),Ut.stop()};function Fe(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const E=We.autoReset,U=ae.enabled,X=ae.autoUpdate,H=ae.needsUpdate,ne=ae.type;le(),We.autoReset=E,ae.enabled=U,ae.autoUpdate=X,ae.needsUpdate=H,ae.type=ne}function Ge(E){const U=E.target;U.removeEventListener("dispose",Ge),ge(U)}function ge(E){Oe(E),q.remove(E)}function Oe(E){const U=q.get(E).programs;U!==void 0&&(U.forEach(function(X){Ne.releaseProgram(X)}),E.isShaderMaterial&&Ne.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,X,H,ne,Ue){U===null&&(U=me);const He=ne.isMesh&&ne.matrixWorld.determinant()<0,qe=ls(E,U,X,H,ne);Ee.setMaterial(H,He);let Ve=X.index;const $e=X.attributes.position;if(Ve===null){if($e===void 0||$e.count===0)return}else if(Ve.count===0)return;let je=1;H.wireframe===!0&&(Ve=Le.getWireframeAttribute(X),je=2),M.setup(ne,H,qe,X,Ve);let Ze,ft=be;Ve!==null&&(Ze=fe.get(Ve),ft=Te,ft.setIndex(Ze));const di=Ve!==null?Ve.count:$e.count,Ci=X.drawRange.start*je,Ke=X.drawRange.count*je,pn=Ue!==null?Ue.start*je:0,gt=Ue!==null?Ue.count*je:1/0,mn=Math.max(Ci,pn),cs=Math.min(di,Ci+Ke,pn+gt)-1,gn=Math.max(0,cs-mn+1);if(gn!==0){if(ne.isMesh)H.wireframe===!0?(Ee.setLineWidth(H.wireframeLinewidth*Ce()),ft.setMode(1)):ft.setMode(4);else if(ne.isLine){let An=H.linewidth;An===void 0&&(An=1),Ee.setLineWidth(An*Ce()),ne.isLineSegments?ft.setMode(1):ne.isLineLoop?ft.setMode(2):ft.setMode(3)}else ne.isPoints?ft.setMode(0):ne.isSprite&&ft.setMode(4);if(ne.isInstancedMesh)ft.renderInstances(mn,gn,ne.count);else if(X.isInstancedBufferGeometry){const An=Math.min(X.instanceCount,X._maxInstanceCount);ft.renderInstances(mn,gn,An)}else ft.render(mn,gn)}},this.compile=function(E,U){d=w.get(E),d.init(),g.push(d),E.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(d.pushLight(X),X.castShadow&&d.pushShadow(X))}),d.setupLights(v.physicallyCorrectLights),E.traverse(function(X){const H=X.material;if(H)if(Array.isArray(H))for(let ne=0;ne<H.length;ne++){const Ue=H[ne];Ai(Ue,E,X)}else Ai(H,E,X)}),g.pop(),d=null};let tt=null;function Je(E){tt&&tt(E)}function qt(){Ut.stop()}function jt(){Ut.start()}const Ut=new Ju;Ut.setAnimationLoop(Je),typeof window<"u"&&Ut.setContext(window),this.setAnimationLoop=function(E){tt=E,J.setAnimationLoop(E),E===null?Ut.stop():Ut.start()},J.addEventListener("sessionstart",qt),J.addEventListener("sessionend",jt),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;E.autoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(U),U=J.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,U,b),d=w.get(E,g.length),d.init(),g.push(d),ee.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),K.setFromProjectionMatrix(ee),G=this.localClippingEnabled,ce=te.init(this.clippingPlanes,G,U),h=A.get(E,p.length),h.init(),p.push(h),xr(E,U,0,v.sortObjects),h.finish(),v.sortObjects===!0&&h.sort(S,T),ce===!0&&te.beginShadows();const X=d.state.shadowsArray;if(ae.render(X,E,U),ce===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset(),de.render(h,E),d.setupLights(v.physicallyCorrectLights),U.isArrayCamera){const H=U.cameras;for(let ne=0,Ue=H.length;ne<Ue;ne++){const He=H[ne];_r(h,E,He,He.viewport)}}else _r(h,E,U);b!==null&&(se.updateMultisampleRenderTarget(b),se.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(v,E,U),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1),M.resetDefaultState(),_=-1,y=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,p.pop(),p.length>0?h=p[p.length-1]:h=null};function xr(E,U,X,H){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||K.intersectsSprite(E)){H&&ie.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ee);const He=Ae.update(E),qe=E.material;qe.visible&&h.push(E,He,qe,X,ie.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==We.render.frame&&(E.skeleton.update(),E.skeleton.frame=We.render.frame),!E.frustumCulled||K.intersectsObject(E))){H&&ie.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ee);const He=Ae.update(E),qe=E.material;if(Array.isArray(qe)){const Ve=He.groups;for(let $e=0,je=Ve.length;$e<je;$e++){const Ze=Ve[$e],ft=qe[Ze.materialIndex];ft&&ft.visible&&h.push(E,He,ft,X,ie.z,Ze)}}else qe.visible&&h.push(E,He,qe,X,ie.z,null)}}const Ue=E.children;for(let He=0,qe=Ue.length;He<qe;He++)xr(Ue[He],U,X,H)}function _r(E,U,X,H){const ne=E.opaque,Ue=E.transmissive,He=E.transparent;d.setupLightsView(X),Ue.length>0&&os(ne,U,X),H&&Ee.viewport(C.copy(H)),ne.length>0&&hi(ne,U,X),Ue.length>0&&hi(Ue,U,X),He.length>0&&hi(He,U,X)}function os(E,U,X){if(j===null){const He=a===!0&&xe.isWebGL2===!0?Qo:sn;j=new He(1024,1024,{generateMipmaps:!0,type:oe.convert(Mi)!==null?Mi:On,minFilter:ma,magFilter:xt,wrapS:$t,wrapT:$t,useRenderToTexture:Se.has("WEBGL_multisampled_render_to_texture")})}const H=v.getRenderTarget();v.setRenderTarget(j),v.clear();const ne=v.toneMapping;v.toneMapping=ni,hi(E,U,X),v.toneMapping=ne,se.updateMultisampleRenderTarget(j),se.updateRenderTargetMipmap(j),v.setRenderTarget(H)}function hi(E,U,X){const H=U.isScene===!0?U.overrideMaterial:null;for(let ne=0,Ue=E.length;ne<Ue;ne++){const He=E[ne],qe=He.object,Ve=He.geometry,$e=H===null?He.material:H,je=He.group;qe.layers.test(X.layers)&&Ei(qe,U,X,Ve,$e,je)}}function Ei(E,U,X,H,ne,Ue){E.onBeforeRender(v,U,X,H,ne,Ue),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),ne.onBeforeRender(v,U,X,H,E,Ue),ne.transparent===!0&&ne.side===nr?(ne.side=vt,ne.needsUpdate=!0,v.renderBufferDirect(X,U,H,ne,E,Ue),ne.side=jr,ne.needsUpdate=!0,v.renderBufferDirect(X,U,H,ne,E,Ue),ne.side=nr):v.renderBufferDirect(X,U,H,ne,E,Ue),E.onAfterRender(v,U,X,H,ne,Ue)}function Ai(E,U,X){U.isScene!==!0&&(U=me);const H=q.get(E),ne=d.state.lights,Ue=d.state.shadowsArray,He=ne.state.version,qe=Ne.getParameters(E,ne.state,Ue,U,X),Ve=Ne.getProgramCacheKey(qe);let $e=H.programs;H.environment=E.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(E.isMeshStandardMaterial?ye:ue).get(E.envMap||H.environment),$e===void 0&&(E.addEventListener("dispose",Ge),$e=new Map,H.programs=$e);let je=$e.get(Ve);if(je!==void 0){if(H.currentProgram===je&&H.lightsStateVersion===He)return yr(E,qe),je}else qe.uniforms=Ne.getUniforms(E),E.onBuild(X,qe,v),E.onBeforeCompile(qe,v),je=Ne.acquireProgram(qe,Ve),$e.set(Ve,je),H.uniforms=qe.uniforms;const Ze=H.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ze.clippingPlanes=te.uniform),yr(E,qe),H.needsLights=Uh(E),H.lightsStateVersion=He,H.needsLights&&(Ze.ambientLightColor.value=ne.state.ambient,Ze.lightProbe.value=ne.state.probe,Ze.directionalLights.value=ne.state.directional,Ze.directionalLightShadows.value=ne.state.directionalShadow,Ze.spotLights.value=ne.state.spot,Ze.spotLightShadows.value=ne.state.spotShadow,Ze.rectAreaLights.value=ne.state.rectArea,Ze.ltc_1.value=ne.state.rectAreaLTC1,Ze.ltc_2.value=ne.state.rectAreaLTC2,Ze.pointLights.value=ne.state.point,Ze.pointLightShadows.value=ne.state.pointShadow,Ze.hemisphereLights.value=ne.state.hemi,Ze.directionalShadowMap.value=ne.state.directionalShadowMap,Ze.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ze.spotShadowMap.value=ne.state.spotShadowMap,Ze.spotShadowMatrix.value=ne.state.spotShadowMatrix,Ze.pointShadowMap.value=ne.state.pointShadowMap,Ze.pointShadowMatrix.value=ne.state.pointShadowMatrix);const ft=je.getUniforms(),di=ri.seqWithValue(ft.seq,Ze);return H.currentProgram=je,H.uniformsList=di,je}function yr(E,U){const X=q.get(E);X.outputEncoding=U.outputEncoding,X.instancing=U.instancing,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function ls(E,U,X,H,ne){U.isScene!==!0&&(U=me),se.resetTextureUnits();const Ue=U.fog,He=H.isMeshStandardMaterial?U.environment:null,qe=b===null?v.outputEncoding:b.texture.encoding,Ve=(H.isMeshStandardMaterial?ye:ue).get(H.envMap||He),$e=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,je=!!H.normalMap&&!!X.attributes.tangent,Ze=!!X.morphAttributes.position,ft=!!X.morphAttributes.normal,di=X.morphAttributes.position?X.morphAttributes.position.length:0,Ci=H.toneMapped?v.toneMapping:ni,Ke=q.get(H),pn=d.state.lights;if(ce===!0&&(G===!0||E!==y)){const on=E===y&&H.id===_;te.setState(H,E,on)}let gt=!1;H.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==pn.state.version||Ke.outputEncoding!==qe||ne.isInstancedMesh&&Ke.instancing===!1||!ne.isInstancedMesh&&Ke.instancing===!0||ne.isSkinnedMesh&&Ke.skinning===!1||!ne.isSkinnedMesh&&Ke.skinning===!0||Ke.envMap!==Ve||H.fog&&Ke.fog!==Ue||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==te.numPlanes||Ke.numIntersection!==te.numIntersection)||Ke.vertexAlphas!==$e||Ke.vertexTangents!==je||Ke.morphTargets!==Ze||Ke.morphNormals!==ft||Ke.toneMapping!==Ci||xe.isWebGL2===!0&&Ke.morphTargetsCount!==di)&&(gt=!0):(gt=!0,Ke.__version=H.version);let mn=Ke.currentProgram;gt===!0&&(mn=Ai(H,U,ne));let cs=!1,gn=!1,An=!1;const Lt=mn.getUniforms(),br=Ke.uniforms;if(Ee.useProgram(mn.program)&&(cs=!0,gn=!0,An=!0),H.id!==_&&(_=H.id,gn=!0),cs||y!==E){if(Lt.setValue($,"projectionMatrix",E.projectionMatrix),xe.logarithmicDepthBuffer&&Lt.setValue($,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),y!==E&&(y=E,gn=!0,An=!0),H.isShaderMaterial||H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshStandardMaterial||H.envMap){const on=Lt.map.cameraPosition;on!==void 0&&on.setValue($,ie.setFromMatrixPosition(E.matrixWorld))}(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Lt.setValue($,"isOrthographic",E.isOrthographicCamera===!0),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial||H.isShadowMaterial||ne.isSkinnedMesh)&&Lt.setValue($,"viewMatrix",E.matrixWorldInverse)}if(ne.isSkinnedMesh){Lt.setOptional($,ne,"bindMatrix"),Lt.setOptional($,ne,"bindMatrixInverse");const on=ne.skeleton;on&&(xe.floatVertexTextures?(on.boneTexture===null&&on.computeBoneTexture(),Lt.setValue($,"boneTexture",on.boneTexture,se),Lt.setValue($,"boneTextureSize",on.boneTextureSize)):Lt.setOptional($,on,"boneMatrices"))}return X&&(X.morphAttributes.position!==void 0||X.morphAttributes.normal!==void 0)&&re.update(ne,X,H,mn),(gn||Ke.receiveShadow!==ne.receiveShadow)&&(Ke.receiveShadow=ne.receiveShadow,Lt.setValue($,"receiveShadow",ne.receiveShadow)),gn&&(Lt.setValue($,"toneMappingExposure",v.toneMappingExposure),Ke.needsLights&&En(br,An),Ue&&H.fog&&ke.refreshFogUniforms(br,Ue),ke.refreshMaterialUniforms(br,H,R,k,j),ri.upload($,Ke.uniformsList,br,se)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ri.upload($,Ke.uniformsList,br,se),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Lt.setValue($,"center",ne.center),Lt.setValue($,"modelViewMatrix",ne.modelViewMatrix),Lt.setValue($,"normalMatrix",ne.normalMatrix),Lt.setValue($,"modelMatrix",ne.matrixWorld),mn}function En(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Uh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return f},this.getActiveMipmapLevel=function(){return m},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,U,X){q.get(E.texture).__webglTexture=U,q.get(E.depthTexture).__webglTexture=X;const H=q.get(E);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=X===void 0,H.__autoAllocateDepthBuffer||E.useRenderToTexture&&(console.warn("render-to-texture extension was disabled because an external texture was provided"),E.useRenderToTexture=!1,E.useRenderbuffer=!0))},this.setRenderTargetFramebuffer=function(E,U){const X=q.get(E);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,X=0){b=E,f=U,m=X;let H=!0;if(E){const Ve=q.get(E);Ve.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(36160,null),H=!1):Ve.__webglFramebuffer===void 0?se.setupRenderTarget(E):Ve.__hasExternalTextures&&se.rebindTextures(E,q.get(E.texture).__webglTexture,q.get(E.depthTexture).__webglTexture)}let ne=null,Ue=!1,He=!1;if(E){const Ve=E.texture;(Ve.isDataTexture3D||Ve.isDataTexture2DArray)&&(He=!0);const $e=q.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(ne=$e[U],Ue=!0):E.useRenderbuffer?ne=q.get(E).__webglMultisampledFramebuffer:ne=$e,C.copy(E.viewport),L.copy(E.scissor),F=E.scissorTest}else C.copy(z).multiplyScalar(R).floor(),L.copy(I).multiplyScalar(R).floor(),F=D;if(Ee.bindFramebuffer(36160,ne)&&xe.drawBuffers&&H){let Ve=!1;if(E)if(E.isWebGLMultipleRenderTargets){const $e=E.texture;if(N.length!==$e.length||N[0]!==36064){for(let je=0,Ze=$e.length;je<Ze;je++)N[je]=36064+je;N.length=$e.length,Ve=!0}}else(N.length!==1||N[0]!==36064)&&(N[0]=36064,N.length=1,Ve=!0);else(N.length!==1||N[0]!==1029)&&(N[0]=1029,N.length=1,Ve=!0);Ve&&(xe.isWebGL2?$.drawBuffers(N):Se.get("WEBGL_draw_buffers").drawBuffersWEBGL(N))}if(Ee.viewport(C),Ee.scissor(L),Ee.setScissorTest(F),Ue){const Ve=q.get(E.texture);$.framebufferTexture2D(36160,36064,34069+U,Ve.__webglTexture,X)}else if(He){const Ve=q.get(E.texture),$e=U||0;$.framebufferTextureLayer(36160,36064,Ve.__webglTexture,X||0,$e)}_=-1},this.readRenderTargetPixels=function(E,U,X,H,ne,Ue,He){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&He!==void 0&&(qe=qe[He]),qe){Ee.bindFramebuffer(36160,qe);try{const Ve=E.texture,$e=Ve.format,je=Ve.type;if($e!==St&&oe.convert($e)!==$.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ze=je===Mi&&(Se.has("EXT_color_buffer_half_float")||xe.isWebGL2&&Se.has("EXT_color_buffer_float"));if(je!==On&&oe.convert(je)!==$.getParameter(35738)&&!(je===Kn&&(xe.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$.checkFramebufferStatus(36160)===36053?U>=0&&U<=E.width-H&&X>=0&&X<=E.height-ne&&$.readPixels(U,X,H,ne,oe.convert($e),oe.convert(je),Ue):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Ve=b!==null?q.get(b).__webglFramebuffer:null;Ee.bindFramebuffer(36160,Ve)}}},this.copyFramebufferToTexture=function(E,U,X=0){if(U.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}const H=Math.pow(2,-X),ne=Math.floor(U.image.width*H),Ue=Math.floor(U.image.height*H);se.setTexture2D(U,0),$.copyTexSubImage2D(3553,X,0,0,E.x,E.y,ne,Ue),Ee.unbindTexture()},this.copyTextureToTexture=function(E,U,X,H=0){const ne=U.image.width,Ue=U.image.height,He=oe.convert(X.format),qe=oe.convert(X.type);se.setTexture2D(X,0),$.pixelStorei(37440,X.flipY),$.pixelStorei(37441,X.premultiplyAlpha),$.pixelStorei(3317,X.unpackAlignment),U.isDataTexture?$.texSubImage2D(3553,H,E.x,E.y,ne,Ue,He,qe,U.image.data):U.isCompressedTexture?$.compressedTexSubImage2D(3553,H,E.x,E.y,U.mipmaps[0].width,U.mipmaps[0].height,He,U.mipmaps[0].data):$.texSubImage2D(3553,H,E.x,E.y,He,qe,U.image),H===0&&X.generateMipmaps&&$.generateMipmap(3553),Ee.unbindTexture()},this.copyTextureToTexture3D=function(E,U,X,H,ne=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ue=E.max.x-E.min.x+1,He=E.max.y-E.min.y+1,qe=E.max.z-E.min.z+1,Ve=oe.convert(H.format),$e=oe.convert(H.type);let je;if(H.isDataTexture3D)se.setTexture3D(H,0),je=32879;else if(H.isDataTexture2DArray)se.setTexture2DArray(H,0),je=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei(37440,H.flipY),$.pixelStorei(37441,H.premultiplyAlpha),$.pixelStorei(3317,H.unpackAlignment);const Ze=$.getParameter(3314),ft=$.getParameter(32878),di=$.getParameter(3316),Ci=$.getParameter(3315),Ke=$.getParameter(32877),pn=X.isCompressedTexture?X.mipmaps[0]:X.image;$.pixelStorei(3314,pn.width),$.pixelStorei(32878,pn.height),$.pixelStorei(3316,E.min.x),$.pixelStorei(3315,E.min.y),$.pixelStorei(32877,E.min.z),X.isDataTexture||X.isDataTexture3D?$.texSubImage3D(je,ne,U.x,U.y,U.z,Ue,He,qe,Ve,$e,pn.data):X.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(je,ne,U.x,U.y,U.z,Ue,He,qe,Ve,pn.data)):$.texSubImage3D(je,ne,U.x,U.y,U.z,Ue,He,qe,Ve,$e,pn),$.pixelStorei(3314,Ze),$.pixelStorei(32878,ft),$.pixelStorei(3316,di),$.pixelStorei(3315,Ci),$.pixelStorei(32877,Ke),ne===0&&H.generateMipmaps&&$.generateMipmap(je),Ee.unbindTexture()},this.initTexture=function(E){se.setTexture2D(E,0),Ee.unbindTexture()},this.resetState=function(){f=0,m=0,b=null,Ee.reset(),M.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}st.prototype.isWebGLRenderer=!0;class tx extends st{}tx.prototype.isWebGL1Renderer=!0;class al extends rt{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}al.prototype.isScene=!0;class is{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Yr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}is.prototype.isInterleavedBuffer=!0;const pt=new P;class Zr{constructor(e,t,n,i=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pt.x=this.getX(t),pt.y=this.getY(t),pt.z=this.getZ(t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.x=this.getX(t),pt.y=this.getY(t),pt.z=this.getZ(t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.x=this.getX(t),pt.y=this.getY(t),pt.z=this.getZ(t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Zr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}Zr.prototype.isInterleavedBufferAttribute=!0;class dh extends Dt{constructor(e){super(),this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}dh.prototype.isSpriteMaterial=!0;let Wi;const Cr=new P,qi=new P,ji=new P,Xi=new he,Lr=new he,fh=new ze,Ps=new P,Rr=new P,Is=new P,Rc=new he,so=new he,Pc=new he;class nx extends rt{constructor(e){if(super(),this.type="Sprite",Wi===void 0){Wi=new ut;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new is(t,5);Wi.setIndex([0,1,2,0,2,3]),Wi.setAttribute("position",new Zr(n,3,0,!1)),Wi.setAttribute("uv",new Zr(n,2,3,!1))}this.geometry=Wi,this.material=e!==void 0?e:new dh,this.center=new he(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qi.setFromMatrixScale(this.matrixWorld),fh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ji.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qi.multiplyScalar(-ji.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;Ds(Ps.set(-.5,-.5,0),ji,a,qi,i,s),Ds(Rr.set(.5,-.5,0),ji,a,qi,i,s),Ds(Is.set(.5,.5,0),ji,a,qi,i,s),Rc.set(0,0),so.set(1,0),Pc.set(1,1);let o=e.ray.intersectTriangle(Ps,Rr,Is,!1,Cr);if(o===null&&(Ds(Rr.set(-.5,.5,0),ji,a,qi,i,s),so.set(0,1),o=e.ray.intersectTriangle(Ps,Is,Rr,!1,Cr),o===null))return;const l=e.ray.origin.distanceTo(Cr);l<e.near||l>e.far||t.push({distance:l,point:Cr.clone(),uv:_t.getUV(Cr,Ps,Rr,Is,Rc,so,Pc,new he),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}nx.prototype.isSprite=!0;function Ds(r,e,t,n,i,s){Xi.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Lr.x=s*Xi.x-i*Xi.y,Lr.y=i*Xi.x+s*Xi.y):Lr.copy(Xi),r.copy(e),r.x+=Lr.x,r.y+=Lr.y,r.applyMatrix4(fh)}const Ic=new P,Dc=new ot,Fc=new ot,ix=new P,zc=new ze;class ph extends Bt{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ze,this.bindMatrixInverse=new ze}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ot,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;Dc.fromBufferAttribute(i.attributes.skinIndex,e),Fc.fromBufferAttribute(i.attributes.skinWeight,e),Ic.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Fc.getComponent(s);if(a!==0){const o=Dc.getComponent(s);zc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(ix.copy(Ic).applyMatrix4(zc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}ph.prototype.isSkinnedMesh=!0;class rx extends rt{constructor(){super(),this.type="Bone"}}rx.prototype.isBone=!0;class sx extends Et{constructor(e=null,t=1,n=1,i,s,a,o,l,c=xt,u=xt,h,d){super(null,a,o,l,c,u,i,s,h,d),this.image={data:e,width:t,height:n},this.magFilter=c,this.minFilter=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}sx.prototype.isDataTexture=!0;class Po extends yt{constructor(e,t,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}Po.prototype.isInstancedBufferAttribute=!0;const Nc=new ze,kc=new ze,Fs=[],Pr=new Bt;class ax extends Bt{constructor(e,t,n){super(e,t),this.instanceMatrix=new Po(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Pr.geometry=this.geometry,Pr.material=this.material,Pr.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,Nc),kc.multiplyMatrices(n,Nc),Pr.matrixWorld=kc,Pr.raycast(e,Fs);for(let a=0,o=Fs.length;a<o;a++){const l=Fs[a];l.instanceId=s,l.object=this,t.push(l)}Fs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Po(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}ax.prototype.isInstancedMesh=!0;class rs extends Dt{constructor(e){super(),this.type="LineBasicMaterial",this.color=new De(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}rs.prototype.isLineBasicMaterial=!0;const Bc=new P,Oc=new P,Uc=new ze,ao=new dr,zs=new hr;class ol extends rt{constructor(e=new ut,t=new rs){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Bc.fromBufferAttribute(t,i-1),Oc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Bc.distanceTo(Oc);e.setAttribute("lineDistance",new Tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere),zs.applyMatrix4(i),zs.radius+=s,e.ray.intersectsSphere(zs)===!1)return;Uc.copy(i).invert(),ao.copy(e.ray).applyMatrix4(Uc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new P,u=new P,h=new P,d=new P,p=this.isLineSegments?2:1;if(n.isBufferGeometry){const g=n.index,x=n.attributes.position;if(g!==null){const f=Math.max(0,a.start),m=Math.min(g.count,a.start+a.count);for(let b=f,_=m-1;b<_;b+=p){const y=g.getX(b),C=g.getX(b+1);if(c.fromBufferAttribute(x,y),u.fromBufferAttribute(x,C),ao.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const F=e.ray.origin.distanceTo(d);F<e.near||F>e.far||t.push({distance:F,point:h.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),m=Math.min(x.count,a.start+a.count);for(let b=f,_=m-1;b<_;b+=p){if(c.fromBufferAttribute(x,b),u.fromBufferAttribute(x,b+1),ao.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||t.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}ol.prototype.isLine=!0;const Vc=new P,Hc=new P;class ll extends ol{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Vc.fromBufferAttribute(t,i),Hc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Vc.distanceTo(Hc);e.setAttribute("lineDistance",new Tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}ll.prototype.isLineSegments=!0;class ox extends ol{constructor(e,t){super(e,t),this.type="LineLoop"}}ox.prototype.isLineLoop=!0;class mh extends Dt{constructor(e){super(),this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}mh.prototype.isPointsMaterial=!0;const Gc=new ze,Io=new dr,Ns=new hr,ks=new P;class lx extends rt{constructor(e=new ut,t=new mh){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(i),Ns.radius+=s,e.ray.intersectsSphere(Ns)===!1)return;Gc.copy(i).invert(),Io.copy(e.ray).applyMatrix4(Gc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o;if(n.isBufferGeometry){const c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,v=p;g<v;g++){const x=c.getX(g);ks.fromBufferAttribute(h,x),Wc(ks,x,l,i,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,v=p;g<v;g++)ks.fromBufferAttribute(h,g),Wc(ks,g,l,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}lx.prototype.isPoints=!0;function Wc(r,e,t,n,i,s,a){const o=Io.distanceSqToPoint(r);if(o<t){const l=new P;Io.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class cx extends Et{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.format=o!==void 0?o:wi,this.minFilter=a!==void 0?a:kt,this.magFilter=s!==void 0?s:kt,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}cx.prototype.isVideoTexture=!0;class ux extends Et{constructor(e,t,n){super({width:e,height:t}),this.format=n,this.magFilter=xt,this.minFilter=xt,this.generateMipmaps=!1,this.needsUpdate=!0}}ux.prototype.isFramebufferTexture=!0;class hx extends Et{constructor(e,t,n,i,s,a,o,l,c,u,h,d){super(null,a,o,l,c,u,i,s,h,d),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}hx.prototype.isCompressedTexture=!0;class dx extends Et{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.needsUpdate=!0}}dx.prototype.isCanvasTexture=!0;class an{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const u=n[i],d=n[i+1]-u,p=(a-u)/d;return(i+p)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new he:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new P,i=[],s=[],a=[],o=new P,l=new ze;for(let p=0;p<=e;p++){const g=p/e;i[p]=this.getTangentAt(g,new P)}s[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Jt(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(Jt(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ma extends an{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new he,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}Ma.prototype.isEllipseCurve=!0;class gh extends Ma{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.type="ArcCurve"}}gh.prototype.isArcCurve=!0;function cl(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let d=(a-s)/c-(o-s)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,p*=u,i(a,o,d,p)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const Bs=new P,oo=new cl,lo=new cl,co=new cl;class vh extends an{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new P){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(Bs.subVectors(i[0],i[1]).add(i[0]),c=Bs);const h=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(Bs.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Bs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),x<1e-4&&(x=v),oo.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,v,x),lo.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,v,x),co.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,v,x)}else this.curveType==="catmullrom"&&(oo.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),lo.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),co.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(oo.calc(l),lo.calc(l),co.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new P().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}vh.prototype.isCatmullRomCurve3=!0;function qc(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function fx(r,e){const t=1-r;return t*t*e}function px(r,e){return 2*(1-r)*r*e}function mx(r,e){return r*r*e}function Vr(r,e,t,n){return fx(r,e)+px(r,t)+mx(r,n)}function gx(r,e){const t=1-r;return t*t*t*e}function vx(r,e){const t=1-r;return 3*t*t*r*e}function xx(r,e){return 3*(1-r)*r*r*e}function _x(r,e){return r*r*r*e}function Hr(r,e,t,n,i){return gx(r,e)+vx(r,t)+xx(r,n)+_x(r,i)}class ul extends an{constructor(e=new he,t=new he,n=new he,i=new he){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new he){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Hr(e,i.x,s.x,a.x,o.x),Hr(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}ul.prototype.isCubicBezierCurve=!0;class xh extends an{constructor(e=new P,t=new P,n=new P,i=new P){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new P){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Hr(e,i.x,s.x,a.x,o.x),Hr(e,i.y,s.y,a.y,o.y),Hr(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}xh.prototype.isCubicBezierCurve3=!0;class wa extends an{constructor(e=new he,t=new he){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new he;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}wa.prototype.isLineCurve=!0;class yx extends an{constructor(e=new P,t=new P){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hl extends an{constructor(e=new he,t=new he,n=new he){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Vr(e,i.x,s.x,a.x),Vr(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}hl.prototype.isQuadraticBezierCurve=!0;class _h extends an{constructor(e=new P,t=new P,n=new P){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Vr(e,i.x,s.x,a.x),Vr(e,i.y,s.y,a.y),Vr(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}_h.prototype.isQuadraticBezierCurve3=!0;class dl extends an{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(qc(o,l.x,c.x,u.x,h.x),qc(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new he().fromArray(i))}return this}}dl.prototype.isSplineCurve=!0;var yh=Object.freeze({__proto__:null,ArcCurve:gh,CatmullRomCurve3:vh,CubicBezierCurve:ul,CubicBezierCurve3:xh,EllipseCurve:Ma,LineCurve:wa,LineCurve3:yx,QuadraticBezierCurve:hl,QuadraticBezierCurve3:_h,SplineCurve:dl});class bx extends an{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new wa(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a&&a.isEllipseCurve?e*2:a&&(a.isLineCurve||a.isLineCurve3)?1:a&&a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new yh[i.type]().fromJSON(i))}return this}}class Do extends bx{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new wa(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new hl(this.currentPoint.clone(),new he(e,t),new he(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new ul(this.currentPoint.clone(),new he(e,t),new he(n,i),new he(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new dl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){const c=new Ma(e,t,n,i,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ss extends Do{constructor(e){super(e),this.uuid=Mn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Do().fromJSON(i))}return this}}const Mx={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=bh(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,h,d,p;if(n&&(s=Ax(r,e,s,t)),r.length>80*t){o=c=r[0],l=u=r[1];for(let g=t;g<i;g+=t)h=r[g],d=r[g+1],h<o&&(o=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);p=Math.max(c-o,u-l),p=p!==0?1/p:0}return Jr(s,a,t,o,l,p),a}};function bh(r,e,t,n,i){let s,a;if(i===Bx(r,e,t,n)>0)for(s=e;s<t;s+=n)a=jc(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=jc(s,r[s],r[s+1],a);return a&&Sa(a,a.next)&&(Qr(a),a=a.next),a}function ai(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Sa(t,t.next)||dt(t.prev,t,t.next)===0)){if(Qr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Jr(r,e,t,n,i,s,a){if(!r)return;!a&&s&&Ix(r,n,i,s);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?Sx(r,n,i,s):wx(r)){e.push(l.i/t),e.push(r.i/t),e.push(c.i/t),Qr(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=Tx(ai(r),e,t),Jr(r,e,t,n,i,s,2)):a===2&&Ex(r,e,t,n,i,s):Jr(ai(r),e,t,n,i,s,1);break}}}function wx(r){const e=r.prev,t=r,n=r.next;if(dt(e,t,n)>=0)return!1;let i=r.next.next;for(;i!==r.prev;){if(Qi(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&dt(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function Sx(r,e,t,n){const i=r.prev,s=r,a=r.next;if(dt(i,s,a)>=0)return!1;const o=i.x<s.x?i.x<a.x?i.x:a.x:s.x<a.x?s.x:a.x,l=i.y<s.y?i.y<a.y?i.y:a.y:s.y<a.y?s.y:a.y,c=i.x>s.x?i.x>a.x?i.x:a.x:s.x>a.x?s.x:a.x,u=i.y>s.y?i.y>a.y?i.y:a.y:s.y>a.y?s.y:a.y,h=Fo(o,l,e,t,n),d=Fo(c,u,e,t,n);let p=r.prevZ,g=r.nextZ;for(;p&&p.z>=h&&g&&g.z<=d;){if(p!==r.prev&&p!==r.next&&Qi(i.x,i.y,s.x,s.y,a.x,a.y,p.x,p.y)&&dt(p.prev,p,p.next)>=0||(p=p.prevZ,g!==r.prev&&g!==r.next&&Qi(i.x,i.y,s.x,s.y,a.x,a.y,g.x,g.y)&&dt(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;p&&p.z>=h;){if(p!==r.prev&&p!==r.next&&Qi(i.x,i.y,s.x,s.y,a.x,a.y,p.x,p.y)&&dt(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;g&&g.z<=d;){if(g!==r.prev&&g!==r.next&&Qi(i.x,i.y,s.x,s.y,a.x,a.y,g.x,g.y)&&dt(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function Tx(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!Sa(i,s)&&Mh(i,n,n.next,s)&&$r(i,s)&&$r(s,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(s.i/t),Qr(n),Qr(n.next),n=r=s),n=n.next}while(n!==r);return ai(n)}function Ex(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&zx(a,o)){let l=wh(a,o);a=ai(a,a.next),l=ai(l,l.next),Jr(a,e,t,n,i,s),Jr(l,e,t,n,i,s);return}o=o.next}a=a.next}while(a!==r)}function Ax(r,e,t,n){const i=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*n,l=s<a-1?e[s+1]*n:r.length,c=bh(r,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Fx(c));for(i.sort(Cx),s=0;s<i.length;s++)Lx(i[s],t),t=ai(t,t.next);return t}function Cx(r,e){return r.x-e.x}function Lx(r,e){if(e=Rx(r,e),e){const t=wh(e,r);ai(e,e.next),ai(t,t.next)}}function Rx(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,a;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s){if(s=d,d===n){if(i===t.y)return t;if(i===t.next.y)return t.next}a=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!a)return null;if(n===s)return a;const o=a,l=a.x,c=a.y;let u=1/0,h;t=a;do n>=t.x&&t.x>=l&&n!==t.x&&Qi(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)&&(h=Math.abs(i-t.y)/(n-t.x),$r(t,r)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&Px(a,t)))&&(a=t,u=h)),t=t.next;while(t!==o);return a}function Px(r,e){return dt(r.prev,r,e.prev)<0&&dt(e.next,r,r.next)<0}function Ix(r,e,t,n){let i=r;do i.z===null&&(i.z=Fo(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Dx(i)}function Dx(r){let e,t,n,i,s,a,o,l,c=1;do{for(t=r,r=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(a>1);return r}function Fo(r,e,t,n,i){return r=32767*(r-t)*i,e=32767*(e-n)*i,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Fx(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Qi(r,e,t,n,i,s,a,o){return(i-a)*(e-o)-(r-a)*(s-o)>=0&&(r-a)*(n-o)-(t-a)*(e-o)>=0&&(t-a)*(s-o)-(i-a)*(n-o)>=0}function zx(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!Nx(r,e)&&($r(r,e)&&$r(e,r)&&kx(r,e)&&(dt(r.prev,r,e.prev)||dt(r,e.prev,e))||Sa(r,e)&&dt(r.prev,r,r.next)>0&&dt(e.prev,e,e.next)>0)}function dt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Sa(r,e){return r.x===e.x&&r.y===e.y}function Mh(r,e,t,n){const i=Us(dt(r,e,t)),s=Us(dt(r,e,n)),a=Us(dt(t,n,r)),o=Us(dt(t,n,e));return!!(i!==s&&a!==o||i===0&&Os(r,t,e)||s===0&&Os(r,n,e)||a===0&&Os(t,r,n)||o===0&&Os(t,e,n))}function Os(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Us(r){return r>0?1:r<0?-1:0}function Nx(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Mh(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function $r(r,e){return dt(r.prev,r,r.next)<0?dt(r,e,r.next)>=0&&dt(r,r.prev,e)>=0:dt(r,e,r.prev)<0||dt(r,r.next,e)<0}function kx(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function wh(r,e){const t=new zo(r.i,r.x,r.y),n=new zo(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function jc(r,e,t,n){const i=new zo(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Qr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function zo(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Bx(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class si{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return si.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Xc(e),Yc(n,e);let a=e.length;t.forEach(Xc);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Yc(n,t[l]);const o=Mx.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Xc(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Yc(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class mr extends ut{constructor(e=new ss([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Tt(i,3)),this.setAttribute("uv",new Tt(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1;let h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:Ox;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=t.amount);let b,_=!1,y,C,L,F;f&&(b=f.getSpacedPoints(u),_=!0,d=!1,y=f.computeFrenetFrames(u,!1),C=new P,L=new P,F=new P),d||(x=0,p=0,g=0,v=0);const V=o.extractPoints(c);let k=V.shape;const R=V.holes;if(!si.isClockWise(k)){k=k.reverse();for(let q=0,se=R.length;q<se;q++){const ue=R[q];si.isClockWise(ue)&&(R[q]=ue.reverse())}}const T=si.triangulateShape(k,R),z=k;for(let q=0,se=R.length;q<se;q++){const ue=R[q];k=k.concat(ue)}function I(q,se,ue){return se||console.error("THREE.ExtrudeGeometry: vec does not exist"),se.clone().multiplyScalar(ue).add(q)}const D=k.length,N=T.length;function K(q,se,ue){let ye,fe,Le;const Ae=q.x-se.x,Ne=q.y-se.y,ke=ue.x-q.x,A=ue.y-q.y,w=Ae*Ae+Ne*Ne,te=Ae*A-Ne*ke;if(Math.abs(te)>Number.EPSILON){const ae=Math.sqrt(w),de=Math.sqrt(ke*ke+A*A),re=se.x-Ne/ae,be=se.y+Ae/ae,Te=ue.x-A/de,oe=ue.y+ke/de,M=((Te-re)*A-(oe-be)*ke)/(Ae*A-Ne*ke);ye=re+Ae*M-q.x,fe=be+Ne*M-q.y;const le=ye*ye+fe*fe;if(le<=2)return new he(ye,fe);Le=Math.sqrt(le/2)}else{let ae=!1;Ae>Number.EPSILON?ke>Number.EPSILON&&(ae=!0):Ae<-Number.EPSILON?ke<-Number.EPSILON&&(ae=!0):Math.sign(Ne)===Math.sign(A)&&(ae=!0),ae?(ye=-Ne,fe=Ae,Le=Math.sqrt(w)):(ye=Ae,fe=Ne,Le=Math.sqrt(w/2))}return new he(ye/Le,fe/Le)}const ce=[];for(let q=0,se=z.length,ue=se-1,ye=q+1;q<se;q++,ue++,ye++)ue===se&&(ue=0),ye===se&&(ye=0),ce[q]=K(z[q],z[ue],z[ye]);const G=[];let j,ee=ce.concat();for(let q=0,se=R.length;q<se;q++){const ue=R[q];j=[];for(let ye=0,fe=ue.length,Le=fe-1,Ae=ye+1;ye<fe;ye++,Le++,Ae++)Le===fe&&(Le=0),Ae===fe&&(Ae=0),j[ye]=K(ue[ye],ue[Le],ue[Ae]);G.push(j),ee=ee.concat(j)}for(let q=0;q<x;q++){const se=q/x,ue=p*Math.cos(se*Math.PI/2),ye=g*Math.sin(se*Math.PI/2)+v;for(let fe=0,Le=z.length;fe<Le;fe++){const Ae=I(z[fe],ce[fe],ye);Me(Ae.x,Ae.y,-ue)}for(let fe=0,Le=R.length;fe<Le;fe++){const Ae=R[fe];j=G[fe];for(let Ne=0,ke=Ae.length;Ne<ke;Ne++){const A=I(Ae[Ne],j[Ne],ye);Me(A.x,A.y,-ue)}}}const ie=g+v;for(let q=0;q<D;q++){const se=d?I(k[q],ee[q],ie):k[q];_?(L.copy(y.normals[0]).multiplyScalar(se.x),C.copy(y.binormals[0]).multiplyScalar(se.y),F.copy(b[0]).add(L).add(C),Me(F.x,F.y,F.z)):Me(se.x,se.y,0)}for(let q=1;q<=u;q++)for(let se=0;se<D;se++){const ue=d?I(k[se],ee[se],ie):k[se];_?(L.copy(y.normals[q]).multiplyScalar(ue.x),C.copy(y.binormals[q]).multiplyScalar(ue.y),F.copy(b[q]).add(L).add(C),Me(F.x,F.y,F.z)):Me(ue.x,ue.y,h/u*q)}for(let q=x-1;q>=0;q--){const se=q/x,ue=p*Math.cos(se*Math.PI/2),ye=g*Math.sin(se*Math.PI/2)+v;for(let fe=0,Le=z.length;fe<Le;fe++){const Ae=I(z[fe],ce[fe],ye);Me(Ae.x,Ae.y,h+ue)}for(let fe=0,Le=R.length;fe<Le;fe++){const Ae=R[fe];j=G[fe];for(let Ne=0,ke=Ae.length;Ne<ke;Ne++){const A=I(Ae[Ne],j[Ne],ye);_?Me(A.x,A.y+b[u-1].y,b[u-1].x+ue):Me(A.x,A.y,h+ue)}}}me(),Ce();function me(){const q=i.length/3;if(d){let se=0,ue=D*se;for(let ye=0;ye<N;ye++){const fe=T[ye];Se(fe[2]+ue,fe[1]+ue,fe[0]+ue)}se=u+x*2,ue=D*se;for(let ye=0;ye<N;ye++){const fe=T[ye];Se(fe[0]+ue,fe[1]+ue,fe[2]+ue)}}else{for(let se=0;se<N;se++){const ue=T[se];Se(ue[2],ue[1],ue[0])}for(let se=0;se<N;se++){const ue=T[se];Se(ue[0]+D*u,ue[1]+D*u,ue[2]+D*u)}}n.addGroup(q,i.length/3-q,0)}function Ce(){const q=i.length/3;let se=0;$(z,se),se+=z.length;for(let ue=0,ye=R.length;ue<ye;ue++){const fe=R[ue];$(fe,se),se+=fe.length}n.addGroup(q,i.length/3-q,1)}function $(q,se){let ue=q.length;for(;--ue>=0;){const ye=ue;let fe=ue-1;fe<0&&(fe=q.length-1);for(let Le=0,Ae=u+x*2;Le<Ae;Le++){const Ne=D*Le,ke=D*(Le+1),A=se+ye+Ne,w=se+fe+Ne,te=se+fe+ke,ae=se+ye+ke;xe(A,w,te,ae)}}}function Me(q,se,ue){l.push(q),l.push(se),l.push(ue)}function Se(q,se,ue){Ee(q),Ee(se),Ee(ue);const ye=i.length/3,fe=m.generateTopUV(n,i,ye-3,ye-2,ye-1);We(fe[0]),We(fe[1]),We(fe[2])}function xe(q,se,ue,ye){Ee(q),Ee(se),Ee(ye),Ee(se),Ee(ue),Ee(ye);const fe=i.length/3,Le=m.generateSideWallUV(n,i,fe-6,fe-3,fe-2,fe-1);We(Le[0]),We(Le[1]),We(Le[3]),We(Le[1]),We(Le[2]),We(Le[3])}function Ee(q){i.push(l[q*3+0]),i.push(l[q*3+1]),i.push(l[q*3+2])}function We(q){s.push(q.x),s.push(q.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ux(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new yh[i.type]().fromJSON(i)),new mr(n,e.options)}}const Ox={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new he(s,a),new he(o,l),new he(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[i*3],p=e[i*3+1],g=e[i*3+2],v=e[s*3],x=e[s*3+1],f=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new he(a,1-l),new he(c,1-h),new he(d,1-g),new he(v,1-f)]:[new he(o,1-l),new he(u,1-h),new he(p,1-g),new he(x,1-f)]}};function Ux(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class fl extends ut{constructor(e=new ss([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Tt(i,3)),this.setAttribute("normal",new Tt(s,3)),this.setAttribute("uv",new Tt(a,2));function c(u){const h=i.length/3,d=u.extractPoints(t);let p=d.shape;const g=d.holes;si.isClockWise(p)===!1&&(p=p.reverse());for(let x=0,f=g.length;x<f;x++){const m=g[x];si.isClockWise(m)===!0&&(g[x]=m.reverse())}const v=si.triangulateShape(p,g);for(let x=0,f=g.length;x<f;x++){const m=g[x];p=p.concat(m)}for(let x=0,f=p.length;x<f;x++){const m=p[x];i.push(m.x,m.y,0),s.push(0,0,1),a.push(m.x,m.y)}for(let x=0,f=v.length;x<f;x++){const m=v[x],b=m[0]+h,_=m[1]+h,y=m[2]+h;n.push(b,_,y),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Vx(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const a=t[e.shapes[i]];n.push(a)}return new fl(n,e.curveSegments)}}function Vx(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class Hx extends Dt{constructor(e){super(),this.type="ShadowMaterial",this.color=new De(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}Hx.prototype.isShadowMaterial=!0;class Sh extends Dt{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cr,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Sh.prototype.isMeshStandardMaterial=!0;class Gx extends Sh{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}Gx.prototype.isMeshPhysicalMaterial=!0;class Wx extends Dt{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new De(16777215),this.specular=new De(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cr,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Wx.prototype.isMeshPhongMaterial=!0;class qx extends Dt{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new De(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cr,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}qx.prototype.isMeshToonMaterial=!0;class jx extends Dt{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cr,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}jx.prototype.isMeshNormalMaterial=!0;class Xx extends Dt{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Xx.prototype.isMeshLambertMaterial=!0;class Yx extends Dt{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new De(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cr,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}}Yx.prototype.isMeshMatcapMaterial=!0;class Zx extends rs{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}Zx.prototype.isLineDashedMaterial=!0;const ct={arraySlice:function(r,e,t){return ct.isTypedArray(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)},convertArray:function(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)},isTypedArray:function(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)},getKeyframeOrder:function(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i},flattenJSON:function(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)},subclip:function(r,e,t,n,i=30){const s=r.clone();s.name=e;const a=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],u=c.getValueSize(),h=[],d=[];for(let p=0;p<c.times.length;++p){const g=c.times[p]*i;if(!(g<t||g>=n)){h.push(c.times[p]);for(let v=0;v<u;++v)d.push(c.values[p*u+v])}}h.length!==0&&(c.times=ct.convertArray(h,c.times.constructor),c.values=ct.convertArray(d,c.values.constructor),a.push(c))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s},makeClipAdditive:function(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=r.tracks.find(function(f){return f.name===o.name&&f.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0;const p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=p/3);const g=o.times.length-1;let v;if(s<=o.times[0]){const f=u,m=h-u;v=ct.arraySlice(o.values,f,m)}else if(s>=o.times[g]){const f=g*h+u,m=f+h-u;v=ct.arraySlice(o.values,f,m)}else{const f=o.createInterpolant(),m=u,b=h-u;f.evaluate(s),v=ct.arraySlice(f.resultBuffer,m,b)}l==="quaternion"&&new Wt().fromArray(v).normalize().conjugate().toArray(v);const x=c.times.length;for(let f=0;f<x;++f){const m=f*p+d;if(l==="quaternion")Wt.multiplyQuaternionsFlat(c.values,m,v,0,c.values,m);else{const b=p-d*2;for(let _=0;_<b;++_)c.values[m+_]-=v[_]}}}return r.blendMode=Gu,r}};class oi{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,s)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,s,e)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}oi.prototype.beforeStart_=oi.prototype.copySampleValue_;oi.prototype.afterEnd_=oi.prototype.copySampleValue_;class Jx extends oi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ji,endingEnd:Ji}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case $i:s=e,o=2*t-n;break;case na:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $i:a=e,l=2*n-t;break;case na:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),v=g*g,x=v*g,f=-d*x+2*d*v-d*g,m=(1+d)*x+(-1.5-2*d)*v+(-.5+d)*g+1,b=(-1-p)*x+(1.5+p)*v+.5*g,_=p*x-p*v;for(let y=0;y!==o;++y)s[y]=f*a[u+y]+m*a[c+y]+b*a[l+y]+_*a[h+y];return s}}class Th extends oi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)s[d]=a[c+d]*h+a[l+d]*u;return s}}class $x extends oi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Tn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ct.convertArray(t,this.TimeBufferType),this.values=ct.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ct.convertArray(e.times,Array),values:ct.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $x(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Th(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Jx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ea:t=this.InterpolantFactoryMethodDiscrete;break;case ta:t=this.InterpolantFactoryMethodLinear;break;case La:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ea;case this.InterpolantFactoryMethodLinear:return ta;case this.InterpolantFactoryMethodSmooth:return La}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=ct.arraySlice(n,s,a),this.values=ct.arraySlice(this.values,s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&ct.isTypedArray(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=ct.arraySlice(this.times),t=ct.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===La,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){const v=t[h+g];if(v!==t[d+g]||v!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=ct.arraySlice(e,0,a),this.values=ct.arraySlice(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=ct.arraySlice(this.times,0),t=ct.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=ta;class gr extends Tn{}gr.prototype.ValueTypeName="bool";gr.prototype.ValueBufferType=Array;gr.prototype.DefaultInterpolation=ea;gr.prototype.InterpolantFactoryMethodLinear=void 0;gr.prototype.InterpolantFactoryMethodSmooth=void 0;class Eh extends Tn{}Eh.prototype.ValueTypeName="color";class sa extends Tn{}sa.prototype.ValueTypeName="number";class Qx extends oi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Wt.slerpFlat(s,0,a,c-o,a,c,l);return s}}class as extends Tn{InterpolantFactoryMethodLinear(e){return new Qx(this.times,this.values,this.getValueSize(),e)}}as.prototype.ValueTypeName="quaternion";as.prototype.DefaultInterpolation=ta;as.prototype.InterpolantFactoryMethodSmooth=void 0;class vr extends Tn{}vr.prototype.ValueTypeName="string";vr.prototype.ValueBufferType=Array;vr.prototype.DefaultInterpolation=ea;vr.prototype.InterpolantFactoryMethodLinear=void 0;vr.prototype.InterpolantFactoryMethodSmooth=void 0;class aa extends Tn{}aa.prototype.ValueTypeName="vector";class Zc{constructor(e,t=-1,n,i=$o){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Mn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(e_(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Tn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=ct.getKeyframeOrder(l);l=ct.sortedArray(l,1,u),c=ct.sortedArray(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new sa(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,p,g,v){if(p.length!==0){const x=[],f=[];ct.flattenJSON(p,x,f,g),x.length!==0&&v.push(new h(d,x,f))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)p[d[g].morphTargets[v]]=-1;for(const v in p){const x=[],f=[];for(let m=0;m!==d[g].morphTargets.length;++m){const b=d[g];x.push(b.time),f.push(b.morphTarget===v?1:0)}i.push(new sa(".morphTargetInfluence["+v+"]",x,f))}l=p.length*(a||1)}else{const p=".bones["+t[h].name+"]";n(aa,p+".position",d,"pos",i),n(as,p+".quaternion",d,"rot",i),n(aa,p+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Kx(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return sa;case"vector":case"vector2":case"vector3":case"vector4":return aa;case"color":return Eh;case"quaternion":return as;case"bool":case"boolean":return gr;case"string":return vr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function e_(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Kx(r.type);if(r.times===void 0){const t=[],n=[];ct.flattenJSON(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const sr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class t_{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const n_=new t_;let ui=class{constructor(e){this.manager=e!==void 0?e:n_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};const Dn={};class i_ extends ui{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=sr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Dn[e]!==void 0){Dn[e].push({onLoad:t,onProgress:n,onError:i});return}Dn[e]=[],Dn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"});fetch(a).then(o=>{if(o.status===200||o.status===0){if(o.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||o.body.getReader===void 0)return o;const l=Dn[e],c=o.body.getReader(),u=o.headers.get("Content-Length"),h=u?parseInt(u):0,d=h!==0;let p=0;const g=new ReadableStream({start(v){x();function x(){c.read().then(({done:f,value:m})=>{if(f)v.close();else{p+=m.byteLength;const b=new ProgressEvent("progress",{lengthComputable:d,loaded:p,total:h});for(let _=0,y=l.length;_<y;_++){const C=l[_];C.onProgress&&C.onProgress(b)}v.enqueue(m),x()}})}}});return new Response(g)}else throw Error(`fetch for "${o.url}" responded with ${o.status}: ${o.statusText}`)}).then(o=>{switch(this.responseType){case"arraybuffer":return o.arrayBuffer();case"blob":return o.blob();case"document":return o.text().then(l=>new DOMParser().parseFromString(l,this.mimeType));case"json":return o.json();default:return o.text()}}).then(o=>{sr.add(e,o);const l=Dn[e];delete Dn[e];for(let c=0,u=l.length;c<u;c++){const h=l[c];h.onLoad&&h.onLoad(o)}}).catch(o=>{const l=Dn[e];if(l===void 0)throw this.manager.itemError(e),o;delete Dn[e];for(let c=0,u=l.length;c<u;c++){const h=l[c];h.onError&&h.onError(o)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ah extends ui{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=sr.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=ga("img");function l(){u(),sr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class r_ extends ui{constructor(e){super(e)}load(e,t,n,i){const s=new va,a=new Ah(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(u){s.images[c]=u,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class Ch extends ui{constructor(e){super(e)}load(e,t,n,i){const s=new Et,a=new Ah(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class wn extends rt{constructor(e,t=1){super(),this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}wn.prototype.isLight=!0;class s_ extends wn{constructor(e,t,n){super(e,n),this.type="HemisphereLight",this.position.copy(rt.DefaultUp),this.updateMatrix(),this.groundColor=new De(t)}copy(e){return wn.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}s_.prototype.isHemisphereLight=!0;const Jc=new ze,$c=new P,Qc=new P;class pl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xa,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;$c.setFromMatrixPosition(e.matrixWorld),t.position.copy($c),Qc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qc),t.updateMatrixWorld(),Jc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Lh extends pl{constructor(){super(new Nt(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,n=Co*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}Lh.prototype.isSpotLightShadow=!0;class a_ extends wn{constructor(e,t,n=0,i=Math.PI/3,s=0,a=1){super(e,t),this.type="SpotLight",this.position.copy(rt.DefaultUp),this.updateMatrix(),this.target=new rt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.shadow=new Lh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}a_.prototype.isSpotLight=!0;const Kc=new ze,Ir=new P,uo=new P;class Rh extends pl{constructor(){super(new Nt(90,1,.5,500)),this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ir.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ir),uo.copy(n.position),uo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(uo),n.updateMatrixWorld(),i.makeTranslation(-Ir.x,-Ir.y,-Ir.z),Kc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kc)}}Rh.prototype.isPointLightShadow=!0;class o_ extends wn{constructor(e,t,n=0,i=1){super(e,t),this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Rh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}o_.prototype.isPointLight=!0;class Ph extends pl{constructor(){super(new nl(-5,5,5,-5,.5,500))}}Ph.prototype.isDirectionalLightShadow=!0;class l_ extends wn{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(rt.DefaultUp),this.updateMatrix(),this.target=new rt,this.shadow=new Ph}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}l_.prototype.isDirectionalLight=!0;class c_ extends wn{constructor(e,t){super(e,t),this.type="AmbientLight"}}c_.prototype.isAmbientLight=!0;class u_ extends wn{constructor(e,t,n=10,i=10){super(e,t),this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}u_.prototype.isRectAreaLight=!0;class Ih{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new P)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(n*s)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*n*s),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}Ih.prototype.isSphericalHarmonics3=!0;class ml extends wn{constructor(e=new Ih,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}ml.prototype.isLightProbe=!0;class h_{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class d_ extends ut{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}d_.prototype.isInstancedBufferGeometry=!0;class f_ extends ui{constructor(e){super(e),typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=sr.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){sr.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}f_.prototype.isImageBitmapLoader=!0;let Vs;const p_={getContext:function(){return Vs===void 0&&(Vs=new(window.AudioContext||window.webkitAudioContext)),Vs},setContext:function(r){Vs=r}};class m_ extends ui{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new i_(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{const l=o.slice(0);p_.getContext().decodeAudioData(l,function(u){t(u)})}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}}class g_ extends ml{constructor(e,t,n=1){super(void 0,n);const i=new De().set(e),s=new De().set(t),a=new P(i.r,i.g,i.b),o=new P(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(a).add(o).multiplyScalar(l),this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c)}}g_.prototype.isHemisphereLightProbe=!0;class v_ extends ml{constructor(e,t=1){super(void 0,t);const n=new De().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}v_.prototype.isAmbientLightProbe=!0;class x_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=eu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=eu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function eu(){return(typeof performance>"u"?Date:performance).now()}class __ extends rt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class y_{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Wt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;Wt.multiplyQuaternionsFlat(e,a,e,t,e,n),Wt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const gl="\\[\\]\\.:\\/",b_=new RegExp("["+gl+"]","g"),vl="[^"+gl+"]",M_="[^"+gl.replace("\\.","")+"]",w_=/((?:WC+[\/:])*)/.source.replace("WC",vl),S_=/(WCOD+)?/.source.replace("WCOD",M_),T_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vl),E_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vl),A_=new RegExp("^"+w_+S_+T_+E_+"$"),C_=["material","materials","bones"];class L_{constructor(e,t,n){const i=n||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class nt{constructor(e,t,n){this.path=t,this.parsedPath=n||nt.parseTrackName(t),this.node=nt.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new nt.Composite(e,t,n):new nt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(b_,"")}static parseTrackName(e){const t=A_.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);C_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=nt.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}nt.Composite=L_;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class R_{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,o=new Array(a),l={endingStart:Ji,endingEnd:Ji};for(let c=0;c!==a;++c){const u=s[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=up,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Gu:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case $o:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===hp;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===cp){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=$i,i.endingEnd=$i):(e?i.endingStart=this.zeroSlopeAtStart?$i:Ji:i.endingStart=na,t?i.endingEnd=this.zeroSlopeAtEnd?$i:Ji:i.endingEnd=na)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}}class P_ extends Ti{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){const d=i[h],p=d.name;let g=u[p];if(g!==void 0)a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}const v=t&&t._propertyBindings[h].binding.parsedPath;g=new y_(nt.create(n,p,v),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),a[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Th(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?Zc.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=$o),l!==void 0){const h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const u=new R_(this,a,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,s),u}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Zc.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}P_.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class I_ extends is{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}I_.prototype.isInstancedInterleavedBuffer=!0;const Jn=new P,Hs=new ze,ho=new ze;class D_ extends ll{constructor(e){const t=Dh(e),n=new ut,i=[],s=[],a=new De(0,0,1),o=new De(0,1,0);for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(a.r,a.g,a.b),s.push(o.r,o.g,o.b))}n.setAttribute("position",new Tt(i,3)),n.setAttribute("color",new Tt(s,3));const l=new rs({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");ho.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<t.length;s++){const o=t[s];o.parent&&o.parent.isBone&&(Hs.multiplyMatrices(ho,o.matrixWorld),Jn.setFromMatrixPosition(Hs),i.setXYZ(a,Jn.x,Jn.y,Jn.z),Hs.multiplyMatrices(ho,o.parent.matrixWorld),Jn.setFromMatrixPosition(Hs),i.setXYZ(a+1,Jn.x,Jn.y,Jn.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function Dh(r){const e=[];r&&r.isBone&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,Dh(r.children[t]));return e}class F_ extends ll{constructor(e=10,t=10,n=4473924,i=8947848){n=new De(n),i=new De(i);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,p=0,g=-o;d<=t;d++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const v=d===s?n:i;v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3}const u=new ut;u.setAttribute("position",new Tt(l,3)),u.setAttribute("color",new Tt(c,3));const h=new rs({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}}const z_=new Float32Array(1);new Int32Array(z_.buffer);an.create=function(r,e){return console.log("THREE.Curve.create() has been deprecated"),r.prototype=Object.create(an.prototype),r.prototype.constructor=r,r.prototype.getPoint=e,r};Do.prototype.fromPoints=function(r){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(r)};F_.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};D_.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};ui.prototype.extractUrlBase=function(r){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),h_.extractUrlBase(r)};ui.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};fn.prototype.center=function(r){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(r)};fn.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};fn.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};fn.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};fn.prototype.size=function(r){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(r)};hr.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};xa.prototype.setFromMatrix=function(r){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(r)};Ct.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};Ct.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};Ct.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};Ct.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};Ct.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};Ct.prototype.getInverse=function(r){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};ze.prototype.extractPosition=function(r){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(r)};ze.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};ze.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new P().setFromMatrixColumn(this,3)};ze.prototype.setRotationFromQuaternion=function(r){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(r)};ze.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};ze.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};ze.prototype.multiplyVector4=function(r){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};ze.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};ze.prototype.rotateAxis=function(r){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),r.transformDirection(this)};ze.prototype.crossVector=function(r){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};ze.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};ze.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};ze.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};ze.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};ze.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};ze.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};ze.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};ze.prototype.makeFrustum=function(r,e,t,n,i,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(r,e,n,t,i,s)};ze.prototype.getInverse=function(r){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};Nn.prototype.isIntersectionLine=function(r){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(r)};Wt.prototype.multiplyVector3=function(r){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),r.applyQuaternion(this)};Wt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};dr.prototype.isIntersectionBox=function(r){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};dr.prototype.isIntersectionPlane=function(r){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(r)};dr.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};_t.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};_t.prototype.barycoordFromPoint=function(r,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(r,e)};_t.prototype.midpoint=function(r){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(r)};_t.prototypenormal=function(r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(r)};_t.prototype.plane=function(r){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(r)};_t.barycoordFromPoint=function(r,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),_t.getBarycoord(r,e,t,n,i)};_t.normal=function(r,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),_t.getNormal(r,e,t,n)};ss.prototype.extractAllPoints=function(r){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(r)};ss.prototype.extrude=function(r){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new mr(this,r)};ss.prototype.makeGeometry=function(r){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new fl(this,r)};he.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};he.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};he.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};P.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};P.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};P.prototype.getPositionFromMatrix=function(r){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(r)};P.prototype.getScaleFromMatrix=function(r){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(r)};P.prototype.getColumnFromMatrix=function(r,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,r)};P.prototype.applyProjection=function(r){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(r)};P.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};P.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};P.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};ot.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};ot.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};rt.prototype.getChildByName=function(r){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(r)};rt.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};rt.prototype.translate=function(r,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,r)};rt.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};rt.prototype.applyMatrix=function(r){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(rt.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(r){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=r}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Bt.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(Bt.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),dp},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});ph.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Nt.prototype.setLens=function(r,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(r)};Object.defineProperties(wn.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(r){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=r}},shadowCameraLeft:{set:function(r){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=r}},shadowCameraRight:{set:function(r){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=r}},shadowCameraTop:{set:function(r){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=r}},shadowCameraBottom:{set:function(r){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=r}},shadowCameraNear:{set:function(r){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=r}},shadowCameraFar:{set:function(r){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=r}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(r){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=r}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(r){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=r}},shadowMapHeight:{set:function(r){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=r}}});Object.defineProperties(yt.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===ia},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(ia)}}});yt.prototype.setDynamic=function(r){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?ia:Yr),this};yt.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},yt.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};ut.prototype.addIndex=function(r){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(r)};ut.prototype.addAttribute=function(r,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(r,new yt(arguments[1],arguments[2]))):r==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(r,e)};ut.prototype.addDrawCall=function(r,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(r,e)};ut.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};ut.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};ut.prototype.removeAttribute=function(r){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(r)};ut.prototype.applyMatrix=function(r){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(ut.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});is.prototype.setDynamic=function(r){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?ia:Yr),this};is.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};mr.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};mr.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};mr.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};al.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(Dt.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new De}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(r){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===Ou}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(r){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=r}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(Un.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(r){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=r}}});st.prototype.clearTarget=function(r,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(r),this.clear(e,t,n)};st.prototype.animate=function(r){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(r)};st.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};st.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};st.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};st.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};st.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};st.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};st.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};st.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};st.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};st.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};st.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};st.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};st.prototype.enableScissorTest=function(r){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(r)};st.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};st.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};st.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};st.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};st.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};st.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};st.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};st.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};st.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};st.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(st.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=r}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=r}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(r){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=r===!0?lr:dn}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});Object.defineProperties(uh.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(sn.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=r}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=r}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=r}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=r}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(r){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=r}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(r){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=r}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(r){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=r}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(r){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=r}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(r){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=r}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(r){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=r}}});__.prototype.load=function(r){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new m_().load(r,function(n){e.setBuffer(n)}),this};tl.prototype.updateCubeMap=function(r,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(r,e)};tl.prototype.clear=function(r,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(r,e,t,n)};ur.crossOrigin=void 0;ur.loadTexture=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new Ch;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};ur.loadTextureCube=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new r_;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};ur.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};ur.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zo);class N_{container;scene;camera;renderer;constructor(e){this.container=e,this.scene=new al}get dimensions(){let e=window.innerWidth,t=this.container.getBoundingClientRect().height,n=e/t;return{width:e,height:t,aspect:n}}setup(){const e=180*(2*Math.atan(this.dimensions.height/2/1e3))/Math.PI;this.camera=new Nt(e,this.dimensions.aspect,1,1e3),this.camera.position.set(0,0,1e3),this.renderer=new st({antialias:!0,alpha:!0}),this.renderer.setSize(this.dimensions.width,this.dimensions.height),this.renderer.setPixelRatio(window.devicePixelRatio),this.container.appendChild(this.renderer.domElement),window.addEventListener("resize",this.windowResize.bind(this),!1),this.render()}windowResize(){this.camera.aspect=this.dimensions.aspect,this.camera.fov=180*(2*Math.atan(this.dimensions.height/2/1e3))/Math.PI,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.dimensions.width,this.dimensions.height)}render(){this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.render.bind(this))}}class k_{element;dimensionsNode;scene;offset;sizes;material;geometry;mesh;activeFragmentShader;uniforms;shaders;constructor(e,t,n,i,s){this.element=e,this.scene=t,this.shaders=n,this.uniforms=s,this.dimensionsNode=i,this.offset=new he(0,0),this.sizes=new he(0,0),this.createMesh()}setDimensions(){const{width:e,height:t,left:n}=this.dimensionsNode.getBoundingClientRect();this.sizes.set(e,t),this.offset.set(n-window.innerWidth/2+e/2,0)}createMesh(){this.setDimensions(),this.geometry=new _a(1,1,4,6);const{width:e,height:t}=this.element.getBoundingClientRect();this.uniforms={uTexture:{value:new Ch().load(this.element.src)},uMeshSize:{value:new he(this.sizes.x,this.sizes.y)},uImgSize:{value:new he(e,t)},...this.uniforms},this.activeFragmentShader=this.loadFragmentShader,this.mesh=new Bt(this.geometry,new Un({uniforms:this.uniforms,vertexShader:this.shaders.vertex,fragmentShader:this.activeFragmentShader,transparent:!0})),this.mesh.position.set(this.offset.x,this.offset.y,0),this.mesh.scale.set(this.sizes.x,this.sizes.y,1),this.scene.add(this.mesh)}render(){this.setDimensions(),this.checkShader(),this.mesh.position.set(this.offset.x,this.offset.y,0),this.mesh.scale.set(this.sizes.x,this.sizes.y,1);const{width:e,height:t}=this.element.getBoundingClientRect();this.uniforms.uImgSize.value.set(e,t),this.uniforms.uMeshSize.value.set(this.sizes.x,this.sizes.y)}checkShader(){this.loadFragmentShader!==this.activeFragmentShader&&(this.activeFragmentShader=this.loadFragmentShader,this.mesh.material=new Un({uniforms:this.uniforms,vertexShader:this.shaders.vertex,fragmentShader:this.activeFragmentShader,transparent:!0}))}get loadFragmentShader(){return this.sizes.x/this.sizes.y<1?this.shaders.fragment.horizontal:this.shaders.fragment.vertical}}const B_=`

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
`,O_=`

	uniform sampler2D uTexture;
	uniform vec2 uOffset;
	uniform float uTime;
	varying vec2 vUv;
	varying float vWave;

	#define M_PI 3.1415926535897932384626433832795

	${B_}

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

`;function tu(){const r=`
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
		`}return{horizontal:t(r),vertical:t(e)}}class U_ extends k_{speed;clock;constructor(e,t){let n={vertex:O_,fragment:{vertical:tu().vertical,horizontal:tu().horizontal}},i={uTime:{value:0},uOffset:{value:new he(0,0)},uAlpha:{value:.7}};super(e,t,n,e.parentElement,i),this.clock=new x_,No.subscribe(s=>{this.speed=s})}createMesh(){super.createMesh(),this.element.parentElement.style.visibility="hidden"}render(){super.render(),this.uniforms.uOffset.value.set(this.speed*-3e-4,Math.abs(this.speed*5e-5)),this.uniforms.uTime.value=this.clock.getElapsedTime()*.8}}class V_ extends N_{meshItems;images;constructor(e,t){super(e),this.images=t,this.meshItems=[],this.setup()}setup(){this.images.forEach(e=>{let t=new U_(e,this.scene);this.meshItems.push(t)}),super.setup()}render(){for(let e=0;e<this.meshItems.length;e++)this.meshItems[e].render();super.render()}}function H_(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var G_=4,W_=.001,q_=1e-7,j_=10,Nr=11,Gs=1/(Nr-1),X_=typeof Float32Array=="function";function Fh(r,e){return 1-3*e+3*r}function zh(r,e){return 3*e-6*r}function Nh(r){return 3*r}function oa(r,e,t){return((Fh(e,t)*r+zh(e,t))*r+Nh(e))*r}function kh(r,e,t){return 3*Fh(e,t)*r*r+2*zh(e,t)*r+Nh(e)}function Y_(r,e,t,n,i){var s,a,o=0;do a=e+(t-e)/2,s=oa(a,n,i)-r,s>0?t=a:e=a;while(Math.abs(s)>q_&&++o<j_);return a}function Z_(r,e,t,n){for(var i=0;i<G_;++i){var s=kh(e,t,n);if(s===0)return e;var a=oa(e,t,n)-r;e-=a/s}return e}function J_(r){return r}var $_=function(e,t,n,i){if(!(0<=e&&e<=1&&0<=n&&n<=1))throw new Error("bezier x values must be in [0, 1] range");if(e===t&&n===i)return J_;for(var s=X_?new Float32Array(Nr):new Array(Nr),a=0;a<Nr;++a)s[a]=oa(a*Gs,e,n);function o(l){for(var c=0,u=1,h=Nr-1;u!==h&&s[u]<=l;++u)c+=Gs;--u;var d=(l-s[u])/(s[u+1]-s[u]),p=c+d*Gs,g=kh(p,e,n);return g>=W_?Z_(l,p,e,n):g===0?p:Y_(l,c,c+Gs,e,n)}return function(c){return c===0?0:c===1?1:oa(o(c),t,i)}};const Ta=H_($_);function nn(r,e){e=e===void 0?{}:e,e.delay||(e.delay=35),e.initDelay||(e.initDelay=0),e.duration||(e.duration=600),e.breakWord===void 0&&(e.breakWord=!0);let t=r.innerHTML,n=Bh(r,{breakWord:e.breakWord});n.forEach(a=>{a.childNodes.forEach(o=>{o.style.transform="translateX(150%)"}),a.style.transform="translateX(80%)",a.style.display="inline-flex",a.style.overflowY="visible",a.style.overflowX="clip"});let i=[];return n.forEach(a=>{const o=a.childNodes;i=[...i,a,...o]}),e.promise!==void 0&&e.promise.then(()=>{s()}),{delay:e.initDelay,duration:e.duration,tick:a=>{let o=Ta(.2,.58,.43,1)(a);n.forEach(l=>{l.childNodes.forEach(c=>{c.style.transform=`translate3d(${(150+-o*150).toFixed(2)}%, 0px, 0px)`}),l.style.transform=`translate3d(${(80+-o*80).toFixed(2)}%, 0px, 0px)`}),o>=1&&(r.innerHTML=t)},anime:s};function s(a){a===void 0&&(a={}),Qe({targets:i,translateX:"0%",easing:a.easing?a.easing:"cubicBezier(.2, .58, .43, 1)",duration:e.duration,delay:Qe.stagger(e.delay,{start:e.initDelay}),complete:()=>{r.innerHTML=t,a&&a.onComplete&&a.onComplete()}})}}function Q_(r,e){e=e===void 0?{}:e,e.delay||(e.delay=35),e.initDelay||(e.initDelay=0),e.duration||(e.duration=600),e.breakWord===void 0&&(e.breakWord=!0);let t=r.innerHTML,n=Bh(r,{breakWord:e.breakWord});n.forEach(s=>{s.style.display="inline-flex",s.style.overflow="hidden"});let i=[];return n.forEach(s=>{const a=s.childNodes;i=[...i,s,...a]}),{delay:e.initDelay,duration:e.duration,tick:s=>{let a=Ta(.32,.24,.76,.26)(s);n.forEach(o=>{o.childNodes.forEach(l=>{l.style.transform=`translate3d(${(-150+a*150).toFixed(2)}%, 0px, 0px)`}),o.style.transform=`translate3d(${(-80+a*80).toFixed(2)}%, 0px, 0px)`}),a>=1&&(r.innerHTML=t)},anime:s=>{Qe({targets:i,translateX:"-150%",easing:s||"cubicBezier(.2, .58, .43, 1)",duration:e.duration,delay:Qe.stagger(e.delay,{start:e.initDelay}),complete:()=>{r.innerHTML=t}})}}}function mt(r,e){e=e===void 0?{}:e,e.delay||(e.delay=20),e.duration||(e.duration=700),e.reverse||(e.reverse=!1);let t=n();return e.promise!==void 0&&e.promise.then(()=>{i()}),{delay:e.delay,duration:e.duration,tick:s=>{let a=Ta(.58,.14,.06,.97)(s);e.reverse?(t.style.transform=`translate3d(${(100+-a*100).toFixed(2)}%, 0px, 0px)`,r.style.transform=`translate3d(${(-100+a*100).toFixed(2)}%, 0px, 0px)`):(t.style.transform=`translate3d(${(-100+a*100).toFixed(2)}%, 0px, 0px)`,r.style.transform=`translate3d(${(100+-a*100).toFixed(2)}%, 0px, 0px)`)},anime:i};function n(){let s=document.createElement("div"),a=r.parentNode,o=Array.from(a.children).indexOf(r);return e=e===void 0?{}:e,s.classList.add("a-mask"),r.classList.add("a-content"),s.insertBefore(r,s.children[0]),s.style.display="inline-block",s.style.overflow="hidden",e.maskStyles&&e.maskStyles.forEach(l=>{s.style[l.property]=l.value}),a.insertBefore(s,a.children[o]),e.reverse?(s.style.transform="translateX(-100%)",r.style.transform="translateX(100%)"):(s.style.transform="translateX(100%)",r.style.transform="translateX(-100%)"),s}function i(s){Qe({targets:[t,r],translateX:"0%",easing:s||"cubicBezier(.58,.14,.06,.97)",duration:e.duration,delay:e.delay})}}function gi(r,e){return e=e===void 0?{}:e,e.delay||(e.delay=0),e.duration||(e.duration=400),{delay:e.delay,duration:e.duration,tick:t=>{let n=Ta(.32,.24,.76,.26)(t);r.parentElement?.classList.contains("a-mask")&&(r.parentElement.style.transform=`translate3d(${(-100+n*100).toFixed(2)}%, 0px, 0px)`),r.style.transform=`translate3d(${(100+-n*100).toFixed(2)}%, 0px, 0px)`}}}function K_(r,e){e!==void 0&&(e.delay||(e.delay=0),r.style.transition="none",r.style.marginRight="60%",e.promise.then(()=>{Qe({targets:r,marginRight:"0%",easing:"easeOutQuint",duration:1400,delay:e.delay,complete:()=>{r.style.marginRight="",r.style.transition=""}})}))}function ey(r,e){e!==void 0&&(e.delay||(e.delay=0),r.style.transition="none",r.style.transform="translateX(100%)",e.promise.then(()=>{Qe({targets:r,translateX:"0%",easing:"easeOutQuint",duration:1600,delay:e.delay,update:t=>{const n=1-Ud(t.progress/100);No.set(n*2500)},complete:()=>{r.style.transform="",r.style.transition="",e.onComplete&&e.onComplete()}})}))}function Bh(r,e){let t=r.querySelectorAll(".a-text-mask");return t.length<1&&(r.innerHTML=n(r.innerHTML,'<div class="a-text-mask"><div class="a-text-block">',"</div></div>"),t=r.querySelectorAll(".a-text-mask")),e.breakWord?r.querySelectorAll(".a-word").forEach(s=>{s.style.display="inline-block",s.style.whiteSpace="nowrap"}):r.querySelectorAll(".a-text-mask").forEach(s=>{s.style.whiteSpace="no-wrap"}),t;function n(i,s,a){let o="",l=!1,c=!1;return[...i].forEach((u,h)=>{u==="<"&&(l=!0,c&&(c=!1,o+="</div>")),i[h-1]==">"&&u!=="<"&&(l=!1,c||(c=!0,o+='<div class="a-word">')),l?o+=u:((u===" "||i[h-1]===" "||h===0||h===i.length)&&(c=!c,o+=c?'<div class="a-word">':'</div><span class="a-spacer a-text-block"> </span>'),u!==" "&&(o+=s+u+a))}),o}}function nu(r,e,t){const n=r.slice();return n[28]=e[t],n}function iu(r,e,t){const n=r.slice();return n[31]=e[t],n}function ru(r,e,t){const n=r.slice();return n[34]=e[t],n[35]=e,n[36]=t,n}function ty(r){return{c:Q,l:Q,m:Q,p:Q,d:Q}}function ny(r){let e,t,n,i=r[36],s,a;const o=()=>r[15](e,i),l=()=>r[15](null,i);return{c(){e=Y("img"),this.h()},l(c){e=Z(c,"IMG",{src:!0,draggable:!0,alt:!0,class:!0}),this.h()},h(){tr(e.src,t=r[38])||O(e,"src",t),O(e,"draggable","false"),O(e,"alt",n=r[34].title+" Background"),O(e,"class","svelte-zppgex")},m(c,u){Be(c,e,u),o(),s||(a=Pt(e,"dragstart",po(r[14])),s=!0)},p(c,u){r=c,u[0]&1&&!tr(e.src,t=r[38])&&O(e,"src",t),u[0]&1&&n!==(n=r[34].title+" Background")&&O(e,"alt",n),i!==r[36]&&(l(),i=r[36],o())},d(c){c&&W(e),l(),s=!1,a()}}}function iy(r){return{c:Q,l:Q,m:Q,p:Q,d:Q}}function ry(r){return{c:Q,l:Q,m:Q,p:Q,i:Q,o:Q,d:Q}}function sy(r){let e,t,n=(r[36].toString().length>1?r[36]+1:"0"+(r[36]+1).toString())+"",i,s,a,o,l,c,u=r[34].title+"",h,d,p,g,v="view",x,f,m;function b(){return r[16](r[36])}return{c(){e=Y("div"),t=Y("p"),i=Ht(n),a=Re(),o=Y("div"),l=Y("h1"),c=Y("span"),h=Ht(u),p=Re(),g=Y("button"),g.textContent=v,this.h()},l(_){e=Z(_,"DIV",{class:!0});var y=pe(e);t=Z(y,"P",{class:!0});var C=pe(t);i=Gt(C,n),C.forEach(W),y.forEach(W),a=Pe(_),o=Z(_,"DIV",{class:!0});var L=pe(o);l=Z(L,"H1",{class:!0});var F=pe(l);c=Z(F,"SPAN",{class:!0});var V=pe(c);h=Gt(V,u),V.forEach(W),F.forEach(W),p=Pe(L),g=Z(L,"BUTTON",{class:!0,"data-svelte-h":!0}),Ye(g)!=="svelte-6jg3a6"&&(g.textContent=v),L.forEach(W),this.h()},h(){O(t,"class","item-index svelte-zppgex"),O(e,"class","text-top-wrapper svelte-zppgex"),at(e,"hidden",r[8]>=0||r[1]),O(c,"class","svelte-zppgex"),O(l,"class","item-title svelte-zppgex"),O(g,"class","button item-link interactive svelte-zppgex"),O(o,"class","text-wrapper svelte-zppgex"),at(o,"hidden",r[8]>=0||r[1])},m(_,y){Be(_,e,y),B(e,t),B(t,i),Be(_,a,y),Be(_,o,y),B(o,l),B(l,c),B(c,h),B(o,p),B(o,g),f||(m=Pt(g,"click",b),f=!0)},p(_,y){r=_,y[0]&258&&at(e,"hidden",r[8]>=0||r[1]),y[0]&1&&u!==(u=r[34].title+"")&&kn(h,u),y[0]&258&&at(o,"hidden",r[8]>=0||r[1])},i(_){_&&(s||et(()=>{s=it(t,mt,{delay:r[36]*30+100,reverse:!0}),s.start()})),_&&(d||et(()=>{d=it(c,mt,{duration:900,delay:r[36]*30+300,reverse:!0}),d.start()})),_&&(x||et(()=>{x=it(g,mt,{duration:900,delay:r[36]*30+450,reverse:!0}),x.start()}))},o:Q,d(_){_&&(W(e),W(a),W(o)),f=!1,m()}}}function ay(r){return{c:Q,l:Q,m:Q,p:Q,i:Q,o:Q,d:Q}}function su(r){let e,t,n,i,s,a=r[36],o,l,c,u={ctx:r,current:null,token:null,hasCatch:!1,pending:iy,then:ny,catch:ty,value:38};bn(i=qr(`assets/imgs/work-back/${r[34].id}/cover.jpg`),u);let h={ctx:r,current:null,token:null,hasCatch:!1,pending:ay,then:sy,catch:ry,value:37};bn(r[11],h);const d=()=>r[17](t,a),p=()=>r[17](null,a);return{c(){e=Y("li"),t=Y("div"),n=Y("div"),u.block.c(),s=Re(),h.block.c(),o=Re(),this.h()},l(g){e=Z(g,"LI",{class:!0});var v=pe(e);t=Z(v,"DIV",{class:!0});var x=pe(t);n=Z(x,"DIV",{class:!0});var f=pe(n);u.block.l(f),f.forEach(W),s=Pe(x),h.block.l(x),x.forEach(W),o=Pe(v),v.forEach(W),this.h()},h(){O(n,"class","img-wrapper svelte-zppgex"),O(t,"class","list-item clickable passive svelte-zppgex"),at(t,"ambient",r[8]!==r[36]&&r[8]>=0),at(t,"active",r[8]===r[36]),O(e,"class","svelte-zppgex")},m(g,v){Be(g,e,v),B(e,t),B(t,n),u.block.m(n,u.anchor=null),u.mount=()=>n,u.anchor=null,B(t,s),h.block.m(t,h.anchor=null),h.mount=()=>t,h.anchor=null,d(),B(e,o),l||(c=rn(K_.call(null,e,{promise:r[11],delay:r[36]*30})),l=!0)},p(g,v){r=g,u.ctx=r,v[0]&1&&i!==(i=qr(`assets/imgs/work-back/${r[34].id}/cover.jpg`))&&bn(i,u)||Wr(u,r,v),Wr(h,r,v),a!==r[36]&&(p(),a=r[36],d()),v[0]&256&&at(t,"ambient",r[8]!==r[36]&&r[8]>=0),v[0]&256&&at(t,"active",r[8]===r[36])},d(g){g&&W(e),u.block.d(),u.token=null,u=null,h.block.d(),h.token=null,h=null,p(),l=!1,c()}}}function au(r){let e,t,n,i,s,a,o,l,c,u,h,d,p,g,v=r[0][r[8]].details.summary+"",x,f,m,b,_,y,C=r[0][r[8]].title+"",L,F,V,k,R,S="×",T,z,I,D,N,K,ce,G=r[0][r[8]].details.description+"",j,ee,ie,me,Ce,$,Me,Se='<p class="descriptor svelte-zppgex">Role</p>',xe,Ee,We,q,se,ue,ye,fe,Le,Ae,Ne,ke,A,w;function te(M,le){return M[8]<9?ly:oy}let ae=te(r),de=ae(r),re=Zi(r[0][r[8]].roles),be=[];for(let M=0;M<re.length;M+=1)be[M]=ou(iu(r,re,M));let Te=Zi(r[0][r[8]].links),oe=[];for(let M=0;M<Te.length;M+=1)oe[M]=lu(nu(r,Te,M));return{c(){e=Y("div"),t=Y("div"),n=Y("div"),i=Y("div"),s=Y("div"),a=Y("div"),de.c(),c=Re(),u=Y("span"),d=Re(),p=Y("h6"),g=Y("div"),x=Ht(v),b=Re(),_=Y("div"),y=Y("h1"),L=Ht(C),V=Re(),k=Y("button"),R=Y("div"),R.textContent=S,I=Re(),D=Y("div"),N=Y("div"),K=Y("div"),ce=Y("p"),j=Ht(G),me=Re(),Ce=Y("div"),$=Y("div"),Me=Y("div"),Me.innerHTML=Se,We=Re(),q=Y("ul");for(let M=0;M<be.length;M+=1)be[M].c();ye=Re(),fe=Y("div"),Le=Y("div");for(let M=0;M<oe.length;M+=1)oe[M].c();this.h()},l(M){e=Z(M,"DIV",{class:!0});var le=pe(e);t=Z(le,"DIV",{class:!0});var J=pe(t);n=Z(J,"DIV",{class:!0});var Fe=pe(n);i=Z(Fe,"DIV",{class:!0});var we=pe(i);s=Z(we,"DIV",{class:!0});var Ge=pe(s);a=Z(Ge,"DIV",{class:!0});var ge=pe(a);de.l(ge),ge.forEach(W),Ge.forEach(W),c=Pe(we),u=Z(we,"SPAN",{class:!0}),pe(u).forEach(W),d=Pe(we),p=Z(we,"H6",{class:!0});var Oe=pe(p);g=Z(Oe,"DIV",{class:!0});var tt=pe(g);x=Gt(tt,v),tt.forEach(W),Oe.forEach(W),we.forEach(W),Fe.forEach(W),b=Pe(J),_=Z(J,"DIV",{class:!0});var Je=pe(_);y=Z(Je,"H1",{class:!0});var qt=pe(y);L=Gt(qt,C),qt.forEach(W),V=Pe(Je),k=Z(Je,"BUTTON",{class:!0});var jt=pe(k);R=Z(jt,"DIV",{class:!0,"data-svelte-h":!0}),Ye(R)!=="svelte-ac1run"&&(R.textContent=S),jt.forEach(W),Je.forEach(W),I=Pe(J),D=Z(J,"DIV",{class:!0});var Ut=pe(D);N=Z(Ut,"DIV",{class:!0});var xr=pe(N);K=Z(xr,"DIV",{class:!0});var _r=pe(K);ce=Z(_r,"P",{class:!0});var os=pe(ce);j=Gt(os,G),os.forEach(W),_r.forEach(W),xr.forEach(W),me=Pe(Ut),Ce=Z(Ut,"DIV",{class:!0});var hi=pe(Ce);$=Z(hi,"DIV",{class:!0});var Ei=pe($);Me=Z(Ei,"DIV",{class:!0,"data-svelte-h":!0}),Ye(Me)!=="svelte-55u6rj"&&(Me.innerHTML=Se),We=Pe(Ei),q=Z(Ei,"UL",{class:!0});var Ai=pe(q);for(let En=0;En<be.length;En+=1)be[En].l(Ai);Ai.forEach(W),Ei.forEach(W),hi.forEach(W),ye=Pe(Ut),fe=Z(Ut,"DIV",{class:!0});var yr=pe(fe);Le=Z(yr,"DIV",{class:!0});var ls=pe(Le);for(let En=0;En<oe.length;En+=1)oe[En].l(ls);ls.forEach(W),yr.forEach(W),Ut.forEach(W),J.forEach(W),le.forEach(W),this.h()},h(){O(a,"class","svelte-zppgex"),O(s,"class","index svelte-zppgex"),O(u,"class","line svelte-zppgex"),O(g,"class","svelte-zppgex"),O(p,"class","caption svelte-zppgex"),O(i,"class","wrapper svelte-zppgex"),O(n,"class","top-align svelte-zppgex"),O(y,"class","title svelte-zppgex"),at(y,"breakTitleWords",r[7]),O(R,"class","close-button svelte-zppgex"),O(k,"class","close-button-wrapper interactive svelte-zppgex"),O(_,"class","mid-align svelte-zppgex"),O(ce,"class","paragraph svelte-zppgex"),O(K,"class","svelte-zppgex"),O(N,"class","svelte-zppgex"),O(Me,"class","svelte-zppgex"),O(q,"class","svelte-zppgex"),O($,"class","wrapper svelte-zppgex"),O(Ce,"class","roles svelte-zppgex"),O(Le,"class","links svelte-zppgex"),O(fe,"class","svelte-zppgex"),O(D,"class","bottom-align svelte-zppgex"),O(t,"class","wrapper svelte-zppgex"),O(e,"class","details-container svelte-zppgex")},m(M,le){Be(M,e,le),B(e,t),B(t,n),B(n,i),B(i,s),B(s,a),de.m(a,null),B(i,c),B(i,u),B(i,d),B(i,p),B(p,g),B(g,x),B(t,b),B(t,_),B(_,y),B(y,L),B(_,V),B(_,k),B(k,R),B(t,I),B(t,D),B(D,N),B(N,K),B(K,ce),B(ce,j),B(D,me),B(D,Ce),B(Ce,$),B($,Me),B($,We),B($,q);for(let J=0;J<be.length;J+=1)be[J]&&be[J].m(q,null);B(D,ye),B(D,fe),B(fe,Le);for(let J=0;J<oe.length;J+=1)oe[J]&&oe[J].m(Le,null);ke=!0,A||(w=[rn(r[13].call(null,y)),Pt(y,"introend",r[19]),Pt(y,"outrostart",r[20]),Pt(k,"click",r[21])],A=!0)},p(M,le){if(ae===(ae=te(M))&&de?de.p(M,le):(de.d(1),de=ae(M),de&&(de.c(),de.m(a,null))),(!ke||le[0]&257)&&v!==(v=M[0][M[8]].details.summary+"")&&kn(x,v),(!ke||le[0]&257)&&C!==(C=M[0][M[8]].title+"")&&kn(L,C),(!ke||le[0]&128)&&at(y,"breakTitleWords",M[7]),(!ke||le[0]&257)&&G!==(G=M[0][M[8]].details.description+"")&&kn(j,G),le[0]&257){re=Zi(M[0][M[8]].roles);let J;for(J=0;J<re.length;J+=1){const Fe=iu(M,re,J);be[J]?be[J].p(Fe,le):(be[J]=ou(Fe),be[J].c(),be[J].m(q,null))}for(;J<be.length;J+=1)be[J].d(1);be.length=re.length}if(le[0]&257){Te=Zi(M[0][M[8]].links);let J;for(J=0;J<Te.length;J+=1){const Fe=nu(M,Te,J);oe[J]?oe[J].p(Fe,le):(oe[J]=lu(Fe),oe[J].c(),oe[J].m(Le,null))}for(;J<oe.length;J+=1)oe[J].d(1);oe.length=Te.length}},i(M){ke||(M&&et(()=>{ke&&(l&&l.end(1),o=it(a,mt,{reverse:!0}),o.start())}),M&&et(()=>{ke&&(h||(h=xl(u,Rl,{},!0)),h.run(1))}),M&&et(()=>{ke&&(m&&m.end(1),f=it(g,mt,{reverse:!0}),f.start())}),F&&F.end(1),M&&et(()=>{ke&&(z&&z.end(1),T=it(R,mt,{reverse:!0}),T.start())}),M&&et(()=>{ke&&(ie&&ie.end(1),ee=it(K,mt,{reverse:!0}),ee.start())}),M&&et(()=>{ke&&(Ee&&Ee.end(1),xe=it(Me,mt,{reverse:!0}),xe.start())}),M&&et(()=>{ke&&(ue&&ue.end(1),se=it(q,mt,{reverse:!0,delay:100}),se.start())}),M&&et(()=>{ke&&(Ne&&Ne.end(1),Ae=it(fe,mt,{reverse:!0}),Ae.start())}),ke=!0)},o(M){o&&o.invalidate(),M&&(l=Hn(a,gi,{})),M&&(h||(h=xl(u,Rl,{},!1)),h.run(0)),f&&f.invalidate(),M&&(m=Hn(g,gi,{})),M&&(F=Hn(y,Q_,{})),T&&T.invalidate(),M&&(z=Hn(R,gi,{})),ee&&ee.invalidate(),M&&(ie=Hn(K,gi,{})),xe&&xe.invalidate(),M&&(Ee=Hn(Me,gi,{})),se&&se.invalidate(),M&&(ue=Hn(q,gi,{})),Ae&&Ae.invalidate(),M&&(Ne=Hn(fe,gi,{})),ke=!1},d(M){M&&W(e),de.d(),M&&l&&l.end(),M&&h&&h.end(),M&&m&&m.end(),M&&F&&F.end(),M&&z&&z.end(),M&&ie&&ie.end(),M&&Ee&&Ee.end(),fo(be,M),M&&ue&&ue.end(),fo(oe,M),M&&Ne&&Ne.end(),A=!1,Kr(w)}}}function oy(r){let e=r[8]+1+"",t;return{c(){t=Ht(e)},l(n){t=Gt(n,e)},m(n,i){Be(n,t,i)},p(n,i){i[0]&256&&e!==(e=n[8]+1+"")&&kn(t,e)},d(n){n&&W(t)}}}function ly(r){let e="0"+(r[8]+1),t;return{c(){t=Ht(e)},l(n){t=Gt(n,e)},m(n,i){Be(n,t,i)},p(n,i){i[0]&256&&e!==(e="0"+(n[8]+1))&&kn(t,e)},d(n){n&&W(t)}}}function ou(r){let e,t="+ "+r[31],n;return{c(){e=Y("li"),n=Ht(t),this.h()},l(i){e=Z(i,"LI",{class:!0});var s=pe(e);n=Gt(s,t),s.forEach(W),this.h()},h(){O(e,"class","svelte-zppgex")},m(i,s){Be(i,e,s),B(e,n)},p(i,s){s[0]&257&&t!==(t="+ "+i[31])&&kn(n,t)},d(i){i&&W(e)}}}function lu(r){let e,t=r[28].text+"",n,i;return{c(){e=Y("a"),n=Ht(t),this.h()},l(s){e=Z(s,"A",{href:!0,target:!0,class:!0});var a=pe(e);n=Gt(a,t),a.forEach(W),this.h()},h(){O(e,"href",i=r[28].link),O(e,"target","_blank"),O(e,"class","button svelte-zppgex")},m(s,a){Be(s,e,a),B(e,n)},p(s,a){a[0]&257&&t!==(t=s[28].text+"")&&kn(n,t),a[0]&257&&i!==(i=s[28].link)&&O(e,"href",i)},d(s){s&&W(e)}}}function cy(r){let e,t,n,i,s,a,o,l,c=Zi(r[0]),u=[];for(let d=0;d<c.length;d+=1)u[d]=su(ru(r,c,d));let h=r[8]!==-1&&au(r);return{c(){e=Y("div"),t=Y("div"),n=Y("div"),i=Y("ul");for(let d=0;d<u.length;d+=1)u[d].c();s=Re(),h&&h.c(),this.h()},l(d){e=Z(d,"DIV",{id:!0,class:!0});var p=pe(e);t=Z(p,"DIV",{class:!0,role:!0,tabindex:!0});var g=pe(t);n=Z(g,"DIV",{class:!0});var v=pe(n);i=Z(v,"UL",{class:!0});var x=pe(i);for(let f=0;f<u.length;f+=1)u[f].l(x);x.forEach(W),v.forEach(W),s=Pe(g),h&&h.l(g),g.forEach(W),p.forEach(W),this.h()},h(){O(i,"class","work-list svelte-zppgex"),at(i,"hold",r[1]),O(n,"class","svelte-zppgex"),at(n,"mobile",r[10]),O(t,"class","content-wrapper svelte-zppgex"),O(t,"role","listbox"),O(t,"tabindex","0"),at(t,"disabled",r[8]>=0),O(e,"id","content-container"),O(e,"class","work-click-area svelte-zppgex")},m(d,p){Be(d,e,p),B(e,t),B(t,n),B(n,i);for(let g=0;g<u.length;g+=1)u[g]&&u[g].m(i,null);r[18](i),B(t,s),h&&h.m(t,null),r[22](t),r[24](e),o||(l=[Pt(t,"mousedown",po(function(){Mr(r[9].onHold)&&r[9].onHold.apply(this,arguments)})),Pt(t,"mouseup",function(){Mr(r[9].onRelease)&&r[9].onRelease.apply(this,arguments)}),Pt(t,"mouseleave",function(){Mr(r[9].onRelease)&&r[9].onRelease.apply(this,arguments)}),Pt(t,"mousemove",po(function(){Mr(r[9].onMouseMove)&&r[9].onMouseMove.apply(this,arguments)})),rn(a=ey.call(null,t,{promise:r[11],onComplete:r[23]}))],o=!0)},p(d,p){if(r=d,p[0]&6499){c=Zi(r[0]);let g;for(g=0;g<c.length;g+=1){const v=ru(r,c,g);u[g]?u[g].p(v,p):(u[g]=su(v),u[g].c(),u[g].m(i,null))}for(;g<u.length;g+=1)u[g].d(1);u.length=c.length}p[0]&2&&at(i,"hold",r[1]),p[0]&1024&&at(n,"mobile",r[10]),r[8]!==-1?h?(h.p(r,p),p[0]&256&&wt(h,1)):(h=au(r),h.c(),wt(h,1),h.m(t,null)):h&&(la(),Zt(h,1,1,()=>{h=null}),ca()),a&&Mr(a.update)&&p[0]&512&&a.update.call(null,{promise:r[11],onComplete:r[23]}),p[0]&256&&at(t,"disabled",r[8]>=0)},i(d){wt(h)},o(d){Zt(h)},d(d){d&&W(e),fo(u,d),r[18](null),h&&h.d(),r[22](null),r[24](null),o=!1,Kr(l)}}}function uy(r,e,t){let n,i;Qt(r,_o,I=>t(26,n=I)),Qt(r,vo,I=>t(10,i=I));let s=[];Bo.subscribe(I=>{I!==void 0&&t(0,s=I)});let a=!1;js.subscribe(I=>t(1,a=I));let o,l,c,u=[],h=[],d=!1,p=-1,g;const v=new Promise(I=>{g=I});class x{currentMouseX=0;initialMouseX=0;currentPosition=0;targetPosition=0;initialPosition=0;offsetSpeed=5e3;lerpSpeed=.1;onHold=D=>{if(!(p>=0||a||D.target.classList.contains("button"))&&(this.initialMouseX=D.clientX,this.currentMouseX=D.clientX,js.set(!0),a)){let N=window.getComputedStyle(c),K=new WebKitCSSMatrix(N.transform);this.initialPosition=K.m41}};onRelease(){js.set(!1)}onMouseMove=D=>{if(!a)return;this.currentMouseX=D.clientX;let N=(this.currentMouseX-this.initialMouseX)*-1;this.targetPosition=Math.round((this.initialPosition-this.offsetSpeed*(N/document.body.clientWidth))*100)/100};animate=()=>{if(p<0){let D=c.offsetWidth-document.body.clientWidth;D<0&&(D=c.offsetWidth),this.targetPosition>0&&(this.targetPosition=0),this.targetPosition<=D*-1&&(this.targetPosition=-D)}this.currentPosition=this.lerp(this.currentPosition,this.targetPosition,this.lerpSpeed),No.set(Math.round((this.currentPosition-this.targetPosition)*100)/100),t(4,c.style.transform=`translate3d(${Math.round(this.currentPosition*100)/100}px, 0px, 0px)`,c),requestAnimationFrame(()=>this.animate())};lerp(D,N,K){return D*(1-K)+N*K}}const f=new x;ar(async()=>{Qs(o,()=>g(!0));const I=await Ll();Gr(vo,i=I.isMobile,i),await or,Gr(_o,n=o,n),t(4,c.style.transform="translate3d(0px, 0px, 0px)",c),I.tier>=2&&!I.isMobile&&I.fps>=30&&new V_(l,u)});function m(I){t(8,p=p==I?-1:I),p>=0&&t(9,f.targetPosition=-(h[I].offsetLeft-window.innerWidth/4+window.innerWidth/10),f)}function b(I){nn(I,{delay:5,breakWord:!1}).anime({onComplete:()=>t(7,d=!0)})}function _(I){qh.call(this,r,I)}function y(I,D){ht[I?"unshift":"push"](()=>{u[D]=I,t(5,u)})}const C=I=>m(I);function L(I,D){ht[I?"unshift":"push"](()=>{h[D]=I,t(6,h)})}function F(I){ht[I?"unshift":"push"](()=>{c=I,t(4,c)})}const V=()=>setTimeout(()=>t(7,d=!0),100),k=()=>setTimeout(()=>t(7,d=!1),100),R=()=>m(p);function S(I){ht[I?"unshift":"push"](()=>{l=I,t(3,l)})}const T=async()=>{(await Ll()).isMobile||f.animate()};function z(I){ht[I?"unshift":"push"](()=>{o=I,t(2,o)})}return[s,a,o,l,c,u,h,d,p,f,i,v,m,b,_,y,C,L,F,V,k,R,S,T,z]}class hy extends li{constructor(e){super(),ci(this,e,uy,cy,Vn,{},null,[-1,-1])}}function dy(r){return{c:Q,l:Q,m:Q,i:Q,o:Q,d:Q}}function fy(r){let e,t,n="Привет! <br/> Меня зовут Евгения",i,s,a='<p class="paragraph svelte-l800rr">Я специалист в области иконописи.</p>',o,l,c,u="",h,d,p,g,v={ctx:r,current:null,token:null,hasCatch:!1,pending:gy,then:my,catch:py,value:14};return bn(qr("assets/imgs/profile-photo.jpg"),v),{c(){e=Y("div"),t=Y("h1"),t.innerHTML=n,i=Re(),s=Y("div"),s.innerHTML=a,l=Re(),c=Y("div"),c.innerHTML=u,h=Re(),d=Y("div"),v.block.c(),this.h()},l(x){e=Z(x,"DIV",{class:!0});var f=pe(e);t=Z(f,"H1",{class:!0,"data-svelte-h":!0}),Ye(t)!=="svelte-7rytjj"&&(t.innerHTML=n),i=Pe(f),s=Z(f,"DIV",{"data-svelte-h":!0}),Ye(s)!=="svelte-96ay7e"&&(s.innerHTML=a),l=Pe(f),c=Z(f,"DIV",{class:!0,"data-svelte-h":!0}),Ye(c)!=="svelte-dr7gig"&&(c.innerHTML=u),f.forEach(W),h=Pe(x),d=Z(x,"DIV",{class:!0});var m=pe(d);v.block.l(m),m.forEach(W),this.h()},h(){O(t,"class","title svelte-l800rr"),O(c,"class","social-button-wrapper svelte-l800rr"),O(e,"class","content-wrapper svelte-l800rr"),O(d,"class","profile-image svelte-l800rr")},m(x,f){Be(x,e,f),B(e,t),B(e,i),B(e,s),B(e,l),B(e,c),Be(x,h,f),Be(x,d,f),v.block.m(d,v.anchor=null),v.mount=()=>d,v.anchor=null,p||(g=[rn(r[4].call(null,t)),rn(r[5].call(null,d))],p=!0)},p(x,f){r=x},i(x){x&&(o||et(()=>{o=it(s,mt,{duration:1200,reverse:!0,delay:150}),o.start()})),wt(v.block)},o:Q,d(x){x&&(W(e),W(h),W(d)),v.block.d(),v.token=null,v=null,p=!1,Kr(g)}}}function py(r){return{c:Q,l:Q,m:Q,i:Q,o:Q,d:Q}}function my(r){let e,t,n;return{c(){e=Y("img"),this.h()},l(i){e=Z(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){tr(e.src,t=r[14])||O(e,"src",t),O(e,"alt","Evgenia's Profile"),O(e,"class","profile-pic svelte-l800rr")},m(i,s){Be(i,e,s)},i(i){i&&(n||et(()=>{n=it(e,mt,{duration:1200,delay:100,reverse:!0,maskStyles:[{property:"width",value:"100%"},{property:"height",value:"100%"}]}),n.start()}))},o:Q,d(i){i&&W(e)}}}function gy(r){return{c:Q,l:Q,m:Q,i:Q,o:Q,d:Q}}function vy(r){return{c:Q,l:Q,m:Q,i:Q,o:Q,d:Q}}function xy(r){return{c:Q,l:Q,m:Q,i:Q,o:Q,d:Q}}function _y(r){let e,t,n,i="Направления художественной деятельности",s,a,o,l,c="Иконопись",u,h,d,p="",g,v,x,f,m="Пастель",b,_,y,C="",L,F,V,k,R="Роспись храмов",S,T,z,I="",D,N,K,ce,G="Роспись мебели",j,ee,ie,me="",Ce,$,Me,Se,xe,Ee="Награды и номинации",We,q,se,ue,ye="Лучшая икона 2020",fe,Le,Ae,Ne="Самый красивый орнамент 2021",ke;return{c(){e=Y("ul"),t=Y("li"),n=Y("div"),n.textContent=i,a=Re(),o=Y("li"),l=Y("div"),l.textContent=c,h=Re(),d=Y("div"),d.innerHTML=p,v=Re(),x=Y("li"),f=Y("div"),f.textContent=m,_=Re(),y=Y("div"),y.innerHTML=C,F=Re(),V=Y("li"),k=Y("div"),k.textContent=R,T=Re(),z=Y("div"),z.innerHTML=I,N=Re(),K=Y("li"),ce=Y("div"),ce.textContent=G,ee=Re(),ie=Y("div"),ie.innerHTML=me,$=Re(),Me=Y("ul"),Se=Y("li"),xe=Y("div"),xe.textContent=Ee,q=Re(),se=Y("li"),ue=Y("div"),ue.textContent=ye,Le=Re(),Ae=Y("div"),Ae.textContent=Ne,this.h()},l(A){e=Z(A,"UL",{class:!0});var w=pe(e);t=Z(w,"LI",{class:!0});var te=pe(t);n=Z(te,"DIV",{"data-svelte-h":!0}),Ye(n)!=="svelte-1oei956"&&(n.textContent=i),te.forEach(W),a=Pe(w),o=Z(w,"LI",{class:!0});var ae=pe(o);l=Z(ae,"DIV",{"data-svelte-h":!0}),Ye(l)!=="svelte-1yzagzn"&&(l.textContent=c),h=Pe(ae),d=Z(ae,"DIV",{class:!0,"data-svelte-h":!0}),Ye(d)!=="svelte-40l7oh"&&(d.innerHTML=p),ae.forEach(W),v=Pe(w),x=Z(w,"LI",{class:!0});var de=pe(x);f=Z(de,"DIV",{"data-svelte-h":!0}),Ye(f)!=="svelte-1373dp1"&&(f.textContent=m),_=Pe(de),y=Z(de,"DIV",{class:!0,"data-svelte-h":!0}),Ye(y)!=="svelte-1c6rz7y"&&(y.innerHTML=C),de.forEach(W),F=Pe(w),V=Z(w,"LI",{class:!0});var re=pe(V);k=Z(re,"DIV",{"data-svelte-h":!0}),Ye(k)!=="svelte-8xv0me"&&(k.textContent=R),T=Pe(re),z=Z(re,"DIV",{class:!0,"data-svelte-h":!0}),Ye(z)!=="svelte-sz101o"&&(z.innerHTML=I),re.forEach(W),N=Pe(w),K=Z(w,"LI",{class:!0});var be=pe(K);ce=Z(be,"DIV",{"data-svelte-h":!0}),Ye(ce)!=="svelte-790zec"&&(ce.textContent=G),ee=Pe(be),ie=Z(be,"DIV",{class:!0,"data-svelte-h":!0}),Ye(ie)!=="svelte-jb1xl5"&&(ie.innerHTML=me),be.forEach(W),w.forEach(W),$=Pe(A),Me=Z(A,"UL",{class:!0});var Te=pe(Me);Se=Z(Te,"LI",{class:!0});var oe=pe(Se);xe=Z(oe,"DIV",{"data-svelte-h":!0}),Ye(xe)!=="svelte-1oshtkn"&&(xe.textContent=Ee),oe.forEach(W),q=Pe(Te),se=Z(Te,"LI",{class:!0});var M=pe(se);ue=Z(M,"DIV",{"data-svelte-h":!0}),Ye(ue)!=="svelte-w6pa5p"&&(ue.textContent=ye),Le=Pe(M),Ae=Z(M,"DIV",{"data-svelte-h":!0}),Ye(Ae)!=="svelte-mgdkx8"&&(Ae.textContent=Ne),M.forEach(W),Te.forEach(W),this.h()},h(){O(t,"class","list-title svelte-l800rr"),O(d,"class","flex-item"),O(o,"class","svelte-l800rr"),O(y,"class","flex-item"),O(x,"class","svelte-l800rr"),O(z,"class","flex-item"),O(V,"class","svelte-l800rr"),O(ie,"class","flex-item"),O(K,"class","svelte-l800rr"),O(e,"class","list first svelte-l800rr"),O(Se,"class","list-title svelte-l800rr"),O(se,"class","svelte-l800rr"),O(Me,"class","list svelte-l800rr")},m(A,w){Be(A,e,w),B(e,t),B(t,n),B(e,a),B(e,o),B(o,l),B(o,h),B(o,d),B(e,v),B(e,x),B(x,f),B(x,_),B(x,y),B(e,F),B(e,V),B(V,k),B(V,T),B(V,z),B(e,N),B(e,K),B(K,ce),B(K,ee),B(K,ie),Be(A,$,w),Be(A,Me,w),B(Me,Se),B(Se,xe),B(Me,q),B(Me,se),B(se,ue),B(se,Le),B(se,Ae)},i(A){A&&(s||et(()=>{s=it(n,nn,{initDelay:400}),s.start()})),A&&(u||et(()=>{u=it(l,nn,{initDelay:550}),u.start()})),A&&(g||et(()=>{g=it(d,mt,{delay:600}),g.start()})),A&&(b||et(()=>{b=it(f,nn,{initDelay:650}),b.start()})),A&&(L||et(()=>{L=it(y,mt,{delay:700}),L.start()})),A&&(S||et(()=>{S=it(k,nn,{initDelay:750}),S.start()})),A&&(D||et(()=>{D=it(z,mt,{delay:800}),D.start()})),A&&(j||et(()=>{j=it(ce,nn,{initDelay:850}),j.start()})),A&&(Ce||et(()=>{Ce=it(ie,mt,{delay:900}),Ce.start()})),A&&(We||et(()=>{We=it(xe,nn,{initDelay:400}),We.start()})),A&&(fe||et(()=>{fe=it(ue,nn,{initDelay:550}),fe.start()})),A&&(ke||et(()=>{ke=it(Ae,nn,{initDelay:550}),ke.start()}))},o:Q,d(A){A&&(W(e),W($),W(Me))}}}function yy(r){return{c:Q,l:Q,m:Q,i:Q,o:Q,d:Q}}function by(r){let e,t,n,i={ctx:r,current:null,token:null,hasCatch:!1,pending:vy,then:fy,catch:dy,value:13};bn(r[2],i);let s={ctx:r,current:null,token:null,hasCatch:!1,pending:yy,then:_y,catch:xy,value:13};return bn(r[3],s),{c(){e=Y("div"),i.block.c(),t=Re(),n=Y("div"),s.block.c(),this.h()},l(a){e=Z(a,"DIV",{id:!0,class:!0});var o=pe(e);i.block.l(o),o.forEach(W),t=Pe(a),n=Z(a,"DIV",{class:!0});var l=pe(n);s.block.l(l),l.forEach(W),this.h()},h(){O(e,"id","content-container"),O(e,"class","about svelte-l800rr"),O(n,"class","horizontal-flex svelte-l800rr")},m(a,o){Be(a,e,o),i.block.m(e,i.anchor=null),i.mount=()=>e,i.anchor=null,r[6](e),Be(a,t,o),Be(a,n,o),s.block.m(n,s.anchor=null),s.mount=()=>n,s.anchor=null,r[7](n)},p(a,[o]){r=a},i(a){wt(i.block),wt(s.block)},o:Q,d(a){a&&(W(e),W(t),W(n)),i.block.d(),i.token=null,i=null,r[6](null),s.block.d(),s.token=null,s=null,r[7](null)}}}function My(r,e,t){let n,i;Qt(r,$s,x=>t(10,n=x)),Qt(r,yo,x=>t(11,i=x));let s,a,o,l,c=new Promise(x=>l=x),u,h=new Promise(x=>u=x);ar(async()=>{await or,Gr(yo,i=s,i),n.addOffset({element:o,speedY:.8}),Qs(s,()=>l(!0)),Qs(a,()=>u(!0))});function d(x){nn(x,{delay:15}).anime()}function p(x){n.addOffset({element:x,speedY:.8})}function g(x){ht[x?"unshift":"push"](()=>{s=x,t(0,s)})}function v(x){ht[x?"unshift":"push"](()=>{a=x,t(1,a)})}return[s,a,c,h,d,p,g,v]}class wy extends li{constructor(e){super(),ci(this,e,My,by,Vn,{})}}const{window:Sy}=fu;function Ty(r){return{c:Q,l:Q,m:Q,p:Q,d:Q}}function Ey(r){let e,t,n,i,s,a,o,l,c,u=r[0],h,d,p,g='<div class="hb svelte-11y6gr6"><span class="svelte-11y6gr6"></span> <span class="svelte-11y6gr6"></span> <span class="svelte-11y6gr6"></span></div>',v,x,f=cu(r);return{c(){e=Y("div"),t=Y("div"),n=Y("button"),i=Y("img"),a=Re(),o=Y("div"),l=Y("div"),c=Y("ul"),f.c(),h=Re(),d=Y("div"),p=Y("button"),p.innerHTML=g,this.h()},l(m){e=Z(m,"DIV",{class:!0,style:!0});var b=pe(e);t=Z(b,"DIV",{class:!0,style:!0});var _=pe(t);n=Z(_,"BUTTON",{class:!0});var y=pe(n);i=Z(y,"IMG",{src:!0,class:!0,alt:!0,draggable:!0}),y.forEach(W),_.forEach(W),a=Pe(b),o=Z(b,"DIV",{class:!0});var C=pe(o);l=Z(C,"DIV",{class:!0});var L=pe(l);c=Z(L,"UL",{class:!0});var F=pe(c);f.l(F),F.forEach(W),L.forEach(W),h=Pe(C),d=Z(C,"DIV",{class:!0});var V=pe(d);p=Z(V,"BUTTON",{class:!0,"data-svelte-h":!0}),Ye(p)!=="svelte-ddta8z"&&(p.innerHTML=g),V.forEach(W),C.forEach(W),b.forEach(W),this.h()},h(){tr(i.src,s="assets/imgs/logo.svg")||O(i,"src",s),O(i,"class","logo-icon svelte-11y6gr6"),O(i,"alt","Logo"),O(i,"draggable","false"),O(n,"class","interactive clickable svelte-11y6gr6"),O(t,"class","flex-wrapper ico svelte-11y6gr6"),ei(t,"z-index","21"),O(c,"class","nav-list svelte-11y6gr6"),O(l,"class","wrapper svelte-11y6gr6"),at(l,"mobileMenuActive",r[0]),O(p,"class","interactive hb-button clickable svelte-11y6gr6"),at(p,"mobileMenuActive",r[0]),O(d,"class","mask svelte-11y6gr6"),O(o,"class","flex-wrapper svelte-11y6gr6"),O(e,"class","nav-wrapper svelte-11y6gr6"),ei(e,"transform","translate(0px)")},m(m,b){Be(m,e,b),B(e,t),B(t,n),B(n,i),B(e,a),B(e,o),B(o,l),B(l,c),f.m(c,null),B(o,h),B(o,d),B(d,p),v||(x=[rn(r[7].call(null,i,{delay:1e3})),Pt(n,"click",r[10]),rn(r[7].call(null,p,{delay:1e3})),Pt(p,"click",r[14])],v=!0)},p(m,b){b&1&&Vn(u,u=m[0])?(la(),Zt(f,1,1,Q),ca(),f=cu(m),f.c(),wt(f,1),f.m(c,null)):f.p(m,b),b&1&&at(l,"mobileMenuActive",m[0]),b&1&&at(p,"mobileMenuActive",m[0])},d(m){m&&W(e),f.d(m),v=!1,Kr(x)}}}function cu(r){let e,t,n="Home",i,s,a,o,l='<p class="svelte-11y6gr6">Мои работы</p>',c,u,h,d,p="Обо мне",g,v,x,f,m="Email",b,_,y,C,L="Telegram",F,V,k;return{c(){e=Y("li"),t=Y("button"),t.textContent=n,s=Re(),a=Y("li"),o=Y("button"),o.innerHTML=l,u=Re(),h=Y("li"),d=Y("button"),d.textContent=p,v=Re(),x=Y("li"),f=Y("a"),f.textContent=m,_=Re(),y=Y("li"),C=Y("a"),C.textContent=L,this.h()},l(R){e=Z(R,"LI",{class:!0});var S=pe(e);t=Z(S,"BUTTON",{class:!0,"data-svelte-h":!0}),Ye(t)!=="svelte-1unzo50"&&(t.textContent=n),S.forEach(W),s=Pe(R),a=Z(R,"LI",{class:!0});var T=pe(a);o=Z(T,"BUTTON",{class:!0,"data-svelte-h":!0}),Ye(o)!=="svelte-3t8vtr"&&(o.innerHTML=l),T.forEach(W),u=Pe(R),h=Z(R,"LI",{class:!0});var z=pe(h);d=Z(z,"BUTTON",{class:!0,"data-svelte-h":!0}),Ye(d)!=="svelte-1mckxnx"&&(d.textContent=p),z.forEach(W),v=Pe(R),x=Z(R,"LI",{class:!0});var I=pe(x);f=Z(I,"A",{href:!0,target:!0,class:!0,"data-svelte-h":!0}),Ye(f)!=="svelte-z6lnfo"&&(f.textContent=m),I.forEach(W),_=Pe(R),y=Z(R,"LI",{class:!0});var D=pe(y);C=Z(D,"A",{href:!0,target:!0,class:!0,"data-svelte-h":!0}),Ye(C)!=="svelte-nby2ma"&&(C.textContent=L),D.forEach(W),this.h()},h(){O(t,"class","interactive clickable svelte-11y6gr6"),O(e,"class","svelte-11y6gr6"),O(o,"class","interactive clickable svelte-11y6gr6"),O(a,"class","svelte-11y6gr6"),O(d,"class","interactive clickable svelte-11y6gr6"),O(h,"class","svelte-11y6gr6"),O(f,"href","mailto:zhenya2201art@gmail.com"),O(f,"target","_blank"),O(f,"class","svelte-11y6gr6"),O(x,"class","mobile svelte-11y6gr6"),O(C,"href","https://t.me/rodina_albom"),O(C,"target","_blank"),O(C,"class","svelte-11y6gr6"),O(y,"class","svelte-11y6gr6")},m(R,S){Be(R,e,S),B(e,t),Be(R,s,S),Be(R,a,S),B(a,o),Be(R,u,S),Be(R,h,S),B(h,d),Be(R,v,S),Be(R,x,S),B(x,f),Be(R,_,S),Be(R,y,S),B(y,C),V||(k=[Pt(t,"click",r[11]),rn(r[7].call(null,e,{delay:1e3})),Pt(o,"click",r[12]),rn(r[7].call(null,a,{delay:1100})),Pt(d,"click",r[13]),rn(r[7].call(null,h,{delay:1200})),rn(r[7].call(null,y,{delay:1300}))],V=!0)},p:Q,i(R){R&&(i||et(()=>{i=it(t,r[2],{delay:200}),i.start()})),R&&(c||et(()=>{c=it(o,r[2],{delay:250}),c.start()})),R&&(g||et(()=>{g=it(d,r[2],{delay:300}),g.start()})),R&&(b||et(()=>{b=it(f,r[2],{delay:350}),b.start()})),R&&(F||et(()=>{F=it(C,r[2],{delay:400}),F.start()}))},o:Q,d(R){R&&(W(e),W(s),W(a),W(u),W(h),W(v),W(x),W(_),W(y)),V=!1,Kr(k)}}}function Ay(r){return{c:Q,l:Q,m:Q,p:Q,d:Q}}function Cy(r){let e,t,n,i={ctx:r,current:null,token:null,hasCatch:!1,pending:Ay,then:Ey,catch:Ty,value:15};return bn(or,i),{c(){e=Ys(),i.block.c()},l(s){e=Ys(),i.block.l(s)},m(s,a){Be(s,e,a),i.block.m(s,i.anchor=a),i.mount=()=>e.parentNode,i.anchor=e,t||(n=Pt(Sy,"resize",r[9]),t=!0)},p(s,[a]){r=s,Wr(i,r,a)},i:Q,o:Q,d(s){s&&W(e),i.block.d(s),i.token=null,i=null,t=!1,n()}}}function Ly(r,e,t){let n,i,s,a;Qt(r,xo,m=>t(3,i=m)),Qt(r,_o,m=>t(4,s=m)),Qt(r,yo,m=>t(5,a=m));let{scrollContainer:o}=e,l=!1,c=window.innerWidth<=950;function u(m){o.scrollTo({top:m.offsetTop-window.innerHeight/5,behavior:"smooth"}),t(0,l=!1)}function h(m,b){c||(m.style.transform="translateY(130%) rotate(7deg)",Qe({targets:m,rotate:0,translateY:"0%",easing:"cubicBezier(0.165, 0.84, 0.44, 1)",duration:1e3,delay:b.delay}))}const d=()=>t(1,c=window.innerWidth<=950),p=()=>u(i),g=()=>u(i),v=()=>u(s),x=()=>u(a),f=()=>t(0,l=!l);return r.$$set=m=>{"scrollContainer"in m&&t(8,o=m.scrollContainer)},r.$$.update=()=>{r.$$.dirty&1&&t(2,n=l?mt:(m,b)=>{let _=mt(m,{reverse:!0,duration:3e3});return{tick:y=>{let C=1-y;_.tick(C),y==1&&setTimeout(()=>_.tick(1),500)}}})},[l,c,n,i,s,a,u,h,o,d,p,g,v,x,f]}class Ry extends li{constructor(e){super(),ci(this,e,Ly,Cy,Vn,{scrollContainer:8})}}function Py(r){let e,t,n,i,s=r[5].availablity_date+"",a,o;return{c(){e=Y("p"),t=Ht("Принимаю заказы на роспись, написание икон и прочие работы с "),n=Y("br"),i=Re(),a=Ht(s),o=Ht("."),this.h()},l(l){e=Z(l,"P",{class:!0});var c=pe(e);t=Gt(c,"Принимаю заказы на роспись, написание икон и прочие работы с "),n=Z(c,"BR",{class:!0}),i=Pe(c),a=Gt(c,s),o=Gt(c,"."),c.forEach(W),this.h()},h(){O(n,"class","svelte-g0q3jr"),O(e,"class","large-text svelte-g0q3jr")},m(l,c){Be(l,e,c),B(e,t),B(e,n),B(e,i),B(e,a),B(e,o),r[9](e)},p(l,c){c&32&&s!==(s=l[5].availablity_date+"")&&kn(a,s)},d(l){l&&W(e),r[9](null)}}}function Iy(r){let e,t="Принимаю заказы на роспись, написание икон и прочие работы.";return{c(){e=Y("p"),e.textContent=t,this.h()},l(n){e=Z(n,"P",{class:!0,"data-svelte-h":!0}),Ye(e)!=="svelte-13niust"&&(e.textContent=t),this.h()},h(){O(e,"class","large-text svelte-g0q3jr")},m(n,i){Be(n,e,i),r[8](e)},p:Q,d(n){n&&W(e),r[8](null)}}}function Dy(r){let e,t,n,i,s='<img src="assets/imgs/logo.svg" alt="mh logo" class="logo svelte-g0q3jr"/>',a,o,l,c,u="zhenya2201art@gmail.com",h,d,p,g,v,x,f,m='Adapted from Musab Hassans`s work<br class="svelte-g0q3jr"/>',b,_,y='<svg id="signature" class="name-signature svelte-g0q3jr" x="0px" y="0px" viewBox="0 0 190 136.9" style="stroke: rgb(79, 78, 85);"></svg>';function C(V,k){return V[5].availablity_date===""?Iy:Py}let L=C(r),F=L(r);return{c(){e=Y("div"),t=Y("div"),n=Y("div"),i=Y("div"),i.innerHTML=s,a=Re(),o=Y("div"),F.c(),l=Re(),c=Y("a"),c.textContent=u,h=Re(),d=Y("div"),p=Y("p"),g=Ht("© "),v=Ht(r[6]),x=Re(),f=Y("p"),f.innerHTML=m,b=Re(),_=Y("div"),_.innerHTML=y,this.h()},l(V){e=Z(V,"DIV",{class:!0});var k=pe(e);t=Z(k,"DIV",{class:!0});var R=pe(t);n=Z(R,"DIV",{class:!0});var S=pe(n);i=Z(S,"DIV",{class:!0,"data-svelte-h":!0}),Ye(i)!=="svelte-22qnc3"&&(i.innerHTML=s),S.forEach(W),a=Pe(R),o=Z(R,"DIV",{class:!0});var T=pe(o);F.l(T),l=Pe(T),c=Z(T,"A",{class:!0,href:!0,target:!0,"data-svelte-h":!0}),Ye(c)!=="svelte-e1lm6w"&&(c.textContent=u),T.forEach(W),h=Pe(R),d=Z(R,"DIV",{class:!0});var z=pe(d);p=Z(z,"P",{class:!0});var I=pe(p);g=Gt(I,"© "),v=Gt(I,r[6]),I.forEach(W),x=Pe(z),f=Z(z,"P",{class:!0,"data-svelte-h":!0}),Ye(f)!=="svelte-q0dw5v"&&(f.innerHTML=m),z.forEach(W),R.forEach(W),b=Pe(k),_=Z(k,"DIV",{class:!0,"data-svelte-h":!0}),Ye(_)!=="svelte-1lrer4p"&&(_.innerHTML=y),k.forEach(W),this.h()},h(){O(i,"class","inline-flex svelte-g0q3jr"),O(n,"class","logo-wrapper svelte-g0q3jr"),O(c,"class","button large-text svelte-g0q3jr"),O(c,"href","mailto:zhenya2201art@gmail.com"),O(c,"target","_blank"),O(o,"class","status-wrapper"),O(p,"class","year svelte-g0q3jr"),O(f,"class","credits svelte-g0q3jr"),O(d,"class","credits-wrapper svelte-g0q3jr"),O(t,"class","flex-wrapper svelte-g0q3jr"),O(_,"class","flex-wrapper decor svelte-g0q3jr"),O(e,"class","footer-wrapper svelte-g0q3jr")},m(V,k){Be(V,e,k),B(e,t),B(t,n),B(n,i),r[7](i),B(t,a),B(t,o),F.m(o,null),B(o,l),B(o,c),r[10](c),B(t,h),B(t,d),B(d,p),B(p,g),B(p,v),B(d,x),B(d,f),r[11](d),B(e,b),B(e,_),r[12](e)},p(V,[k]){L===(L=C(V))&&F?F.p(V,k):(F.d(1),F=L(V),F&&(F.c(),F.m(o,l)))},i:Q,o:Q,d(V){V&&W(e),r[7](null),F.d(),r[10](null),r[11](null),r[12](null)}}}function Fy(r,e,t){let n,i,s,a,o,l,c,u,h,d={availablity_date:""};_u.subscribe(y=>{y!==void 0&&t(5,d=y)});const p=new Date().getFullYear();function g(){const y=mt(i,{}),C=nn(o,{delay:6,initDelay:150}),L=mt(s,{delay:150}),F=nn(a,{delay:6,initDelay:100});Qs(n,()=>{y.anime(),L.anime(),C.anime(),F.anime();let V=[{strokeDashoffset:"0"}];l.animate(V,{duration:1e3,delay:0,easing:"cubic-bezier(.72,.3,.25,1)",fill:"forwards"}),c.animate(V,{duration:300,delay:1e3,easing:"cubic-bezier(.47,.41,.26,1)",fill:"forwards"}),u.animate(V,{duration:200,delay:1300,easing:"cubic-bezier(.47,.41,.26,1)",fill:"forwards"}),h.animate(V,{duration:1e3,delay:1500,easing:"cubic-bezier(.47,.41,.26,1)",fill:"forwards"})})}ar(async()=>{await or,g()});function v(y){ht[y?"unshift":"push"](()=>{i=y,t(1,i)})}function x(y){ht[y?"unshift":"push"](()=>{a=y,t(3,a)})}function f(y){ht[y?"unshift":"push"](()=>{a=y,t(3,a)})}function m(y){ht[y?"unshift":"push"](()=>{o=y,t(4,o)})}function b(y){ht[y?"unshift":"push"](()=>{s=y,t(2,s)})}function _(y){ht[y?"unshift":"push"](()=>{n=y,t(0,n)})}return[n,i,s,a,o,d,p,v,x,f,m,b,_]}class zy extends li{constructor(e){super(),ci(this,e,Fy,Dy,Vn,{})}}const{document:Ny}=fu;function ky(r){return{c:Q,l:Q,m:Q,p:Q,d:Q}}function By(r){let e,t='<div class="dot svelte-1l3lcu7"></div>',n,i;return{c(){e=Y("div"),e.innerHTML=t,this.h()},l(s){e=Z(s,"DIV",{class:!0,"data-svelte-h":!0}),Ye(e)!=="svelte-1kqyv5l"&&(e.innerHTML=t),this.h()},h(){O(e,"class","dot-container active svelte-1l3lcu7"),at(e,"hover",r[0]),at(e,"disabled",r[2]||r[1])},m(s,a){Be(s,e,a),n||(i=rn(r[4].call(null,e)),n=!0)},p(s,a){a&1&&at(e,"hover",s[0]),a&6&&at(e,"disabled",s[2]||s[1])},d(s){s&&W(e),n=!1,i()}}}function Oy(r){return{c:Q,l:Q,m:Q,p:Q,d:Q}}function Uy(r){let e,t,n,i,s={ctx:r,current:null,token:null,hasCatch:!1,pending:Oy,then:By,catch:ky,value:9};return bn(or,s),{c(){e=Re(),t=Ys(),s.block.c()},l(a){e=Pe(a),t=Ys(),s.block.l(a)},m(a,o){Be(a,e,o),Be(a,t,o),s.block.m(a,s.anchor=o),s.mount=()=>t.parentNode,s.anchor=t,n||(i=Pt(Ny.body,"mousemove",r[5]),n=!0)},p(a,[o]){r=a,Wr(s,r,o)},i:Q,o:Q,d(a){a&&(W(e),W(t)),s.block.d(a),s.token=null,s=null,n=!1,i()}}}function uu(r){return r<.5?2*r*r:-1+(4-2*r)*r}function Vy(r,e,t){let n;Qt(r,vo,d=>t(8,n=d));let i=!1,s=!1,a=!0;js.subscribe(d=>t(1,s=d));let o={x:0,y:0},l={x:0,y:0};function c(d){if(n)return;a&&setTimeout(()=>t(2,a=!1),200);let p=window.getComputedStyle(d.target).cursor;if(t(0,i=p==="pointer"),p==="pointer"){let g=document.elementFromPoint(d.clientX,d.clientY),v=g.clientWidth,x=g.clientHeight,f={x:g.getBoundingClientRect().left+v/2,y:g.getBoundingClientRect().top+x/2};l={x:f.x+(f.x-d.clientX)*.15,y:f.y+(f.y-d.clientY)*.15}}else l={x:d.clientX,y:d.clientY}}function u(d){let p=.4;o.x+=uu(p)*(l.x-o.x),o.y+=uu(p)*(l.y-o.y),o.x=Math.ceil(o.x*100)/100,o.y=Math.ceil(o.y*100)/100,d.style.transform=`translate3d(${o.x}px, ${o.y}px, 0px)`,requestAnimationFrame(()=>u(d))}return[i,s,a,c,u,d=>c(d)]}class Hy extends li{constructor(e){super(),ci(this,e,Vy,Uy,Vn,{})}}const Oh=r=>{r=r.trim();const e=r.match("[0-9.]+");let t="ms",n;const i=e?e[0]:"";return i&&(t=r.split(i)[1],n=Number(i)),{num:n,unit:t}},Gy=r=>{const e=Oh(r),t=e?e.num:void 0;if(!t)return"";const n=r.replace(t+"","");let i=t;return n==="s"&&(i=t*1e3),i+"ms"};function Wy(r){const e=c=>c.replace(/-([a-z])/g,u=>u[1].toUpperCase()),t=c=>window.getComputedStyle(r).getPropertyValue(c)||r.style[e(c)],n=t("transition-delay")||"0ms",i=t("transition-duration")||"0ms",s=Array.isArray(i)?i:[i],a=Array.isArray(n)?n:[n];let o=0,l;return s.push.apply(s,a),s.forEach(c=>{c.split(",").forEach(u=>{u=Gy(u),l=Oh(u),l.num&&l.num>o&&(o=l.num)})}),o}function hu(r){const e=Wy(r);return new Promise(t=>{e>0?setTimeout(()=>{t(r)},e):t(r)})}function qy(r){let e,t,n,i,s;return{c(){e=Y("div"),t=Y("div"),n=Y("div"),i=Re(),s=Y("div"),this.h()},l(a){e=Z(a,"DIV",{class:!0});var o=pe(e);t=Z(o,"DIV",{class:!0});var l=pe(t);n=Z(l,"DIV",{class:!0}),pe(n).forEach(W),i=Pe(l),s=Z(l,"DIV",{class:!0,style:!0}),pe(s).forEach(W),l.forEach(W),o.forEach(W),this.h()},h(){O(n,"class","loader-background svelte-1995pyy"),at(n,"outro",r[1]),O(s,"class","loader svelte-1995pyy"),ei(s,"width",r[2]+"%"),at(s,"outro",r[1]),O(t,"class","loader-wrapper svelte-1995pyy"),O(e,"class","page-cover svelte-1995pyy")},m(a,o){Be(a,e,o),B(e,t),B(t,n),B(t,i),B(t,s),r[3](s)},p(a,[o]){o&2&&at(n,"outro",a[1]),o&4&&ei(s,"width",a[2]+"%"),o&2&&at(s,"outro",a[1])},i:Q,o:Q,d(a){a&&W(e),r[3](null)}}}function jy(r,e,t){let n;Qt(r,ko,l=>t(4,n=l));let i,s=!1,a=0;ar(async()=>{let l=0,c=n.length;await Bo,n.forEach(async u=>{await u,l++,t(2,a=Math.round(l/c*100)),a>99&&hu(i).then(()=>{t(1,s=!0),t(2,a=0),hu(i).then(()=>{xu()})})})});function o(l){ht[l?"unshift":"push"](()=>{i=l,t(0,i)})}return[i,s,a,o]}class Xy extends li{constructor(e){super(),ci(this,e,jy,qy,Vn,{})}}function du(r){let e,t;return e=new Xy({}),{c(){vi(e.$$.fragment)},l(n){xi(e.$$.fragment,n)},m(n,i){_i(e,n,i),t=!0},i(n){t||(wt(e.$$.fragment,n),t=!0)},o(n){Zt(e.$$.fragment,n),t=!1},d(n){yi(e,n)}}}function Yy(r){let e,t,n,i,s,a,o,l,c,u,h,d,p,g,v;e=new Hy({});let x=r[2]&&du();return a=new Ry({props:{scrollContainer:r[0]}}),l=new zd({}),u=new hy({}),d=new wy({}),g=new zy({}),{c(){vi(e.$$.fragment),t=Re(),x&&x.c(),n=Re(),i=Y("div"),s=Y("div"),vi(a.$$.fragment),o=Re(),vi(l.$$.fragment),c=Re(),vi(u.$$.fragment),h=Re(),vi(d.$$.fragment),p=Re(),vi(g.$$.fragment),this.h()},l(f){xi(e.$$.fragment,f),t=Pe(f),x&&x.l(f),n=Pe(f),i=Z(f,"DIV",{id:!0,class:!0});var m=pe(i);s=Z(m,"DIV",{id:!0,class:!0});var b=pe(s);xi(a.$$.fragment,b),b.forEach(W),o=Pe(m),xi(l.$$.fragment,m),c=Pe(m),xi(u.$$.fragment,m),h=Pe(m),xi(d.$$.fragment,m),p=Pe(m),xi(g.$$.fragment,m),m.forEach(W),this.h()},h(){O(s,"id","nav-bar"),O(s,"class","svelte-1srbcku"),O(i,"id","scroll-frame"),O(i,"class","svelte-1srbcku")},m(f,m){_i(e,f,m),Be(f,t,m),x&&x.m(f,m),Be(f,n,m),Be(f,i,m),B(i,s),_i(a,s,null),r[3](s),B(i,o),_i(l,i,null),B(i,c),_i(u,i,null),B(i,h),_i(d,i,null),B(i,p),_i(g,i,null),r[4](i),v=!0},p(f,[m]){f[2]?x?m&4&&wt(x,1):(x=du(),x.c(),wt(x,1),x.m(n.parentNode,n)):x&&(la(),Zt(x,1,1,()=>{x=null}),ca());const b={};m&1&&(b.scrollContainer=f[0]),a.$set(b)},i(f){v||(wt(e.$$.fragment,f),wt(x),wt(a.$$.fragment,f),wt(l.$$.fragment,f),wt(u.$$.fragment,f),wt(d.$$.fragment,f),wt(g.$$.fragment,f),v=!0)},o(f){Zt(e.$$.fragment,f),Zt(x),Zt(a.$$.fragment,f),Zt(l.$$.fragment,f),Zt(u.$$.fragment,f),Zt(d.$$.fragment,f),Zt(g.$$.fragment,f),v=!1},d(f){f&&(W(t),W(n),W(i)),yi(e,f),x&&x.d(f),yi(a),r[3](null),yi(l),yi(u),yi(d),yi(g),r[4](null)}}}function Zy(r,e,t){let n,i;Qt(r,$s,u=>t(5,n=u)),Qt(r,ko,u=>t(6,i=u));let s,a,o=!0;ar(async()=>{t(0,s.style.overflowY="hidden",s),s.scrollTo(0,0),Bo.set(await yl("/data/work-data.json")),_u.set(await yl("/data/data.json")),await Promise.allSettled(i),await $h,t(2,o=!1),vu(),Qh(),Gr($s,n=new Jh({root:s,easing:"easeOutCirc",duration:1500,fixedOffsets:[a]}),n),t(0,s.style.overflowX="hidden",s),t(0,s.style.overflowY="auto",s)});function l(u){ht[u?"unshift":"push"](()=>{a=u,t(1,a)})}function c(u){ht[u?"unshift":"push"](()=>{s=u,t(0,s)})}return[s,a,o,l,c]}class tb extends li{constructor(e){super(),ci(this,e,Zy,Yy,Vn,{})}}export{tb as component,Ky as universal};
