import React from "react";

const Statelistitem = (props) => {
  return (
    <React.Fragment>
      {props.id < 33 ? (
        <tr id={props.id}>
          <td>
            <center>{props.name}</center>
          </td>
          <td>
            <center>{props.cases}</center>
          </td>
          <td>
            <center>{props.rec}</center>
          </td>
          <td>
            <center>{props.deaths}</center>
          </td>
        </tr>
      ) : null}
    </React.Fragment>
  );
};
export default Statelistitem;
