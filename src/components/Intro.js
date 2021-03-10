import * as React from "react";
import PropTypes from "prop-types";
import Tagline from "../img/taglineImg.png";
import "./intro.css";

const Intro = ({ siteTitle }) => (
  <section class="intro">
    <img src={Tagline} title="home" />
  </section>
);

Intro.propTypes = {
  siteTitle: PropTypes.string
};

Intro.defaultProps = {
  siteTitle: ``
};

export default Intro;
