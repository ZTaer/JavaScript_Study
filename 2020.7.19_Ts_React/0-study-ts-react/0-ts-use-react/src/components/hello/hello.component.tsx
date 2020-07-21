import React from 'react';
import { HelloProps } from "./hello.model";

const Hello = ( { name, enthusiasmLevel = 1 }: HelloProps ) => {    // 0. 函数组件: 接受参数类型配置( 等待笔记 )

    if( enthusiasmLevel <= 0 ){
        throw Error(" enthusiasmLevel要大于0 ")
    }

    const getExclamationMarks = function( inputNumber: number ){
        return Array( inputNumber ).join("!");
    };

    return(
        <div className="hello">
            <h1 className="greeting" >
                {
                    `Hello ${ name } ${ getExclamationMarks( enthusiasmLevel ) }`
                }
            </h1>
        </div>
    );
}

export default Hello;