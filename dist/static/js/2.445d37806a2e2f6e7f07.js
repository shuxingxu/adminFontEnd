webpackJsonp([2],{"3Lli":function(e,t){},sMbi:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("0qDT"),n=a("PMOO"),r=a("tVcc"),s={name:"userlist",data:()=>({url:"./static/vuetable.json",breadcrumb:[{name:"用户管理"},{name:"用户列表"}],searchs:{list:[{type:"input-text",label:"用户账号",name:"user",value:"",placeholder:"用户ID/手机号"},{type:"input-text",label:"用户姓名",name:"phone",value:"",placeholder:"用户姓名"},{type:"input-date",label:"注册时间",name:"date",value:""},{type:"input-select",label:"渠道来源",name:"option",value:"all",options:[{name:"全部",value:"all"},{name:"option2",value:"option2"},{name:"option3",value:"option3"}]}]},tableJson:{column:[{type:"text",align:"center",label:"用户编号",prop:"date",width:""},{type:"text",align:"center",label:"手机号码",prop:"name",width:""},{type:"text",align:"center",label:"用户姓名",prop:"address",width:""},{type:"text",align:"center",label:"状态",prop:"address",width:"150"},{type:"text",align:"center",label:"注册时间",prop:"address",width:""},{type:"handle",label:"操作",align:"center",width:"200",list:[{label:"联系",type:"detail",url:"/"},{label:"查看详情",type:"detail",url:"/userlist/info"},{label:"查看收入",type:"detail",url:"/userincome"}]}]}}),components:{NomalTable:l.a,TableSearch:n.a,BreadCrumb:r.a},created(){},computed:{},methods:{}},i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page"},[t("div",{staticClass:"page-header"},[t("bread-crumb",{attrs:{"bread-crumb":this.breadcrumb}})],1),this._v(" "),t("div",{staticClass:"page-content"},[t("nomal-table",{attrs:{"table-json":this.tableJson,url:this.url}},[t("table-search",{attrs:{searchs:this.searchs}})],1)],1)])},staticRenderFns:[]};var p=a("D8HT")(s,i,!1,function(e){a("3Lli")},"data-v-563a96ec",null);t.default=p.exports}});