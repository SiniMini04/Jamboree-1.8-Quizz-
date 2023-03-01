//General variables
let points = 0;

//Check if answer is right
async function getanswerdata(question) {
  question--;
  await fetch("../questions.json")
    .then((response) => response.json())
    .then((data) => {
      checkanswer(data, question);
    })
    .catch((error) => console.log(error));
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
