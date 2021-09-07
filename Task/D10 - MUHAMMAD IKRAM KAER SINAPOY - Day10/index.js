function handleSubmit() {
  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  // to set into local storage
  /* localStorage.setItem("NAME", name);
  localStorage.setItem("SURNAME", surname); */

  sessionStorage.setItem("NAME", fullname);
  sessionStorage.setItem("EMAIL", email);
  sessionStorage.setItem("PHONE", phone);
  sessionStorage.setItem("MESSAGE", message);
  return;
}
