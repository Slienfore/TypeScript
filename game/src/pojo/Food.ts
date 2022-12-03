// 食物
export default class Food {
    el: HTMLElement

    constructor() {
        // 后面的 ! 非空断言
        this.el = document.querySelector('#food')!
    }

    // 获取事物 X 轴坐标
    get X(): number {
        return this.el.offsetLeft
    }

    // 获取食物 Y 轴坐标
    get Y(): number {
        return this.el.offsetTop
    }

    // 修改食物位置
    change(): void {
        // 蛇每次移动一格(10px), 所以食物的位置必须整 10px

        // 取值范围[0 ~ 290], 因为取 10 的倍数, 那么将其 × 10
        let top = Math.round(Math.random() * 29) * 10
        let left = Math.round(Math.random() * 29) * 10

        this.el.style.left = `${left}px`
        this.el.style.top = `${top}px`
    }
}
