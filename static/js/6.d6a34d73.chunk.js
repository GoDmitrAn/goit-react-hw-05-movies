"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[6],{509:function(e,t,n){n.d(t,{M:function(){return p},k:function(){return h}});var r=n(861),a=n(885),i=n(687),s=n.n(i),c=n(791),u=n(44),o=n(612),l=n(689),d=n(184),f="https://api.themoviedb.org/3/trending/movie/week",p="https://image.tmdb.org/t/p/w500",h=function(){var e=(0,l.TH)(),t=(0,c.useState)(""),n=(0,a.Z)(t,2),i=n[0],h=n[1],m=(0,c.useState)(null),x=(0,a.Z)(m,2),v=x[0],g=x[1];return(0,c.useEffect)((function(){var e=new AbortController;function t(){return(t=(0,r.Z)(s().mark((function t(){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,u.ZP)(f,{signal:e.signal,params:{api_key:"8dd972e538f10daa134bd51a1d5f9487"}});case 3:n=t.sent,h(n.data.results),g(null),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0),g("Sorry, please reload");case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){e.abort()}}),[]),(0,d.jsx)("div",{children:i.length>0&&(0,d.jsx)(o.a,{children:i.map((function(t){return(0,d.jsxs)(o._,{to:"movies/".concat(t.id),state:{from:e},children:[(0,d.jsx)("img",{src:p+t.poster_path,alt:t.title,loading:"lazy"}),(0,d.jsx)("h2",{children:t.title})]},t.id)}))})||v&&(0,d.jsx)("div",{children:v})})}},612:function(e,t,n){n.d(t,{_:function(){return o},a:function(){return u}});var r,a,i=n(168),s=n(934),c=n(731),u=s.Z.ul(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 25px;\n  padding-left: 0;\n  margin-left: 0;\n  width: 100%;\n"]))),o=(0,s.Z)(c.rU)(a||(a=(0,i.Z)(["\n  display: block;\n  background-color: #f1f2f1;\n  text-align: center;\n  flex-basis: 280px;\n  text-decoration: none;\n  & img {\n    max-width: 100%;\n  }\n"])))},6:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(861),a=n(885),i=n(687),s=n.n(i),c=n(44),u=n(184),o=function(e){var t=e.userHandleSubmit;return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=e.currentTarget;t(n.elements.usersearch.value)},children:[(0,u.jsx)("input",{type:"text",name:"usersearch"}),(0,u.jsx)("button",{type:"submit",children:"Search"})]})})},l=n(509),d=n(612),f=n(791),p=n(731),h=n(689),m=function(){var e,t=(0,p.lr)(),n=(0,a.Z)(t,2),i=n[0],m=n[1],x=null!==(e=i.get("usersearch"))&&void 0!==e?e:"",v=(0,f.useState)([]),g=(0,a.Z)(v,2),b=g[0],j=g[1],k=(0,h.TH)();return(0,f.useEffect)((function(){if(""!==x){var e=new AbortController;return function(){t.apply(this,arguments)}(),function(){e.abort()}}function t(){return(t=(0,r.Z)(s().mark((function t(){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,c.ZP)("https://api.themoviedb.org/3/search/movie",{signal:e.signal,params:{api_key:"8dd972e538f10daa134bd51a1d5f9487",query:x}});case 3:n=t.sent,j(n.data.results),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}j([])}),[x]),(0,u.jsxs)("main",{children:[(0,u.jsx)(o,{userHandleSubmit:function(e){m({usersearch:e})}}),b.length>0&&(0,u.jsx)(d.a,{children:b.map((function(e){return(0,u.jsxs)(d._,{to:"".concat(e.id),state:{from:k},children:[(0,u.jsx)("img",{src:l.M+e.poster_path,alt:e.title,loading:"lazy"}),(0,u.jsx)("h2",{children:e.title})]},e.id)}))})]})}}}]);
//# sourceMappingURL=6.d6a34d73.chunk.js.map