import "./header.styles.scss";
class header {
    render( nowPages ){
        const h1 = document.createElement('h1');
        h1.innerText = `当前页面为${nowPages}`;
        h1.classList.add('header-title');

        const body = document.querySelector('body');
        body.appendChild(h1);
    }
}

export default header;