import "./header.styles.scss";
class Header {
    render(){
        const headerH1 = document.createElement('h1');
        headerH1.innerHTML = '我是标题H1';
        headerH1.classList.add('header-h1');
        const body = document.querySelector('body');
        body.appendChild(headerH1);
    }

}

export default Header;