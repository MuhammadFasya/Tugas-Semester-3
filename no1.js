const readline = require("readline");

function analyzePerson() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter the person's name: ", (name) => {
    rl.question("Enter the person's age: ", (age) => {
      rl.question("Enter the person's place of living: ", (placeToLive) => {
        rl.question("Enter the person's savings in dollars: ", (savings) => {
          age = parseInt(age);
          savings = parseInt(savings);

          if (
            age > 40 &&
            (placeToLive === "Nevada" ||
              placeToLive === "New York" ||
              placeToLive === "Havana") &&
            savings > 10000000
          ) {
            console.log(`${name} is likely a mafia member with Don.`);
          } else if (
            age >= 25 &&
            age <= 40 &&
            (placeToLive === "New Jersey" ||
              placeToLive === "Manhattan" ||
              placeToLive === "Nevada") &&
            savings >= 1000000 &&
            savings <= 2000000
          ) {
            console.log(`${name} is likely a mafia member with Underboss.`);
          } else if (
            age >= 18 &&
            age <= 24 &&
            (placeToLive === "California" ||
              placeToLive === "Detroit" ||
              placeToLive === "Boston") &&
            savings < 1000000
          ) {
            console.log(`${name} is likely a mafia member with Capo.`);
          } else {
            console.log(`${name} is not suspicious.`);
          }

          rl.close();
        });
      });
    });
  });
}

analyzePerson();
