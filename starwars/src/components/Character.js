import React from 'react';

import './StarWars.css'

const Character = props => {
    return <div className="character">
        <div className="characterTrait serialNumber" ><p>{props.serial + 1}</p></div>
        <div className="characterTrait"><p>{props.item.name}</p></div>
        <div className="characterTrait"><p>{props.item.height}</p></div>
        <div className="characterTrait"><p>{props.item.gender}</p></div>
        <div className="characterTrait"><p>{props.item.mass}</p></div>
        <div className="characterTrait"><p>{props.item.hair_color}</p></div>
    </div>
}

export default Character;
