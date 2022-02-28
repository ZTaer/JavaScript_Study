const express = require("express");
const viewsControllers = require("../controllers/views.controller");
const authControllers = require("../controllers/auth.controllers");

const router = express.Router();

/**
 * 用户登陆: pug渲染页面时使用的中间件,方便渲染页面时读取user信息( 等待笔记 - 其实在API项目中无需设定此逻辑, 此逻辑仅适用于pug )
 */
// router.use(authControllers.isLoggedIn);

// 配置3: pug路由 | 非结构化( 完成笔记 )
//      a) pug支持传入变量

// router.get("/", (req, res) => {
//     res.status(200).render("base", {
//         test: "abc", // 传入变量
//         title: "THE FOREST HIKER",
//     });
// });

// 配置4: pug路由 | 结构化( 完成笔记 )
router.get("/", viewsControllers.getOverview);
router.get("/overview", viewsControllers.getOverview);
router.get("/tour/:slug", authControllers.protect, viewsControllers.getTour); // 受保护路由,仅有登陆成功用户可访问,但404页面不完善( 等待改进 )

// 配置登陆页面路由 ( 等待笔记 )
router.get("/login", viewsControllers.getLoginForm);

module.exports = router;
