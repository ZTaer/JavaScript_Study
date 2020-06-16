console.log("--- start ---");
/**
 * 拖动( 完成笔记 )
 * MDN文档:  https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations
 */
// a) 拖动构建核心思路
// b) 拖动目标配置:
    // 0. 开始拖动促发
        // a) 监听"dragstart"
        // b) 函数必备内容: 
            // 0. 拖动传输数据: event.dataTransfer!.setData("text/plain",this.itemId ); // 可以传输文件链接等...
            // 1. 设定拖动类型: event.dataTransfer!.dropEffect = "move";                // 拖动类型有copy等...
    // 1. 结束拖动促发:
        // a) 监听"dragend"
        // b) 函数必备内容:
            // 0. 根据情况可灵活配置
    // 2. HTML属性: 
        // a) 在拖动目标添加: draggable = "true"
        // b) 例: <div class="drag-target" draggable="true" ></div>
// c) 拖动放置区配置:
    // 0. 拖动目标时促发( "dragover"100ms促发一次 )
        // a) 监听"dragover"
        // b) 函数必备内容: 
            // 0. 阻止默认( 核心 ): event.preventDefault();                   // 必须要阻止默认，才会促发drop传输数据，拖动目标才被允许放置( 核心 )
            // 1. 放置区CSS变化: 可以改变放置区样式,更直观的显示可拖放位置       // 拖动类型有copy等...
    // 1. 拖动目标,在放置区松开鼠标时促发
        // a) 监听"drop"
        // b) 函数必备内容: 
            // 0. 获取传输数据: const dragDate = event.dataTransfer!.getData("text/plain");   
            // 1. 根据传输的数据, 改变数据结构, 进行重新渲染目标
            // 2. 恢复放置区CSS变化
    // 2. 拖动目标, 离开放置区促发
        // a) 监听"dragleave"
        // b) 函数必备内容:
            // 0. 根据情况可灵活配置
// c) 了解上方，即可看懂下方实列代码
                                                     
enum ItemStatus {
    ATeam,
    Bteam,
}

interface Item {
    id: string,
    status: ItemStatus,
    text: string,
}

/* 组件item蓝图 */
abstract class Component<T extends HTMLElement ,U extends HTMLElement> {
    templateElement: HTMLTemplateElement;
    hostElement: T;
    element: U;

    constructor( templateId: string, hostId: string, itemId: string ){
        this.templateElement = <HTMLTemplateElement>document.getElementById(templateId)!;
        this.hostElement = <T>document.getElementById(hostId)!;
        const copyElement = document.importNode( this.templateElement.content, true );
        this.element = <U>copyElement.firstElementChild;
        itemId ? this.element.id = itemId : null;   // 新ID

        this.rendering( hostId );
    }
    
    rendering( hostId: string ){
        const hostEl = <HTMLElement>document.getElementById( hostId )!;
        hostEl.insertAdjacentElement( "beforeend", this.element );
    }

    // 通常放置监听
    abstract configure(): void;

    // 通常渲染组件加工
    abstract renderContact(): void;
}

/* 单个item蓝图 */
class ProjectItem extends Component<HTMLDivElement,HTMLDivElement> {
    
    constructor( templateId: string, hostId: string, public itemId: string, itemText?: string ){
        super( templateId, hostId, itemId );

        this.configure();
        this.renderContact( itemText );
    }

    dragStartHandler( event: DragEvent ){
        console.log("start",event);
        event.dataTransfer!.setData("text/plain",this.itemId ); // 拖动传输id
        event.dataTransfer!.dropEffect = "move";                // 拖动类型
    }

    dragEndHandler( event: DragEvent ){
        console.log("end",event);
    }

    configure(){
        this.element.addEventListener("dragstart", e=>this.dragStartHandler(e) );
        this.element.addEventListener("dragend", e=>this.dragEndHandler(e) );
    }

    renderContact( itemText?: string ){
        itemText ?
        this.element.innerText = itemText :
        this.element.innerText = "拖动目标";
    };
}

// 存储库
let items: Item[] = [
    {
     id: "xxx",
     status: ItemStatus.ATeam,
     text: "拖动目标 - 1"   
    },
    {
     id: "yyy",
     status: ItemStatus.ATeam,
     text: "拖动目标 - 2"   
    }
];

