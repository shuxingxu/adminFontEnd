webpackJsonp([77],{"1WDP":function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=r("tVcc"),l=r("rv7f"),s={name:"tabletest",data:()=>({url:"",breadcrumb:[{name:"营销管理"},{name:"游戏",url:"/marketgame"},{name:"添加游戏"}],options:[{name:"gamename",type:"input",label:"游戏模板名称",placeholder:"游戏名称",rules:[{required:!0,message:"请输入游戏模板名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],value:""},{name:"pictrue",type:"upload",label:"图片",rules:[{required:!0,message:"请添加图片",trigger:"blur"}],value:""},{type:"input",label:"参与频次",placeholder:"输入金额",name:"discount",key0:"满",rules:[{required:!0,message:"请输入优惠券模板名称",trigger:"blur"}],value:""},{type:"input",label:"",placeholder:"输入金额",name:"payamount",key0:"减",rules:[{required:!0,message:"请输入优惠券模板名称",trigger:"blur"}],value:""},{name:"url",type:"input",label:"URL链接地址",placeholder:"请输入链接地址",rules:[{required:!0,message:"请输入链接地址",trigger:"blur"}],value:""},{name:"userange",type:"selector",label:"可使用范围",placeholder:"",rules:[{required:!0,message:"请选择使用范围",trigger:"blur"}],options:[{label:"全部",value:"001"}],value:"001"},{name:"eventTime",type:"timeSlot",label:"活动时间",rules:[{required:!0,message:"请选择开始和结束时间",trigger:"blur"}],value:""},{name:"describe",type:"textarea",label:"游戏规则",placeholder:"请输入1000字以内的内容",rules:[{required:!0,message:"请填写游戏规则",trigger:"blur"}],value:""}]}),components:{BreadCrumb:t.a,formlist:l.a},created(){},computed:{},methods:{}},u={render:function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"page"},[a("div",{staticClass:"page-header"},[a("div",{staticClass:"crumbs"},[a("bread-crumb",{attrs:{"bread-crumb":this.breadcrumb}})],1)]),this._v(" "),a("div",{staticClass:"page-content"},[a("div",{staticClass:"panel"},[a("div",{staticClass:"form-panel p-xl"},[a("formlist",{attrs:{formdata:this.options}})],1)])])])},staticRenderFns:[]};var i=r("D8HT")(s,u,!1,function(e){r("dfx8")},"data-v-71939226",null);a.default=i.exports},dfx8:function(e,a){}});