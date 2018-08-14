<template>
    <div class="marketGame">
        <nomal-table :table-json="tableJson" :url="url"></nomal-table>
        <el-dialog :title="detail.shop_product_title" :visible.sync="centerDialogVisible" width="40%">
            <div class="space-md">
               <img :src="detail.shop_product_cover_img" width="100%">
            </div>
            <div class="space-md" v-for="(item,index) in detail.shop_product_details" :key="index">
                <span class="text-info">{{item.product_param_name}}：</span>
                <span class="text-default f16">{{item.product_param_val}}</span>
            </div>
            <div class="space-md">
               <span class="text-default f16">{{detail.shop_product_introduce}}</span>
            </div>
            <div class="space-md">
                <div class="mb-md" v-for="(pic,index) in detail.shop_product_imgs" :key="index">
                    <img :src="pic" width="100%">
                </div>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import NomalTable from '@/components/common/NomalTable'
import ShowDetail from '@/components/common/showdetail'
export default {
    name: 'tabletest',
    data() {
        return {
            centerDialogVisible: false,
            detail: '',
            url: "/api/admin/shopproduct/index?shop_id=" + this.$route.params.id,
            tableJson: {
                // cellstyle: function({row, column, rowIndex, columnIndex}){
                //     if(columnIndex == 1){
                //         return {"vertical-align":"top"}
                //     }
                // },
                "column": [ //行
                    {
                        "type": "text",
                        "label": "案例名称",
                        "prop": "address",
                        "width": "350",
                        "align": "center",
                        formatter(row) {
                            let str = "<div style='display:flex; background-color#fff;'>";
                            str += "<div style='width:80px;height:80px;padding:8px; flex-shrink:0;'><img style='width:100%; height:100%;' src=" + row.shop_product_cover_img + "></div>";
                            str += "<div style='flex-grow:1; text-align:left; font-size:14px; padding-top:10px;line-height:60px;'><p>" + row.shop_product_title + "</p></div>"

                            str += "</div>";
                            return str;
                        }

                    },
                    {
                        "type": "text",
                        "label": "内容",
                        "prop": "shop_product_introduce",
                        "width": "",
                        "align": "left",
                    },
                    {
                        "type": "text",
                        "label": "收藏数",
                        "prop": "shop_product_collect_num",
                        "width": "100",
                        "align": "center",

                    },
                    {
                        "type": "text",
                        "label": "上传时间",
                        "prop": "shop_product_ctime",
                        "width": "180",
                        "align": "center",

                    },
                    {
                        "type": "handle",
                        "label": "操作",
                        "align": "center",
                        "width": "100",
                        "list": [{
                            "label": "查看",
                            "type": "detail",
                            // "url":"/caseDetails", 
                            onClick(tablePage, self, row) {
                                self.centerDialogVisible = true
                                self.detail = row
                            }
                        }]
                    }
                ],
            },
            showdata1: [{
                    type: 4,
                    url: '/static/img/case1.png'
                },
                {
                    type: 7,
                    label: '拍摄风格',
                    title: '时尚 森系 个性创意'
                },
                {
                    type: 7,
                    label: '拍摄地点',
                    title: '巴厘岛'
                },
                {
                    type: 7,
                    label: '服装造型',
                    title: '八服八造'
                },
                {
                    type: 7,
                    label: '案例参考价格',
                    title: '¥16800.00'
                },
                {
                    type: 1,
                    text: '高端私人订制婚纱摄影品牌，量身定做属于每一位客户的幸福情感回忆。'
                },
                {
                    type: 4,
                    url: '/static/img/case2.png'
                },
                {
                    type: 4,
                    url: '/static/img/case3.png'
                }
            ],


        }
    },
    components: {
        NomalTable,
        ShowDetail
    },
    created() {

    },
    computed: {

    },
    methods: {

    }
}
</script>
<style scoped lang='less'>
.case {
    padding-top: 20px;
}

.casecontent {
    // width: 700px;
}

.casecontent /deep/ .el-dialog {
    width: 50%!important;
}

.casecontent /deep/ .labeltext span {
    text-align: left;
    min-width: 70px;
    flex: none
}

.casecontent /deep/ .showdetail .imgcontainer img {
    width: 100%;
}

.casecontent /deep/ .singlep {
    color: #999;
    font-size: 16px;
}
</style>