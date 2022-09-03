let hourse1 = document.querySelector(".hourse1")
let hourse2 = document.querySelector(".hourse2")
let hourse3 = document.querySelector(".hourse3")
var gameDashboard = document.querySelector(".game-dashborad");


var hourse_1_left =0;
var hourse_2_left =0;
var hourse_3_left =0;



var _tick = setInterval(function () {
    console.log(hourse_1_left)
    hourse_1_left =hourse_1_left+ Math.floor(Math.random() * 30);
    hourse1.style.left=hourse_1_left +"px";
    if(hourse_1_left>800){
        console.log('1-ci at qalibdir')
    }

    hourse_2_left=hourse_2_left + Math.floor(Math.random() * 30);
    hourse2.style.left=hourse_2_left +"px";
    if(hourse_2_left>800){
        console.log('2-ci at qalibdir')
    }

    hourse_3_left=hourse_3_left+ Math.floor(Math.random() * 30);
    hourse3.style.left=hourse_3_left +"px";
    if(hourse_3_left>800){
        console.log('3-ci at qalibdir')
    }

    if(hourse_1_left>800 || hourse_2_left>800  || hourse_3_left>800){
        clearInterval(_tick)
    }
}, 1000)