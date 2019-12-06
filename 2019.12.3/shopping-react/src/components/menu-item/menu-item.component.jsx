import React from 'react';
import "./menu-item.style.scss";

const MenuItem = ({ title,imageUrl,size,linkUrl }) => (
    // JSX-标签属性style其实为对象类型，它的css属性需要按照对象的规则来写入( 完成笔记 )
    // JSX-className多类名写法( 完成笔记 )
        // 0. jsx需要{}大括号内才可以使用js语法
        // 1. 使用ES6` ${} `字符串处理套装 
    // toUpperCase()小写转大写字母(完成笔记)
    <div className={ ` menu-item ${size} ` }>
        <div style={ { 
            backgroundImage: `url(${imageUrl})` 
        } } className="background-image">
        </div>
        <div className="content">
            <h1 className="title">
                {title.toUpperCase()  }
            </h1>
            <span className="subtitle">
                SHOP NOW
            </span>
        </div>
    </div>
);

export default MenuItem;