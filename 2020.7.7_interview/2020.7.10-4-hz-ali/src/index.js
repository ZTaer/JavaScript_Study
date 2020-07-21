/**
 *  题目一 
 */
/* --------- 找出数组中出现次数超过一半的数字 --------- */
/* 尽量不使用 JS 特有的语法糖，尽量不使用如 Array.sort 等语言特有的方法。*/
/**
 * @param {number[]} arr - 元素内容全部为自然数的数组
 * @return {number} - 返回数组中出现次数超过数组长度一半的自然数，如果没有则返回 -1 
 */
function findMoreThanHalf(arr) {
    // 0. 构建不重复数组
    // 1. 嵌套跌带计数，判断是否大于数组总长度
    // 2. 符合条件输出结果，否则返回-1
    const noSameArr = [...new Set(arr)]
    const arrLong = arr.length;
    let result = -1;
    for (let cur of noSameArr ){
      let sameNum = 0;
      for( let item of arr ){
        cur === item ?
        sameNum++ :
        null;
      };
      sameNum > arrLong*0.5 ?
      result = cur :
      null;
    }
  return result;
}

// 测试用例
console.log(findMoreThanHalf([0,1,2,2])) // -1
console.log(findMoreThanHalf([0,1,2,2,2])) // 2


/**
 * 题目二
 */
/*拆解URL参数中queryString，返回一个 key - item 形式的 object*/
// 入参格式参考：
const url = 'http://sample.com/?a=1&b=2&c=xx&d#hash';
// 出参格式参考：
const result = { a: '1', b: '2', c: 'xx', d: '' };

function querySearch(url) {
    let result = {};
    const arrProps = url.split("#hash")[0].split("?")[1].split("&");
    for(let cur of arrProps){
        const arrCur = cur.split("=");
        arrCur.length === 2 ?
        result[arrCur[0]] = arrCur[1] :
        result[arrCur[0]] = "";
    }
    return result;
}
console.log(
    querySearch( url )
);

/**
 * 题目三
 */
/* 可以将数组转化为树状数据结构，要求程序具有侦测错误输入的能力*/
// 入参格式参考：
const arr = [
  { id: 1, name: 'i1' },
  { id: 2, name: 'i2', parentId: 1 },
  { id: 4, name: 'i4', parentId: 3 },
  { id: 3, name: 'i3', parentId: 2 },
  { id: 5, name: 'i5', parentId: 3 },
  { id: 8, name: 'i8', parentId: 7 }
];

/* 可以将数组转化为树状数据结构，要求程序具有侦测错误输入的能力*/
function buildTree(data) {
    // 设定节点
    let father = data.filter(item => item.parentId == 'undefined' || item.parentId == null)
    let children = data.filter(item => item.parentId !== 'undefined' && item.parentId != null)
 
    // 递归嵌套
    let buildTreeCore = (father, children) => {
        father.forEach((parent) => {
            children.forEach((cur, index) => {
                if(cur.parentId === parent.id) {
                    let item = [ ...children ];
                    item.splice(index, 1)
                    buildTreeCore([cur], item)
                    typeof parent.children !== 'undefined' ? parent.children.push(cur) : parent.children = [cur]
                }
            });
        });
    }
 
  buildTreeCore(father, children);
  return father;
}

console.log(
    buildTree( arr )
);

/**
 * 题目四
 */
const arr4 = [1, 5, 9, 15, 28, 33, 55, 78, 99];
/**
 * 返回最接近输入值的数字，如果有多个，返回最大的那个
 * @param {number} n
 * @return {number}
 */
function findNext(inputNum, arr) {
    // 0. 无重复数组, 减少不必要的计算
    // 1. 通过绝对值迭代判断数字距离 

    const noSameArr = [ ...new Set(arr) ];
    let cur, resultIndex = null, absTargetLong = null;
    
    for( cur = 0; cur < noSameArr.length; cur++ ){
        const nowAbsTargetLong = Math.abs( inputNum - noSameArr[cur] );

        // 初始化索引值，绝对值
        if( resultIndex === null ){
            resultIndex = cur;
            absTargetLong = nowAbsTargetLong;
            continue;
        }

        // 通过绝对值判断，距离
        if( absTargetLong === nowAbsTargetLong && noSameArr[ resultIndex ] < noSameArr[ cur ] ){
            resultIndex = cur;
            absTargetLong = nowAbsTargetLong; 
        }
        else if( absTargetLong > nowAbsTargetLong ){
            resultIndex = cur;
            absTargetLong = nowAbsTargetLong;
        }
    }

    return noSameArr[ resultIndex ];
}

console.log(findNext(44, arr4)); // 55

