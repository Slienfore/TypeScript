// object 表示 JS 对象
let a: object
a = {}
a = function () {// 万物皆对象

}

// 使用 { } 来指明 对象中能够包含 哪些属性以及其中的类型
let b: { name: string, age?: number }// ? 属性可选(可有可无)
b = {name: 'alias', age: 18}
b = {name: 'sli'}// 属性后面加上 ?, 说明属性是可选的

// 如果声明  多个可选属性  未免过于 麻烦
let c: { name: string, age?: number, sex?: string }


// [key: string] => 表明键值 为 string 类型, any => 表明值为 any 类型
let d: { name: string, [key: string]: any }
d = {name: 'alias', age: '12', sex: 13}

// 定义函数类型结构(包含两个形参, 形参的类型为 number), 返回值为 number
let fn: (a: number, b: number) => number

fn = function (a: number, b: number): number {// 此处可以 (省略) 显式声明类型
    return a + b
}

// 定义数组类型
let e: string[]
e = ['a', 'b', 'c']

let f: number[]
f = [1, 2, 3]

let g: Array<number>

// 定义元组类型(长度固定的数组)
let h: [string, number]
h = ['alias', 10]
// h = ['alias']// 少一个都不行 => 长度固定

// enum 枚举
enum Gender {
    Male = 0,
    Female = 1
}

let i: { name: string, gender: Gender }
i = {name: 'alias', gender: Gender.Male}

// & 表示同时满足两个条件
let j: { name: string } & { age: number }
j = {name: 'alias', age: 10}

// 类型别名(声明的类型长度过长)
type myType = 1 | 2 | 3 | 4 | 5
type ss = string
let k: myType
let l: ss
