// 定義計分區的 class
class ScorePanel {
  // score 和 level 用來記錄分數和等級
  score = 0;
  level = 1;

  // 分數和等級所在的元素，在 constructor 函式中初始化
  scoreEle: HTMLElement;
  levelEle: HTMLElement;

  // 設置一個等級上限的變量
  maxLevel: number;
  // 設置一個多少分升級的變量
  upScore: number;

  constructor(maxLevel: number = 10, upScore: number = 5) {
    this.scoreEle = document.getElementById('score')!;
    this.levelEle = document.getElementById('level')!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }

  // 設置加分的方法
  addScore() {
    this.scoreEle.innerText = ++this.score + '';

    // 分數每 10 分升一級
    if (this.score % this.upScore === 0) {
      this.levelUp();
    }
  }

  // 提升等級的方法
  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelEle.innerText = ++this.level + '';
    }
  }
}

export default ScorePanel;
