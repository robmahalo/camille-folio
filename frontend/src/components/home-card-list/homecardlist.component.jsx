import "./homecardlist.styles.scss";
import { Fragment } from "react";
import zara from "../../img/zara.png";
import webreg from "../../img/webreg.png";
import munchies from "../../img/munchie.png";

const HomeCardList = () => {
  return (
    <Fragment>
      <div className="card-list-alt">
        <div className="card-black">
          <div>
            <hr
              style={{
                borderTop: "1px solid gray",
                width: "100%",
                margin: "0",
              }}
            />
            <h1>about</h1>
            <p>
              i was born and raised in this tiny island called guam and am
              currently a second-year student pursuing a b.s. in cogsci spec.
              design and interaction @ uc san diego.
              <p>
                when im not designing, catch me drinking kumquat fruit tea with
                boba, playing guitar, or watching Avatar: The Last Airbender!
              </p>
            </p>
          </div>
        </div>
        <hr
          style={{ borderTop: "0.5px solid gray", width: "100%", margin: "0" }}
        />
        <div className="card-black">
          <div>
            <h1>projects</h1>
            <p>
              this website! i used figma and vs code to create what you see
              right now.
            </p>
          </div>
        </div>
        <div data-aos-duration="1000">
          <div className="card-list-alt">
            <div className="flex-container">
              <div className="card-black">
                <div>
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
        </div>
      </div>
    </Fragment>
  );
};

export default HomeCardList;
