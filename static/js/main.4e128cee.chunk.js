(this["webpackJsonpusers-table"]=this["webpackJsonpusers-table"]||[]).push([[0],{45:function(e,a,t){e.exports=t(61)},55:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(14),c=t.n(l),s=t(26),u=t(7),o=t(19),i=t.n(o),m=t(6),E=t(37),d=t(65),N=t(66),f=t(38),b=t.n(f),p=(t(54),t(55),t(70)),A=t(69),O=t(68),v=t(39),g=function(e){var a=e.dbInfo,t=e.searchQuery;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{bg:"dark",variant:"dark",id:"header__navbar"},r.a.createElement(p.a.Brand,{href:"#home"},"INDEXEDDB API"),r.a.createElement(A.a,{className:"mr-auto"},r.a.createElement(A.a.Link,{href:"#home"},"indexedDB: ",a&&a.name?"CONNECTED":"CONNECTING..."," "),r.a.createElement(A.a.Link,{href:"#features"},"Version: ",a&&a.verno)),r.a.createElement(O.a,{inline:!0,onSubmit:function(e){e.preventDefault()}},r.a.createElement(v.DebounceInput,{debounceTimeout:700,onChange:t,type:"text",placeholder:"Search by name",className:"mr-sm-2"}))))},S=t(43),h=t(63),L={FIRST_NAME:"First Name",LAST_NAME:"Last Name",PHONE:"Phone +38",GENDER:"Gender",AGE:"Age",_id:""},C={isValidFirstName:null,isValidLastName:null,isValidPhone:null,isValidGender:null,isValidAge:null},D=function(e){var a=e.getUsersInfo,t=e.onSubmitUsersData,l=e.userState,c=e.getValidationReport,s=e.isSubmit,o=Object(n.useState)(C),i=Object(u.a)(o,2),E=i[0],d=i[1],N=l.FIRST_NAME,f=l.LAST_NAME,b=l.PHONE,p=l.GENDER,A=l.AGE,v=function(e){var a=e.target,t=a.value,n="";switch(a.name){case"FIRST_NAME":(n=t.toLowerCase().replace(/[a-z]/g,"").length)>0||0===t.length?d(Object(m.a)({},E,{isValidFirstName:!1})):d(Object(m.a)({},E,{isValidFirstName:!0}));break;case"LAST_NAME":(n=t.toLowerCase().replace(/[a-z]/g,"").length)>0||0===t.length?d(Object(m.a)({},E,{isValidLastName:!1})):d(Object(m.a)({},E,{isValidLastName:!0}));break;case"PHONE":0!==(n=t.toLowerCase().replace(/[0-9]/g,"").length)||0===n&&t.length>10||0===n&&t.length<5?d(Object(m.a)({},E,{isValidPhone:!1})):d(Object(m.a)({},E,{isValidPhone:!0}));break;case"GENDER":d("0"!==t?Object(m.a)({},E,{isValidGender:!0}):Object(m.a)({},E,{isValidGender:!1}));break;case"AGE":d(+t<1||+t>100?Object(m.a)({},E,{isValidAge:!1}):Object(m.a)({},E,{isValidAge:!0}))}return E},g=E.isValidFirstName,D=E.isValidAge,j=E.isValidGender,_=E.isValidLastName,y=E.isValidPhone;return r.a.createElement(O.a,{onSubmit:t,className:"w-75 p-3 mx-auto form_custom",border:"primary"},r.a.createElement(O.a.Row,null,r.a.createElement(O.a.Group,{as:S.a},r.a.createElement(O.a.Label,null,L.FIRST_NAME),r.a.createElement(O.a.Control,{className:null===g?null:g?"success":"warning",onBlur:v,onChange:a,name:"FIRST_NAME",value:N,type:"text",placeholder:"".concat(L.FIRST_NAME.toLowerCase())}),r.a.createElement(O.a.Text,{className:"text-muted"})),r.a.createElement(O.a.Group,{as:S.a},r.a.createElement(O.a.Label,null,L.LAST_NAME),r.a.createElement(O.a.Control,{className:null===_?null:_?"success":"warning",onBlur:v,onChange:a,value:f,name:"LAST_NAME",type:"text",placeholder:"".concat(L.LAST_NAME.toLowerCase())}),r.a.createElement(O.a.Text,{className:"text-muted"}))),r.a.createElement(O.a.Row,null,r.a.createElement(O.a.Group,{as:S.a},r.a.createElement(O.a.Label,null,L.GENDER),r.a.createElement(O.a.Control,{className:null===j?null:j?"success":"warning",value:p,onChange:function(e){a(e),v(e)},as:"select",name:"GENDER"},r.a.createElement("option",{value:0},"Choose"),r.a.createElement("option",{value:"male"},"male"),r.a.createElement("option",{value:"female"},"female"))),r.a.createElement(O.a.Group,{as:S.a},r.a.createElement(O.a.Label,null,L.AGE),r.a.createElement(O.a.Control,{className:null===D?null:D?"success":"warning",onChange:function(e){a(e),v(e)},type:"number",name:"AGE",value:A,placeholder:"".concat(L.AGE.toLowerCase()),min:1,max:100}),r.a.createElement(O.a.Text,{className:"text-muted"}))),r.a.createElement(S.a,{sm:4,className:"m-sm-auto"},r.a.createElement(O.a.Group,null,r.a.createElement(O.a.Label,null,L.PHONE.replace(/[^a-zA-Z]/g,"")),r.a.createElement(O.a.Control,{className:null===y?null:y?"success":"warning",onChange:a,onBlur:v,value:b,name:"PHONE",type:"text",placeholder:"".concat(L.PHONE.toLowerCase().replace(/phone/,""))}),r.a.createElement(O.a.Text,{className:"text-muted"}))),r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{onClick:function(){c(E),Object.values(E).every(Boolean)&&d(C)},variant:"primary",type:"submit"},"Submit"),null===s?null:!s&&r.a.createElement("span",{className:"alert alert-primary",role:"alert"},"You should fill the form before submit")))},j=t(23),_=t(64),y=t(67),T=function(e){var a=e.userData,t=e.getConfirmDeleteUser,l=Object(n.useState)({CANCEL:"",DELETE:""}),c=Object(u.a)(l,2),s=c[0],o=c[1],i=s.CANCEL,m=s.DELETE,E=a.firstName,d=a.lastName,N=a.id;return t(i,m,N),r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a.Dialog,{className:"fixed-top"},r.a.createElement(y.a.Header,null,r.a.createElement(y.a.Title,null,"Please confirm deleting user from IndexedDB")),r.a.createElement(y.a.Body,null,r.a.createElement("p",null,"NAME: ",E," ",d),r.a.createElement("p",null,"ID: ",N)),r.a.createElement(y.a.Footer,null,r.a.createElement(h.a,{onClick:function(){o({CANCEL:"CANCEL"})},variant:"secondary"},"Cancel"),r.a.createElement(h.a,{onClick:function(){o({DELETE:"DELETE"})},variant:"primary"},"Delete"))))},R={selected:!1,id:null,firstName:null,lastName:null},w=function(e){var a=e.userDataBase,t=e.deleteUser,l=e.queryParam,c=Object(n.useState)(R),s=Object(u.a)(c,2),o=s[0],i=s[1],E=Object(n.useState)({isClicked:!1,users:[]}),d=Object(u.a)(E,2),N=d[0],f=d[1],b=a.ALL_USERS;Object(n.useEffect)((function(){f(Object(m.a)({},N,{users:b}))}),[b]);var p=N.users,A=N.isClicked,O=""===l?p:p.filter((function(e){return(e.FIRST_NAME+e.LAST_NAME).toLowerCase().includes(l.toLowerCase())})),v=o.selected;return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",responsive:"sm",id:"table",className:"table-custom table-responsive"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),Object.keys(L).map((function(e){return r.a.createElement("th",{key:e},e.replace(/_/g," "),"\u2003",r.a.createElement(h.a,{className:"btn_search",onClick:function(){return function(e){switch(!isNaN(+b[0][e])){case!0:f(A?{isClicked:!A,users:Object(j.a)(b).sort((function(a,t){return+a[e]-+t[e]}))}:{isClicked:!A,users:Object(j.a)(b).sort((function(a,t){return+t[e]-+a[e]}))});break;case!1:f(A?{isClicked:!A,users:Object(j.a)(b).sort((function(a,t){return t[e].localeCompare(a[e])}))}:{isClicked:!A,users:Object(j.a)(b).sort((function(a,t){return a[e].localeCompare(t[e])}))});break;default:f(Object(m.a)({},N,{users:b}))}}(e)},variant:"outline-info"},"Sort ",r.a.createElement("i",{className:"fas fa-sort"})))})))),r.a.createElement("tbody",null,O.map((function(e,a){var t=e._id,n=e.FIRST_NAME,l=e.LAST_NAME,c=e.PHONE,s=e.GENDER,u=e.AGE;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,++a),r.a.createElement("td",null,n),r.a.createElement("td",null,l),r.a.createElement("td",null,c),r.a.createElement("td",null,s),r.a.createElement("td",null,u),r.a.createElement("td",null,t,r.a.createElement(h.a,{onClick:function(){return e=t,a=n,r=l,void i(Object(m.a)({},o,{selected:!0,id:e,firstName:a,lastName:r}));var e,a,r},variant:"info"},"delete user")))})))),v&&r.a.createElement(T,{userData:o,getConfirmDeleteUser:function(e,a,n){e?i(R):a&&(t(n),i(R))}}))},G={FIRST_NAME:"",LAST_NAME:"",PHONE:"",GENDER:"",AGE:""},k={ALL_USERS:[],DB_READY_INFO:{}};var x=function(){Object(n.useEffect)((function(){!function(){var e,a;i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(x.on("ready",(function(){return x})));case 2:return e=t.sent,t.next=5,i.a.awrap(x.userDataBase.toArray());case 5:a=t.sent,setTimeout((function(){p(Object(m.a)({},f,{ALL_USERS:a,DB_READY_INFO:e}))}),1500);case 7:case"end":return t.stop()}}))}()}),[]);var e=Object(n.useState)(G),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(k),o=Object(u.a)(c,2),f=o[0],p=o[1],A=Object(n.useState)(null),O=Object(u.a)(A,2),v=O[0],S=O[1],h=Object(n.useState)(null),L=Object(u.a)(h,2),C=L[0],j=L[1],_=Object(n.useState)(""),y=Object(u.a)(_,2),T=y[0],R=y[1],x=new E.a("ReactDexie");x.version(1).stores({userDataBase:"_id, firstName, lastName, phone, gender, age"}),x.on("ready",(function(){return x.userDataBase.count((function(e){e>0?setTimeout((function(){S(!1),console.log("Already populated")}),1500):setTimeout((function(){S(!0),console.log("Database is empty")}),1500)}))})),x.open().catch((function(e){console.log(e.stack||e)}));var F={},I=f.ALL_USERS,B=f.DB_READY_INFO;return r.a.createElement(d.a,null,r.a.createElement(g,{dbInfo:B,searchQuery:function(e){var a=e.target.value;R(a)}}),r.a.createElement(D,{getUsersInfo:function(e){l(Object(m.a)({},t,Object(s.a)({},e.target.name,e.target.value)))},onSubmitUsersData:function(e){e.preventDefault();var a=!Object.values(t).some((function(e){return""===e})),n=Object.values(F).every(Boolean);if(a&&n){var r=t.FIRST_NAME,c=t.LAST_NAME,s=t.PHONE,u=t.GENDER,o=t.AGE,E={_id:b()(),FIRST_NAME:r,LAST_NAME:c,PHONE:s,GENDER:u,AGE:o};x.userDataBase.add(E).then((function(){var e;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.awrap(x.userDataBase.toArray());case 2:e=a.sent,p(Object(m.a)({},f,{ALL_USERS:e}));case 4:case"end":return a.stop()}}))})),l(G),j(!0)}else j(!1)},userState:t,getValidationReport:function(e){F=e},isSubmit:C}),r.a.createElement(r.a.Fragment,null,v?r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("span",null,"Database is empty...")):I.length>0?r.a.createElement(w,{userDataBase:f,queryParam:T,deleteUser:function(e){var a;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return x.userDataBase.delete(e),t.next=3,i.a.awrap(x.userDataBase.toArray());case 3:a=t.sent,p(Object(m.a)({},f,{ALL_USERS:a}));case 5:case"end":return t.stop()}}))}}):r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement(N.a,{animation:"grow",variant:"primary"}))))};c.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.4e128cee.chunk.js.map