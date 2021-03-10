import * as React from "react";
import PropTypes from "prop-types";
import Logo from "../img/logo.svg";
import "./header.css";

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="subHeader">
      {" "}
      <div className="wrapper">
        {" "}
        <p className="lgVisible">
          {" "}
          Tue-Thurs, June 15-17, 2021 • 9:30 am-12:15 pm PT (12:30 pm-3:15 pm
          ET){" "}
        </p>
        <a
          href="javascript:void(0)"
          title="Join Mailing List"
          id="showMailingList">
          Join Mailing List
        </a>{" "}
      </div>
    </div>
    <div className="wrapper">
      {" "}
      <div className="headerContainer">
        <b className="lgVisible">
          We're Building Fintech's Largest <br /> Online Interactive Community
        </b>{" "}
        <div className="headerLogo">
          {" "}
          <a href="/" title="Home">
            <img src={Logo} title="home" />{" "}
            <small>Tue-Thurs, June 15-17, 2021</small>{" "}
          </a>{" "}
        </div>
        <div className="headerNavLinks">
          <button className="showMenu xsVisible">
            <span>
              <small className="a smooth"></small>
              <small className="b smooth"></small>
              <small className="c smooth"></small>
            </span>
          </button>{" "}
          <div className="headerNavLinksTop lgVisible">
            <ul className="list-inline">
              {" "}
              <li>
                {" "}
                <a
                  href="https://www.instagram.com/fintechmeetup"
                  target="_blank"
                  title="Fintech Instagram">
                  {" "}
                  <i className="ft-ico-instagram"></i>{" "}
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  href="https://twitter.com/Fintechmeetup"
                  target="_blank"
                  title="Fintech Twitter">
                  {" "}
                  <i className="ft-ico-twitter"></i>{" "}
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  href="https://www.linkedin.com/groups/12491612/"
                  target="_blank"
                  title="Fintech Linkedin">
                  {" "}
                  <i className="ft-ico-linkedin"></i>{" "}
                </a>{" "}
              </li>
            </ul>{" "}
          </div>
          <div className="headerNavLinksBottom">
            {" "}
            <nav className="headerNav text-right">
              {" "}
              <p className="xsVisible">
                {" "}
                Tue-Thurs, June 15-17, 2021{" "}
                <span>9:30 am-12:15 pm PT (12:30 pm-3:15 pm ET)</span>{" "}
              </p>
              <ul className="list-inline">
                {" "}
                <li>
                  <span onclick="scrollBack(event)" data-id="what">
                    what
                  </span>{" "}
                </li>
                <li>
                  {" "}
                  <span onclick="scrollBack(event)" data-id="who">
                    who
                  </span>{" "}
                </li>
                <li>
                  {" "}
                  <span onclick="scrollBack(event)" data-id="why">
                    why
                  </span>{" "}
                </li>
                <li>
                  {" "}
                  <span onclick="scrollBack(event)" data-id="how">
                    how
                  </span>{" "}
                </li>
                <li>
                  {" "}
                  <a href="./tickets.html" target="_blank" data-id="getTicket">
                    get ticket
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="./sponsor_form.html"
                    target="_blank"
                    data-id="sponsor">
                    sponsor
                  </a>{" "}
                </li>
              </ul>{" "}
            </nav>{" "}
          </div>
        </div>
      </div>
    </div>
  </header>
);

{
  /* <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link> */
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
