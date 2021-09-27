<template>
  <div class="equipment-purchase-management">
    <div class="f-r div-info">
      <div class="pl20" style="flex:0.98;padding-left:0px">
        <div class="line f-c">
          <div class="user" style="flex: initial;">
            <div class='f-r ' style="height:110px">
              <div style="flex:2" class='mt10'>
                <img :src="require('../../assets/images/use.png')" alt="" style="float:left;margin-left:30px">
                <span class='admin'>Hi，管理员！</span>
              </div>
              <div class='t-c mt20' style="flex：1"><img :src="require('../../assets/images/tu1.png')" alt=""></div>
              <div class='t-c  mt20' style="flex：1"><img :src="require('../../assets/images/tu2.png')" alt=""></div>
            </div>
            <div class='f-r' style="height:auto;padding-bottom:10px">
              <div >
                <div class='user-partment'><p class='zh-badge-dot f-l center'></p>  当前部门：南充市中心医院</div>
                <div class='user-partment'><p class='zh-badge-dot f-l center'></p>用户类型：普通用户</div>
                <div class='user-partment'><p class='zh-badge-dot f-l center'></p>当前区域：四川省 南充市</div>
              </div>
              <div class='f-r t-c mt20' style="font-size:12px">
                <div>
                  <p style="mb10">今日门诊</p>
                  <span style="color:rgb(13 220 77)">29000</span>人
                </div>
                <div> <p style="mb10">接入设备</p>
                  <span style="color:#de5622">1000</span>台</div>
              </div>
            </div>
          </div>
          <div class="mt20 f-r" style="flex: initial;height: 106px;">
            <div class="task">
              <p class="task-num">165</p>
              <p>今日任务提醒</p>
            </div>
            <div class="task2">
              <img :src="require('../../assets/images/tu3.png')" alt="" />
              <p>63</p>
              <p>不良事件</p>
            </div>
          </div>
          <div class="mt20 shadow">
            <div id="line2" class='line'></div>
          </div>
        </div>
      </div>
      <div class="pl20" style="flex:2">
        <div class="line shadow"></div>
      </div>
    </div>
    <div class="f-r data-card">
      <div
        :class="`item-card pl20 ${index === 0 ? 'pl0' : ''}`"
        v-for="(item, index) in cardList"
        :key="index"
      >
        <div class="shadow line">
          <div class="f-r " style="align-items: center;">
            <div class="card-div-1"><img :src="item.icon" alt="" /></div>
            <div class="card-div-2">
              <p>{{ item.name }}</p>
              <p>今日新增 &nbsp;&nbsp;{{ item.count }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="chart-list f-r">
      <div class="pl20" style="padding-left:0px">
        <div id="line" class="line shadow"></div>
      </div>
      <div class="pl20">
        <div id="bar" class="bar shadow"></div>
      </div>
      <div class="pl20">
        <div id="pie" class="pie shadow"></div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'equipmentPurchaseManagement',
  data () {
    return {
      cardList: [
        {
          icon: require('../../assets/images/main_ico1.png'),
          name: '设备维修申请',
          count: 20
        },
        {
          icon: require('../../assets/images/main_ico2.png'),
          name: '设备保养提醒',
          count: 20
        },
        {
          icon: require('../../assets/images/main_ico3.png'),
          name: '设备盘点任务',
          count: 20
        },
        {
          icon: require('../../assets/images/main_ico4.png'),
          name: '设备调配提醒',
          count: 20
        },
        {
          icon: require('../../assets/images/main_ico5.png'),
          name: '文档模板下载',
          count: 20
        },
        {
          icon: require('../../assets/images/main_ico6.png'),
          name: '设备巡检任务',
          count: 20
        }
      ]
    }
  },
  mounted () {
    setTimeout(() => {
      this.init()
    }, 300)
  },
  methods: {
    getLine2Chart () {
      var chartDom = document.getElementById('line2')
      var myChart = echarts.init(chartDom)
      var option
      let dataAxis = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      let data = [ 220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149 ]
      let yMax = 500
      let dataShadow = []
      for (let i = 0; i < data.length; i++) {
        dataShadow.push(yMax)
      }
      option = {
        title: {
          subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
        },
        xAxis: {
          data: dataAxis,
          axisLabel: {
            inside: true,
            color: '#fff'
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          z: 5
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '10%',
          containLabel: true
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#999'
          }
        },
        dataZoom: [
          {
            type: 'inside'
          }
        ],
        series: [
          {
            type: 'bar',
            showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#83bff6' },
                { offset: 0.5, color: '#188df0' },
                { offset: 1, color: '#188df0' }
              ])
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#2378f7' },
                  { offset: 0.7, color: '#2378f7' },
                  { offset: 1, color: '#83bff6' }
                ])
              }
            },
            data: data
          }
        ]
      }
      // Enable data zoom when user click bar.
      const zoomSize = 6
      myChart.on('click', function (params) {
        console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)])
        myChart.dispatchAction({
          type: 'dataZoom',
          startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
          endValue:
            dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
        })
      })

      option && myChart.setOption(option)
    },
    getLinetChart () {
      var chartDom = document.getElementById('line')
      console.log(chartDom)
      var myChart = echarts.init(chartDom)
      var option

      option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
          }
        ]
      }

      option && myChart.setOption(option)
    },
    getBartChart () {
      var chartDom = document.getElementById('bar')
      var myChart = echarts.init(chartDom)
      var option

      option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            emphasis: {
              focus: 'series'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: 'Union Ads',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          }
        ]
      }

      option && myChart.setOption(option)
    },
    getPietChart () {
      var chartDom = document.getElementById('pie')
      var myChart = echarts.init(chartDom)
      var option

      option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ]
          }
        ]
      }

      option && myChart.setOption(option)
    },
    init () {
      this.getLinetChart()
      this.getBartChart()
      this.getPietChart()
      this.getLine2Chart()
    }
  }
}
</script>
<style lang="less">
.div-info {
  height: 600px;
  margin-bottom: 20px;
}
.data-card {
  height: 120px;
  margin-bottom: 20px;
  font-size: 14px;
  .card-div-1 {
    width: 140px;
    text-align: center;
  }
  .card-div-2 {
    p:nth-of-type(1) {
      font-size: 16px;
      font-weight: 600;
    }
    p {
      font-size: 14px;
      line-height: 30px;
    }
  }
}
.item-card {
  flex: 1;
}
.chart-list {
  height: 500px;
  > div {
    flex: 1;
  }
}
.line,
.bar,
.pie {
  width: 100%;
  height: 100%;
}
.task {
  background: url('../../assets/images/left_btn1.png');
  background-size: 100% 100%;
  margin-right: 20px;
  color: #fff;
  font-size: 14px;
  padding-top: 20px;
  p {
    padding-left: 20px;
  }
  .task-num {
    font-size: 24px;
  }
}
.task2 {
  background: url('../../assets/images/left_btn2.png');
  background-size: 100% 100%;
  padding-top: 16px;

  > img,
  p {
    padding-left: 35px;
  }
  p:nth-of-type(1) {
    font-size: 20px;
    font-weight: 600;
  }
}

.center{
margin-top: 8px;
margin-right: 14px;
}

.user {
  background: rgb(246, 246, 246) url('../../assets/images/left_top.png')
    no-repeat;
  background-size: contain;
      border: 1px solid #c3bfbf;
}
.admin{
  color: rgb(5, 63, 170);
  line-height: 50px;
  font-size: 18px;
  margin-left: 10px;
  vertical-align: middle;
}
.user-partment{
  line-height: 26px;
}
</style>
