<template>
    <div class="page add-role">
        <div class="page-header">
            <div class="crumbs">
                <bread-crumb :bread-crumb="breadcrumb"></bread-crumb>
            </div>
            <div class="page-header-actions" v-if="checkPage">
                <el-button type="primary" size="mini" @click="$router.go(-1)">返回</el-button>
            </div>
            <div class="page-header-actions" v-else>
                <el-button plain size="mini" @click="$router.go(-1)">查看</el-button>
                <el-button type="primary" size="mini" @click="submit">提交</el-button>
            </div>
        </div>
        <div class="page-content" v-loading="loading">
            <el-form ref="form" :model="form" :rules="rules" :inline="true" label-width="100px">
            <div class="panel">
                <div class="panel-body">
                    <div class="form">
                        <el-form-item label="角色名称：" prop="role_name">
                            <el-input placeholder="请输入角色名称" v-model.trim="form.role_name" :disabled="checkPage"></el-input>
                        </el-form-item>

                        <!-- <el-form-item label="角色管理员标识：" prop="role_manage" class="input-box">
                            <el-select
                                v-model="form.role_manage"
                                placeholder="请选择角色管理员标识">
                                <el-option
                                  v-for="item in options"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item> -->
                    </div>
                    <div class="form nomaltable">
                        <div class="label"><span style="color:#f56c6c;">*</span> 管理权限：</div>
                        <div class="input">
                            <div class="form-input">
                                <div class="cell f-checkbox"><a href="javascript:;" @click="allSelect" v-if="!checkPage">全选</a></div>
                                <div class="cell f-content">导航名称</div>
                                <div class="cell f-content">权限分配</div>
                            </div>
                            <div class="f-table">
                                <div class="f-tr border-b-1px" v-for="(item, index) in tableData" :key="index">

                                    <div class="form-input">
                                        <div class="f-checkbox f-check center">
                                            <el-checkbox v-model="item.checked" :disabled="checkPage" @change='checkedList(item)' v-if="!checkPage"></el-checkbox>
                                        </div>
                                        <div class="f-content f-check fAacitve">
                                            <p class="f-cell">
                                                <a href="javascript:;" class="f-check-a" @click="show(index)">
                                                    <i :class="item.label.class || 'font-icon'"></i>
                                                    <span>{{item.label.name}}</span>
                                                </a>
                                            </p>
                                        </div>
                                        <div class="f-content f-check">
                                            <!-- <el-checkbox-group v-model="item.listCheck" @change="checkedList(index, item.listCheck)">
                                                <el-checkbox :disabled="checkPage" v-for="val in item.list" :label="val.id" :key="val.id">{{val.label}}</el-checkbox>
                                            </el-checkbox-group> -->
                                            <el-checkbox v-model="item.checked" :disabled="checkPage" @change='checkedList(item)'>{{item.label.list}}</el-checkbox>
                                        </div>

                                    </div>


                                    <div v-for="(col, colIndex) in item.child" :key="colIndex">
                                        <el-collapse-transition>
                                            <div class="form-input" v-show="col.show">
                                                <div class="f-checkbox f-check center">
                                                    <el-checkbox v-model="col.checked" :disabled="checkPage" @change='checkedList(col, item)' v-if="!checkPage"></el-checkbox>
                                                </div>
                                                <div class="f-content f-check">
                                                    <p class="f-cell">
                                                        <a href="javascript:;" class="f-check-a">
                                                            <i :class="col.label.class || 'font-icon'"></i>
                                                            <span>{{col.label.name}}</span>
                                                        </a>
                                                    </p>
                                                </div>
                                                <div class="f-content f-check">
                                                    <el-checkbox-group v-model="col.listCheck">
                                                        <el-checkbox @change='handleChecked(val, col, item)' :disabled="checkPage" v-for="val in col.list" :label="val.id" :key="val.id">{{val.label}}</el-checkbox>
                                                    </el-checkbox-group>
                                                </div>

                                            </div>
                                        </el-collapse-transition>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </el-form>
        </div>
    </div>
