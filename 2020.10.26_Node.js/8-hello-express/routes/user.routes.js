const express = require('express');
const userControllers = require('../controllers/user.controllers');

const router = express.Router();

router.route('/')
    .get(userControllers.getAllUser)
    .post(userControllers.createItemUser);


router.route('/:id')
    .get(userControllers.getItemUser)
    .patch(userControllers.updateItemUser)
    .delete(userControllers.deleteItemUser);

module.exports = router;
