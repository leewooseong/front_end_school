// 객체 지향

// 1. 모듈 패턴
// - 생성자 함수(객체를 반환하는 함수?)는 이름 첫글자는 대문자로!
// - 인스턴스 생성 불가??
function Person() {
  let age = 35;

  return {
    getAge: function () {
      return age;
    },
    setAge: function (data) {
      age = data;
    },
  };
}

const person = Person();
console.log(Person.getAge());

// 모듈 패턴을 쓰는 이유?
// - 값을 은닉하기 위해서

타입;

// 2. 사용자 정의 타입 패턴(생성자 합수, this, prototype 추가로 공부하기..)
// - 일반적으로 사용하던 방법, 우리도 우리 마음대로 타입을 만들어서 사용하겠다.
// - 여기서는 값을 숨길수가 없다..
function PersonType() {
  // 생성자 함수로 이용할 때는 this 사용?
  this.age = 35;
}

PersonType.prototype.getAge = function () {
  return this.age;
};

// 생성자 함수는 new를 이용해서 생성, new라는 키워드가 this가 가리키는 것을 instance로 만들어준다?
const instancePerson = new PersonType();
console.log(instancePerson.getAge());
// age에 대한 접근을 getAge가 아니여도 접근 가능??
console.log(instancePerson.age);
