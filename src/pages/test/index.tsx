import react from 'react'
import { View } from '@tarojs/components'
import { Table, ITableProps } from '@antmjs/vantui'

const dates = ['2024-7-11', '2024-7-17', '2024-7-26']
// 循环生成日期列
const dateColumns = dates.map((item) => ({
  title: item,
  dataIndex: 'numerical_value',
  align: undefined,
  sort: true,
}));

const columns: ITableProps['columns'] = [
  {
    title: '序号',
    dataIndex: 'id',
    fixed: 'left',
    sort: true,
    width: 50,
  },
  {
    title: '项目名称',
    dataIndex: 'name',
    align: 'left',
    render: (val) => <View style={{ color: '#2196F3' }}>{val}</View>,
  },
  {
    title: '简称',
    dataIndex: 'abbreviation',
    align: 'left',
    render: (val) => <View style={{ color: '#2196F3' }}>{val}</View>,
    width: 80,
  },
  ...dateColumns, // 添加日期列
  {
    title: '参考区间',
    dataIndex: 'section',
    sort: true,
  },
  {
    title: '单位',
    dataIndex: 'unit',
  },
]
export default function Demo() {
  const [state, changeState] = react.useState({
    dataSource: [],
    loading: false,
  })

  const setState = (stateNew) => {
    changeState({
      ...state,
      ...stateNew,
    })
  }

  react.useEffect(() => {
    setState({ loading: true })
    setTimeout(() => {
      setState({
        loading: false,
        dataSource: [
          {
            "id": "1",
            "name": "尿素",
            "abbreviation": "UREA",
            "numerical_value": "4.6",
            "section": "2.5~6.1",
            "unit": "mmol/L"
          },
          {
            "id": "2",
            "name": "肌酐",
            "abbreviation": "CREA",
            "numerical_value": "24",
            "section": "<29~88",
            "unit": "umol/L"
          },
          {
            "id": "3",
            "name": "尿酸",
            "abbreviation": "UA",
            "numerical_value": "129.8",
            "section": "149~369",
            "unit": "umol/L"
          },
          {
            "id": "4",
            "name": "丙氨酸氨基转移酶",
            "abbreviation": "ALT",
            "numerical_value": "29",
            "section": "7~40",
            "unit": "U/L"
          },
          {
            "id": "5",
            "name": "天冬氨酸氨基转移酶",
            "abbreviation": "AST",
            "numerical_value": "19",
            "section": "15~46",
            "unit": "U/L"
          },
          {
            "id": "6",
            "name": "碱性磷酸酶",
            "abbreviation": "ALP",
            "numerical_value": "133",
            "section": "35~126",
            "unit": "U/L"
          },
          {
            "id": "7",
            "name": "γ-谷氨酰转肽酶",
            "abbreviation": "GGT",
            "numerical_value": "133",
            "section": "12~43",
            "unit": "U/L"
          },
          {
            "id": "8",
            "name": "总胆红素",
            "abbreviation": "TBIL",
            "numerical_value": "8.8",
            "section": "3.4~20.5",
            "unit": "umol/L"
          },
          {
            "id": "9",
            "name": "结合胆红素",
            "abbreviation": "CONJ. BIL",
            "numerical_value": "3.1",
            "section": "0.0~8.6",
            "unit": "umol/L"
          },
          {
            "id": "10",
            "name": "总蛋白",
            "abbreviation": "TP",
            "numerical_value": "71.4",
            "section": "65~85",
            "unit": "g/L"
          },
          {
            "id": "11",
            "name": "白蛋白",
            "abbreviation": "ALB",
            "numerical_value": "36.5",
            "section": "40~55",
            "unit": "g/L"
          },
          {
            "id": "12",
            "name": "球蛋白",
            "abbreviation": "GLOB",
            "numerical_value": "34.9",
            "section": "20~30",
            "unit": "g/L"
          },
          {
            "id": "13",
            "name": "白/球蛋白比值",
            "abbreviation": "A/G",
            "numerical_value": "1.0",
            "section": "1.5~2.5",
            "unit": " "
          },
          {
            "id": "14",
            "name": "前白蛋白",
            "abbreviation": "PA",
            "numerical_value": "0.14",
            "section": "0.18~0.45",
            "unit": "g/L"
          },
          {
            "id": "15",
            "name": "甘胆酸",
            "abbreviation": "CG",
            "numerical_value": "2.2",
            "section": "<10",
            "unit": "mg/L"
          },
          {
            "id": "16",
            "name": "未结合胆红素",
            "abbreviation": "UNC. BIL",
            "numerical_value": "8.8",
            "section": "3.4~20.5",
            "unit": "umol/L"
          },
          {
            "id": "17",
            "name": "谷胱甘肽还原酶",
            "abbreviation": "GR",
            "numerical_value": "34",
            "section": "33~73",
            "unit": "U/L"
          },
          {
            "id": "18",
            "name": "铁蛋白",
            "abbreviation": "SF",
            "numerical_value": "13.0",
            "section": "12.0~135.0",
            "unit": "ng/mL"
          },
          {
            "id": "19",
            "name": "胱抑素C",
            "abbreviation": "Cys",
            "numerical_value": "0.74",
            "section": "<1.09",
            "unit": "mg/L"
          }
        ],
      })
    }, 2000)
  }, [])

  const sortAction = (col) => {
    const { sortOrder, dataIndex } = col
    const { dataSource } = state
    if (sortOrder !== 'descend') {
      dataSource.sort(function (a, b) {
        return a[dataIndex] - b[dataIndex]
      })
    } else {
      dataSource.sort(function (a, b) {
        return b[dataIndex] - a[dataIndex]
      })
    }

    setState({
      dataSource,
    })
  }
  return (
    <Table
      columns={columns}
      dataSource={state.dataSource}
      sortChange={sortAction}
      loading={state.loading}
      scroll={{ x: 500 }}
      rowKey="title"
    />
  )
}
