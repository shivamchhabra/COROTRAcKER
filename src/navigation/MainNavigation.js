import React from "react";
import indimg from "./indimg.jpg";

import "./MainNavigation.css";
const mainnav = () => {
  return (
    <React.Fragment>
      <img src={indimg} alt="NavBar" />
      <div class="centered">COROTRAcKER</div>
    </React.Fragment>
  );
};
export default mainnav;
