const elementString = {
    start: 'start',
    end: 'end',
}


class Animate{

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


 function Background_video() {
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

      console.log( opt );
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
        window.addEventListener('resize', self._resize, false);
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
        , containerStyles = window.getComputedStyle(container)
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

  const backgroundVideo =  ( bvInit,bvFather,[bvSrcWeb, bvSrcInner],bvTable = '.background-video-tab', bvImg = '.background-video-img', mPlay='768px' ) => {

    console.log('start');

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


export { Animate, Background_video, backgroundVideo };