const form = document.getElementsByTagName("form");
const h = document.createElement("h2");
const radioboxdiv = document.createElement("div");

form[0].appendChild(h);

q1(form, h, radioboxdiv);

function q1(form, h) {
  const content1 = "Der Schwur vom Rütli";
  const content2 = "Der Bundesrat wurde gegründet";
  const content3 = "Wilhelm Tell schoss den Apfel vom Kopf seines Sohnes";
  const content4 = "Bern wurde zur Landeshauptstadt gewählt";

  h.textContent = "Was geschah der Legende nach am 1. August 1291?";
  form[0].appendChild(radioboxdiv);

  fouranswers(radioboxdiv, content1, content2, content3, content4);
}

function fouranswers(radioboxdiv, content1, content2, content3, content4) {
  const radio1 = document.createElement("input");
  radio1.setAttribute("type", "radio");
  radio1.setAttribute("id", "answer1");
  radio1.setAttribute("name", "response");

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

  lable1.textContent(content1);
  lable2.textContent(content2);
  lable3.textContent(content3);
  lable4.textContent(content4);
}

function fiveanswers(
  radioboxdiv,
  content1,
  content2,
  content3,
  content4,
  content5
) {
  fouranswers(radioboxdiv, content1, content2, content3, content4);
  const radio5 = document.createElement("input");
  radio5.setAttribute("type", "radio");
  radio5.setAttribute("id", "answer5");
  radio5.setAttribute("name", "response");

  const lable5 = document.createElement("label");
  lable5.setAttribute("for", "answer5");

  radioboxdiv.appendChild(radio5);
  radioboxdiv.appendChild(lable5);
  radioboxdiv.appendChild(document.createElement("br"));

  lable5.textContent(content5);
}
