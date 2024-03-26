import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import cmlogo from "../../img/cm-logo.png";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/">
          {" "}
          <img className="logo-container" src={cmlogo} alt="cm-logo"></img>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/about">
            about
          </Link>
          <Link className="nav-link" to="/projects">
            projects
          </Link>
          <Link className="nav-link" to="/resume">
            resume
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
