(this.webpackJsonpmdb=this.webpackJsonpmdb||[]).push([[0],{157:function(e,t,a){e.exports=a(308)},162:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},279:function(e,t,a){},280:function(e,t,a){},281:function(e,t,a){},282:function(e,t,a){},283:function(e,t,a){},284:function(e,t,a){},292:function(e,t,a){},308:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(26),c=a.n(o),i=(a(162),a(36)),s=a(37),l=a(135),u=a(33),p=Object(s.c)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIES":return Object(u.a)({},e,{popMovies:t.payload.map((function(e){return{id:e.id,original_title:e.original_title,poster_path:e.poster_path,overview:e.overview,vote_average:e.vote_average,release_date:e.release_date}}))});default:return e}},movie:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIE":return Object(u.a)({},e,{},t.payload);default:return e}},credits:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CREDITS":return Object(u.a)({},e,{cast:t.payload.cast.map((function(e){return Object(u.a)({},e)}))});default:return e}},person:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PERSON":return Object(u.a)({},e,{},t.payload);default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}}}),m=Object(s.e)(p,{},Object(s.d)(Object(s.a)(l.a))),d=a(40),h=a(38),v=a(14),f=a(15),E=a(17),b=a(16),y=a(18),g=a(24),O=a.n(g),j="e9ecd9753d3ef861ac4dc7577bda8e35",w=a(68),k=(a(169),function(e,t){return e.split(" ").splice(0,t).join(" ")}),_=(a(170),function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(E.a)(this,Object(b.a)(t).call(this,e))).state={},a}return Object(y.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.sqSize,t=(this.props.sqSize-this.props.strokeWidth)/2,a="0 0 ".concat(e," ").concat(e),n=t*Math.PI*2,o=n-n*this.props.percentage/10;return r.a.createElement("svg",{width:this.props.sqSize,height:this.props.sqSize,viewBox:a,className:"circular-progress",style:{minWidth:this.props.sqSize}},r.a.createElement("circle",{className:"circle-background",cx:this.props.sqSize/2,cy:this.props.sqSize/2,r:t,strokeWidth:"".concat(this.props.strokeWidth,"px")}),r.a.createElement("circle",{className:"circle-progress",cx:this.props.sqSize/2,cy:this.props.sqSize/2,r:t,strokeWidth:"".concat(this.props.strokeWidth,"px"),transform:"rotate(-80 ".concat(this.props.sqSize/2," ").concat(this.props.sqSize/2,")"),style:{strokeDasharray:n,strokeDashoffset:o}}),r.a.createElement("text",{className:"circle-text",x:"50%",y:"50%",dy:".3em",textAnchor:"middle"},"".concat(this.props.percentage)))}}]),t}(r.a.Component));_.defaultProps={sqSize:200,percentage:25,strokeWidth:10};var M=function(e){var t=e.movie;return r.a.createElement("article",{className:"moviecard"},r.a.createElement("img",{src:e.src,alt:"",className:"poster"}),r.a.createElement("div",{className:"content"},r.a.createElement("i",{className:"fas fa-arrow-right"}),r.a.createElement("div",{className:"top"},r.a.createElement(_,{percentage:t.vote_average.toFixed(1),sqSize:50,strokeWidth:8}),r.a.createElement("div",{className:"meta-data"},r.a.createElement("h1",null,k(t.original_title,6)),r.a.createElement("p",null,t.release_date.split("-")[0]))),r.a.createElement("p",{className:"overview"},k(t.overview,30)+" . . ."),r.a.createElement("p",{className:"more-info"},"More Info")))},S=(a(171),function(e){return r.a.createElement(d.b,{to:"".concat(e.movie.id)},r.a.createElement(M,{to:"".concat(e.movie.id),src:"http://image.tmdb.org/t/p/w500/".concat(e.movie.poster_path),movie:e.movie}))}),N=function(e){return r.a.createElement("div",{className:"movierow"},e.rowItems.map((function(e,t){return r.a.createElement(S,{key:t,movie:e})})))},x=Object(h.f)((function(e){return r.a.createElement("div",{className:"movielist"},e.movies.map((function(e,t){return r.a.createElement(N,{key:t,rowItems:e})})))})),R=a(316),z=a(314),C=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(E.a)(this,Object(b.a)(t).call(this,e))).state={movies:[],width:window.innerWidth},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(w.a)(a)),a}return Object(y.a)(t,e),Object(f.a)(t,[{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight}),this.setState({movies:this.movieRows()})}},{key:"componentDidMount",value:function(){this.props.getMovies(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentDidUpdate",value:function(e){e.popMovies!==this.props.popMovies&&this.setState({movies:this.movieRows()})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"movieRows",value:function(){if(!this.props.popMovies)return null;for(var e=this.props.popMovies,t=this.props.popMovies.length,a=[],n=this.state.width<=940?1:this.state.width<=1200?2:3,r=0;r<t;r+=n){for(var o=[],c=0;c<n;c++)null!=e[r+c]&&o.push(e[r+c]);a.push(o)}return a}},{key:"render",value:function(){var e=this.state.movies,t=this.props.error;return 0!==e.length?r.a.createElement(x,{movies:e,error:t}):r.a.createElement(R.a,{active:!0},r.a.createElement(z.a,{size:"massive"}))}}]),t}(n.Component),W=function(e){function t(){return Object(v.a)(this,t),Object(E.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.getMovies,a=e.popMovies,n=e.error;return r.a.createElement(C,{getMovies:t,popMovies:a,error:n})}}]),t}(n.Component),D=Object(i.b)((function(e){return{popMovies:e.movies.popMovies,error:e.error}}),{getMovies:function(){return function(e){(function(){var e,t;return O.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O.a.awrap(fetch("https://api.themoviedb.org/3/discover/movie?api_key=".concat(j,"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")));case 2:return e=a.sent,t=e.json(),a.abrupt("return",t);case 5:case"end":return a.stop()}}))})().then((function(t){e({type:"GET_MOVIES",payload:t.results})})).catch((function(t){e({type:"GET_ERRORS",payload:t})}))}}})(W),I=function(e){return r.a.createElement("div",{className:"screen-movielist"},r.a.createElement("h1",null,"Latest Movies"),r.a.createElement(D,e))},T=a(319),q=a(317),G=a(149),P=(a(279),function(e){return r.a.createElement("li",{className:"actorcard",onClick:e.actor.handleOpen},r.a.createElement("div",null,r.a.createElement("img",{src:"http://image.tmdb.org/t/p/w500/".concat(e.actor.profile_path),alt:"actor"}),r.a.createElement("div",{className:"actor-data"},r.a.createElement("h3",null,e.actor.name),r.a.createElement("p",null,e.actor.character))))}),U=(a(280),function(e){var t=e.person;return r.a.createElement("li",{className:"actor-detail"},r.a.createElement("div",null,r.a.createElement("img",{src:"http://image.tmdb.org/t/p/w500/".concat(t.profile_path),alt:"actor"}),r.a.createElement("div",{className:"actor-data"},r.a.createElement("h3",null,t.name),r.a.createElement("p",null,"Place of Birth:"),r.a.createElement("b",null,t.place_of_birth),r.a.createElement("p",null,"Birthday:"),r.a.createElement("b",null,t.birthday),r.a.createElement("p",null,"Popularity:")," ",r.a.createElement("b",null,t.popularity))))}),B=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(E.a)(this,Object(b.a)(t).call(this,e))).state={person:a.props.person},a}return Object(y.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.getPerson(this.props.actor.id)}},{key:"componentDidUpdate",value:function(e){e.person!==this.props.person&&this.setState({person:this.props.person})}},{key:"render",value:function(){var e=this.state.person;return e?r.a.createElement(U,{person:e}):""}}]),t}(n.Component),L=function(e){function t(){return Object(v.a)(this,t),Object(E.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.getPerson,a=e.person,n=e.actor;return r.a.createElement(B,{getPerson:t,person:a,actor:n})}}]),t}(n.Component),F=Object(i.b)((function(e){return{person:e.person}}),{getPerson:function(e){return function(t){(function(e){var t,a;return O.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O.a.awrap(fetch("https://api.themoviedb.org/3/person/".concat(e,"?api_key=").concat(j)));case 2:return t=n.sent,a=t.json(),n.abrupt("return",a);case 5:case"end":return n.stop()}}))})(e).then((function(e){t({type:"GET_PERSON",payload:e})})).catch((function(e){t({type:"GET_ERRORS",payload:e})}))}}})(L),V=a(148),H=(a(281),function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(E.a)(this,Object(b.a)(t).call(this,e))).handleOpen=function(){a.setState((function(e){return{open:!e.open}}))},a.state={open:!0},a}return Object(y.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"myModal",className:"modal",style:{display:this.state.open?"flex":"none"}},this.props.render(this.handleOpen)))}}]),t}(n.Component)),J=(a(282),function(e){return r.a.createElement("div",{className:"modal-template1"},r.a.createElement("span",{onClick:e.handleOpen,className:"close"},"\xd7"),r.a.createElement("div",{className:"modal-body"},e.content))}),A=(a(283),function(e){return r.a.createElement(H,{button:e.button,render:function(t){return r.a.createElement(J,{handleOpen:e.handleOpen,content:e.content})}})});var $=function(e){var t=Object(n.useState)(!1),a=Object(V.a)(t,2),o=a[0],i=a[1],s=function(e){e.preventDefault(),o?document.body.classList.remove("modal-open"):document.body.classList.add("modal-open"),i(!o)};return r.a.createElement(r.a.Fragment,null,c.a.createPortal(o?r.a.createElement(A,Object.assign({},e,{handleOpen:s})):null,document.querySelector("#modal")),r.a.createElement("div",{onClick:s},e.button))},K=function(e){function t(){return Object(v.a)(this,t),Object(E.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.actor;return r.a.createElement(r.a.Fragment,null,r.a.createElement($,{button:r.a.createElement(P,{actor:e}),content:r.a.createElement(F,{actor:e})}))}}]),t}(n.Component),Q=(a(284),function(e){var t=e.selectedMovie,a=e.actors;return r.a.createElement("div",{className:"moviedetails"},r.a.createElement(T.a,{padded:"very",raised:!0},r.a.createElement(q.a.Group,null,r.a.createElement(q.a,null,r.a.createElement(q.a.Image,{src:"http://image.tmdb.org/t/p/w185/".concat(t.poster_path)}),r.a.createElement(q.a.Content,{style:{fontSize:"1.25em"}},r.a.createElement(q.a.Header,{as:"a"},t.original_title),r.a.createElement(q.a.Meta,{style:{fontWeight:"bold"}},"(",t.release_date.split("-")[0],")"),r.a.createElement(q.a.Description,null,t.overview),r.a.createElement(q.a.Extra,null,r.a.createElement(G.a,{size:"large",color:"blue"},t.vote_average,"/10")))))),r.a.createElement("div",{className:"cast-section"},a.slice(0,6).map((function(e,t){return r.a.createElement(K,{key:t,actor:e})}))))}),X=function(e){function t(){return Object(v.a)(this,t),Object(E.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.getCredits(this.getUrlId()),this.props.getMovie(this.getUrlId())}},{key:"getUrlId",value:function(){return this.props.match.url.split("/").pop()}},{key:"render",value:function(){var e=this.props,t=e.movie,a=e.cast;return void 0!=t?r.a.createElement(Q,{selectedMovie:t,actors:a}):r.a.createElement(R.a,{active:!0},r.a.createElement(z.a,{size:"massive"}))}}]),t}(n.Component),Y=Object(h.f)(X),Z=function(e){function t(){return Object(v.a)(this,t),Object(E.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.getCredits,a=e.getMovie,n=e.popMovies,o=e.cast,c=e.movie;return r.a.createElement(Y,{getCredits:t,getMovie:a,popMovies:n,cast:o,movie:c})}}]),t}(n.Component),ee=Object(i.b)((function(e){return{popMovies:e.movies.popMovies,cast:e.credits.cast,movie:e.movie}}),{getCredits:function(e){return function(t){(function(e){var t,a;return O.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O.a.awrap(fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(j)));case 2:return t=n.sent,a=t.json(),n.abrupt("return",a);case 5:case"end":return n.stop()}}))})(e).then((function(e){t({type:"GET_CREDITS",payload:e})})).catch((function(e){t({type:"GET_ERRORS",payload:e})}))}},getMovie:function(e){return function(t){(function(e){var t,a;return O.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O.a.awrap(fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(j)));case 2:return t=n.sent,a=t.json(),n.abrupt("return",a);case 5:case"end":return n.stop()}}))})(e).then((function(e){t({type:"GET_MOVIE",payload:e})})).catch((function(e){t({type:"GET_ERRORS",payload:e})}))}}})(Z),te=a(315),ae=(a(292),function(e){return r.a.createElement("div",{className:"screen-moviedetail"},r.a.createElement(te.a,null,r.a.createElement(ee,e)))}),ne=a(318),re=function(){return r.a.createElement(ne.a,{inverted:!0,size:"massive",fixed:"top"},r.a.createElement(te.a,null,r.a.createElement(ne.a.Item,{header:!0},"The Movie Database"),r.a.createElement(ne.a.Item,{as:d.b,to:"/"},"Home")))},oe=function(){return r.a.createElement("div",{style:{height:"100%"}},r.a.createElement(d.a,{basename:"/movies"},r.a.createElement(re,null),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:I}),r.a.createElement(h.a,{exact:!0,path:"/:movie",component:ae}))))},ce=function(){return r.a.createElement(i.a,{store:m},r.a.createElement(oe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[157,1,2]]]);
//# sourceMappingURL=main.0dff14d7.chunk.js.map