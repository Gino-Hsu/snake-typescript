class Snake {
  // 蛇的容器
  element: HTMLElement;
  // 表示蛇頭的元素
  headEle: HTMLElement;
  // 蛇的身體(包括舌頭)
  bodiesEle: HTMLCollection;

  constructor() {
    this.element = document.getElementById('snake')!;
    this.headEle = document.querySelector('#snake > div')!;
    this.bodiesEle = this.element.getElementsByTagName('div');
  }

  // 獲取蛇的座標(蛇頭座標)
  get X() {
    return this.headEle.offsetLeft;
  }
  get Y() {
    return this.headEle.offsetTop;
  }

  // 設置蛇頭的座標
  set X(value) {
    // 如果新的X值與舊值一樣，則直接返回
    if (this.X === value) return;
    // 判斷有沒有超出0~290的範圍，蛇撞牆了
    if (value < 0 || value > 290) throw new Error('蛇撞牆了!');

    // 移動身體
    this.moveBody();
    // 修改蛇頭位置
    this.headEle.style.left = value + 'px';
    // 檢查蛇頭有沒有撞到身體
    this.checkHeadBody();
  }
  set Y(value) {
    if (this.Y === value) return;
    if (value < 0 || value > 290) throw new Error('蛇撞牆了!');

    this.moveBody();
    this.headEle.style.top = value + 'px';
    this.checkHeadBody();
  }

  // 蛇增加身體的方法
  addBody() {
    // 向 element 中添加一個 div
    const newDiv = document.createElement('div');
    this.element.insertAdjacentElement('beforeend', newDiv);
  }

  // 蛇身體移動的方法
  moveBody() {
    // 將後面的方塊設置至前面方塊的位置，一定要由後往前改
    for (let i = this.bodiesEle.length - 1; i > 0; i--) {
      // 獲取前面身體的位置
      let frontX = (this.bodiesEle[i - 1] as HTMLElement).offsetLeft;
      let frontY = (this.bodiesEle[i - 1] as HTMLElement).offsetTop;

      // 將當前身體位置改為前面身體的位置
      (this.bodiesEle[i] as HTMLElement).style.left = frontX + 'px';
      (this.bodiesEle[i] as HTMLElement).style.top = frontY + 'px';
    }
  }

  // 判斷蛇頭重疊身體的方法
  checkHeadBody() {
    for (let i = 1; i < this.bodiesEle.length; i++) {
      let body = this.bodiesEle[i] as HTMLElement;
      if (this.X === body.offsetLeft && this.Y === body.offsetTop) {
        // 蛇頭與身體重疊
        throw new Error('撞到自己了!');
      }
    }
  }
}

export default Snake;
