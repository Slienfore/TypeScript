(function () {
    // 接口用来定义一个类的结构, 用来定义一个类中应该包含哪些属性和方法
    interface MyInFace {// 同时, 接口能够当成 (声明类型) 进行使用
        name: string
        age: number
    }

    // 存在多个相同名称的接口时候, 将会进行 (合并)
    interface MyInFace {
        sex: string

        sayHi(): void;
    }

    // 使类去实现一个接口, 实现接口就是使类满足接口的要求
    class MyClass implements MyInFace {
        age: number; name: string; sex: string;

        constructor(name: string, age: number, sex: string) {
            this.name = name
            this.age = age
            this.sex = sex
        }

        sayHi() { console.log('Hello') }
    }


})()
