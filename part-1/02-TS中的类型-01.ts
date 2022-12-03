// 直接使用 字面量进行类型声明
let a: 10

// 使用 | 进行连接多个 类型 (联合类型)
let b: 'male' | 'female'
b = 'male'
b = 'female'

// 联合类型
let c: boolean | string
c = true
c = 'hello'

// any(显式声明) 表示的是任意类型, 一个变量设置成为 any 后(相当于对该变量关闭了 TS 语法检查)
let d: any
d = 10
d = 'alias'
d = true

// unknown 未知类型变量
let e: unknown
e = 10
e = 'alias'
e = true

let s: string
/*
s = d// any 类型能够赋值给其它类型, 其它类型将进行转换为 any 类型

s = e// unknown 类型不能赋值给 其它类型*/

// unknown 类型赋值给其它类型
if (typeof e === 'string') s = e

// 类型断言
s = e as string
s = <string>e

// void(空), 表示返回值为 '空', 可以没有返回值, 或者返回值为: null, undefined
function fn1(): void {
    return undefined
    return null
}

// 表示永远都不会有返回值
function fn2(): never {
    throw new Error('没有返回值哦')
}

