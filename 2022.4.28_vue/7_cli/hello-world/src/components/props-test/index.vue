<template>
  <div class="props-test">
    <h3>
        props test: {{age}}
    </h3>
  </div>
</template>

<script>
/**
 * vue props 组件通信 ( 等待笔记 )
 *      a) 父子通信: 游戏规则思路与react类似
 */
export default {
    name: "PropsTest",
    props: ["age"] // 注意: 接受props为数组,当前age可直接当成变量使用
}
</script>

<style>

</style>