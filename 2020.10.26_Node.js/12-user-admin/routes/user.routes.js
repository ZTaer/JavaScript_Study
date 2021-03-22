const express = require("express");
const userControllers = require("../controllers/user.controllers");
const authControllers = require("../controllers/auth.controllers");

const router = express.Router();

router.route("/login")
    .post(authControllers.userLogIn);

router.route("/sinup")
    .post(authControllers.userSinUp);

router.route("/")
    .get(authControllers.protect, userControllers.getAllUser);


router.route("/:id")
    .get(userControllers.getItemUser)
    .patch(userControllers.updateItemUser)
    .delete(userControllers.deleteItemUser);

module.exports = router;
