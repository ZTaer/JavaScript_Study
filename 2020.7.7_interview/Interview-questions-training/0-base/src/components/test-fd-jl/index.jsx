import React from "react";
import { Button } from "@material-ui/core";

const TestFdJl = () => {
    /**
     * 防抖: 规定时间内多次促发, 将重置促发时间
     *      a) 核心: 利用了闭包，中的变量能一直保存在内存中
     */
    const handleUiAlert = () => console.log("促发函数 :>> ");

    // 防抖
    function handleUiFd(fn, delay) {
        let timeout = null;

        return function () {
            clearTimeout(timeout);
            timeout = setTimeout(fn, delay); // 重新计时
        };
    }

    // 节流
    function handleUiJl(fn, delay) {
        let timeout = true;
        return function () {
            if (timeout === false) {
                return false;
            }
            timeout = false;
            setTimeout(() => {
                fn();
                timeout = true;
            }, delay);
        };
    }

    return (
        <div className="test-fd-jl">
            <h3>防抖</h3>
            <Button onClick={handleUiFd(handleUiAlert, 1000)}>防抖1</Button>
            <h3>节流</h3>
            <Button onClick={handleUiJl(handleUiAlert, 1000)}>节流1</Button>
        </div>
    );
};

export default TestFdJl;
