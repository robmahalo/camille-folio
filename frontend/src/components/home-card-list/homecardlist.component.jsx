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
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '2.5rem' }}>check out what i've made</h1>
          </div>
        </div>  
        <div data-aos-duration="1000">
          <div className="card-list-alt">
            <div className="flex-container">
            <div>
                <div className="card-black">
                  <img
                    className="image-container"
                    src={munchies}
                    alt="munchies-project"
                  ></img>
                </div>
              <div>
                <div className="card-black">
                  <img
                    className="image-container"
                    src={webreg}
                    alt="webreg-project"
                  ></img>
                </div>
              </div>
              <div className="card-black">
                <div>
                  <img
                    className="image-container"
                    src={zara}
                    alt="zara-project"
                  ></img>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeCardList;
