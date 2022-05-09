<template>
    <div class="hello-word">
        <h1>{{msg}}</h1>
    </div>
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


<style scoped lang="scss" >
   /**
    * css作用域: style下的scoped属性作用( 等待笔记 )
    *       a) 文档: https://staging-cn.vuejs.org/api/sfc-css-features.html#scoped-css
    *       b) 作用: 样式仅作用在当前组件下
    * vue项目使用sass( 等待笔记 )
    *       a) 安装: yarn add sass-loader sass -D
    *       b) 注意: lang="scss" --> <style scoped lang="scss" >
    */
    .hello-word{
        h1{
            color: green;
        }
    }

</style>