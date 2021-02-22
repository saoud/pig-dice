# Pig Dice Game
#### 
#### Project initiated: 
#### By Saoud Rana and Shanen Cross
## Project Description
Write a program where two users can play Pig dice against each other.
Players take turns to roll a single die as many times as they wish, adding all roll results to a running total, but losing their gained score for the turn if they roll a 1.


## Specs
 
```
Test: If 1 is rolled, points are forfit and goes to next players turn
Expect: if the result of a die roll is 1, current player score becomes 0 and it becomes the other user's turn

Describe: GameManager.prototype.checkForVictory()
Test: Check for victory
Expect: If score >= 100.toEqual(You have won)

Describe: GameManager.prototype.changeTurn()
Test: Should change the current turn to the other player
Expect: If it is player 1's turn, it should become player 2's turn

Describe: GameManager.prototype.changeTurn()
Test: Should change the current turn to the other player
Expect: If it is player 2's turn, it should become player 1's turn

Describe: Player.prototype.hold()
Test: Player can hold in order to switch turns without losing score
Expect: If it is player 1's turn, it becomes player 2's turn without changing the scores

Describe: Player.prototype.hold()
Test: Player can hold in order to switch turns without losing score
Expect: If it is player 2's turn, it becomes player 1's turn without changing the scores

Describe: Player.prototype.rollDie()
Test: Player can roll six-sided die, resulting in a random result
Expect: If player rolls, the result randomly ranges from 1 to 6

Describe: Player.prototype.startNewGame()
Test: Reset all scores and turn order for new game
Expect: If new game starts, Player 1 and Player 2 scores become 0 and current player becomes Player 1
 
```
 
## Technologies Used
* Javascript
* JQuery
* HTML
* CSS

## Set up / Installation requirements
* Open up a terminal and clone the repo 
* Navigate to the folder containing the files from the repo and type `code . `
* You can also use [LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
 
## Known Bugs
* No known bugs

## Notes

## License
* [MIT](https://github.com/saoud/pig-dice/blob/main/LICENSE)
* Copyright 2021 Saoud Rana and Shanen Cross
## Contact
Saoud Rana githubissues@saoud.dev
Shanen Cross shanencross@yahoo.com
