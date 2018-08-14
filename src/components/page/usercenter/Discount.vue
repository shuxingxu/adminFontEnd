<template>
<div>
    <div class="table">
        <table-tabs :page-tabs="pageTapsCard">
            <nomal-table slot="0" :table-json="tableJson0" :url="url0"></nomal-table>
            <nomal-table slot="1" :table-json="tableJson1" :url="url1"></nomal-table>
        </table-tabs>
        
    </div>
</div>
</template>

<script>
    import NomalTable from '@/components/common/NomalTable'
    import TableTabs from '@/components/common/TableTabs'

    export default {
        name: 'userlist',
        data() {
            return {
                url0:`/api/admin/user/coupon?coupon_type=1&user_id=${this.$route.params.id}&page=1&pagesize=10`,
                url1:`/api/admin/user/coupon?coupon_type=2user_id=${this.$route.params.id}&page=1&pagesize=10`,
                pageTapsCard:{
                    "type":"card",
                    "list":[
                        {
                            "label":"优惠券",
                            "name": "0",
                        },
                        {
                            "label":"实物券",
                            "name": "1",
                        },
                    ],
                    "activeVal":"0" //初始值
                },
                tableJson0:{
                    "column": [ //行
                        {
                            "type": "text",
                            "align": "center",
                            "label": "优惠券ID",
                            "prop": "_id",
                            "width": ""
                        },
                        {
                            "type": "text",
                            "align": "center",
                            "label": "范围",
                            "prop": "coupon_send_type",
                            "width": "",
                            formatter(row, column, columnIndex, rowIndex) {
                                switch (row.coupon_send_type){
                                    case 1:
                                        return '平台';
                                    case 2:
                                        return '分公司';
                                    case 3:
                                        return '商家';
                                    default:return 'error';
                                }
                            }
                            
                        },
                        // php删除
                        // {
                        //     "type": "text",
                        //     "align": "center",
                        //     "label": "获取渠道",
                        //     "prop": "date",
                        //     "width": "",
                            
                        // },
                        {
                            "type": "text",
                            "align": "center",
                            "label": "领取时间",
                            "prop": "coupon_ctime",
                            "width": "",
                            
                        },
                        {
                            "type": "text",
                            "align": "center",
                            "label": "金额",
                            "prop": "reduce_price",
                            "width": "",
                            formatter(row, column, columnIndex, rowIndex) {
                                return `满${row.full_price}减${row.reduce_price}`
                            }
                            
                        },
                        {
                            "type": "text",
                            "align": "center",
                            "label": "有效期",
                            "prop": "coupon_end_time",
                            "width": "",
                            formatter(row, column, columnIndex, rowIndex) {
                                return `${row.coupon_start_time}至${row.coupon_end_time}`
                            }
                            
                        },
                    ],
                },
                tableJson1:{
                        "column": [ //行
                            {
                                "type": "text",
                                "align": "center",
                                "label": "优惠券ID",
                                "prop": "_id",
                                "width": "",
                                
                            },
                            {
                                "type": "text",
                                "align": "center",
                                "label": "领取位置",
                                "prop": "coupon_take_address",
                                "width": "",
                                
                            },
                            {
                                "type": "text",
                                "align": "center",
                                "label": "领取物品",
                                "prop": "coupon_text",
                                "width": "",
                                
                            },
                            // {
                            //     "type": "text",
                            //     "align": "center",
                            //     "label": "获取渠道",
                            //     "prop": "date",
                            //     "width": "",
                                
                            // },
                            {
                                "type": "text",
                                "align": "center",
                                "label": "领取时间",
                                "prop": "coupon_ctime",
                                "width": "",
                                
                            },
                            {
                                "type": "text",
                                "align": "center",
                                "label": "有效期",
                                "prop": "coupon_end_time",
                                "width": "",
                                formatter(row, column, columnIndex, rowIndex) {
                                    return `${row.coupon_start_time}至${row.coupon_end_time}`
                                }
                            },
                        ],
                    }


            }
        },
        components: {
            NomalTable,
            TableTabs
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

</style>
