console.log("hello");
for (let i = 0; i < 9; i++) {
  document.write("조혜진");
}

let name = "조혜진";
let age = 30;

console.log(`안녕하세요 저는${name}이고 나이는 ${age}입니다.`);

const animal = "tigar";
console.log(animal.substring(0, 2)); //0부터 1까지

const animals = ["호랑이", "코끼리", "기린", "토끼", "사자", "코알라"];
animals.push("개"); //배열 맨 뒤에 추가
animals.unshift("하마"); //배열 맨 앞에 추가
console.log(animals);
animals.pop(); //맨 뒤 요소 삭제
console.log(animals);
console.log(Array.isArray(animals)); // 배열인지 확인하는 함수(true false반환)
console.log(animals.indexOf("코끼리")); // index번호 찾기

//splice, slice
//splice: 배열 자체를 바꿈
//slice: 배열을 바꾸지는 않고 값만 반환
console.log(animals.splice(0, 2)); // 몇번째부터(index), 몇 개(개수)
console.log(animals);
console.log(animals.slice(0, 2)); //몇 번째부터(index), 몇 번째 "앞" 까지(index)
console.log(animals);

//객체

const monkey = {
  name: "kiki",
  age: 5,
  weight: 50,
  gender: "male",
  food: ["감자", "바나나", "오렌지"],
  home: {
    location: "zoo",
    size: "big",
    price: 3000,
  },
};
console.log(monkey);
console.log(monkey.name);

monkey.gender = "female"; //객체는 const로 선언되었지만 그 속성 값은 변환이 가능하다.

console.log(monkey.gender);
console.log(monkey.food[0]);

//json
const monkeyJSON = JSON.stringify(monkey); //stringify 메소드는 json 객체를 String 객체로 변환 "key":"value",...
console.log(monkeyJSON);
const parseJSON = JSON.parse(monkeyJSON); //parse 메소드는 string 객체를 json 객체로 변환
console.log(parseJSON);
