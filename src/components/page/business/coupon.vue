<template>
    <div>
        <div class="sub-heading">
            <h3 class="sub-title"><span class="sub-icon"><img src="/static/img/sub_icon.png"  width="100%"></span><span class="title">门店优惠价</span></h3>
        </div>
        <div style="width: 100%;overflow: hidden;" v-if="coupon.length>0">
            <div class="coupon-box">
                <div class="coupon-item-a" v-for="(item,index) in coupon" :key="index">
                    <span class="type" v-text="couponType(item.coupon_template_type)"></span>
                    <div class="body">
                        <p class="title" v-if="item.coupon_template_type == 1">满{{item.coupon_template_full_price}}元减{{item.coupon_template_reduce_price}}元</p>
                        <p class="title" v-if="item.coupon_template_type == 2">{{item.coupon_template_text}}</p>
                        <template v-if="item.coupon_template_expire_type ==1">
                            <p class="date f12 mt-xs">起：{{item.coupon_template_expire.coupon_template_expire_start_time}}</p>
                            <p class="date f12">止：{{item.coupon_template_expire.coupon_template_expire_end_time}}</p>
                        </template>
                        <p class="date f12" v-else>领取{{item.coupon_template_expire.coupon_template_expire_days}}天后失效</p>
                    </div>
                    <img src="/static/img/coupon_bg1.png" width="100%">
                </div>
            </div>
        </div>
        <div class="p-xl text-center f14 text-info" v-else>
            暂无记录
        </div>
        <div class="sub-heading" style="margin-top: 0px;">
            <h3 class="sub-title"><span class="sub-icon"><img src="/static/img/sub_icon.png"  width="100%"></span><span class="title">其他优惠价</span></h3>
        </div>
        <div style="width: 100%;overflow: hidden;" v-if="shop.length>0">
            <div class="coupon-box">
                <div class="coupon-item-b" v-for="(item,index) in shop" :key="index">
                    <span class="type">到店礼</span>
                    <div class="body">
                        <p class="title">即刻下单</p>
                        <p class="date f12 mt-xs">{{item.shop_gift_content}}</p>
                    </div>
                    <img src="/static/img/coupon_bg2.png" width="100%">
                </div>
            </div>
        </div>
        <div class="p-xl text-center f14 text-info" v-else>
            暂无记录
        </div>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            coupon: [],
            shop: [],
        }
    },
    created() {
        this.createdDate();
    },
    methods: {
        createdDate() {
            this.$axios.post('/api/admin/shop/coupon?shop_id=' + this.$route.params.id)
                .then((res) => {
                    this.coupon = res.data.data;
                })
                .catch((err) => {
                    console.log(err)
                })
            this.$axios.post('/api/admin/shopgift/index?shop_id=' + this.$route.params.id)
                .then((res) => {
                    this.shop = res.data.data;
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        couponType(type) {
            let name = ['满减券', '实物券']
            return name[type - 1]
        }
    },
    mounted() {

    },
    computed: {

    }
}
</script>
<style lang='less' scoped>
.coupon-box {
    overflow: hidden;
    margin-right: -60px;
}

.coupon-item-a {
    width: 212px;
    position: relative;
    text-align: center;
    float: left;
    margin-bottom: 30px;
    margin-right: 60px;
    .type {
        position: absolute;
        width: 45px;
        top: 17px;
        left: 19px;
        font-size: 13px;
    }
    .body {
        position: absolute;
        top: 58%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
        left: 15px;
        right: 15px;
        font-size: 13px;
        color: #fff;
    }
}

.coupon-item-b {
    width: 212px;
    position: relative;
    text-align: center;
    float: left;
    margin-bottom: 30px;
    margin-right: 60px;
    .type {
        position: absolute;
        width: 45px;
        top: 10px;
        left: 19px;
        font-size: 13px;
        color: #fff;
    }
    .body {
        position: absolute;
        top: 40px;
        left: 40px;
        right: 40px;
        font-size: 13px;
        color: #fff;
    }
}
</style>