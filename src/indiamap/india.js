import React from "react";
import { SVGMap } from "react-svg-map";
import India from "@svg-maps/india";
import "./india.css";

const indiamap = (props) => {
  const array = [
    "an",
    "ap",
    "ar",
    "as",
    "br",
    "ch",
    "ct",
    "dl",
    "ga",
    "gj",
    "hr",
    "hp",
    "jk",
    "jh",
    "ka",
    "kl",
    "ld",
    "mp",
    "mh",
    "mn",
    "ml",
    "mz",
    "or",
    "py",
    "pb",
    "rj",
    "tn",
    "tg",
    "tr",
    "ut",
    "up",
    "wb",
  ];

  if (props.data) {
    props.data.map((state) => {
      if (state.name && state.id) {
        const stateid = state.id;

        const str = array[stateid - 1].toString();

        if (state.cases < 50) {
          document.getElementById(str).style.fill = "#45b6fe";
        } else if (state.cases > 10 && state.cases < 500) {
          document.getElementById(str).style.fill = "#3792cb";
        } else if (state.cases > 200 && state.cases < 1000) {
          document.getElementById(str).style.fill = "#296d98";
        } else {
          document.getElementById(str).style.fill = "#1c4966";
        }
        document.getElementById("sk").style.fill = "#45b6fe";
        document.getElementById("nl").style.fill = "#45b6fe";
      }
    });
  }

  return <SVGMap map={India} className="svg-map" />;
};
export default indiamap;
