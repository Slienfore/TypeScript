// TS 会检查不同文件的变量的命名, 使用立即执行函数(作用域不一样)
(function () {
    class Animal {
        name: string
        age: number
        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }
        sayHi() {
            console.log('alias')
        }
    }

    class Dog extends Animal {
        run() {
            console.log(`${this.name} 在跑...`)
        }
    }

    class Cat extends Animal {
        // 方法重写(以子类为主)
        sayHi() {
            // super 关键字
            super.sayHi()
            console.log('喵喵')
        }
    }

    const dog = new Dog('旺财', 18)
    dog.run()
    const cat = new Cat('咪咪', 28)

})()
