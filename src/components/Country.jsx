import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function Country() {
  const parametre = useParams();

  const [countries, setCountries] = useState([]);

  function getCountries() {
    axios
      .get("https://restcountries.eu/rest/v2/name/" + parametre.countryName)
      .then(function (info) {
        setCountries(info.data[0]);
      });
  }

  useEffect(getCountries, []);

  return (
    
      <div class="card mb-3 d-flex">
        <img
          src={countries.flag}
          class="card-img-top"
          alt="..."
          style={{ width: "30%" }}
        />
        <div class="card-body">
          <h5 class="card-title">{countries.name}</h5>
          <p class="card-text">{countries.capital}</p>
          <p class="card-text">
            <small class="text-muted">{countries.population}</small>
          </p>
          <p className="card-text">{countries.region}</p>
        </div>
      </div>
   
  );
}

export default Country;
