
// 功能模块
var appMod = ( function(){

    
    /*** 逻辑分析 */
        // 接受二个数组：
            // 父类数组
            // 子类数组
            // 排序对应

        // 循环父类:
            // 抓取子类转换成数组 
            // 数组中的class提取成数组
            // 判断数组中所有内容是否其中之一存中指定class
                // 是: 不操作
                // 否: 给1号数组添加指定数组
    function collapse_window( father,son,target ){ // ( 加入黄金模块 )

        // NodeList转换为数组
        var list = function( target ){
            var targetList =  document.querySelectorAll(target);
            targetList = Array.prototype.slice.call(targetList);
            return targetList;
        }

        // 判断目标的class是否有指定类
        var  indexOftarget = function( search,target ){
            var sclass = document.querySelector( search ).classList;
            sclass = Array.prototype.slice.call(sclass);
            return sclass.indexOf( target );
        };

        // 延迟执行函数( 笔记未完成 )
        setTimeout( function(){
            var targetList;

            // 根据父类数决定循环次数
            for( var i=0; i<father.length; i++ ){
                targetList = [];
                var sonList =  list( son[i] );
                var sonClass = sonList.map( function(cur){
                    return  Array.prototype.slice.call(cur.classList);
                } ); // 获取子类所有class

                // 生成是否存在目标的数组
                sonClass.forEach( function( cur ){
                    var door = cur.indexOf(target[i]);
                    if( door > 0 ){
                        targetList.push(1);
                    }
                    else{
                        targetList.push(0);
                    }
                } );

                // 如果全部都不存在目标，则在首位添加目标
                if( targetList.indexOf(1) < 0 ){ // indexOf() ( 笔记未完成 )
                    document.querySelector( son[i] ).classList.add(target[i]);
                }
            }
        },50 );
    }

    return{

        pubControlShow: function(father,son,target){
            return collapse_window(father,son,target);
        }

    }   

} )();

// UI模块
var uiMod = ( function(){

    var Dom_String = {
        mainNews: '#mainNews',
        newsFather: ['#nav-1','#nav-2','#nav-3'],
        newsSon: ['.collapse-window-1','.collapse-window-2','.collapse-window-3'],
        newsTarget: ['show','show','show']

    };

    return {
        pubDom: function(){
            return Dom_String;
        }

    };

} )();


// 控制台
var control =  ( function( app,ui ){

    var DOM = ui.pubDom();

    // 保证新闻栏目正常使用
    var controlShow = function(event){
        var itemsID = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.id; 
        if( itemsID == 'mainNews' ){
            app.pubControlShow( DOM.newsFather,DOM.newsSon,DOM.newsTarget );
        }
    }

    // 主监听
    var setUpEventLiteners = function(){
        // 监听新闻按钮
        document.querySelector( DOM.mainNews ).addEventListener( 'click',controlShow); 

    };

    // 初始化函数
    var init = function(){
        setUpEventLiteners();
    };

    return{
        init: function(){
            return init();
        }
    };

} )( appMod,uiMod );

control.init();


  