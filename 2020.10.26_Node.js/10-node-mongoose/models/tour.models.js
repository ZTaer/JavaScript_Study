const mongoose = require("mongoose");

/**
 * Mongoose.Schema: 强大的数据效验功能 | 临时总结  ( 完成笔记 )
 *      a) new mongoose.Schema({ ...xxx }): 构建Schema
 *      b) {}属性功能:
 *          0. type: 指定数据类型
 *              a) String: 字符串类型
 *              b) Number: 数字类型
 *              c) Bollen: 布尔类型
 *              d) Date: 时间类型
 *              e) [xxx]: xxx Array类型
 *                  0. [Date]: 时间Array类型
 *                  1. [String]: 字符串Array类型
 *          1. required: 是否必填
 *              a) 报错提示写法: [ true, '报错信息' ]
 *          2. unique: 是否唯一
 *              a) 意思: 当前属性，不可重复出现在数据库中
 *          3. trim: 清除字符串，二端空格
 *          4. default: 默认值
 *          5. select: 永远限制不展示字段: 在Mongoose.Schema设定select: false无论任何情况都将不输出此字段数据
 */

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required!"],
        unique: true,
        trim: true,
    },
    duration: {
        type: Number,
        required: [true, "duration is required!"],
    },
    maxGroupSize: {
        type: Number,
        required: [true, "duration is required!"],
    },
    difficulty: {
        type: String,
        required: [true, "difficulty is required!"],
    },
    rating: {
        type: Number,
        default: 4.5,
    },
    ratingsAverage: {
        type: Number,
        default: 4.5,
    },
    ratingsQuantity: {
        type: Number,
        default: 0,
    },
    price: {
        type: Number,
        default: 5,
    },
    summary: {
        type: String,
        trim: true,
        required: [true, "summary is required!"],
    },
    description: {
        type: String,
        trim: true,
        required: [true, "description is required!"],
    },
    imageCover: {
        type: String,
        trim: true,
        required: [true, "imageCover is required!"],
    },
    images: {
        type: [String],
        required: [true, "images required!"],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false,
    },
    startDates: {
        type: [Date],
    },
});

const Tour = mongoose.model("tours", tourSchema);

module.exports = Tour;

