import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import charles from "./img/charles.jpg";
import logo from "./img/logo-ALTA-v2@2x.png";
import style from "./style/contact.module.css";

function ContactUs() {
  return (
    <div>
      <div className={style.maincontainer}>
        <div className={style.leftcontainer}>
          <img src={charles} className={style.imgbackground} alt="charles" />
          <img src={logo} className={style.logoalta} alt="logo-alta" />
          <div className={style.coloroverlay}></div>
        </div>

        <div className={style.containerform}>
          <form
            action="review-message.html"
            id="form"
            className="needs-validation"
            noValidate
          >
            <div className="mb-3 valid">
              <label htmlFor="fullname" className="form-label text-form">
                Full Name<span className={style.star}>*</span>
              </label>
              <input
                type="text"
                className="form-control inputdata"
                id="fullname"
                placeholder="Your Full Name Here..."
                name="fullname"
                required
              />
              <div className="invalid-feedback">Full name cannot be empty</div>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label text-form">
                Email Address<span className={style.star}>*</span>
              </label>
              <input
                type="email"
                className="form-control input-data"
                id="email"
                placeholder="example@domail.com"
                name="email"
                required
              />
              <div className="invalid-feedback">
                Email address cannot be empty
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="phonenumber" className="form-label text-form">
                Phone Number<span className={style.star}>*</span>
              </label>
              <input
                type="text"
                className="form-control input-data"
                id="phonenumber"
                placeholder="08573890xxxx"
                name="phone"
                required
              />
              <div className="invalid-feedback">
                Phone number cannot be empty
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="nationallity" className="form-label text-form">
                Nationallity
              </label>
              <select
                id="nationallity"
                className="form-select input-data"
                aria-label="Default select example"
                defaultValue={"DEFAULT"}
              >
                <option value="DEFAULT">Selected</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Thailand">Thailand</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Singapore">Singapore</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label text-form">
                Message
              </label>
              <textarea
                className="form-control input-data"
                id="message"
                rows="3"
                placeholder="Your Full Name Here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className={style.btn}
              value="Click"
              // onClick="passvalues();"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
