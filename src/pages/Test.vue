<template>
  <!--测试主页-->
  <div>
    <el-row :gutter="20">
      <el-col :span="16">
        <div>
          <h2>设备在线情况</h2>
          <div>
            <TestTable/>
          </div>
        </div>
        <div>
         环境
        </div>
        </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
        天气
        </div>
        </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content bg-purple">
          1
        </div>
        </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
        2
        </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import TestTable from '../components/TestTable.vue'
export default {
  components: {
    TestTable
  },
  data () {
    return {
      title: '设备在线情况'
    }
  }
}
</script>

<style>
.navTitle{
  height: 20px;
  display: flex;
  align-items: center;
  border-left: #006600 0.1875rem solid;
}
</style>
