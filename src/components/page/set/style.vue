<template>
    <div class="page">
        <div class="page-header">
            <div class="crumbs">
                <bread-crumb :bread-crumb="breadcrumb"></bread-crumb>
            </div>
        </div>
        <div class="page-content" v-loading='loading'>
            <div class="panel" v-for="(cas,idx) in classData" :key="'class' + idx">
                <div class="panel-heading">
                    <h3 class="panel-title">{{cas.name}}</h3>
                </div>
                <div class="panel-body classBox">
                    <div class="classOne" v-for="(nm, ind) in cas.list" :key="'nm' + ind">{{nm}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BreadCrumb from "@/components/common/BreadCrumb";

export default {
    name: "setstyle",
    data() {
        return {
            loading:false,
            breadcrumb: [
                //面包屑
                {
                    name: "设置", //名字
                },
                {
                    name: "风格",
                }
            ],
            classData: []
        };
    },
    components: {
        BreadCrumb
    },
    created() {
        this.getData();
    },
    computed: {},
    methods: {
        getData(){
            this.loading = true;
            this.$axios.get('/api/admin/select/lableList').then(res => {
                this.loading = false;

                res = res.data;
                if(res.code != 0){
                    this.$alert(res.msg, "提示", {type:"error"});
                    return;
                }

                res.data.forEach((e, i) => {
                    this.classData.push({
                        name: e.shop_lable_name,
                        list: []
                    })

                    e.items && e.items.forEach(item => {
                        this.classData[i].list.push(item.shop_lable_name)
                    })
                })
            })
        }
    }
};
</script>
<style scoped>
.classBox {
    font-size: 18px;
}

.classBox .tit {
    color: #333;
    line-height: 64px;
}

.classBox .classOne {
    display: inline-block;
    min-width: 80px;
    height: 40px;
    padding:0 10px;
    line-height: 40px;
    text-align: center;
    color: #666;
    border: 1px solid #666;
    margin: 0 14px 24px 0;
    border-radius: 20px;
}
</style>