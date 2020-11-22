import React from 'react';

const ObjectAssign = () => {

    /**
     * Object.assign(): 合并枚举对象( 等待笔记 )
     *      a) 合并对象:
     *          0. 合并对象注意的问题: Object.assign( target, ...otherObj ), target将被改变 ( 将改变目标原对象 )
     *          1. 属性覆盖: 相同属性的对象属性将被覆盖
     *      b) 复制对象:
     *          0. 深拷贝问题: Object.assign无深拷贝，仍然需要传统的方法配合，才能深拷贝
     */

    // a) 合并对象
    //      注意: Object.assign( target, ...otherObj ), target将被改变
    const handleTestMerge = () => {
        const a = { a:1 };
        const b = { b:2 };
        const c = { c:3 };

        const d = Object.assign( a,b,c );
        console.log('a,d :>> ', a,d);           // 渲染结果: { a:1, b:2, c:3 }, { a:1, b:2, c:3 }

    };

    // b) 复制对象
    //      a) 注意: Object.assign复制的方式，仅限于"潜拷贝"
    const handleTestCopy = () => {
        const a = { a:1, b:2, c: { xx:1, yy:2 } };
        const b = Object.assign({},a);          // 拷贝: Object.assign拷贝方式
        console.log('b :>> ', b);

        
        a.c.xx = 888;                           // 是否深拷贝: 否, 无法深拷贝
        a.a = 666;                              // 是否潜拷贝: 是, 可以潜拷贝
        console.log('b :>> ', b);
    };

    return (
        <div>
           <h1>
                Object.assign()函数测试
           </h1> 
           { handleTestMerge() }
           { handleTestCopy() }
        </div>
    )
};

export default ObjectAssign;
