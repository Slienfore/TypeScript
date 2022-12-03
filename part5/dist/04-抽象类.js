"use strict";
(function () {
    // 抽象类(不希望某一个类被继承)
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    class Dog extends Animal {
        sayHi() { }
    }
    class Cat extends Animal {
        // 方法重写(以子类为主)
        sayHi() { }
    }
})();
