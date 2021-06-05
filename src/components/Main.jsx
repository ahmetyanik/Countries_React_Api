import React, { useEffect, useState } from "react";
import axios from "axios";


function Main(){

    const [countries,setCountries]=useState([]);



    function getCountries(){

        axios.get("https://restcountries.eu/rest/v2/all").then(function(info){
            setCountries(info.data);
        })
    };


    useEffect(getCountries,[]);

    console.log(countries);


 




    return(
        <div>
            Main
            This is Fatih's comment
        </div>
    )
};


export default Main;