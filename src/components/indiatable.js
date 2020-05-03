import React from "react";

const IndiaTable = (props) => {
  let data = props.data;

  let tot = 0,
    rec = 0,
    dth = 0;

  if (data !== null) {
    console.log(data[5].cases);
    for (var i = 0; i < 32; i++) {
      var cases = parseInt(data[i].cases);
      var reco = parseInt(data[i].recovered);
      var deaths = parseInt(data[i].deaths);
      tot = tot + cases;
      rec = rec + reco;
      dth = dth + deaths;
      console.log(cases);
    }
    console.log("total cases" + tot);
  }

  return (
    <center>
      <table>
        <tr>
          <th className="conf">
            <center>Confirmed</center>
          </th>
          <th className="rec">
            <center>Recovered</center>
          </th>
          <th className="dths">
            <center>Deaths</center>
          </th>
        </tr>
        <tr>
          <td className="conf">
            <center>{tot}</center>
          </td>
          <td className="rec">
            <center>{rec}</center>
          </td>
          <td className="dths">
            <center>{dth} </center>
          </td>
        </tr>
      </table>
    </center>
  );
};

export default IndiaTable;
