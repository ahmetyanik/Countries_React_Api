import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Main() {
  const [countries, setCountries] = useState([]);

  function getCountries() {
    axios.get("https://restcountries.eu/rest/v2/all").then(function (info) {
      setCountries(info.data);
    });
  }

  useEffect(getCountries, []);

  return (
    <div className="container mt-5 ">
      <h3>Countries</h3>

      <div>
        {countries.map(function (ulke) {
          return (
            <div>
              <Link to={`/country/${ulke.name}`} style={{ textDecoration: "none" }}>
                <div
                  className="alert alert-dark d-flex justify-content-between"
                  role="alert"
                  style={{ width: "100%" }}
                >
                  <div>{ulke.name}</div>
                  <img src={ulke.flag} style={{ width: "35px" }} />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
