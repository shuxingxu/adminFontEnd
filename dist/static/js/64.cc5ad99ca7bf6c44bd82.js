webpackJsonp([64],{T1HN:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("jkKj"),l=e.n(i),s={data:function(){return{showdata1:[{type:7,label:"商家名称",title:"卡琪儿婚纱摄影"},{type:7,label:"品牌名称",title:"城市后花园"},{type:7,label:"经营范围",title:"婚纱摄影"},{type:7,label:"门店电话",title:"010-6522668"},{type:7,label:"电子邮箱",title:"601344881@qq.com"},{type:7,label:"所在地区",title:"北京丰台区"},{type:7,label:"联系地址",title:"北京市大兴区金地仰山西区2号院601"},{type:7,label:"商家简介",title:"韩国KBS报道：韩国艺匠ARTIZ STUDIO对全球婚纱照有着不可忽视的影响。在洛杉矶、首尔、新加坡、上海等地引起一场婚照革命。艺匠工匠来自世界各地。中国、德国、法国、韩国、美国、意大利等。"},{type:7,label:"商家封面",imgurl:"/static/img/2.png"},{type:7,label:"店铺环境",imgurl:["/static/img/3.png","/static/img/3.png","/static/img/3.png"]}],showdata2:[{type:7,label:"地理位置"}],showdata3:[{type:7,label:"银行卡信息",title:["持卡人：胡豆豆","银行卡号：6284 8463 4532 7587"],imgurl:"/static/img/card.png"},{type:7,label:"",imgurl:"/static/img/card.png"},{type:7,label:"地理位置",imgurl:["/static/img/idcard.png","/static/img/idcard.png"]},{type:7,label:"营业执照",imgurl:["/static/img/idcard.png"]}]}},methods:{},components:{ShowDetail:e("Ddc6").default},mounted(){var t=new l.a.Map("allmap");t.centerAndZoom(new l.a.Point(116.404,39.915),17),t.addControl(new l.a.MapTypeControl({mapTypes:[BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]})),t.setCurrentCity("北京"),t.enableScrollWheelZoom(!0)},computed:{}},n={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-heading"}),t._v(" "),e("div",{staticClass:"panel-body"},[t._m(0),t._v(" "),e("show-detail",{attrs:{showdata:t.showdata1}}),t._v(" "),e("show-detail",{attrs:{showdata:t.showdata2}},[e("div",{staticClass:"location"},[e("h2",{staticClass:"title"},[e("span"),e("i",{staticClass:"iconfont"})]),t._v(" "),e("div",{attrs:{id:"allmap"}})])])],1)]),t._v(" "),e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-heading"}),t._v(" "),e("div",{staticClass:"panel-body"},[e("show-detail",{attrs:{showdata:t.showdata3}})],1)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"userimg"},[a("div",[a("img",{attrs:{src:"/static/img/3.jpg",alt:""}}),a("span",[this._v("卡琪儿婚纱摄影")])]),this._v(" "),a("div")])}]};var d=e("D8HT")(s,n,!1,function(t){e("jSuK")},"data-v-84551e00",null);a.default=d.exports},jSuK:function(t,a){}});