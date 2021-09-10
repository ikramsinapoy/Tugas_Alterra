import { Link } from "react-router-dom";

function AboutAuthor() {
  return (
    <div>
      <div className="container-about">
        <div className="container-nav">
          <Link to="/" className="icon-nav">
            Home
          </Link>
          <Link to="/about/about-app" className="icon-nav">
            About App
          </Link>
          <Link to="/about/about-author" className="icon-nav about-author">
            About Author
          </Link>
        </div>
        <div className="description-about">
          <h2>About The Author</h2>
          <p>
            To do list merupakan daftar tugas-tugas atau kegiatan yang harus
            kamu lakukan pada suatu rentang waktu. Sesuai artinya, to do list
            ini merupakan daftar to do atau untuk melakukan sesuatu.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutAuthor;
