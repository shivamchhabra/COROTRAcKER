import React, { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { useHttpClient } from "./http-hook";
import MainHtml from "./pages/MainHtml";

const App = () => {
  let count = 0;
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [resData, setresData] = useState(null);
  const [disoverlay, setdisoverlay] = useState(false);
  useEffect(() => {
    const fetchdata = async () => {
      let response;
      try {
        response = await sendRequest(
          "https://coronavirus-tracker-india-covid-19.p.rapidapi.com/api/getStatewise",
          "GET",
          null,
          {
            "x-rapidapi-host":
              "coronavirus-tracker-india-covid-19.p.rapidapi.com",
            "x-rapidapi-key":
              "186562a1b5msh85e0aef2941150bp1ac467jsncfb8bc6fe482",
          }
        );
      } catch (err) {
        console.log(err);
      }
      setresData(response);
      console.log(response);
      count = 1;
    };
    fetchdata();
  }, [count]);

  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <MainHtml data={resData} />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;

/*import React, { useEffect, useState } from "react";

import { useHttpClient } from "./http-hook";
import MainNavigation from "./navigation/MainNavigation";
import DistrictList from "./districtwise/district";
import Footer from "./footer/footer";
import IndiaMap from "./indiamap/india";
import "./App.css";

function App() {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [resData, setresData] = useState(null);
  const [disoverlay, setdisoverlay] = useState(false);
  let count = 0,
    stateId;
  useEffect(() => {
    const fetchdata = async () => {
      let response;
      try {
        response = await sendRequest(
          "https://coronavirus-tracker-india-covid-19.p.rapidapi.com/api/getStatewise",
          "GET",
          null,
          {
            "x-rapidapi-host":
              "coronavirus-tracker-india-covid-19.p.rapidapi.com",
            "x-rapidapi-key":
              "186562a1b5msh85e0aef2941150bp1ac467jsncfb8bc6fe482",
          }
        );
      } catch (err) {
        console.log(err);
      }
      setresData(response);
      console.log(response);
      count = 1;
    };
    fetchdata();
    console.log(resData);
  }, [count]);
  const clickHandler = (event) => {
    event.preventDefault();
    stateId = event.target.id;
    console.log(event.target.id);
    setdisoverlay(true);
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="nav">
          <MainNavigation />
        </div>
        <div className="middle" onClick={clickHandler}>
          <IndiaMap data={resData} />
        </div>
        {disoverlay && (
          <div>
            <DistrictList stateid="ka" />
          </div>
        )}
        <div className="footer">
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
*/
