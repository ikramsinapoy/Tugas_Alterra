import React from "react";
import logo from "./img/logo-ALTA.png";
import avatar from "./img/orang.jpg";
import "./style.css";
// import { Contact } from "./Contact";

// pada komponen saya membuatnya menjadi komen karena jika diaktifkan
// halaman pada home dan contact us akan saling menimpah ini dikarenakan
//  halaman home dan contact us itu dibuat untuk dua halaman yang berbeda
// bukan untuk disatukan pada halaman yang sama dan pada spesifikasi soal
// itu disuruh untuk memasukkan file dari tugas sebelumnya

function App() {
  return (
    <div className="App">
      <div className="Home">
        <header class="sticky-md-top">
          <img src={logo} class="logo-alta" alt="Alterra Academy" />

          <nav class="nav-container">
            <a href=" " class="nav-home">
              Home
            </a>
            <a href=" ">About</a>
            <a href=" ">Experience</a>
            <a href="contact_us.html">Contact</a>
          </nav>
        </header>

        <main>
          <div class="main-container">
            <img src={avatar} alt="Matthew-Hamilton" class="avatar img-fluid" />

            <div class="text-container">
              <p class="introduction-word">Hi, my name is</p>
              <h1 class="name">Anne Sullivan</h1>
              <p class="purpose-word">I build things for the web</p>
              <button class="tombol">Get In Touch</button>
            </div>
          </div>
        </main>
      </div>
      <div>{/* <Contact /> */}</div>
    </div>
  );
}

export default App;
