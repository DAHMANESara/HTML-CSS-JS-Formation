//Definir votre mail
let EmailInsc = prompt("veuillez definir votre mail");
//DEFINITION DU MOT DE PASSE
let MotDePasseInsc = prompt("veuillez definir un mot de passe");

let Email = "";
let MotDePasse = "";

while (Email != EmailInsc || MotDePasse != MotDePasseInsc) {
  let Email = prompt("Veuillez Rentrer votre mail");

  let MotDePasse = prompt("veuillez rentrer votre mot de passe");

  if (EmailInsc === Email && MotDePasseInsc === MotDePasse) {
    alert("Bienvenu dans votre espace client");
  } else {
    alert("Identifiants incorrect ");
  }
}
