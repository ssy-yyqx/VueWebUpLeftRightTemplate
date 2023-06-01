<template>
  <div class="chart-section" />
</template>

<script>
export default {
  data() {
    return {
      chart: null,
      options: {
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c} ({d}%)'
        },
        legend: {
          left: '20',
          orient: 'vertical',
          data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
        },
        series: [
          {
            name: '总面积',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            label: {
              position: 'inner',
              fontSize: 14,
              verticalAlign: 'top'
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 110, name: '总面积' }
            ]
          },
          {
            name: '各内容占比',
            type: 'pie',
            radius: ['45%', '60%'],
            labelLine: {
              length: 30
            },
            label: {
              formatter: '{b|{b}：}{c}  {per|{d}%}  ',
              borderRadius: 4,
              rich: {
                b: {
                  fontSize: 12,
                  lineHeight: 33
                },
                per: {
                  padding: [3, 4],
                  borderRadius: 4
                }
              }
            },
            data: [
              { value: 10, name: '百度' },
              { value: 10, name: '直达' },
              { value: 10, name: '邮件营销' },
              { value: 10, name: '谷歌' },
              { value: 10, name: '联盟广告' },
              { value: 10, name: '必应' },
              { value: 10, name: '视频广告' },
              { value: 10, name: '其他' },
              { value: 10, name: '搜索引擎' },
              { value: 10, name: '直达' },
              { value: 10, name: '营销广告' }
            ]
          }
        ]
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.initChart()
    })
  },
  methods: {
    initChart() {
      this.chart = this.$echarts.init(this.$el, 'macarons')
      this.chart.setOption(this.options)
    }
  }
}
</script>

<style lang="scss" scoped>
.chart-section{
  width: 100%;
  height: 100%;
}
</style>
