(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a5abb620"],{"2d25":function(t,e,n){"use strict";n("2ef7")},"2ef7":function(t,e,n){},"3e51":function(t,e,n){"use strict";var c=n("7a23"),a={class:"page"},u={key:0,class:"page-header"},o={class:"page-container"},r={class:"page-title"};function b(t,e,n,b,i,s){return Object(c["r"])(),Object(c["g"])("div",a,[t.showBackButton?(Object(c["r"])(),Object(c["g"])("div",u,[Object(c["h"])("button",{class:"btn-back",type:"button",onClick:e[0]||(e[0]=function(e){return t.$router.go(-1)})},"返回")])):Object(c["f"])("",!0),Object(c["h"])("div",o,[Object(c["h"])("h3",r,Object(c["z"])(t.title),1),Object(c["v"])(t.$slots,"default")])])}
/*!
 * ©teamwei.com
 * author: teamwei
 * date: 2021-08-20
 */var i=Object(c["j"])({name:"CatPage",props:{title:String,showBackButton:{type:Boolean,default:function(){return!!window.history.state.back}}}});n("2d25");i.render=b;e["a"]=i},"8b5b":function(t,e,n){"use strict";n.r(e);var c=n("7a23");function a(t,e,n,a,u,o){var r=Object(c["w"])("cat-page");return Object(c["r"])(),Object(c["e"])(r,{class:"page-c",title:"这是页面C",style:{"background-color":"#ccc"}},{default:Object(c["D"])((function(){return[Object(c["E"])(Object(c["h"])("input",{class:"input",type:"text",placeholder:"请输入文字","onUpdate:modelValue":e[0]||(e[0]=function(e){return t.inputValue=e})},null,512),[[c["B"],t.inputValue]]),Object(c["h"])("button",{class:"btn btn-primary",type:"button",onClick:e[1]||(e[1]=function(){return t.go&&t.go.apply(t,arguments)})},"跳转到页面D")]})),_:1})}var u=n("6c02"),o=n("3e51"),r=Object(c["j"])({name:"PageC",components:{CatPage:o["a"]},setup:function(){var t=Object(u["useRouter"])(),e=Object(c["u"])(),n=function(){t.push("/d")};return{inputValue:e,go:n}}});r.render=a;e["default"]=r}}]);