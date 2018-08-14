import fetch from '@/utils/fetch';
export let addcoupon = function (res) {
  return fetch(res).then(data => {
    if (data.data.code === 0) {
      this.$store.dispatch('USER_SIGNIN', { sid: data.headers.sid })
      this.$router.push('/')
    } else {
      this.$message.error(data.data.msg)
    }
  })
};
export let addgame = function (res) {
  console.log(res)
  return fetch(res).then(data => {
    if (data.data.code === 0) {
      this.$router.push('marketgame')
    } else {
      this.$message.error(data.data.msg)
    }
  })
}