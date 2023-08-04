//general variables
const lengthwincode = 6;

//Generate winpage
function winpageIST() {
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

  fetch("/writeDataToDb", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    mode: "cors",
    body: JSON.stringify({
      participant: ISTorParticipant,
      id: ISTIDorTroupNr,
      code: wincode,
    }),
  }).then((doc) => console.log(doc));

  switch (
    lang //TODO set winpage
  ) {
    case "it":
      h2[0].textContent = "Hai vinto!!!";
      h3.textContent = wincode;
      h4.textContent =
        "Fotografate il codice o scrivetelo. Potrete usarlo per ottenere un piccolo premio alla Foodhouse svizzera durante l'intero jamboree;)";
      p.textContent = "Il Contingente svizzero vi augura un felice 1° agosto";
      break;
    case "fr":
      h2[0].textContent = "Tu as gagné !!!";
      h3.textContent = wincode;
      h4.textContent =
        "Fais une capture d'écran de ce code ou note-le. Tu pourras ainsi gagner un petit prix au Foodhouse suisse pendant toute la durée du jamboree;)";
      p.textContent = "Le Swiss Contingent te souhaite encore un bon 1er août";
      break;
    default: //de
      h2[0].textContent = "Du hast gewonnen!!!";
      h3.textContent = wincode;
      h4.textContent =
        "Mach einen Screenshot von diesem Code oder notiere ihn. Damit kannst du während des ganzen Jamborees einen kleinen Preis im schweizer Foodhouse holen;)";
      p.textContent =
        "Das Swiss Contingent wünscht dir noch einen schönen 1. August";
  }
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
  let random = Math.floor(Math.random() * n);

  return randomString.slice(0, random) + "SDS" + randomString.slice(random);
}

function winpageTrupp() {
  //Generate Trupp winnerpage

  const form = document.getElementsByTagName("form");
  const p1 = document.createElement("p");
  const h2 = document.getElementsByTagName("h2");
  const p2 = document.createElement("p");
  const br = document.createElement("br");

  form[0].appendChild(p1);
  form[0].appendChild(br);
  form[0].appendChild(p2);

  let wincode = "";

  fetch("/writeDataToDb", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    mode: "cors",
    body: JSON.stringify({
      participant: ISTorParticipant,
      id: ISTIDorTroupNr,
      code: wincode,
    }),
  }).then((doc) => console.log(doc));

  switch (
    lang //TODO set winpage
  ) {
    case "it":
      h2[0].textContent = "Hai vinto!!!";
      p1.textContent =
        "Poiché non tutte le squadre possono vincere, le prime 13 riceveranno un premio. Che potrete riscattare come squadra presso la Foodhouse svizzera. I vincitori saranno annunciati il 3 agosto!";
      p2.textContent = "Il Contingente svizzero vi augura un felice 1° agosto";
      break;
    case "fr":
      h2[0].textContent = "Tu as gagné !!!";
      p1.textContent =
        "Comme toutes les équipes ne peuvent pas gagner, les 13 premières équipes recevront un prix. Celui-ci pourra être échangé en tant qu'escouade au Swiss Foodhouse. Les gagnants seront annoncés le 3 août !";
      p2.textContent = "Le Swiss Contingent te souhaite encore un bon 1er août";
      break;
    default: //de
      h2[0].textContent = "Du hast gewonnen!!!";
      p1.textContent =
        "Da nicht alle Trupps gewinnen können werden die ersten 13 Trupps eien Gewinn erhalten. Welchen ihr als Trupp im Swiss Foodhouse einlösen könnt. Die Gewinner werden am 3.August bekannt gegeben!";
      p2.textContent =
        "Das Swiss Contingent wünscht dir noch einen schönen 1. August";
  }
}
