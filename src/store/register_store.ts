import { observable } from "mobx";

// observable 用于定义一个可观察的对象，这个对象的属性发生变化时，会自动触发视图更新
const registerStore = observable({
    time: 0,
    phone_number: '',
    verification_code: '',
    select_box: false,
    timeOut() {
        // 输出time
        console.log(this.time)
    },
    // 计时
    setTime() {
        this.time = 60;
        let timer;
        timer = setInterval(() => {
            this.time -= 1;
            if (this.time === 0) {
                clearInterval(timer);
            }
        }, 1000);
    },

    // 改变手机号
    setPhoneNumber(phone) {
        this.phone_number = phone;
        // console.log(this.phone_number)
    },

    // 改变验证码
    setVerificationCode(code) {
        this.verification_code = code;
        // console.log(this.verification_code)
    },

    // 改变选择框状态
    setSelectBox() {
        this.select_box = !this.select_box;
        setInterval(() => {
            console.log(this.select_box)
        }, 1000);
    }
})

export default registerStore;

