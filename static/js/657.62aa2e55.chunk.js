"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[657],{8934:function(A,e,t){t.d(e,{PM:function(){return o},cu:function(){return s},dB:function(){return u},au:function(){return l},jP:function(){return p}});var r=t(5861),n=t(7757),a=t.n(n),c=t(4569),i=t.n(c)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"9f2bc6dc8b2f46ed6de79a15158912b2"}}),o=function(){var A=(0,r.Z)(a().mark((function A(e){var t,r;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,i.get("/trending/movie/week");case 2:return t=A.sent,r=t.data,A.abrupt("return",r);case 5:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}(),s=function(){var A=(0,r.Z)(a().mark((function A(e){var t,r,n,c,o;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return t=e.page,r=void 0===t?1:t,n=e.query,A.next=3,i.get("/search/movie",{params:{query:n,page:r}});case 3:return c=A.sent,o=c.data,A.abrupt("return",o);case 6:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}(),u=function(){var A=(0,r.Z)(a().mark((function A(e){var t,r;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,i.get("/movie/".concat(e));case 2:return t=A.sent,r=t.data,A.abrupt("return",r);case 5:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}(),l=function(){var A=(0,r.Z)(a().mark((function A(e){var t,r;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,i.get("/movie/".concat(e,"/credits"));case 2:return t=A.sent,r=t.data,A.abrupt("return",r);case 5:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}(),p=function(){var A=(0,r.Z)(a().mark((function A(e){var t,r;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,i.get("/movie/".concat(e,"/reviews"));case 2:return t=A.sent,r=t.data,A.abrupt("return",r);case 5:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}()},9285:function(A,e,t){t.d(e,{Z:function(){return v}});var r=t(501),n=t(2800),a="movieCard_image__ZdylJ",c="movieCard_link__KhsCq",i="movieCard_title__bUzDZ",o="movieCard_movie__4uaSN",s=t(184),u=function(A){var e=A.movie,t=void 0===e?{}:e,u=A.location;return(0,s.jsxs)("li",{className:o,children:[(0,s.jsx)(r.rU,{state:{from:u},className:c,to:"/movies/".concat(t.id),children:t.poster_path?(0,s.jsx)("img",{className:a,src:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),alt:t.title}):(0,s.jsx)("img",{className:a,src:n,alt:t.title})}),(0,s.jsx)("p",{className:i,children:t.title})]},t.id)},l=t(5067),p="moviesList_section__BcPLV",f="moviesList_title__UDpFK",m="moviesList_moviesList__A7Eqi",v=function(A){var e=A.data,t=A.location,r=A.title,n=void 0===r?"Trending this week":r,a=e.movies,c=e.loading,i=a.map((function(A){return(0,s.jsx)(u,{movie:A,location:t},A.id)}));return(0,s.jsxs)("div",{className:p,children:[(0,s.jsx)("h1",{className:f,children:n}),(0,s.jsx)("ul",{className:m,children:i}),c&&(0,s.jsx)(l.Z,{})]})}},1657:function(A,e,t){t.r(e),t.d(e,{default:function(){return w}});var r=t(8683),n=t(5861),a=t(885),c=t(7757),i=t.n(c),o=t(2791),s=t(501),u=t(6871),l=t(8934),p=t(577),f="searchbar_searchbar__TJDuV",m="searchbar_form__wyTB6",v="searchbar_button__MjUr+",d="searchbar_buttonLabel__WA8WX",h="searchbar_input__G1Npx",g=t(184),b=function(A){var e=A.onSubmit,t=(0,o.useState)(""),r=(0,a.Z)(t,2),n=r[0],c=r[1];console.log(e);return(0,g.jsx)("header",{className:f,children:(0,g.jsxs)("form",{className:m,onSubmit:function(A){A.preventDefault(),""!==n.trim()?(e(n),c("")):p.Am.info("Please enter your query!")},children:[(0,g.jsx)("button",{type:"submit",className:v,children:(0,g.jsx)("span",{className:d,children:"Search"})}),(0,g.jsx)("input",{className:h,onChange:function(A){var e=A.target.value;c(e.toLowerCase())},value:n,name:"search",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},x=t(9285),_=t(5067),j=function(){var A=(0,o.useState)({movies:[],loading:!1,error:null}),e=(0,a.Z)(A,2),t=e[0],c=e[1],p=(0,s.lr)(),f=(0,a.Z)(p,2),m=f[0],v=f[1],d=m.get("query"),h=m.get("page"),j=(0,u.TH)();(0,o.useEffect)((function(){var A=function(){var A=(0,n.Z)(i().mark((function A(){var e,t;return i().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return c((function(A){return(0,r.Z)((0,r.Z)({},A),{},{loading:!0})})),A.prev=1,A.next=4,(0,l.cu)({page:h,query:d});case 4:e=A.sent,t=e.results,c((function(A){return(0,r.Z)((0,r.Z)({},A),{},{movies:t,loading:!1})})),A.next=12;break;case 9:A.prev=9,A.t0=A.catch(1),c((function(e){return(0,r.Z)((0,r.Z)({},e),{},{loading:!1,error:A.t0})}));case 12:case"end":return A.stop()}}),A,null,[[1,9]])})));return function(){return A.apply(this,arguments)}}();d&&A()}),[d,h]);var w=t.error,y=t.movies,E=t.loading;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(b,{onSubmit:function(A){return v({query:A,page:1})}}),d&&Boolean(y.length)&&(0,g.jsx)(x.Z,{data:t,location:j,title:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u043e\u0438\u0441\u043a\u0430"}),!y.length&&d&&!E&&!w&&(0,g.jsxs)("p",{children:["\u041f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 ",d," \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"]}),E&&(0,g.jsx)(_.Z,{})]})},w=function(){return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(j,{})})}},2800:function(A){A.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNEBCAgICAkICQoKCQ0ODA4NExEQEBETHBQWFBYUHCsbHxsbHxsrJi4lIyUuJkQ1Ly81RE5CPkJOX1VVX3dxd5yc0f/CABEIARgA0gMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//EABQQAQAAAAAAAAAAAAAAAAAAAJD/2gAIAQEAAT8AbH//xAAUEQEAAAAAAAAAAAAAAAAAAABw/9oACAECAQE/AHz/xAAUEQEAAAAAAAAAAAAAAAAAAABw/9oACAEDAQE/AHz/2Q=="},8683:function(A,e,t){function r(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function n(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,r)}return t}function a(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?n(Object(t),!0).forEach((function(e){r(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}t.d(e,{Z:function(){return a}})}}]);
//# sourceMappingURL=657.62aa2e55.chunk.js.map