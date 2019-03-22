import React from 'react';

import Character from './Character';

const CharacterList = props => {
    return <div className="characterList">
        {props.starwarsChars.map((item, index) => (
            <Character key={index} item={item}/>
        ))}
    </div>
}

export default CharacterList;