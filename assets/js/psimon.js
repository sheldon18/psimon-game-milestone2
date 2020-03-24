//variables
playerSequence = [];
compSequence = [];
var id, color, level = 0;

$(document).ready(function() {
    $(".start").click(function() {
        level++;
        compSequence();
    });
    
    $(".button").click(function() {
        id= $(this).attr("id");
        color = $(this).attr("class").split(" ")[0];
        addClass(id, color);
    });
    
    
});


function compSequence () {
    console.log(level);
    $(".score").text(level);
    getRandomNum();
    var p = 0;
    var myInterval = setInterval(function() {
        id = compSequence[p];
        color = $("#"+id).attr("class").split(" ")[0];
        console.log(id+" "+color);
        addClass(id, color);
        p++;
        if(p == compSequence.length) {
          clearInterval(myInterval);
          
        }
        
    }, 1000);
}


function getRandomNum() {
    var random = Math.floor(Math.random() * 4);
    compSequence.push(random);
}

function addClass(id, color) {
    // body...
    $("#"+id).addClass(color+"-on");
    setTimeout(function() {
        $("#"+id).removeClass(color+"-on");
    }, 500);
}



