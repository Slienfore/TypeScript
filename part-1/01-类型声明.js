// 声明类型后进行赋值
var a;
a = 10;
// 声明类型后进行赋值
var b;
b = 'alias';
// 声明变量进行赋值
var c = false;
// 如果变量的 声明 与 赋值 是同时进行的, TS 将自动对变量进行 (类型检测)
var d = false;
// 形参声明类型 => 必须是此种类型的值, 以及形参的个数是限制的(不能多, 不能少)
function sum(a, b) {
    return a + b;
}
var num = sum(123, 456);
