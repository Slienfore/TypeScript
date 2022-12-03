(function () {
    class Person {
        private _name: string
        private _age: number

        constructor(name: string, age: number) {
            this._name = name
            this._age = age
        }


        get name(): string {
            return this._name;
        }

        set name(value: string) {
            this._name = value;
        }

        get age(): number {
            return this._age;
        }

        set age(value: number) {
            this._age = value;
        }
    }

    class Class {
        // 直接将属性定义在构造函数中
        constructor(public name: string, public age: number) {

        }
    }
})()
