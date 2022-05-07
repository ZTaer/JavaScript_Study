const VM = Vue.createApp({

    data() {
        return {
            age: 1,
        }
    },

}).mount('#app');

/**
 * vue访问实例数据
 */
console.log( VM, VM.start, VM.$data.start );