(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},28:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(1),r=c.n(s),n=c(11),l=c.n(n),i=(c(21),c(4));c(22);var d={navbar:{}},o=function(){return Object(a.jsx)("nav",{className:"navbar navbar-light bg-light justify-content-center shadow fixed-top py-1",style:d.navbar,children:Object(a.jsx)("div",{className:"container justify-content-center ",children:Object(a.jsx)("a",{className:"navbar-brand text-center justify-content-center",style:{color:"#faa",fontSize:26},href:"/",children:Object(a.jsxs)("h4",{className:"mb-0",style:{fontSize:25,fontWeight:"bolder",color:"#686"},children:["Short",Object(a.jsx)("img",{src:"logo1.png",width:"30",height:"30",className:"d-inline-block align-top",alt:""}),"Link"]})})})})},j=c(3),b=c(15),h=c(12),m=c.n(h);var x=function(e){var t,c=e.action,r=Object(s.useState)(""),n=Object(i.a)(r,2),l=n[0],d=n[1],o=Object(s.useState)(),h=Object(i.a)(o,2),x=h[0],O=h[1],u=Object(s.useState)(),p=Object(i.a)(u,2),f=p[0],N=p[1],v=Object(s.useState)(!1),g=Object(i.a)(v,2),y=g[0],k=g[1],w="alert alert-success mb-2",S="alert alert-warning mb-2",U=function(){var e={orginalUrl:l,shortUrl:Object(b.a)(8)};fetch(j.b,{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){e.response.ok?(c.update(e.response.ok),N(e.data),k(!1),O(e.response),d("")):O(e.response)})).catch((function(e){d(""),k(!1),O({ok:!1,message:"Error Internet connection!"})}))};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"card shadow mb-2",children:Object(a.jsxs)("div",{className:"card-body py-2 px-2 ",children:[Object(a.jsx)("h4",{style:{color:"#686"},className:"text-center",children:"Make Your URL Short!"}),Object(a.jsxs)("div",{className:"row m-auto mb-2",children:[Object(a.jsx)("div",{className:"col-lg-10 col-md-10 col-sm-10 m-auto",children:Object(a.jsx)("div",{className:"form-group mb-1",children:Object(a.jsx)("input",{type:"url",className:"form-control form-control-lg",id:"url",placeholder:"Enter URL here..",value:l,onChange:function(e){d(e.target.value)}})})}),Object(a.jsx)("div",{className:"col-lg-2 col-md-2 col-sm-2 text-center pt-1",children:Object(a.jsxs)("button",{className:"btn btn-info m-auto ",onClick:function(){/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/.test(l)?(k(!0),U()):(alert("Please enter a valid URL!"),d(""))},children:["SHORT ",Object(a.jsx)("i",{className:"fa fa-link"})]})})]})]})}),Object(a.jsx)(a.Fragment,{children:x&&Object(a.jsxs)("div",{className:x.ok?w:S,role:"alert",children:[x.message,Object(a.jsx)("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",onClick:function(){O()},children:Object(a.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})}),y?Object(a.jsx)("div",{className:"row mx-0",children:Object(a.jsx)("div",{className:"col m-auto ",children:Object(a.jsx)(m.a,{className:"m-auto",type:"bars",color:"#4DD637"})})}):f&&(t=f,Object(a.jsx)("div",{className:"card shadow",children:Object(a.jsx)("div",{className:"card-body py-2 px-2",children:Object(a.jsxs)("div",{className:"row mx-0",children:[Object(a.jsx)("div",{className:"col-6 px-1",children:Object(a.jsx)("h6",{className:"text-center mb-0 text-danger",children:Object(a.jsx)("a",{target:"_blank",href:t.orginalUrl,rel:"noreferrer",children:t.orginalUrl})})}),Object(a.jsx)("div",{className:"col-6 px-1 ",children:Object(a.jsx)("h6",{className:"text-center mb-0",children:Object(a.jsx)("a",{target:"_blank",href:j.a+t.shortUrl,rel:"noreferrer",children:j.a+t.shortUrl})})})]})})},t.id))]})};var O=function(e){var t=e.data,c=e.action,s=e.error;return Object(a.jsx)("div",{children:t.length>0?t.slice(0).reverse().map((function(e,t){return Object(a.jsx)("div",{className:"card shadow",children:Object(a.jsx)("div",{className:"card-body py-1 px-1",children:Object(a.jsxs)("div",{className:"row mx-0",children:[Object(a.jsx)("div",{className:"col-5 px-1",children:Object(a.jsx)("h6",{className:"text-center mb-0 text-danger",children:Object(a.jsx)("a",{target:"_blank",href:e.orginalUrl,rel:"noreferrer",children:e.orginalUrl})})}),Object(a.jsx)("div",{className:"col-5 px-1 ",children:Object(a.jsx)("h6",{className:"text-center mb-0",children:Object(a.jsx)("a",{target:"_blank",href:j.a+e.shortUrl,rel:"noreferrer",onClick:function(){c.update(!0)},children:j.a+e.shortUrl})})}),Object(a.jsx)("div",{className:"col-2 px-1",children:Object(a.jsx)("h4",{className:"text-center mb-0",children:Object(a.jsx)("span",{className:"badge badge-success",children:e.clicks})})})]})})},t)})):s?Object(a.jsx)("div",{className:"card shadow",children:Object(a.jsx)("div",{className:"card-body py-1 px-1",children:Object(a.jsx)("div",{className:"row mx-0",children:Object(a.jsx)("div",{className:"col px-1",children:Object(a.jsx)("h5",{className:"text-center mb-0 text-danger",children:"Internet Connection Error!"})})})})}):Object(a.jsx)("div",{className:"card shadow",children:Object(a.jsx)("div",{className:"card-body py-1 px-1",children:Object(a.jsx)("div",{className:"row mx-0",children:Object(a.jsx)("div",{className:"col px-1",children:Object(a.jsx)("h5",{className:"text-center mb-0 text-secondary",children:"-- No data found --"})})})})})})};var u=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),c=t[0],r=t[1],n=Object(s.useState)(!0),l=Object(i.a)(n,2),d=l[0],b=l[1],h=Object(s.useState)(!1),m=Object(i.a)(h,2),u=m[0],p=m[1];Object(s.useEffect)((function(){d&&fetch(j.a).then((function(e){return e.json()})).then((function(e){b(!1),r(e.data)})).catch((function(e){p(!0)}))}));var f=function(e){b(e)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(o,{}),Object(a.jsx)("div",{className:"row mt-5 pt-2 mx-0",children:Object(a.jsx)("div",{className:"col-lg-7 col-md-8 col-sm-9 m-auto",children:Object(a.jsx)(x,{action:{update:f.bind(this)}})})}),Object(a.jsx)("div",{className:"row mt-2 mx-0",children:Object(a.jsxs)("div",{className:"col-lg-7 col-md-8 col-sm-9 m-auto",children:[Object(a.jsxs)("button",{className:"btn btn-secondary m-auto shadow",type:"button","data-toggle":"collapse","data-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample",children:["List of Short Links"," ",Object(a.jsx)("span",{style:{fontSize:18},className:"badge badge-info",children:c.length})]}),Object(a.jsx)("div",{className:"collapse my-3",id:"collapseExample",children:Object(a.jsxs)("div",{className:"card p-2 shadow",children:[Object(a.jsxs)("div",{className:"row mx-0 mb-2",children:[Object(a.jsx)("div",{className:"col-5 px-1",children:Object(a.jsx)("h5",{className:"text-center mb-0",children:"Url"})}),Object(a.jsx)("div",{className:"col-5 px-1 ",children:Object(a.jsx)("h5",{className:"text-center mb-0",children:"Short"})}),Object(a.jsx)("div",{className:"col-2 px-1",children:Object(a.jsx)("h5",{className:"text-center mb-0",children:"Click"})})]}),Object(a.jsx)(O,{data:c,action:{update:f.bind(this)},error:u})]})})]})})]})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,29)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;c(e),a(e),s(e),r(e),n(e)}))},f=c(14);l.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(f.a,{children:Object(a.jsx)(u,{})})}),document.getElementById("root")),p()},3:function(e){e.exports=JSON.parse('{"a":"https://pm-url.herokuapp.com/","b":"https://pm-url.herokuapp.com/submit"}')}},[[28,1,2]]]);
//# sourceMappingURL=main.52578061.chunk.js.map