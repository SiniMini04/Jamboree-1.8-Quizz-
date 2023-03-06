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

  h2[0].textContent = "Du hast verloren!!!";
  h3.textContent = "Leider hast du nichts gewonnen:(";
  p.textContent =
    "Das Swiss Contingent wünscht dir trotzdem noch einen schönen 1. August";
}
