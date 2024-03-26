import Footer from "../footer/footer.component";
import "./resume.styles.scss";
import cmresume from "../../img/cm-resume.jpg";
import { Fragment } from "react";

const Resume = () => {
  return (
    <Fragment>
      <div data-aos="fade-up" data-aos-duration="1000">
        <div className="card-list-alt">
          {" "}
          <img className="" src={cmresume} alt="cm-resume"></img>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Resume;
