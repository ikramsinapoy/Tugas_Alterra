import React from "react";
import ErrorImg from "./img/undraw_page_not_found_su7k.png";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <div className="container-error">
        <img src={ErrorImg} className="error-img" />
        <div className="error-text">Oops! Something went wrong!</div>
        <Link to="/" className="btn-backHome">
          RETURN TO HOME
        </Link>
      </div>
    </div>
  );
}
export default Error;
