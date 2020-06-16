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
        this.upDateListeners(); // 保证渲染
    }
    // 针对拖动status数据改变: 针对拖动的目标ID进行status的改变
    moveProjectItem(projectId, newStatus) {
        const projectItem = this.projects.find(cur => cur.id === projectId);
        if (projectItem && projectItem.status !== newStatus) { // 找到对应id数据在进行，状态改变以及重新渲染
            projectItem.status = newStatus;
            this.upDateListeners();
        }
    }
    // 渲染: 每一次数据发生改变都进行渲染页面
    upDateListeners() {
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
/* 表单Class */
class ProjectInput extends Component {
    constructor() {
        super("project-input", "app", true, "user-input");
        this.formTitleInput = this.targetElement.querySelector("#title");
        this.formDesInput = this.targetElement.querySelector("#description");
        this.formPeopleInput = this.targetElement.querySelector("#people");
        this.configure();
        this.rendering();
    }
    renderContact() { }
    ;
    // 验证对象值是否都为真,如果其中之一为假，则返回假( 完成笔记 - 完成添加 )
    // a) for in 循环迭代对象
    // b) for of 循环迭代数组
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
        this.targetElement.addEventListener("submit", e => this.handleFormSubmib(e));
    }
    // 配置渲染
    rendering() {
        this.hostElemnt.insertAdjacentElement('afterbegin', this.targetElement); // 老朋友，渲染，不多说
    }
}
// ProjectItem Class 渲染project item组件
class ProjectItem extends Component {
    constructor(hostId, project) {
        super("single-project", hostId, false, project.id);
        this.project = project;
        this.configure();
        this.renderContact();
    }
    /* 拖动Start/End( 完成笔记 ) */
    // a) 拖动监听: addEventListener(" 参数 ",()=>{})
    // 0. 参数: dragstart,监听到开始拖动促发
    // 1. 参数: dragend,监听到拖动结束促发
    dragStartHandler(event) {
        event.dataTransfer.setData("text/plain", this.project.id); // 传输拖动数据setData( "数据类型", 传输的数据 )
        event.dataTransfer.effectAllowed = 'move'; // 告诉鼠标，要移动了
    }
    ;
    dragEndHandler(event) {
        console.log("end", event);
    }
    configure() {
        this.targetElement.addEventListener("dragstart", e => this.dragStartHandler(e));
        this.targetElement.addEventListener("dragend", e => this.dragEndHandler(e));
    }
    ;
    // project item 渲染内容
    renderContact() {
        this.targetElement.querySelector("h2").textContent = this.project.title;
        this.targetElement.querySelector("h3").textContent = this.project.people.toString() + " 人";
        this.targetElement.querySelector("p").textContent = this.project.des;
    }
    ;
}
/* active/finsh列表Class( 因无webpack进行加工，故在同一个文件内 ) */
class ProjectList extends Component {
    constructor(typeState) {
        super("project-list", "app", true, `${typeState}-projects`);
        this.typeState = typeState;
        this.assignedProjects = []; // listeners( 完成笔记 )
        this.configure();
        this.renderContact();
    }
    /* 拖动时：促发( 完成笔记 ) */
    // a) addEventListener( "参数", ()=>{} )
    // 0. 参数: dragover - 拖动时促发
    // 1. 参数: drop - 
    // 2. 参数: dragleave - 拖动离开源位置时促发
    dragOverHandler(event) {
        if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") { // 验证是否允许拖动( 完成笔记 )
            event.preventDefault(); // 阻止默认处理，游戏规则
            const listEl = this.targetElement.querySelector("ul"); // 拖动时，改变下组件颜色
            listEl.classList.add("droppable");
        }
    }
    ;
    dragHandler(event) {
        console.log("drop");
        const dragDate = event.dataTransfer.getData("text/plain"); // 获取数据( 完成笔记 )
        projectState.moveProjectItem(// 拖动放置时，改变数据status，并渲染( 拖动改变数据 - 核心 )
        dragDate, this.typeState === "active" ? ProjectStatus.Active : ProjectStatus.Finished);
    }
    ;
    dragLeaveHandler(_) {
        const listEl = this.targetElement.querySelector("ul");
        listEl.classList.remove("droppable");
    }
    ;
    configure() {
        this.targetElement.addEventListener("dragover", e => this.dragOverHandler(e)); // 拖动时促发
        this.targetElement.addEventListener("drop", e => this.dragHandler(e)); // 拖动放置目标时促发( 等待补充 )
        this.targetElement.addEventListener("dragleave", e => this.dragLeaveHandler(e)); // 拖动离开源位置时促发 
        // 初始化准备，将渲染组件加入到，状态管理class                                               
        projectState.addListeners((projects) => {
            this.assignedProjects = projects.filter(e => {
                if (this.typeState === "active") {
                    return e.status === ProjectStatus.Active;
                }
                else {
                    return e.status === ProjectStatus.Finished;
                }
            }); // 根据不同的渲染列表分清渲染目标( 表单状态值，默认为action类 )
            this.renderProjects();
        });
    }
    renderProjects() {
        const listEl = document.getElementById(`${this.typeState}-projects-list`);
        listEl.innerHTML = ''; // 初始化，防止重复渲染
        for (const item of this.assignedProjects) {
            new ProjectItem(`${this.typeState}-projects-list`, item);
        }
    }
    renderContact() {
        const listId = `${this.typeState}-projects-list`;
        this.targetElement.querySelector("ul").id = listId;
        this.targetElement.querySelector("h2").textContent = `${this.typeState.toUpperCase()} 项目`;
    }
}
const projectOne = new ProjectInput();
const projectActive = new ProjectList("active");
const projectFinished = new ProjectList("finished");
//# sourceMappingURL=index.js.map