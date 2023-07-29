const button = document.getElementById("send");

button.addEventListener("click", checkcode);

function checkcode(event) {
  event.target.disabled = true;
  setTimeout(
    (button) => {
      button.disabled = false;
    },
    3000,
    event.target
  );

  const StudID = document.getElementById("studId").value;
  const code = document.getElementById("code").value;
  const h1 = document.querySelector("h1");
  h1.innerHTML = "";

  console.log(StudID);
  console.log(code);

  if (code.length != 9) {
    h1.innerHTML = "Please check if the Code is entered correctly!";
  } else {
    fetch("/checkCode/" + code + "/" + StudID, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "get",
      mode: "cors",
    })
      .then((doc) => doc.text())
      .then((response) => {
        console.log(response);

        if (response === "0") {
          h1.textContent = "Code valid!";
        } else if (response === "1") {
          h1.textContent = "Code not valid!";
        } else if (response === "2") {
          h1.textContent = "Participant already got his prize!";
        } else {
          h1.textContent = "Unknown response: " + response;
        }
      });
  }
}
