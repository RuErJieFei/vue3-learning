// 定义对象
class Player {
    // 定义构造函数
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    toPrint () {
        console.log(this.name + "---------" + this.age)
    }
}

var player1 = new Player('张三',22)
player1.toPrint()