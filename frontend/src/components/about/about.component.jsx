import { Fragment } from "react";
import Footer from "../footer/footer.component";
import "./about.styles.scss";

const About = () => {
  return (
    <Fragment>
      <div data-aos="fade-right" data-aos-duration="1000">
        <div className="card-list-alt">
          <div className="card-black">
            <div>
              <h1>about</h1>
              <p>
                i was born and raised in this tiny island called guam and am
                currently a second-year student pursuing a b.s. in cogsci spec.
                design and interaction @ uc san diego.
                <p>
                  when im not designing, catch me drinking kumquat fruit tea
                  with boba, playing guitar, or watching Avatar: The Last
                  Airbender!
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default About;
