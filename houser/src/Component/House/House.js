import React from 'react';

export default function House(props){
   let { name, address, city, state, zip } = props.house;
    console.log(props)
    return (
        <div className='House'>
        
            <p>Property Name: {name}</p>
            <p>Address: {address}</p>
            <p>City: {city}</p>
            <p>State: {state}</p>
            <p>Zipcode: {zip}</p>
            <br />
            <button>X</button>
        </div>
    )
}