<template>
  <div class="props-emit">
    <h3>
        props emit: {{age}}
    </h3>
    <button @click="handleCpuEmitChangeAge" >
      子组件: 增加age
    </button>
  </div>
</template>

<script>
/**
 * 子组件与父组件通信,emit发射事件  ( 等待笔记 )
 *    a) 子组件: 创建this.$emit事件让父组件监听 
 *    b) 父组件: 监听子组件发射的活动，从而促发方法
 */
export default {
    name: "PropsEmit",
    props: ["age"], 
    emits: ["emit-change-age"], // 登记emits方便vue引擎登记
    methods: {
      handleCpuEmitChangeAge(){
        this.$emit("emit-change-age",1); // 创建this.$emit事件让父组件监听
      }
    } 
}
</script>

<style>

</style>