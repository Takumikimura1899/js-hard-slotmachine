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

stopBtn1.disabled = false;
stopBtn2.disabled = false;
stopBtn3.disabled = false;


let count1 = 0;
let count2 = 0;
let count3 = 0;

let stopCounter1;
let stopCounter2;
let stopCounter3;


nowTime1.textContent = count1;
nowTime2.textContent = count2;
nowTime3.textContent = count3;


startBtn.addEventListener('click', () => {

    stopBtn1.disabled = false;
    stopBtn2.disabled = false;
    stopBtn3.disabled = false;
    stopCounter1 = 0;
    stopCounter2 = 0;
    stopCounter3 = 0;
    
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

    // ストップボタン１の処理
    stopBtn1.addEventListener('click', () => {
        clearInterval(timer1);
        stopBtn1.disabled = true;
        stopCounter1 = 1;
        stopCounter = (stopCounter1 + stopCounter2 + stopCounter3);
        console.log(stopCounter);
    });
    // ストップボタン２の処理
    stopBtn2.addEventListener('click', () => {
        clearInterval(timer2);
        stopBtn2.disabled = true;
        stopCounter2 = 1;
        stopCounter = (stopCounter1 + stopCounter2 + stopCounter3);
        console.log(stopCounter);
    });
    // ストップボタン３の処理
    stopBtn3.addEventListener('click', () => {
        clearInterval(timer3);
        stopBtn3.disabled = true;
        stopCounter3 = 1;
        stopCounter = (stopCounter1 + stopCounter2 + stopCounter3);
        console.log(stopCounter);
        if (stopCounter === 3){
            if(count1 === count2 || count2 === count3 ) {
                alert("おめでとう");
            };
        };
    });

});
