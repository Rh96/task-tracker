(this["webpackJsonptask-tracker"]=this["webpackJsonptask-tracker"]||[]).push([[0],{15:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(8),o=n.n(a),s=(n(15),n(10)),i=n(6),l=n(2),d=n(0),u=function(e){var t=e.onAdd,n=Object(c.useState)(""),r=Object(l.a)(n,2),a=r[0],o=r[1],s=Object(c.useState)(""),i=Object(l.a)(s,2),u=i[0],j=i[1],b=Object(c.useState)(!1),h=Object(l.a)(b,2),O=h[0],m=h[1];return Object(d.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:u,reminder:O}),o(""),j(""),m(!1)):alert("Please add a task")},children:[Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:"Task"}),Object(d.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return o(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:"Day & Time"}),Object(d.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control form-control-check",children:[Object(d.jsx)("label",{children:"Set Reminder"}),Object(d.jsx)("input",{type:"checkbox",checked:O,value:O,onChange:function(e){return m(e.currentTarget.checked)}})]}),Object(d.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})},j=n(5),b=n.n(j),h=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(d.jsx)("button",{style:{backgroundColor:t},className:"btn",onClick:c,children:n})};h.defaultProps={color:"steelblue"},h.propsTypes={text:b.a.string,color:b.a.string,onClick:b.a.func};var O=h,m=function(e){var t=e.title,n=e.onAdd,c=e.showAdd;return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("h1",{children:t}),Object(d.jsx)(O,{color:c?"red":"green",text:c?"Close":"Add",onClick:n})]})};m.defaultProps={title:"Task Tracker"};var x=m,f=n(9),k=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(d.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return c(t.id)},children:[Object(d.jsxs)("h3",{children:[t.text,Object(d.jsx)(f.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(d.jsx)("p",{children:t.day})]})},p=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(d.jsx)(d.Fragment,{children:t.map((function(e){return Object(d.jsx)(k,{task:e,onDelete:n,onToggle:c},e.id)}))})},g=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([{id:1,text:"Doctrors Appointment",day:"Feb 5th at 2:30pm",reminder:!0},{id:2,text:"Meeting at School",day:"Feb 6th at 1:30pm",reminder:!0},{text:"Test 123",day:"Mar 5th at 3:15pm",reminder:!1,id:3}]),o=Object(l.a)(a,2),j=o[0],b=o[1];return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(x,{onAdd:function(){return r(!n)},showAdd:n}),n&&Object(d.jsx)(u,{onAdd:function(e){var t=Math.floor(1e5*Math.random())+1,n=Object(i.a)({id:t},e);b([].concat(Object(s.a)(j),[n]))}}),j.length>0?Object(d.jsx)(p,{tasks:j,onDelete:function(e){b(j.filter((function(t){return t.id!==e})))},onToggle:function(e){b(j.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{reminder:!t.reminder}):t})))}}):"No Tasks To Show"]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),v()}},[[19,1,2]]]);
//# sourceMappingURL=main.53064ebc.chunk.js.map