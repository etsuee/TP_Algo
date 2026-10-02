const prompt = require("prompt-sync")();

n = parseInt(prompt("Saisir un nombre : "));

for (let i = 1; i <= n; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}

for (let i = 1; i <= n; i++) {
  let resultat = "";

  if (i % 3 === 0) resultat += "Fizz";
  if (i % 5 === 0) resultat += "Buzz";
  if (i % 7 === 0) resultat += "Wazz";

  console.log(resultat || i);
}
