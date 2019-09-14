
/*********** javaScript_OO7GoldModl v1.0 目录 *****/
/*
	javaScript_OO7GoldModl 为js轻量级框架,你可以把他了解为短小精悍的小钢炮
	作者: __OO7__
	源码链接: https://github.com/ZTaer/OO7_GoldModl/tree/master/WEB_GoldModl/JS_GoldModl
	如果你有更好的想法可以联系我: QQ - 1069798804 ( 加好友时记得留言jsUser )
	
	0. 防出错类
	1.	字符串类
        
	2. 计算类
        
    3. 动画类
        3-0. 动画初始化以及准备( CDN ): Animate.css, ScrollWatch.js, 准备CSS
        3-1. 单个类执行动画,与Animate.css配合使用: animate( 类名, 动画名, 函数-动画完毕后执行 )
        3-2. 多个类执行动画,与Animate.css配合使用:  moreAnimateCSS( 当前视图标签ID, 父类ID--css选中方式, 要执行动画的子类--css选中方式，动画效果--animate.css配合, 附加类--目的是自定义css来操控动画 )

    4. 交互类

    6.  其他类
	
*/


// OO7黄金模块
const oo7 = ( function(){

    //////////////////// 3. 动画类-BGN

    // 3-0. 动画初始化以及准备
    //  需求:
    //      0. Animate.css
    //              CDN: <link rel="stylesheet" href="https://cdn.staticfile.org/animate.css/3.7.2/animate.css">
    //              效果查询: https://daneden.github.io/animate.css/
    //      1. ScrollWatch.js
    //              CDN: <script src="https://cdn.jsdelivr.net/npm/scrollwatch@2.0.1/dist/ScrollWatch-2.0.1.min.js" integrity="sha256-jmgGQvZd2hgK8fxYGFYWPni/wP3c6/JkiMdUq5Ww3j8=" crossorigin="anonymous"></script>
    //              效果查询: https://edull24.github.io/ScrollWatch/
    //      2. 准备CSS: .oo7-Animate{ opacity: 0; }


    // 3-1. 单个类执行动画,与Animate.css配合使用
    //  需求:
    //      0. Animate.css
    //	用法:
    //      animateCSS( 类名, 动画名, 函数-动画完毕后执行 )
    //  示例:
    //      target='#test'; animate='fadeInUp';
    //      animateCSS(target, animate);
    function animateCSS(element, animationName,  callback){
        const node = document.querySelector(element)
        node.classList.add('animated', animationName )

        function handleAnimationEnd() {
            node.classList.remove('animated', animationName)
            node.removeEventListener('animationend', handleAnimationEnd)

            if (typeof callback === 'function') callback()
        }

        node.addEventListener('animationend', handleAnimationEnd)
    }

    // 3-2. 多个类执行动画,与Animate.css配合使用
    //  需求:
    //      0. Animate.css
    //      1. ScrollWatch.js
    //	用法:
    //      HTML: 待动画标签加入.oo7-Animate
    //      CSS: .oo7-Animate{ opacity: 0; }
    //      JS: moreAnimateCSS( 当前视图标签ID, 父类ID--css选中方式, 要执行动画的子类--css选中方式，动画效果--animate.css配合, 附加类--目的是自定义css来操控动画 )
    //  示例:
    //      activeId = 'test' // 当前视图ID
    //      oo7.moreAnimateCSS( activeId, '#wan_banner1',['h1','h2'],'bounceIn' );
    function moreAnimateCSS( activeId, fatherId, classGroup, animate = 'fadeInUp', animateClass='' ){
        if( fatherId.includes(activeId) ){
            for( cur of classGroup ){
                let target = `${fatherId} ${cur}`; 

                document.querySelector(target).classList.toggle('oo7-Animate');
                animateCSS(target, animate);

                if( animateClass ){
                    arrList = Array.form( document.querySelectorAll(target) ); 
                    for( cur of arrList ){
                        cur.classList.remove( animateClass );
                        cur.classList.add( animateClass );
                    }
                }
                
            }
        }
    }

    //////////////////// 3. 动画类-END


    return {

        // 3. 动画类
        animateCSS: ( element, animationName, callback ) => {
            animateCSS( element, animationName, callback );
        },
        moreAnimateCSS: (  activeId, fatherId, classGroup, animate, animateClass ) => {
            moreAnimateCSS(activeId, fatherId, classGroup, animate, animateClass );
        },

    }


} )();

