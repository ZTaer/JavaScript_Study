/* eslint-disable */

/**
 * 登陆页面js逻辑( 等待笔记 )
 * Axios: 修改包头Content-Type保证传输json数据类型格式
 *      0. 核心:
 *          headers: {
 *              "Content-Type": "application/json; charset=utf-8",
 *          },
 *      1. 示例: 如下
 */

(function () {
    /**
     * 异步逻辑区
     */
    // 登陆请求
    const handleAsyncLogin = async (props) => {
        try {
            const { email = "", password = "" } = props;
            const data = await axios({
                method: "POST",
                url: "http://127.0.0.1:3000/api/v1/user/login",
                data: {
                    email,
                    password,
                },
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
            });
            console.log(`data`, data);
            window.location.href = "/";
        } catch (error) {
            console.warn("handleAsyncLogin error", error);
            alert("user password error or email!");
        }
    };

    /**
     * 交互逻辑区
     */
    // 提交账号
    document.querySelector(".form").addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        handleAsyncLogin({
            email,
            password,
        });
    });
})();
