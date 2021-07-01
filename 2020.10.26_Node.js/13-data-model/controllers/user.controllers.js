const fs = require("fs");
const catchAsync = require("../utils/catch-async.utils");
const User = require("../models/user.models");
const AppError = require("../utils/app-error.utils");

const tour = JSON.parse(fs.readFileSync(`${__dirname}/../data/tours.json`, "utf-8"));

// user相关API模拟
exports.getAllUser = catchAsync(async (_req, res, next) => {
    const data = await User.find();
    if (!data) return next(new AppError("get all user error", 400));

    res.status(200).json({
        status: "success",
        results: data.length,
        data,
    });
});


exports.getItemUser = (req, res) => {
    const { id } = req.params;
    const tourItem = tour.find((item) => item._id === id);

    if (!id || !tourItem) {
        res.status(404).json({
            status: "fail",
            data: "Not find !",
        });
    }

    res.status(200).json({
        status: "success",
        data: "user item !",
    });
};

exports.createItemUser = (req, res) => {
    const { id } = req.params;
    const tourItem = tour.find((item) => item._id === id);

    if (!id || !tourItem) {
        res.status(404).json({
            status: "fail",
            data: "Create fail !",
        });
    }

    res.status(200).json({
        status: "success",
        data: {
            tour: "Create user success !",
        },
    });
};

exports.updateItemUser = (req, res) => {
    const { id } = req.params;
    const tourItem = tour.find((item) => item._id === id);

    if (!id || !tourItem) {
        res.status(404).json({
            status: "fail",
            data: "Update fail !",
        });
    }

    res.status(200).json({
        status: "success",
        data: {
            tour: "Update user success !",
        },
    });
};

exports.deleteItemUser = (req, res) => {
    const { id } = req.params;
    const tourItem = tour.find((item) => item._id === id);

    if (!id || !tourItem) {
        res.status(404).json({
            status: "fail",
            data: "Delete fail !",
        });
    }

    res.status(204).json({
        status: "success",
        data: null,
    });
};
