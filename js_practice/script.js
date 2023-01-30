// 조건문 연습문제 1 //
// let score = Number(prompt('점수를 입력하시오', ''));

// if (score >= 95) {
//     alert('A');
// } else if (score >= 90) {
//     alert('B');
// } else if (score >= 85) {
//     alert('C');
// } else {
//     alert('F');
// }

// 조건문 연습문제 2 //
// let num1 = Number(prompt('숫자1', ''));
// let num2 = Number(prompt('숫자2', ''));

// if ((num1 % 2 === 1) && (num2 % 2 === 1)) {
//     alert('홀수');
// } else if ((num1 % 2 === 0) && (num2 % 2 === 0)) {
//     alert('짝수');
// } else {
//     alert('공통점 없음');
// }

// 반복문 연습문제 1 //
// for (let i = 1; i <=100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// 반복문 연습문제 2 //
// let stat;

// while (stat != '그만') {
//     stat = prompt('상태 입력', '');
// }

// 함수 연습문제 1 //
// function showMsg(num) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(num * i);
//     }
// }

// 함수 연습문제 2 //
// let total = 0;
// function returnMsg(num) {
//     for (let i = 1; i <= 10; i++) {
//         total += num * i;
//     }
//     return total;
// }

// 함수 연습문제 3 //
// function checkAge(name, age) {
//     let check;
//     if (age > 19) {
//         check = '성인';
//     } else {
//         check = '미성년자';
//     }
//     alert(`${name}님은 ${check}입니다.`);
// }

// 실습문제 1 // 
let computer = ['가위','바위','보']
let randomNumber = Math.floor(Math.random() * 2);
let computerChoose = computer[randomNumber];

alert(`컴퓨터는 ${computerChoose}를 냈습니다.`);
user = prompt('가위, 바위, 보 중에 하나 선택', '');


if (user === '가위') {
    if (computerChoose === '바위') {
        alert('유저: 패, 컴퓨터: 승');
    } else if (computerChoose == '가위') {
        alert('무승부')
    } else if (computerChoose == '보') {
        alert('유저: 승, 컴퓨터: 패');
    } else {
        alert('올바른 값이 입력되지 않음');
    }
} else if (user === '바위') {
    if (computerChoose === '보') {
        alert('유저: 패, 컴퓨터: 승');
    } else if (computerChoose == '바위') {
        alert('무승부')
    } else if (computerChoose == '가위') {
        alert('유저: 승, 컴퓨터: 패');
    } else {
        alert('올바른 값이 입력되지 않음');
    }
} else if (user === '보') {
    if (computerChoose === '가위') {
        alert('유저: 패, 컴퓨터: 승');
    } else if (computerChoose == '보') {
        alert('무승부')
    } else if (computerChoose == '바위') {
        alert('유저: 승, 컴퓨터: 패');
    } else {
        alert('올바른 값이 입력되지 않음');
    }
}


// 실습문제 2 //
// 1~100 사이 중 랜덤 생성
let generateNumber = Math.floor(Math.random() * 99+1);
let guessNumber = 0;

while (generateNumber !== guessNumber) {
    guessNumber = Number(prompt('숫자 입력'));
    if (guessNumber < generateNumber) {
        alert('업');
    } else if (guessNumber > generateNumber) {
        alert('다운');
    } else {
       alert('정답입니다');
       break; 
    }
}

// 실습문제 3 //. 
// 1~ 3 사이의 숫자 랜덤 

let count = 0

while(count <= 31) {
    if (count !== 0) {
        alert(`현재 ${count}까지 했습니다. `)
    }
    // random(0~1) * 10 => 0~10 % 3 => 0~2 + 1 => 1~3 사이 숫자
    let computer = Math.floor(Math.random() * 10) % 3 + 1;
    count += computer ;
    alert(`컴퓨터가 ${count}까지 했습니다. `)
    if (count == 31) {
        alert('유저가 승리했습니다.')
        break;
    } else {
        let user = prompt('1~3개의 숫자를 입력하시오(공백으로 구분)', '').split(' ');
        count += user.length;
        if (count == 31) {
            alert('컴퓨터가 승리했습니다.')
            break;
        }
    }
}


