import React, { useEffect, useState } from "react";
import { useHttpClient } from "../http-hook";
const array2 = [[]];

const Districtlist = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [loadedDistricts, setloadedDistricts] = useState(null);
  useEffect(() => {
    let resdata;
    const fetchData = async () => {
      resdata = await sendRequest(
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
      console.log(resdata);
    };
    fetchData();
  }, []);
  return <li></li>;
};
export default Districtlist;
