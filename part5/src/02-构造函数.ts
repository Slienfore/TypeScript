class Dog {
    name: string
    age: number

    // 构造函数
    constructor(name: string, age: number) {
        // this 指向的是当前实例, 可以通过 this 向新创建的 对象中追加属性
        this.name = name
        this.age = age
    }
}

const dog1 = new Dog('alias', 18)
const dog2 = new Dog('alias', 18)
