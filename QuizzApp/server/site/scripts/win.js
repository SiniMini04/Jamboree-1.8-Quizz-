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

  fetch("/writeToDb", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    mode: "cors",
    body: JSON.stringify({ code: wincode }),
  }).then((doc) => console.log(doc));


  switch (lang){ //TODO set winpage
    case "it":
      h2[0].textContent = "Hai vinto!!!";
      h3.textContent = wincode;
      h4.textContent = "Prendete uno screenshot di questo codice o scrivetelo. Potrete usarlo per ottenere un piccolo premio nella tenda della delegazione svizzera durante l'intero Jamboree;)";
      p.textContent = "Il Contingente svizzero vi augura un felice 1° agosto";
      break
    case "fr":
      h2[0].textContent = "Tu as gagné !!!";
      h3.textContent = wincode;
      h4.textContent = "Fais une capture d'écran de ce code ou note-le. Avec cela, tu peux aller chercher un petit prix dans la tente de la délégation suisse pendant toute la durée du jamboree ;)";
      p.textContent = "Le Swiss Contingent te souhaite encore un bon 1er août";
      break
    case "en":
      h2[0].textContent = "You win!!!";
      h3.textContent = wincode;
      h4.textContent = "Take a screenshot of this code or write it down. You can use it to get a small prize in the Swiss delegation tent during the whole Jamboree;)";
      p.textContent = "The Swiss Contingent wishes you a happy 1st August";
      break
    default: //de
      h2[0].textContent = "Du hast gewonnen!!!";
      h3.textContent = wincode;
      h4.textContent = "Mach einen Screenshot von diesem Code oder notiere ihn. Damit kannst du während des ganzen Jamborees einen kleinen Preis im schweizer Delegationszelt holen;)";
      p.textContent = "Das Swiss Contingent wünscht dir noch einen schönen 1. August";
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
  let random = Math.floor(Math.random() * n)

  return randomString.slice(0, random) + "SDS" + randomString.slice(random);
}
