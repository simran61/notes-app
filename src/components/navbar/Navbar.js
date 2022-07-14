import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav_bar">
      <Link to="/" className="txt_link">
        <h2 className="brand_name">
          Designing<span className="color_primary">Wise</span>
        </h2>
      </Link>
      <Link to="/notes" className="txt_link_btn btn">
        Sign-up
      </Link>
    </div>
  );
}

export { Navbar };
