describe("클릭이벤트처리 및 뷰를 담당하는 함수입니다.", () => {
  // dependency injection(의존성 주입): 이 객체는 혼자 존재할 수 없고 다른 객체를 자기에게 주입시켜야 사용할 수 있는 객체?

  let textManager, viewerEl, btnEl, inpTxt, viewManager;

  beforeEach(() => {
    textManager = new TextManager();
    viewerEl = document.createElement("strong");
    btnEl = document.createElement("button");
    inpTxt = document.createElement("input");

    viewManager = new ViewManager(textManager, { viewerEl, btnEl, inpTxt });
  });

  it("viewManager에 인자가 잘 전달됐는지 확인합니다.", () => {
    const textManager = null;
    const btnEl = null;
    const viewerEl = null;
    const inpTxt = null;

    // 인자가 전달되는지 확인하는 함수
    const actual = () =>
      new ViewManager(textManager, { btnEl, viewerEl, inpTxt });

    // console.log(actual);

    // actual에는 값이 아닌 실행할 수 있는 함수가 전달되어야 합니다.
    // toThrowError()? 에러를 던져주는 함수?
    expect(actual).toThrowError();
  });

  it("click 이벤트가 발생했을 경우 changeValue 함수를 실행합니다.", () => {
    // spyOn: 특정한 모듈의 함수를 감시합니다, toHaveBeenCalled와 셋트
    spyOn(viewManager, "changeValue");
    btnEl.click();
    // toHaveBeenCalled: 함수가 실행됐는지 안됐는지 확인해주는 것
    expect(viewManager.changeValue).toHaveBeenCalled();
  });

  // updateView: changeView라는 매서드가 실행이되면 연달아 실행되는 함수
  it("updateView 함수를 실행합니다.", () => {
    // spyOn: 특정한 모듈의 함수를 감시합니다, toHaveBeenCalled와 셋트
    spyOn(viewManager, "updateView");
    viewManager.changeValue();
    // toHaveBeenCalled: 함수가 실행됐는지 안됐는지 확인해주는 것
    expect(viewManager.updateView).toHaveBeenCalled();
  });
});
