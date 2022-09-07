const express = require("express");
const { handleApiGetAllUser, handleApiCreateUser, handleMidAPiAuthCreateUser } = require("../controllers/user.controllers");

const router = express.Router();

router.route("/").get(handleApiGetAllUser).post(handleMidAPiAuthCreateUser, handleApiCreateUser);

module.exports = router;
