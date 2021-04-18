import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TestPages = () => {

    /**
     * 变量区
     */
    const [getData, setGetData] = useState({
        loading: true,
        data: "",
        error: null,
    });

    /**
     * 异步逻辑区
     */
    const handleAsyncGetData = async () => {
        try {
            const data = await axios({ url: "https://baidu.com/" });
            if (data) {
                setGetData({
                    ...getData,
                    loading: false,
                    data,
                });
            }

        } catch (error) {
            console.warn('handleAsyncGetData :>> ', error);
            setGetData({
                ...getData,
                error,
            });
        }
    };

    /**
     * 初始化区
     */
    useEffect(() => {
        handleAsyncGetData();
    }, []);

    return (
        <div className="test-pages" >
            {
                getData.loading && (
                    <h1>Loading...</h1>
                )
            }
            {
                !getData.loading && (
                    <h1>
                        {getData.data}
                    </h1>
                )
            }
        </div>
    );
};
export default TestPages;
