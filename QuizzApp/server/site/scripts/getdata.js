// Get the datas from the User

const div = document.getElementById("div");
const h2 = document.createElement("h2");
const inputfield = document.createElement("input");
let ISTorParticipant;
let ISTIDorTroupNr;
let firstcheckbox = 0;

function getdata() {
  const ISTRadio = document.createElement("input");
  ISTRadio.setAttribute("type", "radio");
  ISTRadio.setAttribute("id", "ISTRadio");
  ISTRadio.setAttribute("name", "getdata");
  ISTRadio.addEventListener("click", genInput);

  const ISTLabel = document.createElement("label");

  const TroupRadio = document.createElement("input");
  TroupRadio.setAttribute("type", "radio");
  TroupRadio.setAttribute("id", "TroupRadio");
  TroupRadio.setAttribute("name", "getdata");
  TroupRadio.addEventListener("click", genInput);

  const TroupLabel = document.createElement("label");

  ISTLabel.textContent = "IST";
  switch (
    lang //TODO set winpage
  ) {
    case "it":
      TroupLabel.textContent = "Truppa";
      break;
    case "fr":
      TroupLabel.textContent = "Troupe";
      break;
    default: //de
      TroupLabel.textContent = "Trupp";
  }

  div.appendChild(ISTLabel);
  div.appendChild(ISTRadio);
  div.appendChild(TroupLabel);
  div.appendChild(TroupRadio);
  div.appendChild(document.createElement("br"));
}

function next(e) {
  if (inputfield.value) {
    e.preventDefault();
    e.target.remove();
    div.innerHTML = "";

    div.appendChild(radioboxdiv);

    ISTIDorTroupNr = inputfield.value;
    console.log(ISTorParticipant);

    // Generate the questions
    generatequestion();
  }
}

function genInput() {
  if (firstcheckbox === 0) {
    if (ISTRadio.checked) {
      switch (
        lang //TODO set winpage
      ) {
        case "it":
          h2.textContent = "Inserisci il tuo ID IST!";
          break;
        case "fr":
          h2.textContent = "Saisis ton ID IST !";
          break;
        default: //de
          h2.textContent = "Gebe deine IST ID ein!";
      }

      ISTorParticipant = "IST";
    } else if (TroupRadio.checked) {
      switch (
        lang //TODO set winpage
      ) {
        case "it":
          h2.textContent = "Inserisci il numero della tua squadra!";
          break;
        case "fr":
          h2.textContent = "Saisis ton numéro d'équipe !";
          break;
        default: //de
          h2.textContent = "Gebe deine Trupp-nummer ein!";
      }
      ISTorParticipant = "Trupp";
    }

    inputfield.setAttribute("type", "text");

    div.appendChild(h2);
    div.appendChild(inputfield);
    div.appendChild(document.createElement("br"));

    //Create Button
    const button = document.createElement("button");
    button.setAttribute("id", "submit");
    switch (lang) {
      case "it":
        buttonlabel = "A le domande";
        break;
      case "fr":
        buttonlabel = "Vers les questions";
        break;
      default: //de
        buttonlabel = "Zu den Fragen";
        break;
    }
    button.textContent = buttonlabel;
    div.appendChild(button);

    button.addEventListener("click", next);
    firstcheckbox++;
  } else {
    h2.innerHTML = "";
    if (ISTRadio.checked) {
      switch (
        lang //TODO set winpage
      ) {
        case "it":
          h2.textContent = "Inserisci il tuo ID IST!";
          break;
        case "fr":
          h2.textContent = "Saisis ton ID IST !";
          break;
        default: //de
          h2.textContent = "Gebe deine IST ID ein!";
      }

      ISTorParticipant = "IST";
    } else if (TroupRadio.checked) {
      switch (
        lang //TODO set winpage
      ) {
        case "it":
          h2.textContent = "Inserisci il numero della tua squadra!";
          break;
        case "fr":
          h2.textContent = "Saisis ton numéro d'équipe !";
          break;
        default: //de
          h2.textContent = "Gebe deine Trupp-nummer ein!";
      }
      ISTorParticipant = "Trupp";
    }
  }
}
