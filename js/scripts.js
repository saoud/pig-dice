//Business Logic
function Player(name) {
    this.name = name;
    this.score = 0;
    this.dieValue = 0;
}

Player.prototype.rollDie = function() {

}

Player.prototype.hold = function() {
}

function GameManager() {
    this.currentPlayer;
    this.isGameRunning = true;
}

GameManager.prototype.startNewGame = function() {
    this.isGameRunning = true;
    let player1 = Player("Player 1");
    let player2 = Player("Player 2");

    this.currentPlayer = player1;
    this.runGameLoop();
}

GameManager.prototype.runGameLoop = function() {
    while (this.isGameRunning === true) {
        playerInput = this.checkForInput();
    }
}

GameManager.prototype.changeTurn = function() {
    
}

GameManager.prototype.checkForVictory = function() {
    while (this.score < 100) {
        
    }
}





//UI Logic
$(document).ready(function() {
    
})