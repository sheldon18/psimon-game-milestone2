//variables
userSequence = [];
gameSequence = [];
var id, color, level = 0;

$(document).ready(function() {
    $(".start").click(function() {
        level++;
        playSequence();
    });
});


function playSequence () {
    console.log(level);
    $(".score").text(level);
    getRandomNum();
    var p = 0;
    var myInterval = setInterval(function() {
        id = gameSequence[p];
        color = $("#"+id).attr("class").split(" ")[1];
        console.log(id+" "+color);
        addClass(id, color);
        p++;
        if(p == gameSequence.length) {
          clearInterval(myInterval);
        }
    }, 1000);
}


function getRandomNum() {
    var random = Math.floor(Math.random() * 4);
    gameSequence.push(random);
}

function addClass(id, color) {
    // body...
    $("#"+id).addClass(color+"-on");
    setTimeout(function() {
        $("#"+id).removeClass(color+"-on");
    }, 500);
}



