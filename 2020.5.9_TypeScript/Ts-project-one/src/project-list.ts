
/* active/finsh列表Class */
class ProjectList {
    templateElement: HTMLTemplateElement;   // <template>标签
    hostElemnt: HTMLDivElement;             // <div>标签
    targetElement: HTMLElement;           // <form>标签

    constructor( public typeState: "active" | "finished" ){

        this.templateElement = <HTMLTemplateElement>document.getElementById("project-list")!;  // a) 抓取template标签:
        this.hostElemnt = <HTMLDivElement>document.querySelector("#app")!;                      // b) 设定渲染位置
        const copyTarget = document.importNode( this.templateElement.content, true )!;          // c) importNode复制目标标签( 核心 ) 
                                                                                                    // 0. content: 获取template标签内的HTML内容
        this.targetElement = <HTMLElement>copyTarget.firstElementChild;                       // d) firstElementChild: 获取标签里，第一个开头标签     
        this.targetElement.id = `${this.typeState}-projects`;                                                     // 通过id赋予css

        this.configure();
        this.renderContact();
        this.rendering();
    }


    private renderContact(){
        const listId = `${this.typeState}-projects-list`;
        this.targetElement.querySelector("ul")!.id = listId;
        this.targetElement.querySelector("h2")!.textContent = `${this.typeState.toUpperCase()} 项目`;
    }

    // 配置监听
    private configure(){

    }

    // 配置渲染
    private rendering(){
        this.hostElemnt.insertAdjacentElement( "beforeend", this.targetElement );  
    }

}

export default ProjectList;
