import React from 'react';

import Character from './Character';
import ColumnHeaders from './ColumnHeaders';

const CharacterList = props => {
    return <div className="characterList">
        {props.starwarsChars.map((item, index) => (
            <Character key={index} item={item} serial={index}/>
        ))}
    </div>
}

export default CharacterList;