import React, { useEffect, useState } from "react";
import axios from "axios";

function Main() {
  const [countries, setCountries] = useState([]);

  function getCountries() {
    axios.get("https://restcountries.eu/rest/v2/all").then(function (info) {
      setCountries(info.data);
    });
  }

  useEffect(getCountries, []);

  

  return (
    <div className="container mt-5">

    <h3>Countries</h3>
      
        {countries.map(function (ulke) {
          return <div className="alert alert-dark d-flex justify-content-between" role="alert"><div>{ulke.name}</div>  <img src={ulke.flag} style={{width:"35px"}}/></div>;
        })}
      
    </div>
  );
}

export default Main;
