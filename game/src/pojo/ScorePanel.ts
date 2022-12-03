// 计分牌
export default class ScorePanel {
    score = 0// 分数
    level = 1// 等级
    scoreEl: HTMLElement
    levelEl: HTMLElement
    // 最大等级
    maxLevel: number
    // 到达多少分升级
    upScore: number

    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreEl = document.querySelector('#score')!
        this.levelEl = document.querySelector('#level')!
        this.maxLevel = maxLevel
        this.upScore = upScore

    }

    // 加分
    addScore(): void {
        this.scoreEl.innerText = `${++this.score}`
        // 每?分升一级
        if (this.score % this.upScore === 0) {
            this.levelUp()
        }
    }

    // 等级提升
    levelUp(): void {
        if (this.level < this.maxLevel)
            this.levelEl.innerText = `${++this.level}`
    }
}
