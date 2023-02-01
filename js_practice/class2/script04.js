// function add() {
//     let firstNumber = Number(document.getElementById('num1').value);
//     let secondNumber = Number(document.getElementById('num2').value);
//     let add = firstNumber + secondNumber;
//     let result = document.getElementById('result');
//     result.innerText = add;
// }

// let number = 1;

// function minus() {
//     let result = document.getElementById('result');
//     if (number != 1) {
//         number -= 1;
//         return result.innerText = number;
//     } else {
//         return result.innerText = number;
//     }
// }

// function plus() {
//     let result = document.getElementById('result');
//     number += 1;
//     return result.innerText = number;
// }

// ********************************

// let flag;
// let result = document.getElementById('result');

// function london() {
//     clearInterval(flag);
//     function printTime() {
//         let now = new Date().toLocaleString('ko-KR', { timeZone: 'Europe/London' });
//         result.innerText = now;
//     }
//     printTime()
//     flag = setInterval(printTime, 1000);
// }

// function newyork() {
//     clearInterval(flag);
//     function printTime() {
//         let now = new Date().toLocaleString('ko-KR', { timeZone: 'America/New_York' });
//         result.innerText = now;
//     }
//     printTime()
//     flag = setInterval(printTime, 1000);
// }

// function seoul() {
//     clearInterval(flag);
//     function printTime() {
//         let now = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });
//         result.innerText = now;
//     }
//     printTime()
//     flag = setInterval(printTime, 1000);
// }

// ***************************************

let timer;

const TIMEZONE = {
    'london': 'Europe/London',
    'newyork': 'America/New_York',
    'seoul': 'Asia/Seoul'
}

function setTimeByCountry(country) {
    let now = new Date().toLocaleString('ko-KR', { timeZone: TIMEZONE[country] });
    let result = document.getElementById('result');
    result.innerText = now;
}

function setTime(event) {
    clearInterval(timer);
    setTimeByCountry(event.target.id);
    timer = setInterval(setTimeByCountry, 1000, event.target.id);
}