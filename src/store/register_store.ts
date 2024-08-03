import { observable } from "mobx";

// observable 用于定义一个可观察的对象，这个对象的属性发生变化时，会自动触发视图更新
const registerStore = observable({
    time : 0,
    phone_number : '',
    verification_code : '',
})

export default registerStore;

