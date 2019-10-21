
/*********** OO7EJS.v2.0 目录 *****/
/*
	OO7EJS为js轻量级框架,你可以把他了解为短小精悍的小钢炮
	作者: __OO7__
	源码链接: https://github.com/ZTaer/OO7GoldModl
	如果你有更好的想法可以联系我: QQ - 1069798804 ( 加好友时记得留言jsUser )
	
  0. 防出错类 - oo7Init

	1. 字符串类 - oo7Str
        
	2. 计算类 - oo7Cul
        
  3. 动画类 - oo7Ani
      3-0. 动画初始化以及准备( CDN ): Animate.css, ScrollWatch.js, 准备CSS
      3-1. 单个类执行动画,与Animate.css配合使用: animate( 类名, 动画名, 函数-动画完毕后执行 )
      3-2. 多个类执行动画,与Animate.css配合使用:  moreAnimateCSS( 当前视图标签ID, 父类ID--css选中方式, 要执行动画的子类--css选中方式，动画效果--animate.css配合, 附加类--目的是自定义css来操控动画 )
      3-3. 自适应背景视频，与OO7BTS.scss配合: 变量初始化backgroundVideoInit() backgroundVideo( 初始化变量, 'css父类容器名',['网页视频路径','本地视频路径'],'标签video类名','视频缓冲图片路径','达到指定分辨率时禁止播放-默认为768px' );

  4. 交互类 - oo7Ui

  6. 其他类 - oo7Other
	
*/



//////////////////// 3. 动画类-BGN
const oo7Ani = ( function( global ){


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
    //      2. 准备CSS: .oo7-animate{ opacity: 0; }
    //      3. 准备SCSS: OO7BTS.scss
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
    //	用法:
    //      HTML: 待动画标签加入类名.oo7-Animate
    //      CSS: .oo7-animate{ opacity: 0; }
    //      JS: moreAnimateCSS( 当前视图标签ID, 父类ID--css选中方式, 要执行动画的子类--css选中方式，动画效果--animate.css配合, 附加类--目的是自定义css来操控动画 )
    //  示例:
    //      activeId = 'test' // 当前视图ID
    //      oo7.moreAnimateCSS( activeId, '#wan_banner1',['h1','h2'],'bounceIn' );
    function moreAnimateCSS( activeId, fatherId, classGroup, animate = 'fadeInUp', animateClass='' ){
        if( fatherId.includes(activeId) ){
            for( cur of classGroup ){
                let target = `${fatherId} ${cur}`; 

                Array.from(document.querySelectorAll(target)).forEach( cur => cur.classList.toggle('oo7-animate') );
                animateCSS(target, animate);

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


  // 3-3. 自适应背景视频，与OO7BTS.scss配合
  //  来源: https://github.com/rishabhp/bideo.js
  //  原理: https://codetheory.in/html5-fullscreen-background-video/
  //	用法:
  //      HTML: 核心class名 - .background-video-tab - .background-video-img - .background-video-container,详细使用情况请看示例
  //      CSS: @include background-video-init( 背景图片路径 ); 
  //      JS: let bv = new oo7.backgroundVideoInit()背景视频初始化; oo7.backgroundVideo( 变量名称(bv), 'css父类容器名',['网页视频路径','本地视频路径'],'标签video类名','视频缓冲图片路径','达到指定分辨率时禁止播放-默认为768px' );
  //  示例:
  //		HTML:
	//			<div id="test" >
	// 				<video id="background-video-tab" loop muted></video>
	//   			<div class="background-video-img"></div>
	//   			<div class="background-video-container"></div>
	//      	</div>
	// 		SCSS:
	// 			#test{ 
	//				@include background-video-init( 'test.jpg' ); // 此scss函数为OO7BTS中: https://github.com/ZTaer/OO7GoldModl
	//			}
	//      js:
	//			let bv = new oo7.BackgroundVideoInit();( 不同变量名称，创建不同的背景视频,允许多个背景视频同时存在 )
 	//			oo7.backgroundVideo( bv,'#test', ['网页视频路径','本地视频路径'] ); 或者 oo7.backgroundVideo(bv,'#test',['网页视频路径','本地视频路径'],'.background-video-tab','.background-video-img',0);
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
        moreAnimateCSS: (  activeId, fatherId, classGroup, animate, animateClass ) => {
            moreAnimateCSS(activeId, fatherId, classGroup, animate, animateClass );
        },

        BackgroundVideoInit: BackgroundVideoInit,

        backgroundVideo: ( bvInit,bvFather,[bvSrcWeb, bvSrcInner],bvTable, bvImg, mPlay ) => {
      
          backgroundVideo( bvInit,bvFather,[bvSrcWeb, bvSrcInner],bvTable, bvImg, mPlay );
      
        },

    }


} )( window );

//////////////////// 3. 动画类-END

