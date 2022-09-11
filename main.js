let hourseFirst = document.querySelector(".hourse-one")
let hourseSecond = document.querySelector(".hourse-two")
let hourseTrhee = document.querySelector(".hourse-three")
let comment = document.querySelector(".comment span")
let startBtn = document.querySelector("#start-btn")
let resetBtn = document.querySelector("#reset-btn")
let timerDisplay = document.querySelector(".timer")
let audioPlay = document.querySelector(".audio audio")


var hourseFirst_left = 0;
var hourseSecond_left = 0;
var hourseTrhee_left = 0;
var timer = 0;

startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    resetBtn.disabled = false;
    var _tick = setInterval(function () {
        audioPlay.play()
        timer += 1;
        let msTimer = timer < 10 ? "0" + timer : timer
        timerDisplay.innerText = msTimer;


        hourseFirst_left = hourseFirst_left + Math.floor(Math.random() * 50);
        hourseFirst.style.left = hourseFirst_left + "px";


        hourseSecond_left = hourseSecond_left + Math.floor(Math.random() * 50);
        hourseSecond.style.left = hourseSecond_left + "px";


        hourseTrhee_left = hourseTrhee_left + Math.floor(Math.random() * 50);
        hourseTrhee.style.left = hourseTrhee_left + "px";


        if (hourseFirst_left > hourseSecond_left && hourseFirst_left > hourseTrhee_left) {
            comment.innerText = "Son 400'lüğe gelirken Gülbatur birinci !";
        } else if (hourseSecond_left > hourseTrhee_left && hourseSecond_left > hourseFirst_left) {
            comment.innerText = "Şahbatur birinci geliyor!";
        } else if (hourseTrhee_left > hourseSecond_left && hourseTrhee_left > hourseFirst_left) {
            comment.innerText = "Şahbatur sondan geliyo!";
        }

        if (hourseFirst_left > 930 || hourseSecond_left > 930 || hourseTrhee_left > 930) {
            clearInterval(_tick);
            if (hourseTrhee_left > 930) {
                comment.innerText = "3-cü at çempiondur!";
            } else if (hourseSecond_left > 930) {
                comment.innerText = "2-ci at çempiondur!";
            } else if (hourseFirst_left > 930) {
                comment.innerText = "1-ci at çempiondur!";
            }

        }
        resetBtn.addEventListener('click', () => {
            startBtn.disabled = false;
            resetBtn.disabled = true;

            clearInterval(_tick);

            audioPlay.currentTime = 0
            audioPlay.pause()

            hourseFirst_left = 0;
            hourseSecond_left = 0;
            hourseTrhee_left = 0;
            hourseFirst.style.left = 0;
            hourseSecond.style.left = 0;
            hourseTrhee.style.left = 0;
            timer = 0;

            comment.innerText = "Yarış başlayır!";
            timerDisplay.innerText = "00";
        })

    }, 600)
})

