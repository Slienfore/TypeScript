export default class Snake {
    // 蛇容器
    el: HTMLElement
    // 蛇头
    head: HTMLElement
    // 蛇身体(包含蛇头)
    bodies: HTMLCollection

    constructor() {
        this.el = document.querySelector('#snake')!
        // querySelector => 获取到的是第一个元素
        this.head = document.querySelector('#snake > div') as HTMLElement
        // querySelectorAll => 返回值 NodeListOf<Element>, 获取结点之后, 数据不会再变化(需要重新获取)
        // this.bodies = document.querySelectorAll('#snake > div')
        this.bodies = this.el!
            .getElementsByTagName('div')
    }

    // 获取蛇的 X 坐标(蛇头位置)
    get X(): number {
        return this.head.offsetLeft
    }

    // 获取蛇 Y 轴 坐标(蛇头位置)
    get Y(): number {
        return this.head.offsetTop
    }

    // 设置蛇的 X 坐标(蛇头位置)
    set X(val: number) {
        // 新值、旧值相同
        if (this.Y === val) return

        if (val < 0 || val > 290) throw new Error('撞墙了!')

        this.moveBody()

        this.head.style.left = `${val}px`
    }

    // 设置蛇 Y 轴 坐标(蛇头位置)
    set Y(val: number) {
        // 新值、旧值相同
        if (this.Y === val) return

        if (val < 0 || val > 290) throw new Error('撞墙了!')

        this.moveBody()

        this.head.style.top = `${val}px`
    }

    // 增加新的身体
    addBody(): void {
        // insertAdjacentHTML => beforeend, 在该元素结束标签之前插入一段 HTML 代码
        this.el.insertAdjacentHTML('beforeend', '<div></div>')
    }

    // 移动新的身体
    moveBody(): void {
        for (let idx = this.bodies.length - 1;// 逆着遍历, 后一节位置, 变成前边一节位置
             idx > 0; --idx) {

            let preX = (this.bodies[idx - 1] as HTMLElement).offsetLeft;
            let preY = (this.bodies[idx - 1] as HTMLElement).offsetTop;

            (this.bodies[idx] as HTMLElement).style.left = preX + 'px';
            (this.bodies[idx] as HTMLElement).style.top = preY + 'px';
        }
    }
}
