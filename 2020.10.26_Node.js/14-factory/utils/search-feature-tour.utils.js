
/**
 * 构建utils: Class方法高级API查询数据 ( 完成笔记 )
 *      注意: 功能函数"return this;"否则将函数功能将不起作用
 */
class SearchFeatureTour {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
        this.pageInfo = {
            total: 0
        }
    }

    // a) 分离字段 
    //      0. 目的: 将功能字段与，查询字段进行分离，分开做逻辑，维护性更好 
    filter = () => {
        const urlQuery = { ...this.queryString };
        const exdFiles = ["page", "limit", "sort", "fields"];
        exdFiles.forEach((cur) => delete urlQuery[cur]); // 目的: 将url入参加工，仅保留不存在于exdFiles中的字段

        // 加工查询命令
        let queryStr = JSON.stringify(urlQuery);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (cur) => `$${cur}`); // 目的: 替换字符串为指定字段: 如 gte --> $gte , 这样JSON.parse解析后可用在mongoose命令查询数据
        queryStr = JSON.parse(queryStr);
        
        this.query = this.query.find( queryStr );
        return this;
    }

    // b) 数据排序 
    sort = () => {
         if (this.queryString.sort) {
            const sortStr = (this.queryString.sort).split(",").join(" ");
            console.log("~促发排序~", sortStr);

            this.query = this.query.sort(sortStr);
        } else {
            this.query = this.query.sort("-createdAt"); // 默认以创建数据的时间排序
        }

        return this;
    }

    // c) 限制字段
    fields = () => {
        if (this.queryString.fields) {
            const fieldsStr = (this.queryString.fields).split(",").join(" ");
            console.log("~促发限制字段~", fieldsStr);
            this.query = this.query.select(fieldsStr);
        } else {
            this.query = this.query.select("-__v");
        }

        return this;
    }

    // d) 分页
    page = () => {
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 5;
        const skip = (page - 1) * limit; // 分页计算公式 ( 核心 )

        this.query = this.query.skip(skip).limit(limit);

        return this;
    }

}

module.exports = SearchFeatureTour;
