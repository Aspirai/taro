/* import { observable } from "mobx";

// observable 用于定义一个可观察的对象，这个对象的属性发生变化时，会自动触发视图更新
const homeStore = observable({
    username: "admin",
    original: "admin",
    changeName(name: string) {
        this.username = name;
    },
    // 定义一个异步方法
    async changeNameAsync(name: string) {
        // 模拟一个异步请求
        setTimeout(() => {
            this.username = this.original;
        }, 1000);
    },
})

export default homeStore; */

