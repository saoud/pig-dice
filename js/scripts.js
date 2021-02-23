//Business Logic
function Player(name) {
    this.name = name;
    this.score = 0;
    this.dieValue = 0;
}

Player.prototype.roll = function() {
    this.dieValue = Math.floor(Math.random() * 6) + 1;
    this.score += this.dieValue;
}

function GameManager() {
    this.currentPlayer;
    this.otherPlayer;
    this.isGameRunning = true;
}

GameManager.prototype.proccessInput = function(input) {
    if (input === "start new game") {
        this.startNewGame();
    } 
    
    if (this.isGameRunning === true) {
        if (input === "roll") {
            this.currentPlayer.roll();
        } else if (input === "hold") {
            this.currentPlayer.hold();
        }
        checkForTurnEnd();
        checkForVictory();
    }
}

GameManager.prototype.startNewGame = function() {
    this.isGameRunning = true;
    let player1 = Player("Player 1");
    let player2 = Player("Player 2");

    this.currentPlayer = player1;
    this.otherPlayer = player2;
}

GameManager.prototype.changeTurn = function() {
    let newCurrentPlayer = this.otherPlayer;
    this.otherPlayer = this.currentPlayer;
    this.currentPlayer = newCurrentPlayer;
}

GameManager.prototype.checkForTurnEnd = function() {
  if (this.currentPlayer.dieValue === 1) {
    this.changeTurn();
  }
}

GameManager.prototype.checkForVictory = function() {
    if (this.score >= 100) {
        this.isGameRunning = false;
    }
}

GameManager.prototype.hold = function() {
    this.changeTurn();
}




//UI Logic
$(document).ready(function() {
    gameManager = new GameManager();

    $("#start-new-game").click(function(event) {
       console.log("Start new game");
       gameManager.proccessInput("start new game");
    })

    $("#roll").click(function(event) {
        console.log("Roll");
        gameManager.proccessInput("roll");
    })

    $("#hold").click(function(event) {
        console.log("Hold");
        gameManager.proccessInput("hold");
    })
})