</template>
<script>
import BreadCrumb from '@/components/common/BreadCrumb'
import TableButton from '@/components/common/TableButton'

export default {
    data() {
        return {
            loading: false,
            allChecked: false, //全选
            rules: {
              role_name: [
                { required: true, message: '请输入角色名称', trigger: 'blur' },
              ],
              // role_manage: [
              //   { required: true, message: '请选择角色管理员标识', trigger: 'change' }
              // ],
            },
            breadcrumb: [ //面包屑
                {
                    "name": "设置",
                },
                {
                    "name": "角色管理",
                    "url": "/set/role",
                },
                {
                    "name": "添加角色",
                }
            ],
            buttons: {
                "list": [{
                    "buttonName": "提交",
                    "size": "mini", //按钮大小    同element-ui
                }],
            },
            form: {
                role_name: "",
                // role_manage: "",
                role_power_ids: "",
                role_power_view_ids: "",
            },

            options: [{
              value: '1',
              label: '超级管理员'
            }, {
              value: '0',
              label: '普通角色'
            }],

            role_id:"",
            checkPage:false,

            tableData: [
                    // {
                    //     checked: false,
                    //     label: {
                    //         name: "平台管理",
                    //         class: "el-icon-caret-bottom",
                    //         id:"1",
                    //         list:"显示",
                    //     },
                    //     child:[
                    //     {
                    //         checked: false,
                    //         show: false,
                    //         label: {
                    //             name: "添加分公司",
                    //              id:""
                    //         },
                    //         list: [{
                    //             id:"1",
                    //             label:"显示",
                    //         }, {
                    //             id:"2",
                    //             label:"显示",
                    //         }, {
                    //             id:"3",
                    //             label:"显示",
                    //         }],
                    //         listCheck: ["3"],
                    //     }],
                    // },
            ],

        }
    },
    components: {
        BreadCrumb,
        TableButton
    },
    created() {
        this.init();
    },
    computed: {

    },
    methods: {
        init(){ //初始加载
            let arr = [this.getListData()];

            this.role_id = this.$route.query.role_id;
            this.checkPage = this.$route.query.page_type ? true : false;
            this.loading = true;

            if(this.role_id){
                arr.push(this.getCheckedData(this.role_id));
            }

            this.$axios.all(arr)
            .then(res => {
                this.loading = false;

                this.loadList(res[0].data);

                if(res[1]) this.loadChecked(res[1].data);
            });

        },

        getListData(){ //获取列表数据
            return this.$axios.get('/api/admin/power/index');
        },

        getCheckedData(id){ //获取选中
            return this.$axios.get('/api/admin/role/info?role_id=' + id);
        },

        loadList(data){ //加载列表

            if(data.code != 0){
                this.$alert(data.msg, "提示", {type:"error"});
                return;
            }

            this.tableData = [];

            data.data.forEach((e, i) => {
                this.tableData.push({
                    checked: false,
                    label: {
                        name: e.power_cn || "",
                        class: "el-icon-caret-bottom",
                        id: e.power_id,
                        list:"显示",
                    },
                    child:[]
                })

                if(e.children && e.children.length > 0){
                    e.children.forEach((ee, j) => {
                        this.tableData[i].child.push({
                            checked: false,
                            show: false,
                            label: {
                                name: ee.power_cn,
                                id: ee.power_id,
                            },
                            list: [
                                {
                                    id: ee.power_id,
                                    label: "显示"
                                }
                            ],
                            listCheck: [],
                        })
                        ee.children && ee.children.forEach((eee, n) => {
                            this.tableData[i].child[j].list.push({
                                id: eee.power_id,
                                label: eee.power_cn,
                            })
                        })
                    })
                }else{
                    this.tableData[i].label.class = "";
                }

            })

        },

        loadChecked(data){ //加载选中状态
            let ids = data.data.role_power_ids.split(",");
            let view_ids = data.data.role_power_view_ids.split(",");
            // let checked = ids + view_ids;
            this.form.role_name = data.data.role_name;
                
            if(this.checkPage){ //查看
                this.tableData = this.tableData.filter(e => {
                    if(e.child.length > 0){
                        e.child = e.child.filter(child => {
                            child.show = true;
                            child.list = child.list.filter(list => { //过滤页面权限
                                return ids.indexOf(list.id.toString()) > -1 || view_ids.indexOf(list.id.toString()) > -1;
                            })

                            return view_ids.indexOf(child.label.id.toString()) > -1; //过滤菜单
                        })

                        return e.child.length > 0; //过滤掉过滤以后没有child的菜单
                    }else{
                        return view_ids.indexOf(e.label.id.toString()) > -1; //过滤没有child的菜单

                    }
                })

                this.tableData.forEach(e => {  //过滤后全选
                    e.checked = true;
                    this.checkedList(e);
                })

                return;
            }

            this.tableData.forEach(e => { //编辑

                if(e.child.length > 0){
                    e.child.forEach(child => {
                        child.show = true;

                        child.list.forEach(list => {
                            if(ids.indexOf(list.id.toString()) > -1 || view_ids.indexOf(list.id.toString()) > -1){
                                child.listCheck.push(list.id);
                            }
                        })
                    })

                }else{

                    if(view_ids.indexOf(e.label.id.toString()) > -1){
                        e.checked = true;
                    }

                }

            })


            this.filterChecked();

        },

        filterChecked(){ //选择状态标注
            this.tableData.forEach(e => {
                e.child.forEach(child => {
                    if(child.list.length == child.listCheck.length && child.listCheck.length != 0){
                        child.checked = true;
                    }else{
                        child.checked = false;
                    }
                })
            });

            this.tableData.forEach(e => {
                if(e.child.length != 0){
                    if(e.child.length == e.child.filter(child => child.checked).length){
                        e.checked = true;
                    }else{
                        e.checked = false;
                    }
                };
            })
        },

        allSelect(){ //全选
            if(this.checkPage) return;
            this.allChecked = !this.allChecked;
            this.tableData.forEach(e => {
                e.checked = this.allChecked;
                this.checkedList(e);
            })
        },
        allClick(checked) { //一级显示
            this.tableData.forEach(e => {
                e.checked = !e.checked;
                this.checkedList(e);
            })
        },
        checkedList(item, items){ //二级全部选中
            if(item.checked){
                if(item.child){
                    item.child.map(e => {
                        e.checked = true;
                        e.listCheck = [];
                        e.list.forEach(l => {
                            e.listCheck.push(l.id)
                        })
                    })
                }else{
                    item.listCheck = [];
                    item.list.forEach(l => {
                        item.listCheck.push(l.id)
                    });
                    this.checklistAll(items);
                }
            }else{
                if(item.child){
                    item.child.map(e => {
                        e.checked = false;
                        e.listCheck = [];
                    });
                }else{
                    item.listCheck = [];
                    items.checked = false;
                }
            }
        },
        handleChecked(val, col, item){ //三级选中

            if(col.listCheck.indexOf(col.label.id) == -1){
                if(val.id == col.label.id){
                    col.listCheck = [];
                }else{
                    col.listCheck.push(col.label.id);
                }
            }

            this.filterChecked();
        },

        checklistAll(item){ //选中联动
            let checkArr = item.child.filter(e => {
                return e.listCheck.length == e.list.length && e.listCheck.length != 0
            })

            if(checkArr.length == item.child.length){
                item.checked = true;
            }else{
                item.checked = false;
            }
        },

        show(index) { //展开下拉
            this.tableData[index].child.forEach((e, i) => {
                e.show = !e.show;
            })
        },
        submit() { //提交/编辑
            this.$refs.form.validate((valid) => {
              if (valid) {

                this.form.role_power_view_ids =[];
                this.form.role_power_ids =[];

                this.tableData.forEach(e => {
                    if(e.child.length > 0){
                        e.child.forEach(c => {
                            let index = c.listCheck.indexOf(c.label.id);
                            let ch = [...c.listCheck];

                            if(index > -1){
                                ch.splice(index, 1);
                                this.form.role_power_view_ids.push(c.label.id);
                            }

                            this.form.role_power_ids = this.form.role_power_ids.concat(ch);
                        })

                    }else{
                        e.checked && this.form.role_power_view_ids.push(e.label.id);
                    }
                })



                if(this.form.role_power_ids.length == 0 && this.form.role_power_view_ids.length == 0){
                    this.$message({
                        message: '请添加管理权限',
                        type: 'warning'
                    });
                    return;
                }

                this.form.role_power_view_ids = this.form.role_power_view_ids.toString();
                this.form.role_power_ids = this.form.role_power_ids.toString();

                let url = '/api/admin/role/add';
                let message = "添加成功！";
                if(this.role_id){
                    this.form.role_id = this.role_id;
                    url = '/api/admin/role/edit';
                    message = "编辑成功！"
                }

                this.loading = true;

                this.$axios.post(url, this.form)
                .then(res => {
                    this.loading = false;

                    res = res.data;
                    if(res.code != 0){
                        this.$alert(res.msg, "提示", {type:"error"});
                        return;
                    }

                    this.$message({
                        message: message,
                        type: 'success'
                    });

                })

              } else {
                console.log('error submit!!');
                return false;
              }
            });






        }
    }
}
</script>
<style scoped>

