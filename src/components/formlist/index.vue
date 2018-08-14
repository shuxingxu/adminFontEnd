<template>  
  <el-form ref="form" :model="form" :rules="rules" class="demo-ruleForm"  label-position="right" :label-width="labelWidth">
      <el-form-item :label="item.label" :prop="item.name" v-for="(item, idx) in formdata" :key="'item' + idx">
          <template v-if="item.type === 'input'">
            <el-input v-model="form[item.name]" :style="item.key0 || item.key1 ? 'width: ' + (item.width||'50%') : ''" :placeholder="item.placeholder">
              <template slot="prepend" v-if="item.key0">{{item.key0}}</template>
              <template slot="append" v-if="item.key1">{{item.key1}}</template>
            </el-input>
          </template>
          <template v-if="item.type === 'timeSlot'">
            <el-date-picker
              v-model="form[item.name]"
              type="datetimerange"
              :picker-options="pickerOptions"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              align="left">
            </el-date-picker>
          </template>
          <template v-if="item.type === 'single'">
            <el-radio v-for="(option,index) in item.options" :key="'single' + idx + index" v-model="form[item.name]" :label="option.label">
              <span style="display: inline-block;width: 30%">{{option.label}}</span>
              <el-input v-if="option.type === 'input'" v-model="option.value"></el-input>
              <el-select v-model="option.value" v-if="option.type === 'selector'" :placeholder="option.placeholder">
                <el-option
                  v-for="opt in option.options"
                  :key="opt.value"
                  :label="opt.label"
                  :value="opt.value">
                </el-option>
              </el-select>
            </el-radio>

          </template>
          <template v-if="item.type === 'upload'">
            <el-upload
              action="/api/admin/fileupload/add"
              list-type="picture-card"
              @onPreview="handlePictureCardPreview(arguments[0],idx)"
              :on-success="res => handleAvatarSuccess(res, idx)"
              :auto-upload="item.autoUpload"
              :name="item.apiFileName || 'file'"
              :on-remove="handleRemove"
              :headers="{sid}"
              :limit="item.filelength || 1"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
          </template>
          <template v-if="item.type === 'textarea'">
            <el-input v-model="form[item.name]" type="textarea" size="medium" :placeholder="item.placeholder"></el-input>
          </template>
          <template v-if="item.type === 'selector'">
            <el-select v-model="form[item.name]" :placeholder="item.placeholder">
              <el-option
                v-for="option in item.options"
                :key="option.value"
                :label="option.label"
                :value="option.value">
              </el-option>
            </el-select>
          </template>
          <div v-if="item.type === 'address'" class="addressBox">
            <el-select v-model="form[item.name][0]" :placeholder="item.placeholder" @change="changeAddress(arguments[0], idx, 0)">
              <el-option
                v-for="(sheng, key) in data['86']"
                :key="key"
                :label="sheng"
                :value="key">
              </el-option>
            </el-select>
            <el-select v-model="form[item.name][1]" :placeholder="item.placeholder" @change="changeAddress(arguments[0], idx, 1)">
              <el-option
                v-for="(shi, key) in item.sheng"
                :key="key"
                :label="shi"
                :value="key">
              </el-option>
            </el-select>
            <el-select v-model="form[item.name][2]" :placeholder="item.placeholder">
              <el-option
                v-for="(qu, key) in item.shi"
                :key="key"
                :label="qu"
                :value="key">
              </el-option>
            </el-select>
          </div>
          <template v-if="item.type === 'map'">
            <label>关键词：<input v-model="keyword"></label>
            <label>地区：<input v-model="location"></label>
            <baidu-map>
              <bm-view class="map" :center="{lng: 111.43, lat: 45.447}" :zoom="15"></bm-view>
              <bm-local-search @markersset="markersset(arguments[0], idx)" :selectFirstResult="false" :keyword="keyword" :auto-viewport="true" :location="location"></bm-local-search>
              <bm-marker :position="item.position" :dragging="false" animation="BMAP_ANIMATION_BOUNCE">
                <bm-label  content="" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
              </bm-marker>
            </baidu-map>
          </template>
          <div v-if="item.type === 'label'" class="labelBox">
            <div class="labelOne" :class="{act: item.value.indexOf(label) > -1}" @click="checklabel(label, idx)" v-for="(label, ind) in item.options" :key="'label' + idx + ind">{{label.label}}</div>
            <div class="addBtn" v-show="!item.clicked" @click="labelAdd(idx)">自定义</div>
            <el-input @change="labelChange(arguments[0], idx)" v-show="item.clicked" :ref="'labelInput' + idx"></el-input>
          </div >
          <div v-if="item.type === 'editor'">
          </div>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" @click="onSubmit('form')">表单提交</el-button>
          <el-button>取消</el-button>
      </el-form-item>
  </el-form>
