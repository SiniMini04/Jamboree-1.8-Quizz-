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

function checkanswer(data, question) {
  const rightanswer = data[question].right;
  let answers = [];

  let radiobutton = document.querySelectorAll("input");
  console.log(radiobutton.length);

  /*for (let i = 1; i <= data[question].answer.length; i++) {
    let checkbox = document.getElementById("answer1");
    console.log(checkbox);
    answers.push(checkbox.checked);
    console.log(answers[i - 1]);
  }*/
}
