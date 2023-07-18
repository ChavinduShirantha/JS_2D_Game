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

let loader = document.getElementById("loader");
window.addEventListener("load", function () {
    console.log("This message will print just after fully loading the website")

    loader.style.display = 'none';
});
