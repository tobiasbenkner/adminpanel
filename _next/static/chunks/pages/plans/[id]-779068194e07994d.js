(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[982],{9520:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(3366),s=n(7462),i=n(7294),a=n(6010),o=n(8320),u=n(4867),c=n(4780),l=n(5149);var d=(0,n(182).ZP)(),p=n(6500),f=n(5893);const m=["className","component","disableGutters","fixed","maxWidth","classes"],x=(0,p.Z)(),h=d("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${(0,o.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),v=e=>(0,l.Z)({props:e,name:"MuiContainer",defaultTheme:x});var b=n(8216),j=n(948),g=n(1657);const Z=function(e={}){const{createStyledComponent:t=h,useThemeProps:n=v,componentName:l="MuiContainer"}=e,d=t((({theme:e,ownerState:t})=>(0,s.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,n)=>{const r=n,s=e.breakpoints.values[r];return 0!==s&&(t[e.breakpoints.up(r)]={maxWidth:`${s}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,s.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}))),p=i.forwardRef((function(e,t){const i=n(e),{className:p,component:x="div",disableGutters:h=!1,fixed:v=!1,maxWidth:b="lg"}=i,j=(0,r.Z)(i,m),g=(0,s.Z)({},i,{component:x,disableGutters:h,fixed:v,maxWidth:b}),Z=((e,t)=>{const{classes:n,fixed:r,disableGutters:s,maxWidth:i}=e,a={root:["root",i&&`maxWidth${(0,o.Z)(String(i))}`,r&&"fixed",s&&"disableGutters"]};return(0,c.Z)(a,(e=>(0,u.Z)(t,e)),n)})(g,l);return(0,f.jsx)(d,(0,s.Z)({as:x,ownerState:g,className:(0,a.Z)(Z.root,p),ref:t},j))}));return p}({createStyledComponent:(0,j.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${(0,b.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,g.Z)({props:e,name:"MuiContainer"})});var y=Z},5938:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plans/[id]",function(){return n(5189)}])},4719:function(e,t,n){"use strict";n.d(t,{EB:function(){return r},bG:function(){return a},zQ:function(){return i},ze:function(){return s}});var r=["legs","arms","chest","abs","gluteus","back","shoulder"],s=[{id:"1",muscleGroup:"chest",name:"Press de banca",video:"4T9UQ4FBVXI",photo:"/samples/exercises/benchpress.jpg"},{id:"2",muscleGroup:"legs",name:"sentadilla con barra baja",video:"QhVC_AnZYYM",photo:"/samples/exercises/squat.jpg"},{id:"3",muscleGroup:"legs",name:"leg press",video:"Gk8cCEQh-CE",photo:"/samples/exercises/legpress.jpg"},{id:"4",muscleGroup:"legs",name:"squat",video:"pn8mqlG0nkE",photo:"/samples/exercises/squat2.jpg"}],i=function(e){return Promise.resolve(s.find((function(t){return t.id===e})))},a=function(e){return Promise.resolve(s.filter((function(t){return t.muscleGroup===e})))}},4384:function(e,t,n){"use strict";n.d(t,{j:function(){return a},p:function(){return i}});var r=n(4719),s=[{id:"1",name:"Principiante 01",days:[{name:"D\xeda 1 - Legs",exercises:[{exercise:r.ze[0],sets:"3",reps:"10"},{exercise:r.ze[1],sets:"3",reps:"10"},{exercise:r.ze[2],sets:"3",reps:"10"}]},{name:"D\xeda 2 - Pecho",exercises:[{exercise:r.ze[0],sets:"3",reps:"10"}]}]},{id:"2",name:"Principiante 02",days:[{name:"D\xeda 1",exercises:[{exercise:r.ze[0],sets:"3",reps:"10"}]}]}],i=function(){return Promise.resolve(s)},a=function(e){return Promise.resolve(s.find((function(t){return t.id===e})))}},4345:function(e,t,n){"use strict";var r=n(5893);t.Z=function(e){return(0,r.jsx)("h1",{style:{marginTop:0},children:e.title})}},9133:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(5893),s=n(6447),i=n(5113),a=n(3946),o=n(7720),u=n(1713),c=n(1903),l=n(3321),d=(n(7294),n(4054)),p=n(3841),f=n(7709),m=function(e){var t=e.label,n=e.value,s=e.setter,i=e.field;return(0,r.jsxs)(d.Z,{fullWidth:!0,variant:"outlined",children:[(0,r.jsx)(p.Z,{htmlFor:"component-outlined",children:t}),(0,r.jsx)(f.Z,{value:n,onChange:function(e){return t=e.target.value,void s(i,t);var t},label:t})]})},x=n(5434),h=n(4719),v=function(e){var t=e.label,n=e.value,s=e.setter,i=e.field;return(0,r.jsxs)(d.Z,{fullWidth:!0,variant:"outlined",children:[(0,r.jsx)(p.Z,{htmlFor:"component-outlined",children:t}),(0,r.jsx)(f.Z,{value:n,onChange:function(e){return function(e){var t=e.replace(/[^0-9.]/g,"");s(i,t)}(e.target.value)},label:t,inputProps:{inputMode:"numeric",pattern:"[0-9]*"}})]})},b=function(e){return JSON.parse(JSON.stringify(e))},j=n(6968),g=n.n(j);function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e){var t=e.state,n=e.setState,d=function(e,t){n((function(n){if(n){var r=JSON.parse(JSON.stringify(n));return g()(r,e,t),r}}))};return(0,r.jsx)("div",{children:t&&(0,r.jsxs)(s.Z,{spacing:2,children:[(0,r.jsx)(m,{label:"Plan",value:t.name,field:"name",setter:d}),t.days.map((function(e,t){return(0,r.jsxs)(i.Z,{elevation:3,sx:{p:2,mb:2},children:[(0,r.jsx)(s.Z,{alignItems:"end",sx:{mb:1},children:(0,r.jsx)(a.Z,{onClick:function(){return e=t,void n((function(t){var n=b(t);return n.days.splice(e,1),n}));var e},size:"small",children:(0,r.jsx)(x.ZkW,{})})}),(0,r.jsx)(m,{label:"D\xeda",value:e.name,field:"days[".concat(t,"].name"),setter:d}),(0,r.jsx)(o.Z,{sx:{mb:1,mt:1}}),e.exercises.map((function(e,i){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(s.Z,{direction:"row",justifyContent:"space-between",children:[(0,r.jsx)(u.Z,{disablePortal:!0,options:h.ze,getOptionLabel:function(e){return e.name},groupBy:function(e){return e.muscleGroup},fullWidth:!0,renderInput:function(e){return(0,r.jsx)(c.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Z(e,t,n[t])}))}return e}({},e,{label:"Ejercicio"}))}}),(0,r.jsxs)(s.Z,{direction:"row",children:[(0,r.jsx)(v,{label:"sets",value:e.sets,field:"days[".concat(t,"].exercises[").concat(i,"].sets"),setter:d}),(0,r.jsx)(v,{label:"reps",value:e.reps,field:"days[".concat(t,"].exercises[").concat(i,"].reps"),setter:d})]}),(0,r.jsx)(a.Z,{onClick:function(){return e=t,r=i,void n((function(t){var n=b(t);return n.days[e].exercises.splice(r,1),n}));var e,r},size:"small",children:(0,r.jsx)(x.ZkW,{})})]}),(0,r.jsx)(o.Z,{sx:{mb:1,mt:1}})]},"day-"+t+"-exercise-"+i)})),(0,r.jsx)(l.Z,{variant:"outlined",onClick:function(){return function(e){n((function(t){var n=b(t);return n.days[e].exercises.push({exercise:void 0,sets:"",reps:""}),n}))}(t)},children:"A\xf1adir ejercicio"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]},"day-"+t)})),(0,r.jsx)(l.Z,{variant:"outlined",onClick:function(){n((function(e){var t=b(e);return t.days.push({name:"",exercises:[]}),t}))},children:"A\xf1adir d\xeda"})]})})}},5189:function(e,t,n){"use strict";n.r(t);var r=n(5893),s=n(1163),i=n(4345),a=n(9520),o=n(7294),u=n(4384),c=n(9133);t.default=function(){var e=(0,s.useRouter)().query.id,t=(0,o.useState)(),n=t[0],l=t[1];return(0,o.useEffect)((function(){e&&(0,u.j)(e+"").then(l)}),[e]),(0,r.jsxs)(a.Z,{maxWidth:"md",children:[(0,r.jsx)(i.Z,{title:"Plan"}),(0,r.jsx)(c.Z,{state:n,setState:l})]})}}},function(e){e.O(0,[553,200,774,888,179],(function(){return t=5938,e(e.s=t);var t}));var t=e.O();_N_E=t}]);