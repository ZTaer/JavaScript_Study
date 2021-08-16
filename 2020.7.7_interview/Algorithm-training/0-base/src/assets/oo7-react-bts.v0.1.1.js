// Github: https://github.com/ZTaer/OO7-BTS

//////////////////// 1. 字符串类-BGN
export class OO7Str {
  // 1-0
  static clearString = ({
    date,
    all = true,
    trim = false,
    left = false,
    right = false,
    upper = false,
    lower = false,
    clear = false
  }) => {
    let result = null;
    if (date && typeof date === "string") {
      // 预防逻辑错误
      trim || left || right ? (all = false) : (all = true);
      if (left && right) {
        trim = true;
        left = false;
        right = false;
      }
      if (upper && lower) {
        upper = false;
        lower = false;
      }

      result = all ? date.replace(/\s*/g, "") : result;
      result = trim ? date.trim() : result;
      result = left ? date.replace(/^\s*/, "") : result;
      result = right ? date.replace(/(\s*$)/g, "") : result;
      result = upper ? result.toUpperCase() : result;
      result = lower ? result.toLowerCase() : result;
      result = clear
        ? result.replace(/[[!@#$%^&*()-+\\//?|{><}"';:.~`-]/g, "")
        : result;
    } else {
      return null;
    }

    return result;
  };
  // 1-1
  static regularString = ({
    date,
    onlyAZ = false,
    only09 = false,
    allOut = false,
    ...otherClearSpace
  }) => {
    let result = {};
    if (typeof date === "string") {
      date = OO7Str.clearString({
        date: date,
        all: false,
        trim: true,
        ...otherClearSpace
      });

      if (allOut || (only09 && onlyAZ)) {
        onlyAZ = true;
        only09 = true;
        allOut = true;
      }

      if (!onlyAZ && !only09) {
        return date;
      }

      onlyAZ
        ? (result["onlyAZ"] = date.replace(/[^a-zA-Z]/gi, ""))
        : (onlyAZ = false);
      only09
        ? (result["only09"] = date.replace(/[^\d]/g, ""))
        : (only09 = false);
    }
    return result;
  };
}

//////////////////// 1. 字符串类-BGN

//////////////////// 2. 计算类-BGN
export class OO7Cul {
  // 2-0
  static objectBoolean(obj) {
    let result = true;
    for (let i in obj) {
      if (typeof obj[i] === "string" && !obj[i].trim()) {
        result = false;
        break;
      } else if (typeof obj[i] === "number" && !obj[i]) {
        result = false;
        break;
      }
    }
    return result;
  }
  // 2-1
  static nodelistForEach = function(list, callback) {
    for (let cur of list) {
      callback(cur);
    }
  };

  // 2-2
  static arrayToObject = ({
    date,
    key = "id",
    keyName = "keyName",
    ...other
  }) => {
    let result = {};
    let objKey = "";

    if (date) {
      for (let item of date) {
        objKey = item[key]
          ? item[key].toString()
          : (1 + Math.random()).toString();
        objKey = OO7Str.clearString({
          date: objKey,
          ...other
        });
        result[objKey] = item; // 添加属性
        // 内容为对象类型时，加入当前键值属性
        if (item instanceof Object && typeof keyName === "string") {
          result[objKey][keyName] = objKey;
        }
      }
    }
    return result;
  };

  // 2-3
  static objectToArray = ({ date, keyName = "keyName" }) => {
    let result = [];

    if (date && date instanceof Object) {
      let nowItem;
      for (let item in date) {
        nowItem = date[item];
        if (nowItem instanceof Object && typeof keyName === "string") {
          nowItem[keyName] = item;
        }
        result.push(nowItem);
      }
    }

    return result;
  };

  // 2-4
  static sortArray = ({
    date,
    smallToBig = false,
    bigToSmall = false,
    allOut = false
  }) => {
    let result = {};
    if (date instanceof Array && date.length > 1) {
      let copyDate = [...date];

      // 预防逻辑错误
      if (allOut || (smallToBig && bigToSmall)) {
        smallToBig = true;
        bigToSmall = true;
        allOut = true;
      }

      if (typeof copyDate[0] === "string") {
        // sort对字母排序
        copyDate.sort((a, b) => {
          // 之所以使用OO7Str.regularString是因为让字符串仅保留字母
          const nameA = OO7Str.regularString({
            date: a,
            onlyAZ: true,
            upper: true
          }).onlyAZ;
          const nameB = OO7Str.regularString({
            date: b,
            onlyAZ: true,
            upper: true
          }).onlyAZ;

          console.log(nameA, nameB);
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0; // sort返回0代表不排序
        });
      } else if (typeof copyDate[0] === "number") {
        // sort对数字排序
        copyDate.sort((a, b) => a - b);
      } else {
        result = null;
      }

      // 根据条件输出
      smallToBig ? (result["smallToBig"] = copyDate) : (smallToBig = false);
      bigToSmall
        ? (result["bigToSmall"] = [...copyDate].reverse())
        : (bigToSmall = false);
    }
    return result;
  };

  // 2-5:
  static sortArrayObjectKey = ({
    date,
    key,
    smallToBig = false,
    bigToSmall = false,
    allOut = false
  }) => {
    let result = {};
    if (date instanceof Array && date.length > 1) {
      let copyDate = [...date];

      // 预防逻辑错误
      if (allOut || (smallToBig && bigToSmall)) {
        smallToBig = true;
        bigToSmall = true;
        allOut = true;
      }

      if (typeof copyDate[0][key] === "string") {
        copyDate.sort((a, b) => {
          // 之所以使用OO7Str.regularString是因为让字符串仅保留字母
          const nameA = OO7Str.regularString({
            date: a[key] ? a[key] : `No_${key}`,
            onlyAZ: true,
            upper: true
          }).onlyAZ;
          const nameB = OO7Str.regularString({
            date: b[key],
            onlyAZ: true,
            upper: true
          }).onlyAZ;

          console.log(nameA, nameB);
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0; // sort返回0代表不排序
        });
      } else if (typeof copyDate[0][key] === "number") {
        copyDate.sort((a, b) => a[key] - b[key]);
      } else {
        return null;
      }

      smallToBig ? (result["smallToBig"] = copyDate) : (smallToBig = false);
      bigToSmall
        ? (result["bigToSmall"] = [...copyDate].reverse())
        : (bigToSmall = false);
    }

    return result;
  };

  // 2-6:
  static sortArrayObjectMoreKey = ({
    date,
    key = [],
    smallToBig = false,
    bigToSmall = false,
    allOut = false
  }) => {
    let result = {};

    if (date instanceof Array && date.length > 1) {
      let copyDate = [...date];

      // 预防逻辑错误
      if (allOut || (smallToBig && bigToSmall)) {
        smallToBig = true;
        bigToSmall = true;
        allOut = true;
      }

      for (let item of key) {
        result[item] = OO7Cul.sortArrayObjectKey({
          date: copyDate,
          key: item,
          smallToBig: smallToBig,
          bigToSmall: bigToSmall,
          allOut: allOut
        });
      }
    } else {
      return null;
    }

    return result;
  };
}
//////////////////// 2. 计算类-END
