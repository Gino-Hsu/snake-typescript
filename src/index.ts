import './style/index.less';

// 定義food class
class Food {
  // 定義一個屬性表示食物所對應的元素
  element: HTMLElement;

  constructor() {
    // 獲取葉面中的 food 元素並將其復職給 element
    this.element = document.getElementById('food')!;
  }

  // 定義獲取食物 X 軸座標的方法
  get X() {
    return this.element.offsetLeft;
  }

  // 定義獲取食物 Y 軸座標的方法
  get Y() {
    return this.element.offsetTop;
  }

  // 修改食物位置的方法
  change() {
    // 生成一個隨機的位置
    // 最小是0 最大是290
    // 移動一次就是一格，一格的大小是 10
    let top = Math.round(Math.random() * 29) * 10;
    let left = Math.round(Math.random() * 29) * 10;

    this.element.style.top = top + 'px';
    this.element.style.left = left + 'px';
  }
}

// TODO:測試
// const food = new Food();
// console.log(food.X, food.Y);
// food.change();
// console.log(food.X, food.Y);

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

  constructor(maxLevel: number = 10, upScore: number = 10) {
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

const scorePanel = new ScorePanel();
