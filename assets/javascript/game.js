
// Variables
var wins = 0;
var losses = 0;
// guess counter
var addition = 0;
// generate random number 19-120
var total = Math.floor((Math.random() * 100) + 19);
console.log("total: " + total);
// generate random number for crystals 1-12
var red = Math.floor((Math.random() * 12) + 1);
var blue = Math.floor((Math.random() * 12) + 1);
var yellow = Math.floor((Math.random() * 12) + 1);
var green = Math.floor((Math.random() * 12) + 1);

// update guesses and scores in html
 function updateAddition () {
    $('.addition').empty();
    $('.addition').html(addition);
    $('#wins').empty();
    $('#losses').empty();
}

// functions to add wins, losses, and players score

function action() {
    if (addition === total) {
        wins++;
        $('#wins').html(wins);
        $(".click").off("click");
        console.log("wins: " + wins);

    }
    else if (addition > total) {
        losses++;
        $('#losses').html(losses);
        $(".click").off("click");
        console.log("losses: " + losses);
    }
    else {
        updateAddition();
    }

}

// reset game 



$('.total').append(total);
$('.addition').append(addition);

// Click actions reference to html ids and adding to score count
$(document).ready(function() {
    $('#red').click(function() {
        addition = addition + red;
        action();
    })
    $('#blue').click(function() {
        addition = addition + blue;
        action();
    })
    $('#yellow').click(function() {
        addition = addition + yellow;
        action();
    })
    $('#green').click(function() {
        addition = addition + green;
        action();
    })
})