const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the player's jersey number: ", function (jerseyNumber) {
  jerseyNumber = parseInt(jerseyNumber);

  if (isNaN(jerseyNumber)) {
    console.log("Please enter a valid number.");
  } else {
    let position = "";

    if (jerseyNumber % 2 === 0) {
      //If even number
      position = "Target Attacker";
      if (jerseyNumber >= 50 && jerseyNumber <= 100) {
        position += " and has the right to be chosen as team captain";
      }
    } else {
      //If odd number
      if (jerseyNumber > 90) {
        position = "Playmaker";
      } else {
        position = "Defender";
      }
      // Jika nomor merupakan kelipatan 3 dan 5
      if (jerseyNumber % 3 === 0 && jerseyNumber % 5 === 0) {
        position = "Keeper";
      }
    }

    // Output posisi pemain
    console.log(
      `The player's jersey number is ${jerseyNumber}, and the position is: ${position}`
    );
  }

  // Menutup interface readline
  rl.close();
});
