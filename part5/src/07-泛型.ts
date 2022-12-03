// 定义函数 或者是 类 , 任意一个类型不明确, 就使用泛型
function fn<T>(a: T): T {// 使用 <T> 进行声明泛型, 那么确保参数、返回值类型相同
    return a
}

// 不指定泛型类型, TS 能对类型进行推断
fn(10)
fn<string>('hello')// 使用 <string> 进行指定泛型

// 指定多个泛型
function fn2<T, K>(a: T, b: K): T {
    return a
}

// 手动声明多个泛型
fn2<number, string>(11, 'hello')


interface Interface {
    length: number
}

// <T extends Interface>, 泛型 T 是 继承 Interface 的子类(实现类), 包含 length 属性
function fn3<T extends Interface>(a: T): number {
    return a.length
}

// 指定类泛型
class Pojo<T> {
    constructor(public name: T) {

    }
}

const pojo = new Pojo<string>('alias')
