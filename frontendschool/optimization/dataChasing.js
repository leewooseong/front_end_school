const aespa = ["카리나", "윈터", "지젤", "닝닝"];

// case 1.원본 데이터 손상
// aespa.forEach((item, index) => {
//   aespa[index] = item + "💖";
// });

// case 2. 불변 객체로 사용하기!
const aespa2 = aespa.map((item) => {
  return item + "💖";
});

console.log(aespa);
console.log(aespa2);
