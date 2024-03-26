import { Fragment } from "react";
import HomeBanner from "../home-banner/home-banner.component";
import "./directory.styles.scss";
import HomeCardList from "../home-card-list/homecardlist.component";

const Directory = () => {
  return (
    <Fragment>
      <div className="directory-container">
        <HomeBanner />
        <HomeCardList />
      </div>
    </Fragment>
  );
};

export default Directory;
