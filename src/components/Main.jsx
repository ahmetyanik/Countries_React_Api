import React, { useEffect, useState } from "react";
import axios from "axios";


function Main() {

    const [countries, setCountries] = useState([]);



    function getCountries() {

        axios.get("https://restcountries.eu/rest/v2/all").then(function (info) {
            setCountries(info.data);
        })
    };


    useEffect(getCountries, []);


    return (
        <div>
            {countries.map(function (ulke) {
                return <div
                    class="alert alert-secondary" role="alert">{ulke.name}</div>;
            })}

        </div>
    );
}


export default Main;