//There is an Array of objects that store MotoGP event data as follows:
var motoGP = [
  {
    circuit: "Losail",
    location: "Qatar",
    winner: {
      firstName: "Andrea",
      lastName: "Dovizioso",
      country: "Italy",
    },
  },
  {
    circuit: "Autodromo",
    location: "Argentine",
    winner: {
      firstName: "Cal",
      lastName: "Crutchlow",
      country: "UK",
    },
  },
  {
    circuit: "De Jerez",
    location: "Spain",
    winner: {
      firstName: "Valentino",
      lastName: "Rossi",
      country: "Italy",
    },
  },
  {
    circuit: "Mugello",
    location: "Italy",
    winner: {
      firstName: "Andrea",
      lastName: "Dovizioso",
      country: "Italy",
    },
  },
];
//Group the data based on the Winning Country

// Function to group MotoGP data by winning country using `for` loop
let groupByWinningCountry = (events) => {
  let groupedData = {}; // Object to store grouped data
  //
  for (let i = 0; i < events.length; i++) {
    let event = events[i];
    let country = event.winner.country;
    let name = `${event.winner.firstName} ${event.winner.lastName}`;
    let winLocation = `${event.circuit}, ${event.location}`;

    // If the country doesn't exist in the object yet, initialize it
    if (!groupedData[country]) {
      groupedData[country] = {
        winningCircuits: [],
        totalWin: 0,
      };
    }

    // Add the current winner's information to the country's winningCircuits
    groupedData[country].winningCircuits.push({
      name: name,
      winLocation: winLocation,
    });

    // Increment the total wins
    groupedData[country].totalWin += 1;
  }

  return groupedData;
};

// Get the grouped data
let result = groupByWinningCountry(motoGP);

// Output
console.log(JSON.stringify(result, null, 2));
