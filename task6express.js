let express = require("express");
let app = express();
let port = 8000;

const data = [
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

app.get("/", (req, res) => {
  res.json({
    data: data,
  });
});

app.get("/country", (req, res) => {
  const groupedByCountry = data.reduce((acc, curr) => {
    const country = curr.winner.country;
    if (!acc[country]) {
      acc[country] = [];
    }
    acc[country].push(curr);
    return acc;
  }, {});

  res.json({
    data: groupedByCountry,
  });
});

app.get("/name", (req, res) => {
  const groupedByName = data.reduce((acc, curr) => {
    const fullName = `${curr.winner.firstName} ${curr.winner.lastName}`;
    if (!acc[fullName]) {
      acc[fullName] = [];
    }
    acc[fullName].push(curr);
    return acc;
  }, {});

  res.json({
    data: groupedByName,
  });
});

app.use((req, res) => {
  res.status(400).json({
    message: "Bad Request",
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
