import React from 'react';

import './StarWars.css'

const ColumnHeaders = () => {
    return <div className="columnHeaderContainer">
        <div className="characterTrait serialNumber sNo"><p>S. No.</p></div>
        <div className="characterTrait serialNumber name"><p>NAME</p></div>
        <div className="characterTrait serialNumber height"><p>HEIGHT</p></div>
        <div className="characterTrait serialNumber gender"><p>GENDER</p></div>
        <div className="characterTrait serialNumber mass"><p>MASS</p></div>
        <div className="characterTrait serialNumber color"><p>HAIR COLOR</p></div>
    </div>
}

export default ColumnHeaders;