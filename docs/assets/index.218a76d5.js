function nn(){import("data:text/javascript,")}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function g(){}const It=e=>e;function Tt(e,t){for(const n in t)e[n]=t[n];return e}function Mt(e){return e()}function kt(){return Object.create(null)}function z(e){e.forEach(Mt)}function Q(e){return typeof e=="function"}function I(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let Z;function Et(e,t){return Z||(Z=document.createElement("a")),Z.href=t,e===Z.href}function ne(e){return Object.keys(e).length===0}function Ft(e,...t){if(e==null)return g;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function re(e,t,n){e.$$.on_destroy.push(Ft(t,n))}function se(e,t,n){return e.set(n),t}function H(e){return e&&Q(e.destroy)?e.destroy:g}const Xt=typeof window<"u";let oe=Xt?()=>window.performance.now():()=>Date.now(),gt=Xt?e=>requestAnimationFrame(e):g;const U=new Set;function Yt(e){U.forEach(t=>{t.c(e)||(U.delete(t),t.f())}),U.size!==0&&gt(Yt)}function ie(e){let t;return U.size===0&&gt(Yt),{promise:new Promise(n=>{U.add(t={c:e,f:n})}),abort(){U.delete(t)}}}function m(e,t){e.appendChild(t)}function zt(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function ce(e){const t=b("style");return le(zt(e),t),t.sheet}function le(e,t){return m(e.head||e,t),t.sheet}function j(e,t,n){e.insertBefore(t,n||null)}function A(e){e.parentNode&&e.parentNode.removeChild(e)}function b(e){return document.createElement(e)}function bt(e){return document.createTextNode(e)}function C(){return bt(" ")}function wt(){return bt("")}function M(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function k(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ue(e){return Array.from(e.childNodes)}function ae(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function Ht(e,t,{bubbles:n=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(e,n,r,t),s}function st(e,t){return new e(t)}const ot=new Map;let it=0;function fe(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function de(e,t){const n={stylesheet:ce(t),rules:{}};return ot.set(e,n),n}function he(e,t,n,r,s,o,u,i=0){const c=16.666/r;let l=`{
`;for(let $=0;$<=1;$+=c){const S=t+(n-t)*o($);l+=$*100+`%{${u(S,1-S)}}
`}const d=l+`100% {${u(n,1-n)}}
}`,h=`__svelte_${fe(d)}_${i}`,w=zt(e),{stylesheet:p,rules:y}=ot.get(w)||de(w,e);y[h]||(y[h]=!0,p.insertRule(`@keyframes ${h} ${d}`,p.cssRules.length));const E=e.style.animation||"";return e.style.animation=`${E?`${E}, `:""}${h} ${r}ms linear ${s}ms 1 both`,it+=1,h}function xt(e,t){const n=(e.style.animation||"").split(", "),r=n.filter(t?o=>o.indexOf(t)<0:o=>o.indexOf("__svelte")===-1),s=n.length-r.length;s&&(e.style.animation=r.join(", "),it-=s,it||_e())}function _e(){gt(()=>{it||(ot.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&A(t)}),ot.clear())})}let G;function K(e){G=e}function $t(){if(!G)throw new Error("Function called outside component initialization");return G}function pe(e){$t().$$.after_update.push(e)}function Bt(e){$t().$$.on_destroy.push(e)}function me(){const e=$t();return(t,n,{cancelable:r=!1}={})=>{const s=e.$$.callbacks[t];if(s){const o=Ht(t,n,{cancelable:r});return s.slice().forEach(u=>{u.call(e,o)}),!o.defaultPrevented}return!0}}function Ct(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(r=>r.call(this,t))}const W=[],At=[],et=[],St=[],Ut=Promise.resolve();let yt=!1;function Vt(){yt||(yt=!0,Ut.then(Wt))}function lt(){return Vt(),Ut}function J(e){et.push(e)}const dt=new Set;let tt=0;function Wt(){const e=G;do{for(;tt<W.length;){const t=W[tt];tt++,K(t),ye(t.$$)}for(K(null),W.length=0,tt=0;At.length;)At.pop()();for(let t=0;t<et.length;t+=1){const n=et[t];dt.has(n)||(dt.add(n),n())}et.length=0}while(W.length);for(;St.length;)St.pop()();yt=!1,dt.clear(),K(e)}function ye(e){if(e.fragment!==null){e.update(),z(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(J)}}let V;function ge(){return V||(V=Promise.resolve(),V.then(()=>{V=null})),V}function Lt(e,t,n){e.dispatchEvent(Ht(`${t?"intro":"outro"}${n}`))}const nt=new Set;let Y;function ut(){Y={r:0,c:[],p:Y}}function at(){Y.r||z(Y.c),Y=Y.p}function L(e,t){e&&e.i&&(nt.delete(e),e.i(t))}function q(e,t,n,r){if(e&&e.o){if(nt.has(e))return;nt.add(e),Y.c.push(()=>{nt.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}const be={duration:0};function we(e,t,n){let r=t(e,n),s=!1,o,u,i=0;function c(){o&&xt(e,o)}function l(){const{delay:h=0,duration:w=300,easing:p=It,tick:y=g,css:E}=r||be;E&&(o=he(e,0,1,w,h,p,E,i++)),y(0,1);const $=oe()+h,S=$+w;u&&u.abort(),s=!0,J(()=>Lt(e,!0,"start")),u=ie(O=>{if(s){if(O>=S)return y(1,0),Lt(e,!0,"end"),c(),s=!1;if(O>=$){const N=p((O-$)/w);y(N,1-N)}}return s})}let d=!1;return{start(){d||(d=!0,xt(e),Q(r)?(r=r(),ge().then(l)):l())},invalidate(){d=!1},end(){s&&(c(),s=!1)}}}function Kt(e,t){const n={},r={},s={$$scope:1};let o=e.length;for(;o--;){const u=e[o],i=t[o];if(i){for(const c in u)c in i||(r[c]=1);for(const c in i)s[c]||(n[c]=i[c],s[c]=1);e[o]=i}else for(const c in u)s[c]=1}for(const u in r)u in n||(n[u]=void 0);return n}function Gt(e){return typeof e=="object"&&e!==null?e:{}}function D(e){e&&e.c()}function R(e,t,n,r){const{fragment:s,after_update:o}=e.$$;s&&s.m(t,n),r||J(()=>{const u=e.$$.on_mount.map(Mt).filter(Q);e.$$.on_destroy?e.$$.on_destroy.push(...u):z(u),e.$$.on_mount=[]}),o.forEach(J)}function P(e,t){const n=e.$$;n.fragment!==null&&(z(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function $e(e,t){e.$$.dirty[0]===-1&&(W.push(e),Vt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function F(e,t,n,r,s,o,u,i=[-1]){const c=G;K(e);const l=e.$$={fragment:null,ctx:[],props:o,update:g,not_equal:s,bound:kt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:kt(),dirty:i,skip_bound:!1,root:t.target||c.$$.root};u&&u(l.root);let d=!1;if(l.ctx=n?n(e,t.props||{},(h,w,...p)=>{const y=p.length?p[0]:w;return l.ctx&&s(l.ctx[h],l.ctx[h]=y)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](y),d&&$e(e,h)),w}):[],l.update(),d=!0,z(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const h=ue(t.target);l.fragment&&l.fragment.l(h),h.forEach(A)}else l.fragment&&l.fragment.c();t.intro&&L(e.$$.fragment),R(e,t.target,t.anchor,t.customElement),Wt()}K(c)}class X{$destroy(){P(this,1),this.$destroy=g}$on(t,n){if(!Q(n))return g;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(t){this.$$set&&!ne(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ht(e){if(!e)throw Error("Parameter args is required");if(!e.component==!e.asyncComponent)throw Error("One and only one of component and asyncComponent is required");if(e.component&&(e.asyncComponent=()=>Promise.resolve(e.component)),typeof e.asyncComponent!="function")throw Error("Parameter asyncComponent must be a function");if(e.conditions){Array.isArray(e.conditions)||(e.conditions=[e.conditions]);for(let n=0;n<e.conditions.length;n++)if(!e.conditions[n]||typeof e.conditions[n]!="function")throw Error("Invalid parameter conditions["+n+"]")}return e.loadingComponent&&(e.asyncComponent.loading=e.loadingComponent,e.asyncComponent.loadingParams=e.loadingParams||void 0),{component:e.asyncComponent,userData:e.userData,conditions:e.conditions&&e.conditions.length?e.conditions:void 0,props:e.props&&Object.keys(e.props).length?e.props:{},_sveltesparouter:!0}}const B=[];function Jt(e,t){return{subscribe:vt(e,t).subscribe}}function vt(e,t=g){let n;const r=new Set;function s(i){if(I(e,i)&&(e=i,n)){const c=!B.length;for(const l of r)l[1](),B.push(l,e);if(c){for(let l=0;l<B.length;l+=2)B[l][0](B[l+1]);B.length=0}}}function o(i){s(i(e))}function u(i,c=g){const l=[i,c];return r.add(l),r.size===1&&(n=t(s)||g),i(e),()=>{r.delete(l),r.size===0&&(n(),n=null)}}return{set:s,update:o,subscribe:u}}function Qt(e,t,n){const r=!Array.isArray(e),s=r?[e]:e,o=t.length<2;return Jt(n,u=>{let i=!1;const c=[];let l=0,d=g;const h=()=>{if(l)return;d();const p=t(r?c[0]:c,u);o?u(p):d=Q(p)?p:g},w=s.map((p,y)=>Ft(p,E=>{c[y]=E,l&=~(1<<y),i&&h()},()=>{l|=1<<y}));return i=!0,h(),function(){z(w),d()}})}function Zt(e,t){if(e instanceof RegExp)return{keys:!1,pattern:e};var n,r,s,o,u=[],i="",c=e.split("/");for(c[0]||c.shift();s=c.shift();)n=s[0],n==="*"?(u.push("wild"),i+="/(.*)"):n===":"?(r=s.indexOf("?",1),o=s.indexOf(".",1),u.push(s.substring(1,~r?r:~o?o:s.length)),i+=!!~r&&!~o?"(?:/([^/]+?))?":"/([^/]+?)",~o&&(i+=(~r?"?":"")+"\\"+s.substring(o))):i+="/"+s;return{keys:u,pattern:new RegExp("^"+i+(t?"(?=$|/)":"/?$"),"i")}}function ve(e){let t,n,r;const s=[e[2]];var o=e[0];function u(i){let c={};for(let l=0;l<s.length;l+=1)c=Tt(c,s[l]);return{props:c}}return o&&(t=st(o,u()),t.$on("routeEvent",e[7])),{c(){t&&D(t.$$.fragment),n=wt()},m(i,c){t&&R(t,i,c),j(i,n,c),r=!0},p(i,c){const l=c&4?Kt(s,[Gt(i[2])]):{};if(o!==(o=i[0])){if(t){ut();const d=t;q(d.$$.fragment,1,0,()=>{P(d,1)}),at()}o?(t=st(o,u()),t.$on("routeEvent",i[7]),D(t.$$.fragment),L(t.$$.fragment,1),R(t,n.parentNode,n)):t=null}else o&&t.$set(l)},i(i){r||(t&&L(t.$$.fragment,i),r=!0)},o(i){t&&q(t.$$.fragment,i),r=!1},d(i){i&&A(n),t&&P(t,i)}}}function ke(e){let t,n,r;const s=[{params:e[1]},e[2]];var o=e[0];function u(i){let c={};for(let l=0;l<s.length;l+=1)c=Tt(c,s[l]);return{props:c}}return o&&(t=st(o,u()),t.$on("routeEvent",e[6])),{c(){t&&D(t.$$.fragment),n=wt()},m(i,c){t&&R(t,i,c),j(i,n,c),r=!0},p(i,c){const l=c&6?Kt(s,[c&2&&{params:i[1]},c&4&&Gt(i[2])]):{};if(o!==(o=i[0])){if(t){ut();const d=t;q(d.$$.fragment,1,0,()=>{P(d,1)}),at()}o?(t=st(o,u()),t.$on("routeEvent",i[6]),D(t.$$.fragment),L(t.$$.fragment,1),R(t,n.parentNode,n)):t=null}else o&&t.$set(l)},i(i){r||(t&&L(t.$$.fragment,i),r=!0)},o(i){t&&q(t.$$.fragment,i),r=!1},d(i){i&&A(n),t&&P(t,i)}}}function Ee(e){let t,n,r,s;const o=[ke,ve],u=[];function i(c,l){return c[1]?0:1}return t=i(e),n=u[t]=o[t](e),{c(){n.c(),r=wt()},m(c,l){u[t].m(c,l),j(c,r,l),s=!0},p(c,[l]){let d=t;t=i(c),t===d?u[t].p(c,l):(ut(),q(u[d],1,1,()=>{u[d]=null}),at(),n=u[t],n?n.p(c,l):(n=u[t]=o[t](c),n.c()),L(n,1),n.m(r.parentNode,r))},i(c){s||(L(n),s=!0)},o(c){q(n),s=!1},d(c){u[t].d(c),c&&A(r)}}}function Ot(){const e=window.location.href.indexOf("#/");let t=e>-1?window.location.href.substr(e+1):"/";const n=t.indexOf("?");let r="";return n>-1&&(r=t.substr(n+1),t=t.substr(0,n)),{location:t,querystring:r}}const ft=Jt(null,function(t){t(Ot());const n=()=>{t(Ot())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}}),rn=Qt(ft,e=>e.location);Qt(ft,e=>e.querystring);const jt=vt(void 0);async function xe(e){if(!e||e.length<1||e.charAt(0)!="/"&&e.indexOf("#/")!==0)throw Error("Invalid parameter location");await lt(),history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=(e.charAt(0)=="#"?"":"#")+e}async function Ce(){await lt(),window.history.back()}async function Ae(e){if(!e||e.length<1||e.charAt(0)!="/"&&e.indexOf("#/")!==0)throw Error("Invalid parameter location");await lt();const t=(e.charAt(0)=="#"?"":"#")+e;try{const n={...history.state};delete n.__svelte_spa_router_scrollX,delete n.__svelte_spa_router_scrollY,window.history.replaceState(n,void 0,t)}catch(n){console.warn("Caught exception while replacing the current page. If you're running this in the Svelte REPL, please note that the `replace` method might not work in this environment.")}window.dispatchEvent(new Event("hashchange"))}function _t(e,t){if(t=Nt(t),!e||!e.tagName||e.tagName.toLowerCase()!="a")throw Error('Action "link" can only be used with <a> tags');return qt(e,t),{update(n){n=Nt(n),qt(e,n)}}}function Se(e){e?window.scrollTo(e.__svelte_spa_router_scrollX,e.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function qt(e,t){let n=t.href||e.getAttribute("href");if(n&&n.charAt(0)=="/")n="#"+n;else if(!n||n.length<2||n.slice(0,2)!="#/")throw Error('Invalid value for "href" attribute: '+n);e.setAttribute("href",n),e.addEventListener("click",r=>{r.preventDefault(),t.disabled||Le(r.currentTarget.getAttribute("href"))})}function Nt(e){return e&&typeof e=="string"?{href:e}:e||{}}function Le(e){history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=e}function Oe(e,t,n){let{routes:r={}}=t,{prefix:s=""}=t,{restoreScrollState:o=!1}=t;class u{constructor(f,a){if(!a||typeof a!="function"&&(typeof a!="object"||a._sveltesparouter!==!0))throw Error("Invalid component object");if(!f||typeof f=="string"&&(f.length<1||f.charAt(0)!="/"&&f.charAt(0)!="*")||typeof f=="object"&&!(f instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:v,keys:x}=Zt(f);this.path=f,typeof a=="object"&&a._sveltesparouter===!0?(this.component=a.component,this.conditions=a.conditions||[],this.userData=a.userData,this.props=a.props||{}):(this.component=()=>Promise.resolve(a),this.conditions=[],this.props={}),this._pattern=v,this._keys=x}match(f){if(s){if(typeof s=="string")if(f.startsWith(s))f=f.substr(s.length)||"/";else return null;else if(s instanceof RegExp){const T=f.match(s);if(T&&T[0])f=f.substr(T[0].length)||"/";else return null}}const a=this._pattern.exec(f);if(a===null)return null;if(this._keys===!1)return a;const v={};let x=0;for(;x<this._keys.length;){try{v[this._keys[x]]=decodeURIComponent(a[x+1]||"")||null}catch(T){v[this._keys[x]]=null}x++}return v}async checkConditions(f){for(let a=0;a<this.conditions.length;a++)if(!await this.conditions[a](f))return!1;return!0}}const i=[];r instanceof Map?r.forEach((_,f)=>{i.push(new u(f,_))}):Object.keys(r).forEach(_=>{i.push(new u(_,r[_]))});let c=null,l=null,d={};const h=me();async function w(_,f){await lt(),h(_,f)}let p=null,y=null;o&&(y=_=>{_.state&&(_.state.__svelte_spa_router_scrollY||_.state.__svelte_spa_router_scrollX)?p=_.state:p=null},window.addEventListener("popstate",y),pe(()=>{Se(p)}));let E=null,$=null;const S=ft.subscribe(async _=>{E=_;let f=0;for(;f<i.length;){const a=i[f].match(_.location);if(!a){f++;continue}const v={route:i[f].path,location:_.location,querystring:_.querystring,userData:i[f].userData,params:a&&typeof a=="object"&&Object.keys(a).length?a:null};if(!await i[f].checkConditions(v)){n(0,c=null),$=null,w("conditionsFailed",v);return}w("routeLoading",Object.assign({},v));const x=i[f].component;if($!=x){x.loading?(n(0,c=x.loading),$=x,n(1,l=x.loadingParams),n(2,d={}),w("routeLoaded",Object.assign({},v,{component:c,name:c.name,params:l}))):(n(0,c=null),$=null);const T=await x();if(_!=E)return;n(0,c=T&&T.default||T),$=x}a&&typeof a=="object"&&Object.keys(a).length?n(1,l=a):n(1,l=null),n(2,d=i[f].props),w("routeLoaded",Object.assign({},v,{component:c,name:c.name,params:l})).then(()=>{jt.set(l)});return}n(0,c=null),$=null,jt.set(void 0)});Bt(()=>{S(),y&&window.removeEventListener("popstate",y)});function O(_){Ct.call(this,e,_)}function N(_){Ct.call(this,e,_)}return e.$$set=_=>{"routes"in _&&n(3,r=_.routes),"prefix"in _&&n(4,s=_.prefix),"restoreScrollState"in _&&n(5,o=_.restoreScrollState)},e.$$.update=()=>{e.$$.dirty&32&&(history.scrollRestoration=o?"manual":"auto")},[c,l,d,r,s,o,O,N]}class je extends X{constructor(t){super(),F(this,t,Oe,Ee,I,{routes:3,prefix:4,restoreScrollState:5})}}const qe="modulepreload",Ne=function(e,t){return new URL(e,t).href},Rt={},pt=function(t,n,r){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=Ne(o,r),o in Rt)return;Rt[o]=!0;const u=o.endsWith(".css"),i=u?'[rel="stylesheet"]':"";if(!!r)for(let d=s.length-1;d>=0;d--){const h=s[d];if(h.href===o&&(!u||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${i}`))return;const l=document.createElement("link");if(l.rel=u?"stylesheet":qe,u||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),u)return new Promise((d,h)=>{l.addEventListener("load",d),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},ct=vt(1);function Re(e){let t,n,r,s,o,u,i;return{c(){t=b("h2"),n=bt(e[0]),r=C(),s=b("section"),o=b("button"),o.textContent="+"},m(c,l){j(c,t,l),m(t,n),j(c,r,l),j(c,s,l),m(s,o),u||(i=M(o,"click",e[1]),u=!0)},p(c,[l]){l&1&&ae(n,c[0])},i:g,o:g,d(c){c&&A(t),c&&A(r),c&&A(s),u=!1,i()}}}function Pe(e,t,n){let r;const s=ct.subscribe(u=>n(0,r=u));return Bt(()=>{s()}),[r,()=>n(0,r+=1)]}class De extends X{constructor(t){super(),F(this,t,Pe,Re,I,{})}}function Ie(e){let t,n,r,s;return{c(){t=b("section"),n=b("button"),n.textContent="-",k(n,"type","button")},m(o,u){j(o,t,u),m(t,n),r||(s=M(n,"click",e[1]),r=!0)},p:g,i:g,o:g,d(o){o&&A(t),r=!1,s()}}}function Te(e,t,n){let r;return re(e,ct,o=>n(0,r=o)),[r,()=>se(ct,r-=1,r)]}class Me extends X{constructor(t){super(),F(this,t,Te,Ie,I,{})}}function Fe(e){let t,n,r,s;return{c(){t=b("section"),n=b("button"),n.textContent="reset",k(n,"type","button")},m(o,u){j(o,t,u),m(t,n),r||(s=M(n,"click",e[0]),r=!0)},p:g,i:g,o:g,d(o){o&&A(t),r=!1,s()}}}function Xe(e){return[()=>{ct.set(0)}]}class Ye extends X{constructor(t){super(),F(this,t,Xe,Fe,I,{})}}function ze(e,{delay:t=0,duration:n=400,easing:r=It}={}){const s=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:r,css:o=>`opacity: ${o*s}`}}const He=""+new URL("svelte.a39f39b7.svg",import.meta.url).href;function Pt(e){let t,n;return t=new De({}),{c(){D(t.$$.fragment)},m(r,s){R(t,r,s),n=!0},i(r){n||(L(t.$$.fragment,r),n=!0)},o(r){q(t.$$.fragment,r),n=!1},d(r){P(t,r)}}}function Be(e){let t,n,r,s,o,u,i,c,l,d,h,w,p,y,E,$,S,O,N,_,f,a=e[0]&&Pt();return E=new Me({}),S=new Ye({}),{c(){t=b("div"),n=b("h2"),n.textContent="Main",r=C(),s=b("img"),u=C(),i=b("img"),l=C(),d=b("br"),h=C(),w=b("button"),w.textContent="Toggle",p=C(),a&&a.c(),y=C(),D(E.$$.fragment),$=C(),D(S.$$.fragment),k(n,"class","svelte-p2jgaz"),Et(s.src,o=He)||k(s,"src",o),k(s,"alt",""),Et(i.src,c="./vite.svg")||k(i,"src",c),k(i,"alt","")},m(v,x){j(v,t,x),m(t,n),m(t,r),m(t,s),m(t,u),m(t,i),m(t,l),m(t,d),m(t,h),m(t,w),m(t,p),a&&a.m(t,null),m(t,y),R(E,t,null),m(t,$),R(S,t,null),N=!0,_||(f=M(w,"click",e[1]),_=!0)},p(v,[x]){v[0]?a?x&1&&L(a,1):(a=Pt(),a.c(),L(a,1),a.m(t,y)):a&&(ut(),q(a,1,1,()=>{a=null}),at())},i(v){N||(L(a),L(E.$$.fragment,v),L(S.$$.fragment,v),O||J(()=>{O=we(t,ze,{duration:400}),O.start()}),N=!0)},o(v){q(a),q(E.$$.fragment,v),q(S.$$.fragment,v),N=!1},d(v){v&&A(t),a&&a.d(),P(E),P(S),_=!1,f()}}}function Ue(e,t,n){let r=!0;return[r,()=>n(0,r=!r)]}class Ve extends X{constructor(t){super(),F(this,t,Ue,Be,I,{})}}const We={"/":Ve,"/sub":ht({asyncComponent:()=>pt(()=>import("./SubPage.da6f8d6d.js"),["./SubPage.da6f8d6d.js","./SubPage.a77ff927.css"],import.meta.url)}),"/sub/:id":ht({asyncComponent:()=>pt(()=>import("./SubDesc.c67f6da6.js"),["./SubDesc.c67f6da6.js","./SubDesc.7cf6d1e4.css"],import.meta.url)}),"*":ht({asyncComponent:()=>pt(()=>import("./NotFound.1d031952.js"),[],import.meta.url)})},rt=[];let te;function ee(e){const t=e.pattern.test(te);Dt(e,e.className,t),Dt(e,e.inactiveClassName,!t)}function Dt(e,t,n){(t||"").split(" ").forEach(r=>{!r||(e.node.classList.remove(r),n&&e.node.classList.add(r))})}ft.subscribe(e=>{te=e.location+(e.querystring?"?"+e.querystring:""),rt.map(ee)});function mt(e,t){if(t&&(typeof t=="string"||typeof t=="object"&&t instanceof RegExp)?t={path:t}:t=t||{},!t.path&&e.hasAttribute("href")&&(t.path=e.getAttribute("href"),t.path&&t.path.length>1&&t.path.charAt(0)=="#"&&(t.path=t.path.substring(1))),t.className||(t.className="active"),!t.path||typeof t.path=="string"&&(t.path.length<1||t.path.charAt(0)!="/"&&t.path.charAt(0)!="*"))throw Error('Invalid value for "path" argument');const{pattern:n}=typeof t.path=="string"?Zt(t.path):{pattern:t.path},r={node:e,className:t.className,inactiveClassName:t.inactiveClassName,pattern:n};return rt.push(r),ee(r),{destroy(){rt.splice(rt.indexOf(r),1)}}}function Ke(e){let t,n,r,s,o,u,i,c,l,d,h,w,p,y,E,$,S,O,N,_;return{c(){t=b("header"),n=b("h2"),n.textContent="Header",r=C(),s=b("div"),o=b("a"),o.textContent="Main",u=C(),i=b("a"),i.textContent="SubPage",c=C(),l=b("a"),l.textContent="SubDesc/1",d=C(),h=b("button"),h.textContent="SubDesc/12",w=C(),p=b("div"),y=b("button"),y.textContent="\uB4A4\uB85C \uAC00\uAE30",E=C(),$=b("button"),$.textContent="\uC55E\uC73C\uB85C \uAC00\uAE30",S=C(),O=b("button"),O.textContent="/sub/14",k(n,"class","svelte-yq8wcs"),k(o,"href","/"),k(o,"class","svelte-yq8wcs"),k(i,"href","/sub"),k(i,"class","svelte-yq8wcs"),k(l,"href","/sub/1"),k(l,"class","svelte-yq8wcs"),k(h,"type","button"),k(h,"class","svelte-yq8wcs"),k(s,"class","inner_head svelte-yq8wcs"),k(t,"class","svelte-yq8wcs"),k(y,"class","svelte-yq8wcs"),k($,"class","svelte-yq8wcs"),k(O,"class","svelte-yq8wcs"),k(p,"class","wrap_btn svelte-yq8wcs")},m(f,a){j(f,t,a),m(t,n),m(t,r),m(t,s),m(s,o),m(s,u),m(s,i),m(s,c),m(s,l),m(s,d),m(s,h),j(f,w,a),j(f,p,a),m(p,y),m(p,E),m(p,$),m(p,S),m(p,O),N||(_=[H(_t.call(null,o)),H(mt.call(null,o)),H(_t.call(null,i)),H(mt.call(null,i)),H(_t.call(null,l)),H(mt.call(null,l,"/sub/*")),M(h,"click",e[0]),M(y,"click",e[1]),M($,"click",e[2]),M(O,"click",e[3])],N=!0)},p:g,i:g,o:g,d(f){f&&A(t),f&&A(w),f&&A(p),N=!1,z(_)}}}function Ge(e){return[()=>Ae("/sub/12"),()=>Ce(),()=>history.go(1),()=>xe("/sub/14")]}class Je extends X{constructor(t){super(),F(this,t,Ge,Ke,I,{})}}function Qe(e){let t;return{c(){t=b("footer"),t.innerHTML="<h2>Footer!</h2>",k(t,"class","svelte-wqbaj8")},m(n,r){j(n,t,r)},p:g,i:g,o:g,d(n){n&&A(t)}}}class Ze extends X{constructor(t){super(),F(this,t,null,Qe,I,{})}}function tn(e){let t,n,r,s,o,u;return t=new Je({}),r=new je({props:{routes:We}}),o=new Ze({}),{c(){D(t.$$.fragment),n=C(),D(r.$$.fragment),s=C(),D(o.$$.fragment)},m(i,c){R(t,i,c),j(i,n,c),R(r,i,c),j(i,s,c),R(o,i,c),u=!0},p:g,i(i){u||(L(t.$$.fragment,i),L(r.$$.fragment,i),L(o.$$.fragment,i),u=!0)},o(i){q(t.$$.fragment,i),q(r.$$.fragment,i),q(o.$$.fragment,i),u=!1},d(i){P(t,i),i&&A(n),P(r,i),i&&A(s),P(o,i)}}}class en extends X{constructor(t){super(),F(this,t,null,tn,I,{})}}new en({target:document.getElementById("app")});export{X as S,nn as __vite_legacy_guard,j as a,J as b,we as c,A as d,b as e,ze as f,C as g,k as h,F as i,m as j,ae as k,re as l,rn as m,g as n,I as s,bt as t};
