(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2408cea8"],{"0cb2":function(e,t,n){var r=n("7b0b"),a=Math.floor,c="".replace,o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,i=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,u,l,s){var f=n+e.length,d=u.length,p=i;return void 0!==l&&(l=r(l),p=o),c.call(s,p,(function(r,c){var o;switch(c.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(f);case"<":o=l[c.slice(1,-1)];break;default:var i=+c;if(0===i)return r;if(i>d){var s=a(i/10);return 0===s?r:s<=d?void 0===u[s-1]?c.charAt(1):u[s-1]+c.charAt(1):r}o=u[i-1]}return void 0===o?"":o}))}},"107c":function(e,t,n){var r=n("d039"),a=n("da84"),c=a.RegExp;e.exports=r((function(){var e=c("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"14c3":function(e,t,n){var r=n("c6b6"),a=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var c=n.call(e,t);if("object"!==typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"2d25":function(e,t,n){"use strict";n("2ef7")},"2ef7":function(e,t,n){},"3e51":function(e,t,n){"use strict";var r=n("7a23"),a={class:"page"},c={key:0,class:"page-header"},o={class:"page-container"},i={class:"page-title"};function u(e,t,n,u,l,s){return Object(r["r"])(),Object(r["g"])("div",a,[e.showBackButton?(Object(r["r"])(),Object(r["g"])("div",c,[Object(r["h"])("button",{class:"btn-back",type:"button",onClick:t[0]||(t[0]=function(t){return e.$router.go(-1)})},"返回")])):Object(r["f"])("",!0),Object(r["h"])("div",o,[Object(r["h"])("h3",i,Object(r["z"])(e.title),1),Object(r["v"])(e.$slots,"default")])])}
/*!
 * ©teamwei.com
 * author: teamwei
 * date: 2021-08-20
 */var l=Object(r["j"])({name:"CatPage",props:{title:String,showBackButton:{type:Boolean,default:function(){return!!window.history.state.back}}}});n("2d25");l.render=u;t["a"]=l},5319:function(e,t,n){"use strict";var r=n("d784"),a=n("d039"),c=n("825a"),o=n("a691"),i=n("50c4"),u=n("577e"),l=n("1d80"),s=n("8aa5"),f=n("0cb2"),d=n("14c3"),p=n("b622"),v=p("replace"),g=Math.max,x=Math.min,b=function(e){return void 0===e?e:String(e)},h=function(){return"$0"==="a".replace(/./,"$0")}(),O=function(){return!!/./[v]&&""===/./[v]("a","$0")}(),y=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));r("replace",(function(e,t,n){var r=O?"$":"$0";return[function(e,n){var r=l(this),a=void 0==e?void 0:e[v];return void 0!==a?a.call(e,r,n):t.call(u(r),e,n)},function(e,a){var l=c(this),p=u(e);if("string"===typeof a&&-1===a.indexOf(r)&&-1===a.indexOf("$<")){var v=n(t,l,p,a);if(v.done)return v.value}var h="function"===typeof a;h||(a=u(a));var O=l.global;if(O){var y=l.unicode;l.lastIndex=0}var j=[];while(1){var E=d(l,p);if(null===E)break;if(j.push(E),!O)break;var I=u(E[0]);""===I&&(l.lastIndex=s(p,i(l.lastIndex),y))}for(var w="",R=0,$=0;$<j.length;$++){E=j[$];for(var k=u(E[0]),m=g(x(o(E.index),p.length),0),A=[],B=1;B<E.length;B++)A.push(b(E[B]));var C=E.groups;if(h){var P=[k].concat(A,m,p);void 0!==C&&P.push(C);var S=u(a.apply(void 0,P))}else S=f(k,p,m,A,C,a);m>=R&&(w+=p.slice(R,m)+S,R=m+k.length)}return w+p.slice(R)}]}),!y||!h||O)},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("577e"),a=n("ad6d"),c=n("9f7f"),o=n("5692"),i=n("7c73"),u=n("69f3").get,l=n("fce3"),s=n("107c"),f=RegExp.prototype.exec,d=o("native-string-replace",String.prototype.replace),p=f,v=function(){var e=/a/,t=/b*/g;return f.call(e,"a"),f.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),g=c.UNSUPPORTED_Y||c.BROKEN_CARET,x=void 0!==/()??/.exec("")[1],b=v||x||g||l||s;b&&(p=function(e){var t,n,c,o,l,s,b,h=this,O=u(h),y=r(e),j=O.raw;if(j)return j.lastIndex=h.lastIndex,t=p.call(j,y),h.lastIndex=j.lastIndex,t;var E=O.groups,I=g&&h.sticky,w=a.call(h),R=h.source,$=0,k=y;if(I&&(w=w.replace("y",""),-1===w.indexOf("g")&&(w+="g"),k=y.slice(h.lastIndex),h.lastIndex>0&&(!h.multiline||h.multiline&&"\n"!==y.charAt(h.lastIndex-1))&&(R="(?: "+R+")",k=" "+k,$++),n=new RegExp("^(?:"+R+")",w)),x&&(n=new RegExp("^"+R+"$(?!\\s)",w)),v&&(c=h.lastIndex),o=f.call(I?n:h,k),I?o?(o.input=o.input.slice($),o[0]=o[0].slice($),o.index=h.lastIndex,h.lastIndex+=o[0].length):h.lastIndex=0:v&&o&&(h.lastIndex=h.global?o.index+o[0].length:c),x&&o&&o.length>1&&d.call(o[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(o[l]=void 0)})),o&&E)for(o.groups=s=i(null),l=0;l<E.length;l++)b=E[l],s[b[0]]=o[b[1]];return o}),e.exports=p},"9f7f":function(e,t,n){var r=n("d039"),a=n("da84"),c=a.RegExp;t.UNSUPPORTED_Y=r((function(){var e=c("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=c("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("9263"),c=n("d039"),o=n("b622"),i=n("9112"),u=o("species"),l=RegExp.prototype;e.exports=function(e,t,n,s){var f=o(e),d=!c((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),p=d&&!c((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return t=!0,null},n[f](""),!t}));if(!d||!p||n){var v=/./[f],g=t(f,""[e],(function(e,t,n,r,c){var o=t.exec;return o===a||o===l.exec?d&&!c?{done:!0,value:v.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}));r(String.prototype,e,g[0]),r(l,f,g[1])}s&&i(l[f],"sham",!0)}},ec79:function(e,t,n){"use strict";n.r(t);var r=n("7a23");function a(e,t,n,a,c,o){var i=Object(r["w"])("cat-page");return Object(r["r"])(),Object(r["e"])(i,{class:"page-b",title:"这是页面B",style:{"background-color":"#eee"}},{default:Object(r["D"])((function(){return[Object(r["h"])("button",{class:"btn btn-primary",type:"button",onClick:t[0]||(t[0]=function(){return e.go&&e.go.apply(e,arguments)})},"跳转到页面C")]})),_:1})}n("ac1f"),n("5319");var c=n("6c02"),o=n("3e51"),i=Object(r["j"])({name:"PageB",components:{CatPage:o["a"]},setup:function(){var e=Object(c["useRouter"])(),t=function(){e.replace("/c")};return{go:t}}});i.render=a;t["default"]=i},fce3:function(e,t,n){var r=n("d039"),a=n("da84"),c=a.RegExp;e.exports=r((function(){var e=c(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);