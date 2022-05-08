<template>
  <HelloWorld ></HelloWorld>
</template>

<script>
import HelloWorld from "./components/hello-word/index.vue";

/**
 * 使用子组件 ( 等待笔记 )
 *    0. vue components登记组件
 *        a) 登记组件后, 可以在template标签中使用
 */

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>

</style>
