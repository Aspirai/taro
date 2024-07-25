// 导入 mobx 的 observable 方法，用于定义可观察对象
import { observable } from "mobx";

import { getcrossTalkList } from "../services/crossTalk"; // 导入请求方法

const crossTalkStore = observable({
    crossTalkList: [],
    // 箭头函数指向外部this
    // function函数指向内部this
    setCrossTalkList:async function() {
        // await等待一个异步操作的完成
        let res = await getcrossTalkList();
        this.crossTalkList = res.data;
        // console.log(this.crossTalkList)
    }
})

export default crossTalkStore;