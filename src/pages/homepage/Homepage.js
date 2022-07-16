import "./Homepage.css";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <div className="container">
        <img
          className="header_img_top"
          src="/assets/images/header_img_top.png"
          alt="person"
        />

        <div className="header">
          <p className="tagline_top">One step solution for all your notes</p>
          <h1 className="primary_heading">
            Manage All <br /> Your{" "}
            <span className="color_primary">Designing</span> <br /> Notes
          </h1>
          <p className="tagline_bottom">
            Manage all your designing notes efficiently and easily with
            DesigningWise Notes.
          </p>
          <Link to="/notes">
            <button className="btn btn_primary shadow">Get started</button>
          </Link>

          <img
            className="header_img_bottom"
            src="/assets/images/header_img_bottom.png"
            alt="person"
          />
          <img
            className="pencil_img"
            src="/assets/images/pencil.png"
            alt="pencil"
          />
          <img className="auth_img" src="/assets/images/auth.png" alt="auth" />
        </div>
      </div>

      <hr />

      <div className="features">
        <div className="features_heading">
          <p className="tagline_top mr_0">Lorem, ipsum dolor</p>
          <h1 className="secondary_heading">Best Features For You</h1>
          <p className="color_grey">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
        </div>

        <div className="features_container">
          <img
            className="arrow_bottom"
            src="/assets/images/arrowBottom.png"
            alt="notepad"
          />
          <img
            className="arrow_top"
            src="/assets/images/arrowTop.png"
            alt="notepad"
          />
          <div className="feature">
            <img
              className="feature_img"
              src="/assets/images/4.png"
              alt="notepad"
            />
            <h3 className="feature_heading">Archive Your Notes</h3>
            <p className="feature_txt color_grey">
              Lorem ipsum, dolor sitting in amet consec tetur.
            </p>
          </div>

          <div className="feature feature_middle">
            <img
              className="feature_img"
              src="/assets/images/7.png"
              alt="notepad"
            />
            <h3 className="feature_heading">Authentication</h3>
            <p className="feature_txt color_grey">
              Lorem ipsum, dolor sitting in amet consec tetur.
            </p>
          </div>

          <div className="feature">
            <img
              className="feature_img"
              src="/assets/images/5.png"
              alt="notepad"
            />
            <h3 className="feature_heading">Background Colors</h3>
            <p className="feature_txt color_grey">
              Lorem ipsum, dolor sitting in amet consec tetur.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export { Homepage };
