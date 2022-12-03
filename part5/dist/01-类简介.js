"use strict";
class Person {
    constructor() {
        // 定义实例属性 (只读属性)
        this.name = 'alias';
    }
    sayHi() {
        console.log('Hi!');
    }
}
// static 静态 属性(只读属性)
Person.age = 18;
const person = new Person();
console.log(Person.age);
