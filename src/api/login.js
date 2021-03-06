import fetch from '@/utils/fetch';
export let login = function (res) {
  let this_ = this;
  return fetch(res).then(data => {
    if (data.data.code === 0) {
      this_.$store.dispatch('USER_SIGNIN', { sid: data.headers.sid })
      this_.$router.push('/')
    } else {
      this_.$message.error(data.data.msg)
    }
  })
};
export let logout = function (res) {
  let this_ = this;
  return fetch(res).then(data => {
    if (data.data.code === 0) {
      this_.$store.dispatch('USER_SIGNOUT')
      window.location.reload()
    } else {
      this_.$message.error(data.data.msg)
    }
  })
};
