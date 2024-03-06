
const userInput = parseInt(prompt("Enter a positive integer:"));

if (!isNaN(userInput) && userInput >= 0) {

  for (let i = userInput; i >= 0; i--) {
    console.log(i);
  }
} else {
  console.log("Please enter a valid positive integer.");
}
