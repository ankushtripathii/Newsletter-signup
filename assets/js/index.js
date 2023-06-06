const insideBox = document.querySelector(".insidebox");
const emailInput = document.getElementById("email");
const successMssg = document.querySelector(".success_mssg");
const body = document.getElementsByTagName("BODY")[0];
const subscribeButton = document.querySelector(".sub_button");
const errorMssg = document.querySelector(".err_mssg");
const emailId = document.querySelector(".mail_id");
// const outsideBox = document.querySelector(".outsidebox");

let mailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

subscribeButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (emailInput.value.match(mailRegex)) {
    emailInput.style.borderColor = "green";
    errorMssg.style.display = "none";
    insideBox.style.opacity = "0";
    successMssg.style.visibility = "visible";
    body.style.backgroundColor = "hsl(234, 29%, 20%)";
    emailId.textContent = emailInput.value;
  } else if (emailInput.value === "") {
    emailInput.style.borderColor = "red";
    errorMssg.textContent = "Email required";
    errorMssg.style.display = "block";
  } else {
    errorMssg.textContent = "Valid email required";
    errorMssg.style.display = "block";
    emailInput.style.borderColor = "red";
  }
});
