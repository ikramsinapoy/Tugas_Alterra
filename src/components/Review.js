import React from "react";
import styleReview from "./style/review.module.css";
import dot from "./img/img-dot.png";

function Review() {
  return (
    <div>
      <div className={styleReview.mainfloat}>
        <div className={styleReview.container}>
          <p>
            Fullname : <span id="result-name" />
          </p>
          <p>
            Email Address : <span id="result-email" />
          </p>
          <p>
            Phone Number : <span id="result-phone" />
          </p>
          <p>
            Nationallity :<span id="result-nationallity" />
          </p>
          <span id="result-message" className={styleReview.message}></span>

          <div className={styleReview.bottom}>
            <div className={styleReview.line}></div>
            <h3>Thanks for contacting us!</h3>
            <h3>We will be in touch with you shortly</h3>
            <form action="home.html">
              <button className={styleReview.btn}>Home</button>
            </form>
          </div>
          <img src={dot} className={styleReview.imgdot} alt="gambar" />
        </div>
      </div>
      <div className={styleReview.square}></div>
    </div>
  );
}

export default Review;
