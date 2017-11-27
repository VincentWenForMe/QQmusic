<template>
  <div class="recommend">
    <h1>{{ msg }}</h1>
    <h2><router-link to="/Detail">Essential Links</router-link></h2>
  </div>
</template>
<script>
  export default {
    name: 'recommend',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
