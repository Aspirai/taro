import Taro from '@tarojs/taro';
import { useEffect, useRef } from 'react';
import { Canvas } from '@tarojs/components';
import * as echarts from 'echarts-for-weixin';
import './index.scss';

const EChart = ({ id, data }) => {
  const chartRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const initChart = () => {
      Taro.createSelectorQuery()
        .select(`#${id}`)
        .node()
        .exec(res => {
          const canvas = res[0].node;
          const chart = echarts.init(canvas);
          setChartData(chart, data);
          chartRef.current = chart;
        });
    };

    if (!chartRef.current) {
      initChart();
    } else {
      setChartData(chartRef.current, data);
    }
  }, [data, id]);

  const setChartData = (chart, data) => {
    let option = {
      color: ['#3398DB'],
      xAxis: [
        {
          type: 'category',
          data: [],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: []
    };
    if (data && data.dimensions && data.measures) {
      option.xAxis[0].data = data.dimensions.data;
      option.series = data.measures.map(item => ({
        ...item,
        type: 'line'
      }));
    }
    chart.setOption(option);
  };

  return <Canvas type="2d" canvasId={id} id={id} ref={canvasRef} style="width: 100%; height: 100%;" />;
};

export default EChart;
