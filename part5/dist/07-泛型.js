"use strict";
// 定义函数 或者是 类 , 任意一个类型不明确, 就使用泛型
function fn(a) {
    return a;
}
// 不指定泛型类型, TS 能对类型进行推断
fn(10);
fn('hello'); // 使用 <string> 进行指定泛型
// 指定多个泛型
function fn2(a, b) {
    return a;
}
// 手动声明多个泛型
fn2(11, 'hello');
// <T extends Interface>, 泛型 T 是 继承 Interface 的子类(实现类), 包含 length 属性
function fn3(a) {
    return a.length;
}
// 指定类泛型
class Pojo {
    constructor(name) {
        this.name = name;
    }
}
const pojo = new Pojo('alias');
