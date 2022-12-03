// 声明类型后进行赋值
let a: number
a = 10
// 声明类型后进行赋值
let b: string
b = 'alias'

// 声明变量进行赋值
let c: boolean = false

// 如果变量的 声明 与 赋值 是同时进行的, TS 将自动对变量进行 (类型检测)
let d = false

// 形参声明类型 => 必须是此种类型的值, 以及形参的个数是限制的(不能多, 不能少)
function sum(a: number, b:number): number {
    return a + b
}

const num = sum(123, 456)

