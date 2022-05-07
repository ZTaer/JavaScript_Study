let vm = Vue.createApp({

})

/**
 * 构建: 非webpack构建vue组件 ( 等待笔记 )
 *      0. 使用时: <xxx/>
 */

vm.component( "hello",{ 
    data(){
        return { 
            msg: "hello"
        }
    },
    template: `<h1>{{msg}}</h1>`
} );

vm.mount('#app');