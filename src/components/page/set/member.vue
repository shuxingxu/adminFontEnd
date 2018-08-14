<template>
    <div class="page">
        <div class="page-header">
            <div class="crumbs">
                <bread-crumb :bread-crumb="breadcrumb"></bread-crumb>
            </div>
        </div>
        <div class="page-content">
            <nomal-table :table-json="tableJson" :url="url" :page-size="10" ref="nomaltable">
                    
                <table-search :searchs="searchs"></table-search>
                <div class="sub-heading">
                    <h3 class="sub-title"><span class="sub-icon"><img src="/static/img/sub_icon.png"  width="100%"></span><span class="title">数据列表</span></h3>
                    <div class="sub-actions">
                        <el-button icon="el-icon-plus" size="mini" type="primary" @click="$router.push({ path: '/set/addmember' })">添加成员</el-button>
                    </div>
                </div>

            </nomal-table>
        </div>

        <el-dialog title="编辑" :visible.sync="editVisible" width="500px">
            <div class="form-panel" style="width: 300px;" v-loading="loading">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="90px">
                    <el-form-item label="角色名称" prop="role_id">
                        <el-select v-model="ruleForm.role_id" placeholder="角色名称" class="w-full">
                            <el-option v-for="item in roleList" :key = "item.id" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="所在部门" prop="user_division">
                        <el-input v-model.trim="ruleForm.user_division" type="text" placeholder="所在部门"></el-input>
                    </el-form-item>
                    <el-form-item label="成员姓名" prop="user_realname">
                        <el-input v-model.trim="ruleForm.user_realname" type="text" placeholder="请输入姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号码" prop="user_phone">
                        <el-input v-model.trim="ruleForm.user_phone" type="tel" placeholder="请输入手机号"></el-input>
                    </el-form-item>
                    <!-- <el-form-item label="密码" prop="user_pwd">
                        <el-input v-model.trim="ruleForm.user_pwd" type="password" placeholder="请输入密码"></el-input>
                    </el-form-item> -->
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitEdit('ruleForm')">确 定</el-button>
            </span>
        </el-dialog>

    </div>
</template>
<script>
import NomalTable from '@/components/common/NomalTable'
import BreadCrumb from '@/components/common/BreadCrumb'
import TableSearch from '@/components/common/TableSearch'
import AddButton from '@/components/common/AddButton'

