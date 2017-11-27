<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>
<style>
  @import "./assets/reset.css";
  @import "../node_modules/vue-awesome-swiper/node_modules/swiper/dist/css/swiper.min.css";
  
  #app {
    max-width: 750px;
    margin: 0 auto;
    background: rgba(87, 90, 107, 0.98);
    color: #ffffff;
    min-height: 100%;
  }
  
  #app a {
    color: #ffffff;
  }
</style>
