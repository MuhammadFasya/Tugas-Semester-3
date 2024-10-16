//There is an object that stores student grade data as shown below:
let studentScore = [
  {
    name: "Andi",
    score: 90,
  },
  {
    name: "Rudi",
    score: 80,
  },
  {
    name: "Dira",
    score: 100,
  },
];
//Display the output results in the form of the name and score of the largest student!
// Find the maximum score
let bScore = 0;
let who = "";
for (let i = 0; i < studentScore.length; i++) {
  if (studentScore[i]["score"] > bScore);
  bScore = studentScore[i]["score"];
  who = studentScore[i]["name"];
}
console.log(`Biggest score is ${who} with the score of ${bScore}`);
