import React from "react";
import styles from "./style/home.module.css";
import logoalta from "./img/logo-ALTA.png";
import avatar from "./img/orang.jpg";
import Clock from "./Clock";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <header className="sticky-md-top">
          <img
            src={logoalta}
            className={styles.logoalta}
            alt="Alterra Academy"
          />

          <nav className={styles.navContainer}>
            <a href="home.js" className={styles.navhome}>
              Home
            </a>
            <a href="about">About</a>
            <a href="Experience">Experience</a>
            <Link to="/contactus">Contact</Link>
            <Link to="/news">News</Link>
          </nav>
        </header>

        <main>
          <Clock />
          <div className={styles.maincontainer}>
            <img
              src={avatar}
              alt="Matthew-Hamilton"
              className={styles.avatar}
            />

            <div className={styles.textcontainer}>
              <p className={styles.introductionword}>Hi, my name is</p>
              <h1 className={styles.name}>Anne Sullivan</h1>
              <p className={styles.purposeword}>I build things for the web</p>
              <button className={styles.tombol}>Get In Touch</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
