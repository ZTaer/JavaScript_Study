import React, { useState, useEffect } from "react";

const StateImage = () => {
    /**
     * 针对"图片加载异步状态感知"回调测试( 等待笔记 )
     *      a) 实例Image: const img = new Image()
     *      b) 给予url: img.src = "/xx"
     *      c) 感知图片加载是否成功: img.onload = () => {}
     *      d) 感知图片加载是否失败: img.onerror = () => {}
     */
    const [state, setState] = useState({
        loading: true,
        error: "",
    });

    const handleCpuImgLoading = (imgUrl = "") => {
        try {
            const img = new Image(); // 核心
            img.src = imgUrl;
            // 图片
            img.onload = () => {
                console.log(`促发: 图片加载成功`);
                setState({
                    ...state,
                    loading: false,
                    errir: "",
                });
            };
            img.onerror = () => {
                console.log(`促发: 图片加载错误`);
                setState({
                    ...state,
                    loading: false,
                    errir: "error",
                });
            };
        } catch {
            console.warn("handleCpuImgLoading error");
        }
    };

    /**
     * 初始化区
     */
    useEffect(() => {
        handleCpuImgLoading(
            "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
        );
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            验证img加载状态
            {state.loading === true ? (
                <h1>Loading...</h1>
            ) : (
                <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" />
            )}
        </div>
    );
};

export default StateImage;
