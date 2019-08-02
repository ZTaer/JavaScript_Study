/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/************ es5-生成随机数，以及转为整数 
// 0. 生成0~1随机数( 与乘法配合生成其它随机数 )
    Math.random(); 
// 1. 非四舍五入取整数
    Math.floor(); 

// 例如:
var ran = 0;
ran = Math.floor( Math.random() * 6 + 1 ); // 生成1~6的随机数
console.log(ran);
*/

/************ es5-document.querySelector()HTML标签操控 

// 0. 选中标签
document.querySelector(' #score-0 '); //  以CSS选择器选中即可

// 1. 改变标签内容
    // a) 改变标签文本内容: <a id="score-0" > 文本内容 <a>
    document.querySelector(' #score-0 ').textContent = ran ;
    // b) 在标签中插入HTML代码: <a id="score-0" > <b> $ran </b> </a>
    document.querySelector('#score-0').innerHTML= '<b>' + ran + '</b>' ;

// 2. 获取标签内容
    // a) 获取标签中的文本内容( 字符串类型 )
    var test0 =  document.querySelector('#score-0').textContent;
    console.log( test0 );

    // b) 获取标签中，HTML标签
    var test1 = document.querySelector('.player-0-panel').innerHTML;
    console.log( test1 );

// 3. 改变标签中CSS样式
    // a) 其实核心document.querySelector('CSS选择器').style.css属性 = 'css样式参数';
    document.querySelector('.dice').style.display = 'none';

// 4. 改变标签属性 - 改变图片实例
     // a) 选中的标签.属性 = '修改值';
    var choose_img = 3;
    var dice_img = document.querySelector('.dice');
    dice_img.src = 'dice-' + choose_img + '.png'; // 核心


*/

/************* es5-.addEventListener()监听事件，并执行函数 
// 监听事件参数参考网站: https://developer.mozilla.org/zh-CN/docs/Web/Events/

    // 0. 正常调用函数 -  监听单机事件,执行test0()函数
    function test0(){
        var dice = Math.floor( Math.random() * 6 + 1 ); // 随机数 
        document.getElementById('score-0').textContent = dice; // 抓取ID标签
    }
    var btn_roll = document.querySelector('.btn-roll').addEventListener('click',test0);

    // 1. 调用匿名函数( 匿名函数就是没有变量名称的函数 ) - 监听单击时间，并执行函数
        // a) .addEventListener('监听事件', function(){ 函数内容 }  );
    var btn_roll = document.querySelector('.btn-roll').addEventListener('click', function(){ 
        var dice = Math.floor( Math.random() * 6 + 1 ); // 随机数 
        document.getElementById('score-0').textContent = dice;
     } );
*/

/*************** es5-.getElementById('test')抓取ID 
     // 0. 抓取ID, 抓取速度比.querySelector()更快，但是功能单一不方便
     document.getElementById('test');
*/

/**************** es5-.classList标签多类名操控，删除，添加，切换HTML标签类名 
     // 删除指定类名,多个类名用逗号隔开
     document.querySelector('.player-0-panel').classList.remove('active','test','test1');

     // 添加类名,多个类名同样用逗号隔开
     document.querySelector( '.player-0-panel' ).classList.add('active','name');

     // 切换类名，所为切换: 标签含有类名时删除,无类名时添加
     document.querySelector('.player-0-panel').classList.toggle('active');
*/


/*************** v2.0 */
    // 功能1: 当骰子连续为2个6时清空临时分数，并切换下一个玩家
    // 功能2: 玩家自定义胜利分数
    // 功能3: 增加一个骰子，只要有一个骰子为1则清空临时分数，并切换下一个玩家


// 玩家得分，临时得分，玩家选择，骰子
var scores, roundScore, activePlayer, dice;
var gameing; 

// 初始化函数init()
function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gameing = true; // 控制游戏开始结束，以限制游戏中按钮操作，及游戏进度    

    // 初始化游戏界面
    dice = Math.floor( Math.random() * 6 + 1 ); // 随机数 
    document.querySelector('.dice').style.display = 'none'; // 取消dice显示

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //  还原一切
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel' ).classList.remove('winner'); 
    document.querySelector('.player-1-panel' ).classList.remove('winner'); 

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    document.querySelector('.dice').style.display = 'none'; // 取消dice显示


}

init();

// 切换玩家
function next_player(){

    activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active'); //  切换类名
    document.querySelector('.player-1-panel').classList.toggle('active');

    // 数值初始化
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none'; // 取消dice显示
    roundScore = 0;
}

// 单击"Roll Dice"按钮骰子进行变化
document.querySelector('.btn-roll').addEventListener('click',function(){

    if( gameing ){

        var dice = Math.floor( Math.random() * 6 + 1 ); // 确保每一次单击骰子就将刷新 
        var diceDom = document.querySelector('.dice'); // 抓取图片标签
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png'; //  更改src属性

        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');

        // 逻辑分析
            // 选中当前玩家
            // 当晒子不等1时
                // 骰子的分数，积累为临时分数，并显示出当前玩家
            // 当晒子等于1时
                // 切换玩家
                    // 如果玩家1则切换为玩家2，与其相反即可
                    // css样式跟着变化
                // 初始化
                    // 双方临时分数
                    // 骰子取消显示
                    // 临时分数
        
        console.log(dice);
        if( dice !== 1 ){
            roundScore += dice;
            document.querySelector('#current-' + activePlayer ).textContent = roundScore;
        }
        else{
            // 切换玩家
            next_player();
        }

    }

});

// 单击"Hold"按钮
document.querySelector('.btn-hold').addEventListener('click',function(){
   // 逻辑分析:
        // 保存，临时分数，到对应玩家分数，显示到前端
        // 检测是否达到100分赢得比赛
            // 是:
                // 更换标语为Winner，且引用css样式加红标语
                // 取消active
                // 隐藏筛子 
                // 禁用rooll/HOLD按钮disabled = "disabled"( 初始化游戏时别忘记解封 disabled = "false"  )
            // 否: 
                // 切换玩家
    
    if(gameing){
        scores[ activePlayer ] += roundScore;
        document.getElementById('score-' + activePlayer ).textContent = scores[activePlayer] ;
        
        if( scores[activePlayer] >= 100 ){

            // 更换标语为Winner，且引用css样式加红标语
            gameing = false; // 标记游戏结束,只有btn-new按钮可用
            document.querySelector('#name-' + activePlayer ).textContent = 'Winner!';
            document.querySelector('.player-' + activePlayer + '-panel' ).classList.add('winner'); // 增加类

            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.dice').style.display = 'none'; // 取消dice显示

        }
        else{
            // 切换玩家
            next_player();
        }

    }
    

});


// 重新开始游戏
document.querySelector('.btn-new').addEventListener('click',init);