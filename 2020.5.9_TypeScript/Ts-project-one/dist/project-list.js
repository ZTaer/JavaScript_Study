"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* active/finsh列表Class */
class ProjectList {
    constructor(typeState) {
        this.typeState = typeState;
        this.templateElement = document.getElementById("project-list"); // a) 抓取template标签:
        this.hostElemnt = document.querySelector("#app"); // b) 设定渲染位置
        const copyTarget = document.importNode(this.templateElement.content, true); // c) importNode复制目标标签( 核心 ) 
        // 0. content: 获取template标签内的HTML内容
        this.targetElement = copyTarget.firstElementChild; // d) firstElementChild: 获取标签里，第一个开头标签     
        this.targetElement.id = `${this.typeState}-projects`; // 通过id赋予css
        this.configure();
        this.renderContact();
        this.rendering();
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
exports.default = ProjectList;
//# sourceMappingURL=project-list.js.map