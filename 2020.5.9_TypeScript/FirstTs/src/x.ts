// "!"：标记告诉ts不用担心，我们将抓取此目标，无需报错( 完成笔记 )
const buttonTarget = document.querySelector('.test-click')!;
buttonTarget.addEventListener('click',()=>{
    console.log('Click - test');
    buttonTarget.innerHTML = "test";
});

// 抓取多个目标
const buttonTest = document.querySelectorAll('.test-click')!;

// 迭代抓取的目标: 目的是方便addEventListener监听所有选中的目标
const nodeListForEach = function( list:any, callback:any ){
    for( let cur of list ){
        callback(cur);
    }
}

nodeListForEach( buttonTest, (cur:any) => {
        cur.addEventListener('click',()=>{
            nodeListForEach( buttonTest,(cur:any)=>cur.classList.remove('xxx') ); // 初始化class名称
            const dataNum = cur.dataset.test; // 抓取data-test的值
            if( dataNum == '11' ){
                cur.classList.add('xxx');
            }else if( dataNum == '22' ){
                cur.classList.add('xxx');
            }
        });
    }
);
