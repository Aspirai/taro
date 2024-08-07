import React from 'react';
import { View, Text } from '@tarojs/components';
import './index.scss';

export default function LineCharts() {
  const refBarChart = useRef<any>()
  const defautOption = {
    xAxis: { // x轴
      type: "category", // 类目轴
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTick: { // 坐标轴刻度相关设置
        alignWithLabel: true, // 刻度线和标签对齐
      },
      axisLine: {      //设置坐标轴颜色
        lineStyle: {
          color: "#949494"
        }
      },
    },
    yAxis: { // y轴
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#949494"
        }
      },
      splitLine: { // 分割线
        lineStyle: {
          color: "#949494",
          type: [4, 4] // 虚线,
        }
      },
    },
    series: [
      // {
      //   data: [120, 132, 101, 134, 90, 230, 210]
      //   type: "line", // 折线图
      //   lineStyle: { // 线条样式
      //     normal: {
      //       color: "#14ce6f", // 线条颜色
      //     },
      //   },
      //   itemStyle: { // 折线拐点标志的样式
      //     normal: {
      //       color: "#14ce6f", // 拐点颜色
      //     },
      //   },
      //   symbol: "circle", // 拐点形状
      //   symbolSize: 8, // 拐点大小
      //   label: { // 显示数据
      //     show: true,
      //     position: "top",
      //     color: "#14ce6f",
      //   },
      //   showBackground: true,
      //   backgroundStyle: { // 区域填充样式
      //     color: "#f3f3f3",
      //   },
      //   areaStyle: { // 区域填充样式
      //     normal: {
      //       color: {
      //         type: "linear", // 线性渐变
      //         x: 0, // 渐变开始
      //         y: 0, // 渐变结束
      //         x2: 0, // 渐变开始
      //         y2: 1,  // 渐变结束
      //         //颜色过渡
      //         colorStops: [ 
      //           {
      //             offset: 0, // 0% 处的颜色
      //             color: "#7cffbb" // 线处的颜色
      //           },
      //           {
      //             offset: 1, // 100% 处的颜色
      //             color: "rgba(255,255,255,0.1)" // 坐标轴处的颜色
      //           }
      //         ],
      //         globalCoord: false // 缺省为 false,表示相对坐标，true表示绝对坐标
      //       }
      //     }
      //   },
      // },
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'Search Engine',
        type: 'line',
        stack: 'Total',
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ],
  };
  useEffect(() => {
    if (refBarChart.current) {
      refBarChart.current?.refresh(defautOption);
    }
  })

const Index: React.FC = () => {
  return (
    <View className="index">
      <Text>Hello issue!</Text>
    </View>
  );
};

export default Index;

