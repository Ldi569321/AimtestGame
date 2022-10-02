let count = 4;
let clickCount = 50;
let miss = -1;

let gamestatus = false;

const start = document.querySelector(".start");
start.addEventListener("click", () => {
    gamestatus = true;
    start.style.display = "none";
    for (i = 0; i < 50; i++) {
        doctarget[i].style.top = `${Math.floor(Math.random() * 101)}%`;
        doctarget[i].style.left = `${Math.floor(Math.random() * 101)}%`;
    }
    for (i = 0; i < 5; i++) {
        doctarget[i].style.display = `block`;
    }
});

const box = document.querySelector(".box")
const doctarget = document.querySelectorAll(".target");
const missCount = document.querySelector(".missCount");
doctarget.forEach((doctarget) => {
    doctarget.addEventListener("click", () => {
        if (gamestatus == true) {
            if (doctarget.value == clickCount) {
                doctarget.style.display = "none";
                clickCount--;
                count++;
                miss--;
                nextClick();
                missCount.innerHTML = `현재 타겟 적중률은 ${100 - miss}%입니다.`;
                if (count == 54) {
                    timetStop = true;
                }
            } else {
                miss++;
                missCount.innerHTML = `현재 타겟 적중률은 ${100 - miss}%입니다.`;
            }
        }
    })
})
box.addEventListener("click", function a() {
    if (gamestatus == true) {
    miss++;;
    missCount.innerHTML = `현재 타겟 적중률은 ${100 - miss}%입니다.`;
    }
});


function nextClick() {
    if (count < 50) {
        doctarget[count].style.display = 'block';
    }
}

let a = 0, b = 0, c = 0;
let timetStop = false;

function startBtnClick() {
    timetStop = false;
    let interval = setInterval(function () {
        if (!timetStop) {
            min = c;
            sec = b;
            ms = a;

            document.querySelector(".counter").innerHTML = `${min}:${sec}:${ms}`;
            a++;
            if (a > 99) {
                b++;
                a = 0;
            } else if (b > 59) {
                c++;
                b = 0;
            }
        } else {
            clearInterval(interval);
        }
    }, 10);

};

doctarget[0].addEventListener("click", startBtnClick);