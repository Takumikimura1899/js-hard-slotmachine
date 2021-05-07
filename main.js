// スタートボタンの宣言
const startBtn = document.getElementById('startTimer');
// nowTimeの宣言
const nowTime1 = document.getElementById('nowTime');
const nowTime2 = document.getElementById('nowTime2');
const nowTime3 = document.getElementById('nowTime3');
// ストップボタンの宣言
const stopBtn1 = document.getElementById('setTime1');
const stopBtn2 = document.getElementById('setTime2');
const stopBtn3 = document.getElementById('setTime3');

let count1 = 0;
let count2 = 0;
let count3 = 0;

nowTime1.textContent = count1;
nowTime2.textContent = count2;
nowTime3.textContent = count3;


startBtn.addEventListener('click', () => {
    var timer1 = setInterval(() => {
        count1 ++;
        nowTime1.textContent = count1;
        if (count1 >= 9) {
            count1 = -1;
        };
    },1000);
    var timer2 = setInterval(() => {
        count2 ++;
        nowTime2.textContent = count2;
        if (count2 >= 9) {
            count2 = -1;
        };
    },1000);
    var timer3 = setInterval(() => {
        count3 ++;
        nowTime3.textContent = count3;
        if (count3 >= 9) {
            count3 = -1;
        };
    },1000);
    startBtn.addEventListener('click', () => {
        clearInterval(timer1);
        clearInterval(timer2);
        clearInterval(timer3);
    });
});