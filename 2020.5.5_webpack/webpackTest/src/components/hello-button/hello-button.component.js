import "./hello-button.styles.css";
// 原生JS构建组件，模仿react组件( 完成笔记 )
class HelloButton {
    render(){
        const button = document.createElement('button');
        button.innerText = 'Hello Button';
        button.classList.add('hello-button');           // 标签class名
        const body = document.querySelector('body');

        button.onclick = () => {                               // 单击后增加css的class名，并渲染P标签到body
            button.classList.add('hello-button-click');
            const addP = document.createElement('p');
            addP.innerHTML = '单击了按钮';
            body.appendChild(addP);
        }

        body.appendChild(button);                       // 渲染位置
    }
}

export default HelloButton;