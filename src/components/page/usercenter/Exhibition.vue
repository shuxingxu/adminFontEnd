<template>
<div>
    <div class="case marketGame packageInfo">
        <nomal-table :table-json="tableJson" :url="url"></nomal-table>
    </div>    
</div>

</template>

<script>
    import NomalTable from '@/components/common/NomalTable'

    export default {
        data() {
            return {
                url: `/api/admin/user/exhibitionData?page=10&pagesize=20&user_id=${this.$route.params.id}`,
                tableJson: {
                    spanMethod: function({row, column, rowIndex, columnIndex}){ //合并单元格
                        if (rowIndex % 2 === 0) {
                          if (columnIndex === 0) {
                            return [1, 5];
                          }else{
                            return [0, 0]
                          }
                        }
                    },

                    formatter: function(data){  //表格数据处理
                        let _data = [];
                        data.forEach((e,i) => {
                            _data.push(e, e)
                        });
                        return _data;
                    },
                    
                    "column": [ //行
                        {
                            "type": "text",
                            "label": "展会名称",
                            "prop": "address",
                            "width": "",
                            "align": "center",
                            formatter(row, column, columnIndex, rowIndex) {

                                if(rowIndex%2 == 0){
                                    return '<div style="border-top: '+ (rowIndex == 0 ? 16 : 20) +'px solid #f8f9fa; height:56px; line-height:36px;font-size:12px; color:#999; background-color:#f5f5f5; text-align:left; padding-left:8px;"><span style="margin-right:40px;">索票时间：' + row.exhibition_user_apply_ctime + '</span><span>参展时间：' + row.exhibition_info.exhibition_begin_time + '</span></div>'
                                }

                                let str = "<div style='display:flex; align-items:center; background-color#fff;'>";
                                str += "<div style='width:74px;height:74px;padding:8px; flex-shrink:0;'><img style='width:100%; height:100%;' src='"+row.exhibition_info.exhibition_img+"'></div>";
                                str += "<div style='flex-grow:1; text-align:left;'>" + row.exhibition_info.exhibition_title + "</div>"

                                str += "</div>";
                                return str;
                            }
                            
                        },
                        {
                            "type": "text",
                            "label": "展会地点",
                            "prop": "exhibition_info",
                            "width": "",
                            "align": "left",
                            formatter(row, column, columnIndex, rowIndex) {
                                return row.exhibition_info.exhibition_address
                            }
                        },
                        {
                            "type": "handle",
                            "label":"操作",
                            "align": "center",
                            "width": "200",
                            "list": [
                                {
                                    "label":"查看",
                                    "type":"detail",
                                    "url":`/exhibitiondetail/${this.$route.params.id}`, //优先执行url

                                }
                            ]
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
</style>
