import React from "react";
import Logo from "../img/logo.svg";
import "./footer.css";

const Footer = class extends React.Component {
  render() {
    return (
      <footer id="footer" class="footer smooth">
        <div className="wrapper">
          <div className="footContainer">
            <div className="footLogo">
              <a href="/" title="Home">
                <img src={Logo} title="home" />
              </a>
            </div>
            <div className="footLinks">
              <ul className="list-unstyled">
                <li>
                  <a href="./privacy.html" title="Privacy Policy">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="./terms-of-use.html" title="Terms of Use">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a
                    href="./terms-of-participation.html"
                    title="Terms of Participation">
                    Terms of Participation
                  </a>
                </li>
                <li>
                  <a
                    href="./terms-and-conditions.html"
                    title="Terms &amp; Conditions for Hosted Meeting Participants">
                    Terms &amp; Conditions for Hosted Meeting Participants
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footContactDetails">
            <ul className="list-inline">
              <li>&amp;copy; Fintech Meetup, LLC</li>
              <li>605 3rd Ave, 26th Floor, New York, NY 10158</li>
              <li>
                <a href="mailto:hey@fintechmeetup.com">hey@fintechmeetup.com</a>
              </li>
              <li>
                <a href="tel:+1(646) 598-6644">(646) 598-6644</a>
              </li>
              <li>
                <div className="footSocialLinks">
                  <ul className="list-inline">
                    <li>
                      <a
                        href="https://www.instagram.com/fintechmeetup"
                        target="_blank"
                        title="Fintech Instagram">
                        <i className="ft-ico-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/Fintechmeetup"
                        target="_blank"
                        title="Fintech Twitter">
                        <i className="ft-ico-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/groups/12491612/"
                        target="_blank"
                        title="Fintech Linkedin">
                        <i className="ft-ico-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
