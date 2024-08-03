import { useRef, useEffect } from 'react'
import { View } from '@tarojs/components'
import { EChart } from "echarts-taro3-react";
import './index.scss'

export default function Index() {
  const refBarChart = useRef<any>()
  const defautOption = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "line",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(220, 220, 220, 0.8)",
        },
      },
    ],
  };
  useEffect(() => {
    if(refBarChart.current) {
      refBarChart.current?.refresh(defautOption);
    }
  })

  return (
    <View className='index'>
      <EChart ref={refBarChart} canvasId='line-canvas' />
    </View>
  )
}
