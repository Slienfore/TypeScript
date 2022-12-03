(function () {
    // 抽象类(不希望某一个类被继承)
    abstract class Animal {
        name: string
        age: number

        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }

        // 抽象方法(抽象方法没有方法体, 子类必须对抽象方法重写)
        abstract sayHi(): void;
    }

    class Dog extends Animal {
        sayHi(): void {}
    }

    class Cat extends Animal {
        // 方法重写(以子类为主)
        sayHi(): void {}
    }


})()
