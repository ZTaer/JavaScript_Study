const express = require("express");
const { handleApiGetAllUser } = require("../controllers/user.controllers");

const userRouter = express.Router();

userRouter.route("/").get(handleApiGetAllUser);

module.exports = userRouter;
