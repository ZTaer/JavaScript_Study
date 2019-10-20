import { Animate } from './models/OO7EJS.v1.1';
import watchTab from 'scrollwatch';

// init
const init = () => {
    const oo7Animate = new Animate;

    document.addEventListener('click', cur => {
        if( cur.target.localName == 'h1' ){

            oo7Animate.animateCSS( 'h1','shake', () => console.log( '动画执行完毕' ) );
        }

    } )

    // 监听滚动动画初始化
    let sw = new watchTab({
        watchOnce: true, // 是否开启不重复监听( 关闭则动画将来回执行 )
        infiniteOffset: -500, // 偏移量
        scrollThrottle: 200, // 延迟监听(ms)
        // inViewClass: 'play', // 给当前视图增加类

        onElementInView: function(data) { // 监听当前视图的标签
            oo7Animate.moreAnimateCSS( data.el.id, '#test',['.btn','.card'],'fadeInUp' );
        }
    });

}

window.addEventListener( 'load', init );


let bv;
oo7.backgroundVideo( bv, '#testvideo', ['./img/11.mp4',''] );