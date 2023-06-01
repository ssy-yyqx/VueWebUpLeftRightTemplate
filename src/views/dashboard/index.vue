<template>
  <Container>
    <div class="top-section">
      <div class="top-section__left">
        <Paper style="height: 200px">
          <div>2018年河北省降水PH值月际变化情况</div>
          <div slot="content">
            fffffffffff
          </div>
        </Paper>
        <Paper style="margin-top: 10px;height: 200px;">
          <div>2018年河北省降水PH值月际变化情况</div>
          <div slot="content">
            fffffffffff
          </div>
        </Paper>
      </div>
      <div class="top-section__middle">
        <div>地图</div>
      </div>
      <div class="top-section__right">
        <Paper style="height: 200px">
          <div>2018年河北省降水PH值年均值</div>
          <div slot="content">
            fffffffffff
          </div>
        </Paper>
        <Paper style="margin-top: 10px;height: 200px;">
          <div>2018年河北省降水PH值年均值</div>
          <div slot="content">
            fffffffffff
          </div>
        </Paper>
      </div>
    </div>
    <div class="bottom-section">
      <Paper>
        <div>数据列表</div>
        <div slot="content">
          <div>数据列表</div>
          <div>数据列表</div>
          <div>数据列表</div>
          <div>数据列表</div>
          <div>数据列表</div>
          <div>数据列表</div>
          <div>数据列表</div>
          <div>数据列表</div><div>数据列表</div>
          <div>数据列表</div>
        </div>
      </Paper>
    </div>
  </Container>
</template>

<script>
import Container from '@/components/Container'
import Paper from '@/components/Paper'
export default {
  name: 'Dashboard',
  components: { Container, Paper }
}
</script>

<style lang="scss" scoped>
  .top-section{
    display: flex;
    justify-content: space-between;
    &__left{
      width: 400px;
    }
    &__middle{
      flex: 1;
      display: flex;
      align-items: center;
      margin: 0 5px;
      justify-content: center;
      background-color: #FFF;
    }
    &__right{
      width: 400px;
    }
  }
  .bottom-section{
    margin-top: 10px;
  }
</style>
