import "./sass-button.styles.scss";
class HelloButton {
    render(){
        const button = document.createElement('button');
        button.innerText = 'Sass Button';
        button.classList.add('sass-button');           // 标签class名
        const body = document.querySelector('body');

        button.onclick = () => {                               // 单击后增加css的class名，并渲染P标签到body
            button.classList.add('sass-button-click');
            const addP = document.createElement('p');
            addP.innerHTML = '单击了按钮';
            body.appendChild(addP);
        }

        body.appendChild(button);                       // 渲染位置
    }
}

export default HelloButton;