export default {
    name: 'member',
    data() {

        let phone = (rule, value, callback) => {
            if (/^1\d{10}$/.test(value)) {
                callback();
            } else {
                callback(new Error('请输入正确的手机号'));
            }
        };
        return {
            editVisible: false,
            loading: false,
            roleList:[], //角色名称  {lable:"",value:""}

            ruleForm: {
                role_id: '',
                user_division: '',
                user_realname: '',
                user_phone: '',
                // user_pwd: '',
            },
            rules: {
                role_id: [
                    { required: true, message: '请选择角色名称', trigger: 'change' }
                ],
                user_division: [
                    { required: true, message: '请输入所在部门', trigger: 'blur' },
                ],
                user_realname: [
                    { required: true, message: '请输入成员名称', trigger: 'blur' },
                ],
                user_phone: [
                    { required: true, message: '请输入手机号码', trigger: 'blur' },
                    { validator: phone, trigger: 'blur' }
                ],
                // user_pwd: [
                //     { required: true, message: '请输入密码', trigger: 'blur' },
                // ],
            },


            url: "/api/admin/adminuser/list",
            breadcrumb: [ //面包屑
                {
                    "name": "设置",
                },
                {
                    "name": "成员管理",
                }
            ],
            searchs: {
                "list": [{
                        "type": "input-text", //输入文本
                        "label": "角色名称",
                        "name": "role_name",
                        "value": "",
                        "placeholder": "角色名称",
                    },
                    {
                        "type": "input-text", //输入日期
                        "label": "成员姓名",
                        "name": "user_realname",
                        "value": "",
                        "placeholder": "成员姓名",

                    },
                    {
                        "type": "input-text", //输入文本
                        "label": "手机号码",
                        "name": "user_name",
                        "value": "",
                        "placeholder": "手机号码",
                    },
                    {
                        "type": "input-radio",  //输入日期
                        "label": "是否启用",
                        "name": "is_start_using",
                        "value": 0,
                        "options": [
                            {
                                "name":"全部",
                                "value": 0,
                            },
                            {
                                "name":"启用",
                                "value": 1,
                            },
                            {
                                "name":"不启用",
                                "value": 2,
                            },
                        ],

                    },



                ]
            },

            tableJson: {
                "idName": "user_id",
                "column": [ //行
                    {
                        "type": "text",
                        "label": "手机号码",
                        "prop": "user_name",
                        "minWidth": "120",
                        "align": "center",
                    },
                    {
                        "type": "text",
                        "label": "成员姓名",
                        "prop": "user_realname",
                        "minWidth": "150",
                        "align": "center",

                    },
                    {
                        "type": "text",
                        "label": "角色名称",
                        "prop": "role_name",
                        "minWidth": "100",
                        "align": "center",

                    },
                    {
                        "type": "text",
                        "label": "添加时间",
                        "prop": "user_ctime",
                        "minWidth": "160",
                        "align": "center",

                    },
                    {
                        "type": "text",
                        "label": "最后登录",
                        "prop": "user_last_logintime",
                        "minWidth": "160",
                        "align": "center",

                    },
                    {
                        "type": "switch",
                        "label": "是否启用",
                        "align": "center",
                        "minWidth": "100",
                        "prop": "is_start_using",
                        "config": {
                            "activeColor": "green",
                            "inactiveColor": "gray",
                            "value": [2, 1],   //[未启用, 启用]
                        },
                        "axiosUrl": "/api/admin/adminuser/edit",
                        "axiosType": "post",
                    },
                    {
                        "type": "handle",
                        "label": "操作",
                        "align": "center",
                        "width": "200",
                        "list": [{
                                "label": "权限查看",
                                onClick(tablePage, self, row){
                                    self.$router.push({path:"/set/addrole?page_type=check&role_id=" + row.role_id})
                                }

                            },
                            {
                                "label": "编辑",
                                "type": "edit",
                                // "url": "/set/addmember", //优先执行url
                                onClick(tablePage, self, row){
                                    self.editVisible = true;
                                    self.initEdit(row.user_id);

                                }

                            },
                            {
                                "label": "删除",
                                "type": "delete",
                                "axiosUrl": "/api/admin/adminuser/delete",
                                "axiosType": "post"
                            },
                        ]
                    }
                ],
            },

        }
    },
    components: {
        NomalTable,
        BreadCrumb,
        TableSearch,
        AddButton
    },
    created() {
        this.getRoleList();
    },
    computed: {

    },
    methods: {
        initEdit(id){
            this.getMemberData(id)

        },
        getRoleList(){ //获取角色名称列表
            this.loading = true;
            this.$axios.get("/api/admin/role/list?page_size=100000000").then(res => {
                this.loading = false;
                res = res.data;

                if(res.code != 0){
                    this.$alert(res.msg, "提示", {type:"error"});
                    return;
                }

                this.roleList = [];

                res.data.map(e => {
                    this.roleList.push({
                        label: e.role_name,
                        value: e.role_id
                    })
                })
            })
        },

        getMemberData(id){
            this.loading = true;

            this.$axios.get("/api/admin/adminuser/info?user_id=" + id).then(res => {
                this.loading = false;

                res = res.data;
                console.log(res)

                if(res.code != 0){
                    this.$alert(res.msg, "提示", {type:"error"});
                    return;
                }

                this.ruleForm = {
                    role_id: res.data.role_id,
                    user_division: res.data.user_division,
                    user_realname: res.data.user_realname,
                    user_phone: res.data.user_phone,
                    user_id: res.data.user_id
                    // user_pwd: '',
                };

                if(this.roleList.length == 0){
                    this.getRoleList();
                }

            })
        },

        submitEdit(formName) {
            let _this = this;
            if(this.loading) return;

            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.loading = true;
                    this.ruleForm.user_name = this.ruleForm.user_phone;

                    this.$axios.post('/api/admin/adminuser/edit', this.ruleForm)
                    .then(function (res) {
                        _this.loading = false;
                        res = res.data;

                        if(res.code != 0){ //错误提示
                            _this.$alert(res.msg, "提示", {type:"error"});
                            return;
                        }

                        _this.editVisible = false;

                        _this.$message({
                            type:"success",
                            message: "编辑成功！"
                        })

                        _this.$refs.nomaltable.init(); //跟新成员列表

                    })

                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },

    }
}
</script>
<style scoped>
</style>