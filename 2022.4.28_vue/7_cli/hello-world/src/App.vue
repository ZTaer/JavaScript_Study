<template>
  <div class="app">
    <HelloWorld ></HelloWorld>
    <PropsTest :age="age" ></PropsTest>
    <button @click="handleCpuAge(1)" >
      父组件: 增加age
    </button>
    <h3>子组件与父组件通信,emit发射事件</h3>
    <PropsEmit :age="age" @emit-change-age="handleCpuAge" ></PropsEmit>
    <h3>子组件与父组件通信,回调函数 </h3>
    <PropsCallback :age="age" :handleCpuAge="handleCpuAge" ></PropsCallback>
  </div>
</template>

<script>
import HelloWorld from "./components/hello-word/index.vue";
import PropsTest from './components/props-test/index.vue';
import PropsEmit from './components/props-emit/index.vue';
import PropsCallback from './components/props-callback/index.vue';

/**
 * 使用子组件 ( 等待笔记 )
 *    0. vue components登记组件
 *        a) 登记组件后, 可以在template标签中使用
 */

export default {
  name: 'App',
  components: {
    HelloWorld,
    PropsTest,
    PropsEmit,
    PropsCallback
  },
  data() {
    return {
      age: 24
    }
  },
  methods: {
    handleCpuAge ( num = 1 ) {
      this.age = this.age + num;
    },
  }
}
</script>

<style>

</style>
