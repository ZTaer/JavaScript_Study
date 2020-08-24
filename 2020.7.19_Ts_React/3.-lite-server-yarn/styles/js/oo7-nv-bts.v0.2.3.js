// Github: https://github.com/ZTaer/OO7-BTS

/*********** OO7EJS.v2.3 目录 *****/
/*
	OO7EJS为js轻量级框架,你可以把他了解为短小精悍的小钢炮
	作者: __OO7__
	如果你有更好的想法可以联系我: QQ - 1069798804 ( 加好友时记得留言jsUser )
	
  0. 防出错类 - oo7Init

  1. 字符串类 - oo7Str
      // 1-0. 清除字符串中的空格: oo7Str.clearStrSpace( 字符串 )
      // 1-1. 生成单个主题文档: oo7Str.getText( 主题, 长度, 标签名称-css写法 );

	2. 计算类 - oo7Cul
        
  3. 动画类 - oo7Ani
      3-0. 动画初始化以及准备( CDN ): Animate.css, ScrollWatch.js, 准备CSS
      3-1. 单个类执行动画,与Animate.css配合使用: animate( 类名, 动画名, 函数-动画完毕后执行 )
      3-2. 多个类执行动画,与Animate.css配合使用: oo7Ani.moreAnimateInit( [ 目标所在父类ID, 目标类名(用逗号隔开), 动画名, 添加的类名( 用逗号隔开 ) ] ): 返回一个初始化数组; oo7Ani.moreAnimateCSS( 当前视图所在ID, 初始化返回的数组 ): 执行动画, 需滚动监听配合
      3-3. 自适应背景视频，与OO7BTS.scss配合: let bvInit = new oo7Ani.BackgroundVideoInit(); oo7Ani.backgroundVideo( 变量名称(bvInit), 'css父类容器名',['网页视频路径','本地视频路径'],'标签video类名','视频缓冲图片路径','达到指定分辨率时禁止播放-默认为768px' );

  4. 交互类 - oo7Ui
      4-0. 清除指定目标class名: oo7Ui.clearAllClass( 目标class类名, 删除目标中class类名 );
      4-1. 选中单个按钮 - 指定目标进行单选样式变化: oo7Ui.clickOnlyAddClass( 目标父类ID, 目标class名, 所增加class名 );

  6. 其他类 - oo7Other
	
*/


