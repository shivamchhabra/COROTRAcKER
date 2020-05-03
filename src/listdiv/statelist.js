import React, { useState, useEffect } from "react";
import Statelistitem from "./Statelistitem";

const Statelist = (props) => {
  const [loadeddata, setloadeddata] = useState();
  let count = 0;
  useEffect(() => {
    if (props.data !== null) {
      setloadeddata(props.data);
      count = 1;
    }
  }, [count]);

  return (
    <React.Fragment>
      <center>
        <h3>StateWise List</h3>
      </center>
      {props.data && (
        <table className="fulltable">
          <tr>
            <th>
              <center>State</center>
            </th>
            <th>
              <center>Cases</center>
            </th>
            <th>
              <center>Recovered</center>
            </th>
            <th>
              <center>Deaths</center>
            </th>
          </tr>
          {props.data.map((state) => (
            <Statelistitem
              key={state.id}
              id={state.id}
              name={state.name}
              cases={state.cases}
              rec={state.recovered}
              deaths={state.deaths}
            />
          ))}
        </table>
      )}
    </React.Fragment>
  );
};

export default Statelist;
