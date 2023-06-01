<template>
  <Container>
    <div class="search-section">
      <el-form :inline="true" :model="formData" class="demo-form-inline">
        <el-form-item label="城市名称">
          <el-select v-model="formData.region" placeholder="请选择">
            <el-option label="北京" value="beijing" />
            <el-option label="上海" value="shanghai" />
          </el-select>
        </el-form-item>
        <el-form-item label="年度">
          <el-select v-model="formData.year" placeholder="请选择">
            <el-option label="2021" value="2021" />
            <el-option label="2020" value="2020" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onHandleSearch">查询</el-button>
          <el-button type="primary" @click="onHandleExport">导出</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="statistic-section">
      <Paper>
        <div>土地利用面积分类统计</div>
        <template slot="content">
          <Statistic />
        </template>
      </Paper>
    </div>
    <div class="table-section">
      <el-table :data="tableData" stripe height="100%" border style="width: 100%;">
        <el-table-column
          label="序号"
          type="index"
          width="50"
          align="right"
        />
        <el-table-column
          v-for="(column, index) in columns"
          :key="index"
          :prop="column.prop"
          :label="column.label"
          :width="column.width"
          :align="column.align"
        />
      </el-table>
    </div>
    <div class="pager-section">
      <el-pagination
        :current-page="pager.currentPage"
        :page-sizes="pager.pageSizes"
        :page-size="pager.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pager.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </Container>
</template>

<script>
import Container from '@/components/Container'
import Paper from '@/components/Paper'
import Statistic from './Statistic'
import * as API from '@/api/ecology'
export default {
  components: { Container, Paper, Statistic },
  data() {
    return {
      formData: {
        region: '',
        year: ''
      },
      // 表格列
      columns: [
        {
          label: '数据来源',
          prop: 'origion',
          align: 'center'
        },
        {
          label: '数据类型',
          prop: 'dataType',
          align: 'center',
          useSlot: true
        },
        {
          label: '接收时间',
          prop: 'receiveTime',
          width: 180,
          align: 'center'
        },
        {
          label: '数据状态',
          prop: 'dataStatus',
          align: 'center',
          width: 180
        }
      ],
      // 表格数据
      tableData: [],
      // 分页
      pager: {
        currentPage: 1,
        pageSize: 10,
        total: 0,
        pageSizes: [10, 15, 20, 30]
      }
    }
  },
  created() {
    // 获取表格数据
    this.getTableList()
  },
  methods: {
    // 搜索
    onHandleSearch() {

    },
    // 导出
    onHandleExport() {

    },
    // 获取表格数据
    getTableList() {
      API.getTableList().then(res => {
        const { code, data, msg } = res
        if (code === 200) {
          this.tableData = data
        } else {
          this.$message.error(msg)
        }
      })
    },
    // 切换每页显示条数
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.pager.pageSize = val
    },
    // 切换当前页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.pager.currentPage = val
    }
  }
}
</script>

<style lang="scss" scoped>
  .table-section{
    margin-top: 10px;
    height: 500px;
  }
  .statistic-section{
    height: 300px;
  }
  .pager-section{
    margin-top: 10px;
    text-align: right;
  }
</style>
