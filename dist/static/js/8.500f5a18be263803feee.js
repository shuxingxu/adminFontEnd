webpackJsonp([8],{Tal0:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("tVcc"),l=s("pbbe"),c={data:()=>({url:"./static/vuetable.json",breadcrumb:[{name:"设置"},{name:"角色管理",url:"/set/role"},{name:"添加角色"}],buttons:{list:[{buttonName:"提交",size:"mini"}]},form:{session:"",checked:null},tableData:[[{checked:!1,show:!0,label:{name:"平台管理",class:"el-icon-caret-bottom"},list:["显示"],listCheck:[]},{checkVal:!1,show:!1,label:{name:"添加分公司"},list:["显示","新增","删除"],listCheck:[]},{checkVal:!1,show:!1,label:{name:"编辑分公司"},list:["显示","编辑"],listCheck:[]},{checkVal:!1,show:!1,label:{name:"商家管理"},list:["显示","拉黑","查看"],listCheck:[]}],[{checkVal:!1,show:!1,label:{name:"分公司管理",class:"el-icon-caret-bottom"},list:["显示"],listCheck:[]},{checkVal:!1,show:!1,label:{name:"添加广告位"},list:["显示","新增","删除"],listCheck:[]},{checkVal:!1,show:!1,label:{name:"商家管理"},list:["显示","编辑"],listCheck:[]},{checkVal:!1,show:!1,label:{name:"展会管理"},list:["显示","拉黑","查看"],listCheck:[]}],[{checkVal:!1,show:!1,label:{name:"审核管理",class:"el-icon-caret-bottom"},list:["显示"],listCheck:[]},{checkVal:!1,show:!1,label:{name:"商家信息"},list:["显示","新增"],listCheck:[]},{checkVal:!1,show:!1,label:{name:"展会信息"},list:["显示"],listCheck:[]},{checkVal:!1,show:!1,label:{name:"套餐信息"},list:["显示","新增"],listCheck:[]},{checkVal:!1,show:!1,label:{name:"案例信息"},list:["显示","编辑"],listCheck:[]}]]}),components:{BreadCrumb:a.a,TableButton:l.a},created(){},computed:{},methods:{allClick(){console.log("all")},handleChecked(...t){console.log(...t)},show(t,e){e>0||this.tableData[t].forEach((t,e)=>{e>0&&(t.show=!t.show)})},isShow:(t,e)=>0==t||e,submit(){console.log(this.form)}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page add-role"},[s("div",{staticClass:"page-header"},[s("div",{staticClass:"crumbs"},[s("bread-crumb",{attrs:{"bread-crumb":t.breadcrumb}})],1),t._v(" "),s("div",{staticClass:"page-header-actions"},[s("el-button",{attrs:{type:"primary",size:"mini"},on:{"btn-click":t.submit}},[t._v("提交")])],1)]),t._v(" "),s("div",{staticClass:"page-content"},[s("div",{staticClass:"panel"},[s("div",{staticClass:"panel-body"},[s("div",{staticClass:"form"},[s("div",{staticClass:"label"},[t._v("* 角色名称：")]),t._v(" "),s("div",{staticClass:"input"},[s("el-input",{attrs:{placeholder:"请输入角色名称"},model:{value:t.form.session,callback:function(e){t.$set(t.form,"session",e)},expression:"form.session"}})],1)]),t._v(" "),s("div",{staticClass:"form padding-t24 nomaltable"},[s("div",{staticClass:"label"},[t._v("* 管理权限：")]),t._v(" "),s("div",{staticClass:"input"},[s("div",{staticClass:"form-input"},[s("div",{staticClass:"cell f-checkbox"},[s("a",{attrs:{href:"javascript:;"},on:{click:t.allClick}},[t._v("全部")])]),t._v(" "),s("div",{staticClass:"cell f-content"},[t._v("导航名称")]),t._v(" "),s("div",{staticClass:"cell f-content"},[t._v("权限分配")])]),t._v(" "),s("div",{staticClass:"f-table"},t._l(t.tableData,function(e,a){return s("div",{key:a,staticClass:"f-tr border-b-1px"},t._l(e,function(e,l){return s("div",{key:l},[s("el-collapse-transition",[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow(l,e.show),expression:"isShow(colIndex, col.show)"}],staticClass:"form-input"},[s("div",{staticClass:"f-checkbox f-check"},[s("el-checkbox",{model:{value:e.checked,callback:function(s){t.$set(e,"checked",s)},expression:"col.checked"}})],1),t._v(" "),s("div",{staticClass:"f-content f-check",class:{fAacitve:0==l}},[s("p",{staticClass:"f-cell"},[s("i",{class:e.label.class||"font-icon"}),t._v(" "),s("a",{staticClass:"f-check-a",attrs:{href:"javascript:;"},on:{click:function(e){t.show(a,l)}}},[t._v(t._s(e.label.name))])])]),t._v(" "),s("div",{staticClass:"f-content f-check"},[s("el-checkbox-group",{on:{change:function(s){t.handleChecked(a,l,e.listCheck)}},model:{value:e.listCheck,callback:function(s){t.$set(e,"listCheck",s)},expression:"col.listCheck"}},t._l(e.list,function(e){return s("el-checkbox",{key:e,attrs:{label:e}},[t._v(t._s(e))])}))],1)])])],1)}))}))])])])])])])},staticRenderFns:[]};var n=s("D8HT")(c,i,!1,function(t){s("UKEy")},"data-v-5c2f569c",null);e.default=n.exports},UKEy:function(t,e){},"ai+n":function(t,e){},pbbe:function(t,e,s){"use strict";var a={data:()=>({}),props:{buttons:Object},methods:{buttonsClick(t,e){t.url?this.$router&&this.$router.push({path:t.url}):this.$emit("btn-click",e)}},computed:{},watch:{},created(){}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nomaltable"},[s("div",{staticClass:"right-button nomaltable"},t._l(t.buttons.list,function(e,a){return s("el-button",{key:a,class:e.iconClass,attrs:{size:e.size,plain:""},on:{click:function(s){t.buttonsClick(e,a)}}},[t._v("\n            "+t._s(e.buttonName)+"\n        ")])}))])},staticRenderFns:[]};var c=s("D8HT")(a,l,!1,function(t){s("ai+n")},"data-v-3f4cac40",null);e.a=c.exports}});