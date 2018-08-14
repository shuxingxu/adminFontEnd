<template>
<div class="page">    
    <div class="page-header">
        <bread-crumb :bread-crumb="breadcrumb"></bread-crumb>
    </div>
    <div class="page-content">
        <nomal-table :table-json="tableJson" :url="url">
            <table-search :searchs="searchs"></table-search>
        </nomal-table>
    </div>
</div>
</template>

<script>
    import NomalTable from '@/components/common/NomalTable'
    import TableSearch from '@/components/common/TableSearch'
    import BreadCrumb from '@/components/common/BreadCrumb'


    export default {
        name: 'userlist',
        data() {
            return {
                breadcrumb:[  //面包屑
                    {
                        "name" :"用户管理", //名字
                        "url" : "/userlist"
                    },
                    {
                        "name" :"用户收入", //名字
                    }
                ],
                searchs:{
                    "list": [
                        {
                            "type": "input-text",  //输入文本
                            "label": "手机号码",
                            "name": "user_phone",
                            "value": "",
                            "placeholder": "手机号",
                        },
                        // {
                        //     "type": "input-text",  //输入文本
                        //     "label": "城市",
                        //     "name": "city",
                        //     "value": "",
                        //     "placeholder": "城市",
                        // },
                        {
                            "type": "input-select",  //选择器
                            "label": "收益来源",
                            "name": "user_fund_income_type",
                            "value": "all",
                            "options": [
                                {
                                    "name":"全部",
                                    "value":"all",
                                },
                                {
                                    "name":"首次注册红包",
                                    "value":1,
                                },
                                {
                                    "name":"订单评价返现",
                                    "value":2,
                                },
                                {
                                    "name":"优质评价返现",
                                    "value":3,
                                },
                                {
                                    "name":"推荐用户提成",
                                    "value":4,
                                },
                            ],
                        },
                        {
                            "type": "input-date",  //输入日期
                            "label":"收益时间",
                            "name": "user_fund_income_ctime",
                            "value":"",

                        },
                    ]
                },
                tableJson:{
                    "column": [ //行
                        {
                            "type": "text",
                            "align": "center",
                            "label": "用户ID",
                            "prop": "user_id",
                            "width": "",
                            
                        },
                        {
                            "type": "text",
                            "align": "center",
                            "label": "手机号码",
                            "prop": "user_phone",
                            "width": "",
                            
                        },
                        {
                            "type": "text",
                            "align": "center",
                            "label": "金额",
                            "prop": "user_fund_income_price",
                            "width": "150",
                            
                        },
                        {
                            "type": "text",
                            "align": "center",
                            "label": "时间",
                            "prop": "user_fund_income_ctime",
                            "width": "",
                            
                        },
                        {
                            "type": "text",
                            "align": "center",
                            "label": "收益来源",
                            "prop": "user_fund_income_type",
                            "width": "",
                            formatter(row, column, columnIndex, rowIndex) {
                                switch (row.user_fund_income_type){
                                    case 1:
                                        return '首次注册红包';
                                    case 2:
                                        return '订单评价返现';
                                    case 3:
                                        return '优质评价返现';
                                    case 4:
                                        return '推荐用户提成';
                                    default:return 'error';
                                }
                            }
                            
                        },
                    ],
                }


            }
        },
        components: {
            NomalTable,
            TableSearch,
            BreadCrumb
        },
        created() {
            
        },
        computed: {
            url(){
                if(this.$route.query.user_id){
                    return `/api/admin/fund/index?page=1&pagesize=10&user_id=${this.$route.query.user_id}`
                }else{
                    return `/api/admin/fund/index?page=1&pagesize=10`
                }
                
            }
        },
        methods: {




        }
    }

</script>

<style scoped>

</style>
