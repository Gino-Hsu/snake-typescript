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
  }

  // 創建鍵盤按下的 eventHandler
  keydownHandler(e: KeyboardEvent) {
    // 需要檢查 e.key 的值是否合法(使用者是否只按了上、下、左、右)

    // 修改 direction 屬性
    this.direction = e.key;
  }
}

export default GameControl;
