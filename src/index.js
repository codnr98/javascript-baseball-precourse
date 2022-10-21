export default class BaseballGame {
  constructor() {
    // 해당 클래스의 인스턴스 객체를 생성해주고 초기화하는 특별한 메서드
    this.gameStart();
  }
  randomNumDiff(arr, value) {
    let result;
    if (arr.indexOf(value) === -1) {
      result = false;
    } else {
      result = true;
    }
    console.log(result);

    return result;
  }

  randomNumGenerator() {
    let randomNum = "";
    while (randomNum.length < 3) {
      // while ()의 값이 true라면 {}를 반복한다.
      let cur = MissionUtils.Random.pickNumberInRange(1, 9);
      if (randomNum.length > 1 && this.randomNumDiff(randomNum, cur)) {
        //두번째 반복부터 중복 값이 나오면 그 값은 지워라
        console.log("randomNum: " + randomNum);
        console.log("currentNum: " + cur);
        randomNum.slice(0, -1);
      } else {
        randomNum += cur;
      }
    }
    return randomNum;
  }
  gameStart() {
    let computerInputNumbers = this.randomNumGenerator();
    console.log(computerInputNumbers);
  }
}
new BaseballGame();
