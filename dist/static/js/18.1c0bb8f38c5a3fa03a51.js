webpackJsonp([18],{"/eOg":function(e,t){},qhqY:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={data:()=>({url:"./static/vuetable.json",tableJson:{spanMethod:function({row:e,column:t,rowIndex:a,columnIndex:l}){if(a%2==0)return 0===l?[1,5]:[0,0]},formatter:function(e){let t=[];return e.forEach((e,a)=>{t.push(e,e)}),t},column:[{type:"text",label:"展会名称",prop:"address",width:"",align:"center",formatter(e,t,a,l){if(l%2==0)return'<div style="border-top: '+(0==l?16:20)+'px solid #f8f9fa; height:56px; line-height:36px;font-size:12px; color:#999; background-color:#f5f5f5; text-align:left; padding-left:8px;"><span style="margin-right:40px;">索票时间：'+e.date+"</span><span>参展时间："+e.date+"</span></div>";let n="<div style='display:flex; align-items:center; background-color#fff;'>";return n+="<div style='width:74px;height:74px;padding:8px; flex-shrink:0;'><img style='width:100%; height:100%;' src='/static/img/img.jpg'></div>",n+="<div style='flex-grow:1; text-align:left;'>"+e.address+"</div>",n+="</div>"}},{type:"text",label:"索票记录",prop:"name",width:"",align:"center"},{type:"text",label:"是否参展",prop:"name",width:"",align:"center"},{type:"text",label:"展会地点",prop:"address",width:"",align:"left"},{type:"handle",label:"操作",align:"center",width:"200",list:[{label:"查看",type:"detail",url:"/exhibitiondetail"}]}]}}),components:{NomalTable:a("0qDT").a},created(){},computed:{},methods:{}},n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"case marketGame packageInfo"},[t("nomal-table",{attrs:{"table-json":this.tableJson,url:this.url}})],1)])},staticRenderFns:[]};var i=a("D8HT")(l,n,!1,function(e){a("/eOg")},"data-v-58dbf146",null);t.default=i.exports}});