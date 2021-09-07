import React, { Component } from "react";
import background from "./img/charles.jpg";
import logoalta from "./img/logo-ALTA-v2@2x.png";
import "./stycont.css";

export class Contact extends Component {
  render() {
    return (
      <div class="container">
        <style></style>
        <div class="header">
          <img src={background} alt="Charles" class="background-img" />
          <img src={logoalta} alt="Alterra Academy" class="alta-id" />
        </div>

        <div class="form">
          <h1>Contact Us</h1>
          <form action="home.html">
            <label for="fullname" class="name">
              Full Name<span class="star">*</span>
            </label>
            <br />
            <input
              class="form-control name-input"
              type="text"
              placeholder="Your Full Name Here..."
              aria-label="default input example"
              name="fullname"
            />
            <br />
            <br />

            <label for="email" class="name">
              Email Address<span class="star">*</span>
            </label>
            <br />
            <input
              type="text"
              id="email"
              class="name-input"
              name="email"
              placeholder="example@domail.com"
            />
            <br />
            <br />

            <label for="phone" class="name">
              Phone Number<span class="star">*</span>
            </label>
            <br />
            <input
              type="text"
              id="phone"
              class="name-input"
              name="phone"
              placeholder="08573890xxxxx"
            />
            <br />
            <br />

            <label for="nationallity" class="name">
              Nationallity
            </label>
            <br />
            <select
              class="form-select name-input"
              aria-label="Default select example"
            >
              <option selected>Selected</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Thailand">Thailand</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Singapore">Singapore</option>
            </select>
            <br />
            <br />

            <label for="message" class="name">
              Message
            </label>
            <br />
            <textarea
              name="message"
              rows="10"
              cols="30"
              placeholder="Your Full Name Here..."
              class="input-message"
            ></textarea>
            <br />
            <br />

            <input type="submit" value="Submit" class="btn-submit" />
          </form>
        </div>
      </div>
    );
  }
}
