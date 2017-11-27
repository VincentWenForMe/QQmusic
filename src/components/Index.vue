<template>
  <div class="index">
    <switchItem></switchItem>
    <router-view></router-view>
  </div>
</template>

<script>
  import SwitchItem from '../components/SwitchItem.vue';
  export default {
    name: 'index',
    components: {
      switchItem: SwitchItem
    }
  }
</script>

<style>

</style>
