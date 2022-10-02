let count = 4;
let clickCount = 50;
let miss = 0;


let timeStop = true;
const time = document.querySelector(".counter");
let gamestatus = false;

const start = document.querySelector(".start");
start.addEventListener("click", () => {
    gamestatus = true;
    time.style.display = "block";
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
                    timeStop = true;
                    gamestatus = false;
                    GameEnd();
                }
            } else {
                miss++;
                missCount.innerHTML = `현재 타겟 적중률은 ${100 - miss}%입니다.`;
                gameOver()
            }
        }
    })
})
box.addEventListener("click", function a() {
    if (timeStop == false) {
        miss++;
        missCount.innerHTML = `현재 타겟 적중률은 ${100 - miss}%입니다.`;
        gameOver()
    }
});


const outPage = document.querySelector(".outPage");
const redoBtn = document.querySelector(".redo")
const OUT = [
    {
        answer: "제대로 누르고있는거죠?",
    },
    {
        answer: "진짜 못하는건가요?",
    },
    {
        answer: "마우스 선은 꼽고 하는건가요?",
    },
    {
        answer: "제가 볼땐 고양이를 시켜서 테스트 하는것 같아요.",
    }
]

function gameOver() {
    if (miss >= 100) {
        missCount.innerHTML = `현재 타겟 적중률은 0%입니다.`
        outPage.classList.toggle('on');
        redoBtn.classList.toggle('on');
        timeStop = true;
        gamestatus = false;

        let random = OUT[Math.floor(Math.random() * OUT.length)];
        outPage.innerText = random.answer;
    }
}

redoBtn.addEventListener("click", () => {
    window.location.reload();
});

const end = document.querySelector(".end")

let timeScore = 0;

function GameEnd() {
    end.classList.toggle('on');
    end.innerText = ((timeScore / 2) * (50 / miss)) + "점입니다."
}

function nextClick() {
    if (count < 50) {
        doctarget[count].style.display = 'block';
    }
}

let a = 0, b = 0, c = 0;
function startBtnClick() {
    timeStop = false;
    let interval = setInterval(function () {
        if (!timeStop) {
            sec = b;
            ms = a;
            timeScore = `${sec}` + `.${ms}`;
            time.innerHTML = `${sec}:${ms}`;
            a++;
            if (a > 99) {
                b++;
                a = 0;
            }
        } else {
            clearInterval(interval);
        }
    }, 10);

};

doctarget[0].addEventListener("click", startBtnClick);


