
import React from 'react';
import './main.css';
import OneContact from './OneContact';

const GetContact = ({ match : { params: {id}}}) => {
    const numID = Number(id);
    return(
        <div className="main">
            <OneContact id={numID}/>
        </div>
    )
}

export default GetContact;

