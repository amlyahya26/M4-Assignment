
let coinFlip;

const numberOfFlips = parseInt(prompt("Enter the number of coin flips:"));

if (!isNaN(numberOfFlips) && numberOfFlips > 0) {
  for (let i = 0; i < numberOfFlips; i++) {
    const coinFlip = Math.floor(Math.random() * 2); // 0 or 1

    if (coinFlip === 0) {
      console.log("Heads");
    } else {
      console.log("Tails");
    }
  }
} else {
  console.log("Please enter a valid positive integer.");
}
