import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';

export const CardList = props => {
    return (
        <div className="card-list" >
            {
                props.monsters.map( cur => <Card key={cur.id} monster={cur} /> )
            }
        </div>
    );
};

// 自定义标签属性传输,以及重用性( 完成笔记 )
    /**
    引入方:
        import { CardList } from '...';
        <Cardlist xxx="zhao" >
            <h1> __oo7__ </h1>
        </Cardlist>
        <Cardlist name="zhao" /> // 可以多次重用,像函数一样不受其它影响 
    输出方:
        a) props.children: 是自定义标签中的JSX内容
        b) props.xxx: 为自定义标签中的属性内容 
        c) props为对象类型, 存储着自定义标签的参数 
        d) 注意: 必须要引入react库: import 'React' from 'react';
     
export const CardList = props => {
    console.log( props );
    return (
        <div>
            { props.children } 
            <h1> { props.name } </h1>
        </div>
    );
};
*/
