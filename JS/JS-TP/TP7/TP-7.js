let nbr = "";

while (nbr < 10 || nbr > 20) {
  let nbr = prompt("Donner un nbr");
  if (nbr <= 10) {
    alert("trop petit");
  } else if (nbr >= 20) {
    alert("trop grand");
  }
}
