import React from 'react';
import OneContact from './OneContact';
import './main.css';

const GetContact = ({ match: {params: {id} } }) => {
    const numID = Number(id);

    return(
        <div className="main">
            <OneContact id={numID}/>
        </div>
    )
 }

 export default GetContact;