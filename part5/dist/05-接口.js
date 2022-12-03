"use strict";
(function () {
    // 使类去实现一个接口, 实现接口就是使类满足接口的要求
    class MyClass {
        constructor(name, age, sex) {
            this.name = name;
            this.age = age;
            this.sex = sex;
        }
        sayHi() { console.log('Hello'); }
    }
})();
