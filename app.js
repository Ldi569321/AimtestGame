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
                if (count == 54) {
                    miss++;
                    timeStop = true;
                    gamestatus = false;
                    GameEnd();
                }
            } else if (timeStop == false) {
                miss = miss + 0.5;
                missCount.innerHTML = `현재 타겟 적중률은 ${((50 / (50 + miss)) * 100).toFixed(2)}%입니다.`;
                gameOver()
            }
            missCount.innerHTML = `현재 타겟 적중률은 ${((50 / (50 + miss)) * 100).toFixed(2)}%입니다.`;
        }
    })
})
box.addEventListener("click", function a() {
    if (timeStop == false) {
        miss++;
        missCount.innerHTML = `현재 타겟 적중률은 ${((50 / (50 + miss)) * 100).toFixed(2)}%입니다.`;
        gameOver()
    }
});


const outPage = document.querySelector(".outPage");
const redoBtn = document.querySelector(".redo")
const scoreOUT = [
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

const timeOUT = [
    {
        answer: "잠은 침대에서 자는 거에요.",
    },
    {
        answer: "타임아웃!",
    },
    {
        answer: "제대로 눈뜨고 해볼래요?",
    },
    {
        answer: "여기 100초 넘기는 사람이 있어요!",
    }
]

function gameOver() {
    if (miss >= 150) {
        missCount.innerHTML = `아웃!`
        outPage.classList.toggle('on');
        redoBtn.classList.toggle('on');
        timeStop = true;
        gamestatus = false;

        let random = scoreOUT[Math.floor(Math.random() * scoreOUT.length)];
        outPage.innerText = random.answer;
    }
}

redoBtn.addEventListener("click", () => {
    window.location.reload();
});

const end = document.querySelector(".end")

let timeScore = 0;
const redo2 = document.querySelector(".redo2");

function GameEnd() {
    redo2.classList.toggle('on');
    end.classList.toggle('on');
    end.innerText = ((timeScore / 4) * ((50 / (50 + miss)) * 100).toFixed(2)).toFixed(2) + "점입니다.";
}

redo2.addEventListener("click", () => {
    window.location.reload();
});

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
            if (sec >= 100) {
                timeStop = true;
                gamestatus = false;
                outPage.classList.toggle('on');
                redoBtn.classList.toggle('on');
                let random = timeOUT[Math.floor(Math.random() * timeOUT.length)];
                outPage.innerText = random.answer;
            }

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


