import{_ as h,H as n,o as p,c as x,J as e,E as l,a as o,F as C,C as a,D as E}from"./chunks/framework.c463baea.js";const I={},w=a("br",null,null,-1),P=a("br",null,null,-1);function B(u,t){const s=n("el-button");return p(),x(C,null,[e(s,null,{default:l(()=>[o("默认按钮")]),_:1}),e(s,{type:"primary"},{default:l(()=>[o("主要按钮")]),_:1}),e(s,{type:"success",round:""},{default:l(()=>[o("round型成功按钮")]),_:1}),e(s,{type:"info",plain:""},{default:l(()=>[o("plain型信息按钮")]),_:1}),e(s,{type:"warning"},{default:l(()=>[o("警告按钮")]),_:1}),e(s,{type:"danger"},{default:l(()=>[o("危险按钮")]),_:1}),e(s,{type:"text"},{default:l(()=>[o("文字按钮")]),_:1}),w,P],64)}const N=h(I,[["render",B]]),R={data(){return{user:{name:"",classId:""},radio1:"11",radio2:"21",checkList:["31","32"],switchValue1:!0}},methods:{handleRadioChange(u){alert(u)}}};function F(u,t,s,_,c,b){const r=n("el-input"),i=n("el-form-item"),g=n("el-option"),k=n("el-select"),f=n("el-radio"),V=n("el-radio-group"),m=n("el-checkbox"),v=n("el-checkbox-group"),y=n("el-button"),L=n("el-switch"),U=n("el-form");return p(),E(U,{ref:"form",size:"small","label-width":"80px",style:{border:"1px solid #C4E1C5",padding:"20px"},inline:!1,"label-position":"top"},{default:l(()=>[e(i,{label:"输入框Input"},{default:l(()=>[e(r,{modelValue:c.user.name,"onUpdate:modelValue":t[0]||(t[0]=d=>c.user.name=d)},null,8,["modelValue"])]),_:1}),e(i,{label:"选择器Select"},{default:l(()=>[e(k,{modelValue:c.user.classId,"onUpdate:modelValue":t[1]||(t[1]=d=>c.user.classId=d)},{default:l(()=>[e(g,{label:"1班",value:"1001"}),e(g,{label:"2班",value:"1002"})]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"单选Radio"},{default:l(()=>[e(f,{modelValue:c.radio1,"onUpdate:modelValue":t[2]||(t[2]=d=>c.radio1=d),label:"11",onChange:b.handleRadioChange},{default:l(()=>[o("选项1")]),_:1},8,["modelValue","onChange"]),e(f,{modelValue:c.radio1,"onUpdate:modelValue":t[3]||(t[3]=d=>c.radio1=d),label:"12",onChange:b.handleRadioChange},{default:l(()=>[o("选项2")]),_:1},8,["modelValue","onChange"])]),_:1}),e(i,{label:"单选RadioGroup"},{default:l(()=>[e(V,{modelValue:c.radio2,"onUpdate:modelValue":t[4]||(t[4]=d=>c.radio2=d),onChange:b.handleRadioChange},{default:l(()=>[e(f,{label:"21"},{default:l(()=>[o("选项1")]),_:1}),e(f,{label:"22"},{default:l(()=>[o("选项2")]),_:1}),e(f,{label:"23"},{default:l(()=>[o("选项3")]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1}),e(i,{label:"多选框(最少1最多2)"},{default:l(()=>[e(v,{modelValue:c.checkList,"onUpdate:modelValue":t[5]||(t[5]=d=>c.checkList=d),min:1,max:2},{default:l(()=>[e(m,{label:"31"}),e(m,{label:"32"}),e(m,{label:"33"}),e(m,{label:"34",disabled:""}),e(m,{label:"35",disabled:""})]),_:1},8,["modelValue"])]),_:1}),e(i,null,{default:l(()=>[e(y,{type:"primary"},{default:l(()=>[o("提交")]),_:1}),e(y,null,{default:l(()=>[o("取消")]),_:1})]),_:1}),e(L,{style:{display:"block"},modelValue:c.switchValue1,"onUpdate:modelValue":t[6]||(t[6]=d=>c.switchValue1=d),"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"开启","inactive-text":"关闭"},null,8,["modelValue"])]),_:1},512)}const M=h(R,[["render",F]]);const S={};function j(u,t){return p(),x("p",null,"暂未引入")}const z=h(S,[["render",j],["__scopeId","data-v-56fc4385"]]),D={};function H(u,t){const s=n("el-link");return p(),E(s,{href:"https://element.eleme.io",target:"_blank",type:"primary"},{default:l(()=>[o("主要链接")]),_:1})}const J=h(D,[["render",H]]),O={mounted(){let u=document.getElementsByClassName("col-color"),t=[],s=[];for(let _=0;_<u.length;_++)s=Math.floor(Math.random()*16777215).toString(16),t[_]="#"+s;for(let _=0;_<u.length;_++)u[_].style.backgroundColor=t[_]}};function $(u,t,s,_,c,b){const r=n("el-col"),i=n("el-row"),g=n("el-aside"),k=n("el-header"),f=n("el-main"),V=n("el-footer"),m=n("el-container");return p(),x(C,null,[e(i,null,{default:l(()=>[e(r,{class:"col-color",span:8},{default:l(()=>[o("1")]),_:1}),e(r,{class:"col-color",span:8},{default:l(()=>[o("2")]),_:1}),e(r,{class:"col-color",span:8},{default:l(()=>[o("3")]),_:1})]),_:1}),e(i,{gutter:20,type:"flex",justify:"center"},{default:l(()=>[e(r,{class:"col-color",span:3},{default:l(()=>[o("居中")]),_:1}),e(r,{class:"col-color",span:3},{default:l(()=>[o("1")]),_:1}),e(r,{class:"col-color",span:3},{default:l(()=>[o("2")]),_:1}),e(r,{class:"col-color",span:3},{default:l(()=>[o("3")]),_:1})]),_:1}),e(i,{gutter:10},{default:l(()=>[e(r,{class:"col-color",xs:8,sm:6,md:4,lg:3},{default:l(()=>[o("响应式")]),_:1}),e(r,{class:"col-color",xs:4,sm:6,md:8,lg:9},{default:l(()=>[o("1")]),_:1}),e(r,{class:"col-color",xs:4,sm:6,md:8,lg:9},{default:l(()=>[o("2")]),_:1}),e(r,{class:"col-color",xs:8,sm:6,md:4,lg:3},{default:l(()=>[o("3")]),_:1})]),_:1}),e(m,null,{default:l(()=>[e(g,{width:"150px"},{default:l(()=>[o("Aside")]),_:1}),e(m,null,{default:l(()=>[e(k,null,{default:l(()=>[o("Header")]),_:1}),e(f,null,{default:l(()=>[o("Main")]),_:1}),e(V,null,{default:l(()=>[o("Footer")]),_:1})]),_:1})]),_:1})],64)}const A=h(O,[["render",$]]),G=a("h1",{id:"elementui",tabindex:"-1"},[o("ElementUI "),a("a",{class:"header-anchor",href:"#elementui","aria-label":'Permalink to "ElementUI"'},"​")],-1),T=a("div",{class:"danger custom-block"},[a("p",{class:"custom-block-title"},"异常"),a("p",null,"在当前页面刷新，将出现异常，待排查")],-1),q=a("h2",{id:"按钮",tabindex:"-1"},[o("按钮 "),a("a",{class:"header-anchor",href:"#按钮","aria-label":'Permalink to "按钮"'},"​")],-1),K=a("h2",{id:"表单",tabindex:"-1"},[o("表单 "),a("a",{class:"header-anchor",href:"#表单","aria-label":'Permalink to "表单"'},"​")],-1),Q=a("h2",{id:"图标",tabindex:"-1"},[o("图标 "),a("a",{class:"header-anchor",href:"#图标","aria-label":'Permalink to "图标"'},"​")],-1),W=a("h2",{id:"链接",tabindex:"-1"},[o("链接 "),a("a",{class:"header-anchor",href:"#链接","aria-label":'Permalink to "链接"'},"​")],-1),X=a("h2",{id:"布局",tabindex:"-1"},[o("布局 "),a("a",{class:"header-anchor",href:"#布局","aria-label":'Permalink to "布局"'},"​")],-1),ee=JSON.parse('{"title":"ElementUI","description":"","frontmatter":{},"headers":[],"relativePath":"others/ElementUI.md","lastUpdated":null}'),Y={name:"others/ElementUI.md"},le=Object.assign(Y,{setup(u){return(t,s)=>{const _=n("el-link");return p(),x("div",null,[G,T,e(_,{href:"https://element.eleme.cn/#/zh-CN/component/",target:"_blank",type:"primary"},{default:l(()=>[o("more info")]),_:1}),q,e(N),K,e(M),Q,e(z),W,e(J),X,e(A)])}}});export{ee as __pageData,le as default};