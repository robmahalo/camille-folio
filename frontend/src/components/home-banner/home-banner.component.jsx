import "./home-banner.styles.scss";
import homebanner from "../../img/home-banner.svg";

const HomeBanner = () => {
  return (
    <div>
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="homebanner-container"
      >
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${homebanner})`,
          }}
        />
      </div>
    </div>
  );
};

export default HomeBanner;
