(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[839],{4717:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/clients",function(){return t(4903)}])},1082:function(e,n,t){"use strict";var r=t(2322),i=t(3927),a=t(2841);n.Z=function(){return(0,r.jsx)(i.Z,{justifyContent:"center",alignItems:"center",style:{height:"calc(100vh - 100px)"},children:(0,r.jsx)(a.Z,{})})}},7072:function(e,n,t){"use strict";var r=t(2322);n.Z=function(e){return(0,r.jsx)("h1",{style:{marginTop:0},children:e.title})}},4903:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return W},default:function(){return X}});var r=t(2322),i=t(9097),a=t.n(i),c=t(2784),o=t(7550),u=t(3927),l=t(1075),s=t(2096),f=t(5213),d=t(4905),h=t(7671),m=t(2197),p=t(7072),v=t(558),j=t(794),x=t(1082),b=t(4776),g=t.n(b),y=t(2048),Z=t(3091),w=t(5936),C=t(6060),_=t(5694),O=t(107),P=t(6537),S=t(5971),k=t(3379),A=t(5632);function E(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function N(e,n,t,r,i,a,c){try{var o=e[a](c),u=o.value}catch(l){return void t(l)}o.done?n(u):Promise.resolve(u).then(r,i)}function I(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){I(e,n,t[n])}))}return e}function T(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,a=[],c=!0,o=!1;try{for(t=t.call(e);!(c=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);c=!0);}catch(u){o=!0,i=u}finally{try{c||null==t.return||t.return()}finally{if(o)throw i}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return E(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return E(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(){var e,n,t=(e=["\nmutation Mutation($input: CreateClientInput!) {\n    createClient(input: $input) {\n        _id\n        email\n        name\n    }\n}"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return F=function(){return t},t}var $={email:"",name:""},D=(0,v.Ps)(F()),G=function(){var e=(0,A.useRouter)(),n=T(c.useState($),2),t=n[0],i=n[1],a=T(c.useState(!1),2),o=a[0],u=a[1],l=T((0,k.D)(D),2),s=l[0],f=l[1],d=(f.data,f.loading),h=f.error,m=function(){u(!1)},p=function(){var n,r=(n=g().mark((function n(){var r;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s({variables:{input:{email:t.email,name:t.name}}});case 3:return r=n.sent,m(),n.next=7,e.replace("/clients/"+r.data.createClient._id+"/training");case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})),function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function c(e){N(a,r,i,c,o,"next",e)}function o(e){N(a,r,i,c,o,"throw",e)}c(void 0)}))});return function(){return r.apply(this,arguments)}}();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(y.Z,{variant:"contained",onClick:function(){u(!0),i($)},children:"A\xf1adir"}),(0,r.jsxs)(Z.Z,{open:o,onClose:m,children:[(0,r.jsx)(w.Z,{children:"A\xf1adir un entrenador"}),(0,r.jsxs)(C.Z,{children:[(0,r.jsx)(_.Z,{sx:{mb:2},children:"Un nuevo cliente puede conectarse a la aplicaci\xf3n y ver su plan de entrenamiento."}),h&&(0,r.jsx)(O.Z,{severity:"warning",children:h.message}),(0,r.jsx)(P.Z,{autoFocus:!0,margin:"dense",id:"name",label:"Correo Electr\xf3nicos",type:"text",fullWidth:!0,variant:"outlined",value:t.email,onChange:function(e){return i((function(n){return z({},n,{email:e.target.value})}))},disabled:d}),(0,r.jsx)(P.Z,{autoFocus:!0,margin:"dense",id:"name",label:"Nombre",type:"text",fullWidth:!0,variant:"outlined",value:t.name,onChange:function(e){return i((function(n){return z({},n,{name:e.target.value})}))},disabled:d})]}),(0,r.jsxs)(S.Z,{children:[(0,r.jsx)(y.Z,{onClick:m,disabled:d,children:"Cancelar"}),(0,r.jsx)(y.Z,{onClick:p,disabled:d,children:"Guardar"})]})]})]})};function M(){var e,n,t=(e=["\nquery ListClients {\n  listClients {\n    _id\n    name\n    email\n    role\n  }\n}"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return M=function(){return t},t}var U=(0,v.Ps)(M()),W=!0,X=function(){var e=(0,j.a)(U),n=e.loading,t=(e.error,e.data);e.refetch;return n?(0,r.jsx)(x.Z,{}):(0,r.jsxs)(o.Z,{children:[(0,r.jsxs)(u.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,r.jsx)(p.Z,{title:"Clientes"}),(0,r.jsx)(G,{})]}),(0,r.jsx)(l.ZP,{container:!0,spacing:2,children:t.listClients.map((function(e){return(0,r.jsx)(l.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,xl:1,children:(0,r.jsx)(a(),{href:"/clients/".concat(e._id,"/training"),children:(0,r.jsx)(s.Z,{children:(0,r.jsxs)(f.Z,{children:[(0,r.jsx)(d.Z,{component:"img",height:"140",image:e.photo,alt:"green iguana"}),(0,r.jsx)(h.Z,{children:(0,r.jsx)(m.Z,{gutterBottom:!0,variant:"h6",component:"div",children:e.name})})]})})})},e._id)}))})]})}}},function(e){e.O(0,[253,694,537,634,93,774,888,179],(function(){return n=4717,e(e.s=n);var n}));var n=e.O();_N_E=n}]);