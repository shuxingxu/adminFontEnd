<template>
<div class="page">
    <div class="page-header">
        <div class="crumbs">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>展会</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path:'/exhibitionmanage' }">展会管理</el-breadcrumb-item>
                <el-breadcrumb-item>{{activeName}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </div>
    <div class="page-content">
        <div class="panel">
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                <el-tab-pane class="info" label="展会信息" name="展会信息">
                    <ShowDetail :showdata='showdata1'></ShowDetail>
                </el-tab-pane>
                <el-tab-pane class="flexbox2" label="参展商家" name="参展商家">
                    <ShowDetail :showdata='showdata2'></ShowDetail>
                </el-tab-pane>
                <el-tab-pane label="参展用户" name="参展用户">
                    <nomal-table :table-json="pageJson1" :url="url1"></nomal-table>   
                </el-tab-pane>
                <el-tab-pane label="展会活动" name="展会活动">
                    <nomal-table :table-json="pageJson2" :url="url2"></nomal-table>
                </el-tab-pane>
            </el-tabs>            
        </div>

    </div>
</div>
</template>
<script>
import BreadCrumb from '@/components/common/BreadCrumb'
import ShowDetail from '@/components/common/showdetail'
import NomalTable from '@/components/common/NomalTable'
export default {
    data(){
        return{
            exdata:[],
            budata:[],
            url1:'/api/admin/exhibition/JoinUserList',
            url2:'/api/admin/exhibition/game',
            activeName:'展会信息',
            name:'展会信息',
            pageJson1:{
            "column": 
                [ //行
                    {
                        "type": "text",
                        "align": "center",
                        "label": "用户昵称",
                        "prop": "exhibition_join_user_nick_name"
                        
                    },
                    {
                        "type": "text",
                        "align": "center",
                        "label": "手机号码",
                        "prop": "exhibition_join_user_phone",
                        "width": "200",
                        
                    },
                    {
                        "type": "text",
                        "align": "center",
                        "label": "索票时间",
                        "prop": "exhibition_join_user_apply_time"
                        
                    },
                    {
                        "type": "text",
                        "align": "center",
                        "label": "参展时间",
                        "prop": "exhibition_join_user_join_time",
                        "width": "200",
                        
                    }
                ],
            },
            pageJson2:{
            "column": 
                [ //行
                    {
                        "type": "text",
                        "label": "活动名称",
                        "prop": "address",
                        "width": "300",
                        "align": "center",
                        formatter(row) {
                            let str = "<div style='display:flex; align-items:center; background-color#fff;'>";
                            str += `<div style='width:74px;height:74px;padding:8px; flex-shrink:0;'><img style='width:100%; height:100%;' src='${row.game_template_img}'></div>`;
                            str += "<div style='flex-grow:1; text-align:left;'>" + row.game_name + "</div>"

                            str += "</div>";
                            return str;
                        }
                            
                    },
                    // {
                    //     "type": "text",
                    //     "align": "center",
                    //     "label": "状态",
                    //     "prop": "status",
                    //     "width": "200",
                        
                    // },
                    {
                        "type": "text",
                        "align": "center",
                        "label": "参与人数",
                        "prop": "game_participate_users"
                        
                    },
                    {
                        "type": "text",
                        "align": "center",
                        "label": "中奖人数",
                        "prop": "game_participate_users",
                        "width": "200",
                        
                    },
                    {
                        "type": "text",
                        "align": "center",
                        "label": "中奖礼品",
                        "prop": "game_gifts",
                        "width": "200",
                        formatter(row, column, columnIndex, rowIndex) {
                            var t=''
                            for(let i=0;i<row.game_gifts.length;i++){
                                if(i!==row.game_gifts.length-1){
                                    t=t+row.game_gifts[i].type+','
                                }else{
                                    t=t+row.game_gifts[i].type
                                }
                                
                            }
                            console.log('这里这里1',row)
                            return t
                        }
                        
                    },
                    {
                        "type": "text",
                        "align": "center",
                        "label": "活动时间",
                        "prop": "game_start_time",
                        "width": "200",
                        formatter(row, column, columnIndex, rowIndex) {
                            return `${row.game_start_time.split(' ')[0]}至${row.game_end_time.split(' ')[0]}`
                        }
                    }
                ],
            },
        }
    },
    beforeCreate(){
        this.$axios.get('/api/admin/exhibition/info?exhibition_id='+this.$route.params.id).then(data=>{
            this.exdata = data.data.data
            // console.log('展会信息',this.exdata)
        });
        this.$axios.get('/api/admin/exhibition/joinShopList?exhibition_id='+this.$route.params.id).then(data=>{
            this.budata = data.data.data
            // console.log('商家信息',this.budata)
        });
    },
    mounted(){
        
    },
    components:{
        BreadCrumb,
        ShowDetail,
        NomalTable
    },
    methods:{
        handleClick(t,ev){
            this.name = t.label
        }
    },
    computed:{
        showdata1(){
            return [
            {
                type:7,
                label:'展会名称',
                title:this.exdata.exhibition_title
            },
            {
                type:7,
                label:'展会时间',
                title:this.exdata.exhibition_begin_time
            },
            {
                type:7,
                label:'报名时间',
                title:this.exdata.exhibition_join_start_time
            },
            {
                type:7,
                label:'展会城市',
                title:this.exdata.address_city_name
            },
            {
                type:7,
                label:'详细地址',
                title:this.exdata.exhibition_address
            },
            {
                type:7,
                label:'展会地图',
                imgurl:this.exdata.exhibition_map_img
            },
            {
                type:7,
                label:'展会广告图',
                imgurl:this.exdata.exhibition_img
            },
            {
                type:7,
                label:'展会描述',
                title:this.exdata.exhibition_introduce
            }
        ]},
        showdata2(){
            var arr= [];
            // console.log('这里这里',this.budata);
            for(let i=0;i<this.budata.length;i++){
                arr[i]={};
                arr[i].type = 8;
                arr[i].imgurl = this.budata[i].shop_logo;
                arr[i].slot = `<p>${this.budata[i].shop_name}</p><p>联系方式：${this.budata[i].shop_phone}</p><p>费用：￥${this.budata[i].exhibition_join_shop_entry_fee}</p>`;
            }
            // console.log('arr是',arr)
            return arr
        }

    }
}
</script>
<style lang="less" scoped>
.flexbox2{
    color: #666;
    .showdetail{
        display: flex;
        flex-wrap: wrap;
    }
}
.info /deep/ .showdetail .labeltext .pbox{
    flex: 6
}
.info /deep/ .showdetail .labeltext .labelimgbox{
    flex: 6
}
</style>