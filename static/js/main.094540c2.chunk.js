(this.webpackJsonpsara_jobb_app=this.webpackJsonpsara_jobb_app||[]).push([[0],{27:function(e,t,a){e.exports=a(47)},32:function(e,t,a){},33:function(e,t,a){},43:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(11),i=a.n(o),l=(a(32),a(33),a(13),a(10)),c=a(7),s=a(48),u=a(57),m=a(49),d=a(50),f=a(51),p=a(52),g=a(53),v=a(54),E=function(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),o=a[0],i=a[1],l=Object(n.useState)(!1),E=Object(c.a)(l,2),b=E[0],y=E[1];function O(){y(!b)}return r.a.createElement("div",null,r.a.createElement(s.a,{color:"info",style:{height:"50px"},onClick:O},e.title),r.a.createElement(u.a,{isOpen:b,toggle:O},r.a.createElement(m.a,{toggle:O},e.title),r.a.createElement(d.a,null,r.a.createElement(f.a,{onSubmit:function(t){t.preventDefault(),e.submit(o,e.id),i(""),O()}},r.a.createElement(p.a,null,r.a.createElement(g.a,{for:"patient"},"Patient"),r.a.createElement(v.a,{type:"text",name:"name",id:"patient",value:o,placeholder:e.title,onChange:function(e){i(e.target.value)}}),r.a.createElement(s.a,{color:"info",style:{marginTop:"2rem"},block:!0},e.title))))))},b=a(23);function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var O=function(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),o=a[0],i=a[1],l=Object(n.useState)(!1),E=Object(c.a)(l,2),O=E[0],h=E[1],j=["Journal","Recept","Remiss","Provsvar","Ring hem","Hemg\xe5ngsr\xe5d","Debitera","\xc5tg\xe4rd"];function k(){h(!O)}return r.a.createElement("div",null,r.a.createElement(s.a,{color:"info",style:{marginBottom:"2rem",height:"50px",width:"215px"},onClick:k},e.title),r.a.createElement(u.a,{isOpen:O,toggle:k},r.a.createElement(m.a,{toggle:k},e.title),r.a.createElement(d.a,null,r.a.createElement(f.a,{onSubmit:function(t){var a=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e.todos);t.preventDefault();for(var n=[],r=0;r<e.todos.length;r++)n.push(e.todos[r].name);for(var l=0;l<j.length;l++)t.target[l].checked&&(n.includes(t.target[l].id)||(a[t.target[l].id]={name:t.target[l].id,todo:t.target[l].checked,status:"red"}));o&&(a[o]={name:o,todo:!0,status:"red"}),e.addTodos(a),i(""),k()}},r.a.createElement(p.a,null,j.map((function(t){for(var a=[],n=0;n<e.todos.length;n++)a.push(e.todos[n].name);return a.includes(t)?r.a.createElement("div",{key:t,className:"form__todo"},r.a.createElement(g.a,{className:"form__todo_label",for:t},t),r.a.createElement(v.a,{className:"form__todo_input",type:"checkbox",checked:"defaultChecked",id:t})):r.a.createElement("div",{key:t,className:"form__todo"},r.a.createElement(g.a,{className:"form__todo_label",for:t},t),r.a.createElement(v.a,{className:"form__todo_input",type:"checkbox",id:t}))})),r.a.createElement(g.a,{style:{marginTop:"20px"},for:"todos"},"\xd6vrigt"),r.a.createElement(v.a,{type:"text",name:"name",id:"todos",placeholder:"Extra",value:o,onChange:function(e){i(e.target.value)}}),r.a.createElement(s.a,{color:"info",style:{marginTop:"2rem"},block:!0},e.title))))))},h=a(55),j=a(56),k=a(58);a(43);var w=function(e){var t=e.status,a=e.handleTodo,n=e.name;return r.a.createElement(j.a,{style:{flexBasis:"1",margin:"1rem"}},r.a.createElement(k.a,{style:{padding:"10px 0"},className:t,onClick:function(e){return a(t,n)},variant:"primary"},n))};var S=function(e){var t=e.patient,a=e.addTodosState,o=Object(n.useState)(Object(l.a)(t.todos)),i=Object(c.a)(o,2),s=i[0],u=i[1];function m(e,t){switch(e){case"red":u(d("yellow",t));break;case"yellow":u(d("green",t));break;default:u(d("red",t))}}function d(e,n){var r=s.map((function(t){return t.name===n&&(t.status=e),t}));return a(r,t.id),r}return r.a.createElement("div",null,r.a.createElement(h.a,{style:{marginTop:"30px",position:"relative"}},r.a.createElement(O,{title:"L\xe4gg till todo",todos:s,addTodos:function(e){if(e){var n=[];for(var r in e)!0===e[r].todo&&n.push(e[r]);u(n),a(n,t.id)}}}),t.activities>0?r.a.createElement("h2",{style:{color:"rgb(143, 19, 19)"}},t.title," - ",t.activities):r.a.createElement("h2",null,t.title," - ",t.activities),function(e){if(e)return(e=e.sort((function(e,t){return"green"===e.status&&"red"===t.status?1:"green"===e.status&&"green"===t.status?0:"yellow"===e.status&&"yellow"===t.status?0:"red"===e.status&&"red"===t.status?0:"green"===e.status&&"yellow"===t.status?1:"yellow"===e.status&&"green"===t.status?-1:"red"===e.status&&"yellow"===t.status?-1:"yellow"===e.status&&"red"===t.status?1:-1}))).map((function(e){return r.a.createElement(w,{key:e.name,name:e.name,status:e.status,handleTodo:m})}))}(s)))},_=a(26),x=a.n(_),N=(a(46),function(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),o=a[0],i=a[1];function l(){i(!o)}return r.a.createElement("div",null,r.a.createElement(s.a,{color:"danger",onClick:l},"X"),r.a.createElement(u.a,{isOpen:o,toggle:l},r.a.createElement(m.a,{toggle:l},"Vill du ta bort patient?"),r.a.createElement(d.a,null,r.a.createElement(s.a,{color:"info",style:{marginTop:"2rem"},block:!0,onClick:function(){return function(){var t=e.patient;e.removePatientHandler(t),l()}()}},"Ja"),r.a.createElement(s.a,{color:"danger",style:{marginTop:"2rem"},block:!0,onClick:function(){return l()}},"Nej"))))});var T=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)({}),s=Object(c.a)(i,2),u=s[0],m=s[1],d=Object(n.useState)([]),f=Object(c.a)(d,2),p=f[0],g=f[1];function v(e,t){console.log(e,t);var a=p.map((function(a){return a.id===t&&(a.title=e),a}));g(a),localStorage.setItem("patientsList",JSON.stringify(a))}function b(e){g((function(t){return Object(l.a)(t.filter((function(t){return t.id!==e})))})),localStorage.setItem("patientsList",JSON.stringify(Object(l.a)(p.filter((function(t){return t.id!==e})))))}function y(){o(!a)}return Object(n.useEffect)((function(){var e=localStorage.getItem("patientsList");g(e?JSON.parse(e):[])}),[]),a?r.a.createElement("div",null,r.a.createElement(k.a,{style:{height:"50px",width:"215px"},variant:"info",onClick:function(){return y()}},"Tillbaka till \xf6versikt"),r.a.createElement(S,{addTodosState:function(e,t){var a=p.map((function(a){if(a.id===t){var n=0;e.forEach((function(e){"green"!==e.status&&n++})),a.activities=n,a.todos=e}return a}));localStorage.setItem("patientsList",JSON.stringify(a)),g(a)},patient:u})):r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(E,{title:"L\xe4gg till patient",submit:function(e){if(e){var t={id:x()(),title:e,activities:0,todos:[]};g((function(e){return[].concat(Object(l.a)(e),[t])})),localStorage.setItem("patientsList",JSON.stringify([].concat(Object(l.a)(p),[t])))}}}),r.a.createElement("div",{className:"patient__list"},p.sort((function(e,t){return t.activities-e.activities})).map((function(e){return r.a.createElement(j.a,{key:e.id,style:{minWidth:"25%",flexBasis:"1",margin:"1rem"}},r.a.createElement(j.a.Body,null,e.activities>0?r.a.createElement(j.a.Title,{style:{color:"#dc3545"}},e.title," - ",e.activities):r.a.createElement(j.a.Title,null,e.title," - ",e.activities),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},r.a.createElement(E,{title:"\xc4ndra",id:e.id,submit:v,className:"card__name_modal"}),r.a.createElement(k.a,{onClick:function(){return t=e,y(),void m(t);var t},variant:"info"},"Todo"),r.a.createElement(N,{patient:e.id,removePatientHandler:b}))))})))))};var C=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.094540c2.chunk.js.map