(this.webpackJsonpschoolchan=this.webpackJsonpschoolchan||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/arrow.1d027598.svg"},function(e,t,a){e.exports=a.p+"static/media/backButton.49052b35.svg"},function(e,t,a){e.exports=a.p+"static/media/racoon_male.9eabe416.svg"},function(e,t,a){e.exports=a.p+"static/media/image_icon.eae12adf.svg"},function(e,t,a){e.exports=a.p+"static/media/closeIco.6be77778.svg"},function(e,t,a){e.exports=a.p+"static/media/online.86d4e583.svg"},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/chatIco.4195cd04.svg"},function(e,t,a){e.exports=a.p+"static/media/userIco.c95fa3fe.svg"},function(e,t,a){e.exports=a.p+"static/media/newChat.d9414f81.svg"},function(e,t,a){e.exports=a.p+"static/media/report.b7a16ce7.svg"},function(e,t,a){e.exports=a.p+"static/media/backIco.8bf6e5a8.svg"},function(e,t,a){e.exports=a.p+"static/media/addIco.a83663f3.svg"},,function(e,t,a){e.exports=a.p+"static/media/formIco.db5ef68f.svg"},function(e,t,a){e.exports=a.p+"static/media/uploadImage.af8867ce.svg"},function(e,t,a){e.exports=a.p+"static/media/uploadImageDone.3e48864c.svg"},,function(e,t,a){e.exports=a.p+"static/media/sendMessage.3ee2f767.svg"},function(e,t,a){e.exports=a.p+"static/media/all.e487a034.svg"},,function(e,t,a){e.exports=a(167)},,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function r(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var s,l=a(10),i=a.n(l),m=(a(80),a(5)),u=null!==localStorage.getItem("token"),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return!0;case"SIGN_OUT":return!1;default:return e}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SOCKET":return t.socket;case"RESET_SOCKET":default:return e}},_=a(7),f=a(74),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_POSTS":return{posts:t.posts};case"ADD_POST":return Object(f.a)({},e,{posts:[t.post].concat(Object(_.a)(e.posts))});default:return{posts:[]}}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return t.user;default:return e}},E=Object(m.b)({isLogged:p,socket:d,posts:g,userInfo:h}),b=a(2),v=a(60),N=a.n(v),w=function(e){return{type:"SET_POSTS",posts:e}},j=a(1),k=(a(115),a(15)),O=a.n(k),y=function(e){var t=e.switchFormState,a=Object(n.useState)(""),c=Object(j.a)(a,2),r=c[0],s=c[1],l=Object(n.useState)(""),i=Object(j.a)(l,2),m=i[0],u=i[1],p=Object(n.useState)(""),d=Object(j.a)(p,2),_=d[0],f=d[1],g=Object(n.useState)(""),h=Object(j.a)(g,2),E=h[0],b=h[1],v=Object(n.useState)(""),N=Object(j.a)(v,2),w=N[0],k=N[1],y=Object(n.useState)(""),S=Object(j.a)(y,2),C=S[0],x=S[1],z={username:r,school:m,repassword:_,password:E};return o.a.createElement("div",{className:"register"},o.a.createElement("div",null,o.a.createElement("h1",{className:"register__title"},"Stw\xf3rz nowe konto"),o.a.createElement("h2",{className:"register__text"},"Trzymaj kontakt anonimowo ze spo\u0142eczno\u015bci\u0105 swojej szko\u0142y.")),o.a.createElement("form",{className:"register__form",onSubmit:function(e){fetch("".concat("https://schoolchan.herokuapp.com","/api/auth/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(z)}).then((function(e){return e.json()})).then((function(e){var a;console.log("Response:",e),"MissingUsernameError"===(a=e.name)?(k("Podaj nazw\u0119 uzytkownika"),x("username")):"MissingPasswordError"===a?(k("Wpisz has\u0142o"),x("password")):"PasswordsDoNotMatch"===a?(k("Podane has\u0142a nie s\u0105 takie same"),x("repassword")):"UserExistsError"===a?(k("Ten pseudonim juz jest zaj\u0119ty"),x("username")):"NoSchoolSelected"===a?(k("Wybierz szko\u0142\u0119"),x("school")):"AccountCreated"===a?t("login"):a?(k("Nieznany b\u0142\u0105d"),x("repassword")):t("login")})).catch((function(e){console.error("Error:",e)})),e.preventDefault()}},o.a.createElement("input",{type:"text",name:"username",placeholder:"Pseudonim",className:"register__input",value:r,onChange:function(e){return s(e.target.value)}}),o.a.createElement("span",{className:"register__error"},"username"===C?w:null),o.a.createElement("select",{name:"school",placeholder:"Wybierz szko\u0142e",className:"register__input",value:m,onChange:function(e){return u(e.target.value)}},o.a.createElement("option",{value:!0,hidden:!0},"Wybierz szko\u0142e"),o.a.createElement("option",{value:"kili\u0144skiego"},"kili\u0144skiego"),o.a.createElement("option",{value:"test"},"test")),o.a.createElement("span",{className:"register__error"},"school"===C?w:null),o.a.createElement("input",{type:"password",name:"password",placeholder:"Has\u0142o",className:"register__input",value:E,onChange:function(e){return b(e.target.value)}}),o.a.createElement("span",{className:"register__error"},"password"===C?w:null),o.a.createElement("input",{type:"password",name:"repassword",placeholder:"Powt\xf3rz has\u0142o",className:"register__input",value:_,onChange:function(e){return f(e.target.value)}}),o.a.createElement("span",{className:"register__error"},"repassword"===C?w:null),o.a.createElement("div",{className:"register__buttons"},o.a.createElement("button",{type:"button",className:"register__loginButton",onClick:function(){return t("login")}},o.a.createElement("p",{className:"register__loginText"},"Masz ju\u017c konto?"),o.a.createElement("p",{className:"register__loginTextBlue"},"Zaloguj si\u0119")),o.a.createElement("button",{className:"register__registerButton"},"Zarejestruj si\u0119 ",o.a.createElement("img",{src:O.a,alt:""})))))},S=(a(116),function(e){var t=e.switchFormState,a=Object(n.useState)(""),c=Object(j.a)(a,2),r=c[0],s=c[1],l=Object(n.useState)(""),i=Object(j.a)(l,2),m=i[0],u=i[1],p=Object(n.useState)(""),d=Object(j.a)(p,2),_=d[0],f=d[1],g=Object(b.b)(),h=function(e){400===e?f("Wpisz dane logowania"):401===e?f("Wpisane login lub has\u0142o s\u0105 nieprawid\u0142owe"):404!==e&&403!==e||f("Serwery aktualnie s\u0105 niedost\u0119pne. Prosz\u0119 spr\xf3bowa\u0107 ponownie p\xf3\u017aniej.")},E={username:r,password:m};return o.a.createElement("div",{className:"login"},o.a.createElement("h1",{className:"login__title"},"Logowanie"),o.a.createElement("form",{className:"login__form",onSubmit:function(e){fetch("".concat("https://schoolchan.herokuapp.com","/api/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(E)}).then((function(e){return h(e.status),e.json()})).then((function(e){console.log("Success:",e),e.message?console.log("Z\u0142e dane"):(localStorage.setItem("token",e.token),g({type:"SIGN_IN"}))})).catch((function(e){"TypeError: Failed to fetch"==e&&h(404)})),e.preventDefault()}},o.a.createElement("input",{type:"text",placeholder:"Pseudonim",className:"login__input",value:r,onChange:function(e){return s(e.target.value)}}),o.a.createElement("input",{type:"password",placeholder:"Has\u0142o",className:"login__input",value:m,onChange:function(e){return u(e.target.value)}}),o.a.createElement("span",{className:"login__error"},_),o.a.createElement("div",{className:"login__underInputs"},o.a.createElement("button",{className:"login__forgotPassword"},"Zapomnia\u0142e\u015b has\u0142a?"),o.a.createElement("label",{className:"login__remember"},o.a.createElement("input",{type:"checkbox",name:"remember",className:"login__rememberCheckbox"}),"Pami\u0119taj mnie")),o.a.createElement("button",{className:"login__loginButton"},"Zaloguj si\u0119 ",o.a.createElement("img",{src:O.a,alt:""})),o.a.createElement("button",{className:"login__registerButton",onClick:function(){return t("register")}},"Stw\xf3rz nowe konto")))}),C=(a(117),function(){var e=Object(n.useState)("login"),t=Object(j.a)(e,2),a=t[0],c=t[1];return o.a.createElement("div",{className:"start"},o.a.createElement("div",{className:"start__bannerText"},"Pozosta\u0144 anonimowy i wyra\u017a swoje opinie"),o.a.createElement("hr",{className:"start__hr"}),"login"===a?o.a.createElement(S,{switchFormState:c}):o.a.createElement(y,{switchFormState:c}))}),x=a(61),z=a.n(x),T=a(62),B=a.n(T),P=a(16),F=a.n(P),I=a(63),W=a.n(I),M=(a(118),function(e){var t=e.setMenu,a=e.forceUpdateMain;return o.a.createElement("div",{className:"topBar"},o.a.createElement("ul",{className:"topBar__optionsList"},"#chat"===window.location.hash?o.a.createElement("li",{className:"topBar__options topBar__options--button"},o.a.createElement("button",{className:"topBar__button topBar__button--menu",onClick:function(){window.history.back()}},o.a.createElement("img",{src:F.a,alt:""}))):o.a.createElement("li",{className:"topBar__options topBar__options--button"},o.a.createElement("button",{className:"topBar__button topBar__button--menu",onClick:function(){return t(!0)}},o.a.createElement("img",{src:B.a,alt:""}))),o.a.createElement("li",{className:"topBar__options topBar__options--banner"},"schoolchan"),"#chat"===window.location.hash?o.a.createElement("li",{className:"topBar__options topBar__options--button"},o.a.createElement("button",{className:"topBar__button topBar__button--chat",onClick:function(){return null}},o.a.createElement("img",{src:W.a,alt:""}))):o.a.createElement("li",{className:"topBar__options topBar__options--button"},o.a.createElement("button",{className:"topBar__button topBar__button--chat",onClick:function(){window.location.hash="chat",a()}},o.a.createElement("img",{src:z.a,alt:""})))))}),U=a(17),D=a.n(U),R=a(64),L=a.n(R),A=(a(119),function(e){var t=e.comment;return o.a.createElement("li",{className:"comment"},o.a.createElement("img",{src:D.a,alt:"sex",className:"comment__sex"}),o.a.createElement("div",{className:"comment__text"},o.a.createElement("span",{className:"comment__username"},t.username),"\xa0",t.commentText),"\xa0",t.image?o.a.createElement("a",{href:t.image.large,rel:"noopener noreferrer",target:"_blank"},"Obraz"):null)}),H=a(6),Z=a.n(H),q=a(18),G=a.n(q),K=(a(120),function(e){var t=e.focus,a=e.post,c=Object(n.useState)(""),r=Object(j.a)(c,2),s=r[0],l=r[1],i=Object(n.useState)(""),m=Object(j.a)(i,2),u=m[0],p=m[1],d=Object(b.c)((function(e){return e.socket})),_=function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(){!function(e){var t=new Headers;t.append("Content-Type","application/x-www-form-urlencoded");var a=new URLSearchParams;a.append("key","69106b72459a3015d3a83871dde47b63"),a.append("image",e),fetch("https://api.imgbb.com/1/upload",{method:"POST",headers:t,body:a,redirect:"follow"}).then((function(e){return e.json()})).then((function(e){l({large:e.data.image.url,mini:e.data.thumb.url})})).catch((function(e){return console.log("error",e)}))}(a.result.substr(a.result.indexOf(",")+1))},t&&a.readAsDataURL(t)};return Z()(document.querySelector("textarea")),o.a.createElement("form",{className:"commentForm"},o.a.createElement("label",null,o.a.createElement("img",{src:G.a,alt:"sendImage"}),o.a.createElement("input",{className:"commentForm__imageInput",type:"file",onChange:function(e){return _(e)}})),o.a.createElement("textarea",{autoFocus:t,rows:"1",wrap:"hard",placeholder:"Napisz komentarz...",className:"commentForm__textInput",onChange:function(e){return p(e.target.value)},value:u}),o.a.createElement("button",{className:"commentForm__submit",onClick:function(e){return function(e){e.preventDefault();var t={image:s,commentText:u,postId:a._id};d.emit("sendComment",t),p(""),l("")}(e)}},"\u2332"))}),J=a(65),X=a.n(J),V=a(3),Y=a.n(V),$=(a(121),function(e){var t=e.post,a=e.focus,c=e.postComments,r=e.forceUpdatePost,s=Object(b.c)((function(e){return e.socket})),l=Y()();return Object(n.useEffect)((function(){s&&s.on("comment",(function(){l()}))}),[s,l]),window.onhashchange=function(){r()},o.a.createElement("div",{className:"comments"},o.a.createElement("div",{className:"comments__topBar"},o.a.createElement("button",{onClick:function(){window.history.back()}},o.a.createElement("img",{src:X.a,alt:"back",className:"comments__backButtonImg"})),o.a.createElement("div",{className:"comments__title"},"Komentarze")),o.a.createElement("ul",{className:"comments__list"},c.slice(0).reverse().map((function(e,t){return o.a.createElement(A,{key:t,comment:e})}))),o.a.createElement(K,{focus:a,post:t}))}),Q=function(e){var t=new Date,a=-1*(Date.parse(e)-t.getTime())/6e4;if(a>43829){var n=new Date(e),o=n.getFullYear(),c=n.getMonth()+1,r=n.getDate();return r<10&&(r="0"+r),c<10&&(c="0"+c),r+"-"+c+"-"+o}return a>2880?"".concat(Math.ceil(a/1440)," dni temu"):a>1440?"1 dzie\u0144 temu":a>120?"".concat(Math.ceil(a/60)," h temu"):a>60?"godzin\u0119 temu":a>2?"".concat(Math.ceil(a)," min temu"):a?"minut\u0119 temu":"przed chwil\u0105"},ee=(a(122),function(e){var t=e.post,a=Object(b.c)((function(e){return e.socket})),c=Object(n.useState)(0),r=Object(j.a)(c,2),s=r[0],l=r[1],i=Y()(),m=t.comments,u=t.image,p=t.body,d=t.createdAt,_=t.username,f=t._id;return Object(n.useEffect)((function(){try{l(m.length)}catch(e){l(0)}}),[m.length]),Object(n.useEffect)((function(){a.on("comment",(function(e){f===e.postId&&(l(m.length+1),m.push(e),i())}))}),[m,a,f,i]),o.a.createElement("li",{className:"post"},o.a.createElement("img",{src:D.a,alt:"sex",className:"post__sex"}),o.a.createElement("div",{className:"post__content"},o.a.createElement("div",{className:"post__username"},_),o.a.createElement("div",{className:"post__postDate"},Q(d)),o.a.createElement("div",{className:"post__body"},p),u?o.a.createElement("img",{className:"post__image",src:u.medium,alt:""}):null,o.a.createElement("div",{className:"post__buttons"},o.a.createElement("button",{className:"post__like"},"+1"),o.a.createElement("button",{className:"post__dislike"},"-1"),o.a.createElement("button",{className:"post__commentsButton",onClick:function(){window.location.hash="comments",i()}},0===s?"Napisz komentarz":"Komentarze ".concat(s)))),o.a.createElement("button",{className:"post__reportButton"},o.a.createElement("img",{src:L.a,alt:"report"})),o.a.createElement("div",{className:"post__bottom"},o.a.createElement("hr",{className:"post__hr"}),o.a.createElement("div",null,o.a.createElement("div",{className:"post__votes"},o.a.createElement("span",{className:"post__reactions"},"13"),o.a.createElement("span",null,"\xa0szop\xf3w jest za, a\xa0"),o.a.createElement("span",{className:"post__reactions"},"5"),o.a.createElement("span",null,"\xa0przeciw")),o.a.createElement("ul",{className:"post__comments"},m.slice(0).reverse().slice(0,3).map((function(e,t){return o.a.createElement("li",{key:t},o.a.createElement("span",{className:"post__username"},e.username)," ",e.commentText)})),s>3?o.a.createElement("li",null,o.a.createElement("button",{className:"post__showAllButton",onClick:function(){window.location.hash="comments",i()}},"Zobacz wszystkie")):null))),"#comments"===window.location.hash?o.a.createElement($,{forceUpdatePost:i,post:t,postComments:m,focus:0===s}):null)}),te=(a(123),function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.socket})),a=Object(b.c)((function(e){return e.posts})),c=Object(n.useState)(a.posts),r=Object(j.a)(c,2),s=r[0],l=r[1],i=Y()();return Object(n.useEffect)((function(){t?(t.on("posts",(function(t){e(w(t)),l(t)})),t.on("post",(function(e){e.comments=[],l([e].concat(Object(_.a)(s)))}))):i()}),[i,t,s,e]),Object(n.useEffect)((function(){e(w(s))}),[s,e]),o.a.createElement("ul",{className:"posts"},s.map((function(e,t){return o.a.createElement(ee,{key:e._id,post:e})})))}),ae=a(66),ne=a.n(ae),oe=a(67),ce=a.n(oe),re=a(19),se=a.n(re),le=a(68),ie=a.n(le),me=a(69),ue=a.n(me),pe=a(70),de=a.n(pe),_e=(a(124),function(e){var t=e.setCreatePostFrom,a=Object(n.useState)(""),c=Object(j.a)(a,2),r=c[0],s=c[1],l=Object(n.useState)(""),i=Object(j.a)(l,2),m=i[0],u=i[1],p=Object(b.c)((function(e){return e.socket})),d=function(){var e=document.getElementById("file").files[0],t=new FileReader;t.onloadend=function(){!function(e){var t=new Headers;t.append("Content-Type","application/x-www-form-urlencoded");var a=new URLSearchParams;a.append("key","69106b72459a3015d3a83871dde47b63"),a.append("image",e),fetch("https://api.imgbb.com/1/upload",{method:"POST",headers:t,body:a,redirect:"follow"}).then((function(e){return e.json()})).then((function(e){return u({large:e.data.image.url,mini:e.data.thumb.url,medium:e.data.medium.url})})).catch((function(e){return console.log("error",e)}))}(t.result.substr(t.result.indexOf(",")+1))},e&&t.readAsDataURL(e)};return Z()(document.querySelector("textarea")),o.a.createElement(ce.a,{axis:"y",handle:".createPostForm__handle"},o.a.createElement("div",{className:"createPostForm"},o.a.createElement("div",{className:"createPostForm__handle"},o.a.createElement("div",null,o.a.createElement("img",{className:"createPostForm__formIco",src:ie.a,alt:"createPost"}),o.a.createElement("span",{className:"createPostForm__handleTitle"},"Utw\xf3rz post")),o.a.createElement("button",{className:"createPostForm__closeButton",onClick:function(){return t(!1)}},o.a.createElement("img",{src:se.a,alt:"closeForm"}))),o.a.createElement("form",{action:"",className:"createPostForm__form"},o.a.createElement("label",{className:"createPostForm__label",htmlFor:"body"},"Tre\u015b\u0107:"),o.a.createElement("textarea",{name:"body",className:"createPostForm__postBody",rows:"8",placeholder:"Nie ma to jak koronawirus x_x",onChange:function(e){return s(e.target.value)},value:r}),o.a.createElement("label",{className:"createPostForm__label",htmlFor:"image"},"Obraz:"),o.a.createElement("label",{className:"createPostForm__labelButtonStyle"},o.a.createElement("img",{src:""===m?ue.a:de.a,alt:"upload",className:"createPostForm__uploadImg"}),o.a.createElement("input",{className:"createPostForm__imageButton",name:"image",type:"file",accept:"image/x-png,image/jpeg",id:"file",onChange:function(){return d()}})),o.a.createElement("button",{className:"createPostForm__submit",onClick:function(e){return function(e,a){e.preventDefault();var n={body:r,image:m};n&&(p.emit("sendPost",n),t(!1))}(e)}},"Opublikuj"))))}),fe=(a(125),function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),a=t[0],c=t[1];return o.a.createElement("div",{className:"createPost"},a?o.a.createElement(_e,{setCreatePostFrom:c}):o.a.createElement("button",{className:"createPost__button",onClick:function(){return c(!0)}},o.a.createElement("img",{src:ne.a,alt:""})))}),ge=(a(126),function(e){var t=e.setMenu,a={display:"block"};return""!==window.location.hash?a.display="none":a.display="block",o.a.createElement("div",{style:a,className:"chan",onClick:function(){return t(!1)}},o.a.createElement(te,null),o.a.createElement(fe,null))}),he=a(20),Ee=a.n(he),be=(a(127),function(e){var t=e.chatWith,a=e.setChatWith;return o.a.createElement("div",{className:"topBarChat"},o.a.createElement("button",{className:"topBarChat__backButton",onClick:function(){a(""),window.history.back()}},o.a.createElement("img",{src:F.a,alt:"back"})),o.a.createElement("div",{className:"topBarChat__title"},t),o.a.createElement("div",{className:"topBarChat__online"},o.a.createElement("div",{className:"topBarChat__onlineNumber"},"1"),o.a.createElement("img",{src:Ee.a,alt:"online"})))}),ve=(a(128),function(e){var t=e.message,a=e.isMy;return o.a.createElement("div",{className:"message ".concat(a?"message--end":null)},o.a.createElement("div",{className:"message__speechBubble ".concat(a?"message__speechBubble--end":null)},t.body),o.a.createElement("div",{className:"message__username"},t.username))}),Ne=a(71),we=a.n(Ne),je=(a(162),function(e){var t=e.chatWith,a=Object(b.c)((function(e){return e.socket})),c=Object(b.c)((function(e){return e.userInfo.username})),r=Object(n.useState)([]),s=Object(j.a)(r,2),l=s[0],i=s[1];return Object(n.useEffect)((function(){a.on("message",(function(e){i([].concat(Object(_.a)(l),[e]))}))}),[l,a]),Object(n.useEffect)((function(){a.emit("joinChat",t),a.on("messages",(function(e){i(e)}))}),[a,t]),o.a.createElement(we.a,{className:"messages"},l.map((function(e){return o.a.createElement(ve,{key:e._id,message:e,isMy:e.username===c})})))}),ke=a(72),Oe=a.n(ke),ye=(a(163),function(){var e=Object(b.c)((function(e){return e.socket})),t=Object(n.useState)(""),a=Object(j.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(""),l=Object(j.a)(s,2),i=l[0];l[1];Z()(document.querySelector(".messageForm__textarea"));return o.a.createElement("div",{className:"messageForm"},o.a.createElement("button",{className:"messageForm__sendImageButton"},o.a.createElement("img",{src:G.a,alt:""})),o.a.createElement("textarea",{className:"messageForm__textarea",rows:"1",wrap:"hard",placeholder:"Napisz wiadomo\u015b\u0107...",onChange:function(e){return r(e.target.value)},value:c}),o.a.createElement("button",{className:"messageForm__sendMessageButton",onClick:function(){return function(){var t={messageText:c,messageImage:i};e.emit("sendMessage",t),r("")}()}},o.a.createElement("img",{src:Oe.a,alt:""})))}),Se=(a(164),function(e){var t=e.chatWith,a=e.setChatWith,n=document.querySelector(".conversation");return n&&(n.scrollTop=n.scrollHeight),o.a.createElement("div",{className:"conversation"},o.a.createElement(be,{chatWith:t,setChatWith:a}),o.a.createElement(je,{chatWith:t}),o.a.createElement(ye,{chatWith:t}))}),Ce=a(73),xe=a.n(Ce),ze=(a(165),function(e){var t=e.forceUpdateMain,a=Object(n.useState)(""),c=Object(j.a)(a,2),r=c[0],s=c[1];return window.onhashchange=function(){t()},o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"chat"},o.a.createElement("button",{className:"chat__all",onClick:function(){s("all"),window.location.hash+="/#all"}},o.a.createElement("div",{className:"chat__allHeader"},o.a.createElement("img",{src:xe.a,alt:"wtf"}),o.a.createElement("div",{className:"chat__allTitle"},"Wszyscy")),o.a.createElement("div",{className:"chat__allOnline"},o.a.createElement("div",{className:"chat__allOnlineNumber"},"0"),o.a.createElement("img",{src:Ee.a,alt:""}))),o.a.createElement("ul",null,o.a.createElement("li",null,"Tu znajd\u0105 si\u0119 Twoje rozmowy z innymi szopami"))),r?o.a.createElement(Se,{chatWith:r,setChatWith:s}):null)}),Te=(a(166),function(e){var t=e.setMenu;return o.a.createElement("aside",{className:"menu"},o.a.createElement("div",{className:"menu__header"},"Witaj, ",o.a.createElement("span",{className:"menu__username"},"adam"),o.a.createElement("button",{className:"menu__close",onClick:function(){return t(!1)}},o.a.createElement("img",{src:se.a,alt:"close"}))),o.a.createElement("ul",{className:"menu__options"},o.a.createElement("li",{className:"menu__option menu__option--chosen"},"Tablica"),o.a.createElement("li",{className:"menu__option"},"Moje posty"),o.a.createElement("li",{className:"menu__option"},"Obserwowane"),o.a.createElement("li",{className:"menu__option"},"Sklep"),o.a.createElement("li",{className:"menu__option"},"Randka"),o.a.createElement("li",{className:"menu__option"},"Ustawienia"),o.a.createElement("li",{className:"menu__option menu__option--logout",onClick:function(){return localStorage.setItem("token",null),void window.location.reload()}},"Wyloguj")))}),Be=function(){var e=Y()(),t=Object(n.useState)(!1),a=Object(j.a)(t,2),c=a[0],r=a[1];return window.onload=function(){window.location.hash=""},console.log(),o.a.createElement("div",null,o.a.createElement(M,{setMenu:r,forceUpdateMain:e}),window.location.hash.indexOf("chat")>0?o.a.createElement(ze,{forceUpdateMain:e}):null,c?o.a.createElement(Te,{setMenu:r}):null,o.a.createElement(ge,{setMenu:r}))},Pe=a(36),Fe=a.n(Pe),Ie=function(){var e="https://schoolchan.herokuapp.com",t=Object(b.b)(),a=Object(b.c)((function(e){return e.isLogged}));return Object(n.useEffect)((function(){s=N()(e,{query:"token="+localStorage.getItem("token")}),t({type:"SET_SOCKET",socket:s}),s.on("error",(function(e){e&&(localStorage.removeItem("token"),t({type:"SIGN_OUT"}))})),s.on("connect",(function(){})),s.on("userInfo",(function(e){t({type:"SET_USER",user:e}),s.emit("joinChan",(function(e){e&&alert(e)}))})),s.on("connect_error",(function(){console.log("Brak po\u0142\u0105czenia"),localStorage.removeItem("token"),t({type:"SIGN_OUT"})}))}),[e,t,s]),o.a.createElement(o.a.Fragment,null,a?Fe()()?o.a.createElement(Be,null):"Tymczasowo wersja strony dost\u0119pna tylko na urz\u0105dzenia mobilne":Fe()()?o.a.createElement(C,null):"Tymczasowo wersja strony dost\u0119pna tylko na urz\u0105dzenia mobilne")},We=Object(m.c)(E,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(o.a.createElement(b.a,{store:We},o.a.createElement(Ie,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");c?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):r(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):r(t,e)}))}}(),"serviceWorker"in navigator&&(console.log("Will the service worker register?"),navigator.serviceWorker.register("./serviceWorker.js").then((function(e){console.log("Yes, it did.")})).catch((function(e){console.log("No it didn't. This happened: ",e)})))}],[[75,1,2]]]);
//# sourceMappingURL=main.ca70f406.chunk.js.map