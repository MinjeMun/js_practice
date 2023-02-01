// 계산기는 다음과 같은 기능 명세를 가지고 있습니다.

// - 인스턴스 생성 시에 숫자 하나를 받음
// - 더하기 (숫자 하나를 매개변수로 받아서, 결과 값에 더함)
// - 빼기 (숫자 하나를 매개변수로 받아서, 결과 값에서 뺌)
// - 곱하기 (숫자 하나를 매개변수로 받아서, 결과 값에 곱함)
// - 나누기 (숫자 하나를 매개변수로 받아서, 결과 값에 나눔)
// - 연산 결과값은 protected 프로퍼티
// - 잘못 계산한 경우 뒤로가기 기능 
// (더 이상 뒤로갈 수 없을 경우 에러 throw, 
// 단, 에러가 난다고 하더라도 스크립트 작동을 중단시키지 않도록 try catch 문 활용)

class Calculator{
    history = [];
    constructor(num) {
        this.resultNumber = num;   
    }
    get resultNumber() {
        return this._resultNumber;
    }
    set resultNumber(num) {
        this._resultNumber = num;
        this.history = [...this.history, num];
    }
    
    add(calculateNum) {
        this.resultNumber += calculateNum;
    }
    sub(calculateNumber) {
        this.resultNumber += calculateNum;
    }
    mul(calculateNumber) {
        this.resultNumber += calculateNum;    
    }
    div(calculateNumber) {
        this.resultNumber += calculateNum;    
    }
    show() {
        console.log(this.history);
    }
    undo() {
        this.history.pop();
    }
}