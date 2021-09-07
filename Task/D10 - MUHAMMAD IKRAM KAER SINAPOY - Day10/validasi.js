// function validasi() {
//   var fullname = document.getElementById("fullname").value;
//   var email = document.getElementById("email").value;
//   var phone = document.getElementById("phone").value;

//   if (fullname != "" && email != "" && phone != "") {
//     return true;
//   } else {
//     alert("Anda harus mengisi data dengan lengkap !");
//   }
// }
const form = document.getElementById("form");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const fullnameValue = fullname.value.trim();
  const emailValue = email.value.trim();
  const phonenumberValue = phonenumber.value.trim();

  if (fullnameValue === "") {
    setErrorFor(fullname, "Full name cannot be empty");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.qureyselector("small");

  small.innerText = message;

  formControl.className = "valid error";
}
