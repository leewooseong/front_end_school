// 텍스트를 관리해주는 파일
const TextManager = (function () {
  // 은닉되는 값, 얘를 객체로 써주는 이유는?
  // 문자열(원시 자료형)으로 만들 경우 값을 공유하지 못해서? > 원시 값으로 만들면 인스턴스 간에 값 공유가 불가능하기 때문!)
  //   let value = "Hello Lions";
  let value = { data: "Hello Lions" };

  function innerTextManager() {}

  innerTextManager.prototype.getValue = function () {
    return value;
  };

  innerTextManager.prototype.setValue = function (newValue) {
    value = newValue;
  };

  return innerTextManager;
})();
