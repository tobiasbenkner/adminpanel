(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[280],{5234:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/exercises/[muscleGroup]",function(){return n(3147)}])},3940:function(e,r,n){"use strict";n.d(r,{EB:function(){return t},bG:function(){return u},zQ:function(){return i},ze:function(){return o}});var t=["legs","arms","chest","abs","gluteus","back","shoulder"],o=[{id:"1",muscleGroup:"chest",name:"Press de banca",video:"4T9UQ4FBVXI",photo:"/samples/exercises/benchpress.jpg"},{id:"2",muscleGroup:"legs",name:"sentadilla con barra baja",video:"QhVC_AnZYYM",photo:"/samples/exercises/squat.jpg"},{id:"3",muscleGroup:"legs",name:"leg press",video:"Gk8cCEQh-CE",photo:"/samples/exercises/legpress.jpg"},{id:"4",muscleGroup:"legs",name:"squat",video:"pn8mqlG0nkE",photo:"/samples/exercises/squat2.jpg"}],i=function(e){return Promise.resolve(o.find((function(r){return r.id===e})))},u=function(e){return Promise.resolve(o.filter((function(r){return r.muscleGroup===e})))}},7072:function(e,r,n){"use strict";var t=n(2322);r.Z=function(e){return(0,t.jsx)("h1",{style:{marginTop:0},children:e.title})}},3147:function(e,r,n){"use strict";n.r(r);var t=n(4776),o=n.n(t),i=n(2322),u=n(7072),s=n(7550),c=n(8484),a=n(8287),l=n(422),f=n(4117),p=n(4358),d=n(2725),h=n(2056),m=n(6961),v=n(2784),x=n(3940),b=n(5632);function g(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function y(e,r,n,t,o,i,u){try{var s=e[i](u),c=s.value}catch(a){return void n(a)}s.done?r(c):Promise.resolve(c).then(t,o)}function j(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,o,i=[],u=!0,s=!1;try{for(n=n.call(e);!(u=(t=n.next()).done)&&(i.push(t.value),!r||i.length!==r);u=!0);}catch(c){s=!0,o=c}finally{try{u||null==n.return||n.return()}finally{if(s)throw o}}return i}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return g(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=function(){var e=j(v.useState(0),2),r=e[0],n=e[1],t=(0,v.useState)([]),g=t[0],E=t[1],w=(0,b.useRouter)(),Z=w.query.muscleGroup,_=function(){var e,r=(e=o().mark((function e(r){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(x.EB.indexOf(r)),e.next=3,w.replace("/exercises/"+r);case 3:case"end":return e.stop()}}),e)})),function(){var r=this,n=arguments;return new Promise((function(t,o){var i=e.apply(r,n);function u(e){y(i,t,o,u,s,"next",e)}function s(e){y(i,t,o,u,s,"throw",e)}u(void 0)}))});return function(e){return r.apply(this,arguments)}}();return(0,v.useEffect)((function(){var e=x.EB.indexOf(Z&&Z+""||x.EB[0]);-1!==e&&n(e)}),[Z]),(0,v.useEffect)((function(){Z&&(0,x.bG)(Z+"").then((function(e){console.log("LOAD",Z),E(e)}))}),[Z]),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(u.Z,{title:"Ejercicios"}),(0,i.jsxs)(s.Z,{sx:{flexGrow:1,bgcolor:"background.paper",display:"flex"},children:[(0,i.jsx)(c.Z,{orientation:"vertical",variant:"scrollable",value:r,"aria-label":"Vertical tabs example",sx:{borderRight:1,borderColor:"divider"},children:x.EB.map((function(e,r){return(0,i.jsx)(a.Z,{label:e,onClick:function(){return _(e)}},"tabsss"+r)}))}),(0,i.jsx)(l.Z,{sx:{width:"100%",bgcolor:"background.paper"},children:g.map((function(e){return(0,i.jsxs)("div",{children:[(0,i.jsxs)(f.Z,{onClick:function(){return w.push("/exercises/id/"+e.id)},children:[(0,i.jsx)(p.Z,{children:(0,i.jsx)(d.Z,{alt:e.name,src:e.photo})}),(0,i.jsx)(h.Z,{primary:e.name})]}),(0,i.jsx)(m.Z,{variant:"inset",component:"li"})]},e.name)}))})]})]})}}},function(e){e.O(0,[486,774,888,179],(function(){return r=5234,e(e.s=r);var r}));var r=e.O();_N_E=r}]);