import React from 'react';
import './card.styles.css';

export const Card = props => {
    // 索引怪物图片API( 完成笔记 )
    const monsterImg = `https://robohash.org/${props.monster.id}?set=set2&=180x180`;
    return(
        <div className="card-container">
            <img src={monsterImg} alt="monster"/>
            <h2>
                {props.monster.name}
            </h2>
            <p>
                {props.monster.email}
            </p>
        </div>
    );
};