import React from "react";

import IndiaMap from "../indiamap/india";
import MainNavigation from "../navigation/MainNavigation";
import Footer from "../footer/footer";
import Statelist from "../listdiv/statelist";
import IndiaTable from "../components/indiatable";

const MainHtml = (props) => {
  return (
    <React.Fragment>
      <div class="nav">
        <MainNavigation />
      </div>
      <div class="shss">
        <hr color="grey" />
        <h3>STAY HOME... STAY SAFE...</h3>
        <hr color="grey" />
      </div>
      <div class="fi">
        <IndiaTable data={props.data} />
      </div>
      <div class="moi">
        <IndiaMap data={props.data} />
        <footer>
          <table>
            <tr>
              <td className="first"></td>
              <td className="second"></td>
              <td className="third"></td>
              <td className="fourth"></td>
            </tr>
            <tr>
              <td>less 50</td>
              <td>less 500</td>
              <td>less 1000</td>
              <td>more 1000</td>
            </tr>
          </table>
        </footer>
      </div>
      <div class="toi">
        <Statelist data={props.data} />
      </div>
      <div class="footer">
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default MainHtml;
