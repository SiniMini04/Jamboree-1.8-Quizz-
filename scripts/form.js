//Create Variables for Language change
let buttonlabel = "Nächste Frage";

//Create general variables
let question = 0;
const winpercentage = 0.9;

//Create Environment for Questions
const form = document.getElementsByTagName("form");
const h = document.createElement("h2");
const radioboxdiv = document.createElement("div");
radioboxdiv.setAttribute("id", "radioboxdiv");

form[0].insertBefore(h, document.getElementById("div"));
document.getElementById("div").appendChild(radioboxdiv);

// Call first Function
generatequestion();

//Functions to get Datas from .json file
function generatequestion() {
  fetch(url())
    .then((response) => response.json())
    .then((data) => {
      makeQuestion(data);
    })
    .catch((error) => console.log(error));
}

//function to create questions
function makeQuestion(data) {
  if (data[question].question === "END") {
    console.log("Ende");

    const pointstowin = (data.length - 1) * winpercentage;


    if (points >= pointstowin) {
      winpage();
    } else {
      loosepage();
    }
  } else {
    h.textContent = data[question].question;

    const content1 = data[question].answer[0];
    const content2 = data[question].answer[1];
    const content3 = data[question].answer[2];
    const content4 = data[question].answer[3];

    if (data[question].answer.length === 5) {
      const content5 = data[question].answer[4];
      fiveanswers(content1, content2, content3, content4, content5);
    } else if (data[question].answer.length === 4) {
      fouranswers(content1, content2, content3, content4);
    }
    //Create Button
    const button = document.createElement("button");
    button.setAttribute('id', 'nextBTN')
    switch (lang){
      case "it":
        buttonlabel = "Prossima domanda"
        break
      case "fr":
        buttonlabel = "Question suivante"
        break
      case "en":
        buttonlabel = "Next question"
        break
      default: //de
        buttonlabel = "Nächste Frage"
        break
    }
    button.textContent = buttonlabel;
    form[0].appendChild(button);

//When button clicked
    button.addEventListener("click", nextquestion);

    question++;
  }
}

function nextquestion(e) {
  e.preventDefault();
  e.target.remove()
  getanswerdata(question).finally(() => {
    radioboxdiv.innerHTML = "";
    generatequestion();
  });
}

//Creates 4 Radioboxes for answers
function fouranswers(content1, content2, content3, content4) {
  const radio1 = document.createElement("input");
  radio1.setAttribute("type", "radio");
  radio1.setAttribute("id", "answer1");
  radio1.setAttribute("name", "response");
  radio1.setAttribute("checked", true)

  const radio2 = document.createElement("input");
  radio2.setAttribute("type", "radio");
  radio2.setAttribute("id", "answer2");
  radio2.setAttribute("name", "response");

  const radio3 = document.createElement("input");
  radio3.setAttribute("type", "radio");
  radio3.setAttribute("id", "answer3");
  radio3.setAttribute("name", "response");

  const radio4 = document.createElement("input");
  radio4.setAttribute("type", "radio");
  radio4.setAttribute("id", "answer4");
  radio4.setAttribute("name", "response");

  const lable1 = document.createElement("label");
  lable1.setAttribute("for", "answer1");

  const lable2 = document.createElement("label");
  lable2.setAttribute("for", "answer2");

  const lable3 = document.createElement("label");
  lable3.setAttribute("for", "answer3");

  const lable4 = document.createElement("label");
  lable4.setAttribute("for", "answer4");

  radioboxdiv.appendChild(radio1);
  radioboxdiv.appendChild(lable1);
  radioboxdiv.appendChild(document.createElement("br"));
  radioboxdiv.appendChild(radio2);
  radioboxdiv.appendChild(lable2);
  radioboxdiv.appendChild(document.createElement("br"));
  radioboxdiv.appendChild(radio3);
  radioboxdiv.appendChild(lable3);
  radioboxdiv.appendChild(document.createElement("br"));
  radioboxdiv.appendChild(radio4);
  radioboxdiv.appendChild(lable4);
  radioboxdiv.appendChild(document.createElement("br"));

  lable1.innerHTML = content1;
  lable2.textContent = content2;
  lable3.textContent = content3;
  lable4.textContent = content4;
}

//Creates 5 Radioboxes for answers
function fiveanswers(content1, content2, content3, content4, content5) {
  fouranswers(content1, content2, content3, content4);

  const radio5 = document.createElement("input");
  radio5.setAttribute("type", "radio");
  radio5.setAttribute("id", "answer5");
  radio5.setAttribute("name", "response");

  const lable5 = document.createElement("label");
  lable5.setAttribute("for", "answer5");

  if (question === 0) {
    radioboxdiv.appendChild(radio5);
    radioboxdiv.appendChild(lable5);
    radioboxdiv.appendChild(document.createElement("br"));
  }

  lable5.textContent = content5;
}
