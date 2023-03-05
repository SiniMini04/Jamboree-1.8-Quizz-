//Generate looser page
function loosepage() {
  console.log("loosepage");
  const form = document.getElementsByTagName("form");
  const p = document.createElement("p");
  const h2 = document.getElementsByTagName("h2");

  form[0].appendChild(p);

  h2[0].textContent = "Du hast verloren!!!";
  p.textContent = "";
}
