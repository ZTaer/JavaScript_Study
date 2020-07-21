import React from 'react';
import { HelloProps } from './hello.model';

class HelloClass extends React.Component< HelloProps, Object > {    // 1. class组件: 类型解析< props数据类型, state数组类型 > ( 等待笔记 )

    getExclamationMarks = function( inputNumber: number ){
        return Array( inputNumber ).join("!");
    };

    render(){
        const { name, enthusiasmLevel = 1 } = this.props;        

        if( enthusiasmLevel <= 0 ){
            throw Error(" enthusiasmLevel要大于0 ")
        }

        return(
            <div className="h1-class">
                <h1>
                    {
                        `Hello ${ name } ${ this.getExclamationMarks( enthusiasmLevel ) }`
                    }
                </h1>
            </div>
        );
    };
}

export default HelloClass;