.form {
    display: flex;
}

.form .label {
    width: 100px;
    font-size: 14px;
    text-align: right;
    color: #666;
    line-height: 30px;
    margin-right: 0;
    flex-shrink: 0;
    box-sizing: border-box;
    padding-right: 12px;
}

.nomaltable .label {
    line-height: 1.6;
}

.form .input .el-input {
    width: 190px;
}

.form .input {
    flex-grow: 1;
    flex-shrink: 0;
}
.form .input-box{
    flex-grow: 0;
}
.form-input {
    position: relative;
    display: flex;
    padding-left: 80px;
}

.form-input .f-checkbox {
    position: absolute;
    left: 0;
    top: 0;
    width: 80px;
    text-align: center;
}

.f-table {
    border: 1px solid #dcdfe6;
}

.f-tr {
    padding: 8px 0 8px;
}

.form-input .f-content {
    width: 50%;
    font-size: 14px;
}

.form-input .f-check {
    padding: 8px 0;
    color: #666;
}

.form-input .f-checkbox a,
.form-input .cell {
    height: 36px;
    line-height: 36px;
    background-color: #eeefff;
    font-size: 14px;
    color: #666;
}

.f-check .font-icon {
    display: inline-block;
    height: 16px;
    width: 16px;
}

.f-cell {
    height: 20px;
    line-height: 20px;
}

.f-check-a {
    color: #606266;
    font-size: 14px;
    cursor: initial;
    padding-top: 10px;
    padding-bottom: 10px;
}
.fAacitve a:hover{
    color: #7224D8;
    cursor: pointer;
}

.padding-t35 {
    padding-top: 35px;
}

.padding-t24 {
    padding-top: 24px;
}

.border-b-1px {
    border-bottom: 1px solid #f5f5f5;
}

.f-tr:last-child {
    border: none;
}

.padding-r-20 {
    padding-right: 20px;
}

.form-input .el-checkbox {
    margin-right: 30px;
    height: 20px;
    line-height: 20px;
}

.form-input .el-checkbox+.el-checkbox {
    margin-left: 0;
}

.add-role .el-button--mini{
    padding:7px 30px;
}
.form-input .center .el-checkbox{
    margin-right: 0;
}
</style>
<style> 
.form .input-box .el-input__inner{
    width: 200px;
}
.form .input-box .el-form-item__label{
    width: 150px !important;
}
</style>