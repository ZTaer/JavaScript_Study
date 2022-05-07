let vm = Vue.createApp({
    data() {
        return { 
            isPurple: false,
            selectColor: "",
            size: 50
        }
    },
    computed: {
        // 计算class
        circle_class() {
            return {
                purple: this.isPurple,
            }
        },
        // 计算style
        circle_style() {
            return [{ width: this.size + 'px', height: this.size + 'px', lineHeight: this.size + 'px'},{ transform: 'rotate(80deg)' }]
        }
    }
}).mount('#app')