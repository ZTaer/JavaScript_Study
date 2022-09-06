const express = require("express");
const {
    handleApiAddTour, handleApiGetAllTour, handleApiGetTourItem, handleApiUpdateTourItem, handleApiDeleteTourItem,
} = require("../controllers/tour.controller");

/**
 * 路由管理
 */
const tourRouter = express.Router();

tourRouter.route("/").get(handleApiGetAllTour).post(handleApiAddTour);
tourRouter.route("/:id").get(handleApiGetTourItem).patch(handleApiUpdateTourItem).delete(handleApiDeleteTourItem);

module.exports = tourRouter;
