import React from 'react';

import Character from './Character';

const CharacterList = props => {
    return <div className="characterList">
        {props.currentChars.map((item, index) => (
            <Character key={index} item={item} serial={index}/>
        ))}
    </div>
}

export default CharacterList;