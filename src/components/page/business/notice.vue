<template>
    <div class="container mt-lg">
        <div class="notice-box">
            <div class="notice-line"></div>
            <template v-for="(item,index) in info">
                <div class="notice-head" v-text="(item.shop_notice_ctime).substring(0,4)" :class="'date'+(item.shop_notice_ctime).substring(0,4)"></div>
                <div class="notice-item">
                    <div class="date"><span v-text="(item.shop_notice_ctime).substring(5,10)"></span><span v-text="(item.shop_notice_ctime).substr(10,6)"></span></div>
                    <div class="bd">{{item.shop_notice_title}}</div>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            info: [],
            year: '',
        }
    },
    created() {
        this.createdDate();
    },
    methods: {
        createdDate() {
            this.$axios.post('/api/admin/shopnotice/index?shop_id=' + this.$route.params.id)
                .then((res) => {
                    this.info = res.data.data;
                    this.$nextTick(function() {
                       document.getElementsByClassName("date2018")[0].style.display = 'block'
                       document.getElementsByClassName("date2017")[0].style.display = 'block'
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    },
    mounted() {


    },
    computed: {}
}
</script>
<style lang='less' scoped>
.notice-box {
    position: relative;
    overflow: hidden;
}

.notice-line {
    position: absolute;
    background: #7224d8;
    font-size: 0;
    width: 1px;
    top: 0;
    bottom: 0;
    left: 50px;
}

.notice-head {
    padding: 10px 0 10px;
    display: none;
}

.notice-item {
    position: relative;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    padding: 8px 0;
    font-size: 14px;
    .date {
        width: 170px;
        color: #999;
        span {
            display: inline-block;
            width: 40%;
        }
    }
    .bd {
        -webkit-flex: 1;
        -moz-flex: 1;
        -ms-flex: 1;
        -o-flex: 1;
        flex: 1;
    }
    &:after {
        content: '';
        width: 8px;
        height: 8px;
        background: #7224d8;
        border-radius: 50%;
        position: absolute;
        left: 46.2px;
        top: 14px;
    }
}
</style>