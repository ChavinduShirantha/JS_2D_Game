let roadPositionY = 0;
let moveRoadAnimationId = 0;
let score = 0;

let sound = new Audio("../assets/audio/Theme2.mp3");


function moveRoad() {
    clearInterval(moveRoadAnimationId);

    moveRoadAnimationId = setInterval(function () {
        roadPositionY = roadPositionY + 20;
        $("#moveRoad").css("background-position-y", +roadPositionY + "px");
        score++;
        $("#score").text(score);
        if (score >= 100) {
            winResults();
        }
    }, 100);
}

$(document).on('keypress', function (e) {
    if (e.keyCode === 32) {
        if (moveRoadAnimationId === 0) {
            moveRoad();
            $('#startup').attr('style', 'display : none !important');
            sound.play();
            sound.loop=true;
        }
    }
});



$('#btnSoundOff').on('click', function (e) {
    $('#btnSoundOn').attr('style', 'display : block !important');
    $('#btnSoundOff').attr('style', 'display : none !important');
    sound.muted=true;
});
$('#btnSoundOn').on('click', function (e) {
    $('#btnSoundOff').attr('style', 'display : block !important');
    $('#btnSoundOn').attr('style', 'display : none !important');
    sound.muted=false;
});

function pauseAll() {
    clearInterval(moveRoadAnimationId);
    moveRoadAnimationId = 0;
    sound.pause();
}

function blurComponents() {
    $(".background").addClass("bgBlur");
    $(".road").addClass("bgBlur");
}

function removeBlur() {
    $(".background").removeClass("bgBlur");
    $(".road").removeClass("bgBlur");
}

$('#btnPauseGame').on('click', function (e) {
    pauseAll();
    blurComponents();
});

$('#btnPlayGame').on('click', function (e) {
    moveRoad();
    sound.play();
    sound.muted=false;
    removeBlur();
});

function winResults() {
    $("#gameWin_title-img").css("display", "block");
    pauseAll();
    blurComponents();
}

let myCar = document.getElementById("car");

window.addEventListener("keydown", function (e) {
    if (e.keyCode == "39") {
        let moveRight = parseInt(window.getComputedStyle(myCar).getPropertyValue("left"))
        if (moveRight < 500) {
            myCar.style.left = (moveRight + 250) + "px"
        }
    }

    if (e.keyCode == "37") {
        let moveLeft = parseInt(window.getComputedStyle(myCar).getPropertyValue("left"))
        if (moveLeft > 0) {
            myCar.style.left = (moveLeft - 250) + "px"
        }
    }

    if (e.keyCode == "38") {
        let moveTop = parseInt(window.getComputedStyle(myCar).getPropertyValue("top"))
        if (moveTop < 600) {
            myCar.style.top = (moveTop - 10) + "px"
        }
    }

    if (e.keyCode == "40") {
        let moveBottom = parseInt(window.getComputedStyle(myCar).getPropertyValue("top"))
        if (moveBottom > 0) {
            myCar.style.top = (moveBottom + 10) + "px"
        }
    }

    if (e.keyCode == "68") {
        let moveRight = parseInt(window.getComputedStyle(myCar).getPropertyValue("left"))
        if (moveRight < 500) {
            myCar.style.left = (moveRight + 250) + "px"
        }
    }

    if (e.keyCode == "65") {
        let moveLeft = parseInt(window.getComputedStyle(myCar).getPropertyValue("left"))
        if (moveLeft > 0) {
            myCar.style.left = (moveLeft - 250) + "px"
        }
    }

    if (e.keyCode == "87") {
        let moveTop = parseInt(window.getComputedStyle(myCar).getPropertyValue("top"))
        if (moveTop < 600) {
            myCar.style.top = (moveTop - 10) + "px"
        }
    }

    if (e.keyCode == "83") {
        let moveBottom = parseInt(window.getComputedStyle(myCar).getPropertyValue("top"))
        if (moveBottom > 0) {
            myCar.style.top = (moveBottom + 10) + "px"
        }
    }
});

let enemyCar = document.getElementById("enemyCar");

enemyCar.addEventListener("animationiteration", function(){
    let random = ((Math.floor(Math.random() * 3)) * 250)
    enemyCar.style.left = random + "px";
})


let loader = document.getElementById("loader");
window.addEventListener("load", function () {
    console.log("This message will print just after fully loading the website")

    loader.style.display = 'none';
});
