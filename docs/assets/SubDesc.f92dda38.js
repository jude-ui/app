import{S as g,i as D,s as k,e as _,g as q,t as p,h as v,a as x,j as t,k as S,b as C,n as j,d as y,l as w,c as z,m as A,f as B}from"./index.e6f52b3c.js";function E(i){let e,s,c,a,l,r=i[0].id+"",m,b,o,h,u,f;return{c(){e=_("div"),s=_("h3"),s.textContent="SubDesc",c=q(),a=_("div"),l=p("params.id : "),m=p(r),b=q(),o=_("div"),h=p("location : "),u=p(i[1]),v(s,"class","svelte-ceq583"),v(a,"class","svelte-ceq583"),v(o,"class","svelte-ceq583"),v(e,"class","svelte-ceq583")},m(n,d){x(n,e,d),t(e,s),t(e,c),t(e,a),t(a,l),t(a,m),t(e,b),t(e,o),t(o,h),t(o,u)},p(n,[d]){d&1&&r!==(r=n[0].id+"")&&S(m,r),d&2&&S(u,n[1])},i(n){f||C(()=>{f=z(e,B,{}),f.start()})},o:j,d(n){n&&y(e)}}}function F(i,e,s){let c;w(i,A,l=>s(1,c=l));let{params:a={}}=e;return i.$$set=l=>{"params"in l&&s(0,a=l.params)},[a,c]}class H extends g{constructor(e){super(),D(this,e,F,E,k,{params:0})}}export{H as default};