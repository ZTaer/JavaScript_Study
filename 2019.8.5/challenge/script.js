
/****** 函数区-BGN */

    // 题目模板 
    function Questions( q,c,a ){
        this.title = q;  // 问题
        this.choose = c; // 选项,接受一个数组
        this.answer = a; // 答案
    }

    // 循环显示,用于显示多个选项输出
    function screenList( lists ){
        for(var i = 0; i < lists.length; i++){
            console.log( i + ' : ' + lists[i] );
        }
    }



/****** 函数区-END */

/****** 主程序区-BGN */
// 主程序使用技术:
    // IIFF
    // 闭包特性
    // function()+new的蓝图模板

( function(){

    // 题库( 问题，选项，答案 )
    var  qlist = [
        new Questions( 'xxxx?',['a','b','c'],'b' ), // 使用模板后记得使用new建立空对象
        new Questions( 'aaaa?',['a1','b2','c3'],'c3' ),
        new Questions( 'cccc?',['s','ss','sss'],'s' ),
    ];

    var winner = 0; // 胜利分数

    return ( function(){
        var door = true; // 控制循环的开关
        var random  = Math.floor( Math.random() * qlist.length );
        
        while( door ){

            var random  = Math.floor( Math.random() * qlist.length ); // 生成随机数
            var mainQ = qlist[random]; // 获取题目
            var title = mainQ.title, choose = mainQ.choose, answer = mainQ.answer;
            var userChoose; // 用户的输入
            
            // 显示题目
            console.log(title);
            screenList(choose);

            // 用户交互
            userChoose = prompt('输入你的选择?');
            if( userChoose == 'exit' ){ // 退出答题
                console.log( '你的总分: '+ winner );
                door = false;
                break;
            }            
            else if( choose[ parseInt( userChoose ) ] == answer ){ // 正确答案输出
                winner++;
                console.log( '分数: ' + winner + ' 回答正确!!!' );
                continue;
            }
            else{ // 错误答案
                console.log( '分数: ' + winner + ' 回答错误!!!');
                continue;
            }
        
        }



    } )();

} )()


/****** 主程序区-END */