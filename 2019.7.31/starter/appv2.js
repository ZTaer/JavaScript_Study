
/*************** v2.0 */
    // 功能1: 当骰子连续为2个6时清空所有分数，并切换下一个玩家
    // 功能2: 玩家自定义胜利分数
    // 功能3: 增加一个骰子，只要有一个骰子为1则清空临时分数，并切换下一个玩家

    // 逻辑分析:
        // 功能1:( 完成 )
            // Roll按钮中
                // 当骰子不等于1时记录，当前筛子数为dice_ed( 默认为0,全局变量，别忘记初始化函数时复原 )
                // 在次单击刷新后，优先判断当前dice == 6 && dice_ed == 6
                    // 清空所有分数
                    // 是: 则切换玩家
        // 功能2:
            // setting winner按钮中,在所有按钮之上
                // 初始化游戏
                // 初始化参数粉数设定为默认100
                // 建立全局变量winner = 100 默认值
                    // 创建按钮单击即可，索引前端表单中的值
                    // 然后赋值给winner变量
                    // 索引表单值方法: var name = document.getElementById("name").value;
        // 功能3:
            // 创建全局变量dice_2
            // 初始化也要添加为none
            // 切换玩家时也要none
            // Roll按钮:
                // 筛子二生成且返回前端
                // 原条件: dice !== 1 变为 dice !== 1 && dice_2 !== 1; 
                    // 并且记录dice_2_end值
                    // 临时分数改变相加为 dice + dice_2
                // 原条件: dice == 6 && dice_ed == 6 变为3种情况 ( ( dice == 6 && dice_ed == 6 ) || ( dice_2 == 6 && dice_2_ed == 6 ) ) || ( dice == 6 && dice_2 == 6 )
            // Hold按钮:
                // 取消显示骰子加上dice_2



// 玩家得分，临时得分，玩家选择，骰子
var scores, roundScore, activePlayer;
var gameing; 
var dice,dice_ed, dice_2,dice_2_ed = 0;
var winner = 100;

// 初始化函数init()
function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    dice_ed = 0;
    winner = 100;
    gameing = true; // 控制游戏开始结束，以限制游戏中按钮操作，及游戏进度    

    // 初始化游戏界面
    dice = Math.floor( Math.random() * 6 + 1 ); // 随机数 
    document.querySelector('.dice').style.display = 'none'; // 取消dice显示
    dice_2 = Math.floor( Math.random() * 6 + 1 ); // 随机数 
    document.querySelector('.dice_2').style.display = 'none'; // 取消dice显示



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
    document.querySelector('.dice_2').style.display = 'none'; // 取消dice显示
    roundScore = 0;
}

// 设定胜利玩家分数
document.querySelector('.winner_setting').addEventListener('click',function(){
    init();
    var score = document.getElementById('winner_scores').value;
    score ? winner = score : winner = 100; 
    console.log( winner );

});


// 单击"Roll Dice"按钮骰子进行变化
document.querySelector('.btn-roll').addEventListener('click',function(){

    if( gameing ){

        var dice = Math.floor( Math.random() * 6 + 1 ); // 确保每一次单击骰子就将刷新 
        var diceDom = document.querySelector('.dice'); // 抓取图片标签
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png'; //  更改src属性

        var dice_2 = Math.floor( Math.random() * 6 + 1 ); // 确保每一次单击骰子就将刷新 
        var diceDom = document.querySelector('.dice_2'); // 抓取图片标签
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice_2 + '.png'; //  更改src属性

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
        
        if( ( ( dice_ed == 6 && dice == 6 ) || ( dice_2_ed == 6 && dice_2 == 6 ) ) || ( dice == 6 && dice_2 == 6 ) ){
            console.log(dice,dice_ed);
            scores[activePlayer] = 0;
            next_player();
        }
        else if( dice !== 1 && dice_2 !== 1 ){
            roundScore += dice + dice_2;
            document.querySelector('#current-' + activePlayer ).textContent = roundScore;
            dice_ed = dice;
            dice_2_ed = dice_2;
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
        
        if( scores[activePlayer] >= winner ){

            // 更换标语为Winner，且引用css样式加红标语
            gameing = false; // 标记游戏结束,只有btn-new按钮可用
            document.querySelector('#name-' + activePlayer ).textContent = 'Winner!';
            document.querySelector('.player-' + activePlayer + '-panel' ).classList.add('winner'); // 增加类

            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.dice').style.display = 'none'; // 取消dice显示
            document.querySelector('.dice_2').style.display = 'none'; // 取消dice显示

        }
        else{
            // 切换玩家
            next_player();
        }

    }
    

});


// 重新开始游戏
document.querySelector('.btn-new').addEventListener('click',init);