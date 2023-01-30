// 함수 연습 문제 1
// 화살표 함수 형태
// let caculator = (type, a, b) => {
//     if (type === 'sum') {
//         return a + b
//     } else if (type === 'subtract') {
//         return a + b
//     } else {
//         alert('올바른 타입을 명사해주세요.')
//     }
// };

// 객체 사용 연습 1
// const user = {
//     name: 'Kim',
//     age: 20
// }
// alert ("age" in user)

// for (let key in user) {
//     alert(key);
//     alery(user[key]);
// }

// Object.keys(user); // ['name','age']
// Object.values(user); // ['Kim',20]
// Object.entries(user); // [['name','kim], ['age',20]]
// Object.hasOwn(user, 'name'); // trues 

// 객체의 복사 (얕은 복사, 깊은 복사)
// let user1 = {
//     name: 'Kim',
//     age: 20
// };

// 얕은 복사
// let user2 = user1;
// console.log(user2); // {name: 'Kim'}
// user1.name = '유저1 수정'; 
// console.log(user2); // {name: '유저 1 수정'}

// 깊은 복사
// let user2 = Object.assign({}, user1) // assign(추가할 곳, 가져올 곳) => 깊은 복사

// 메서드와 this 연습 //
// 1번 유형 
// let user = {
// 	name: 'Kim',
// 	age: 20,
// 	sayHi: function() { // 메서드
// 		let name = 'park';
// 		alert(`나는 ${this.name}이야. 잘부탁해`);
// 	} // this.name => this는 . 앞에 있는 객체를 의미함
// };
// user.sayHi(); // 나는 Kim이야. 잘부탁해

// 2번 유형
// let user = {
// 	name: 'Kim',
// 	age: 20
// };

// function sayHi() {
// 	alert(`나는 ${this.name}이야. 잘부탁해`);
// }

// user.sayHi = sayHi;
// user.sayHi(); // 나는 Kim이야. 잘부탁해

// 화살표를 사용할 경우 this로 내부 프로퍼티를 불러오지 못함


// 객체 연습문제 1
// let scores = {
//     Kim: 50,
//     Park: 70,
//     Lee: 80
// }

// let total = 0;
// for (let key in scores) {
//     total += scores[key];
// }
// alert(total);

// 객체 연습문제 2
// let player = {
//     hp: 80,
//     mp: 50,
//     heal: function() {
//         this.mp -= 10;
//         this.hp += 10;
//         alert(`hp:${this.hp}, mp:${this.mp}`);
//     }
// }


// 배열 사용 연습
// let fruits = ['사과','배','바나나'];
// fruits[0] = '복숭아';
// // index를 벗어나는 경우 해당 index에 값을 넣고 나머지는 빈 공간으로 채움
// console.log(fruits)


// // find (특정 조건을 통해 요소 '하나' 찾기)
// let users = [
//     {id: 1, name: "Kim"},
//     {id: 2, name: "Lee"},
//     {id: 3, name: "Park"}
//   ];

// let result = users.find(element => element.id  === 1);
// // 배열 내부 요소를 반복하여 접근하며,
// // 조건을 만족하는 요소를 찾는 순간 반복을 중단하고 해당 요소를 return

// console.log(result); // {id: 1, name: "Kim"}


// 배열 연습문제 1
// 아래 객체에서, 영어 점수의 총합을 계산하는 코드를 작성하세요. (reduce 활용)
// let scores = {
//     Kim: {math: 50, english: 70},
//     Park: {math: 70, english: 60},
//     Lee: {math: 80, english: 50}
// }
// let scoreArr = Object.values(scores);
// console.log(scoreArr);

// let result = scoreArr.reduce((sum, current) => sum + current.english, 0);
// console.log(result);
// // => 안 쓰는 방법
// let result = scoreArr.reduce(function(prevReturn, currentElement) {
//     return prevReturn + currentElement.english
// }, 0) // 0은 초기값 지정하는 역할
// // prevReturn -> 0, currentElement -> {math: 50, english: 70}
// // prevReturn -> 70, currentElement -> {math: 70, english: 60}
// // prevReturn -> 70+60, currentElement -> {math: 80, english: 50}
// // prevReturn -> 70+60++50

// 배열 연습문제 2
// 아래 배열에서, 수학 점수가 60점 이상인 사람들만 남기는 코드를 작성하세요. (filter 활용)
// let students = [
//     {id: 1, name: 'Kim', score: {math: 50, english: 70}},
//     {id: 2, name: 'Park', score: {math: 80, english: 60}},
//     {id: 3, name: 'Lee', score: {math: 70, english: 50}},
// ]

// let result = students.filter((student) => student.score.math >= 60);
// console.log(result);

// 배열 연습문제 3
// 아래 배열에서, 학생 별로 sum: (점수 총합) 을 추가하는 코드를 작성하세요. (map 활용)
let students = [
    {id: 1, name: 'Kim', score: {math: 50, english: 70}},
    {id: 2, name: 'Park', score: {math: 80, english: 60}},
    {id: 3, name: 'Lee', score: {math: 70, english: 50}},
]

let result = students.map(element => ({
    id: element.id, 
    name: element.name,
    score: element.score,
    sum: (element.score.math + element.score.english)
}));

console.log(result);