/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/************ js-生成随机数，以及转为整数 
// 0. 生成0~1随机数( 与乘法配合生成其它随机数 )
    Math.random(); 
// 1. 非四舍五入取整数
    Math.floor(); 

// 例如:
var ran = 0;
ran = Math.floor( Math.random() * 6 + 1 ); // 生成1~6的随机数
console.log(ran);
*/

/************ js-document.querySelector()HTML标签操控 

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
*/

// 玩家得分，临时得分，玩家选择，骰子
var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

dice = Math.floor( Math.random() * 6 + 1 ); // 随机数 
document.querySelector('.dice').style.display = 'none'; // 取消dice显示


