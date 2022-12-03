class Person {
    // 定义实例属性 (只读属性)
    readonly name: string = 'alias'

    // static 静态 属性(只读属性)
    static readonly age: number = 18

    sayHi() {
        console.log('Hi!')
    }

}

const person = new Person()
console.log(Person.age)
