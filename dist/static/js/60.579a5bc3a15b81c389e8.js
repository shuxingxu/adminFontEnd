webpackJsonp([60],{kgif:function(e,l){},qNSe:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var a=t("0qDT"),n={data:()=>({activeName:"first",url1:"",url2:"",url3:"",url4:"",url5:"",url6:"",pageJson1:{selectBox:!0,column:[{type:"text",align:"center",label:"全选",prop:"name"},{type:"text",align:"center",label:"提交人",prop:"name"},{type:"text",align:"center",label:"商家名称",prop:"bussinessname",width:"200"},{type:"text",align:"center",label:"类型",prop:"type"},{type:"text",align:"center",label:"内容",prop:"content",width:"200"},{type:"text",align:"center",label:"提交时间",prop:"time",width:"200"},{type:"handle",label:"操作",align:"center",width:"200",list:[{label:"查看",type:"detail",url:"/checkmanage/BussinessInfo"},{label:"通过",type:"edit",url:"",onClick(e,l){console.log(l.vue),console.log(e.isShow),l.nomal=!l.nomal,e.isShow=!e.isShow}},{label:"不通过",type:"edit",url:"",onClick(e,l){console.log(l.vue),console.log(e.isShow),l.nomal=!l.nomal,e.isShow=!e.isShow}}]}]},pageJson2:{selectBox:!0,column:[{type:"text",align:"center",label:"全选",prop:"name"},{type:"text",align:"center",label:"提交人",prop:"name"},{type:"text",align:"center",label:"商家名称",prop:"bussinessname",width:"200"},{type:"text",align:"center",label:"类型",prop:"type"},{type:"text",align:"center",label:"内容",prop:"content",width:"200"},{type:"text",align:"center",label:"提交时间",prop:"time",width:"200"},{type:"handle",label:"操作",align:"center",width:"200",list:[{label:"查看",type:"detail",url:"/checkmanage/BussinessInfo"},{label:"通过",type:"edit",url:"",onClick(e,l){console.log(l.vue),console.log(e.isShow),l.nomal=!l.nomal,e.isShow=!e.isShow}},{label:"不通过",type:"edit",url:"",onClick(e,l){console.log(l.vue),console.log(e.isShow),l.nomal=!l.nomal,e.isShow=!e.isShow}}]}]},pageJson3:{selectBox:!0,column:[{type:"text",align:"center",label:"全选",prop:"name"},{type:"text",align:"center",label:"提交人",prop:"name"},{type:"text",align:"center",label:"商家名称",prop:"bussinessname",width:"200"},{type:"text",align:"center",label:"类型",prop:"type"},{type:"text",align:"center",label:"内容",prop:"content",width:"200"},{type:"text",align:"center",label:"提交时间",prop:"time",width:"200"},{type:"handle",label:"操作",align:"center",width:"200",list:[{label:"查看",type:"detail",url:"/checkmanage/BussinessInfo"},{label:"通过",type:"edit",url:"",onClick(e,l){console.log(l.vue),console.log(e.isShow),l.nomal=!l.nomal,e.isShow=!e.isShow}},{label:"不通过",type:"edit",url:"",onClick(e,l){console.log(l.vue),console.log(e.isShow),l.nomal=!l.nomal,e.isShow=!e.isShow}}]}]},pageJson4:{selectBox:!0,column:[{type:"text",align:"center",label:"全选",prop:"name"},{type:"text",align:"center",label:"提交人",prop:"name"},{type:"text",align:"center",label:"商家名称",prop:"bussinessname",width:"200"},{type:"text",align:"center",label:"类型",prop:"type"},{type:"text",align:"center",label:"内容",prop:"content",width:"200"},{type:"text",align:"center",label:"提交时间",prop:"time",width:"200"},{type:"handle",label:"操作",align:"center",width:"200",list:[{label:"查看",type:"detail",url:"/checkmanage/BussinessInfo"},{label:"通过",type:"edit",url:"",onClick(e,l){console.log(l.vue),console.log(e.isShow),l.nomal=!l.nomal,e.isShow=!e.isShow}},{label:"不通过",type:"edit",url:"",onClick(e,l){console.log(l.vue),console.log(e.isShow),l.nomal=!l.nomal,e.isShow=!e.isShow}}]}]},pageJson5:{selectBox:!0,column:[{type:"text",align:"center",label:"全选",prop:"name"},{type:"text",align:"center",label:"提交人",prop:"name"},{type:"text",align:"center",label:"商家名称",prop:"bussinessname",width:"200"},{type:"text",align:"center",label:"类型",prop:"type"},{type:"text",align:"center",label:"内容",prop:"content",width:"200"},{type:"text",align:"center",label:"提交时间",prop:"time",width:"200"},{type:"handle",label:"操作",align:"center",width:"200",list:[{label:"查看",type:"detail",url:"/checkmanage/BussinessInfo"},{label:"通过",type:"edit",url:"",onClick(e,l){console.log(l.vue),console.log(e.isShow),l.nomal=!l.nomal,e.isShow=!e.isShow}},{label:"不通过",type:"edit",url:"",onClick(e,l){console.log(l.vue),console.log(e.isShow),l.nomal=!l.nomal,e.isShow=!e.isShow}}]}]}}),beforeCreate(){},methods:{handleClick(e){}},mounted(){},components:{NomalTable:a.a}},o={render:function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"container"},[t("el-tabs",{staticClass:"box",attrs:{type:"card"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(l){e.activeName=l},expression:"activeName"}},[t("el-button",{staticClass:"fixed",attrs:{type:"primary"}},[e._v("主要按钮")]),e._v(" "),t("el-tab-pane",{attrs:{label:"商家信息",name:"first"}},[t("nomal-table",{attrs:{"table-json":e.pageJson1,url:e.url1}})],1),e._v(" "),t("el-tab-pane",{attrs:{label:"套餐信息",name:"second"}},[t("nomal-table",{attrs:{"table-json":e.pageJson2,url:e.url2}})],1),e._v(" "),t("el-tab-pane",{attrs:{label:"案例信息",name:"third"}},[t("nomal-table",{attrs:{"table-json":e.pageJson3,url:e.url3}})],1),e._v(" "),t("el-tab-pane",{attrs:{label:"展会信息",name:"fourth"}},[t("nomal-table",{attrs:{"table-json":e.pageJson4,url:e.url4}})],1),e._v(" "),t("el-tab-pane",{attrs:{label:"提现",name:"five"}},[t("nomal-table",{attrs:{"table-json":e.pageJson5,url:e.url5}})],1)],1)],1)},staticRenderFns:[]};var i=t("D8HT")(n,o,!1,function(e){t("kgif")},"data-v-5dbef8ed",null);l.default=i.exports}});