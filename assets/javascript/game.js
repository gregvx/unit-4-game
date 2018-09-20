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
var gamePlayStarted = false;
var wins= 0;
var losses = 0;
var wallet = 0;
var target = 0;
var gemValues = [0,0,0,0];
//this main function gets called when user clicks on a gem. a paramater x is passed in corresponding to
//the index of the gem clicked.
function gemClicked(x) {
    if (gamePlayStarted === false) {
        gamePlayStarted = true;
        startRound();
    }
    else {
        pickGem(x);
    }
}

function startRound() {
    setGemValues();
    setTarget();
    
    //update display to show target
    $('#goalDisplay').html(target);
    //initialize wallet
    wallet = 0;
    //update display to show wallet
    $('#currentDisplay').html(wallet);
    setTimeout(startRoundDialog, 500);
}

//notify user round has begun
function startRoundDialog() {
    alert("You have started a new game. Try to collect exactly " + target + " points.");
}


function pickGem(x) {
    wallet = wallet + gemValues[x];
    // console.log("Wallet now has " + wallet);
    //update display to show wallet
    $('#currentDisplay').html(wallet);
    // alert("sub called. Gem clicked is worth " + gemValues[x] + " points.");
    if (wallet === target) {
        setTimeout(winRound,500);
    }
    else if (wallet > target) {
        setTimeout(loseRound,500);
    }
}

function winRound() {
    wins++;
    alert("You won!");
    // update display to show score
    $('#score').html("<p>Wins: " + wins + " Losses: " + losses + "</p>");
    startRound();

}

function loseRound() {
    losses++;
    alert("you lost. Better luck next time...");
    
    // update display to show more
    $('#score').html("<p>Wins: " + wins + " Losses: " + losses + "</p>");
    startRound();
}

function setGemValues() {
    //figure out new gem values between 1 and 12
    gemValues = [];
    for(var i=0; i<4; i++) {
        var originalValueFound = false;
        while (originalValueFound === false) {
            var newValue = Math.floor(Math.random() * 12) + 1;
            // console.log("generated a rand value of: " + newValue);
            if (!gemValues.includes(newValue)) {
                //note the !
                gemValues.push(newValue);
                // console.log("the array is now: " + gemValues);
                originalValueFound = true;
            }
        }
    }
}

function setTarget() {
    //figure out new target between 19 and 120;
    target = Math.floor(Math.random()*102)+19;
    //consider: how could I code this to ensure the number is sum of some
    //or all the values in the array gemValues?
    
}