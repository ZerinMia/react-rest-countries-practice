import React from 'react';
import './Country.css'
const Country = (props) => {
    const { name, capital, flags, population, region } = props.country
    return (
        <div className="country">
            <img src={flags.png} alt="" />
            <h1 className="mt-3">Name: {name}</h1>
            <h3>Cpaital: {capital}</h3>
            <h4>Population:{population}</h4>
            <p>Region: {region}</p>
            <button className='details'>More Details</button>
        </div>
    );
};


export default Country;