<template>
  <div class="props-callback">
    <h3>
        props callback: {{age}}
    </h3>
    <button @click="handleCpuAge(1)" >
      子组件: 增加age
    </button>
  </div>
</template>

<script>

/**
 * 子组件与父组件通信,回调函数  ( 等待笔记 )
 *    a) 游戏规则: 与react思路相同
 * 
 * props校验 ( 等待笔记 )
 *    a) 目的: 根据约定类型传输props数据,否则引擎将报错
 *    b) validator校验函数中,符合条件返回true
*         0. 注意: validator中无法调用methods中的方法
 */
export default {
    name: "PropsCallback",
    props: {
      // props校验
      age: {
        type: [ Number, String ],
        default: 0,
        require: true,
        // validator( value ){
        //   return value > 1;
        // }
      },
      handleCpuAge: Function // 非Object时可直接塞入类型
    } 
}
</script>

<style>

</style>