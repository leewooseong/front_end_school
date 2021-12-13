describe("텍스트 관리자입니다.", () => {
  // 아래의 내용을 리펙토링
  let textManager;
  // it 함수 각각 호출 직전에 실행됩니다. > 각각 it에 선언된 textManager를 한번에 생성해줌
  beforeEach(() => {
    textManager = new TextManager();
  });

  // 유닛을 it으로 작성
  it("텍스트 값을 전달합니다.", () => {
    // const textManager = new TextManager();  > beforeEach로 대체

    const initValue = textManager.getValue();
    expect(textManager.getValue()).toBe(initValue);
  });
  // 유닛을 it으로 작성
  it("텍스트 값을 수정합니다.", () => {
    // const textManager = new TextManager();  > beforeEach로 대체

    const newText = { data: "Hello Zebras" };
    textManager.setValue(newText.data);

    expect(textManager.getValue()).toBe(newText.data);
  });
});
