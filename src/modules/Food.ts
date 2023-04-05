import Snake from './Snake';

// 定義food class
class Food {
  // 定義一個屬性表示食物所對應的元素
  element: HTMLElement;
  // 蛇的元素
  snake: Snake;

  constructor() {
    // 獲取葉面中的 food 元素並將其復職給 element
    this.element = document.getElementById('food')!;
    this.snake = new Snake();
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
  change(): void {
    // 生成一個隨機的位置
    // 最小是0 最大是290
    // 移動一次就是一格，一格的大小是 10
    let top = Math.round(Math.random() * 29) * 10;
    let left = Math.round(Math.random() * 29) * 10;

    let snakeEle = this.snake.bodiesEle;
    // 遍歷蛇的元素，如果與實務重疊則再改變食物的位置
    for (let i = 0; i < snakeEle.length; i++) {
      if (
        (snakeEle[i] as HTMLElement).offsetTop === top &&
        (snakeEle[i] as HTMLElement).offsetLeft === left
      ) {
        return this.change();
      } else {
        this.element.style.top = top + 'px';
        this.element.style.left = left + 'px';
      }
    }
  }
}

export default Food;
