(this["webpackJsonpmy-apple-notes"]=this["webpackJsonpmy-apple-notes"]||[]).push([[0],{37:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var i=s(3),a=s.n(i),c=s(29),n=s.n(c),l=s(32),r=s(12),d=s(16),o=s(4),j=s(30),b=s.n(j),m=(s(37),s(2)),p=function(e){var t=e.activeNote,s=e.setActiveNote,i=e.filteredNotes;return Object(m.jsx)("div",{className:"app-sidebar",children:Object(m.jsx)("div",{className:"app-sidebar-notes",children:i.map((function(e){return Object(m.jsxs)("div",{className:"app-sidebar-note ".concat(e.id===t&&"active"),onClick:function(){return s(e.id)},children:[Object(m.jsx)("div",{className:"sidebat-note-title",children:Object(m.jsx)("strong",{children:e.title})}),Object(m.jsxs)("div",{className:"hour-exc",children:[Object(m.jsx)("small",{className:"note-meta",children:new Date(e.lastModified).toLocaleTimeString("uk-UA",{hour:"2-digit",minute:"2-digit"})}),Object(m.jsx)("p",{children:e.body&&e.body.substr(0,35)+"..."})]})]})}))})})},u=function(e){var t=e.setSearchResults;return Object(m.jsx)("div",{className:"app-search",children:Object(m.jsx)("input",{className:"search-input",placeholder:"\u041f\u043e\u0448\u0443\u043a",type:"text",onChange:function(e){return t(e.target.value)}})})},h=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),s=t[0],a=t[1];return Object(m.jsxs)("div",{className:"dropdown-button-wrapper",children:[Object(m.jsx)("div",{className:"list-view",onClick:function(e){return e.currentTarget&&void a(!s)},children:Object(m.jsx)("img",{className:"sidebar-img",src:"img/dropdown.png",alt:"list"})}),s&&Object(m.jsx)("div",{className:"dropdown-list-wrapper opened",children:Object(m.jsxs)("ul",{className:"dropdown-list",children:[Object(m.jsxs)("li",{className:"dropdown-list-item",children:[Object(m.jsx)("img",{className:"dropdown-list-img",src:"img/mail.png",alt:"list"}),"\u041f\u043e\u0448\u0442\u0430"]}),Object(m.jsxs)("li",{className:"dropdown-list-item",children:[Object(m.jsx)("img",{className:"dropdown-list-img",src:"img/airdrop.png",alt:"list"}),"AirDrop"]}),Object(m.jsxs)("li",{className:"dropdown-list-item",children:[Object(m.jsx)("img",{className:"dropdown-list-img",src:"img/messages.png",alt:"list"}),"\u041f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f"]}),Object(m.jsxs)("li",{className:"dropdown-list-item",children:[Object(m.jsx)("img",{className:"dropdown-list-img",src:"img/notes.png",alt:"list"}),"\u041d\u0430\u0433\u0430\u0434\u0443\u0432\u0430\u043d\u043d\u044f"]}),Object(m.jsxs)("li",{className:"dropdown-list-item",children:[Object(m.jsx)("img",{className:"dropdown-list-img",src:"img/more.png",alt:"list"}),"\u0411\u0456\u043b\u044c\u0448\u0435"]})]})})]})},O=function(e){var t=e.onDeleteNote,s=e.activeNote,i=e.onAddNote,a=e.term,c=e.searchKeyword,n=e.notes,l=e.searchResults,r=e.setSearchResults;return Object(m.jsxs)("div",{className:"header",children:[Object(m.jsxs)("div",{className:"app-sidebar-header",children:[Object(m.jsx)("div",{className:"list-view",children:Object(m.jsx)(d.b,{to:"/list-view",children:Object(m.jsx)("img",{className:"sidebar-img",src:"img/sidebar-list.png",alt:"list"})})}),Object(m.jsx)("div",{className:"gallery-view",children:Object(m.jsx)(d.b,{to:"/gallery-view",children:Object(m.jsx)("img",{className:"sidebar-img",src:"img/sidebar-tabs.png",alt:"tabs"})})}),Object(m.jsx)("div",{className:"sidebar-remove",onClick:function(){return t(s)},children:Object(m.jsx)("img",{className:"sidebar-img",src:"img/sidebar-remove.png",alt:"remove"})})]}),Object(m.jsxs)("div",{className:"main-part-header",children:[Object(m.jsx)("div",{className:"add-button",onClick:i,children:Object(m.jsx)("img",{className:"addbutton-img",src:"img/addButton.png",alt:"tabs"})}),Object(m.jsx)("div",{className:"dropdown-panel",children:Object(m.jsx)(h,{})}),Object(m.jsx)("div",{className:"search-panel",children:Object(m.jsx)(u,{term:a,searchKeyword:c,notes:n,searchResults:l,setSearchResults:r})})]})]})},x=s(15),v=s(23),N=function(e){var t=e.activeNote,s=e.onUpdateNote,i=function(e,i){var a;s(Object(v.a)(Object(v.a)({},t),{},(a={},Object(x.a)(a,e,i),Object(x.a)(a,"lastModified",Date.now()),a)))};return t?Object(m.jsx)("div",{className:"main-edit-panel",children:Object(m.jsxs)("div",{className:"app-main-note-edit",children:[Object(m.jsx)("div",{className:"last-modified",children:new Date(t.lastModified).toLocaleDateString("uk-UA",{hour:"2-digit",minute:"2-digit"})}),Object(m.jsx)("input",{type:"text",id:"title",value:t.title,onChange:function(e){return i("title",e.target.value)},autoFocus:!0,placeholder:"Write title... "}),Object(m.jsx)("textarea",{name:"",id:"body",rows:"5",placeholder:"Write apple notes here...",value:t.body,onChange:function(e){return i("body",e.target.value)}})]})}):Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"no-active-note",children:"No note selected"})})},g=function(e){var t=e.activeNote,s=e.setActiveNote,i=e.filteredNotes;return Object(m.jsx)("div",{className:"gallery-view",children:Object(m.jsx)("div",{className:"gallery-notes",children:i.map((function(e){return Object(m.jsxs)("div",{className:"app-gallery-note ".concat(e.id===t&&"active-in-gallery"),onClick:function(){s(e.id)},children:[Object(m.jsx)("div",{className:"app-gallery-text",children:Object(m.jsx)("p",{children:e.body&&e.body.substr(0,350)+"..."})}),Object(m.jsx)("div",{className:"gallery-note-title",children:Object(m.jsx)("strong",{children:e.title})}),Object(m.jsx)("div",{className:"hour-exc",children:Object(m.jsx)("small",{className:"note-meta",children:new Date(e.lastModified).toLocaleTimeString("uk-UA",{hour:"2-digit",minute:"2-digit"})})})]})}))})})},f=s(24);s(28);f.a.default.initializeApp({apiKey:"AIzaSyB3ReM_QhFAT2F3GQFe9WB6NXwIDpgaq_8",authDomain:"apple-notes-demo.firebaseapp.com",projectId:"apple-notes-demo",storageBucket:"apple-notes-demo.appspot.com",messagingSenderId:"469273745550",appId:"1:469273745550:web:3a14d6efb4b6c0495991df"});f.a,s(43);var w=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),s=t[0],a=t[1],c=Object(i.useState)(!1),n=Object(r.a)(c,2),j=n[0],u=n[1],h=Object(i.useState)(""),x=Object(r.a)(h,2),v=x[0],f=x[1],w=function(){var e={id:b()(),title:"",body:"",lastModified:Date.now()};a([e].concat(Object(l.a)(s)))},y=function(e){var t=s.map((function(t){return t.id===j?e:t}));a(t)},A=function(){return s.find((function(e){return e.id===j}))},S=s.filter((function(e){return Object.values(e).join("").toLocaleLowerCase().includes(v.toLowerCase())}));return Object(m.jsx)(d.a,{children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(O,{onAddNote:w,activeNote:j,onDeleteNote:function(e){a(s.filter((function(t){return t.id!==e})))},searchResults:v,setSearchResults:f}),Object(m.jsxs)(o.d,{children:[Object(m.jsx)(o.b,{exact:!0,path:"/",children:Object(m.jsx)(o.a,{to:"/list-view"})}),Object(m.jsx)(o.b,{exact:!0,path:"/list-view",children:Object(m.jsxs)("div",{className:"list-view",children:[Object(m.jsx)(p,{notes:s,activeNote:j,setActiveNote:u,filteredNotes:S}),Object(m.jsx)(N,{activeNote:A(),onUpdateNote:y,onAddNote:w})]})}),Object(m.jsx)(o.b,{path:"/gallery-view",children:Object(m.jsx)(g,{notes:s,activeNote:j,setActiveNote:u,filteredNotes:S})}),Object(m.jsx)(o.b,{path:"/gallery-view/:id",children:Object(m.jsx)(N,{activeNote:A(),onUpdateNote:y,onAddNote:w})})]})]})})};n.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(w,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.fdf4fa27.chunk.js.map