공부에 참고를 많이한 혜진님 코드.. https://dreamfulbud.github.io/HTML-CSS/P_10/

# Vending Machine

- 멋쟁이 사자처럼 프론트앤드 1기에서 진행한 프로젝트를 개인적으로 정리해보았습니다.

## 1. 목표와 기능

### 1.1 목표

    자판기 기능을 하는 웹페이지 구현해보기

<br>

### 1.2 기능

1.  데이터의 분리

    - [ ] 판매할 음료에 대한 데이터는 따로 분리되어 있어야 합니다. (혹은 API로 받아야 합니다.)

2.  잔액 부족 기능

    - [ ] 돈의 입금과 음료의 선택 시점은 자유롭지만 돈이 모자라면 음료가 나와서는 안됩니다.
    - [ ] 입금을 누르면 잔액으로 금액 올라 갑니다.

3.  거스름돈 기능

    - [ ] 거스름돈 반환을 누르면 소지금에 잔액 금액이 더해집니다.
    - [ ] 이후 잔액은 0원이 됩니다.

4.  상품 추가

    - [ ] 버튼을 누르면 상품이 1개씩 추가됩니다. (일반적인 자판기와 동일)
    - [ ] 중복 클릭이 가능합니다.
    - [ ] 한 개라도 클릭된 상품은 border로 강조표시로 나타나게 됩니다.
    - [ ] 선택한 수량이 잔여 수량보다 많을 경우 빨간 테두리나 경고창으로 추가적인 선택을 방지합니다.
    - [ ] 돈이 부족하면 예산 부족을 알려주는 창

<br>

## 2. 개발 환경 및 개발 언어

### 2.1 개발 환경

- VS Code 1.62.2 ver

### 2.2 개발 언어

- HTML, CSS, JS

<br>

## 3. 역할 분담

전담: 이우성

<br>

## 5. 프로젝트 진행 과정

1.  레이아웃 구성하기

<br>

## 6. 개발 중 마주한 이슈 & 해결 사항

<br>

> CSS

### 1. flex zoom 이슈

- 멘토님께 여쭤보기

- zoom 이슈를 피하자니.. flex-wrap 이슈..

- flex-wrap 이슈는 max-width로 해결(좀 더 자세히 기재해보기)

### 2. grid 반응형 문제

- 음료 부분 grid와 control 부분 grid의 grid-template-columns, grid-template-rows을 따로 짰는데 미디어 쿼리 적용시 불편 함을 겪었다.

- 같은 페이지에 비슷하게 적용되는 grid라면 양식을 맞춰서 작성하는 것이 좋다.(2번 일할 것을 한 번으로 줄일 수 있다.)

<br>

## 7. 프로젝트를 통해 알게 된 팁 + 학습 내용

### 1. Em, Rem 사용

- https://velog.io/@leewooseong/REM-EM

### 2. gap 사용 법

- https://developer.mozilla.org/ko/docs/Learn/HTML/Howto/Use_data_attributes

- https://developer.mozilla.org/ko/docs/Web/CSS/gap

### 3. js를 고려한 html tag 작성

- data- attribute 속성을 사용하여 js를 통해 데이터를 더 편하게 뿌릴 수 있다.

- js 로직 처리를 어떻게 할 지에 따라서도 html 마크업을 신경써야 한다. ex) 1,000원

### 4. module화 작업 적용

- 비슷하게 사용되는 HTML과 CSS를 모듈화하여 관리
- module.html, module.css 참고
  \- example \-
  획득한 음료의 tag style을 선택한 음료 tag style에 유사하게 적용

### 5. grid 개념 정리 및 활용

1.  container에 적용되는 css, item에 적용되는 css로 나누어서 개념 학습 및 적용

2.

## 8. 추가 기능

- JS 추가 구현 예정
