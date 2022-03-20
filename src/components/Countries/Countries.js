import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])


    return (
        <div>
            <h1>World Tour!</h1>
            <p>Countries: {countries.length}</p>
            <div className="countries">

                {
                    countries.map(country => <Country country={country}></Country>)
                }
            </div>
            {
                countries.map(country => console.log(country))
            }
        </div>
    );
};

export default Countries;