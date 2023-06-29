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

  const code = document.getElementById("code").value;
  const h1 = document.querySelector("h1");
  h1.innerHTML = "";

  console.log(code);

  if (code.length != 9) {
    h1.innerHTML = "Please check if the Code is entered correctly!";
  } else {
    fetch("/checkCode/" + code, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "get",
      mode: "cors",
    })
      .then((doc) => doc.text())
      .then((res) => {
        console.log(res);

        if (res === "true") {
          h1.textContent = "Code valid!";
        }
        if (res === "false") {
          h1.textContent = "Code not valid!";
        }
      });
  }
}
