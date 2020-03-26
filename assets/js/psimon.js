//variables
playerSeq = [];
compSeq = [];
const NUMBER_OF_LEVELS = 20;
var id, color, level = 0;

$(document).ready(function() {
    $(".start").click(function() {
        level++;
        compSequence();
    });
    
    $(".button").click(function() {
        id= $(this).attr("id");
        color = $(this).attr("class").split(" ")[0];
        playerSeq.push(id);
        console.log(id+" "+color);
        addClass(id, color);
        
        if(!playerCorrect()) {
            displayError();
            playerSeq = [];
            
        }
        // listening part
        if(playerSeq.length == compSeq.length && playerSeq.length < NUMBER_OF_LEVELS) {
            level++;
            playerSeq = [];
            compSequence();
        }
        
        if(playerSeq.length == NUMBER_OF_LEVELS) {
            $(".score").text(":)");
        }
    });
    
    
});

//verifying player vs computer sequence
function playerCorrect() {
    for (var p = 0; p < playerSeq.length; p++) {
        if(playerSeq[p] != compSeq[p]) {
            return false;
        }
    }
    return true;
}

//game over
function displayError() {
    console.log("error");
    var counter = 0;
    var myError = setInterval(function() {
        $(".score").text(":(");
        counter++;
        if(counter == 3) {
            $(".display").text(level);
            clearInterval(myError);
            playerSeq = [];
            counter = 0;
        }
    }, 500);
}



function compSequence() {
    console.log(level);
    $(".score").text(level);
    getRandomNum();
    var p = 0;
    var myInterval = setInterval(function() {
        id = compSeq[p];
        color = $("#"+id).attr("class").split(" ")[0];
        console.log(id+" "+color);
        addClass(id, color);
        p++;
        if(p == compSeq.length) {
          clearInterval(myInterval);
        }
    }, 1000);
}


function getRandomNum() {
    var random = Math.floor(Math.random() * 4);
    compSeq.push(random);
}

function addClass(id, color) {
    // body...
    $("#"+id).addClass(color+"-on");
    setTimeout(function() {
        $("#"+id).removeClass(color+"-on");
    }, 500);
}



