//Generate looser page
function loosepage() {
  console.log("loosepage");
  const form = document.getElementsByTagName("form");
  const h3 = document.createElement("h3");
  const h2 = document.getElementsByTagName("h2");
  const p = document.createElement("p");
  const br = document.createElement("br");

  form[0].appendChild(h3);
  form[0].appendChild(br);
  form[0].appendChild(p);

  switch (lang){ //TODO set loose page
    case "it":
      h2[0].textContent = "Hai perso!!!";
      h3.textContent = "Purtroppo non hai vinto nulla:(";
      p.textContent = "Il Contingente svizzero vi augura comunque un buon 1° agosto.";
      break
    case "fr":
      h2[0].textContent = "Tu as perdu !!!";
      h3.textContent = "Malheureusement, tu n'as rien gagné :(";
      p.textContent = "Le Swiss Contingent te souhaite tout de même un bon 1er août.";
      break
    case "en":
      h2[0].textContent = "You lost!!!";
      h3.textContent = "Unfortunately you did not win anything:(";
      p.textContent = "The Swiss Contingent nevertheless wishes you a happy 1 August";
      break
    default: //de
      h2[0].textContent = "Du hast verloren!!!";
      h3.textContent = "Leider hast du nichts gewonnen:(";
      p.textContent = "Das Swiss Contingent wünscht dir trotzdem noch einen schönen 1. August";
  }
}
