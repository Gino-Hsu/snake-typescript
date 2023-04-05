import Snake from './Snake';
import Food from './Food';
import ScorePanel from './ScorePanel';

// 遊戲控制，控制其他的 class
class GameControl {
  // 定義三個屬性
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  // 創建一個屬性來存取蛇的移動方向
  direction: string = '';
  // 遊戲是否結束
  isLive: boolean = true;
  // 遊戲初始速度
  initSpeed: number = 300;
  // 升等增加速度
  levelUpSpeed: number = 50;

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();

    this.init();
  }

  // 遊戲初始化，調用後遊戲開始
  init() {
    // 綁定鍵盤按下的事件
    document.addEventListener('keydown', this.keydownHandler.bind(this));
    // 調用 run 方法，使蛇移動
    this.run();
  }

  // 創建鍵盤按下的 eventHandler
  keydownHandler(e: KeyboardEvent) {
    // 需要檢查 e.key 的值是否合法(使用者是否只按了上、下、左、右)
    // 防止蛇掉頭
    if (this.snake.bodiesEle[1]) {
      if (
        (this.direction === 'ArrowUp' || this.direction === 'Up') &&
        (e.key === 'ArrowDown' || e.key === 'Down')
      ) {
        this.direction = 'ArrowUp';
      } else if (
        (this.direction === 'ArrowDown' || this.direction === 'Down') &&
        (e.key === 'ArrowUp' || e.key === 'Up')
      ) {
        this.direction = 'ArrowDown';
      } else if (
        (this.direction === 'ArrowLeft' || this.direction === 'Left') &&
        (e.key === 'ArrowRight' || e.key === 'Right')
      ) {
        this.direction = 'ArrowLeft';
      } else if (
        (this.direction === 'ArrowRight' || this.direction === 'Right') &&
        (e.key === 'ArrowLeft' || e.key === 'Left')
      ) {
        this.direction = 'ArrowRight';
      } else {
        this.direction = e.key;
      }
    } else {
      // 修改 direction 屬性
      this.direction = e.key;
    }
  }

  // 創建一個什哦動的方法
  run() {
    // 根據 this.direction 來使蛇的位置改變
    // 獲取蛇的座標
    let X = this.snake.X;
    let Y = this.snake.Y;

    // 根據方向鍵修改X值和Y值
    switch (this.direction) {
      case 'ArrowUp':
      case 'Up':
        Y -= 10;
        break;
      case 'ArrowDown':
      case 'Down':
        Y += 10;
        break;
      case 'ArrowLeft':
      case 'Left':
        X -= 10;
        break;
      case 'ArrowRight':
      case 'Right':
        X += 10;
        break;
    }

    // 檢查是否吃到食物了
    this.checkEat(X, Y);

    // 實際修改時的座標
    try {
      this.snake.Y = Y;
      this.snake.X = X;
    } catch (e: unknown) {
      // 進入 catch，說明出現 error，遊戲結束，彈出一個提示訊息
      if (e instanceof Error) alert(e.message + ' Game Over!');
      // 將 isLive 設置為 false
      this.isLive = false;
    }

    // 開啟一個定時調用
    this.isLive &&
      setTimeout(
        this.run.bind(this),
        this.initSpeed - (this.scorePanel.level - 1) * this.levelUpSpeed
      );
  }

  // 定義方法，檢查蛇是否吃到食物
  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      // 分數要增加
      this.scorePanel.addScore();
      // 蛇要增加一節
      this.snake.addBody();
      // 食物的位置要改變
      this.food.change();
    }
  }
}

export default GameControl;