// 初始化目标容器
function clearAllRender(){
    const target = ["#drag-test-start","#drag-test-end"];
    for( let cur of target ){
        document.querySelector(cur)!.innerHTML = "";
    }
}

// 渲染目标
function allRender( items:Item[] ){
    clearAllRender();
    for( let item of items ){
        new ProjectItem( 
            "target-list", 
            item.status === ItemStatus.ATeam ? "drag-test-start" : "drag-test-end",
            item.id, 
            item.text 
        );
    }
}

allRender( items );

/* 非便捷构建拖动 - ( 便捷式构建在下方 ) */
/*
const dragA = document.getElementById("drag-test-start")!;
const dragB = document.getElementById("drag-test-end")!;

dragA.addEventListener("dragover", event=>{
    console.log("over");
    event.preventDefault();                                                        // 必须要阻止默认，才会促发drop传输数据，拖动目标才被允许放置( 核心 )
    dragA.classList.add("drag-bg");
    dragB.classList.add("drag-bg");
});
dragA.addEventListener("drop", event=>{
    console.log("drop");
    const dragDate = event.dataTransfer!.getData("text/plain");                   // 获取数据,由setDate传递的数据( 完成笔记 )

    items[                                                                        // 改变item状态，使渲染地方不同
        items.findIndex( cur => cur.id === dragDate )
    ].status = ItemStatus.ATeam;

    allRender( items );
    
    console.log(dragDate);
    dragA.classList.remove("drag-bg");
    dragB.classList.remove("drag-bg"); 
});
dragA.addEventListener("dragleave", _=>{
    console.log("leave");
});


dragB.addEventListener("dragover", event=>{
    console.log("over");
    event.preventDefault();                                                        // 必须要阻止默认，才被允许放置( 核心 )
    dragA.classList.add("drag-bg");
    dragB.classList.add("drag-bg");
});
dragB.addEventListener("drop", event=>{
    console.log("drop",event);
    const dragDate = event.dataTransfer!.getData("text/plain");                   // 获取数据( 完成笔记 )
    console.log(dragDate);
    dragA.classList.remove("drag-bg");
    dragB.classList.remove("drag-bg"); 

    items[
        items.findIndex( cur => cur.id === dragDate )
    ].status = ItemStatus.Bteam;

    allRender( items );
});
dragB.addEventListener("dragleave", _=>{
    console.log("leave");
});
*/

/* 便捷式构建拖动 */
// a) 总体思路:
    // 0. document.querySelectorAll抓取多个目标，并转换为数组类型数据
    // 1. 构建nodeListForEach回调函数
    // 2. nodeListForEach迭代监听处理拖动函数
    // 3. nodeListForEach迭代添加删除放置区css样式
const dropZoneArray = [ "#drag-test-start", "#drag-test-end" ];
const domDropZone = document.querySelectorAll( dropZoneArray.toString() )!;
const domDropZoneArray: HTMLDivElement[] =  Array.prototype.slice.call(domDropZone);    // 转换为数组( 核心 )

const nodeListForEach = function( list:any[], callback:(cur:any)=>void ){               // 回调函数( 核心 )
    for( let cur of list ){
        callback( cur );                
    };
}

nodeListForEach( domDropZoneArray, targetZone=>{

    targetZone.addEventListener("dragover",event=>{
        event.preventDefault(); // 保证drop正常工作( 核心必备 )
        nodeListForEach( domDropZoneArray, cur=>cur.classList.add("drag-bg") ); 
    });

    targetZone.addEventListener("drop",(event:any)=>{

        const dragDate = event.dataTransfer!.getData("text/plain");
        const itemIndex = items.findIndex( cur => cur.id === dragDate );
        const item = items[+itemIndex];

        const nowPos:any = <HTMLElement>document.getElementById( item.id )!;
        if( nowPos.parentNode.id !== event.target.id ){ // 保证拖动目标，被移动到放置区，才进行重新渲染( 若相同ID代表，拖动目标并为到达放置区，因此无需渲染 )
            item.status === ItemStatus.ATeam ? items[itemIndex].status = ItemStatus.Bteam : items[itemIndex].status = ItemStatus.ATeam;
            allRender( items );
        }
        nodeListForEach( domDropZoneArray, cur=>cur.classList.remove("drag-bg") ); 
    });

    targetZone.addEventListener("dragleave",_=>{
        return;
    });

} );
