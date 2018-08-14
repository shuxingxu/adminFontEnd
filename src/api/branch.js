import fetch from '@/utils/fetch';
export let add = function (res) {
  let this_ = this;
  return fetch(res).then(data => {
    if (data.data.code === 0) {
      this_.$router.push('/branchManagement')
    } else {
      this_.$message.error(data.data.msg)
    }
  })
};
