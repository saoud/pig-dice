import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {GameManager} from './js/scripts.js';

//UI Logic
$(document).ready(function() {
    const gameManager = new GameManager();

    $("#start-new-game").click(function() {
       gameManager.proccessInput("start new game");
       updateUI(gameManager);
    })

    $("#roll").click(function() {
        gameManager.proccessInput("roll");
        updateUI(gameManager);
    })

    $("#hold").click(function() {
        gameManager.proccessInput("hold");
        updateUI(gameManager);
    })
})

function updateUI(gameManager) {
    $("#currentPlayer").text(gameManager.players[gameManager.currentPlayerKey].name);

    $("#player1 .dieValue").text(gameManager.players.player1.dieValue);
    $("#player1 .turnScore").text(gameManager.players.player1.turnScore);
    $("#player1 .score").text(gameManager.players.player1.score);

    $("#player2 .dieValue").text(gameManager.players.player2.dieValue);
    $("#player2 .turnScore").text(gameManager.players.player2.turnScore);
    $("#player2 .score").text(gameManager.players.player2.score);
}