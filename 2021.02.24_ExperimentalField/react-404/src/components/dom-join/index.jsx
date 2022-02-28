import React, { useEffect } from "react";
import { render } from "react-dom";
import IconTest from "./icon-test.component";

const DomJoin = () => {
    /**
     * React插入组件到指定DOM下( 等待笔记 )
     *      a) 场景: es5抓取dom, 在抓取目标下, 插入渲染React组件
     *      b) 核心: ReactDom.render( 组件,dom位置 )
     */

    useEffect(() => {
        const tar = document.querySelector("#dom-join-target");
        render(<IconTest />, tar);
    }, []);

    return (
        <div className="dom-join">
            <h1 id="dom-join-target">实验: ES5插入React组件</h1>
        </div>
    );
};

export default DomJoin;
