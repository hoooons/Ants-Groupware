"use strict";(self["webpackChunkrtc_frontend"]=self["webpackChunkrtc_frontend"]||[]).push([[325],{4325:(e,t,o)=>{o.r(t),o.d(t,{default:()=>v});var l=o(3673),n=o(2323);const i=(0,l.HX)("data-v-ef2e1d8e");(0,l.dD)("data-v-ef2e1d8e");const a={id:"allBoard"},m={id:"board"},d={id:"detail"},s={class:"q-pa-md",style:{"max-width":"1200px","margin-left":"-17px"}},r={class:"comment",style:{display:"inline-block","line-height":"50px"}},c={style:{float:"right",color:"grey"}};(0,l.Cn)();const u=i(((e,t,o,i,u,p)=>{const g=(0,l.up)("q-input"),k=(0,l.up)("q-icon"),f=(0,l.up)("q-btn");return(0,l.wg)(),(0,l.j4)("div",a,[(0,l.Wm)("div",m,[(0,l.Wm)("div",d,[(0,l.Wm)(g,{modelValue:e.detail.title,"onUpdate:modelValue":t[1]||(t[1]=t=>e.detail.title=t),style:{width:"50%","font-size":"20px",color:"black",display:"inline-block"},filled:"",readonly:""},null,8,["modelValue"]),e.mark?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(k,{key:0,onClick:e.markOn,class:"mark",style:{"font-size":"4.0em",color:"#249752"},name:"bookmark_border"},null,8,["onClick"])),e.mark?((0,l.wg)(),(0,l.j4)(k,{key:1,onClick:e.markOff,class:"mark",style:{"font-size":"4.0em",color:"#249752"},name:"bookmark"},null,8,["onClick"])):(0,l.kq)("",!0),(0,l.Wm)("div",s,[(0,l.Wm)(g,{filled:"",type:"textarea",readonly:"",modelValue:e.detail.content,"onUpdate:modelValue":t[2]||(t[2]=t=>e.detail.content=t),rows:"13",style:{"font-size":"20px"}},null,8,["modelValue"])]),(0,l.Wm)(g,{modelValue:e.form.comment,"onUpdate:modelValue":t[3]||(t[3]=t=>e.form.comment=t),style:{"font-size":"20px",width:"86%",display:"inline-block"},label:"댓글입력란",filled:""},null,8,["modelValue"]),(0,l.Wm)(f,{onClick:e.regist,style:{color:"white","background-color":"#18C75E","font-size":"20px","margin-top":"-20px","margin-left":"10px",padding:"10px"},label:"등록"},null,8,["onClick"]),(0,l.Wm)(f,{onClick:e.back,style:{"font-size":"20px","margin-top":"-20px","margin-left":"10px",padding:"10px"},color:"amber",glossy:"",label:"뒤로"},null,8,["onClick"]),((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.comments,((e,t)=>((0,l.wg)(),(0,l.j4)("div",{key:t},[(0,l.Wm)("img",{src:e.profileLocation,style:{display:"inline-block",width:"50px",height:"50px","border-radius":"25px",position:"relative",top:"10px"}},null,8,["src"]),(0,l.Wm)("div",r,[(0,l.Uk)((0,n.zw)(e.userName)+"님 : "+(0,n.zw)(e.comment)+" ",1),(0,l.Wm)("span",c,(0,n.zw)(e.registrationTime),1)])])))),128))])])])}));var p=o(1959),g=o(7874),k=o(9582);const f=(0,l.aZ)({name:"board",methods:{},setup(){const e=(0,g.oR)(),t=(0,k.tv)(),o=(0,l.Fl)((()=>e.getters["module/getDetail"])),n=(0,l.Fl)((()=>e.getters["module/getComments"])),i=(0,l.Fl)((()=>e.getters["module/getMark"])),a=(0,p.qj)({comment:""}),m=function(){t.back()},d=function(){const o=e.getters["module/getDetail"],l=e.getters["module/getLoginUser"],n=o.id,i=l.id;e.dispatch("module/registComment",{id:n,comment:a.comment,writer:i}).then((function(l){console.log(l),e.dispatch("module/boardDetail",o.id).then((function(o){e.commit("module/setDetail",o.data);var l=[];for(let e=0;e<o.data.comments.length;e++)o.data.comments[e].registrationTime=o.data.comments[e].registrationTime.substr(0,16),l.push(o.data.comments[e]);e.commit("module/setComments",l),t.push("/boardDetail")})),a.comment=""}))},s=function(){const t=e.getters["module/getDetail"],o=e.getters["module/getLoginUser"].id;e.dispatch("module/mark",t.id).then((function(){e.commit("module/setMark",!0),e.dispatch("module/markList",o).then((function(t){e.commit("module/setMarkList",t.data),console.log(t.data,"12312312321321")}))}))},r=function(){const t=e.getters["module/getDetail"],o=e.getters["module/getLoginUser"].id;e.dispatch("module/mark",t.id).then((function(){e.commit("module/setMark",!1),e.dispatch("module/markList",o).then((function(t){e.commit("module/setMarkList",t.data)}))}))};return{detail:o,comments:n,form:a,back:m,regist:d,mark:i,markOn:s,markOff:r}}});var h=o(4842),b=o(4554),y=o(2165),x=o(7518),w=o.n(x);f.render=u,f.__scopeId="data-v-ef2e1d8e";const v=f;w()(f,"components",{QInput:h.Z,QIcon:b.Z,QBtn:y.Z})}}]);