const VM = Vue.createApp({

    data() {
        return {
            perspective: 100,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
        }
    },

    computed: {
        // 应用style
        handleStyleBox() {
            return {
                transform: `
                    perspective(${this.perspective}px) 
                    rotateX(${this.rotateX}deg) 
                    rotateY(${this.rotateY}deg) 
                    rotateZ(${this.rotateZ}deg) 
                `
                
            }
        }
    },

    methods: {
        // 重置逻辑
        handleUiReset(){
            this.perspective = 100;
            this.rotateX = 0;
            this.rotateY = 0;
            this.rotateZ = 0;
        },

        // 复制逻辑 ( 等待笔记 )
        //     a) 构建textarea塞入复制内容
        //     b) 设定为只读
        //     c) 通过css隐藏内容
        //     d) 塞入数据
        //     e) 增加至dom中
        //     f) 选中内容
        //     g) 复制内容 
        //     h) 移除dom
        handleUiCopy(){
            const el = document.createElement("textarea"); // 构建textarea塞入复制内容
            el.setAttribute("readonly", ""); // 设定为只读
            el.style.display = "none"; // css隐藏textarea
            el.value = `transform: ${this.handleStyleBox.transform}`; // 塞入数据
            document.body.appendChild(el); // 增加至dom中
            el.select(); // 选中内容
            document.execCommand("copy"); // 复制内容
            document.body.removeChild(el); // 移除dom
        }
    }

}).mount('#app');