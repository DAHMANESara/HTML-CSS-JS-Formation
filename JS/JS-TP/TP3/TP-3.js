const TonAge = prompt("saisir votre age : ");

if (TonAge >= 7 && TonAge <= 9) {
  alert("poussin");
} else if (TonAge >= 10 && TonAge <= 11) {
  alert("pupille");
} else if (TonAge >= 12 && TonAge <= 13) {
  alert("benjamin");
} else if (TonAge >= 14 && TonAge <= 15) {
  alert("Minime");
} else if (TonAge >= 16 && TonAge <= 17) {
  alert("Cadet");
} else {
  alert("Cette personne ne rentre dans aucune categorie");
}
