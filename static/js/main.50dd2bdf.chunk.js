(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{128:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var a=n(44),r=n(9),o={messageItemData:[{id:1,name:"Pavel",img:'"https://images-na.ssl-images-amazon.com/images/I/31nxvlzm90L._SY450_.jpg"'},{id:2,name:"Ricky",img:'"https://images-na.ssl-images-amazon.com/images/I/31nxvlzm90L._SY450_.jpg"'},{id:3,name:"Tom",img:'"https://images-na.ssl-images-amazon.com/images/I/31nxvlzm90L._SY450_.jpg"'},{id:4,name:"Marcus",img:'"https://images-na.ssl-images-amazon.com/images/I/31nxvlzm90L._SY450_.jpg"'},{id:5,name:"Katy",img:'"https://images-na.ssl-images-amazon.com/images/I/31nxvlzm90L._SY450_.jpg"'},{id:6,name:"Nick",img:'"https://images-na.ssl-images-amazon.com/images/I/31nxvlzm90L._SY450_.jpg"'},{id:7,name:"Bold",img:'"https://images-na.ssl-images-amazon.com/images/I/31nxvlzm90L._SY450_.jpg"'}],messageData:[{id:1,message:"How are you?",class:"friend"},{id:2,message:"Whats happen?",class:"me"},{id:3,message:"Ou eee!!",class:"friend"},{id:4,message:"Ou eeeeeee!!",class:"me"},{id:5,message:"Ou eeeeeeeeeeeee!!",class:"me"},{id:6,message:"ee maka faka",class:"friend"}]},i=function(e){return{type:"SEND-MESSAGE",message:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n={id:7,message:t.message,class:"me"};return Object(r.a)({},e,{messageData:[].concat(Object(a.a)(e.messageData),[n])});default:return e}}},133:function(e,t,n){e.exports={text:"Music_text__2FJRR"}},136:function(e,t,n){e.exports=n.p+"static/media/Spinner-1.4s-137px.d1736f9b.svg"},137:function(e,t,n){e.exports=n.p+"static/media/draniki.ae7f2558.png"},14:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"e",(function(){return s}));var a=n(135),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"c324e420-1ebb-4e65-bf90-1a7257900f46"},params:{}}),o=function(e){return r.get("profile/"+e).then((function(e){return e.data}))},i={me:function(){return r.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("auth/login")}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},s={getUserStatus:function(e){return r.get("profile/status/"+e)},updateUserStatus:function(e){return r.put("profile/status/",{status:e})}},c={unfollowUser:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))},followUser:function(e){return r.post("follow/".concat(e)).then((function(e){return e.data}))}};t.a=c},165:function(e,t,n){e.exports=n(291)},170:function(e,t,n){},171:function(e,t,n){},291:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(63),i=n.n(o);n(170),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=n(26),s=n(27),c=n(29),l=n(28),m=n(30),f=(n(171),n(33)),p=n.n(f),d=n(10),g=n(88),h=n.n(g),E=n(89),v=n.n(E),b=function(){return r.a.createElement("div",{className:v.a.item},r.a.createElement("img",{className:v.a.img,alt:"friend",src:"https://images-na.ssl-images-amazon.com/images/I/31nxvlzm90L._SY450_.jpg"}),"My friend")},_=function(){return r.a.createElement("div",{className:h.a.friends},r.a.createElement("div",null,"Friends"),r.a.createElement("div",{className:h.a.item},r.a.createElement(b,null),r.a.createElement(b,null),r.a.createElement(b,null)))},O=function(){return r.a.createElement("nav",{className:p.a.bar},r.a.createElement("div",null,r.a.createElement(d.b,{to:"/profile",activeClassName:p.a.active},"Profile")),r.a.createElement("div",null,r.a.createElement(d.b,{to:"/users",activeClassName:p.a.active},"Users")),r.a.createElement("div",null,r.a.createElement(d.b,{to:"/messages",activeClassName:p.a.active},"Messages")),r.a.createElement("div",null,r.a.createElement(d.b,{to:"/news",activeClassName:p.a.active},"News")),r.a.createElement("div",null,r.a.createElement(d.b,{to:"music",activeClassName:p.a.active},"Music")),r.a.createElement("div",null,r.a.createElement(d.b,{to:"settings",activeClassName:p.a.active},"Settings")),r.a.createElement(_,null))},S=function(){return r.a.createElement("div",null,"News")},w=n(133),j=n.n(w),C=function(){return r.a.createElement("div",{className:j.a.text},"Music")},P=function(){return r.a.createElement("div",null,"Settings")},k=n(23),y=n(13),T=n(45),x=n.n(T),N=n(99),I=n.n(N),U=n(130),z=n(46),L=n.n(z),F=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,i=e.onPageChanged,u=e.portionSize,s=void 0===u?15:u,c=Math.ceil(t/n),l=[],m=1;m<=c;m++)l.push(m);var f=Math.ceil(c/s),p=Object(a.useState)(1),d=Object(U.a)(p,2),g=d[0],h=d[1],E=(g-1)*s+1,v=g*s;return r.a.createElement("div",{className:L.a.pages},g>1&&r.a.createElement("button",{className:L.a.btn,onClick:function(){h(g-1)}},"prev"),l.filter((function(e){return e>=E&&e<=v})).map((function(e){return r.a.createElement("span",{className:"".concat(L.a.page," ").concat(o===e&&L.a.selected),onClick:function(){i(e)}},e)})),f>g&&r.a.createElement("button",{className:L.a.btn,onClick:function(){h(g+1)}},"next"))},A=function(e){return r.a.createElement("div",{className:x.a.wrap},r.a.createElement(F,{totalItemsCount:e.totalUsersCount,pageSize:e.pageSize,onPageChanged:e.onPageChanged,currentPage:e.currentPage}),e.users.map((function(t){return r.a.createElement("div",{key:t.id,className:x.a.main},r.a.createElement("div",{className:x.a.user},r.a.createElement("div",null,r.a.createElement(d.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:I.a,alt:"avatar"}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:e.followingProgres.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)}},"unfollow"):r.a.createElement("button",{disabled:e.followingProgres.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)}}," follow "))),r.a.createElement("div",{className:x.a.info},r.a.createElement("div",null,t.name),r.a.createElement("div",null,null!=t.status?t.status:t.id)),r.a.createElement("div",{className:x.a.location},r.a.createElement("div",null,"'u.location.city'"),r.a.createElement("div",null,"'u.location.country'")))})))},R=n(8),D=n.n(R),M=n(18),G=n(44),Y=n(9),W=n(14),B=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(Y.a)({},e,{},a):e}))},H={users:[],pageSize:50,totalUsersCount:0,currentPage:1,isFetching:!1,followingProgres:[]},J=function(e){return{type:"FOLLOW",userId:e}},Z=function(e){return{type:"UNFOLLOW",userId:e}},q=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},K=function(e){return{type:"TOOGLE_IS_FETCHING",isFetching:e}},X=function(e,t){return{type:"TOOGLE_IS_FOLOWING_PROGRESS",followingProgres:e,userId:t}},Q=function(){var e=Object(M.a)(D.a.mark((function e(t,n,a,r){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(X(!0,n)),e.next=3,a(n);case 3:0===e.sent.resultCode&&t(r(n)),t(X(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(Y.a)({},e,{users:B(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(Y.a)({},e,{users:B(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(Y.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(Y.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USER_COUNT":return Object(Y.a)({},e,{totalUsersCount:t.totalCount});case"TOOGLE_IS_FETCHING":return Object(Y.a)({},e,{isFetching:t.isFetching});case"TOOGLE_IS_FOLOWING_PROGRESS":return Object(Y.a)({},e,{followingProgres:t.followingProgres?[].concat(Object(G.a)(e.followingProgres),[t.userId]):e.followingProgres.filter((function(e){return e!==t.userId}))});default:return e}},$=n(64),ee=n(95),te=n(7),ne=function(e){return e.usersPage.users},ae=function(e){return e.usersPage.pageSize},re=function(e){return e.usersPage.totalUsersCount},oe=function(e){return e.usersPage.currentPage},ie=function(e){return e.usersPage.isFetching},ue=function(e){return e.usersPage.followingProgres},se=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).onPageChanged=function(e){n.props.getUsersThunk(e,n.props.pageSize)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsersThunk(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement($.a,null):null,r.a.createElement(A,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unfollow:this.props.unfollowThunk,follow:this.props.followThunk,followingProgres:this.props.followingProgres}))}}]),t}(r.a.Component),ce=Object(te.d)(Object(y.b)((function(e){return{users:ne(e),pageSize:ae(e),totalUsersCount:re(e),currentPage:oe(e),isFetching:ie(e),followingProgres:ue(e)}}),{getUsersThunk:function(e,t){return function(){var n=Object(M.a)(D.a.mark((function n(a){var r;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(K(!0)),n.next=3,Object(W.b)(e,t);case 3:r=n.sent,a(q(e)),a(K(!1)),a({type:"SET_USERS",users:r.items}),a({type:"SET_TOTAL_USER_COUNT",totalCount:r.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},followThunk:function(e){return function(){var t=Object(M.a)(D.a.mark((function t(n){return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Q(n,e,W.a.followUser.bind(W.a),J);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollowThunk:function(e){return function(){var t=Object(M.a)(D.a.mark((function t(n){return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Q(n,e,W.a.unfollowUser.bind(W.a),Z);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),ee.a)(se),le=n(69),me=n.n(le),fe=n(137),pe=n.n(fe),de=function(e){return r.a.createElement("header",{className:me.a.header},r.a.createElement("img",{src:pe.a,alt:"logo"}),r.a.createElement("div",{className:me.a.login},e.auth.isAuth?r.a.createElement("div",null,e.auth.login," ",e.auth.email," ",r.a.createElement("button",{className:me.a.logout,onClick:e.logoutThunk},"logout")):r.a.createElement(d.b,{to:"/login"},"Login")))},ge=n(47),he={userId:null,email:null,login:null,isAuth:!1},Ee=function(e,t,n,a){return{type:"SET_USER_DATA",data:{userId:e,email:t,login:n,isAuth:a}}},ve=function(){return function(){var e=Object(M.a)(D.a.mark((function e(t){var n,a,r,o,i;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.c.me();case 2:0===(n=e.sent).resultCode&&(a=n.data,r=a.id,o=a.login,i=a.email,t(Ee(r,i,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(Y.a)({},e,{},t.data);default:return e}},_e=function(e){function t(){return Object(u.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(de,this.props)}}]),t}(r.a.Component),Oe=Object(y.b)((function(e){return{auth:e.auth}}),{logoutThunk:function(){return function(){var e=Object(M.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.c.logout();case 2:0===e.sent.data.resultCode&&t(Ee(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(_e),Se=n(129),we=n(37),je=n(65),Ce=n(38),Pe=n.n(Ce),ke={backgroundColor:"rgba(256, 256, 256, 0.5)",width:"250px",margin:"5px"},ye={margin:"5px"},Te=Object(je.a)(25),xe=Object(Se.a)({form:"login"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},Object(we.c)(we.a,[je.b,Te],"login",ke,"login"),Object(we.c)(we.a,[je.b,Te],"password",ke,"password"),Object(we.c)(we.a,null,"rememberMe",null,null,{type:"checkbox"},"remember me"),e.error&&r.a.createElement("div",{className:Pe.a.commonError},e.error),r.a.createElement("div",null,r.a.createElement("button",{style:ye},"Login")))})),Ne=Object(y.b)((function(e){return{isAuth:e.auth.isAuth}}),{loginThunk:function(e,t,n){return function(){var a=Object(M.a)(D.a.mark((function a(r){var o,i;return D.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,W.c.login(e,t,n);case 2:0===(o=a.sent).data.resultCode?r(ve()):(i=o.data.messages[0],r(Object(ge.a)("login",{_error:i})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?r.a.createElement(k.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Please, log in"),r.a.createElement(xe,{onSubmit:function(t){e.loginThunk(t.login,t.password,t.rememberMe)}}))})),Ie={initialize:!1},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZE_SUCCESS":return Object(Y.a)({},e,{initialize:!0});default:return e}},ze=n(96),Le=n(128),Fe=n(139),Ae=n(131),Re=Object(te.c)({profilePage:ze.b,messagePage:Le.a,usersPage:V,auth:be,form:Ae.a,app:Ue}),De=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||te.d,Me=Object(te.e)(Re,De(Object(te.a)(Fe.a))),Ge=function(e){return function(t){return r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null," loading... ")},r.a.createElement(e,t))}},Ye=r.a.lazy((function(){return n.e(3).then(n.bind(null,296))})),We=r.a.lazy((function(){return n.e(4).then(n.bind(null,297))})),Be=function(e){function t(){return Object(u.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeThunk()}},{key:"render",value:function(){return this.props.initialize?r.a.createElement(d.a,null,r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(Oe,null),r.a.createElement(O,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(k.b,{path:"/profile/:userId?",render:Ge(Ye)}),r.a.createElement(k.b,{path:"/messages",render:Ge(We)}),r.a.createElement(k.b,{path:"/users",render:function(){return r.a.createElement(ce,null)}}),r.a.createElement(k.b,{path:"/news",component:S}),r.a.createElement(k.b,{path:"/music",component:C}),r.a.createElement(k.b,{path:"/settings",component:P}),r.a.createElement(k.b,{path:"/login",render:function(){return r.a.createElement(Ne,null)}})))):r.a.createElement($.a,null)}}]),t}(a.Component),He=Object(y.b)((function(e){return{initialize:e.app.initialize}}),{initializeThunk:function(){return function(e){e(ve()).then((function(){e({type:"INITIALIZE_SUCCESS"})}))}}})(Be),Je=function(e){return r.a.createElement(d.a,null,r.a.createElement(y.a,{store:Me},r.a.createElement(He,null)))};i.a.render(r.a.createElement(Je,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},33:function(e,t,n){e.exports={bar:"SideBar_bar__2BKa8",active:"SideBar_active__3E7Wi",friends:"SideBar_friends__2Yhuk",friend:"SideBar_friend__2cSnu"}},37:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return m}));var a=n(92),r=n(0),o=n.n(r),i=n(38),u=n.n(i),s=n(87),c=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),i=n.touched&&n.error;return o.a.createElement("div",{className:u.a.formControl+" "+(i?u.a.error:"")},o.a.createElement("textarea",Object.assign({},t,r)),i&&o.a.createElement("span",null,n.error))},l=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),i=n.touched&&n.error;return o.a.createElement("div",{className:u.a.formControl+" "+(i?u.a.error:"")},o.a.createElement("input",Object.assign({},t,r)),i&&o.a.createElement("span",null,n.error))},m=function(e,t,n,a,r){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"";return o.a.createElement("div",null,o.a.createElement(s.a,Object.assign({component:e,validate:t,name:n,style:a,placeholder:r},i))," ",u)}},38:function(e,t,n){e.exports={formControl:"FormControl_formControl__2HvUk",error:"FormControl_error__2ixWS",commonError:"FormControl_commonError__3C98f"}},45:function(e,t,n){e.exports={main:"user_main__2wdQL",info:"user_info__3uwkz",location:"user_location__s-RD8"}},46:function(e,t,n){e.exports={pages:"paginator_pages__1RDNi",page:"paginator_page__2vIqZ",selected:"paginator_selected__2RaAg",btn:"paginator_btn__1EJFZ"}},64:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(136),i=n.n(o);t.a=function(){return r.a.createElement("div",null,r.a.createElement("img",{alt:"loading",src:i.a}))}},65:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},69:function(e,t,n){e.exports={header:"Header_header__3I2Tk",login:"Header_login__3-XoT",logout:"Header_logout__3UYaq"}},88:function(e,t,n){e.exports={friends:"Friends_friends__MCQN0",item:"Friends_item__3sI6b"}},89:function(e,t,n){e.exports={img:"Friend_img__1d4oP",item:"Friend_item__5Uo-O"}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(26),r=n(27),o=n(29),i=n(28),u=n(30),s=n(0),c=n.n(s),l=n(23),m=n(13),f=function(e){var t=function(t){function n(){return Object(a.a)(this,n),Object(o.a)(this,Object(i.a)(n).apply(this,arguments))}return Object(u.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){return this.props.auth?c.a.createElement(e,this.props):c.a.createElement(l.a,{to:"/login"})}}]),n}(c.a.Component);return Object(m.b)((function(e){return{auth:e.auth.isAuth}}))(t)}},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return f})),n.d(t,"c",(function(){return p})),n.d(t,"e",(function(){return d}));var a=n(8),r=n.n(a),o=n(18),i=n(44),u=n(9),s=n(14),c={userProfile:null,postData:[{id:1,post:"First post",likesCount:13},{id:2,post:"Second post",likesCount:3},{id:3,post:"Third post",likesCount:1}],status:"set status"},l=function(e){return{type:"ADD-POST",newPostItem:e}},m=function(e){return{type:"SET_STATUS",status:e}},f=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.d)(e);case 2:a=t.sent,n({type:"SET_USER_PROFILE",userProfile:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.e.getUserStatus(e);case 2:a=t.sent,n(m(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.e.updateUserStatus(e);case 2:0===t.sent.data.resultCode&&n(m(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:4,post:t.newPostItem,likesCount:0};return Object(u.a)({},e,{postData:[].concat(Object(i.a)(e.postData),[n])});case"SET_USER_PROFILE":return Object(u.a)({},e,{userProfile:t.userProfile});case"SET_STATUS":return Object(u.a)({},e,{status:t.status});default:return e}}},99:function(e,t,n){e.exports=n.p+"static/media/31nxvlzm90L._SY450_.76fdbddc.jpg"}},[[165,1,2]]]);
//# sourceMappingURL=main.50dd2bdf.chunk.js.map