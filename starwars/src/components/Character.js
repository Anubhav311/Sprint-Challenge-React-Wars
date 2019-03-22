import React from 'react';

import './StarWars.css'

const Character = props => {
    return <div className="character">
        <p>{props.item.name}</p>
        <p>{props.item.height}</p>
        <p>{props.item.gender}</p>
        <p>{props.item.mass}</p>
        <p>{props.item.hair_color}</p>
    </div>
}

export default Character;
