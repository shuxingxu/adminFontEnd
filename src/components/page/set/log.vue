<template>
    <div class="page">
        <div class="page-header">
            <bread-crumb :bread-crumb="breadcrumb"></bread-crumb>
        </div>
        <div class="page-content set-log">
            <nomal-table :table-json="tableJson" :url="url">
                <table-search :searchs="searchs"></table-search>
                <table-tabs :page-tabs="pageTapsCard" @tabs-click="pageTapsClick"></table-tabs>
            </nomal-table>
        </div>
    </div>
</template>
<script>
import NomalTable from '@/components/common/NomalTable'
import BreadCrumb from '@/components/common/BreadCrumb'
import TableSearch from '@/components/common/TableSearch'
import TableTabs from '@/components/common/TableTabs'

export default {
    name: 'setLog',
    data() {
        return {
            url: "",
            breadcrumb: [ //面包屑
                {
                    "name": "设置", //名字
                },
                {
                    "name": "日志管理", //名字
                }
            ],

            searchs: {
                "list": [{
                        "type": "input-text", //输入文本
                        "label": "用户手机号",
                        "name": "user_name",
                        "value": "",
                        "placeholder": "请输入手机号",
                    },
                    {
                        "type": "input-date", //输入日期
                        "label": "时间",
                        "name":["start_time","end_time"],
                        "value": "",
                    },
                ]
            },

            pageTapsCard: {
                "type": "card",
                "list": [{
                        "label": "登录日志",
                        "name": "0",
                    },
                    {
                        "label": "操作日志",
                        "name": "1",
                    },
                ],
                "activeVal": "0" //初始值
            },

            tableJson: {},

            url0:"/api/admin/adminuser/loginLog",
            url1:"/api/admin/adminuser/operaLog",
            tableJson0: {
                "column": [ //行
                    {
                        "type": "text",
                        "label": "部门",
                        "prop": "user_division",
                        "align": "center",
                        "width": "",

                    },
                    {
                        "type": "text",
                        "label": "成员姓名",
                        "prop": "user_realname",
                        "align": "center",
                        "width": "",

                    },
                    {
                        "type": "text",
                        "label": "角色名称",
                        "prop": "role_name",
                        "align": "center",
                        "width": "",

                    },
                    {
                        "type": "text",
                        "label": "最后登录",
                        "prop": "time",
                        "align": "center",
                        "width": "",

                    }
                ],
            },
            tableJson1: {
                "column": [ //行
                    {
                        "type": "text",
                        "label": "部门",
                        "prop": "user_division",
                        "width": "",
                        "align": "center",

                    },
                    {
                        "type": "text",
                        "label": "成员姓名",
                        "prop": "user_realname",
                        "width": "",
                        "align": "center",

                    },
                    {
                        "type": "text",
                        "label": "角色名称",
                        "prop": "role_name",
                        "width": "",
                        "align": "center",

                    },
                    {
                        "type": "text",
                        "label": "操作时间",
                        "prop": "opera_time",
                        "width": "",
                        "align": "center",

                    },
                    {
                        "type": "text",
                        "label": "操作内容",
                        "prop": "power",
                        "width": "",
                        "align": "center",
                        formatter(row) { //格式数据
                            return row.power && row.power.join("/");
                        }

                    },
                    {
                        "type": "hover",
                        "label": "操作链接",
                        "align": "center",
                        "prop": "link",
                        "width": "150",
                        "hover": {
                            "label": "查看",
                            "placement": "bottom-end",
                            "popperClass":"setlog",
                        }

                    }
                ],
            },

        }
    },
    components: {
        NomalTable,
        BreadCrumb,
        TableSearch,
        TableTabs
    },
    created() {
        let tap = this.$route.query.tap || "0";
        console.log(tap)
        this.tableJson = this["tableJson" + tap];
        this.url = this["url" + tap];
        this.pageTapsCard.activeVal = tap;
    },
    computed: {

    },
    methods: {
        pageTapsClick(index, tabs) { //index 是tabs的下标   tabs ==> 组件实例

            this.$router && this.$router.push({ path: '/set/log?tap=' + index})

            this.tableJson = this['tableJson' + index];
            this.url = this['url' + index];
            this.searchs.list.forEach(e => {
                e.value = "";
            })
        }
    }
}
</script>
<style>
.setlog{
    background-color: #D0D2FF;
}
.setlog[x-placement^=bottom] .popper__arrow::after{
    border-bottom-color: #D0D2FF;
}

.setlog[x-placement^=top] .popper__arrow::after{
    border-top-color:#D0D2FF;
}

</style>