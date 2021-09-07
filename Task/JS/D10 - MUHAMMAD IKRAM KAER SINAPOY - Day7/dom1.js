const h1 = document.getElementById("fill-me");
const h2 = document.querySelector("h2");
const p = document.querySelectorAll("p");

h1.innerHTML = "HALO!";
h2.innerHTML = "Apa Kabar!";
p.forEach((p) => {
  p.innerHTML = "HALO JUGA!";
});

const container = document.createElement("div");
container.id = "kotak";
document.body.appendChild(container);

const tombol1 = document.createElement("button");
tombol1.innerHTML = "Ini Button";
document.getElementById("kotak").appendChild(tombol1);

const tombol2 = document.createElement("button");
tombol2.innerHTML = "Ini Juga Button";
document.getElementById("kotak").appendChild(tombol2);

container.style.border = "thin solid";
container.style.padding = "25px 30px";
container.style.width = "180px";
