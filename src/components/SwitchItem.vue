<template>
  <div class="switchItem">
    <router-link to="/Recommend">推荐</router-link>
    <router-link to="/FM">电台</router-link>
    <router-link to="/Sorting">排行</router-link>
    <router-link to="/MV">MV</router-link>
  </div>
</template>

<script>
  export default {
    name: 'switchItem'
  }
</script>
<style>
  .switchItem {
    display: flex;
    line-height: 36px;
    margin-bottom: 10px;
  }
  
  .switchItem a {
    flex: 1;
    text-align: center;
    font-size: 14px;
    border-bottom: 2px solid rgba(255, 255, 255, 0.6);
  }
  
  .switchItem a.active {
    border-bottom-color: rgba(255, 255, 255, 0.3);
  }
</style>
