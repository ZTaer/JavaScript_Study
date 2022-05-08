<template>
  <h1>{{msg}}</h1>
</template>

<script>

/**
 * 构建子组件 ( 等待笔记 )
 *      0. name: 是唯一的
 */

export default {
    name: "HelloWord",
    data() {
        return {
            msg: "HelloWord"
        }
    }
}
</script>

<style>

</style>