"use strict";
console.log(" ------ start ------ ");
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
    ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
})(ProjectStatus || (ProjectStatus = {}));
/* Project数据class */
class Project {
    constructor(id, title, des, people, status) {
        this.id = id;
        this.title = title;
        this.des = des;
        this.people = people;
        this.status = status;
    }
}
/* 状态管理class */
class ProjectState {
    constructor() {
        this.listeners = []; // 外置函数
        this.projects = [];
    }
    static getInstance() {
        if (ProjectState.instance) {
            return this.instance;
        }
        return this.instance = new ProjectState();
    }
    // 添加渲染的外置函数
    addListeners(listeners) {
        this.listeners.push(listeners);
    }
    addProjectItem(item) {
        const { title, des, people } = item;
        const pushItem = new Project(Math.random().toString(), title, des, people, ProjectStatus.Active);
        this.projects.push(pushItem);
        // listenerFn执行this.listeners的函数，在此位置能保证，每一次数据发生改变都进行渲染页面
        for (const listenerFn of this.listeners) {
            console.log(listenerFn);
            listenerFn([...this.projects]);
        }
    }
}
/* listener逻辑( 完成补充 - 此逻辑虽然看似屌爆，但其实并未考虑到数据结构问题，实属下策，不推荐使用 ) */
// 0. 初始化projectState
const projectState = ProjectState.getInstance();
// 1. 构建projectState.addListeners使指定函数加入到projectState.listeners中
// 2. ProjectList 在初始化时,将运行projectState.addListeners使“负责渲染li内容的函数”加入projectState.listeners中
// 3. projectState迭代的this.listeners中的listenerFn( this.projects )目的就是运行启函数, 将projects中的item使函数进行渲染
// 4. 如果将这个this.listeners迭代放入projectState.addProjectItem函数中
// 5. 而projectState.addProjectItem因每一次"表单提交"都将运行此函数，所以就会每一次数据发生改变都将重新渲染
/* 表单Class */
class ProjectInput {
    constructor() {
        /* <template>标签: 配合JS渲染( 完成笔记 ) */
        // a) template: 标签默认在html文件中不渲染
        // b) 真正的内容: 抓取的template.content,获取template真正的内容，在通过document.importNode配合复制
        // c) 渲染: 
        // 0. insertAdjacentElement方式渲染
        // 1. appedChildren方式渲染 
        this.templateElement = document.getElementById("project-input"); // a) 抓取template标签:
        this.hostElemnt = document.querySelector("#app"); // b) 设定渲染位置
        const copyTarget = document.importNode(this.templateElement.content, true); // c) importNode复制目标标签( 核心 ) 
        // 0. content: 获取template标签内的HTML内容
        this.formElement = copyTarget.firstElementChild; // d) firstElementChild: 获取标签里，第一个开头标签, 获取template嵌入的标签     
        this.formElement.id = "user-input"; // 通过id赋予css
        // 表单值
        /* 子标签抓取( 完成笔记 - 核心 ) */
        // a) this.foremElement已经被抓取.querySelector("xxx")!; 可直接抓取子标签
        // b) document.querySelector("#xxx").querySelector("yyy"); 抓取子标签
        this.formTitleInput = this.formElement.querySelector("#title");
        this.formDesInput = this.formElement.querySelector("#description");
        this.formPeopleInput = this.formElement.querySelector("#people");
        this.configure();
        this.rendering();
    }
    // 验证对象值是否都为真,如果其中之一为假，则返回假( 完成笔记 - 完成添加 )
    // a) for in 循环对象
    // b) for of 循环数组
    objectBoolean(obj) {
        let result = true;
        for (let i in obj) {
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
    }
    // 验证单个数值/字符串是否合格
    valueBollean(obj) {
        let result = true;
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
    }
    // 获取表单数据
    getInputValue() {
        const propsInput = {
            title: this.formTitleInput.value,
            des: this.formDesInput.value,
            people: +this.formPeopleInput.value
        };
        const valideTitle = {
            value: propsInput.title,
            required: true,
            minLength: 5,
            maxLength: 50
        };
        const valideDes = {
            value: propsInput.des,
            required: true,
            minLength: 5,
            maxLength: 200
        };
        const validePeople = {
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
    }
    // 初始化表单值
    clearInput() {
        this.formTitleInput.value = "";
        this.formDesInput.value = "";
        this.formPeopleInput.value = "";
    }
    // 提交按钮逻辑
    handleFormSubmib(e) {
        e.preventDefault();
        const inputDate = this.getInputValue();
        if (inputDate) {
            projectState.addProjectItem(inputDate);
        }
        else {
            this.clearInput();
            alert(" 输入错误!! ");
        }
    }
    // 配置监听
    configure() {
        this.formElement.addEventListener("submit", e => this.handleFormSubmib(e));
    }
    // 配置渲染
    rendering() {
        this.hostElemnt.insertAdjacentElement('afterbegin', this.formElement); // 老朋友，渲染，不多说
    }
}
/* Component class渲染目标 */
class Component {
    constructor(templateId, hostId, insertPos, newElementId) {
        this.templateElement = document.getElementById(templateId);
        this.hostElemnt = document.getElementById(hostId);
        const copyTarget = document.importNode(this.templateElement.content, true);
        this.targetElement = copyTarget.firstElementChild;
        if (newElementId) {
            this.targetElement.id = newElementId;
        }
        this.rendering(insertPos);
    }
    rendering(insertPos) {
        this.hostElemnt.insertAdjacentElement(insertPos ? "afterbegin" : "beforeend", this.targetElement);
    }
}
/* active/finsh列表Class( 因无webpack进行加工，故在同一个文件内 ) */
class ProjectList {
    constructor(typeState) {
        this.typeState = typeState;
        this.assignedProjects = [];
        this.templateElement = document.getElementById("project-list"); // a) 抓取template标签:
        this.hostElemnt = document.querySelector("#app"); // b) 设定渲染位置
        const copyTarget = document.importNode(this.templateElement.content, true); // c) importNode复制目标标签( 核心 ) 
        // 0. content: 获取template标签内的HTML内容
        this.targetElement = copyTarget.firstElementChild; // d) firstElementChild: 获取标签里，第一个开头标签     
        this.targetElement.id = `${this.typeState}-projects`;
        // 通过id赋予css
        // 初始化准备，将渲染组件加入到，状态管理class                                               
        projectState.addListeners((projects) => {
            this.assignedProjects = projects.filter(e => {
                if (typeState === "active") {
                    return e.status === ProjectStatus.Active;
                }
                else {
                    return e.status === ProjectStatus.Finished;
                }
            }); // 根据不同的渲染列表分清渲染目标( 表单状态值，默认为action类 )
            this.renderProjects();
        });
        this.configure();
        this.renderContact();
        this.rendering();
    }
    renderProjects() {
        const listEl = document.getElementById(`${this.typeState}-projects-list`);
        listEl.innerHTML = ''; // 初始化，防止重复渲染
        for (const item of this.assignedProjects) {
            const listItem = document.createElement("li");
            listItem.textContent = item.title;
            listEl.appendChild(listItem);
        }
    }
    renderContact() {
        const listId = `${this.typeState}-projects-list`;
        this.targetElement.querySelector("ul").id = listId;
        this.targetElement.querySelector("h2").textContent = `${this.typeState.toUpperCase()} 项目`;
    }
    // 配置监听
    configure() {
    }
    // 配置渲染
    rendering() {
        this.hostElemnt.insertAdjacentElement("beforeend", this.targetElement);
    }
}
const projectOne = new ProjectInput();
const projectActive = new ProjectList("active");
const projectFinished = new ProjectList("finished");
//# sourceMappingURL=xxx.js.map