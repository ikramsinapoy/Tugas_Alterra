import { Link } from "react-router-dom";

function AboutApp() {
  return (
    <div>
      <div className="container-about">
        <div className="container-nav">
          <Link to="/" className="icon-nav">
            Home
          </Link>
          <Link to="/about/about-app" className="icon-nav about-app">
            About App
          </Link>
          <Link to="/about/about-author" className="icon-nav">
            About Author
          </Link>
        </div>
        <div className="description-about">
          <h2>About The App</h2>
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

export default AboutApp;
// {
//   id: 1,
//   title: "about-app",
//   textAbout:
//     "To do list merupakan daftar tugas-tugas atau kegiatan yang harus kamu lakukan pada suatu rentang waktu. Sesuai artinya, to do list ini merupakan daftar to do atau untuk melakukan sesuatu.",
// },
// {
//   id: 2,
//   title: "about-author",
//   textAbout:
//     "To do list merupakan daftar tugas-tugas atau kegiatan yang harus kamu lakukan pada suatu rentang waktu. Sesuai artinya, to do list ini merupakan daftar to do atau untuk melakukan sesuatu.",
// }
