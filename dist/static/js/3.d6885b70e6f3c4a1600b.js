webpackJsonp([3],{"+LqP":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("0qDT"),l=a("tVcc"),s=a("rhtX"),r={name:"tabletest",data(){let e=this.$route.path;return{url:"",breadcrumb:[{name:"营销管理"},{name:"游戏",url:"/marketgame"},{name:["商家","分公司"][["/gameBusiness","/gameZigongsi"].indexOf(e)]}],menus:{type:"menu",list:[{label:"商家",index:"/gameBusiness"},{label:"分公司",index:"/gameZigongsi"}],activeIndex:e},searchs:{list:[{type:"input-text",label:"游戏模版名称",name:"couponName",value:"",placeholder:"模版名称"}]},addButton:{title:"数据列表",name:"添加模版",url:""},tableJson:{column:[{type:"text",label:"商家名称",prop:"name",width:"",align:"center"},{type:"text",label:"参加时间",prop:"date",width:"",align:"center"}]},tableJson1:{column:[{type:"text",label:"分公司名称",prop:"name",width:"",align:"center"},{type:"text",label:"参加时间",prop:"date",width:"",align:"center"}]}}},components:{NomalTable:n.a,BreadCrumb:l.a,TableTabs:s.a},created(){console.log(this.$route)},computed:{},methods:{}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"marketGame"},[a("div",{staticClass:"page-header"},[a("div",{staticClass:"crumbs"},[a("bread-crumb",{attrs:{"bread-crumb":e.breadcrumb}})],1)]),e._v(" "),a("div",{staticClass:"page-content"},[a("table-tabs",{attrs:{"page-tabs":e.menus}}),e._v(" "),"business"===e.$route.name?a("nomal-table",{attrs:{"table-json":e.tableJson,url:e.url}}):e._e(),e._v(" "),"zigongsi"===e.$route.name?a("nomal-table",{attrs:{"table-json":e.tableJson1,url:e.url}}):e._e()],1)])},staticRenderFns:[]};var u=a("D8HT")(r,i,!1,function(e){a("quCE")},"data-v-6145a57d",null);t.default=u.exports},quCE:function(e,t){}});