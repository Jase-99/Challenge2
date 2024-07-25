// 1. Initializes the answers for the quiz

const color = "BLUE";
const animal = "DOG";
const number = 23;
const food = "CHEESECAKE";
const job = "WOOLWORTHS";

// 2. Initialize the rank of a player
let playerRank = 0;

/*
Prompts the user with 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
   - uses the parseInt() function to convert the user's input to a number for the number question
*/
let colorAnswered = prompt("What is my favorite color?");
let animalAnswered = prompt("What is my favorite animal?");
let numberAnswered = prompt("What is my lucky number?");
numberAnswered = parseInt(numberAnswered);
let foodAnswered = prompt("What is my favorite food?");
let jobAnswered = prompt("What is my current job?");

if (colorAnswered.toUpperCase() === color) {
	playerRank++;
}
if (animalAnswered.toUpperCase() === animal) {
	playerRank++;
}
if (numberAnswered === number) {
	playerRank++;
}
if (foodAnswered.toUpperCase() === food) {
	playerRank++;
}
if (jobAnswered.toUpperCase() === job) {
	playerRank++;
}

/*
  5. Rank player based on number of correct answers and output to the <main> element
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
if (playerRank === 5) {
	document.querySelector(
		"main"
	).innerHTML = `<h1>You've earned a <strong>Gold Crown!</strong></h1>
  <p>You have gotten a total of ${playerRank} questions correct. Great Work!</p>`;
} else if (playerRank >= 3 && playerRank < 5) {
	document.querySelector(
		"main"
	).innerHTML = `<h1>You've earned a <strong>Silver Crown!</strong></h1>
  <p>You have gotten a total of ${playerRank} questions correct.</p>`;
} else if (playerRank >= 1 && playerRank < 3) {
	document.querySelector(
		"main"
	).innerHTML = `<h1>You've earned a <strong>Bronze Crown!</strong></h1>
  <p>You have gotten a total of ${playerRank} questions correct.</p>`;
} else {
	document.querySelector(
		"main"
	).innerHTML = `<h1>You've haven't earned a crown this time.</h1>
  <p>You have gotten a total of ${playerRank} questions correct.</p>`;
}
