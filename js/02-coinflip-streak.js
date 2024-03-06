
let coinFlip;
let consecutiveHeads = 0;

do {
 
  coinFlip = Math.floor(Math.random() * 2);
  if (coinFlip === 0) {
    console.log("Heads");
    consecutiveHeads++;
  } else {
    console.log("Tails");
    break;
  }
} while (true); 
console.log(`Streak of ${consecutiveHeads} consecutive Heads!`);
