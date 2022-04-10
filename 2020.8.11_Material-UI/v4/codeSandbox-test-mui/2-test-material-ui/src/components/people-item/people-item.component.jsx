import React from 'react'

const PeopleItem  = props => {
    const { name,height } = props.item;
    
    return (
        <div className="people-item">
            <h2>{name}</h2>
            <p>{height}</p>
        </div>
    );
}

export default PeopleItem;