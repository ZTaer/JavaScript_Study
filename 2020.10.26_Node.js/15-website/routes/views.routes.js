const express = require("express");
const viewsControllers = require("../controllers/views.controller");

const router = express.Router();

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
router.get("/tour/:slug", viewsControllers.getTour);

module.exports = router;
