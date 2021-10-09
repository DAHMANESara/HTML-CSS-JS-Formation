let nbr = "";

while (nbr < 1 || nbr > 3) {
  let nbr = prompt("Donner un nbr");
  if (nbr < 1 || nbr > 3) {
    alert("reessayer");
  } else {
    alert("c le bon");
  }
}
