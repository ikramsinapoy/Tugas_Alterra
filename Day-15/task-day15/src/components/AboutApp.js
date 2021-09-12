import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Redirect,
  useHistory,
  useParams,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import DataAbout from "./data/DataAbout";

function AboutApp(props) {
  let history = useHistory();
  let location = useLocation();
  let params = useParams();
  let routeMatch = useRouteMatch();
  const [dataAbout, setDataAbout] = useState(DataAbout);

  const [displayData, setdisplayData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    const findData = dataAbout.find((i) => i.id === props.match.params.id);

    if (findData) {
      setdisplayData(findData);
    } else {
      history.push("/");
    }
  }, []);

  return (
    <div>
      <Redirect to="/" />
      <div className="container-about">
        <div className="container-nav">
          {/* <Link to="/" className="icon-nav">
            Home
          </Link>
          <Link to="/about/about-app" className="icon-nav about-app">
            About App
          </Link>
          <Link to="/about/about-author" className="icon-nav">
            About Author
          </Link> */}
        </div>
        <div className="description-about">
          <h2>{displayData.title}</h2>
          <p>{displayData.description}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutApp;
