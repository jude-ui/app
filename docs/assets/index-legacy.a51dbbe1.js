System.register([],(function(t,e){"use strict";var n=document.createElement("style");return n.textContent='@charset "UTF-8";body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,textarea,p,blockquote,th,td,input,select,textarea,button{margin:0;padding:0}fieldset,img{border:0 none}dl,ul,ol,menu,li{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}input,select,textarea,button{vertical-align:middle}input::-ms-clear{display:none}button{border:0 none;background-color:transparent;cursor:pointer}body{background:#fff}body,th,td,input,select,textarea,button{font-size:12px;line-height:1.5;font-family:Apple SD Gothic Neo,Malgun Gothic,\\b9d1\\c740  \\ace0\\b515,sans-serif;color:#333}a{color:#333;text-decoration:none}a:active,a:hover{text-decoration:underline}a:active{background-color:transparent}address,caption,cite,code,dfn,em,var{font-style:normal;font-weight:400}main{display:block}#directLink{overflow:hidden;position:absolute;left:-9999px;width:0;height:1px;margin:0;padding:0}.ir_pm{display:block;overflow:hidden;font-size:0px;line-height:0;text-indent:-9999px}.ir_wa{display:block;overflow:hidden;position:relative;z-index:-1;width:100%;height:100%}.ir_caption{overflow:hidden;width:1px;font-size:1px;line-height:0;text-indent:-9999px}.screen_out{overflow:hidden;position:absolute;width:0;height:0;line-height:0;text-indent:-9999px}.show{display:block}.hide{display:none}.txt_bar{font-size:12px;color:#b6b6b6}#app{padding:20px}h2.svelte-1ndl4jp{font-size:20px;color:brown}header.svelte-yq8wcs.svelte-yq8wcs{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-bottom:10px}header.svelte-yq8wcs .inner_head.svelte-yq8wcs{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-column-gap:8px;-moz-column-gap:8px;column-gap:8px}header.svelte-yq8wcs .inner_head a.svelte-yq8wcs,header.svelte-yq8wcs .inner_head button.svelte-yq8wcs{padding:4px 10px;background:#ffcd00;color:#000;border-radius:4px}header.svelte-yq8wcs h2.svelte-yq8wcs{font-size:20px;color:#4169e1}header.svelte-yq8wcs .inner_head.svelte-yq8wcs .active{text-decoration:underline;background:blue;color:#fff}.wrap_btn.svelte-yq8wcs.svelte-yq8wcs{padding-bottom:30px}.wrap_btn.svelte-yq8wcs button.svelte-yq8wcs{padding:5px 10px;background:#e7e7e7;border-radius:4px}.wrap_btn.svelte-yq8wcs button.svelte-yq8wcs:hover{background:#ccc}footer.svelte-wqbaj8{padding-top:30px}\n',document.head.appendChild(n),{execute:function(){function n(){}t({a:_,b:J,c:lt,d:x,e:k,f:Dt,g:q,h:A,i:mt,j:w,k:function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)},l:function(t,e,n){t.$$.on_destroy.push(d(e,n))},n:n,s:l,t:E});const o=t=>t;function r(t,e){for(const n in e)t[n]=e[n];return t}function s(t){return t()}function i(){return Object.create(null)}function c(t){t.forEach(s)}function a(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let u;function f(t,e){return u||(u=document.createElement("a")),u.href=e,t===u.href}function d(t,...e){if(null==t)return n;const o=t.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}function p(t){return t&&a(t.destroy)?t.destroy:n}const h="undefined"!=typeof window;let m=h?()=>window.performance.now():()=>Date.now(),g=h?t=>requestAnimationFrame(t):n;const y=new Set;function b(t){y.forEach((e=>{e.c(t)||(y.delete(e),e.f())})),0!==y.size&&g(b)}function w(t,e){t.appendChild(e)}function v(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function $(t){const e=k("style");return function(t,e){w(t.head||t,e),e.sheet}(v(t),e),e.sheet}function _(t,e,n){t.insertBefore(e,n||null)}function x(t){t.parentNode&&t.parentNode.removeChild(t)}function k(t){return document.createElement(t)}function E(t){return document.createTextNode(t)}function q(){return E(" ")}function C(){return E("")}function j(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function A(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function S(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function N(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,o,e),r}function O(t,e){return new t(e)}const L=new Map;let P,D=0;function z(t,e,n,o,r,s,i,c=0){const a=16.666/o;let l="{\n";for(let g=0;g<=1;g+=a){const t=e+(n-e)*s(g);l+=100*g+`%{${i(t,1-t)}}\n`}const u=l+`100% {${i(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${c}`,d=v(t),{stylesheet:p,rules:h}=L.get(d)||function(t,e){const n={stylesheet:$(e),rules:{}};return L.set(t,n),n}(d,t);h[f]||(h[f]=!0,p.insertRule(`@keyframes ${f} ${u}`,p.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${o}ms linear ${r}ms 1 both`,D+=1,f}function R(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),D-=r,D||g((()=>{D||(L.forEach((t=>{const{ownerNode:e}=t.stylesheet;e&&x(e)})),L.clear())})))}function I(t){P=t}function M(){if(!P)throw new Error("Function called outside component initialization");return P}function T(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const X=[],Y=[],F=[],U=[],B=Promise.resolve();let G=!1;function H(){G||(G=!0,B.then(Z))}function W(){return H(),B}function J(t){F.push(t)}const K=new Set;let Q,V=0;function Z(){const t=P;do{for(;V<X.length;){const t=X[V];V++,I(t),tt(t.$$)}for(I(null),X.length=0,V=0;Y.length;)Y.pop()();for(let t=0;t<F.length;t+=1){const e=F[t];K.has(e)||(K.add(e),e())}F.length=0}while(X.length);for(;U.length;)U.pop()();G=!1,K.clear(),I(t)}function tt(t){if(null!==t.fragment){t.update(),c(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(J)}}function et(t,e,n){t.dispatchEvent(N(`${e?"intro":"outro"}${n}`))}const nt=new Set;let ot;function rt(){ot={r:0,c:[],p:ot}}function st(){ot.r||c(ot.c),ot=ot.p}function it(t,e){t&&t.i&&(nt.delete(t),t.i(e))}function ct(t,e,n,o){if(t&&t.o){if(nt.has(t))return;nt.add(t),ot.c.push((()=>{nt.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}const at={duration:0};function lt(t,e,r){let s,i,c=e(t,r),l=!1,u=0;function f(){s&&R(t,s)}function d(){const{delay:e=0,duration:r=300,easing:a=o,tick:d=n,css:p}=c||at;p&&(s=z(t,0,1,r,e,a,p,u++)),d(0,1);const h=m()+e,w=h+r;i&&i.abort(),l=!0,J((()=>et(t,!0,"start"))),i=function(t){let e;return 0===y.size&&g(b),{promise:new Promise((n=>{y.add(e={c:t,f:n})})),abort(){y.delete(e)}}}((e=>{if(l){if(e>=w)return d(1,0),et(t,!0,"end"),f(),l=!1;if(e>=h){const t=a((e-h)/r);d(t,1-t)}}return l}))}let p=!1;return{start(){p||(p=!0,R(t),a(c)?(c=c(),(Q||(Q=Promise.resolve(),Q.then((()=>{Q=null}))),Q).then(d)):d())},invalidate(){p=!1},end(){l&&(f(),l=!1)}}}function ut(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=e[s];if(c){for(const t in i)t in c||(o[t]=1);for(const t in c)r[t]||(n[t]=c[t],r[t]=1);t[s]=c}else for(const t in i)r[t]=1}for(const i in o)i in n||(n[i]=void 0);return n}function ft(t){return"object"==typeof t&&null!==t?t:{}}function dt(t){t&&t.c()}function pt(t,e,n,o){const{fragment:r,after_update:i}=t.$$;r&&r.m(e,n),o||J((()=>{const e=t.$$.on_mount.map(s).filter(a);t.$$.on_destroy?t.$$.on_destroy.push(...e):c(e),t.$$.on_mount=[]})),i.forEach(J)}function ht(t,e){const n=t.$$;null!==n.fragment&&(c(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function mt(t,e,o,r,s,a,l,u=[-1]){const f=P;I(t);const d=t.$$={fragment:null,ctx:[],props:a,update:n,not_equal:s,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:i(),dirty:u,skip_bound:!1,root:e.target||f.$$.root};l&&l(d.root);let p=!1;if(d.ctx=o?o(t,e.props||{},((e,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&s(d.ctx[e],d.ctx[e]=r)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](r),p&&function(t,e){-1===t.$$.dirty[0]&&(X.push(t),H(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n})):[],d.update(),p=!0,c(d.before_update),d.fragment=!!r&&r(d.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);d.fragment&&d.fragment.l(t),t.forEach(x)}else d.fragment&&d.fragment.c();e.intro&&it(t.$$.fragment),pt(t,e.target,e.anchor,e.customElement),Z()}I(f)}class gt{$destroy(){ht(this,1),this.$destroy=n}$on(t,e){if(!a(e))return n;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function yt(t){if(!t)throw Error("Parameter args is required");if(!t.component==!t.asyncComponent)throw Error("One and only one of component and asyncComponent is required");if(t.component&&(t.asyncComponent=()=>Promise.resolve(t.component)),"function"!=typeof t.asyncComponent)throw Error("Parameter asyncComponent must be a function");if(t.conditions){Array.isArray(t.conditions)||(t.conditions=[t.conditions]);for(let e=0;e<t.conditions.length;e++)if(!t.conditions[e]||"function"!=typeof t.conditions[e])throw Error("Invalid parameter conditions["+e+"]")}return t.loadingComponent&&(t.asyncComponent.loading=t.loadingComponent,t.asyncComponent.loadingParams=t.loadingParams||void 0),{component:t.asyncComponent,userData:t.userData,conditions:t.conditions&&t.conditions.length?t.conditions:void 0,props:t.props&&Object.keys(t.props).length?t.props:{},_sveltesparouter:!0}}t("S",gt);const bt=[];function wt(t,e){return{subscribe:vt(t,e).subscribe}}function vt(t,e=n){let o;const r=new Set;function s(e){if(l(t,e)&&(t=e,o)){const e=!bt.length;for(const n of r)n[1](),bt.push(n,t);if(e){for(let t=0;t<bt.length;t+=2)bt[t][0](bt[t+1]);bt.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(i,c=n){const a=[i,c];return r.add(a),1===r.size&&(o=e(s)||n),i(t),()=>{r.delete(a),0===r.size&&(o(),o=null)}}}}function $t(t,e,o){const r=!Array.isArray(t),s=r?[t]:t,i=e.length<2;return wt(o,(t=>{let o=!1;const l=[];let u=0,f=n;const p=()=>{if(u)return;f();const o=e(r?l[0]:l,t);i?t(o):f=a(o)?o:n},h=s.map(((t,e)=>d(t,(t=>{l[e]=t,u&=~(1<<e),o&&p()}),(()=>{u|=1<<e}))));return o=!0,p(),function(){c(h),f()}}))}function _t(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,o,r,s,i=[],c="",a=t.split("/");for(a[0]||a.shift();r=a.shift();)"*"===(n=r[0])?(i.push("wild"),c+="/(.*)"):":"===n?(o=r.indexOf("?",1),s=r.indexOf(".",1),i.push(r.substring(1,~o?o:~s?s:r.length)),c+=~o&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(c+=(~o?"?":"")+"\\"+r.substring(s))):c+="/"+r;return{keys:i,pattern:new RegExp("^"+c+(e?"(?=$|/)":"/?$"),"i")}}function xt(t){let e,n,o;const s=[t[2]];var i=t[0];function c(t){let e={};for(let n=0;n<s.length;n+=1)e=r(e,s[n]);return{props:e}}return i&&(e=O(i,c()),e.$on("routeEvent",t[7])),{c(){e&&dt(e.$$.fragment),n=C()},m(t,r){e&&pt(e,t,r),_(t,n,r),o=!0},p(t,o){const r=4&o?ut(s,[ft(t[2])]):{};if(i!==(i=t[0])){if(e){rt();const t=e;ct(t.$$.fragment,1,0,(()=>{ht(t,1)})),st()}i?(e=O(i,c()),e.$on("routeEvent",t[7]),dt(e.$$.fragment),it(e.$$.fragment,1),pt(e,n.parentNode,n)):e=null}else i&&e.$set(r)},i(t){o||(e&&it(e.$$.fragment,t),o=!0)},o(t){e&&ct(e.$$.fragment,t),o=!1},d(t){t&&x(n),e&&ht(e,t)}}}function kt(t){let e,n,o;const s=[{params:t[1]},t[2]];var i=t[0];function c(t){let e={};for(let n=0;n<s.length;n+=1)e=r(e,s[n]);return{props:e}}return i&&(e=O(i,c()),e.$on("routeEvent",t[6])),{c(){e&&dt(e.$$.fragment),n=C()},m(t,r){e&&pt(e,t,r),_(t,n,r),o=!0},p(t,o){const r=6&o?ut(s,[2&o&&{params:t[1]},4&o&&ft(t[2])]):{};if(i!==(i=t[0])){if(e){rt();const t=e;ct(t.$$.fragment,1,0,(()=>{ht(t,1)})),st()}i?(e=O(i,c()),e.$on("routeEvent",t[6]),dt(e.$$.fragment),it(e.$$.fragment,1),pt(e,n.parentNode,n)):e=null}else i&&e.$set(r)},i(t){o||(e&&it(e.$$.fragment,t),o=!0)},o(t){e&&ct(e.$$.fragment,t),o=!1},d(t){t&&x(n),e&&ht(e,t)}}}function Et(t){let e,n,o,r;const s=[kt,xt],i=[];function c(t,e){return t[1]?0:1}return e=c(t),n=i[e]=s[e](t),{c(){n.c(),o=C()},m(t,n){i[e].m(t,n),_(t,o,n),r=!0},p(t,[r]){let a=e;e=c(t),e===a?i[e].p(t,r):(rt(),ct(i[a],1,1,(()=>{i[a]=null})),st(),n=i[e],n?n.p(t,r):(n=i[e]=s[e](t),n.c()),it(n,1),n.m(o.parentNode,o))},i(t){r||(it(n),r=!0)},o(t){ct(n),r=!1},d(t){i[e].d(t),t&&x(o)}}}function qt(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let o="";return n>-1&&(o=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:o}}const Ct=wt(null,(function(t){t(qt());const e=()=>{t(qt())};return window.addEventListener("hashchange",e,!1),function(){window.removeEventListener("hashchange",e,!1)}}));t("m",$t(Ct,(t=>t.location))),$t(Ct,(t=>t.querystring));const jt=vt(void 0);function At(t,e){if(e=Nt(e),!t||!t.tagName||"a"!=t.tagName.toLowerCase())throw Error('Action "link" can only be used with <a> tags');return St(t,e),{update(e){e=Nt(e),St(t,e)}}}function St(t,e){let n=e.href||t.getAttribute("href");if(n&&"/"==n.charAt(0))n="#"+n;else if(!n||n.length<2||"#/"!=n.slice(0,2))throw Error('Invalid value for "href" attribute: '+n);t.setAttribute("href",n),t.addEventListener("click",(t=>{t.preventDefault(),e.disabled||function(t){history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=t}(t.currentTarget.getAttribute("href"))}))}function Nt(t){return t&&"string"==typeof t?{href:t}:t||{}}function Ot(t,e,n){let{routes:o={}}=e,{prefix:r=""}=e,{restoreScrollState:s=!1}=e;class i{constructor(t,e){if(!e||"function"!=typeof e&&("object"!=typeof e||!0!==e._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:n,keys:o}=_t(t);this.path=t,"object"==typeof e&&!0===e._sveltesparouter?(this.component=e.component,this.conditions=e.conditions||[],this.userData=e.userData,this.props=e.props||{}):(this.component=()=>Promise.resolve(e),this.conditions=[],this.props={}),this._pattern=n,this._keys=o}match(t){if(r)if("string"==typeof r){if(!t.startsWith(r))return null;t=t.substr(r.length)||"/"}else if(r instanceof RegExp){const e=t.match(r);if(!e||!e[0])return null;t=t.substr(e[0].length)||"/"}const e=this._pattern.exec(t);if(null===e)return null;if(!1===this._keys)return e;const n={};let o=0;for(;o<this._keys.length;){try{n[this._keys[o]]=decodeURIComponent(e[o+1]||"")||null}catch(s){n[this._keys[o]]=null}o++}return n}async checkConditions(t){for(let e=0;e<this.conditions.length;e++)if(!(await this.conditions[e](t)))return!1;return!0}}const c=[];o instanceof Map?o.forEach(((t,e)=>{c.push(new i(e,t))})):Object.keys(o).forEach((t=>{c.push(new i(t,o[t]))}));let a=null,l=null,u={};const f=function(){const t=M();return(e,n,{cancelable:o=!1}={})=>{const r=t.$$.callbacks[e];if(r){const s=N(e,n,{cancelable:o});return r.slice().forEach((e=>{e.call(t,s)})),!s.defaultPrevented}return!0}}();async function d(t,e){await W(),f(t,e)}let p=null,h=null;var m;s&&(h=t=>{p=t.state&&(t.state.__svelte_spa_router_scrollY||t.state.__svelte_spa_router_scrollX)?t.state:null},window.addEventListener("popstate",h),m=()=>{var t;(t=p)?window.scrollTo(t.__svelte_spa_router_scrollX,t.__svelte_spa_router_scrollY):window.scrollTo(0,0)},M().$$.after_update.push(m));let g=null,y=null;const b=Ct.subscribe((async t=>{g=t;let e=0;for(;e<c.length;){const o=c[e].match(t.location);if(!o){e++;continue}const r={route:c[e].path,location:t.location,querystring:t.querystring,userData:c[e].userData,params:o&&"object"==typeof o&&Object.keys(o).length?o:null};if(!(await c[e].checkConditions(r)))return n(0,a=null),y=null,void d("conditionsFailed",r);d("routeLoading",Object.assign({},r));const s=c[e].component;if(y!=s){s.loading?(n(0,a=s.loading),y=s,n(1,l=s.loadingParams),n(2,u={}),d("routeLoaded",Object.assign({},r,{component:a,name:a.name,params:l}))):(n(0,a=null),y=null);const e=await s();if(t!=g)return;n(0,a=e&&e.default||e),y=s}return o&&"object"==typeof o&&Object.keys(o).length?n(1,l=o):n(1,l=null),n(2,u=c[e].props),void d("routeLoaded",Object.assign({},r,{component:a,name:a.name,params:l})).then((()=>{jt.set(l)}))}n(0,a=null),y=null,jt.set(void 0)}));return function(t){M().$$.on_destroy.push(t)}((()=>{b(),h&&window.removeEventListener("popstate",h)})),t.$$set=t=>{"routes"in t&&n(3,o=t.routes),"prefix"in t&&n(4,r=t.prefix),"restoreScrollState"in t&&n(5,s=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=s?"manual":"auto")},[a,l,u,o,r,s,function(e){T.call(this,t,e)},function(e){T.call(this,t,e)}]}class Lt extends gt{constructor(t){super(),mt(this,t,Ot,Et,l,{routes:3,prefix:4,restoreScrollState:5})}}const Pt=function(t,e,n){return t()};function Dt(t,{delay:e=0,duration:n=400,easing:r=o}={}){const s=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:t=>"opacity: "+t*s}}const zt=""+new URL("svelte.a39f39b7.svg",e.meta.url).href;function Rt(t){let e,o,r,s,i,c,a,l,u,d,p;return{c(){e=k("div"),o=k("h2"),o.textContent="Main",r=q(),s=k("img"),c=q(),a=k("img"),u=q(),d=k("div"),d.textContent="test test",A(o,"class","svelte-1ndl4jp"),f(s.src,i=zt)||A(s,"src",i),A(s,"alt",""),f(a.src,l="./vite.svg")||A(a,"src","./vite.svg"),A(a,"alt",""),S(d,"display","none"),S(d,"overflow","hidden")},m(t,n){_(t,e,n),w(e,o),w(e,r),w(e,s),w(e,c),w(e,a),w(e,u),w(e,d)},p:n,i(t){p||J((()=>{p=lt(e,Dt,{duration:400}),p.start()}))},o:n,d(t){t&&x(e)}}}const It={"/":class extends gt{constructor(t){super(),mt(this,t,null,Rt,l,{})}},"/sub":yt({asyncComponent:()=>Pt((()=>e.import("./SubPage-legacy.3c843b18.js")),0,e.meta.url)}),"/sub/:id":yt({asyncComponent:()=>Pt((()=>e.import("./SubDesc-legacy.55d08f2b.js")),0,e.meta.url)}),"*":yt({asyncComponent:()=>Pt((()=>e.import("./NotFound-legacy.29292841.js")),0,e.meta.url)})},Mt=[];let Tt;function Xt(t){const e=t.pattern.test(Tt);Yt(t,t.className,e),Yt(t,t.inactiveClassName,!e)}function Yt(t,e,n){(e||"").split(" ").forEach((e=>{e&&(t.node.classList.remove(e),n&&t.node.classList.add(e))}))}function Ft(t,e){if(!(e=e&&("string"==typeof e||"object"==typeof e&&e instanceof RegExp)?{path:e}:e||{}).path&&t.hasAttribute("href")&&(e.path=t.getAttribute("href"),e.path&&e.path.length>1&&"#"==e.path.charAt(0)&&(e.path=e.path.substring(1))),e.className||(e.className="active"),!e.path||"string"==typeof e.path&&(e.path.length<1||"/"!=e.path.charAt(0)&&"*"!=e.path.charAt(0)))throw Error('Invalid value for "path" argument');const{pattern:n}="string"==typeof e.path?_t(e.path):{pattern:e.path},o={node:t,className:e.className,inactiveClassName:e.inactiveClassName,pattern:n};return Mt.push(o),Xt(o),{destroy(){Mt.splice(Mt.indexOf(o),1)}}}function Ut(t){let e,o,r,s,i,a,l,u,f,d,h,m,g,y,b,v,$,E,C,S;return{c(){e=k("header"),o=k("h2"),o.textContent="Header",r=q(),s=k("div"),i=k("a"),i.textContent="Main",a=q(),l=k("a"),l.textContent="SubPage",u=q(),f=k("a"),f.textContent="SubDesc/1",d=q(),h=k("button"),h.textContent="SubDesc/12",m=q(),g=k("div"),y=k("button"),y.textContent="뒤로 가기",b=q(),v=k("button"),v.textContent="앞으로 가기",$=q(),E=k("button"),E.textContent="/sub/14",A(o,"class","svelte-yq8wcs"),A(i,"href","/"),A(i,"class","svelte-yq8wcs"),A(l,"href","/sub"),A(l,"class","svelte-yq8wcs"),A(f,"href","/sub/1"),A(f,"class","svelte-yq8wcs"),A(h,"type","button"),A(h,"class","svelte-yq8wcs"),A(s,"class","inner_head svelte-yq8wcs"),A(e,"class","svelte-yq8wcs"),A(y,"class","svelte-yq8wcs"),A(v,"class","svelte-yq8wcs"),A(E,"class","svelte-yq8wcs"),A(g,"class","wrap_btn svelte-yq8wcs")},m(n,c){_(n,e,c),w(e,o),w(e,r),w(e,s),w(s,i),w(s,a),w(s,l),w(s,u),w(s,f),w(s,d),w(s,h),_(n,m,c),_(n,g,c),w(g,y),w(g,b),w(g,v),w(g,$),w(g,E),C||(S=[p(At.call(null,i)),p(Ft.call(null,i)),p(At.call(null,l)),p(Ft.call(null,l)),p(At.call(null,f)),p(Ft.call(null,f,"/sub/*")),j(h,"click",t[0]),j(y,"click",t[1]),j(v,"click",t[2]),j(E,"click",t[3])],C=!0)},p:n,i:n,o:n,d(t){t&&x(e),t&&x(m),t&&x(g),C=!1,c(S)}}}function Bt(t){return[()=>async function(t){if(!t||t.length<1||"/"!=t.charAt(0)&&0!==t.indexOf("#/"))throw Error("Invalid parameter location");await W();const e=("#"==t.charAt(0)?"":"#")+t;try{const t={...history.state};delete t.__svelte_spa_router_scrollX,delete t.__svelte_spa_router_scrollY,window.history.replaceState(t,void 0,e)}catch(n){console.warn("Caught exception while replacing the current page. If you're running this in the Svelte REPL, please note that the `replace` method might not work in this environment.")}window.dispatchEvent(new Event("hashchange"))}("/sub/12"),()=>async function(){await W(),window.history.back()}(),()=>history.go(1),()=>async function(t){if(!t||t.length<1||"/"!=t.charAt(0)&&0!==t.indexOf("#/"))throw Error("Invalid parameter location");await W(),history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=("#"==t.charAt(0)?"":"#")+t}("/sub/14")]}Ct.subscribe((t=>{Tt=t.location+(t.querystring?"?"+t.querystring:""),Mt.map(Xt)}));class Gt extends gt{constructor(t){super(),mt(this,t,Bt,Ut,l,{})}}function Ht(t){let e;return{c(){e=k("footer"),e.innerHTML="<h2>Footer!</h2>",A(e,"class","svelte-wqbaj8")},m(t,n){_(t,e,n)},p:n,i:n,o:n,d(t){t&&x(e)}}}class Wt extends gt{constructor(t){super(),mt(this,t,null,Ht,l,{})}}function Jt(t){let e,o,r,s,i,c;return e=new Gt({}),r=new Lt({props:{routes:It}}),i=new Wt({}),{c(){dt(e.$$.fragment),o=q(),dt(r.$$.fragment),s=q(),dt(i.$$.fragment)},m(t,n){pt(e,t,n),_(t,o,n),pt(r,t,n),_(t,s,n),pt(i,t,n),c=!0},p:n,i(t){c||(it(e.$$.fragment,t),it(r.$$.fragment,t),it(i.$$.fragment,t),c=!0)},o(t){ct(e.$$.fragment,t),ct(r.$$.fragment,t),ct(i.$$.fragment,t),c=!1},d(t){ht(e,t),t&&x(o),ht(r,t),t&&x(s),ht(i,t)}}}new class extends gt{constructor(t){super(),mt(this,t,null,Jt,l,{})}}({target:document.getElementById("app")})}}}));
