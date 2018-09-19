//event handlers
$('#crystal1').click(function() {
    gemClicked(0);
});
$('#crystal2').click(function() {
    gemClicked(1);
});
$('#crystal3').click(function() {
    gemClicked(2);
});
$('#crystal4').click(function() {
    gemClicked(3);
});

//global variables
var gameStarted = false;
var wins= 0;
var losses = 0;
var wallet = 0;
var target = 0;
var gemValues = [0,0,0,0];
//this main function gets called when user clicks on a gem. a paramater x is passed in corresponding to
//the index of the gem clicked.
function gemClicked(x) {
    if (gameStarted === false) {
        startGame();
    }
    else {
        pickGem(x);
    }
}

function startGame() {
    //TODO figure out new gem values
    gemValues = [1,12,3,30];
    //TODO figure out new taget;
    target = 12;
    //update display to show target
    $('#goalDisplay').html(target);
    wallet = 0;
    //update display to show wallet
    $('#currentDispaly').html(wallet);
    gameStarted = true;
    alert("You have started a new game. Try to collect exactly " + target + " points.");
}

function pickGem(x) {
    wallet = wallet + gemValues[x];
    // console.log("Wallet now has " + wallet);
    //update display to show wallet
    $('#currentDisplay').html(wallet);
    // alert("sub called. Gem clicked is worth " + gemValues[x] + " points.");
    if (wallet === target) {
        winRound();
    }
    else if (wallet > target) {
        loseRound();
    }
}

function winRound() {
    wins++;
    alert("You won!");
    // update display to show score
    $('#score').html("<p>Wins: " + wins + " Losses: " + losses + "</p>");
    startGame();

}

function loseRound() {
    losses++;
    alert("you lost. Better luck next time...");
    // update display to show more
    $('#score').html("<p>Wins: " + wins + " Losses: " + losses + "</p>");
    startGame();
}