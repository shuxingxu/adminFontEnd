webpackJsonp([58],{Eava:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("0qDT"),s=a("PMOO"),n=a("tVcc"),i=a("SAp9"),o={name:"tabletest",data:()=>({url:"",breadcrumb:[{name:"营销管理"},{name:"内容"}],searchs:{list:[{type:"input-text",label:"标签名称",name:"labelName",value:"",placeholder:"标签名称"}]},addButton:{title:"数据列表",name:"添加内容",url:"addcontent"},tableJson:{column:[{type:"text",label:"标签",prop:"name",width:"",align:"center"},{type:"text",label:"标题",prop:"name",width:"",align:"center"},{type:"text",label:"内容简介",prop:"name",width:"",align:"center"},{type:"text",label:"添加时间",prop:"date",width:"",align:"center"},{type:"handle",label:"操作",align:"center",width:"",list:[{label:"查看排期",type:"edit",url:"",onClick(e,t){console.log(t.vue),console.log(e.isShow),t.nomal=!t.nomal,e.isShow=!e.isShow}},{label:"编辑",type:"edit",url:"",onClick(e,t){console.log(t.vue),console.log(e.isShow),t.nomal=!t.nomal,e.isShow=!e.isShow}},{label:"删除",type:"delete"}]}]}}),components:{NomalTable:l.a,TableSearch:s.a,BreadCrumb:n.a,AddButton:i.a},created(){},computed:{},methods:{}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("div",{staticClass:"page-header"},[a("div",{staticClass:"crumbs"},[a("bread-crumb",{attrs:{"bread-crumb":e.breadcrumb}})],1)]),e._v(" "),a("div",{staticClass:"page-content"},[a("nomal-table",{attrs:{"table-json":e.tableJson,url:e.url}},[a("table-search",{attrs:{searchs:e.searchs}}),e._v(" "),a("div",{staticClass:"sub-heading"},[a("h3",{staticClass:"sub-title"},[a("span",{staticClass:"sub-icon"},[a("img",{attrs:{src:"/static/img/sub_icon.png",width:"100%"}})]),a("span",{staticClass:"title"},[e._v("数据列表")])]),e._v(" "),a("div",{staticClass:"sub-actions"},[a("el-button",{attrs:{icon:"el-icon-plus",size:"mini",type:"primary"},on:{click:function(t){e.$router.push({path:"/addcontent"})}}},[e._v("添加内容")])],1)])],1)],1)])},staticRenderFns:[]};var r=a("D8HT")(o,c,!1,function(e){a("OQKN")},"data-v-41bdf6f9",null);t.default=r.exports},OQKN:function(e,t){}});