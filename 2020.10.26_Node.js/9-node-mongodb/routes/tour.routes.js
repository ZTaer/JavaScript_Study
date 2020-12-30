const express = require("express");
const {
    checkId,
    getAllTours,
    getAddItemTours,
    getItemTours,
    updateItemTours,
    deleteItemTours,
    checkToursBody,
    checkToursBody2,
} = require("../controllers/tour.controllers");

const router = express.Router();

router.route("/")
    .get(getAllTours)
    .post(checkToursBody, getAddItemTours); // 核心

router.route("/:id")
    .get(getItemTours)
    .patch(updateItemTours)
    .delete(deleteItemTours);

module.exports = router;
