//variables
playerSeq = [];
compSeq = [];
const NUMBER_OF_LEVELS = 20;
var id, color, level = 0;
var playSwitch = false;
var playSwitch2 = true;
var strict = false;
var error = false;

$(document).ready(function() {
    $(".switch").click(function() {    
        playSwitch = (playSwitch == false) ? true : false;
        console.log(playSwitch);
        if(playSwitch) {
          $(".inner-switch").addClass("inner-off");
          $(".switch").addClass("outer-on");
          $(".score").text("00")
        }
        else {
          $(".inner-switch").removeClass("inner-off");
          $(".switch").removeClass("outer-on");
          $(".score").text("--");
          $(".score").text(" ");
        }    
    });
    
    $(".switch").click(function() {    
        playSwitch2 = (playSwitch2 == true) ? true : false;
        if(playSwitch) {
          $(".inner-switch").removeClass("inner-off");
          $(".switch").removeClass("outer-on");
          $(".score").text("--");
        }
        else {
          $(".inner-switch").addClass("inner-off");
          $(".switch").addClass("outer-on");
          $(".score").text("00")
        }    
    });
  
    $(".start").click(function() {
        $(".inner-switch").addClass("inner-off");
        $(".switch").addClass("outer-on");
        $(".score").text("00")
        console.log(playSwitch);
        strict = false;
        level = 0;
        level++;
        compSeq = [];
        playerSeq = [];
        compSequence();
    });
    
    

    
    $(".button").click(function() {
        id= $(this).attr("id");
        color = $(this).attr("class").split(" ")[0];
        playerSequence();
        
    });
    
    $(".strict").click(function() {
        $(".inner-switch").addClass("inner-off");
        $(".switch").addClass("outer-on");
        $(".score").text("00")
        strict = true;  
        level = 0;
        level++;
        compSeq = []
        playerSeq = [];
        compSequence();
  });
    
    
});






// player sequence
function playerSequence() {
        playerSeq.push(id);
        console.log(id+" "+color);
        addClass(id, color);
        
        if(!playerCorrect()) {
            if (strict) {
                console.log("strict");
                compSeq = [];
                level = 1;
            }
            displayError();
            playerSeq = [];
            compSequence();
        }



        else if(playerSeq.length == compSeq.length && playerSeq.length < NUMBER_OF_LEVELS) {
            level++;
            playerSeq = [];
            compSequence();
        }
        
        if(playerSeq.length == NUMBER_OF_LEVELS) {
            $(".score").text(":)");
        }

}



//computer sequence
function compSequence() {
    console.log(level);
    $(".score").text(level);
    if (!error) {
        getRandomNum();
    }
    if (error && strict) {
        getRandomNum();
    }  
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
            $(".score").text(level);
            clearInterval(myError);
            playerSeq = [];
            counter = 0;
        }
    },  500);
}



//error and strict variables and function code taken from codepen solutions