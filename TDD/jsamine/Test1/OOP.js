// 객체 지향

// 0922-0924 다시!
// 1. 모듈 패턴
// Person = 객체를 반환하는 함수(생성자함수는 X)

// 모듈 패턴을 쓰는 이유?
// - 값을 은닉하기 위해서
// - 클로저를 이용해서 값을 은닉한다.

function person() {
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

타입;

// 2. 사용자 정의 타입 패턴(생성자 합수, this, prototype 추가로 공부하기..)
// - 얘는 인스턴스를 만들기 위한 함수(인스턴스 = 생성자 함수의 프로퍼티와 메서드를 상속받아 생성된 결과물)
// - 일반적으로 사용하던 방법, 우리도 우리 마음대로 타입을 만들어서 사용하겠다.(2015년 이전까지는 클래스를 이런 식으로 만들었다.)
// - 사용자 정의 타입 패턴을 이용해 우리만의 생성자 함수를 만들어 줄 수 있다.
// - 여기서는 값을 숨길수가 없다..
function PersonType() {
  // 생성자 함수로 이용할 때는 this 사용?
  this.age = 35;
}

PersonType.prototype.getAge = function () {
  return this.age;
};

// 생성자 함수는 new를 이용해서 생성, new라는 키워드가 this가 가리키는 것을 instance로 만들어준다?
// new = 인스턴스를 만드는 데 생성자 함수의 this가 가리키는 것은 인스턴스로 바꿔주는 것, 원래 this는 자신을 호출함 함수를 가리킨다. new를 써서 바뀐 것!
const instancePerson = new PersonType();
console.log(instancePerson.getAge());
// age에 대한 접근을 getAge가 아니여도 접근 가능??
// instance에 의해 접근을 할 수 있기 때문에 값이 변경될 수 있다.
console.log(instancePerson.age);

// 싱글톤 패턴?
let person2 = { age: 35 };
person2.age;

// 위의 person2 와 PersonType과 차이점?
// PersonType은 재선언이 가능!(객체를 만들어내는 함수!), person2는 만들면 땡! person2는 그냥 객체!
const instancePerson2 = new PersonType();
const instancePerson3 = new PersonType();
const instancePerson4 = new PersonType();
// ...

// ???
// - 생성자 함수(객체를 반환하는 함수?)는 이름 첫글자는 대문자로!
// - 인스턴스 생성 불가??

// 3. 모듈 + 사용자 정의 타입!
// 인스턴스를 효율적으로 생성을 하면서도 값을 은닉하고 싶을 때 이 패턴을 사용!

function PersonType2() {
  let age = 25;

  // 얘는 클로저를 이용한 함수
  function innerPersonType() {}

  innerPersonType.prototype.getAge = function () {
    return age;
  };

  return innerPersonType;
}

// PersonType2의 함수를 생성자 함수처럼 이용하는 것
const Person3 = PersonType2();
const person3 = new Person3();
console.log(person3.getAge());

// IIFE 패턴으로 만들어보기
// 즉시 실행함수를 이용해서 위의 const Person3 = PersonType2() 과정을 생략가능.
const PersonType4 = (function PersonType3() {
  let age = 25;

  // 얘는 클로저를 이용한 함수
  function innerPersonType() {}

  innerPersonType.prototype.getAge = function () {
    return age;
  };

  return innerPersonType;
})();
const person4 = new PersonType4();
console.log(person4.getAge());
