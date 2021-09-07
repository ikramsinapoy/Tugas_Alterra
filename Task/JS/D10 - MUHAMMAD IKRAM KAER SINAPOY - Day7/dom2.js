function validasi() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirmpassword = document.getElementById("confirmpassword").value;
  var email = document.getElementById("email").value;
  var confirmemail = document.getElementById("confirmemail").value;
  if (
    username != "" &&
    password != "" &&
    confirmpassword != "" &&
    email != "" &&
    confirmemail != ""
  ) {
    return true;
  } else {
    alert("Anda harus mengisi data dengan lengkap !");
  }
}

window.onload = function () {
  document.getElementById("password").onchange = validatePassword;
  document.getElementById("confirmpassword").onchange = validatePassword;

  document.getElementById("email").onchange = validateEmail;
  document.getElementById("confirmemail").onchange = validateEmail;
};

function validatePassword() {
  var password = document.getElementById("password").value;
  var confirmpassword = document.getElementById("confirmpassword").value;
  if (password != confirmpassword) {
    document
      .getElementById("confirmpassword")
      .setCustomValidity("Passwords Tidak Sama, Coba Lagi");
  } else {
    document.getElementById("confirmpassword").setCustomValidity("");
  }
}

function validateEmail() {
  var email = document.getElementById("email").value;
  var confirmemail = document.getElementById("confirmemail").value;
  if (email != confirmemail) {
    document
      .getElementById("confirmemail")
      .setCustomValidity("Email Tidak Sama, Coba Lagi");
  } else {
    document.getElementById("confirmemail").setCustomValidity("");
  }
}
