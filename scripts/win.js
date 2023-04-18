//general variables
const lengthwincode = 6;

//Generate winpage
function winpage() {
  console.log("winpage");
  const form = document.getElementsByTagName("form");
  const h2 = document.getElementsByTagName("h2");
  const h3 = document.createElement("h3");
  const h4 = document.createElement("h4");
  const p = document.createElement("p");
  const br = document.createElement("br");

  form[0].appendChild(h3);
  form[0].appendChild(h4);
  form[0].appendChild(br);
  form[0].appendChild(p);

  const wincode = generatewincode(lengthwincode);

  fetch("http://127.0.0.1:3001/writeToDb", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    mode: "cors",
    body: JSON.stringify({ code: wincode }),
  }).then((doc) => console.log(doc));

  h2[0].textContent = "Du hast gewonnen!!!";
  h3.textContent = wincode;
  h4.textContent =
    "Mach einen Screenshot von diesem Code oder notiere ihn. Damit kannst du während des ganzen Jamborees einen kleinen Preis im schweizer Delegationszelt holen;)";
  p.textContent =
    "Das Swiss Contingent wünscht dir noch einen schönen 1. August";
}

//Generate wincode
function generatewincode(n) {
  let randomString = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (let i = 0; i < n; i++) {
    randomString += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return randomString;
}
