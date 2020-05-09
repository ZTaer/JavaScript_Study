import "./test-button.styles.scss";
class TestButton {
    render(){
        const button = document.createElement('button');
        button.innerText = 'TEST';
        button.classList.add('test-button');
        button.onclick = () => {
            button.innerText = 'TEST-Click';
            button.classList.add('test-button-color');
        }
        const body = document.querySelector('body');
        body.appendChild(button);
    }
}

export default TestButton;