const VM = Vue.createApp({

    /**
     * data 可访问变量
     *      a) return的变量可直接在<template>中使用
     */
    data() {
        return {
            start: "hello word!",
            url: "https://taobao.com",
            vueHtml: "<a href='https://taobao.com' >taobao | v-html方式渲染</a>",
            age: 1,
            props: 1,
            keyboardData: "HI"
        }
    },

    /**
     * methods 可访问方法/函数
     *      a) 放置一些交互类方法
     */
    methods: {
        handleStart() {
            console.log('start')
            return `${this.start.toUpperCase()}`;
        },
        // 单击事件
        handleUiAddAge() {
            this.age++;
        },
        // 单击事件
        handleUiDelAge() {
            this.age--;
        },
        // 输入改变事件
        handleUiChangeAge( event ){
            this.age = event.target.value;
        },
        // 输入改变事件入参
        handleUiChangeProps( event, msg ){
            event.preventDefault(); // 禁用冒泡
            console.log('msg', msg);
            this.props = event.target.value;
        },
        // 按键事件配合
        handleUiKeyboard( event ){
            this.keyboardData = event.target.value;
        }
        
    },

    /**
     * computed放置运算方法
     *      a) computed必须要return一个值,而methods无需
     *      b) computed只有当你引入对应的值发生变化时，才会促发
     */
    computed: {
        // 计算方法,只有当方法中this.xxx发生变化,才促发
        handleCpuAge( ){
            console.log('cpu,age');
            return this.age + 10
        }
    },

    /**
     * watch监听方法
     */
    watch: {
        age( newValue, oldValue ){
            setTimeout(() => {
                console.log('newValue,oldValue', newValue,oldValue)
                this.age = this.age--;
            },3000)
        }
    }
    

}).mount('#app');

/**
 * vue访问实例数据
 */
console.log( VM, VM.start, VM.$data.start );