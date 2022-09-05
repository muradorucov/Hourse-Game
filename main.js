let hourseFirst = document.querySelector(".hourse-one")
let hourseSecond = document.querySelector(".hourse-two")
let hourseTrhee = document.querySelector(".hourse-three")
let comment = document.querySelector(".comment span")
let startBtn = document.querySelector("#start-btn")
let resetBtn = document.querySelector("#reset-btn")
let timerDisplay = document.querySelector(".timer")


var hourseFirst_left = 0;
var hourseSecond_left = 0;
var hourseTrhee_left = 0;
var timer = 0;

startBtn.addEventListener('click', () => {
    var _tick = setInterval(function () {
        timer += 1;
        let msTimer = timer < 10 ? "0" + timer : timer
        timerDisplay.innerText = msTimer;
        console.log(hourseFirst_left)
        hourseFirst_left = hourseFirst_left + Math.floor(Math.random() * 30);
        hourseFirst.style.left = hourseFirst_left + "px";


        hourseSecond_left = hourseSecond_left + Math.floor(Math.random() * 30);
        hourseSecond.style.left = hourseSecond_left + "px";


        hourseTrhee_left = hourseTrhee_left + Math.floor(Math.random() * 30);
        hourseTrhee.style.left = hourseTrhee_left + "px";


        if (hourseFirst_left > hourseSecond_left && hourseFirst_left > hourseTrhee_left) {
            comment.innerText = "1-ci at çempionluğa doğru gedir!";
        } else if (hourseSecond_left > hourseTrhee_left && hourseSecond_left > hourseFirst_left) {
            comment.innerText = "Vəəə 2-ci at irəli keçir!";
        } else if (hourseTrhee_left > hourseSecond_left && hourseTrhee_left > hourseFirst_left) {
            comment.innerText = "3-ci at digərlərini qabaqlayır!";
        }

        if (hourseFirst_left > 920 || hourseSecond_left > 920 || hourseTrhee_left > 920) {
            clearInterval(_tick);
            if (hourseTrhee_left > 920) {
                comment.innerText = "3-cü at çempiondur!";
            } else if (hourseSecond_left > 920) {
                comment.innerText = "2-ci at çempiondur!";
            } else if (hourseFirst_left > 920) {
                comment.innerText = "1-ci at çempiondur!";
            }

        }
        resetBtn.addEventListener('click', () => {
            clearInterval(_tick);

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

