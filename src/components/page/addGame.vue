<template>
   <div class="page">
        <div class="page-header">
            <div class="crumbs">
                <bread-crumb :bread-crumb="breadcrumb"></bread-crumb>
            </div>
        </div>
        <div class="page-content">
            <div class="panel">
                <div class="form-panel p-xl">
                    <formlist :formdata="options" labelWidth="120px" @submit="submit"></formlist>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import BreadCrumb from "@/components/common/BreadCrumb";
import formlist from "@/components/formlist";
import {template} from "@/api"
export default {
  name: "tabletest",
  data() {
    return {
      url: "",
      breadcrumb: [
        //面包屑
        {
          name: "营销管理" //名字
        },
        {
          name: "游戏", //名字
          url: "/marketgame"
        },
        {
          name: "添加游戏" //名字
        }
      ],
      options: [
        {
          name: "game_template_name",
          type: "input",
          label: "游戏模板名称",
          placeholder: '游戏名称',
          rules: [
            {
              required: true,
              message: "请输入游戏模板名称",
              trigger: "blur"
            },
            {
              min: 3,
              max: 5,
              message: "长度在 3 到 5 个字符",
              trigger: "blur"
            }
          ],
          value: "ming"
        },
        {
          name: "game_template_img",
          type: "upload",
          label: "图片",
          autoUpload: true,
          apiFileName: 'myfile',
          filelength: 1,
          filesize: 1024, 
          rules: [
            {
              required: true,
              message: "请添加图片",
              trigger: "blur"
            }
          ],
          value: "aaa"
        },
        // {
        //   type: "input",
        //   label: "参与频次",
        //   placeholder: '输入金额',
        //   name: "discount",
        //   key0: "满",
        //   rules: [
        //     {
        //       required: true,
        //       message: "请输入优惠券模板名称",
        //       trigger: "blur"
        //     }
        //   ],
        //   value: ""
        // },
        // {
        //   type: "input",
        //   label: "",
        //   placeholder: '输入金额',
        //   name: "payamount",
        //   key0: "减",
        //   rules: [
        //     {
        //       required: true,
        //       message: "请输入优惠券模板名称",
        //       trigger: "blur"
        //     }
        //   ],
        //   value: ""
        // },
        {
          name: "game_template_link",
          type: "input",
          label: "URL链接地址",
          placeholder: '请输入链接地址',
          rules: [
            {
              required: true,
              message: "请输入链接地址",
              trigger: "blur"
            }
          ],
          value: "www.hun.com"
        },
        // {
        //   name: "userange",
        //   type: "selector",
        //   label: "可使用范围",
        //   placeholder: '',
        //   rules: [
        //     {
        //       required: true,
        //       message: "请选择使用范围",
        //       trigger: "blur"
        //     }
        //   ],
        //   options: [
        //     {
        //       label: "全部",
        //       value: "001"
        //     }
        //   ],
        //   value: "001"
        // },
        // {
        //   name: "eventTime",
        //   type: "timeSlot",
        //   label: "活动时间",
        //   rules: [
        //     {
        //       required: true,
        //       message: "请选择开始和结束时间",
        //       trigger: "blur"
        //     }
        //   ],
        //   value: ""
        // },
        {
          name: "game_template_desc",
          type: "textarea",
          label: "游戏规则",
          placeholder: "请输入1000字以内的内容",
          rules: [
            {
              required: true,
              message: "请填写游戏规则",
              trigger: "blur"
            }
          ],
          value: "zheshi guize"
        }
      ]
    };
  },
  components: {
    BreadCrumb,
    formlist
  },
  created() {},
  computed: {},
  methods: {
    submit(data){
      console.log(data, '121212')
      template.addgame.call(this, {
        url: '/api/admin/gametemplate/add',
        type: 'post',
        data
      })
    }
  }
};
</script>

<style scoped>
.search {
  background-color: #fff;
  padding: 20px 20px 4px 10px;
}
</style>
