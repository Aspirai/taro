// babel-preset-taro 更多选项和默认值：

const {
  plugin
} = require("postcss");

// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    ['taro', {
      framework: 'react',
      ts: true
    }]
  ],
  "plugins": [
    ["module-resolver", {
      "root": [
        "./src"
      ],
      "alias": {
        "@/components": "./src/components",
        "@/pages": "./src/pages",
        "@/echarts": "./src/echarts-taro3-react/lib",
      }
    }]
  ]
}
