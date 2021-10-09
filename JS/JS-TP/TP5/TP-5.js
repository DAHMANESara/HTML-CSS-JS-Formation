//Definir votre mail et mot de passe d'inscription
let EmailInsc = prompt("veuillez definir votre mail");
let MotDePasseInsc = prompt("veuillez definir un mot de passe");
let nbreDeConnexion = 0;
//entrer le mail et mot de passe pour se sonnecter
let Email = "";
let MotDePasse = "";
//Tant que le mdp et mail est faux reesseyer de se connecter
while (
  Email != EmailInsc ||
  (MotDePasse != MotDePasseInsc && NbreDeConnexion < 5)
) {
  nbreDeConnexion++;
  let Email = prompt("Veuillez Rentrer votre mail");
  let MotDePasse = prompt("veuillez rentrer votre mot de passe");

  if (EmailInsc === Email && MotDePasseInsc === MotDePasse) {
    alert("Bienvenu dans votre espace client");
  } else {
    alert("Identifiants incorrect ");
  }
  if (nbreDeConnexion == 5) {
    alert("votre compte est bloqué");
  }
}
