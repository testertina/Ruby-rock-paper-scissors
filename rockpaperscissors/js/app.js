
// The JavaScript needs to load onto the browser.
window.addEventListener('DOMContentLoaded', function() {
    var rock = document.getElementById("rock");
	var paper = document.getElementById("paper");
	var scissors = document.getElementById("scissors");
	var msg = document.getElementById("msg").innerHTML;
	var playerChoice = "";
	var computerChoice = ""; 
	console.log(msg);

    rock.addEventListener("click", function (event) {
	console.log("Rock works");

	document.getElementById("msg").innerHTML = "Player 1 chooses Rock!";
	playerChoice = "Rock";	
	outcomeOfGame(playerChoice, computersTurn());
	

	})

	// return playerChoice;

	

	
	paper.addEventListener("click", function (event) {
	console.log("Paper works");

	document.getElementById("msg").innerHTML = "Player 1 chooses Paper!";
	playerChoice = "Paper"; 
	outcomeOfGame(playerChoice, computersTurn());


	})
	
	// return playerChoice;

	

	
	scissors.addEventListener("click", function (event) {
	console.log("Scissors works");

	document.getElementById("msg").innerHTML = "Player 1 chooses Scissors!";
	playerChoice = "Scissors";
	outcomeOfGame(playerChoice, computersTurn());

	
	
	})

	
	// return playerChoice;

})

// Add eventlisteners to player move buttons.
// function clickEvents() {
	

// }

// The player move is stored in a variable. loop starts?

// The app generates a random computer move.
	// - Math.random, Math.floor (0, 1, or 2) 
	// - Assign a number (0, 1, 2) to each move?

	
// Message to say what the computer chose.

// The computer move is stored in a variable.

function computersTurn () {
	
	min = Math.ceil(0);
	max = Math.floor(3);
	var choice = Math.floor(Math.random() * (max - min)) + min;
 	
 	if (choice == 0) {
		computerChoice = "Rock";
		console.log(computerChoice);
		return computerChoice;
	} else if (choice == 1) {
		computerChoice = "Paper";
		console.log(computerChoice);
		return computerChoice;
	} else if (choice == 2) {
		computerChoice = "Scissors";
		console.log(computerChoice);
		return computerChoice;
	}



}

// Compare moves, see who has won, or if it's a draw.
	// - If moves are same, its a draw.
	// - If rock beats scissors.
	// - Scissors beats paper.
	// - Paper beats rock.



function outcomeOfGame (x, y) {

	var outcome = "";
	// document.getElementById("msg").innerHTML = outcome;
	
	if (y === x) {
		outcome = "It's a draw";
		console.log(outcome);

	} else if (y === "Rock" && x === "Scissors") {
		outcome = "Computer wins!";
		computerScore += 1
		console.log(computerScore);
		console.log(player1Score);
		console.log(outcome);

	} else if (y === "Rock" && x === "Paper") {
		outcome = "Player 1 wins";
		player1Score += 1
		console.log(computerScore);
		console.log(player1Score);
		console.log(outcome);

	} else if (y === "Paper" && x === "Scissors") {
		outcome = "Player 1 wins";
		player1Score += 1
		console.log(computerScore);
		console.log(player1Score);
		console.log(outcome);

	} else if (y === "Paper" && x === "Rock") {
		outcome = "Computer wins!";
		computerScore += 1
		console.log(computerScore);
		console.log(player1Score);
		console.log(outcome);
			
	} else if (y === "Scissors" && x === "Rock") {
		outcome = "Player 1 wins";
		player1Score += 1
		console.log(computerScore);
		console.log(player1Score);
		console.log(outcome);

	} else if (y === "Scissors" && x === "Paper") {
		outcome = "Computer wins!";
		computerScore += 1
		console.log(computerScore);
		console.log(player1Score);
		console.log(outcome);
			
	}
}

// Tell user the outcome of the game.

// Store the result and update the scoreboard.

// The first player to reach a score of 10 wins is the overall winner. loop ends?

// Be able to reset the game

// Can edit html and css if needed, draw means no points to either player.
// Use tic-tac-toe example to do this.
