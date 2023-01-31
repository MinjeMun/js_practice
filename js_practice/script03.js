// 객체 배열 활용 연습문제
// 아래 배열에서 수학, 영어 점수의 총합이 140 이상인 사람만 남기는 코드를 작성하세요. (filter 활용)
// let students = [
//     {id: 1, name: 'Kim', score: {math: 50, english: 70}},
//     {id: 2, name: 'Park', score: {math: 80, english: 60}},
//     {id: 3, name: 'Lee', score: {math: 70, english: 50}},
// ]

// let result = students.filter(
//     item => item.score.math + item.score.english >= 140
// );
// console.log(result)

// 아래 배열에서 모든 점수의 총합을 구하는 코드를 작성해주세요. (reduce 활용)
// let students = [
//     {id: 1, name: 'Kim', score: {math: 50, english: 70, science: 60}},
//     {id: 2, name: 'Kim', score: {math: 80, english: 60, science: 100}},
//     {id: 3, name: 'Lee', score: {math: 70, english: 50, science: 40}},
// ]

// let sum = students.reduce((sum, current) => sum + current.score.math + current.score.english + current.score.science, 0);
// console.log(sum);

// reduce 안 reduce를 사용하는 해결 방법
// let sum = students.reduce((sum, current) => {
//     return sum + Object.values(current.score).reduce((sum, current) => sum + count ,0)
// })


// 아래 배열에서 모든 사람들의 이름을 Park 으로 바꾸는 코드를 작성해주세요. 
// (map 활용, spread 연산자 활용)
// let students = [
//     {id: 1, name: 'Kim', score: {math: 50, english: 70}},
//     {id: 2, name: 'Kim', score: {math: 80, english: 60}},
//     {id: 3, name: 'Lee', score: {math: 70, english: 50}},
// ]

// let student = students.map(item => {
//     return {name: item.name = 'Park', ...item}
// });
// console.log(student);

// 아래 배열에서 이름이 Kim 인 사람들을 찾고, score 에 science: 100, history: 100 을 추가해주세요. 
// (filter, map 활용, spread 연산자 활용)

// let students = [
//     {id: 1, name: 'Kim', score: {math: 50, english: 70, korean: 30, physics: 60}},
//     {id: 2, name: 'Kim', score: {math: 80, english: 60, korean: 40, physics: 40}},
//     {id: 3, name: 'Lee', score: {math: 70, english: 50, korean: 50, physics: 80}},
// ]

// let student = students.filter(item => item.name === 'Kim');

// let result = student.map(item => {
//     return {...item, score: {...item.score, science: 100, history:100}}
// });

// console.log(result);

// 객체 배열 연습문제 2
// 아래 배열에서, 학생 별로 score 객체 안에 sum: (점수 총합) 을 추가하는 코드를 작성하세요.
// (map, spread 연산자, 비구조할당 활용)
// let students = [
//     {id: 1, name: 'Kim', score: {math: 50, english: 70}},
//     {id: 2, name: 'Park', score: {math: 80, english: 60}},
//     {id: 3, name: 'Lee', score: {math: 70, english: 50}},
// ]

// let student = students.map((item) => {
//     const {math, english} = item.score;
//     return {...item, score: {...item.score, sum: math + english }}
// });

// console.log(student);

// 학생 수에 관계없이 아래와 같은 배열이 들어왔을 때 모든 점수의 총합을 구하는 함수를 작성하세요. 
// (reduce, 비구조할당, spread, rest 연산자 활용)
// // ************
// let students = [
//     {id: 1, name: 'Kim', score: {math: 50, english: 70}},
//     {id: 2, name: 'Park', score: {math: 80, english: 60}},
//     {id: 3, name: 'Lee', score: {math: 70, english: 50}},
//     {id: 4, name: 'Choi', score: {math: 70, english: 50}},
// ]

// let sum = (...student) => {
//     return student.reduce((sum, current) => {
//         const {math, english} = current.score;
//         return sum + math + english
//     }, 0)
// }
// let result = sum(...students)
// console.log(result);
// // ************

// 프로퍼티 연습 문제

// let employee = {
//     clockIn: function() {
//         alert('출근');
//     },
//     clockOut: function() {
//         alert('퇴근');
//     }
// }
// let kim = {
//     name:'Kim',
//     age: 20,
//     __proto__: employee
// }
// function Worker(name, age) {
//     this.name = name;
//     this.age = age;
//     this.__proto__ = employee;
// }
// let a = new Worker('문민제', 23);
// console.log(a);

// 

class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    clockIn() {
        alert('출근');
    }
    clockOut() {
        alert('퇴근');
    }
}

class Producer extends Employee {
    produce() {
        alert('기획');
    }
}

class Developer extends Employee {
    develop() {
        alert('개발');
    }
}

let man = new Producer('문민제', 23);
let devman = new Developer('문민제', 24)