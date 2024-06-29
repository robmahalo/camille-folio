import React from "react";
import "./footer.styles.scss";
import linkedin from "../../img/LinkedIn.svg";
import mail from "../../img/Gmail Logo.svg";

const Footer = () => {
  return (
    <div className="box">
      <h2
        style={{
          textAlign: "center",
          marginTop: "100px",
        }}
      >
        let's connect!
      </h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <a
          href="https://www.linkedin.com/in/camille-manalo-mtfbwy"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: "10px" }}
        >
          <img className="" src={linkedin} alt="LinkedIn" />
        </a>
        <a
          href="mailto:camillejcmanalo@gmail.com"
          style={{ marginLeft: "10px" }}
        >
          <img className="" src={mail} alt="Email" />
        </a>
      </div>
      <p
        style={{
          color: "gray",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        . ݁₊ ⊹ . ݁˖ . . ݁₊ ⊹ . ݁˖ . ݁thanks for visiting . ݁₊ ⊹ . ݁˖ . . ݁₊ ⊹ . ݁˖ . ݁ 
      </p>
      <p
        style={{
          color: "gray",
          textAlign: "center",
          marginTop: "10px",
        }}
      >  
        © 2024 Camille Manalo. All rights reserved. | created with boba and VS Code
      </p>
    
      {/* <FooterContainer>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Uttar Pradesh</FooterLink>
            <FooterLink href="#">Ahemdabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </FooterContainer> */}
    </div>
  );
};
export default Footer;
