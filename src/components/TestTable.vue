<template>
  <div>
    <el-table ref="multipleTable" :data="tableData" :current=2 tooltip-effect="dark" :default-sort = "{prop: 'date', order: 'descending'}"
    @selection-change="handleSelectionChange" :header-cell-style="{background:'#F5F7FA',color:'#606266'}"
    style="width: 100%">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column  label="ID" width="120" >
          <template slot-scope="props">
            {{props.$index + 1}}
          </template>
      </el-table-column>
      <el-table-column prop="date" label="时间" sortable width="120">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120">
      </el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip>
      </el-table-column>
      <el-table-column  label="操作">
        <el-button type="success">编辑</el-button>
        <el-button type="danger" @click="deleteRow">删除</el-button>
      </el-table-column>
    </el-table>
    <!--分页插件-->
    <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[1, 2, 3, 4]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length">
    </el-pagination>

  </div>
</template>

<script>
export default {
  data () {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '李依伊',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '周晓晓',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '路漫漫',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      deleteData: [] // 用于存放要删除数据的id
    }
  },
  methods: {
    handleSelectionChange (val) {
      this.deleteData = []
      if (val && val.length > 0) {
        val.forEach(item => {
          this.deleteData.push(item.name)
        })
      }
    },
    deleteRow () {
      this.tableData.splice(1, 1)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
