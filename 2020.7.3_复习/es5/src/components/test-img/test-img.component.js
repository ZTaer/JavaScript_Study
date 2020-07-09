import "./test-img-styles.scss";

class TestImg {
    render( target='body',imgSrc=hack ){
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt="test";
        img.classList.add('hack-img');

        const body = document.querySelector(target);
        body.appendChild(img);
    }
}

export default TestImg;