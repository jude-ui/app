System.register([],(function(t,e){"use strict";var n=document.createElement("style");return n.textContent='@charset "UTF-8";body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,textarea,p,blockquote,th,td,input,select,textarea,button{margin:0;padding:0}fieldset,img{border:0 none}dl,ul,ol,menu,li{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}input,select,textarea,button{vertical-align:middle}input::-ms-clear{display:none}button{border:0 none;background-color:transparent;cursor:pointer}body{background:#fff}body,th,td,input,select,textarea,button{font-size:12px;line-height:1.5;font-family:Apple SD Gothic Neo,Malgun Gothic,\\b9d1\\c740  \\ace0\\b515,sans-serif;color:#333}a{color:#333;text-decoration:none}a:active,a:hover{text-decoration:underline}a:active{background-color:transparent}address,caption,cite,code,dfn,em,var{font-style:normal;font-weight:400}main{display:block}#directLink{overflow:hidden;position:absolute;left:-9999px;width:0;height:1px;margin:0;padding:0}.ir_pm{display:block;overflow:hidden;font-size:0px;line-height:0;text-indent:-9999px}.ir_wa{display:block;overflow:hidden;position:relative;z-index:-1;width:100%;height:100%}.ir_caption{overflow:hidden;width:1px;font-size:1px;line-height:0;text-indent:-9999px}.screen_out{overflow:hidden;position:absolute;width:0;height:0;line-height:0;text-indent:-9999px}.show{display:block}.hide{display:none}.txt_bar{font-size:12px;color:#b6b6b6}#app{padding:20px}h2.svelte-1ndl4jp{font-size:20px;color:brown}header.svelte-yq8wcs.svelte-yq8wcs{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-bottom:10px}header.svelte-yq8wcs .inner_head.svelte-yq8wcs{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-column-gap:8px;-moz-column-gap:8px;column-gap:8px}header.svelte-yq8wcs .inner_head a.svelte-yq8wcs,header.svelte-yq8wcs .inner_head button.svelte-yq8wcs{padding:4px 10px;background:#ffcd00;color:#000;border-radius:4px}header.svelte-yq8wcs h2.svelte-yq8wcs{font-size:20px;color:#4169e1}header.svelte-yq8wcs .inner_head.svelte-yq8wcs .active{text-decoration:underline;background:blue;color:#fff}.wrap_btn.svelte-yq8wcs.svelte-yq8wcs{padding-bottom:30px}.wrap_btn.svelte-yq8wcs button.svelte-yq8wcs{padding:5px 10px;background:#e7e7e7;border-radius:4px}.wrap_btn.svelte-yq8wcs button.svelte-yq8wcs:hover{background:#ccc}footer.svelte-wqbaj8{padding-top:30px}\n',document.head.appendChild(n),{execute:function(){function n(){}t({a:v,b:G,c:it,d:$,e:_,f:Ot,g:k,h:C,i:dt,j:y,k:function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)},l:function(t,e,n){t.$$.on_destroy.push(u(e,n))},n:n,s:l,t:x});const o=t=>t;function r(t,e){for(const n in e)t[n]=e[n];return t}function s(t){return t()}function i(){return Object.create(null)}function c(t){t.forEach(s)}function a(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function u(t,...e){if(null==t)return n;const o=t.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}function f(t){return t&&a(t.destroy)?t.destroy:n}const d="undefined"!=typeof window;let p=d?()=>window.performance.now():()=>Date.now(),h=d?t=>requestAnimationFrame(t):n;const m=new Set;function g(t){m.forEach((e=>{e.c(t)||(m.delete(e),e.f())})),0!==m.size&&h(g)}function y(t,e){t.appendChild(e)}function b(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function w(t){const e=_("style");return function(t,e){y(t.head||t,e),e.sheet}(b(t),e),e.sheet}function v(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode&&t.parentNode.removeChild(t)}function _(t){return document.createElement(t)}function x(t){return document.createTextNode(t)}function k(){return x(" ")}function E(){return x("")}function q(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function C(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function j(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,o,e),r}function A(t,e){return new t(e)}const S=new Map;let N,O=0;function L(t,e,n,o,r,s,i,c=0){const a=16.666/o;let l="{\n";for(let g=0;g<=1;g+=a){const t=e+(n-e)*s(g);l+=100*g+`%{${i(t,1-t)}}\n`}const u=l+`100% {${i(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${c}`,d=b(t),{stylesheet:p,rules:h}=S.get(d)||function(t,e){const n={stylesheet:w(e),rules:{}};return S.set(t,n),n}(d,t);h[f]||(h[f]=!0,p.insertRule(`@keyframes ${f} ${u}`,p.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${o}ms linear ${r}ms 1 both`,O+=1,f}function D(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),O-=r,O||h((()=>{O||(S.forEach((t=>{const{ownerNode:e}=t.stylesheet;e&&$(e)})),S.clear())})))}function P(t){N=t}function z(){if(!N)throw new Error("Function called outside component initialization");return N}function R(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const I=[],M=[],T=[],X=[],Y=Promise.resolve();let F=!1;function H(){F||(F=!0,Y.then(K))}function B(){return H(),Y}function G(t){T.push(t)}const U=new Set;let W,J=0;function K(){const t=N;do{for(;J<I.length;){const t=I[J];J++,P(t),Q(t.$$)}for(P(null),I.length=0,J=0;M.length;)M.pop()();for(let t=0;t<T.length;t+=1){const e=T[t];U.has(e)||(U.add(e),e())}T.length=0}while(I.length);for(;X.length;)X.pop()();F=!1,U.clear(),P(t)}function Q(t){if(null!==t.fragment){t.update(),c(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(G)}}function V(t,e,n){t.dispatchEvent(j(`${e?"intro":"outro"}${n}`))}const Z=new Set;let tt;function et(){tt={r:0,c:[],p:tt}}function nt(){tt.r||c(tt.c),tt=tt.p}function ot(t,e){t&&t.i&&(Z.delete(t),t.i(e))}function rt(t,e,n,o){if(t&&t.o){if(Z.has(t))return;Z.add(t),tt.c.push((()=>{Z.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}const st={duration:0};function it(t,e,r){let s,i,c=e(t,r),l=!1,u=0;function f(){s&&D(t,s)}function d(){const{delay:e=0,duration:r=300,easing:a=o,tick:d=n,css:y}=c||st;y&&(s=L(t,0,1,r,e,a,y,u++)),d(0,1);const b=p()+e,w=b+r;i&&i.abort(),l=!0,G((()=>V(t,!0,"start"))),i=function(t){let e;return 0===m.size&&h(g),{promise:new Promise((n=>{m.add(e={c:t,f:n})})),abort(){m.delete(e)}}}((e=>{if(l){if(e>=w)return d(1,0),V(t,!0,"end"),f(),l=!1;if(e>=b){const t=a((e-b)/r);d(t,1-t)}}return l}))}let y=!1;return{start(){y||(y=!0,D(t),a(c)?(c=c(),(W||(W=Promise.resolve(),W.then((()=>{W=null}))),W).then(d)):d())},invalidate(){y=!1},end(){l&&(f(),l=!1)}}}function ct(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=e[s];if(c){for(const t in i)t in c||(o[t]=1);for(const t in c)r[t]||(n[t]=c[t],r[t]=1);t[s]=c}else for(const t in i)r[t]=1}for(const i in o)i in n||(n[i]=void 0);return n}function at(t){return"object"==typeof t&&null!==t?t:{}}function lt(t){t&&t.c()}function ut(t,e,n,o){const{fragment:r,after_update:i}=t.$$;r&&r.m(e,n),o||G((()=>{const e=t.$$.on_mount.map(s).filter(a);t.$$.on_destroy?t.$$.on_destroy.push(...e):c(e),t.$$.on_mount=[]})),i.forEach(G)}function ft(t,e){const n=t.$$;null!==n.fragment&&(c(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function dt(t,e,o,r,s,a,l,u=[-1]){const f=N;P(t);const d=t.$$={fragment:null,ctx:[],props:a,update:n,not_equal:s,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:i(),dirty:u,skip_bound:!1,root:e.target||f.$$.root};l&&l(d.root);let p=!1;if(d.ctx=o?o(t,e.props||{},((e,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&s(d.ctx[e],d.ctx[e]=r)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](r),p&&function(t,e){-1===t.$$.dirty[0]&&(I.push(t),H(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n})):[],d.update(),p=!0,c(d.before_update),d.fragment=!!r&&r(d.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);d.fragment&&d.fragment.l(t),t.forEach($)}else d.fragment&&d.fragment.c();e.intro&&ot(t.$$.fragment),ut(t,e.target,e.anchor,e.customElement),K()}P(f)}class pt{$destroy(){ft(this,1),this.$destroy=n}$on(t,e){if(!a(e))return n;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ht(t){if(!t)throw Error("Parameter args is required");if(!t.component==!t.asyncComponent)throw Error("One and only one of component and asyncComponent is required");if(t.component&&(t.asyncComponent=()=>Promise.resolve(t.component)),"function"!=typeof t.asyncComponent)throw Error("Parameter asyncComponent must be a function");if(t.conditions){Array.isArray(t.conditions)||(t.conditions=[t.conditions]);for(let e=0;e<t.conditions.length;e++)if(!t.conditions[e]||"function"!=typeof t.conditions[e])throw Error("Invalid parameter conditions["+e+"]")}return t.loadingComponent&&(t.asyncComponent.loading=t.loadingComponent,t.asyncComponent.loadingParams=t.loadingParams||void 0),{component:t.asyncComponent,userData:t.userData,conditions:t.conditions&&t.conditions.length?t.conditions:void 0,props:t.props&&Object.keys(t.props).length?t.props:{},_sveltesparouter:!0}}t("S",pt);const mt=[];function gt(t,e){return{subscribe:yt(t,e).subscribe}}function yt(t,e=n){let o;const r=new Set;function s(e){if(l(t,e)&&(t=e,o)){const e=!mt.length;for(const n of r)n[1](),mt.push(n,t);if(e){for(let t=0;t<mt.length;t+=2)mt[t][0](mt[t+1]);mt.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(i,c=n){const a=[i,c];return r.add(a),1===r.size&&(o=e(s)||n),i(t),()=>{r.delete(a),0===r.size&&(o(),o=null)}}}}function bt(t,e,o){const r=!Array.isArray(t),s=r?[t]:t,i=e.length<2;return gt(o,(t=>{let o=!1;const l=[];let f=0,d=n;const p=()=>{if(f)return;d();const o=e(r?l[0]:l,t);i?t(o):d=a(o)?o:n},h=s.map(((t,e)=>u(t,(t=>{l[e]=t,f&=~(1<<e),o&&p()}),(()=>{f|=1<<e}))));return o=!0,p(),function(){c(h),d()}}))}function wt(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,o,r,s,i=[],c="",a=t.split("/");for(a[0]||a.shift();r=a.shift();)"*"===(n=r[0])?(i.push("wild"),c+="/(.*)"):":"===n?(o=r.indexOf("?",1),s=r.indexOf(".",1),i.push(r.substring(1,~o?o:~s?s:r.length)),c+=~o&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(c+=(~o?"?":"")+"\\"+r.substring(s))):c+="/"+r;return{keys:i,pattern:new RegExp("^"+c+(e?"(?=$|/)":"/?$"),"i")}}function vt(t){let e,n,o;const s=[t[2]];var i=t[0];function c(t){let e={};for(let n=0;n<s.length;n+=1)e=r(e,s[n]);return{props:e}}return i&&(e=A(i,c()),e.$on("routeEvent",t[7])),{c(){e&&lt(e.$$.fragment),n=E()},m(t,r){e&&ut(e,t,r),v(t,n,r),o=!0},p(t,o){const r=4&o?ct(s,[at(t[2])]):{};if(i!==(i=t[0])){if(e){et();const t=e;rt(t.$$.fragment,1,0,(()=>{ft(t,1)})),nt()}i?(e=A(i,c()),e.$on("routeEvent",t[7]),lt(e.$$.fragment),ot(e.$$.fragment,1),ut(e,n.parentNode,n)):e=null}else i&&e.$set(r)},i(t){o||(e&&ot(e.$$.fragment,t),o=!0)},o(t){e&&rt(e.$$.fragment,t),o=!1},d(t){t&&$(n),e&&ft(e,t)}}}function $t(t){let e,n,o;const s=[{params:t[1]},t[2]];var i=t[0];function c(t){let e={};for(let n=0;n<s.length;n+=1)e=r(e,s[n]);return{props:e}}return i&&(e=A(i,c()),e.$on("routeEvent",t[6])),{c(){e&&lt(e.$$.fragment),n=E()},m(t,r){e&&ut(e,t,r),v(t,n,r),o=!0},p(t,o){const r=6&o?ct(s,[2&o&&{params:t[1]},4&o&&at(t[2])]):{};if(i!==(i=t[0])){if(e){et();const t=e;rt(t.$$.fragment,1,0,(()=>{ft(t,1)})),nt()}i?(e=A(i,c()),e.$on("routeEvent",t[6]),lt(e.$$.fragment),ot(e.$$.fragment,1),ut(e,n.parentNode,n)):e=null}else i&&e.$set(r)},i(t){o||(e&&ot(e.$$.fragment,t),o=!0)},o(t){e&&rt(e.$$.fragment,t),o=!1},d(t){t&&$(n),e&&ft(e,t)}}}function _t(t){let e,n,o,r;const s=[$t,vt],i=[];function c(t,e){return t[1]?0:1}return e=c(t),n=i[e]=s[e](t),{c(){n.c(),o=E()},m(t,n){i[e].m(t,n),v(t,o,n),r=!0},p(t,[r]){let a=e;e=c(t),e===a?i[e].p(t,r):(et(),rt(i[a],1,1,(()=>{i[a]=null})),nt(),n=i[e],n?n.p(t,r):(n=i[e]=s[e](t),n.c()),ot(n,1),n.m(o.parentNode,o))},i(t){r||(ot(n),r=!0)},o(t){rt(n),r=!1},d(t){i[e].d(t),t&&$(o)}}}function xt(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let o="";return n>-1&&(o=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:o}}const kt=gt(null,(function(t){t(xt());const e=()=>{t(xt())};return window.addEventListener("hashchange",e,!1),function(){window.removeEventListener("hashchange",e,!1)}}));t("m",bt(kt,(t=>t.location))),bt(kt,(t=>t.querystring));const Et=yt(void 0);function qt(t,e){if(e=jt(e),!t||!t.tagName||"a"!=t.tagName.toLowerCase())throw Error('Action "link" can only be used with <a> tags');return Ct(t,e),{update(e){e=jt(e),Ct(t,e)}}}function Ct(t,e){let n=e.href||t.getAttribute("href");if(n&&"/"==n.charAt(0))n="#"+n;else if(!n||n.length<2||"#/"!=n.slice(0,2))throw Error('Invalid value for "href" attribute: '+n);t.setAttribute("href",n),t.addEventListener("click",(t=>{t.preventDefault(),e.disabled||function(t){history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=t}(t.currentTarget.getAttribute("href"))}))}function jt(t){return t&&"string"==typeof t?{href:t}:t||{}}function At(t,e,n){let{routes:o={}}=e,{prefix:r=""}=e,{restoreScrollState:s=!1}=e;class i{constructor(t,e){if(!e||"function"!=typeof e&&("object"!=typeof e||!0!==e._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:n,keys:o}=wt(t);this.path=t,"object"==typeof e&&!0===e._sveltesparouter?(this.component=e.component,this.conditions=e.conditions||[],this.userData=e.userData,this.props=e.props||{}):(this.component=()=>Promise.resolve(e),this.conditions=[],this.props={}),this._pattern=n,this._keys=o}match(t){if(r)if("string"==typeof r){if(!t.startsWith(r))return null;t=t.substr(r.length)||"/"}else if(r instanceof RegExp){const e=t.match(r);if(!e||!e[0])return null;t=t.substr(e[0].length)||"/"}const e=this._pattern.exec(t);if(null===e)return null;if(!1===this._keys)return e;const n={};let o=0;for(;o<this._keys.length;){try{n[this._keys[o]]=decodeURIComponent(e[o+1]||"")||null}catch(s){n[this._keys[o]]=null}o++}return n}async checkConditions(t){for(let e=0;e<this.conditions.length;e++)if(!(await this.conditions[e](t)))return!1;return!0}}const c=[];o instanceof Map?o.forEach(((t,e)=>{c.push(new i(e,t))})):Object.keys(o).forEach((t=>{c.push(new i(t,o[t]))}));let a=null,l=null,u={};const f=function(){const t=z();return(e,n,{cancelable:o=!1}={})=>{const r=t.$$.callbacks[e];if(r){const s=j(e,n,{cancelable:o});return r.slice().forEach((e=>{e.call(t,s)})),!s.defaultPrevented}return!0}}();async function d(t,e){await B(),f(t,e)}let p=null,h=null;var m;s&&(h=t=>{p=t.state&&(t.state.__svelte_spa_router_scrollY||t.state.__svelte_spa_router_scrollX)?t.state:null},window.addEventListener("popstate",h),m=()=>{var t;(t=p)?window.scrollTo(t.__svelte_spa_router_scrollX,t.__svelte_spa_router_scrollY):window.scrollTo(0,0)},z().$$.after_update.push(m));let g=null,y=null;const b=kt.subscribe((async t=>{g=t;let e=0;for(;e<c.length;){const o=c[e].match(t.location);if(!o){e++;continue}const r={route:c[e].path,location:t.location,querystring:t.querystring,userData:c[e].userData,params:o&&"object"==typeof o&&Object.keys(o).length?o:null};if(!(await c[e].checkConditions(r)))return n(0,a=null),y=null,void d("conditionsFailed",r);d("routeLoading",Object.assign({},r));const s=c[e].component;if(y!=s){s.loading?(n(0,a=s.loading),y=s,n(1,l=s.loadingParams),n(2,u={}),d("routeLoaded",Object.assign({},r,{component:a,name:a.name,params:l}))):(n(0,a=null),y=null);const e=await s();if(t!=g)return;n(0,a=e&&e.default||e),y=s}return o&&"object"==typeof o&&Object.keys(o).length?n(1,l=o):n(1,l=null),n(2,u=c[e].props),void d("routeLoaded",Object.assign({},r,{component:a,name:a.name,params:l})).then((()=>{Et.set(l)}))}n(0,a=null),y=null,Et.set(void 0)}));return function(t){z().$$.on_destroy.push(t)}((()=>{b(),h&&window.removeEventListener("popstate",h)})),t.$$set=t=>{"routes"in t&&n(3,o=t.routes),"prefix"in t&&n(4,r=t.prefix),"restoreScrollState"in t&&n(5,s=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=s?"manual":"auto")},[a,l,u,o,r,s,function(e){R.call(this,t,e)},function(e){R.call(this,t,e)}]}class St extends pt{constructor(t){super(),dt(this,t,At,_t,l,{routes:3,prefix:4,restoreScrollState:5})}}const Nt=function(t,e,n){return t()};function Ot(t,{delay:e=0,duration:n=400,easing:r=o}={}){const s=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:t=>"opacity: "+t*s}}function Lt(t){let e,o;return{c(){e=_("div"),e.innerHTML='<h2 class="svelte-1ndl4jp">Main</h2>'},m(t,n){v(t,e,n)},p:n,i(t){o||G((()=>{o=it(e,Ot,{duration:400}),o.start()}))},o:n,d(t){t&&$(e)}}}const Dt={"/":class extends pt{constructor(t){super(),dt(this,t,null,Lt,l,{})}},"/sub":ht({asyncComponent:()=>Nt((()=>e.import("./SubPage-legacy.b2fffc15.js")),0,e.meta.url)}),"/sub/:id":ht({asyncComponent:()=>Nt((()=>e.import("./SubDesc-legacy.f2c920a4.js")),0,e.meta.url)}),"*":ht({asyncComponent:()=>Nt((()=>e.import("./NotFound-legacy.f6187324.js")),0,e.meta.url)})},Pt=[];let zt;function Rt(t){const e=t.pattern.test(zt);It(t,t.className,e),It(t,t.inactiveClassName,!e)}function It(t,e,n){(e||"").split(" ").forEach((e=>{e&&(t.node.classList.remove(e),n&&t.node.classList.add(e))}))}function Mt(t,e){if(!(e=e&&("string"==typeof e||"object"==typeof e&&e instanceof RegExp)?{path:e}:e||{}).path&&t.hasAttribute("href")&&(e.path=t.getAttribute("href"),e.path&&e.path.length>1&&"#"==e.path.charAt(0)&&(e.path=e.path.substring(1))),e.className||(e.className="active"),!e.path||"string"==typeof e.path&&(e.path.length<1||"/"!=e.path.charAt(0)&&"*"!=e.path.charAt(0)))throw Error('Invalid value for "path" argument');const{pattern:n}="string"==typeof e.path?wt(e.path):{pattern:e.path},o={node:t,className:e.className,inactiveClassName:e.inactiveClassName,pattern:n};return Pt.push(o),Rt(o),{destroy(){Pt.splice(Pt.indexOf(o),1)}}}function Tt(t){let e,o,r,s,i,a,l,u,d,p,h,m,g,b,w,x,E,j,A,S;return{c(){e=_("header"),o=_("h2"),o.textContent="Header",r=k(),s=_("div"),i=_("a"),i.textContent="Main",a=k(),l=_("a"),l.textContent="SubPage",u=k(),d=_("a"),d.textContent="SubDesc/1",p=k(),h=_("button"),h.textContent="SubDesc/12",m=k(),g=_("div"),b=_("button"),b.textContent="뒤로 가기",w=k(),x=_("button"),x.textContent="앞으로 가기",E=k(),j=_("button"),j.textContent="/sub/14",C(o,"class","svelte-yq8wcs"),C(i,"href","/"),C(i,"class","svelte-yq8wcs"),C(l,"href","/sub"),C(l,"class","svelte-yq8wcs"),C(d,"href","/sub/1"),C(d,"class","svelte-yq8wcs"),C(h,"type","button"),C(h,"class","svelte-yq8wcs"),C(s,"class","inner_head svelte-yq8wcs"),C(e,"class","svelte-yq8wcs"),C(b,"class","svelte-yq8wcs"),C(x,"class","svelte-yq8wcs"),C(j,"class","svelte-yq8wcs"),C(g,"class","wrap_btn svelte-yq8wcs")},m(n,c){v(n,e,c),y(e,o),y(e,r),y(e,s),y(s,i),y(s,a),y(s,l),y(s,u),y(s,d),y(s,p),y(s,h),v(n,m,c),v(n,g,c),y(g,b),y(g,w),y(g,x),y(g,E),y(g,j),A||(S=[f(qt.call(null,i)),f(Mt.call(null,i)),f(qt.call(null,l)),f(Mt.call(null,l)),f(qt.call(null,d)),f(Mt.call(null,d,"/sub/*")),q(h,"click",t[0]),q(b,"click",t[1]),q(x,"click",t[2]),q(j,"click",t[3])],A=!0)},p:n,i:n,o:n,d(t){t&&$(e),t&&$(m),t&&$(g),A=!1,c(S)}}}function Xt(t){return[()=>async function(t){if(!t||t.length<1||"/"!=t.charAt(0)&&0!==t.indexOf("#/"))throw Error("Invalid parameter location");await B();const e=("#"==t.charAt(0)?"":"#")+t;try{const t={...history.state};delete t.__svelte_spa_router_scrollX,delete t.__svelte_spa_router_scrollY,window.history.replaceState(t,void 0,e)}catch(n){console.warn("Caught exception while replacing the current page. If you're running this in the Svelte REPL, please note that the `replace` method might not work in this environment.")}window.dispatchEvent(new Event("hashchange"))}("/sub/12"),()=>async function(){await B(),window.history.back()}(),()=>history.go(1),()=>async function(t){if(!t||t.length<1||"/"!=t.charAt(0)&&0!==t.indexOf("#/"))throw Error("Invalid parameter location");await B(),history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=("#"==t.charAt(0)?"":"#")+t}("/sub/14")]}kt.subscribe((t=>{zt=t.location+(t.querystring?"?"+t.querystring:""),Pt.map(Rt)}));class Yt extends pt{constructor(t){super(),dt(this,t,Xt,Tt,l,{})}}function Ft(t){let e;return{c(){e=_("footer"),e.innerHTML="<h2>Footer!</h2>",C(e,"class","svelte-wqbaj8")},m(t,n){v(t,e,n)},p:n,i:n,o:n,d(t){t&&$(e)}}}class Ht extends pt{constructor(t){super(),dt(this,t,null,Ft,l,{})}}function Bt(t){let e,o,r,s,i,c;return e=new Yt({}),r=new St({props:{routes:Dt}}),i=new Ht({}),{c(){lt(e.$$.fragment),o=k(),lt(r.$$.fragment),s=k(),lt(i.$$.fragment)},m(t,n){ut(e,t,n),v(t,o,n),ut(r,t,n),v(t,s,n),ut(i,t,n),c=!0},p:n,i(t){c||(ot(e.$$.fragment,t),ot(r.$$.fragment,t),ot(i.$$.fragment,t),c=!0)},o(t){rt(e.$$.fragment,t),rt(r.$$.fragment,t),rt(i.$$.fragment,t),c=!1},d(t){ft(e,t),t&&$(o),ft(r,t),t&&$(s),ft(i,t)}}}new class extends pt{constructor(t){super(),dt(this,t,null,Bt,l,{})}}({target:document.getElementById("app")})}}}));
