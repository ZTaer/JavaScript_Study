const fs = require("fs");

const tour = JSON.parse(fs.readFileSync(`${__dirname}/../data/tours.json`, "utf-8"));

// user相关API模拟
exports.getAllUser = (req, res) => {
    console.log("返回所有的数据!");

    res.status(200).json({
        status: "success",
        nowTime: req.nowTime,
        data: "all user!",
    });
};


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
