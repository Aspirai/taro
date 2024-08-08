import { useRef, useEffect, useState } from 'react'
import { View } from '@tarojs/components'
import { EChart } from "echarts-taro3-react";
import './index.scss'
import { set } from 'mobx';

export default function LineCharts({ data }) {
  const { WBC, RBC, Hgb, HCT, MCV, MCH, MCHC, PLT, Lymph0,
    Mono0, Neut0, Eos0, Baso0, Lymph1, Mono1, Neut1, Eos1,
    Baso1, RDW_CV, RDW_SD, PLCR, Ret1, Ret0, IRF, HRF, MFR,
    LFR, MPV, PDW } = data;


  // 归一化函数
  // function normalize(array) {
  //   // 归一化公式：(X - min) / (max - min)
  //   // 延时加载，获取最大值和最小值
  //   if (!array) return [];
  //   const min = Math.min(...array); // 获取数组中的最小值
  //   const max = Math.max(...array); // 获取数组中的最大值
  //   return array.map(value => (value - min) / (max - min)); // 归一化公式
  // }

  // // 归一化后的数据
  // const WBCNorm = normalize(WBC);
  // const RBCNorm = normalize(RBC);
  // const HgbNorm = normalize(Hgb);
  // const PLTNorm = normalize(PLT);

  // const result = [WBC, RBC, Hgb, PLT]
  const [result, setResult] = useState([WBC, RBC, Hgb, PLT]);

  const refBarChart = useRef<any>()
  const defautOption = {
    // title: { // 标题
    //   text: 'Stacked Line'
    // },
    tooltip: { // 提示框
      trigger: 'axis', // 触发类型：坐标轴触发
    },
    legend: { // 图例---类别切换
      data: ['白细胞计数', '红细胞计数', '血红蛋白量', '血小板计数']
    },
    grid: { // 位置设置
      left: '3%', // 距离左边的距离
      right: '4%',
      bottom: '3%',
      containLabel: true // 包含坐标轴的刻度标签在内
    },
    xAxis: { // x轴
      type: "category", // 类目轴
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTick: { // 坐标轴刻度相关设置
        alignWithLabel: true, // 刻度线和标签对齐
      },
      axisLine: {  //设置坐标轴颜色
        lineStyle: {
          color: "#949494"
        }
      },
    },
    yAxis: { // y轴
      // type: "value", // 数值轴
      type: "log", // 对数轴
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
      {
        name: '红细胞计数',
        type: 'line',
        stack: 'Total', // 数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置
        data: result[1], // 数据
        lineStyle: { // 线条样式
          normal: {
            color: "#14ce6f ", // 线条颜色
          },
        },
        itemStyle: { // 折线拐点标志的样式
          normal: {
            color: "#14ce6f ", // 拐点颜色
          },
        },
        symbol: "circle", // 拐点形状
        symbolSize: 8, // 拐点大小
        label: { // 显示数据
          show: true,
          position: "top",
          color: "#14ce6f ",
        },
        showBackground: true,
        backgroundStyle: { // 区域填充样式
          color: "#14ce6f ",
        },
        areaStyle: { // 区域填充样式
          normal: {
            color: {
              type: "linear", // 线性渐变
              x: 0, // 渐变开始
              y: 0, // 渐变结束
              x2: 0, // 渐变开始
              y2: 1,  // 渐变结束
              //颜色过渡
              colorStops: [
                {
                  offset: 0, // 0% 处的颜色
                  color: "#14ce6f " // 线处的颜色
                },
                {
                  offset: 1, // 100% 处的颜色
                  color: "rgba(255,255,255,0.1)" // 坐标轴处的颜色
                }
              ],
              globalCoord: false // 缺省为 false,表示相对坐标，true表示绝对坐标
            }
          }
        },
        smooth: true, // 平滑曲线
      },
      {
        name: '白细胞计数',
        type: 'line',
        stack: 'Total',
        data: result[0],
        lineStyle: { // 线条样式
          normal: {
            color: "#14ce6f", // 线条颜色
          },
        },
        itemStyle: { // 折线拐点标志的样式
          normal: {
            color: "#14ce6f", // 拐点颜色
          },
        },
        symbol: "circle", // 拐点形状
        symbolSize: 8, // 拐点大小
        label: { // 显示数据
          show: true,
          position: "top",
          color: "#14ce6f",
        },
        showBackground: true,
        backgroundStyle: { // 区域填充样式
          color: "#f3f3f3",
        },
        areaStyle: { // 区域填充样式
          normal: {
            color: {
              type: "linear", // 线性渐变
              x: 0, // 渐变开始
              y: 0, // 渐变结束
              x2: 0, // 渐变开始
              y2: 1,  // 渐变结束
              //颜色过渡
              colorStops: [
                {
                  offset: 0, // 0% 处的颜色
                  color: "#7cffbb" // 线处的颜色
                },
                {
                  offset: 1, // 100% 处的颜色
                  color: "rgba(255,255,255,0.1)" // 坐标轴处的颜色
                }
              ],
              globalCoord: false // 缺省为 false,表示相对坐标，true表示绝对坐标
            }
          }
        },
        smooth: true, // 平滑曲线
      },
      {
        name: '血红蛋白量',
        type: 'line',
        stack: 'Total',
        data: result[2],
        lineStyle: { // 线条样式
          normal: {
            color: "#14ce6f", // 线条颜色
          },
        },
        itemStyle: { // 折线拐点标志的样式
          normal: {
            color: "#14ce6f", // 拐点颜色
          },
        },
        symbol: "circle", // 拐点形状
        symbolSize: 8, // 拐点大小
        label: { // 显示数据
          show: true,
          position: "top",
          color: "#14ce6f",
        },
        showBackground: true,
        backgroundStyle: { // 区域填充样式
          color: "#f3f3f3",
        },
        areaStyle: { // 区域填充样式
          normal: {
            color: {
              type: "linear", // 线性渐变
              x: 0, // 渐变开始
              y: 0, // 渐变结束
              x2: 0, // 渐变开始
              y2: 1,  // 渐变结束
              //颜色过渡
              colorStops: [
                {
                  offset: 0, // 0% 处的颜色
                  color: "#7cffbb" // 线处的颜色
                },
                {
                  offset: 1, // 100% 处的颜色
                  color: "rgba(255,255,255,0.1)" // 坐标轴处的颜色
                }
              ],
              globalCoord: false // 缺省为 false,表示相对坐标，true表示绝对坐标
            }
          }
        },
        smooth: true, // 平滑曲线
      },
      {
        name: '血小板计数',
        type: 'line',
        stack: 'Total',
        data: result[3],
        lineStyle: { // 线条样式
          normal: {
            color: "#14ce6f", // 线条颜色
          },
        },
        itemStyle: { // 折线拐点标志的样式
          normal: {
            color: "#14ce6f", // 拐点颜色
          },
        },
        symbol: "circle", // 拐点形状
        symbolSize: 8, // 拐点大小
        label: { // 显示数据
          show: true,
          position: "top",
          color: "#14ce6f",
        },
        showBackground: true,
        backgroundStyle: { // 区域填充样式
          color: "#f3f3f3",
        },
        areaStyle: { // 区域填充样式
          normal: {
            color: {
              type: "linear", // 线性渐变
              x: 0, // 渐变开始
              y: 0, // 渐变结束
              x2: 0, // 渐变开始
              y2: 1,  // 渐变结束
              //颜色过渡
              colorStops: [
                {
                  offset: 0, // 0% 处的颜色
                  color: "#7cffbb" // 线处的颜色
                },
                {
                  offset: 1, // 100% 处的颜色
                  color: "rgba(255,255,255,0.1)" // 坐标轴处的颜色
                }
              ],
              globalCoord: false // 缺省为 false,表示相对坐标，true表示绝对坐标
            }
          }
        },
        smooth: true, // 平滑曲线
      },
    ],
    animation: false, // 关闭动画
    animationDuration: 0, // 动画时长
    animationEasing: "linear", // 动画缓动效果
  };
  useEffect(() => {
    if (refBarChart.current) {
      refBarChart.current?.refresh(defautOption);
    }

    if (result[0] == null) {
      // 延时
      setTimeout(() => {
        setResult([WBC, RBC, Hgb, PLT]);
      }, 200);
      console.log("result", result);
    }
  }, [result]);

  return (
    <View className='stackedLine'>
      <EChart ref={refBarChart} canvasId='line-canvas' />
    </View>
  )
}
