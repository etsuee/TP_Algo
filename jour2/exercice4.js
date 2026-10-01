const prompt = require("prompt-sync")();

let pwd = prompt("Saisir un mot de passe : ");

function validerMotDePasse(pwd) {
  let contientMajuscule = false;
  let contientMinuscule = false;
  let contientChiffre = false;

  for (l of pwd) {
    if (l >= "A" && l <= "Z") {
      contientMajuscule = true;
    } else if (l >= "a" && l <= "z") {
      contientMinuscule = true;
    } else if (l >= "0" && l <= "9") {
      contientChiffre = true;
    }
  }

  const assezDeCaracteres = pwd.length >= 8;
  const pwdValide =
    assezDeCaracteres &&
    contientMajuscule &&
    contientMinuscule &&
    contientChiffre;

  const check = (ok) => (ok ? "v" : "x");

  console.log("Mot de passe : ", pwd);
  console.log(check(assezDeCaracteres), "Au moins 8 caracteres");
  console.log(check(contientMajuscule), "Au moins une majuscule");
  console.log(check(contientMinuscule), "Au moins une minuscule");
  console.log(check(contientChiffre), "Au moins un chiffre");
  console.log("============");

  return pwdValide;
}

validerMotDePasse(pwd);
validerMotDePasse("Bonjour1");
validerMotDePasse("abc");
validerMotDePasse("ABCDEFGH");
validerMotDePasse("12345678");
validerMotDePasse("aB1");
validerMotDePasse("");
