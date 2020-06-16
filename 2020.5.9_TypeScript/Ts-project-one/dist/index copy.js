"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
console.log(" ------ start ------ ");
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
    ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
})(ProjectStatus || (ProjectStatus = {}));
/* Project数据class */
var Project = /** @class */ (function () {
    function Project(id, title, des, people, status) {
        this.id = id;
        this.title = title;
        this.des = des;
        this.people = people;
        this.status = status;
    }
    return Project;
}());
/* 状态管理class */
var ProjectState = /** @class */ (function () {
    function ProjectState() {
        this.listeners = []; // 外置函数
        this.projects = [];
    }
    ProjectState.getInstance = function () {
        if (ProjectState.instance) {
            return this.instance;
        }
        return this.instance = new ProjectState();
    };
    // 添加渲染的外置函数
    ProjectState.prototype.addListeners = function (listeners) {
        this.listeners.push(listeners);
    };
    ProjectState.prototype.addProjectItem = function (item) {
        var title = item.title, des = item.des, people = item.people;
        var pushItem = new Project(Math.random().toString(), title, des, people, ProjectStatus.Active);
        this.projects.push(pushItem);
        // listenerFn执行this.listeners的函数，在此位置能保证，每一次数据发生改变都进行渲染页面
        for (var _i = 0, _a = this.listeners; _i < _a.length; _i++) {
            var listenerFn = _a[_i];
            console.log(listenerFn);
            listenerFn(__spreadArrays(this.projects));
        }
    };
    return ProjectState;
}());
/* listener逻辑( 完成补充 - 此逻辑虽然看似屌爆，但其实并未考虑到数据结构问题，实属下策，不推荐使用 ) */
// 0. 初始化projectState
var projectState = ProjectState.getInstance();
// 1. 构建projectState.addListeners使指定函数加入到projectState.listeners中
// 2. ProjectList 在初始化时,将运行projectState.addListeners使“负责渲染li内容的函数”加入projectState.listeners中
// 3. projectState迭代的this.listeners中的listenerFn( this.projects )目的就是运行启函数, 将projects中的item使函数进行渲染
// 4. 如果将这个this.listeners迭代放入projectState.addProjectItem函数中
// 5. 而projectState.addProjectItem因每一次"表单提交"都将运行此函数，所以就会每一次数据发生改变都将重新渲染
/* 表单Class */
var ProjectInput = /** @class */ (function () {
    function ProjectInput() {
        /* <template>标签: 配合JS渲染( 等待笔记 ) */
        // a) template: 标签默认在html文件中不渲染
        // b) 真正的内容: 抓取的template.content,获取template真正的内容，在通过document.importNode配合复制
        // c) 渲染: 
        // 0. insertAdjacentElement方式渲染
        // 1. appedChildren方式渲染 
        this.templateElement = document.getElementById("project-input"); // a) 抓取template标签:
        this.hostElemnt = document.querySelector("#app"); // b) 设定渲染位置
        var copyTarget = document.importNode(this.templateElement.content, true); // c) importNode复制目标标签( 核心 ) 
        // 0. content: 获取template标签内的HTML内容
        this.formElement = copyTarget.firstElementChild; // d) firstElementChild: 获取标签里，第一个开头标签, 获取template嵌入的标签     
        this.formElement.id = "user-input"; // 通过id赋予css
        // 表单值
        /* 子标签抓取( 等待笔记 - 核心 ) */
        // a) this.foremElement已经被抓取.querySelector("xxx")!; 可直接抓取子标签
        // b) document.querySelector("#xxx").querySelector("yyy"); 抓取子标签
        this.formTitleInput = this.formElement.querySelector("#title");
        this.formDesInput = this.formElement.querySelector("#description");
        this.formPeopleInput = this.formElement.querySelector("#people");
        this.configure();
        this.rendering();
    }
    // 验证对象值是否都为真,如果其中之一为假，则返回假( 等待笔记 - 等待添加 )
    // a) for in 循环对象
    // b) for of 循环数组
    ProjectInput.prototype.objectBoolean = function (obj) {
        var result = true;
        for (var i in obj) {
            if (typeof obj[i] === "string" && !obj[i].trim()) {
                result = false;
                break;
            }
            else if (typeof obj[i] === "number" && !obj[i]) {
                result = false;
                break;
            }
        }
        return result;
    };
    // 验证单个数值/字符串是否合格
    ProjectInput.prototype.valueBollean = function (obj) {
        var result = true;
        if (obj.required) {
            if (!obj.value.toString().trim()) {
                return false;
            }
            if (typeof obj.value == "string") {
                result && obj.maxLength != null ?
                    result = obj.value.length <= obj.maxLength :
                    null;
                result && obj.minLength != null ?
                    result = obj.value.length >= obj.minLength :
                    null;
            }
            else if (typeof obj.value == "number") {
                result && obj.max != null ?
                    result = obj.value <= obj.max :
                    null;
                result && obj.min != null ?
                    result = obj.value >= obj.min :
                    null;
            }
        }
        return result;
    };
    // 获取表单数据
    ProjectInput.prototype.getInputValue = function () {
        var propsInput = {
            title: this.formTitleInput.value,
            des: this.formDesInput.value,
            people: +this.formPeopleInput.value
        };
        var valideTitle = {
            value: propsInput.title,
            required: true,
            minLength: 5,
            maxLength: 50
        };
        var valideDes = {
            value: propsInput.des,
            required: true,
            minLength: 5,
            maxLength: 200
        };
        var validePeople = {
            value: +propsInput.people,
            required: true,
            min: 1,
            max: 10
        };
        if (this.objectBoolean(propsInput) && // 验证是否输入值不为空，否则为false
            this.valueBollean(valideTitle) && // 验证单个表单参数
            this.valueBollean(valideDes) &&
            this.valueBollean(validePeople)) {
            return propsInput;
        }
        return null;
    };
    // 初始化表单值
    ProjectInput.prototype.clearInput = function () {
        this.formTitleInput.value = "";
        this.formDesInput.value = "";
        this.formPeopleInput.value = "";
    };
    // 提交按钮逻辑
    ProjectInput.prototype.handleFormSubmib = function (e) {
        e.preventDefault();
        var inputDate = this.getInputValue();
        if (inputDate) {
            projectState.addProjectItem(inputDate);
        }
        else {
            this.clearInput();
            alert(" 输入错误!! ");
        }
    };
    // 配置监听
    ProjectInput.prototype.configure = function () {
        var _this = this;
        this.formElement.addEventListener("submit", function (e) { return _this.handleFormSubmib(e); });
    };
    // 配置渲染
    ProjectInput.prototype.rendering = function () {
        this.hostElemnt.insertAdjacentElement('afterbegin', this.formElement); // 老朋友，渲染，不多说
    };
    return ProjectInput;
}());
/* Component class渲染目标 */
var Component = /** @class */ (function () {
    function Component(templateId, hostId, insertPos, newElementId) {
        this.templateElement = document.getElementById(templateId);
        this.hostElemnt = document.getElementById(hostId);
        var copyTarget = document.importNode(this.templateElement.content, true);
        this.targetElement = copyTarget.firstElementChild;
        if (newElementId) {
            this.targetElement.id = newElementId;
        }
        this.rendering(insertPos);
    }
    Component.prototype.rendering = function (insertPos) {
        this.hostElemnt.insertAdjacentElement(insertPos ? "afterbegin" : "beforeend", this.targetElement);
    };
    return Component;
}());
/* active/finsh列表Class( 因无webpack进行加工，故在同一个文件内 ) */
var ProjectList = /** @class */ (function () {
    function ProjectList(typeState) {
        var _this = this;
        this.typeState = typeState;
        this.assignedProjects = []; // listeners( 等待笔记 )
        this.templateElement = document.getElementById("project-list"); // a) 抓取template标签:
        this.hostElemnt = document.querySelector("#app"); // b) 设定渲染位置
        var copyTarget = document.importNode(this.templateElement.content, true); // c) importNode复制目标标签( 核心 ) 
        // 0. content: 获取template标签内的HTML内容
        this.targetElement = copyTarget.firstElementChild; // d) firstElementChild: 获取标签里，第一个开头标签     
        this.targetElement.id = this.typeState + "-projects";
        // 通过id赋予css
        // 初始化准备，将渲染组件加入到，状态管理class                                               
        projectState.addListeners(function (projects) {
            _this.assignedProjects = projects.filter(function (e) {
                if (typeState === "active") {
                    return e.status === ProjectStatus.Active;
                }
                else {
                    return e.status === ProjectStatus.Finished;
                }
            }); // 根据不同的渲染列表分清渲染目标( 表单状态值，默认为action类 )
            _this.renderProjects();
        });
        this.configure();
        this.renderContact();
        this.rendering();
    }
    ProjectList.prototype.renderProjects = function () {
        var listEl = document.getElementById(this.typeState + "-projects-list");
        listEl.innerHTML = ''; // 初始化，防止重复渲染
        for (var _i = 0, _a = this.assignedProjects; _i < _a.length; _i++) {
            var item = _a[_i];
            var listItem = document.createElement("li");
            listItem.textContent = item.title;
            listEl.appendChild(listItem);
        }
    };
    ProjectList.prototype.renderContact = function () {
        var listId = this.typeState + "-projects-list";
        this.targetElement.querySelector("ul").id = listId;
        this.targetElement.querySelector("h2").textContent = this.typeState.toUpperCase() + " \u9879\u76EE";
    };
    // 配置监听
    ProjectList.prototype.configure = function () {
    };
    // 配置渲染
    ProjectList.prototype.rendering = function () {
        this.hostElemnt.insertAdjacentElement("beforeend", this.targetElement);
    };
    return ProjectList;
}());
var projectOne = new ProjectInput();
var projectActive = new ProjectList("active");
var projectFinished = new ProjectList("finished");
//# sourceMappingURL=index copy.js.map