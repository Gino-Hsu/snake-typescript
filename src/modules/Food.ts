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

export default Food;
