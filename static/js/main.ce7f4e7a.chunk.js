(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/arrow.1d027598.svg"},function(e,t,a){e.exports=a.p+"static/media/racoon_male.9eabe416.svg"},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/chatIco.4195cd04.svg"},function(e,t,a){e.exports=a.p+"static/media/userIco.c95fa3fe.svg"},function(e,t,a){e.exports=a.p+"static/media/report.b7a16ce7.svg"},function(e,t,a){e.exports=a.p+"static/media/image_icon.eae12adf.svg"},function(e,t,a){e.exports=a.p+"static/media/backIco.8bf6e5a8.svg"},function(e,t,a){e.exports=a.p+"static/media/addIco.a83663f3.svg"},,function(e,t,a){e.exports=a.p+"static/media/closeIco.6be77778.svg"},function(e,t,a){e.exports=a.p+"static/media/formIco.db5ef68f.svg"},function(e,t,a){e.exports=a.p+"static/media/uploadImage.af8867ce.svg"},function(e,t,a){e.exports=a.p+"static/media/uploadImageDone.3e48864c.svg"},function(e,t,a){e.exports=a(105)},,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,o=a(0),r=a.n(o),c=a(5),s=a.n(c),l=(a(58),a(4)),m=""!==localStorage.getItem("token"),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return!0;case"SIGN_OUT":return!1;default:return e}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SOCKET":return t.socket;case"RESET_SOCKET":default:return e}},p=Object(l.b)({isLogged:i,socket:u}),_=a(2),d=a(41),g=a.n(d),f=a(1),E=(a(94),a(10)),b=a.n(E),h=function(e){var t=e.switchFormState,a=Object(o.useState)(""),n=Object(f.a)(a,2),c=n[0],s=n[1],l=Object(o.useState)(""),m=Object(f.a)(l,2),i=m[0],u=m[1],p=Object(o.useState)(""),_=Object(f.a)(p,2),d=_[0],g=_[1],E=Object(o.useState)(""),h=Object(f.a)(E,2),N=h[0],v=h[1],j=Object(o.useState)(""),w=Object(f.a)(j,2),O=w[0],k=w[1],S=Object(o.useState)(""),y=Object(f.a)(S,2),z=y[0],x=y[1],P={username:c,school:i,repassword:d,password:N};return r.a.createElement("div",{className:"register"},r.a.createElement("div",null,r.a.createElement("h1",{className:"register__title"},"Stw\xf3rz nowe konto"),r.a.createElement("h2",{className:"register__text"},"Trzymaj kontakt anonimowo ze spo\u0142eczno\u015bci\u0105 swojej szko\u0142y.")),r.a.createElement("form",{className:"register__form",onSubmit:function(e){fetch("".concat("https://schoolchan.herokuapp.com","/api/auth/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(P)}).then((function(e){return e.json()})).then((function(e){var a;console.log("Response:",e),"MissingUsernameError"===(a=e.name)?(k("Podaj nazw\u0119 uzytkownika"),x("username")):"MissingPasswordError"===a?(k("Wpisz has\u0142o"),x("password")):"PasswordsDoNotMatch"===a?(k("Podane has\u0142a nie s\u0105 takie same"),x("repassword")):"UserExistsError"===a?(k("Ten pseudonim juz jest zaj\u0119ty"),x("username")):"NoSchoolSelected"===a?(k("Wybierz szko\u0142\u0119"),x("school")):"AccountCreated"===a?t("login"):a?(k("Nieznany b\u0142\u0105d"),x("repassword")):t("login")})).catch((function(e){console.error("Error:",e)})),e.preventDefault()}},r.a.createElement("input",{type:"text",name:"username",placeholder:"Pseudonim",className:"register__input",value:c,onChange:function(e){return s(e.target.value)}}),r.a.createElement("span",{className:"register__error"},"username"===z?O:null),r.a.createElement("select",{name:"school",placeholder:"Wybierz szko\u0142e",className:"register__input",value:i,onChange:function(e){return u(e.target.value)}},r.a.createElement("option",{value:!0,hidden:!0},"Wybierz szko\u0142e"),r.a.createElement("option",{value:"kili\u0144skiego"},"kili\u0144skiego"),r.a.createElement("option",{value:"test"},"test")),r.a.createElement("span",{className:"register__error"},"school"===z?O:null),r.a.createElement("input",{type:"password",name:"password",placeholder:"Has\u0142o",className:"register__input",value:N,onChange:function(e){return v(e.target.value)}}),r.a.createElement("span",{className:"register__error"},"password"===z?O:null),r.a.createElement("input",{type:"password",name:"repassword",placeholder:"Powt\xf3rz has\u0142o",className:"register__input",value:d,onChange:function(e){return g(e.target.value)}}),r.a.createElement("span",{className:"register__error"},"repassword"===z?O:null),r.a.createElement("div",{className:"register__buttons"},r.a.createElement("button",{type:"button",className:"register__loginButton",onClick:function(){return t("login")}},r.a.createElement("p",{className:"register__loginText"},"Masz ju\u017c konto?"),r.a.createElement("p",{className:"register__loginTextBlue"},"Zaloguj si\u0119")),r.a.createElement("button",{className:"register__registerButton"},"Zarejestruj si\u0119 ",r.a.createElement("img",{src:b.a,alt:""})))))},N=(a(95),function(e){var t=e.switchFormState,a=Object(o.useState)(""),n=Object(f.a)(a,2),c=n[0],s=n[1],l=Object(o.useState)(""),m=Object(f.a)(l,2),i=m[0],u=m[1],p=Object(o.useState)(""),d=Object(f.a)(p,2),g=d[0],E=d[1],h=Object(_.b)(),N=function(e){400===e?E("Wpisz dane logowania"):401===e?E("Wpisane login lub has\u0142o s\u0105 nieprawid\u0142owe"):404!==e&&403!==e||E("Serwery aktualnie s\u0105 niedost\u0119pne. Prosz\u0119 spr\xf3bowa\u0107 ponownie p\xf3\u017aniej.")},v={username:c,password:i};return r.a.createElement("div",{className:"login"},r.a.createElement("h1",{className:"login__title"},"Logowanie"),r.a.createElement("form",{className:"login__form",onSubmit:function(e){fetch("".concat("https://schoolchan.herokuapp.com","/api/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)}).then((function(e){return N(e.status),e.json()})).then((function(e){console.log("Success:",e),e.message?console.log("Z\u0142e dane"):(localStorage.setItem("token",e.token),h({type:"SIGN_IN"}))})).catch((function(e){"TypeError: Failed to fetch"==e&&N(404)})),e.preventDefault()}},r.a.createElement("input",{type:"text",placeholder:"Pseudonim",className:"login__input",value:c,onChange:function(e){return s(e.target.value)}}),r.a.createElement("input",{type:"password",placeholder:"Has\u0142o",className:"login__input",value:i,onChange:function(e){return u(e.target.value)}}),r.a.createElement("span",{className:"login__error"},g),r.a.createElement("div",{className:"login__underInputs"},r.a.createElement("button",{className:"login__forgotPassword"},"Zapomnia\u0142e\u015b has\u0142a?"),r.a.createElement("label",{className:"login__remember"},r.a.createElement("input",{type:"checkbox",name:"remember",className:"login__rememberCheckbox"}),"Pami\u0119taj mnie")),r.a.createElement("button",{className:"login__loginButton"},"Zaloguj si\u0119 ",r.a.createElement("img",{src:b.a,alt:""})),r.a.createElement("button",{className:"login__registerButton",onClick:function(){return t("register")}},"Stw\xf3rz nowe konto")))}),v=(a(96),function(){var e=Object(o.useState)("login"),t=Object(f.a)(e,2),a=t[0],n=t[1];return r.a.createElement("div",{className:"start"},r.a.createElement("div",{className:"start__bannerText"},"Pozosta\u0144 anonimowy i wyra\u017a swoje opinie"),r.a.createElement("hr",{className:"start__hr"}),"login"===a?r.a.createElement(N,{switchFormState:n}):r.a.createElement(h,{switchFormState:n}))}),j=a(42),w=a.n(j),O=a(43),k=a.n(O),S=(a(97),function(){return r.a.createElement("div",{className:"topBar"},r.a.createElement("ul",{className:"topBar__optionsList"},r.a.createElement("li",{className:"topBar__options topBar__options--button"},r.a.createElement("button",{className:"topBar__button topBar__button--menu"},r.a.createElement("img",{src:k.a,alt:""}))),r.a.createElement("li",{className:"topBar__options topBar__options--banner"},"schoolchan"),r.a.createElement("li",{className:"topBar__options topBar__options--button"},r.a.createElement("button",{className:"topBar__button topBar__button--chat"},r.a.createElement("img",{src:w.a,alt:""})))))}),y=a(12),z=a(11),x=a.n(z),P=a(44),T=a.n(P),C=(a(98),function(e){var t=e.comment;return r.a.createElement("li",{className:"comment"},r.a.createElement("img",{src:x.a,alt:"sex",className:"comment__sex"}),r.a.createElement("div",{className:"comment__username"},t.username),"\xa0",r.a.createElement("div",null,r.a.createElement("div",{className:"comment__text"},t.commentText)),"\xa0",t.image?r.a.createElement("a",{href:t.image.large,rel:"noopener noreferrer",target:"_blank"},"Obraz"):null)}),I=a(45),F=a.n(I),B=a(46),D=a.n(B),U=(a(99),function(e){var t=e.post,a=e.setCommentsView,n=Object(o.useState)(""),c=Object(f.a)(n,2),s=c[0],l=c[1],m=Object(o.useState)(""),i=Object(f.a)(m,2),u=i[0],p=i[1],d=Object(o.useState)([]),g=Object(f.a)(d,2),E=g[0],b=g[1],h=Object(_.c)((function(e){return e.socket}));Object(o.useEffect)((function(){h.emit("showComments",t._id)}),[h,t._id]),Object(o.useEffect)((function(){h&&(h.on("comments",(function(e){b(e)})),h.on("comment",(function(e){b([e].concat(Object(y.a)(E)))})))}),[E,h]);var N=function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(){!function(e){var t=new Headers;t.append("Content-Type","application/x-www-form-urlencoded");var a=new URLSearchParams;a.append("key","69106b72459a3015d3a83871dde47b63"),a.append("image",e),fetch("https://api.imgbb.com/1/upload",{method:"POST",headers:t,body:a,redirect:"follow"}).then((function(e){return e.json()})).then((function(e){l({large:e.data.image.url,mini:e.data.thumb.url,medium:e.data.medium.url})})).catch((function(e){return console.log("error",e)}))}(a.result.substr(a.result.indexOf(",")+1))},t&&a.readAsDataURL(t)};return r.a.createElement("div",{className:"comments"},r.a.createElement("div",{className:"comments__topBar"},r.a.createElement("button",{onClick:function(){return a(!1)}},r.a.createElement("img",{src:D.a,alt:"back",className:"comments__backButtonImg"})),r.a.createElement("div",{className:"comments__title"},"Komentarze")),r.a.createElement("ul",{className:"comments__list"},E.map((function(e,t){return r.a.createElement(C,{key:t,comment:e})}))),r.a.createElement("form",{className:"comments__commentForm"},r.a.createElement("label",null,r.a.createElement("img",{src:F.a,alt:"sendImage"}),r.a.createElement("input",{className:"comments__imageInput",type:"file",onChange:function(e){return N(e)}})),r.a.createElement("textarea",{rows:"1",wrap:"hard",placeholder:"Napisz komentarz...",className:"comments__textInput",onChange:function(e){return p(e.target.value)},value:u}),r.a.createElement("button",{className:"comments__submit",onClick:function(e){return function(e){e.preventDefault();var a={image:s,commentText:u,postId:t._id};h.emit("sendComment",a),p(""),l("")}(e)}},"\u2332")))}),L=function(e){var t=new Date,a=-1*(Date.parse(e)-t.getTime())/6e4;if(a>43829){var n=new Date(e),o=n.getFullYear(),r=n.getMonth()+1,c=n.getDate();return c<10&&(c="0"+c),r<10&&(r="0"+r),c+"-"+r+"-"+o}return a>2880?"".concat(Math.ceil(a/1440)," dni temu"):a>1440?"1 dzie\u0144 temu":a>120?"godzin\u0119 temu":a>60?"".concat(Math.ceil(a/60)," h temu"):a>2?"".concat(Math.ceil(a)," min temu"):a?"minut\u0119 temu":"przed chwil\u0105"},R=(a(100),function(e){var t=e.post,a=Object(o.useState)(!1),n=Object(f.a)(a,2),c=n[0],s=n[1],l=Object(o.useState)(),m=Object(f.a)(l,2),i=m[0],u=m[1],p=t.comments,_=t.image,d=t.body,g=t.createdAt,E=t.username;return p=p||[],Object(o.useEffect)((function(){u(p.length)}),[p.length]),r.a.createElement("li",{className:"post"},r.a.createElement("img",{src:x.a,alt:"sex",className:"post__sex"}),r.a.createElement("div",{className:"post__content"},r.a.createElement("div",{className:"post__username"},E),r.a.createElement("div",{className:"post__postDate"},L(g)),r.a.createElement("div",{className:"post__body"},d),_?r.a.createElement("img",{className:"post__image",src:_.medium,alt:""}):null,r.a.createElement("div",{className:"post__buttons"},r.a.createElement("button",{className:"post__like"},"+1"),r.a.createElement("button",{className:"post__dislike"},"-1"),r.a.createElement("button",{className:"post__commentsButton",onClick:function(){return s(!0)}},0===i?"Napisz komentarz":"Komentarze ".concat(i)))),r.a.createElement("button",{className:"post__reportButton"},r.a.createElement("img",{src:T.a,alt:"report"})),r.a.createElement("div",{className:"post__bottom"},r.a.createElement("hr",{className:"post__hr"}),r.a.createElement("div",null,r.a.createElement("div",{className:"post__votes"},r.a.createElement("span",{className:"post__reactions"},"13"),r.a.createElement("span",null,"\xa0szop\xf3w jest za, a\xa0"),r.a.createElement("span",{className:"post__reactions"},"5"),r.a.createElement("span",null,"\xa0przeciw")),r.a.createElement("ul",{className:"post__comments"},p[0]?r.a.createElement("li",null,r.a.createElement("span",{className:"post__username"},p[0].username)," ",p[0].commentText):null,p[1]?r.a.createElement("li",null,r.a.createElement("span",{className:"post__username"},p[1].username)," ",p[1].commentText):null))),c?r.a.createElement(U,{post:t,setCommentsView:s}):null)}),M=(a(101),function(){var e=Object(_.c)((function(e){return e.socket})),t=Object(o.useState)([]),a=Object(f.a)(t,2),n=a[0],c=a[1];return e&&(e.on("posts",(function(e){c(e)})),e.on("post",(function(e){c([e].concat(Object(y.a)(n)))}))),r.a.createElement("ul",{className:"posts"},n.map((function(e,t){return r.a.createElement(R,{key:t,post:e})})))}),W=a(47),G=a.n(W),K=a(48),Z=a.n(K),A=a(49),H=a.n(A),J=a(50),V=a.n(J),X=a(51),q=a.n(X),Y=a(52),Q=a.n(Y),$=(a(102),function(e){var t=e.setCreatePostFrom,a=Object(o.useState)(""),n=Object(f.a)(a,2),c=n[0],s=n[1],l=Object(o.useState)(""),m=Object(f.a)(l,2),i=m[0],u=m[1],p=Object(_.c)((function(e){return e.socket})),d=function(){var e=document.getElementById("file").files[0],t=new FileReader;t.onloadend=function(){!function(e){var t=new Headers;t.append("Content-Type","application/x-www-form-urlencoded");var a=new URLSearchParams;a.append("key","69106b72459a3015d3a83871dde47b63"),a.append("image",e),fetch("https://api.imgbb.com/1/upload",{method:"POST",headers:t,body:a,redirect:"follow"}).then((function(e){return e.json()})).then((function(e){return u({large:e.data.image.url,mini:e.data.thumb.url,medium:e.data.medium.url})})).catch((function(e){return console.log("error",e)}))}(t.result.substr(t.result.indexOf(",")+1))},e&&t.readAsDataURL(e)};return r.a.createElement(Z.a,{axis:"y",handle:".createPostForm__handle"},r.a.createElement("div",{className:"createPostForm"},r.a.createElement("div",{className:"createPostForm__handle"},r.a.createElement("div",null,r.a.createElement("img",{className:"createPostForm__formIco",src:V.a,alt:"createPost"}),r.a.createElement("span",{className:"createPostForm__handleTitle"},"Utw\xf3rz post")),r.a.createElement("button",{className:"createPostForm__closeButton",onClick:function(){return t(!1)}},r.a.createElement("img",{src:H.a,alt:"closeForm"}))),r.a.createElement("form",{action:"",className:"createPostForm__form"},r.a.createElement("label",{className:"createPostForm__label",htmlFor:"body"},"Tre\u015b\u0107:"),r.a.createElement("textarea",{name:"body",className:"createPostForm__commentBody",rows:"8",placeholder:"Nie ma to jak koronawirus x_x",onChange:function(e){return s(e.target.value)},value:c}),r.a.createElement("label",{className:"createPostForm__label",htmlFor:"image"},"Obraz:"),r.a.createElement("label",null,r.a.createElement("img",{src:""===i?q.a:Q.a,alt:"upload",className:"createPostForm__uploadImg"}),r.a.createElement("input",{className:"createPostForm__imageButton",name:"image",type:"file",accept:"image/x-png,image/jpeg",id:"file",onChange:function(){return d()}})),r.a.createElement("button",{className:"createPostForm__submit",onClick:function(e){return function(e,a){e.preventDefault();var n={body:c,image:i};n&&(p.emit("sendPost",n),t(!1))}(e)}},"Opublikuj"))))}),ee=(a(103),function(){var e=Object(o.useState)(!1),t=Object(f.a)(e,2),a=t[0],n=t[1];return r.a.createElement("div",{className:"createPost"},a?r.a.createElement($,{setCreatePostFrom:n}):r.a.createElement("button",{className:"createPost__button",onClick:function(){return n(!0)}},r.a.createElement("img",{src:G.a,alt:""})))}),te=(a(104),function(){return ce(),r.a.createElement("div",{className:"chan"},r.a.createElement(M,null),r.a.createElement(ee,null))}),ae=function(){return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(te,null))},ne=a(23),oe=a.n(ne),re="https://schoolchan.herokuapp.com",ce=function(){var e=Object(_.b)(),t=Object(_.c)((function(e){return e.isLogged}));return Object(o.useEffect)((function(){(n=g()(re,{query:"token="+localStorage.getItem("token")})).on("error",(function(t){t&&(localStorage.removeItem("token"),e({type:"SIGN_OUT"}))})),n.on("userInfo",(function(t){e({type:"SET_SOCKET",socket:n}),n.emit("joinChan",(function(e){e&&alert(e)}))})),n.on("connect_error",(function(){console.log("Brak po\u0142\u0105czenia"),localStorage.removeItem("token"),e({type:"SIGN_OUT"})}))}),[re,e]),r.a.createElement(r.a.Fragment,null,t?oe()()?r.a.createElement(ae,null):"Tymczasowo wersja strony dost\u0119pna tylko na urz\u0105dzenia mobilne":oe()()?r.a.createElement(v,null):"Tymczasowo wersja strony dost\u0119pna tylko na urz\u0105dzenia mobilne")},se=Object(l.c)(p,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(r.a.createElement(_.a,{store:se},r.a.createElement(ce,null)),document.getElementById("root"))}],[[53,1,2]]]);
//# sourceMappingURL=main.ce7f4e7a.chunk.js.map