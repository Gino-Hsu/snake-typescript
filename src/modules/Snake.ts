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
    this.headEle.style.left = value + 'px';
  }
  set Y(value) {
    this.headEle.style.top = value + 'px';
  }

  // 蛇增加身體的方法
  addBody() {
    // 向 element 中添加一個 div
    const newDiv = document.createElement('div');
    this.element.insertAdjacentElement('beforeend', newDiv);
  }
}

export default Snake;