</template>
<script>
import data from "./data";
let position = {lng: 111.43, lat: 45.447};
const pickerOptions = {
  shortcuts: [
    {
      text: "最近一周",
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
        picker.$emit("pick", [start, end]);
      }
    },
    {
      text: "最近一个月",
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
        picker.$emit("pick", [start, end]);
      }
    },
    {
      text: "最近三个月",
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
        picker.$emit("pick", [start, end]);
      }
    }
  ]
};
export default {
  verify: true,
  data() {
    let sid = this.$store.state.user.sid;
    return {
      data,
      form: {},
      rules: {},
      pickerOptions,
      keyword: "天安门",
      location: "",
      sid
    };
  },
  props: {
    "formdata": {
      type: Array
    }, 
    'labelWidth':{
      default: '100px'
    }
  },
  methods: {
    checklabel(label, index) {
      let arr = this.formdata[index].value;
      let ischeck = arr.indexOf(label) > -1;
      if (!ischeck) {
        arr.push(label);
      } else {
        arr.splice(arr.indexOf(label), 1);
      }
    },
    labelAdd(index) {
      this.$refs["labelInput" + index][0].focus();
      this.formdata[index].clicked = true;
    },
    labelChange(label, index) {
      this.formdata[index]["options"].push({ label });
      this.formdata[index]["clicked"] = false;
    },
    changeAddress(value, index, idx, reset) {
      let type = ['sheng', 'shi'][idx];
      if(!reset){
        let { name } = this.formdata[index];
        if(idx === 1){
          this.formdata['shi'] = []
          this.form[name][2] = '';
        }else{
          this.form[name][1] = '';
          this.form[name][2] = '';
        }
      }
      this.formdata[index][type] = this.data[value];
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file, index) {
      let { name } = this.formdata[index];
      this.form[name] = file.url;
      this.dialogVisible = true;
    },
    handleAvatarSuccess(res, index){
      console.log(res, index);
      let { name } = this.formdata[index];
      if(res.code === 0){
        this.form[name] = res.data.file_real_url;
      }else{
        this.$message.error(res.msg)
      }
    },
    setForm(form) {
      for (let k in form) {
        if (k === "eventTime") {
          this.formdata.forEach(o => {
            if (o.type === "timeSlot" && o.timesName) {
              let value = form[k];
              let obj = {};
              o.timesName.forEach((oo, ii) => {
                obj[oo] = value[ii]
              });
              form[k] = obj;
            }
          });
        }
        this.formdata.forEach(o => {
          let { json } = o;
          if (!!json) {
            if (o.name === k) {
              let value = form[k];
              delete form[k];
              let obj = {};
              obj[k] = value;
              form[json] = Object.assign(form[json] || {}, obj);
              console.log(form,'合并后')
            }
          }
        });
      }
      return form;
    },
    onSubmit(formName) {
      // this.$message.success("提交成功！");
      this.$refs[formName].validate(valid => {
        this.setForm(Object.assign({}, this.form));

        if (valid) {
          let form = this.setForm(Object.assign({}, this.form));
          console.log('待提交数据', form)
          this.$emit('submit', form)
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    markersset(posArr, index) {
      let { name } = this.formdata[index];
      if(!posArr.length)return;
      let position = posArr[0]["point"];
      this.formdata.splice(index, 1, Object.assign({}, this.formdata[index], {position}));
      this.form[name] = JSON.stringify(posArr[0]["point"]);
    }
  },
  mounted() {
    // console.log(this.sid,'-=-=--=-=')
  },
  created() {
    let { form, rules, formdata } = this;
    formdata.forEach((o, i) => {
      let name = o["name"];
      rules[name] = o["rules"];
      form[name] = o["value"];
      if(o.type === 'map'){
        formdata.splice(i, 1, Object.assign({}, o, { position}))
      }
    });
    this.form = Object.assign({}, form);
    this.rules = Object.assign({}, rules);


    // 初始化联系地址
    formdata.forEach((o, i) => {
      if(o.type === 'address'){
        let { name } = o;
        console.log(this.form[name], '------')
        this.form[name].length && this.form[name].forEach((oo, ii) => {
          if(ii < 2){
            this.changeAddress(oo, i, ii, true)
          }
        })
      }
    })

    
  }
};
</script>
<style scoped>
.map {
  width: 100%;
  height: 300px;
}
label.el-radio {
  display: block;
  margin: 0 20px 20px 0;
}

.labelBox {
  display: flex;
  flex-flow: row wrap;
}
.labelBox .addBtn {
  cursor: pointer;
  background: #000;
  color: #fff;
}
.labelBox .labelOne {
  cursor: pointer;
  border: 1px solid #000000;
  padding: 0 10px;
  height: 30px;
  line-height: 30px;
  margin-right: 10px;
  border-radius: 15px;
}
.labelBox .labelOne.act {
  background: red;
}
.addressBox {
  display: flex;
}
</style>