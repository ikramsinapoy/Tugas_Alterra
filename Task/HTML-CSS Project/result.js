window.addEventListener("load", () => {
  // Via Query parameters - GET
  /* const params = (new URL(document.location)).searchParams;
  const name = params.get('name');
  const surname = params.get('surname'); */

  // Via local Storage
  /* const name = localStorage.getItem('NAME');
  const surname = localStorage.getItem('SURNAME'); */

  const fullname = sessionStorage.getItem("NAME");
  const email = sessionStorage.getItem("EMAIL");
  const phone = sessionStorage.getItem("PHONE");
  const message = sessionStorage.getItem("MESSAGE");

  document.getElementById("result-name").innerHTML = fullname;
  document.getElementById("result-email").innerHTML = email;
  document.getElementById("result-phone").innerHTML = phone;
  document.getElementById("result-nationallity").innerHTML = message;
});
