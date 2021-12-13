function ViewManager(textManager, options) {
  if (!textManager || !options.btnEl || !options.viewerEl || !options.inpTxt) {
    // throw 사용자 정의 예외를 만들고 프로그램을 종료합니다.
    throw Error("전달인자 중에 빈 값이 존재합니다.");
  }

  this.inpTxt = options.inpTxt;
  this.viewEl = options.viewerEl;
  this.textManager = textManager;

  options.btnEl.addEventListener("click", () => {
    this.changeValue();
  });
}

ViewManager.prototype.changeValue = function () {
  this.textManager.setValue({ data: this.inpTxt.value });
  this.updateView();
};

ViewManager.prototype.updateView = function () {
  this.viewer.textContent = this.textManager.getValue();
};
