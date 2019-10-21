/**
 * OO7EJS为js轻量级框架,你可以把他了解为短小精悍的小钢炮
	作者: __OO7__
  源码链接/查看功能: https://github.com/ZTaer/OO7GoldModl
 */

const elementString = {
    start: 'start',
    end: 'end',
}


//////////////////// 3. 动画类-BGN
class OO7Ani{

    // 3-1
    animateCSS(element, animationName,  callback){
        const node = Array.from( document.querySelectorAll(element) )
        node.forEach( cur => cur.classList.add('animated', animationName ) ) 
        function handleAnimationEnd() {
            node.forEach( cur => cur.classList.remove('animated', animationName) ) 
            node[ node.length - 1 ].removeEventListener('animationend', handleAnimationEnd)

            if (typeof callback === 'function') callback()
        }
        if( (node.length - 1) >= 0 ){
          node[ node.length - 1 ].addEventListener('animationend', handleAnimationEnd);
        }
    }

    // 3-2
    moreAnimateCSS( activeId, fatherId, classGroup, animate = 'fadeInUp', animateClass='' ){

        if( fatherId.includes(activeId) ){
            console.log( classGroup );
            for( let cur of classGroup ){
                let target = `${fatherId} ${cur}`; 

                // 显示目标
                Array.from(document.querySelectorAll(target)).forEach( cur => cur.style.opacity = 100 );

                // 目标执行动画
                this.animateCSS(target, animate);

                if( animateClass ){
                    arrList = Array.from( document.querySelectorAll(target) ); 
                    for( cur of arrList ){
                        cur.classList.remove( animateClass );
                        cur.classList.add( animateClass );
                    }
                }
                
            }
        }

    }

}
//////////////////// 3. 动画类-END


/**
 * 输出:
 */
export { OO7Ani };