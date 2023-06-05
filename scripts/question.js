//General variables
let points = 0;
let lang = "de"

//Check if answer is right
async function getanswerdata(question) {
  question--;
  await fetch(url())
    .then((response) => response.json())
    .then((data) => {
      checkanswer(data, question);
    })
    .catch((error) => console.log(error));
}

function changeLang(sprache){
  lang = sprache
  question = 0;
  radioboxdiv.innerHTML = "";
  document.getElementById('nextBTN').remove()
  generatequestion()
  console.log(lang)
}
function url(){
  switch (lang){
    case "it":
      return "../questions.json" //TODO set jsons
    case "fr":
      return "../questions.json"
    case "en":
      return "../questions.json"
    default: //de
      return "../questions.json"
  }
}

//Check Radioboxes if checked matches with right answer
function checkanswer(data, question) {
  const rightanswer = data[question].right;
  let answers = [];

  for (let i = 1; i <= data[question].answer.length; i++) {
    let answer = "answer" + i;
    let checkbox = document.getElementById(answer);
    answers.push(checkbox.checked);
  }

  if (answers[rightanswer - 1]) {
    points++;
  }
}
