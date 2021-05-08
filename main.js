// スタートボタンの宣言
const startBtn = document.getElementById("startTimer");
// nowTimeの宣言
const nowTime1 = document.getElementById("nowTime");
const nowTime2 = document.getElementById("nowTime2");
const nowTime3 = document.getElementById("nowTime3");
const nowTime4 = document.getElementById("nowTime4");
const nowTime5 = document.getElementById("nowTime5");
const nowTime6 = document.getElementById("nowTime6");
const nowTime7 = document.getElementById("nowTime7");
const nowTime8 = document.getElementById("nowTime8");
const nowTime9 = document.getElementById("nowTime9");

// ストップボタンの宣言
const stopBtn1 = document.getElementById("setTime1");
const stopBtn2 = document.getElementById("setTime2");
const stopBtn3 = document.getElementById("setTime3");

// ストップボタンのdisabled属性をfalse(押せる状態に)無くても動く
// stopBtn1.disabled = false;
// stopBtn2.disabled = false;
// stopBtn3.disabled = false;

// nowTimeのテキスト用のcountを宣言
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 9;
let count5 = 9;
let count6 = 9;
let count7 = 1;
let count8 = 1;
let count9 = 1;

// スロットのカウントが進む処理timerを宣言
let timer1 = 0;
let timer2 = 0;
let timer3 = 0;

// ３つの数字が止まったかを確認するためのstopCounterを宣言
let stopCounter1;
let stopCounter2;
let stopCounter3;
// let stopCounter = stopCounter1 + stopCounter2 + stopCounter3;

// 最初の表示を０にしておくだけ
nowTime1.textContent = count1;
nowTime2.textContent = count2;
nowTime3.textContent = count3;
nowTime4.textContent = count4;
nowTime5.textContent = count5;
nowTime6.textContent = count6;
nowTime7.textContent = count7;
nowTime8.textContent = count8;
nowTime9.textContent = count9;

// スタートボタンを押した時に発動するための関数(アローで書いて問題なしのはず)
let func = function () {
  // ストップボタンのdisabled属性をfalse(押せる状態に)
  stopBtn1.disabled = false;
  stopBtn2.disabled = false;
  stopBtn3.disabled = false;

  // ３つの数字が止まったかを確認するためのstopCounterの数字を０に
  stopCounter = 0;
  stopCounter1 = 0;
  stopCounter2 = 0;
  stopCounter3 = 0;

  // timer(スロットの数字のカウントが進む処理)
  clearInterval(timer1);
  clearInterval(timer2);
  clearInterval(timer3);

  // timer(スロットの数字のカウントが進む処理)
  timer1 = setInterval(() => {
    if (count1 > 9) {
      count1 = 0;
    }
    if (count4 > 9) {
      count4 = 0;
    }
    if (count7 > 9) {
      count7 = 0;
    }
    nowTime1.textContent = count1;
    nowTime4.textContent = count4;
    nowTime7.textContent = count7;
    count1++;
    count4++;
    count7++;
  }, 500);

  timer2 = setInterval(() => {
    if (count2 > 9) {
      count2 = 0;
    }
    if (count5 > 9) {
      count5 = 0;
    }
    if (count8 > 9) {
      count8 = 0;
    }
    nowTime2.textContent = count2;
    nowTime5.textContent = count5;
    nowTime8.textContent = count8;
    count2++;
    count5++;
    count8++;
  }, 500);

  timer3 = setInterval(() => {
    if (count3 > 9) {
      count3 = 0;
    }
    if (count6 > 9) {
      count6 = 0;
    }
    if (count9 > 9) {
      count9 = 0;
    }
    nowTime3.textContent = count3;
    nowTime6.textContent = count6;
    nowTime9.textContent = count9;
    count3++;
    count6++;
    count9++;
  }, 500);
};
// ここまでが関数の処理func

// ストップボタン１を押した時の処理
stopBtn1.addEventListener("click", () => {
  // カウントを止める
  clearInterval(timer1);
  // ボタンを押せなくする
  stopBtn1.disabled = true;
  // 止まったか確認するためのカウンターを１に
  stopCounter1 = 1;
  // ストップカウンターを計算
  stopCounter = stopCounter1 + stopCounter2 + stopCounter3;
  console.log(stopCounter);

  // ストップカウンターが３の時に判別
  if (stopCounter === 3) {
    if (count1 === count2 && count2 === count3) {
      alert("おめでとう");
    } else {
      alert("ぶっぶー");
    }
  }
});
// { once: true});を使うと処理が１回のみになるがこれは使用しない。

// ストップボタン２の処理
stopBtn2.addEventListener("click", () => {
  clearInterval(timer2);
  stopBtn2.disabled = true;

  stopCounter2 = 1;

  stopCounter = stopCounter1 + stopCounter2 + stopCounter3;
  console.log(stopCounter);

  if (stopCounter === 3) {
    if (count1 === count2 && count2 === count3) {
      alert("おめでとう");
    } else {
      alert("ぶっぶー");
    }
  }
});
//  { once: true});

// ストップボタン３の処理
stopBtn3.addEventListener("click", () => {
  clearInterval(timer3);
  stopBtn3.disabled = true;

  stopCounter3 = 1;

  stopCounter = stopCounter1 + stopCounter2 + stopCounter3;
  console.log(stopCounter);

  if (stopCounter === 3) {
    if (count1 === count2 && count2 === count3) {
      alert("おめでとう");
    } else {
      alert("ぶっぶー");
    }
  }
});

// startBtn.removeEventListener("click", func);
// スタートボタンを押した時に関数func起動
startBtn.addEventListener("click", func);
