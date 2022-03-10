class Player {
    // 定义构造函数
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    toPrint () {
        let _this = this
        // setTimeout(function () {
        //     console.log(_this.name + "---------" + _this.age)
        // }, 1000)
        setTimeout(() => {
            console.log(this.name + "---------" + this.age)
        }, 1000)
    }
}

let play1 = new Player("aaa", 222)
play1.toPrint()