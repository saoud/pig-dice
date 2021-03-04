//Business Logic
export function Player(name, score, dieValue, turnScore) {

// function Player(name) {
    this.name = name;
    this.score = 0;
    this.dieValue = 0;
    this.turnScore = 0;
}

Player.prototype.roll = function() {
    this.dieValue = Math.floor(Math.random() * 6) + 1;
    this.turnScore += this.dieValue;
}

export function GameManager() {
    this.players = {
        "player1": null,
        "player2": null
    };
    this.currentPlayerKey = "";
    this.isGameRunning = false;
}

GameManager.prototype.proccessInput = function(input) {
    if (input === "start new game") {
        this.startNewGame();
    } 
    else if (this.isGameRunning === true) {
        if (input === "roll") {
            this.players[this.currentPlayerKey].roll();
        } else if (input === "hold") {
            this.hold();
        }
        this.checkForTurnEnd();
        this.checkForVictory();
    }
}

GameManager.prototype.startNewGame = function() {
    this.isGameRunning = true;
    this.players.player1 = new Player("Player 1");
    this.players.player2 = new Player("Player 2");

    this.currentPlayerKey = "player1";
}

GameManager.prototype.changeTurn = function() {
    console.log("Changing turns!");
    this.players[this.currentPlayerKey].turnScore = 0;

    if (this.currentPlayerKey === "player1") {
        this.currentPlayerKey = "player2";
    }
    else if (this.currentPlayerKey === "player2") {
        this.currentPlayerKey = "player1";
    }
}

GameManager.prototype.checkForTurnEnd = function() {
  if (this.players[this.currentPlayerKey].dieValue === 1) {
    this.changeTurn();
  }
}

GameManager.prototype.checkForVictory = function() {
    if (this.players[this.currentPlayerKey].score >= 100) {
        this.isGameRunning = false;
    }
}

GameManager.prototype.hold = function() {
    this.players[this.currentPlayerKey].score += this.players[this.currentPlayerKey].turnScore;
    this.changeTurn();
}