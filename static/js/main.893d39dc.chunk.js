(this.webpackJsonpschoolchan=this.webpackJsonpschoolchan||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/arrow.1d027598.svg"},function(e,t,a){e.exports=a.p+"static/media/racoon_male.9eabe416.svg"},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/chatIco.4195cd04.svg"},function(e,t,a){e.exports=a.p+"static/media/userIco.c95fa3fe.svg"},function(e,t,a){e.exports=a.p+"static/media/report.b7a16ce7.svg"},function(e,t,a){e.exports=a.p+"static/media/image_icon.eae12adf.svg"},function(e,t,a){e.exports=a.p+"static/media/backIco.8bf6e5a8.svg"},function(e,t,a){e.exports=a.p+"static/media/addIco.a83663f3.svg"},,function(e,t,a){e.exports=a.p+"static/media/closeIco.6be77778.svg"},function(e,t,a){e.exports=a.p+"static/media/formIco.db5ef68f.svg"},function(e,t,a){e.exports=a.p+"static/media/uploadImage.af8867ce.svg"},function(e,t,a){e.exports=a.p+"static/media/uploadImageDone.3e48864c.svg"},function(e,t,a){e.exports=a(105)},,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function c(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var s,l=a(5),i=a.n(l),m=(a(58),a(4)),u=""!==localStorage.getItem("token"),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return!0;case"SIGN_OUT":return!1;default:return e}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SOCKET":return t.socket;case"RESET_SOCKET":default:return e}},_=Object(m.b)({isLogged:p,socket:d}),g=a(2),f=a(41),E=a.n(f),h=a(1),b=(a(94),a(10)),v=a.n(b),N=function(e){var t=e.switchFormState,a=Object(n.useState)(""),r=Object(h.a)(a,2),c=r[0],s=r[1],l=Object(n.useState)(""),i=Object(h.a)(l,2),m=i[0],u=i[1],p=Object(n.useState)(""),d=Object(h.a)(p,2),_=d[0],g=d[1],f=Object(n.useState)(""),E=Object(h.a)(f,2),b=E[0],N=E[1],w=Object(n.useState)(""),j=Object(h.a)(w,2),k=j[0],O=j[1],y=Object(n.useState)(""),S=Object(h.a)(y,2),z=S[0],x=S[1],T={username:c,school:m,repassword:_,password:b};return o.a.createElement("div",{className:"register"},o.a.createElement("div",null,o.a.createElement("h1",{className:"register__title"},"Stw\xf3rz nowe konto"),o.a.createElement("h2",{className:"register__text"},"Trzymaj kontakt anonimowo ze spo\u0142eczno\u015bci\u0105 swojej szko\u0142y.")),o.a.createElement("form",{className:"register__form",onSubmit:function(e){fetch("".concat("https://schoolchan.herokuapp.com","/api/auth/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(T)}).then((function(e){return e.json()})).then((function(e){var a;console.log("Response:",e),"MissingUsernameError"===(a=e.name)?(O("Podaj nazw\u0119 uzytkownika"),x("username")):"MissingPasswordError"===a?(O("Wpisz has\u0142o"),x("password")):"PasswordsDoNotMatch"===a?(O("Podane has\u0142a nie s\u0105 takie same"),x("repassword")):"UserExistsError"===a?(O("Ten pseudonim juz jest zaj\u0119ty"),x("username")):"NoSchoolSelected"===a?(O("Wybierz szko\u0142\u0119"),x("school")):"AccountCreated"===a?t("login"):a?(O("Nieznany b\u0142\u0105d"),x("repassword")):t("login")})).catch((function(e){console.error("Error:",e)})),e.preventDefault()}},o.a.createElement("input",{type:"text",name:"username",placeholder:"Pseudonim",className:"register__input",value:c,onChange:function(e){return s(e.target.value)}}),o.a.createElement("span",{className:"register__error"},"username"===z?k:null),o.a.createElement("select",{name:"school",placeholder:"Wybierz szko\u0142e",className:"register__input",value:m,onChange:function(e){return u(e.target.value)}},o.a.createElement("option",{value:!0,hidden:!0},"Wybierz szko\u0142e"),o.a.createElement("option",{value:"kili\u0144skiego"},"kili\u0144skiego"),o.a.createElement("option",{value:"test"},"test")),o.a.createElement("span",{className:"register__error"},"school"===z?k:null),o.a.createElement("input",{type:"password",name:"password",placeholder:"Has\u0142o",className:"register__input",value:b,onChange:function(e){return N(e.target.value)}}),o.a.createElement("span",{className:"register__error"},"password"===z?k:null),o.a.createElement("input",{type:"password",name:"repassword",placeholder:"Powt\xf3rz has\u0142o",className:"register__input",value:_,onChange:function(e){return g(e.target.value)}}),o.a.createElement("span",{className:"register__error"},"repassword"===z?k:null),o.a.createElement("div",{className:"register__buttons"},o.a.createElement("button",{type:"button",className:"register__loginButton",onClick:function(){return t("login")}},o.a.createElement("p",{className:"register__loginText"},"Masz ju\u017c konto?"),o.a.createElement("p",{className:"register__loginTextBlue"},"Zaloguj si\u0119")),o.a.createElement("button",{className:"register__registerButton"},"Zarejestruj si\u0119 ",o.a.createElement("img",{src:v.a,alt:""})))))},w=(a(95),function(e){var t=e.switchFormState,a=Object(n.useState)(""),r=Object(h.a)(a,2),c=r[0],s=r[1],l=Object(n.useState)(""),i=Object(h.a)(l,2),m=i[0],u=i[1],p=Object(n.useState)(""),d=Object(h.a)(p,2),_=d[0],f=d[1],E=Object(g.b)(),b=function(e){400===e?f("Wpisz dane logowania"):401===e?f("Wpisane login lub has\u0142o s\u0105 nieprawid\u0142owe"):404!==e&&403!==e||f("Serwery aktualnie s\u0105 niedost\u0119pne. Prosz\u0119 spr\xf3bowa\u0107 ponownie p\xf3\u017aniej.")},N={username:c,password:m};return o.a.createElement("div",{className:"login"},o.a.createElement("h1",{className:"login__title"},"Logowanie"),o.a.createElement("form",{className:"login__form",onSubmit:function(e){fetch("".concat("https://schoolchan.herokuapp.com","/api/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(N)}).then((function(e){return b(e.status),e.json()})).then((function(e){console.log("Success:",e),e.message?console.log("Z\u0142e dane"):(localStorage.setItem("token",e.token),E({type:"SIGN_IN"}))})).catch((function(e){"TypeError: Failed to fetch"==e&&b(404)})),e.preventDefault()}},o.a.createElement("input",{type:"text",placeholder:"Pseudonim",className:"login__input",value:c,onChange:function(e){return s(e.target.value)}}),o.a.createElement("input",{type:"password",placeholder:"Has\u0142o",className:"login__input",value:m,onChange:function(e){return u(e.target.value)}}),o.a.createElement("span",{className:"login__error"},_),o.a.createElement("div",{className:"login__underInputs"},o.a.createElement("button",{className:"login__forgotPassword"},"Zapomnia\u0142e\u015b has\u0142a?"),o.a.createElement("label",{className:"login__remember"},o.a.createElement("input",{type:"checkbox",name:"remember",className:"login__rememberCheckbox"}),"Pami\u0119taj mnie")),o.a.createElement("button",{className:"login__loginButton"},"Zaloguj si\u0119 ",o.a.createElement("img",{src:v.a,alt:""})),o.a.createElement("button",{className:"login__registerButton",onClick:function(){return t("register")}},"Stw\xf3rz nowe konto")))}),j=(a(96),function(){var e=Object(n.useState)("login"),t=Object(h.a)(e,2),a=t[0],r=t[1];return o.a.createElement("div",{className:"start"},o.a.createElement("div",{className:"start__bannerText"},"Pozosta\u0144 anonimowy i wyra\u017a swoje opinie"),o.a.createElement("hr",{className:"start__hr"}),"login"===a?o.a.createElement(w,{switchFormState:r}):o.a.createElement(N,{switchFormState:r}))}),k=a(42),O=a.n(k),y=a(43),S=a.n(y),z=(a(97),function(){return o.a.createElement("div",{className:"topBar"},o.a.createElement("ul",{className:"topBar__optionsList"},o.a.createElement("li",{className:"topBar__options topBar__options--button"},o.a.createElement("button",{className:"topBar__button topBar__button--menu"},o.a.createElement("img",{src:S.a,alt:""}))),o.a.createElement("li",{className:"topBar__options topBar__options--banner"},"schoolchan"),o.a.createElement("li",{className:"topBar__options topBar__options--button"},o.a.createElement("button",{className:"topBar__button topBar__button--chat"},o.a.createElement("img",{src:O.a,alt:""})))))}),x=a(12),T=a(11),P=a.n(T),C=a(44),I=a.n(C),B=(a(98),function(e){var t=e.comment;return o.a.createElement("li",{className:"comment"},o.a.createElement("img",{src:P.a,alt:"sex",className:"comment__sex"}),o.a.createElement("div",{className:"comment__username"},t.username),"\xa0",o.a.createElement("div",null,o.a.createElement("div",{className:"comment__text"},t.commentText)),"\xa0",t.image?o.a.createElement("a",{href:t.image.large,rel:"noopener noreferrer",target:"_blank"},"Obraz"):null)}),F=a(45),W=a.n(F),D=a(46),U=a.n(D),R=(a(99),function(e){var t=e.post,a=e.setCommentsView,r=Object(n.useState)(""),c=Object(h.a)(r,2),s=c[0],l=c[1],i=Object(n.useState)(""),m=Object(h.a)(i,2),u=m[0],p=m[1],d=Object(n.useState)([]),_=Object(h.a)(d,2),f=_[0],E=_[1],b=Object(g.c)((function(e){return e.socket}));Object(n.useEffect)((function(){b.emit("showComments",t._id)}),[b,t._id]),Object(n.useEffect)((function(){b&&(b.on("comments",(function(e){E(e)})),b.on("comment",(function(e){E([e].concat(Object(x.a)(f)))})))}),[f,b]);var v=function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(){!function(e){var t=new Headers;t.append("Content-Type","application/x-www-form-urlencoded");var a=new URLSearchParams;a.append("key","69106b72459a3015d3a83871dde47b63"),a.append("image",e),fetch("https://api.imgbb.com/1/upload",{method:"POST",headers:t,body:a,redirect:"follow"}).then((function(e){return e.json()})).then((function(e){l({large:e.data.image.url,mini:e.data.thumb.url,medium:e.data.medium.url})})).catch((function(e){return console.log("error",e)}))}(a.result.substr(a.result.indexOf(",")+1))},t&&a.readAsDataURL(t)};return o.a.createElement("div",{className:"comments"},o.a.createElement("div",{className:"comments__topBar"},o.a.createElement("button",{onClick:function(){return a(!1)}},o.a.createElement("img",{src:U.a,alt:"back",className:"comments__backButtonImg"})),o.a.createElement("div",{className:"comments__title"},"Komentarze")),o.a.createElement("ul",{className:"comments__list"},f.map((function(e,t){return o.a.createElement(B,{key:t,comment:e})}))),o.a.createElement("form",{className:"comments__commentForm"},o.a.createElement("label",null,o.a.createElement("img",{src:W.a,alt:"sendImage"}),o.a.createElement("input",{className:"comments__imageInput",type:"file",onChange:function(e){return v(e)}})),o.a.createElement("textarea",{rows:"1",wrap:"hard",placeholder:"Napisz komentarz...",className:"comments__textInput",onChange:function(e){return p(e.target.value)},value:u}),o.a.createElement("button",{className:"comments__submit",onClick:function(e){return function(e){e.preventDefault();var a={image:s,commentText:u,postId:t._id};b.emit("sendComment",a),p(""),l("")}(e)}},"\u2332")))}),L=function(e){var t=new Date,a=-1*(Date.parse(e)-t.getTime())/6e4;if(a>43829){var n=new Date(e),o=n.getFullYear(),r=n.getMonth()+1,c=n.getDate();return c<10&&(c="0"+c),r<10&&(r="0"+r),c+"-"+r+"-"+o}return a>2880?"".concat(Math.ceil(a/1440)," dni temu"):a>1440?"1 dzie\u0144 temu":a>120?"godzin\u0119 temu":a>60?"".concat(Math.ceil(a/60)," h temu"):a>2?"".concat(Math.ceil(a)," min temu"):a?"minut\u0119 temu":"przed chwil\u0105"},A=(a(100),function(e){var t=e.post,a=Object(n.useState)(!1),r=Object(h.a)(a,2),c=r[0],s=r[1],l=Object(n.useState)(),i=Object(h.a)(l,2),m=i[0],u=i[1],p=t.comments,d=t.image,_=t.body,g=t.createdAt,f=t.username;return p=p||[],Object(n.useEffect)((function(){u(p.length)}),[p.length]),o.a.createElement("li",{className:"post"},o.a.createElement("img",{src:P.a,alt:"sex",className:"post__sex"}),o.a.createElement("div",{className:"post__content"},o.a.createElement("div",{className:"post__username"},f),o.a.createElement("div",{className:"post__postDate"},L(g)),o.a.createElement("div",{className:"post__body"},_),d?o.a.createElement("img",{className:"post__image",src:d.medium,alt:""}):null,o.a.createElement("div",{className:"post__buttons"},o.a.createElement("button",{className:"post__like"},"+1"),o.a.createElement("button",{className:"post__dislike"},"-1"),o.a.createElement("button",{className:"post__commentsButton",onClick:function(){return s(!0)}},0===m?"Napisz komentarz":"Komentarze ".concat(m)))),o.a.createElement("button",{className:"post__reportButton"},o.a.createElement("img",{src:I.a,alt:"report"})),o.a.createElement("div",{className:"post__bottom"},o.a.createElement("hr",{className:"post__hr"}),o.a.createElement("div",null,o.a.createElement("div",{className:"post__votes"},o.a.createElement("span",{className:"post__reactions"},"13"),o.a.createElement("span",null,"\xa0szop\xf3w jest za, a\xa0"),o.a.createElement("span",{className:"post__reactions"},"5"),o.a.createElement("span",null,"\xa0przeciw")),o.a.createElement("ul",{className:"post__comments"},p[0]?o.a.createElement("li",null,o.a.createElement("span",{className:"post__username"},p[0].username)," ",p[0].commentText):null,p[1]?o.a.createElement("li",null,o.a.createElement("span",{className:"post__username"},p[1].username)," ",p[1].commentText):null))),c?o.a.createElement(R,{post:t,setCommentsView:s}):null)}),M=(a(101),function(){var e=Object(g.c)((function(e){return e.socket})),t=Object(n.useState)([]),a=Object(h.a)(t,2),r=a[0],c=a[1];return e&&(e.on("posts",(function(e){c(e)})),e.on("post",(function(e){c([e].concat(Object(x.a)(r)))}))),o.a.createElement("ul",{className:"posts"},r.map((function(e,t){return o.a.createElement(A,{key:t,post:e})})))}),G=a(47),K=a.n(G),Z=a(48),H=a.n(Z),J=a(49),V=a.n(J),X=a(50),Y=a.n(X),q=a(51),$=a.n(q),Q=a(52),ee=a.n(Q),te=(a(102),function(e){var t=e.setCreatePostFrom,a=Object(n.useState)(""),r=Object(h.a)(a,2),c=r[0],s=r[1],l=Object(n.useState)(""),i=Object(h.a)(l,2),m=i[0],u=i[1],p=Object(g.c)((function(e){return e.socket})),d=function(){var e=document.getElementById("file").files[0],t=new FileReader;t.onloadend=function(){!function(e){var t=new Headers;t.append("Content-Type","application/x-www-form-urlencoded");var a=new URLSearchParams;a.append("key","69106b72459a3015d3a83871dde47b63"),a.append("image",e),fetch("https://api.imgbb.com/1/upload",{method:"POST",headers:t,body:a,redirect:"follow"}).then((function(e){return e.json()})).then((function(e){return u({large:e.data.image.url,mini:e.data.thumb.url,medium:e.data.medium.url})})).catch((function(e){return console.log("error",e)}))}(t.result.substr(t.result.indexOf(",")+1))},e&&t.readAsDataURL(e)};return o.a.createElement(H.a,{axis:"y",handle:".createPostForm__handle"},o.a.createElement("div",{className:"createPostForm"},o.a.createElement("div",{className:"createPostForm__handle"},o.a.createElement("div",null,o.a.createElement("img",{className:"createPostForm__formIco",src:Y.a,alt:"createPost"}),o.a.createElement("span",{className:"createPostForm__handleTitle"},"Utw\xf3rz post")),o.a.createElement("button",{className:"createPostForm__closeButton",onClick:function(){return t(!1)}},o.a.createElement("img",{src:V.a,alt:"closeForm"}))),o.a.createElement("form",{action:"",className:"createPostForm__form"},o.a.createElement("label",{className:"createPostForm__label",htmlFor:"body"},"Tre\u015b\u0107:"),o.a.createElement("textarea",{name:"body",className:"createPostForm__commentBody",rows:"8",placeholder:"Nie ma to jak koronawirus x_x",onChange:function(e){return s(e.target.value)},value:c}),o.a.createElement("label",{className:"createPostForm__label",htmlFor:"image"},"Obraz:"),o.a.createElement("label",null,o.a.createElement("img",{src:""===m?$.a:ee.a,alt:"upload",className:"createPostForm__uploadImg"}),o.a.createElement("input",{className:"createPostForm__imageButton",name:"image",type:"file",accept:"image/x-png,image/jpeg",id:"file",onChange:function(){return d()}})),o.a.createElement("button",{className:"createPostForm__submit",onClick:function(e){return function(e,a){e.preventDefault();var n={body:c,image:m};n&&(p.emit("sendPost",n),t(!1))}(e)}},"Opublikuj"))))}),ae=(a(103),function(){var e=Object(n.useState)(!1),t=Object(h.a)(e,2),a=t[0],r=t[1];return o.a.createElement("div",{className:"createPost"},a?o.a.createElement(te,{setCreatePostFrom:r}):o.a.createElement("button",{className:"createPost__button",onClick:function(){return r(!0)}},o.a.createElement("img",{src:K.a,alt:""})))}),ne=(a(104),function(){return le(),o.a.createElement("div",{className:"chan"},o.a.createElement(M,null),o.a.createElement(ae,null))}),oe=function(){return o.a.createElement("div",null,o.a.createElement(z,null),o.a.createElement(ne,null))},re=a(23),ce=a.n(re),se="https://schoolchan.herokuapp.com",le=function(){var e=Object(g.b)(),t=Object(g.c)((function(e){return e.isLogged}));return Object(n.useEffect)((function(){(s=E()(se,{query:"token="+localStorage.getItem("token")})).on("error",(function(t){t&&(localStorage.removeItem("token"),e({type:"SIGN_OUT"}))})),s.on("userInfo",(function(t){e({type:"SET_SOCKET",socket:s}),s.emit("joinChan",(function(e){e&&alert(e)}))})),s.on("connect_error",(function(){console.log("Brak po\u0142\u0105czenia"),localStorage.removeItem("token"),e({type:"SIGN_OUT"})}))}),[se,e]),o.a.createElement(o.a.Fragment,null,t?ce()()?o.a.createElement(oe,null):"Tymczasowo wersja strony dost\u0119pna tylko na urz\u0105dzenia mobilne":ce()()?o.a.createElement(j,null):"Tymczasowo wersja strony dost\u0119pna tylko na urz\u0105dzenia mobilne")},ie=Object(m.c)(_,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(o.a.createElement(g.a,{store:ie},o.a.createElement(le,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");r?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):c(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):c(t,e)}))}}(),"serviceWorker"in navigator&&(console.log("Will the service worker register?"),navigator.serviceWorker.register("./serviceWorker.js").then((function(e){console.log("Yes, it did.")})).catch((function(e){console.log("No it didn't. This happened: ",e)})))}],[[53,1,2]]]);
//# sourceMappingURL=main.893d39dc.chunk.js.map