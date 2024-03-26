import { Fragment } from "react";
import Footer from "../footer/footer.component";
import "./projects.styles.scss";
import zara from "../../img/zara.png";
import webreg from "../../img/webreg.png";
import munchies from "../../img/munchie.png";

const Projects = () => {
  return (
    <Fragment>
      <div data-aos="fade-up" data-aos-duration="1000">
        <div className="card-list-alt">
          <div className="card-black"></div>
          <div>
            <div className="card-black">
              <img
                className="image-container"
                src={zara}
                alt="zara-project"
              ></img>
            </div>
            <h2>Zara Redesign</h2>
          </div>
          <div>
            <div className="card-black">
              <img
                className="image-container"
                src={webreg}
                alt="webreg-project"
              ></img>
            </div>
            <h2>UCSD's WebReg Redesign</h2>
          </div>
          <div>
            <div className="card-black">
              <img
                className="image-container"
                src={munchies}
                alt="munchies-project"
              ></img>
            </div>
            <h2>Munchie Masters App</h2>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Projects;
