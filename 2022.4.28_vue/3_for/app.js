const VM = Vue.createApp({

    data() {
        return {
            dataSource: [ "A","B","C" ],
            dataSourceList: [ 
                {name: "AName", age: 1, cars: { a1:"a1",a2:"a2",a3:"a3" } },
                {name: "BName", age: 2, cars: { b1:"b1",b2:"b2",b3:"b3" }},
                {name: "CName", age: 3, cars: { c1:"c1",c2:"c2",c3:"c3" }},
            ]
        }
    },

}).mount('#app');

/**
 * vue访问实例数据
 */
console.log( VM, VM.start, VM.$data.start );