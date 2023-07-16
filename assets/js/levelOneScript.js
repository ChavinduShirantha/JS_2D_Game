let roadPositionY = 0;
let moveRoadAnimationId = 0;

function moveRoad() {
    clearInterval(moveRoadAnimationId);

    moveRoadAnimationId = setInterval(function () {
        roadPositionY = roadPositionY + 20;
        $("#moveRoad").css("background-position-y", +roadPositionY + "px");
    }, 100);
}

$(document).on('keypress', function (e) {
    if (e.keyCode === 32) {
        if (moveRoadAnimationId === 0) {
            moveRoad();
            $('#startup').attr('style', 'display : none !important');
        }
    }
});

$('#btnSoundOff').on('click', function (e) {
    $('#btnSoundOn').attr('style', 'display : block !important');
    $('#btnSoundOff').attr('style', 'display : none !important');
});
$('#btnSoundOn').on('click', function (e) {
    $('#btnSoundOff').attr('style', 'display : block !important');
    $('#btnSoundOn').attr('style', 'display : none !important');
});

function pauseAll() {
    clearInterval(moveRoadAnimationId);
    moveRoadAnimationId = 0;
}

$('#btnPauseGame').on('click', function (e) {
    pauseAll();
});

$('#btnPlayGame').on('click', function (e) {
    moveRoad();
});