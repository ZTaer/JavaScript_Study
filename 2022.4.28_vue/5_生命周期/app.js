let vm = Vue.createApp({

    data() {
        return {
            msg: "Loading..."
        }
    },

    /**
     * 加载组件时: 生命周期
     */
    // 准备构建
    beforeCreate() {
        console.log('加载组件时: beforeCreate()',this.msg)
    }, 

    // 已构建
    created() {
        console.log('加载组件时: created()',this.msg)
    },

    // 准备挂载
    //      a) data数据可读取
    //      b) 未渲染dom: this.$el可查看渲染的dom
    beforeMount() {
        console.log('加载组件时: beforeMount()')
    },

    // 已挂载
    //      a) data数据可读取
    //      b) 渲染dom: this.$el可查看渲染的dom
    mounted() {
        console.log('加载组件时: mounted()')
    },

    /**
     * 数据更新时: 生命周期
     */
    // 准备更新
    //      a) data数据发生变化
    beforeUpdate() {
        console.log('数据更新时: beforeUpdate()')
    },

    // 更新完毕
    updated() {
        console.log('数据更新时: updated()')
    },

    /**
     * 卸载组件时: 生命周期
     */
    // 准备卸载
    beforeUnmount() {
        console.log('卸载组件时: beforeUnmount()')
    },

    // 已卸载
    unmounted() {
        console.log('卸载组件时: unmounted()')
    }

})

vm.mount('#app');