//////////////////// 1. 字符串类-BGN
const oo7Str = ( function(){
  // 1-0. 清除字符串空格
  function clearStrSpace( str ){
    return str.replace( /\s*/g,'' );
  }

  // 1-1. 生成单个主题文档:
  /**
   * 原作者: https://github.com/menzi11/BullshitGenerator
   * 改进者: https://github.com/ZTaer
   * 使用方式:
   *      方法一( 非异步 ): 
   *          HTML: <div id="test"></div> <script src="./index.js" ></script>
   *          JS: document.querySelector('#test').textContent = oo7Str.getText( '测试', '1000' );
   *      方法二( 异步 ):
   *          HTML: <div id="test"></div> <script src="./index.js" ></script>
   *          JS: oo7Str.getText( '测试', '1000', '#test' );
   */
  const getText = ( topic = '开车', len = 5000, target="" ) => {
    // 等我掌握node.js加入相应的API接口
    const data = {
      dissert: [
        "现在，解决主题的问题，是非常非常重要的。 所以， ",
        "我们不得不面对一个非常尴尬的事实，那就是， ",
        "主题的发生，到底需要如何做到，不主题的发生，又会如何产生。 ",
        "而这些并不是完全重要，更加重要的问题是， ",
        "主题，到底应该如何实现。 ",
        "带着这些问题，我们来审视一下主题。 ",
        "所谓主题，关键是主题需要如何写。 ",
        "我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。 ",
        "问题的关键究竟为何? ",
        "主题因何而发生?",
        "每个人都不得不面对这些问题。  在面对这种问题时， ",
        "一般来讲，我们都必须务必慎重的考虑考虑。 ",
        "要想清楚，主题，到底是一种怎么样的存在。 ",
        "了解清楚主题到底是一种怎么样的存在，是解决一切问题的关键。 ",
        "就我个人来说，主题对我的意义，不能不说非常重大。 ",
        "本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。 ",
        "主题，发生了会如何，不发生又会如何。 ",
        "在这种困难的抉择下，本人思来想去，寝食难安。 ",
        "生活中，若主题出现了，我们就不得不考虑它出现了的事实。 ",
        "这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。 ",
        "我们都知道，只要有意义，那么就必须慎重考虑。 ",
        "既然如此， ",
        "那么， ",
        "我认为， ",
        "一般来说， ",
        "总结的来说， ",
        "既然如何， ",
        "经过上述讨论",
      ],
      famous: [
        "伏尔泰曾经说过，不经巨大的困难，不会有伟大的事业。这不禁令我深思",
        "富勒曾经说过，苦难磨炼一些人，也毁灭另一些人。这不禁令我深思",
        "文森特·皮尔曾经说过，改变你的想法，你就改变了自己的世界。这不禁令我深思",
        "拿破仑·希尔曾经说过，不要等待，时机永远不会恰到好处。这不禁令我深思",
        "塞涅卡曾经说过，生命如同寓言，其价值不在与长短，而在与内容。这不禁令我深思",
        "奥普拉·温弗瑞曾经说过，你相信什么，你就成为什么样的人。这不禁令我深思",
        "吕凯特曾经说过，生命不可能有两次，但许多人连一次也不善于度过。这不禁令我深思",
        "莎士比亚曾经说过，人的一生是短的，但如果卑劣地过这一生，就太长了。这不禁令我深思",
        "笛卡儿曾经说过，我的努力求学没有得到别的好处，只不过是愈来愈发觉自己的无知。这不禁令我深思",
        "左拉曾经说过，生活的道路一旦选定，就要勇敢地走到底，决不回头。这不禁令我深思",
        "米歇潘曾经说过，生命是一条艰险的峡谷，只有勇敢的人才能通过。这不禁令我深思",
        "吉姆·罗恩曾经说过，要么你主宰生活，要么你被生活主宰。这不禁令我深思",
        "日本谚语曾经说过，不幸可能成为通向幸福的桥梁。这不禁令我深思",
        "海贝尔曾经说过，人生就是学校。在那里，与其说好的教师是幸福，不如说好的教师是不幸。这不禁令我深思",
        "杰纳勒尔·乔治·S·巴顿曾经说过，接受挑战，就可以享受胜利的喜悦。这不禁令我深思",
        "德谟克利特曾经说过，节制使快乐增加并使享受加强。这不禁令我深思",
        "裴斯泰洛齐曾经说过，今天应做的事没有做，明天再早也是耽误了。这不禁令我深思",
        "歌德曾经说过，决定一个人的一生，以及整个命运的，只是一瞬之间。这不禁令我深思",
        "卡耐基曾经说过，一个不注意小事情的人，永远不会成就大事业。这不禁令我深思",
        "卢梭曾经说过，浪费时间是一桩大罪过。这不禁令我深思",
        "康德曾经说过，既然我已经踏上这条道路，那么，任何东西都不应妨碍我沿着这条路走下去。这不禁令我深思",
        "克劳斯·莫瑟爵士曾经说过，教育需要花费钱，而无知也是一样。这不禁令我深思",
        "伏尔泰曾经说过，坚持意志伟大的事业需要始终不渝的精神。这不禁令我深思",
        "亚伯拉罕·林肯曾经说过，你活了多少岁不算什么，重要的是你是如何度过这些岁月的。这不禁令我深思",
        "韩非曾经说过，内外相应，言行相称。这不禁令我深思",
        "富兰克林曾经说过，你热爱生命吗？那么别浪费时间，因为时间是组成生命的材料。这不禁令我深思",
        "马尔顿曾经说过，坚强的信心，能使平凡的人做出惊人的事业。这不禁令我深思",
        "笛卡儿曾经说过，读一切好书，就是和许多高尚的人谈话。这不禁令我深思",
        "塞涅卡曾经说过，真正的人生，只有在经过艰难卓绝的斗争之后才能实现。这不禁令我深思",
        "易卜生曾经说过，伟大的事业，需要决心，能力，组织和责任感。这不禁令我深思",
        "歌德曾经说过，没有人事先了解自己到底有多大的力量，直到他试过以后才知道。这不禁令我深思",
        "达尔文曾经说过，敢于浪费哪怕一个钟头时间的人，说明他还不懂得珍惜生命的全部价值。这不禁令我深思",
        "佚名曾经说过，感激每一个新的挑战，因为它会锻造你的意志和品格。这不禁令我深思",
        "奥斯特洛夫斯基曾经说过，共同的事业，共同的斗争，可以使人们产生忍受一切的力量。　这不禁令我深思",
        "苏轼曾经说过，古之立大事者，不惟有超世之才，亦必有坚忍不拔之志。这不禁令我深思",
        "王阳明曾经说过，故立志者，为学之心也；为学者，立志之事也。这不禁令我深思",
        "歌德曾经说过，读一本好书，就如同和一个高尚的人在交谈。这不禁令我深思",
        "乌申斯基曾经说过，学习是劳动，是充满思想的劳动。这不禁令我深思",
        "别林斯基曾经说过，好的书籍是最贵重的珍宝。这不禁令我深思",
        "富兰克林曾经说过，读书是易事，思索是难事，但两者缺一，便全无用处。这不禁令我深思",
        "鲁巴金曾经说过，读书是在别人思想的帮助下，建立起自己的思想。这不禁令我深思",
        "培根曾经说过，合理安排时间，就等于节约时间。这不禁令我深思",
        "屠格涅夫曾经说过，你想成为幸福的人吗？但愿你首先学会吃得起苦。这不禁令我深思",
        "莎士比亚曾经说过，抛弃时间的人，时间也抛弃他。这不禁令我深思",
        "叔本华曾经说过，普通人只想到如何度过时间，有才能的人设法利用时间。这不禁令我深思",
        "博曾经说过，一次失败，只是证明我们成功的决心还够坚强。 维这不禁令我深思",
        "拉罗什夫科曾经说过，取得成就时坚持不懈，要比遭到失败时顽强不屈更重要。这不禁令我深思",
        "莎士比亚曾经说过，人的一生是短的，但如果卑劣地过这一生，就太长了。这不禁令我深思",
        "俾斯麦曾经说过，失败是坚忍的最后考验。这不禁令我深思",
        "池田大作曾经说过，不要回避苦恼和困难，挺起身来向它挑战，进而克服它。这不禁令我深思",
        "莎士比亚曾经说过，那脑袋里的智慧，就像打火石里的火花一样，不去打它是不肯出来的。这不禁令我深思",
        "希腊曾经说过，最困难的事情就是认识自己。这不禁令我深思",
        "黑塞曾经说过，有勇气承担命运这才是英雄好汉。这不禁令我深思",
        "非洲曾经说过，最灵繁的人也看不见自己的背脊。这不禁令我深思",
        "培根曾经说过，阅读使人充实，会谈使人敏捷，写作使人精确。这不禁令我深思",
        "斯宾诺莎曾经说过，最大的骄傲于最大的自卑都表示心灵的最软弱无力。这不禁令我深思",
        "西班牙曾经说过，自知之明是最难得的知识。这不禁令我深思",
        "塞内加曾经说过，勇气通往天堂，怯懦通往地狱。这不禁令我深思",
        "赫尔普斯曾经说过，有时候读书是一种巧妙地避开思考的方法。这不禁令我深思",
        "笛卡儿曾经说过，阅读一切好书如同和过去最杰出的人谈话。这不禁令我深思",
        "邓拓曾经说过，越是没有本领的就越加自命不凡。这不禁令我深思",
        "爱尔兰曾经说过，越是无能的人，越喜欢挑剔别人的错儿。这不禁令我深思",
        "老子曾经说过，知人者智，自知者明。胜人者有力，自胜者强。这不禁令我深思",
        "歌德曾经说过，意志坚强的人能把世界放在手中像泥块一样任意揉捏。这不禁令我深思",
        "迈克尔·F·斯特利曾经说过，最具挑战性的挑战莫过于提升自我。这不禁令我深思",
        "爱迪生曾经说过，失败也是我需要的，它和成功对我一样有价值。这不禁令我深思",
        "罗素·贝克曾经说过，一个人即使已登上顶峰，也仍要自强不息。这不禁令我深思",
        "马云曾经说过，最大的挑战和突破在于用人，而用人最大的突破在于信任人。这不禁令我深思",
        "雷锋曾经说过，自己活着，就是为了使别人过得更美好。这不禁令我深思",
        "布尔沃曾经说过，要掌握书，莫被书掌握；要为生而读，莫为读而生。这不禁令我深思",
        "培根曾经说过，要知道对好事的称颂过于夸大，也会招来人们的反感轻蔑和嫉妒。这不禁令我深思",
        "莫扎特曾经说过，谁和我一样用功，谁就会和我一样成功。这不禁令我深思",
        "马克思曾经说过，一切节省，归根到底都归结为时间的节省。这不禁令我深思",
        "莎士比亚曾经说过，意志命运往往背道而驰，决心到最后会全部推倒。这不禁令我深思",
        "卡莱尔曾经说过，过去一切时代的精华尽在书中。这不禁令我深思",
        "培根曾经说过，深窥自己的心，而后发觉一切的奇迹在你自己。这不禁令我深思",
        "罗曼·罗兰曾经说过，只有把抱怨环境的心情，化为上进的力量，才是成功的保证。这不禁令我深思",
        "孔子曾经说过，知之者不如好之者，好之者不如乐之者。这不禁令我深思",
        "达·芬奇曾经说过，大胆和坚定的决心能够抵得上武器的精良。这不禁令我深思",
        "叔本华曾经说过，意志是一个强壮的盲人，倚靠在明眼的跛子肩上。这不禁令我深思",
        "黑格尔曾经说过，只有永远躺在泥坑里的人，才不会再掉进坑里。这不禁令我深思",
        "普列姆昌德曾经说过，希望的灯一旦熄灭，生活刹那间变成了一片黑暗。这不禁令我深思",
        "维龙曾经说过，要成功不需要什么特别的才能，只要把你能做的小事做得好就行了。这不禁令我深思",
        "郭沫若曾经说过，形成天才的决定因素应该是勤奋。这不禁令我深思",
        "洛克曾经说过，学到很多东西的诀窍，就是一下子不要学很多。这不禁令我深思",
        "西班牙曾经说过，自己的鞋子，自己知道紧在哪里。这不禁令我深思",
        "拉罗什福科曾经说过，我们唯一不会改正的缺点是软弱。这不禁令我深思",
        "亚伯拉罕·林肯曾经说过，我这个人走得很慢，但是我从不后退。这不禁令我深思",
        "美华纳曾经说过，勿问成功的秘诀为何，且尽全力做你应该做的事吧。这不禁令我深思",
        "俾斯麦曾经说过，对于不屈不挠的人来说，没有失败这回事。这不禁令我深思",
        "阿卜·日·法拉兹曾经说过，学问是异常珍贵的东西，从任何源泉吸收都不可耻。这不禁令我深思",
        "白哲特曾经说过，坚强的信念能赢得强者的心，并使他们变得更坚强。 这不禁令我深思",
        "查尔斯·史考伯曾经说过，一个人几乎可以在任何他怀有无限热忱的事情上成功。 这不禁令我深思",
        "贝多芬曾经说过，卓越的人一大优点是：在不利与艰难的遭遇里百折不饶。这不禁令我深思",
        "莎士比亚曾经说过，本来无望的事，大胆尝试，往往能成功。这不禁令我深思",
        "卡耐基曾经说过，我们若已接受最坏的，就再没有什么损失。这不禁令我深思",
        "德国曾经说过，只有在人群中间，才能认识自己。这不禁令我深思",
        "史美尔斯曾经说过，书籍把我们引入最美好的社会，使我们认识各个时代的伟大智者。这不禁令我深思",
        "冯学峰曾经说过，当一个人用工作去迎接光明，光明很快就会来照耀着他。这不禁令我深思",
        "吉格·金克拉曾经说过，如果你能做梦，你就能实现它。这不禁令我深思",
      ],
      behind: [
        "这不禁令我深思。 ",
        "带着这句话，我们还要更加慎重的审视这个问题： ",
        "这启发了我， ",
        "我希望诸位也能好好地体会这句话。 ",
        "这句话语虽然很短，但令我浮想联翩。 ",
      ],
      fore: [
        "曾经说过",
        "在不经意间这样说过",
      ],
    }

    let 
    主题 = topic,
    论述 = data.dissert, 
    名人名言 = data.famous, 
    后面垫话 = data.behind,
    前面垫话 = data.fore;

    function 随便取一句(列表){
        let 坐标 = Math.floor( Math.random() * 列表.length );
        return 列表[坐标];
    }

    function 随便取一个数(最小值 = 0,最大值 = 100){
        let 数字 = Math.random()*( 最大值 - 最小值 ) + 最小值;
        return 数字;
    }

    function 来点名人名言(){
        let 名言 = 随便取一句(名人名言)
        名言 = 名言.replace("曾经说过", 随便取一句(前面垫话) )
        名言 = 名言.replace("这不禁令我深思", 随便取一句(后面垫话) )
        return 名言
    }

    function 来点论述(){
        let 句子 = 随便取一句(论述);
        句子 = 句子.replace(RegExp("主题", "g"),主题);
        return 句子;
    }

    function 增加段落(章节){
        if(章节[章节.length-1] === " "){
            章节 = 章节.slice(0,-2)
        }
        return "　　" + 章节 + "。 "
    }
    
    function 生成文章(){
        let 文章 = []
        for(let 空 in 主题){
            let 章节 = "";
            let 章节长度 = 0;
            while( 章节长度 < len ){
                let 随机数 = 随便取一个数();
                if(随机数 < 5 && 章节.length > 200){
                    章节 = 增加段落(章节);
                    文章.push(章节); 
                    章节 = "";
                }else if(随机数 < 20){
                    let 句子 = 来点名人名言();
                    章节长度 = 章节长度 + 句子.length;
                    章节 = 章节 + 句子;
                }else{
                    let 句子 = 来点论述();
                    章节长度 = 章节长度 + 句子.length;
                    章节 = 章节 + 句子;
                }
            }
            章节 = 增加段落(章节);
            文章.push(章节);
        }
        return 文章.join("\n");
    }

    async function getText( target ){
        try{
            let text = await 生成文章() 
            document.querySelector(target).textContent = text;
            return 'success!!';
        }
        catch{
            return "生成失败";
        }
    }

    // 如果存在目标标签则直接异步写入，否则直接返回数据
    if( target.length > 0 ){
        getText( target );
    }
    else{
        return 生成文章();
    }
  }

  return{
    clearStrSpace:( str )=>{
      return clearStrSpace( str );
    },
    getText: ( topic, len, target ) => {
      return getText( topic, len, target );
    }
  };

} )();
//////////////////// 1. 字符串类-END

