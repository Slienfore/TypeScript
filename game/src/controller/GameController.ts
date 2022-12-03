import ScorePanel from ".././pojo/ScorePanel"
import Food from ".././pojo/Food"
import Snake from ".././pojo/Snake"

export default class GameController {
    snake: Snake
    food: Food
    panel: ScorePanel
    // 蛇移动方向
    direction: string = 'Right'
    // 是否存活
    alive: boolean = true

    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.panel = new ScorePanel()

        this.initial()
        this.run()
    }

    // 初始化
    initial(): void {
        document.addEventListener('keydown', this.keyDownHandler.bind(this))
    }

    // 键盘按下响应函数
    keyDownHandler(e: KeyboardEvent): void {
        this.direction = e.key
    }

    // 移动
    run() {
        let X = this.snake.X, Y = this.snake.Y

        switch (this.direction) {
            case 'ArrowUp': case 'Up':
                Y -= 10
                break
            case 'ArrowDown': case 'Down':
                Y += 10
                break
            case 'ArrowLeft': case 'Left':
                X -= 10
                break
            case 'ArrowRight': case 'Right':
                X += 10
                break
        }

        this.checkEat(X, Y)

        try {
            this.snake.X = X
            this.snake.Y = Y
        } catch (e: any) {
            alert(e.message)
            this.alive = false
        }

        // 300ms 之后再次调用
        this.alive && setTimeout(this.run.bind(this), 300 - (this.panel.level - 1) * 30)
    }

    // 检查是否吃到食物
    checkEat(X: number, Y: number): void {
        if (X === this.food.X && Y === this.food.Y) {
            this.food.change()
            this.panel.addScore()
            this.snake.addBody()
        }
    }

}
