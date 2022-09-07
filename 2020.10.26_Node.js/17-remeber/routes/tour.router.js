const express = require("express");
const {
    handleApiAddTour, handleApiGetAllTour, handleApiGetTourItem, handleApiUpdateTourItem, handleApiDeleteTourItem,
} = require("../controllers/tour.controller");

/**
 * 路由管理
 */
const router = express.Router();

// 根据url入参,局部中间件
router.param("id", (req, res, next, val) => {
    console.log("根据url入参,局部中间件 :>> ", val);
    next();
});

router.route("/").get(handleApiGetAllTour).post(handleApiAddTour);
router.route("/:id").get(handleApiGetTourItem).patch(handleApiUpdateTourItem).delete(handleApiDeleteTourItem);

module.exports = router;