//////////////////// 3. 动画类-BGN
const oo7Ani = ( function( global, oo7Str ){


    // 3-0. 动画初始化以及准备
    //  需求:
    //      0. Animate.css
    //              CDN: <link rel="stylesheet" href="https://cdn.staticfile.org/animate.css/3.7.2/animate.css">
    //              效果查询: https://daneden.github.io/animate.css/
    //              常用类: 
    //                  延迟动画: .delay-1s ... .delay-5s
    //                  时间动画: 
    //                      加速: .fast( 800ms ) .faster( 500ms )
    //                      减速: .slow( 2s ) .slower( 3s )
    //                  无限循环: .infinite
    //      1. ScrollWatch.js
    //              CDN: <script src="https://cdn.jsdelivr.net/npm/scrollwatch@2.0.1/dist/ScrollWatch-2.0.1.min.js" integrity="sha256-jmgGQvZd2hgK8fxYGFYWPni/wP3c6/JkiMdUq5Ww3j8=" crossorigin="anonymous"></script>
    //              效果查询: https://edull24.github.io/ScrollWatch/
    //      2. 准备SCSS: OO7BTS.scss
    //              源码链接: https://github.com/ZTaer/OO7GoldModl/


    // 3-1. 单个类执行动画,与Animate.css配合使用
    //  需求:
    //      0. Animate.css
    //	用法:
    //      animateCSS( 类名, 动画名, 函数-动画完毕后执行 )
    //  示例:
    //      target='#test'; animate='fadeInUp';
    //      animateCSS(target, animate, () => console.log('回调函数，执行完动画后,在执行此函数') );
    function animateCSS(element, animationName,  callback){

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

    // 3-2. 多个类执行动画,与Animate.css配合使用
    //  需求:
    //      0. Animate.css
    //      1. ScrollWatch.js
    //  解析:
    //      0. oo7Ani.moreAnimateInit( [ 目标所在父类ID, 目标类名(用逗号隔开), 动画名, 添加的类名( 用逗号隔开 ) ] ): 返回一个初始化数组
    //      1. oo7Ani.moreAnimateCSS( 当前视图所在ID, 初始化返回的数组 ): 执行动画, 需滚动监听配合
    //	用法:
    /**     HTML:
             <div id="test"> 
              <h1> 标题 </h1>
              <p class="text" > 内容1 </p> 
              <p class="text" > 内容2 </p> 
             </div>
            JS: 
              0. 先进行初始化  
              let aniObj = moreAnimateInit( [
                [ "#test", 'h1, .text', 'fadeInDownBig', 'slow, testAddClassName' ],
                [ " 可以添加更多, 注意逗号 " ]
              ] );
              1. 需滚动监听配合使用执行动画
              let sw = new ScrollWatch({
                watchOnce: true, // 是否开启不重复监听( 关闭则动画将来回执行 )
                infiniteOffset: -10, // 偏移量
                scrollThrottle: 200, // 延迟监听(ms)
                // inViewClass: 'play', // 给当前视图增加类

                onElementInView: function(data) { // 监听当前视图的标签
                  activeId = data.el.id;
                  oo7Ani.moreAnimateCSS( activeId, aniObj ); //( 执行动画核心 )
                }
              });
     */        
    //      
    //  示例:
    //      activeId = 'test' // 当前视图ID
    //      oo7.moreAnimateCSS( activeId, '#wan_banner1',['h1','h2'],'bounceIn' );

    // 初始化用户参数
    function moreAnimateInit( group ){
      let result = [];
      group.forEach( e => {
        // 创建对象
        let obj = {
          id: e[0].replace('#',''),
          target: e[1].split(',').map( e=>oo7Str.clearStrSpace(e) ),
          animate: e[2] ? e[2] : 'fadeInDown',
          addClassList: e[3] ? e[3].split(',').map( e=>oo7Str.clearStrSpace(e) ) : '',
        }

        // 初始化目标: 将所有目标opacity设定为0
        let target = obj.target.map( e=> `#${obj.id} ${e}`).join(',');
        Array.from(document.querySelectorAll( target )).forEach( e=>e.style.opacity = 0 ); 

        result.push(obj);  
      } );

      return result;
    }

    function moreAnimateCSS( activeId, aniObj ){
      // 过滤出符合条件的目标
      let activeGroup = aniObj.filter( e => e.id == activeId );
      if( activeGroup.length > 0 ){
        activeGroup.forEach( e => {
          // 确定目标
          let target = e.target.map( cur => `#${e.id} ${cur}` ).join(',');
          
          // 显示目标
          Array.from(document.querySelectorAll( target )).forEach( cur=> {
            cur.style.opacity=1;
            cur.classList.add( ...e.addClassList );
          } );
          
          // 异步执行动画,保证执行效率
          async function exeAnimateCSS( target, animate  ){
            try{
              if( target.length > 0 ){
                // 执行动画
                animateCSS( target, animate );
              }
            }
            catch{
              console.log( '动画执行失败' );
            }
          }
          exeAnimateCSS( target, e.animate );

        } );
      }
    }


  // 3-3. 自适应背景视频，与OO7BTS.scss配合
  //  来源: https://github.com/rishabhp/bideo.js
  //  原理: https://codetheory.in/html5-fullscreen-background-video/
  //	用法:
  //      HTML: 核心class名 - .background-video-tab - .background-video-img - .background-video-container,详细使用情况请看示例
  //      CSS: @include background-video-init( 背景图片路径 ); 
  //      JS: let bvInit = new oo7Ani.BackgroundVideoInit(); oo7Ani.backgroundVideo( 变量名称(bvInit), 'css父类容器名',['网页视频路径','本地视频路径'],'标签video类名','视频缓冲图片路径','达到指定分辨率时禁止播放-默认为768px' );
  //  示例:
  //		HTML:
	//			<div id="container" class="intro-window-img"> 
  //          <video class="background-video-tab" loop muted></video>
  //          <div class="background-video-img" ></div>
  //          <div class="background-video-container"></div>
  //      </div>
	// 		SCSS:
	// 			#container{
  //        @include background-video-init( '../images/bg-video_Moment.jpg' );
  //      }
	//    JS:
	//			let bvInit = new oo7Ani.BackgroundVideoInit();
  //      oo7Ani.backgroundVideo( bvInit,'#container', ['../static/images/bg-video.mp4'],'.background-video-tab','.background-video-img','0px');
	// ;

    function BackgroundVideoInit() {
        // Plugin options
        this.opt = null;
        // The Video element
        this.videoEl = null;
    
        // Approximate Loading Rate
        //
        // The value will be a number like 0.8
        // which means to load 4 seconds of the video
        // it takes 5 seconds. If the number is super low
        // like 0.2 (regular 3g connections) then you can
        // decide whether to play the video or not.
        // This behaviour will be controller with
        // the `acceptableLoadingRate` option.
        this.approxLoadingRate = null;
    
        // Methods to which `this` will be bound
        this._resize = null;
        this._progress = null;
    
        // Time at which video is initialized
        this.startTime = null;
    
        this.onLoadCalled = false;
    
        // Initialize and setup the video in DOM`
        this.init = function (opt) {
          // If not set then set to an empty object
          this.opt = opt = opt || {};
    
          var self = this;
    
          self._resize = self.resize.bind(this);
    
          // Video element
          self.videoEl = opt.videoEl;
    
          // Meta data event
          self.videoEl.addEventListener('loadedmetadata', self._resize, false);
    
          // Fired when enough has been buffered to begin the video
          // self.videoEl.readyState === 4 (HAVE_ENOUGH_DATA)
          self.videoEl.addEventListener('canplay', function () {
            // Play the video when enough has been buffered
            if (!self.opt.isMobile) {
              self.opt.onLoad && self.opt.onLoad();
              if (self.opt.autoplay !== false) self.videoEl.play();
            }
          });
    
          // If resizing is required (resize video as window/container resizes)
          if (self.opt.resize) {
            global.addEventListener('resize', self._resize, false);
          }
    
          // Start time of video initialization
          this.startTime = (new Date()).getTime();
    
          // Create `source` for video
          this.opt.src.forEach(function (srcOb, i, arr) {
            var key
              , val
              , source = document.createElement('source');
    
            // Set all the attribute key=val supplied in `src` option
            for (key in srcOb) {
              if (srcOb.hasOwnProperty(key)) {
                val = srcOb[key];
    
                source.setAttribute(key, val);
              }
            }
    
            self.videoEl.appendChild(source);
          });
    
          if (self.opt.isMobile) {
            if (self.opt.playButton) {
              self.opt.videoEl.addEventListener('timeupdate', function () {
                if (!self.onLoadCalled) {
                  self.opt.onLoad && self.opt.onLoad();
                  self.onLoadCalled = true;
                }
              });
    
    
              self.opt.playButton.addEventListener('click', function () {
                self.opt.pauseButton.style.display = 'inline-block';
                this.style.display = 'none';
    
                self.videoEl.play();
              }, false);
    
              self.opt.pauseButton.addEventListener('click', function () {
                this.style.display = 'none';
                self.opt.playButton.style.display = 'inline-block';
    
                self.videoEl.pause();
              }, false);
            }
          }
    
          return;
        }
    
        // Called once video metadata is available
        //
        // Also called when window/container is resized
        this.resize = function () {
          // IE/Edge still don't support object-fit: cover
          if ('object-fit' in document.body.style) return;
    
          // Video's intrinsic dimensions
          var w = this.videoEl.videoWidth
            , h = this.videoEl.videoHeight;
    
          // Intrinsic ratio
          // Will be more than 1 if W > H and less if H > W
          var videoRatio = (w / h).toFixed(2);
    
          // Get the container DOM element and its styles
          //
          // Also calculate the min dimensions required (this will be
          // the container dimentions)
          var container = this.opt.container
            , containerStyles = global.getComputedStyle(container)
            , minW = parseInt( containerStyles.getPropertyValue('width') )
            , minH = parseInt( containerStyles.getPropertyValue('height') );
    
          // If !border-box then add paddings to width and height
          if (containerStyles.getPropertyValue('box-sizing') !== 'border-box') {
            var paddingTop = containerStyles.getPropertyValue('padding-top')
              , paddingBottom = containerStyles.getPropertyValue('padding-bottom')
              , paddingLeft = containerStyles.getPropertyValue('padding-left')
              , paddingRight = containerStyles.getPropertyValue('padding-right');
    
            paddingTop = parseInt(paddingTop);
            paddingBottom = parseInt(paddingBottom);
            paddingLeft = parseInt(paddingLeft);
            paddingRight = parseInt(paddingRight);
    
            minW += paddingLeft + paddingRight;
            minH += paddingTop + paddingBottom;
          }
    
          // What's the min:intrinsic dimensions
          //
          // The idea is to get which of the container dimension
          // has a higher value when compared with the equivalents
          // of the video. Imagine a 1200x700 container and
          // 1000x500 video. Then in order to find the right balance
          // and do minimum scaling, we have to find the dimension
          // with higher ratio.
          //
          // Ex: 1200/1000 = 1.2 and 700/500 = 1.4 - So it is best to
          // scale 500 to 700 and then calculate what should be the
          // right width. If we scale 1000 to 1200 then the height
          // will become 600 proportionately.
          var widthRatio = minW / w;
          var heightRatio = minH / h;
    
          // Whichever ratio is more, the scaling
          // has to be done over that dimension
          if (widthRatio > heightRatio) {
            var new_width = minW;
            var new_height = Math.ceil( new_width / videoRatio );
          }
          else {
            var new_height = minH;
            var new_width = Math.ceil( new_height * videoRatio );
          }
    
          this.videoEl.style.width = new_width + 'px';
          this.videoEl.style.height = new_height + 'px';
        };
      }

      function backgroundVideo( bvInit,bvFather,[bvSrcWeb, bvSrcInner],bvTable = '.background-video-tab', bvImg = '.background-video-img', mPlay='768px' ){

            bvInit.init({
              // 0. 抓取HTML视频标签
              videoEl: document.querySelector( `${bvFather} ${bvTable}` ),
              // 1. 抓取容器 - 视频父类标签
              container: document.querySelector( bvFather ),
              // 自动调整视频大小，达到background-size:cover;效果
              resize: true,
              // 检测到移动端停止播放视频
              isMobile: window.matchMedia(`(max-width: ${mPlay} )`).matches,
              // 2. 获取视频路径,并限制格式( 这里可以多准备几个视频,防止视频出错 )
              src: [
                {
                  src: bvSrcWeb,
                  type: 'video/webm;codecs="vp8, vorbis"'
                },
                {
                  src: bvSrcInner,
                  type: 'video/mp4'
                }
              ],
              // 3. 设置视频缓冲图片背景图  
              onLoad: function () {
                document.querySelector( `${bvFather} ${bvImg}` ).style.display = 'none';
              }
            });

      }



    return {

        // 3. 动画类
        animateCSS: ( element, animationName, callback ) => {
          animateCSS( element, animationName, callback );
        },
        moreAnimateCSS: (  activeId, aniObj ) => {
            moreAnimateCSS(activeId, aniObj );
        },
        moreAnimateInit: ( group ) => {
            return moreAnimateInit( group );
        },

        BackgroundVideoInit: BackgroundVideoInit,

        backgroundVideo: ( bvInit,bvFather,[bvSrcWeb, bvSrcInner],bvTable, bvImg, mPlay ) => {
          // 异步执行动态背景视频,提高效率
          async function exeBackgroundVideo( bvInit,bvFather,[bvSrcWeb, bvSrcInner],bvTable, bvImg, mPlay ){
            try{
              backgroundVideo( bvInit,bvFather,[bvSrcWeb, bvSrcInner],bvTable, bvImg, mPlay );
            }
            catch{
              console.log('获取视频失败');
            }
          }
          exeBackgroundVideo( bvInit,bvFather,[bvSrcWeb, bvSrcInner],bvTable, bvImg, mPlay );
        },

    }


} )( window, oo7Str );

//////////////////// 3. 动画类-END


//////////////////// 4. 交互类-BGN

oo7Ui = ( function(){

  
  // 4-0. 清除指定目标class名
  //	用法:
  //      oo7Ui.clearAllClass( 目标class类名, 删除目标中class类名 );
  //  示例:
  //      HTML: <a class="btn active" ></a> <a class="btn active" ></a>
  //      JS: oo7Ui.clearAllClass( '.btn', 'active' );
  function clearAllClass( tar, classitem ){
    Array.from(document.querySelectorAll( `${tar},${tar} *` )).forEach( cur => cur.classList.remove( classitem )); 
  }

  // 4-1. 选中单个按钮 - 指定目标进行单选样式变化
  //	用法:
  //      oo7Ui.clickOnlyAddClass( 目标父类ID, 目标class名, 所增加class名 );
  //  示例:
  //      HTML: 
  /*
            <div class="#product">
                <a href="#" class="btn-more">
                  牡丹
                </a>
                <a href="#" class="btn-more">
                  芍药
                </a>
                <a href="#" class="btn-more">
                  苗木
                </a>
            </div>
  */
  //      CSS: 
  //        .active{ background: #144d41; color:#f8f8f8; }
  //      JS:
  //        oo7Ui.clickOnlyAddClass( '#product', '.btn-more', 'active' );
  function clickOnlyAddClass( id, tarClassItem, addClassItem ){
    document.querySelector( id ).addEventListener( 'click', cur => {
      const btn = cur.target.closest( tarClassItem );
      if( btn != null ){
        clearAllClass( tarClassItem, addClassItem );
        btn.classList.add( addClassItem );
      }
    } );
  }

  return {

    clearAllClass: ( tar, classitem ) => {
      clearAllClass( tar, classitem );
    },

    clickOnlyAddClass: ( id, tarClassItem, addClassItem ) => {
      clickOnlyAddClass( id, tarClassItem, addClassItem );
    }

  }

} )();

//////////////////// 4. 交互类-END
