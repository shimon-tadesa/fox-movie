(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{33:function(e,t,a){e.exports=a(64)},38:function(e,t,a){},39:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(30),c=a.n(r),l=(a(38),a(8)),i=a(9),s=a(11),u=a(10),m=a(12),p=a(13),h=a(6),d=(a(39),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).email="",a.password="",a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Login-User"},o.a.createElement("h1",null,"Login Page"),o.a.createElement("input",{type:"email",required:"required",placeholder:"email"}),o.a.createElement("input",{type:"password",required:"required",placeholder:"password"}))}}]),t}(n.Component)),v=a(16),b=a.n(v),g=a(17),E=a.n(g),w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(){var e=E.a.get("http://localhost:8080/search").data.movies;console.log(e)},a.state={moviesTop:[],isLoaded:!1,moviesPopular:[],tvShowsTop:[],searchTerm:"",tvShowsPopular:[]},console.log("constructor"),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t,a;return b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.a.awrap(E.a.get("http://localhost:8080/home"));case 2:e=n.sent,t=e.data.movies,console.log(t),console.log("componentDidMount"),a={moviesTop:t,isLoaded:!0,moviesPopular:[],tvShowsTop:[],searchTerm:"",tvShowsPopular:[]},this.setState(a);case 8:case"end":return n.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state.moviesTop.map((function(e,t){return o.a.createElement("div",null,o.a.createElement("h4",{key:t},e.title),o.a.createElement("p",null,e.overview),o.a.createElement("p",null,e.vote_average),o.a.createElement("img",{style:{width:"400px",height:"200px",borderRadius:"5px"},src:"".concat("https://image.tmdb.org/t/p/w500","/").concat(e.poster_path)}),console.log("render"),"}")}));return o.a.createElement("div",{className:"Home"},o.a.createElement("h1",null,"Welcome To Foxx Movie"),o.a.createElement("input",{type:"text",placeholder:"search movie",onChange:this.handleSubmit}),o.a.createElement("button",null,"Search"),e)}}]),t}(n.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(p.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"LinkHead"},o.a.createElement(p.b,{to:"/"},"Home"),o.a.createElement(p.b,{to:"/Login"},"Login"),o.a.createElement(p.b,{to:"/Registr"},"Registr"),o.a.createElement(p.b,{to:"/search_item_results"},"Results")),o.a.createElement(h.c,null,o.a.createElement(h.a,{exact:!0,path:"/",component:w}),o.a.createElement(h.a,{exact:!0,path:"/Login",component:d}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.56b00bb3.chunk.js.map