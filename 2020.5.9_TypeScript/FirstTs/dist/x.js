"use strict";
// "!"：标记告诉ts不用担心，我们将抓取此目标，无需报错( 完成笔记 )
var buttonTarget = document.querySelector('.test-click');
buttonTarget.addEventListener('click', function () {
    console.log('Click - test');
    buttonTarget.innerHTML = "test";
});
// 抓取多个目标
var buttonTest = document.querySelectorAll('.test-click');
// 迭代抓取的目标: 目的是方便addEventListener监听所有选中的目标
var nodeListForEach = function (list, callback) {
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var cur = list_1[_i];
        callback(cur);
    }
};
nodeListForEach(buttonTest, function (cur) {
    cur.addEventListener('click', function () {
        nodeListForEach(buttonTest, function (cur) { return cur.classList.remove('xxx'); }); // 初始化class名称
        var dataNum = cur.dataset.test; // 抓取data-test的值
        if (dataNum == '11') {
            cur.classList.add('xxx');
        }
        else if (dataNum == '22') {
            cur.classList.add('xxx');
        }
    });
});
//# sourceMappingURL=x.js.map