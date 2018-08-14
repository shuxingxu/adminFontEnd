<template>
    <div class="marketGame packageInfo">
        <nomal-table :table-json="tableJson" :url="url"></nomal-table>
        <el-dialog :title="detail.goods_name" :visible.sync="centerDialogVisible" width="50%">
            <div class="info-box">
                <el-row :gutter=5>
                    <el-col :span=6 class="hd">套餐现价：</el-col>
                    <el-col :span=18 class="bd text-purple">{{detail.goods_price}}</el-col>
                </el-row>
                <el-row :gutter=5>
                    <el-col :span=6 class="hd">套餐原价：</el-col>
                    <el-col :span=18 class="bd">{{detail.goods_original_price}}</el-col>
                </el-row>
                <el-row :gutter=5>
                    <el-col :span=6 class="hd">定金支付：</el-col>
                    <el-col :span=18 class="bd">{{detail.goods_front_price}}</el-col>
                </el-row>
                <!--  <el-row :gutter=5>
                    <el-col :span=6 class="hd">负责人姓名：</el-col>
                    <el-col :span=18 class="bd">{{detail}}</el-col>
                </el-row> -->
                <el-row :gutter=5>
                    <el-col :span=6 class="hd">订单礼：</el-col>
                    <el-col :span=18 class="bd">{{detail.goods_order_gift}}</el-col>
                </el-row>
                <el-row :gutter=5>
                    <el-col :span=6 class="hd">全款礼：</el-col>
                    <el-col :span=18 class="bd">{{detail.goods_full_gift}}</el-col>
                </el-row>
                <el-row :gutter=5>
                    <el-col :span=6 class="hd">套餐封面：</el-col>
                    <el-col :span=18 class="bd">
                        <el-row :gutter=20>
                            <el-col span=8>
                                <img :src="detail.goods_cover_img" width="100%">
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <el-row :gutter=5>
                    <el-col :span=6 class="hd">套餐头图：</el-col>
                    <el-col :span=18 class="bd">
                        <el-row :gutter=20 class="mb-n">
                            <el-col :span=8 v-for="(pic,i) in detail.goods_head_imgs" :key="i">
                                <img :src="pic" width="100%" class="mb-sm">
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <el-row :gutter=5>
                    <el-col :span=6 class="hd">套餐描述：</el-col>
                    <el-col :span=18 class="bd">{{detail.goods_introduce}}</el-col>
                </el-row>
                <el-row :gutter=5 class="mb-n">
                    <el-col :span=6 class="hd">套餐图片：</el-col>
                    <el-col :span=18 class="bd">
                        <el-row :gutter=20 class="mb-n">
                            <el-col :span=8 v-for="(pic,i) in detail.goods_showcase" :key="i">
                                <img :src="pic" width="100%" class="mb-sm">
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import NomalTable from '@/components/common/NomalTable'

export default {
    data() {
        return {
            centerDialogVisible: false,
            detail: '',
            url: "/api/admin/goods/ShopGoodsList?shop_id=" + this.$route.params.id,
            tableJson: {

                spanMethod: function({ row, column, rowIndex, columnIndex }) { //合并单元格
                    if (rowIndex % 2 === 0) {
                        if (columnIndex === 0) {
                            return [1, 6];
                        } else {
                            return [0, 0]
                        }
                    }
                },

                formatter: function(data) { //表格数据处理
                    let _data = [];
                    data.forEach((e, i) => {
                        _data.push(e, e)
                    });

                    return _data;
                },

                "column": [ //行
                    {
                        "type": "text",
                        "label": "套餐名称",
                        "prop": "address",
                        "width": "",
                        "align": "center",
                        formatter(row, column, columnIndex, rowIndex) {

                            if (rowIndex % 2 == 0) {
                                return '<div style="border-top: ' + (rowIndex == 0 ? 16 : 20) + 'px solid #f8f9fa; height:56px; line-height:36px;font-size:12px; color:#999; background-color:#f5f5f5; text-align:left; padding-left:8px;">添加时间：' + row.goods_ctime + '</div>'
                            }

                            let str = "<div style='display:flex; align-items:center; background-color#fff;'>";
                            str += "<div style='width:74px;height:74px;padding:8px; flex-shrink:0;'><img style='width:100%; height:100%;' src=" + row.goods_cover_img + "></div>";
                            str += "<div style='flex-grow:1; text-align:left;'>" + row.goods_name + "</div>"

                            str += "</div>";
                            return str;
                        }

                    },
                    {
                        "type": "text",
                        "label": "原价",
                        "prop": "goods_original_price",
                        "width": "",
                        "align": "center",

                    },
                    {
                        "type": "text",
                        "label": "现价",
                        "prop": "goods_price",
                        "width": "",
                        "align": "center",
                        formatter(row) {
                            return '<p style="color:#7224D8;">' + row.goods_price + '</p>'
                        }

                    },
                    {
                        "type": "text",
                        "label": "售出数",
                        "prop": "goods_sale_num",
                        "width": "",
                        "align": "center",

                    },
                    {
                        "type": "text",
                        "label": "收藏数",
                        "prop": "goods_collect_num",
                        "width": "",
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

        }
    },
    components: {
        NomalTable,
    },
    created() {

    },
    computed: {

    },
    methods: {

    }
}
</script>
<style scoped>
.case {
    padding-top: 20px;
}
</style>