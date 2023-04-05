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
  levelUpSpeed: number = 30;

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

    // 修改 direction 屬性
    this.direction = e.key;
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

    // 實際修改時的座標
    this.snake.X = X;
    this.snake.Y = Y;

    // 開啟一個定時調用
    this.isLive &&
      setTimeout(
        this.run.bind(this),
        this.initSpeed - (this.scorePanel.level - 1) * this.levelUpSpeed
      );
  }
}

export default GameControl;
