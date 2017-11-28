<template>
  <div class="recommend">
    <!--<h2>
      <router-link to="/Detail">Essential Links</router-link>
    </h2>-->
    <ul class="recommend-list clearfix">
      <li v-for="item in indexData.subjects">
        <img :src="item.images.small" width="100%" alt="">
        <div><a :href="{name: 'Detail', params: {id: item.id}}">{{item.title}}</a></div>
        <div><router-link :to="{name: 'Detail', params: {id: item.id}}">{{item.title}}</router-link></div>
      </li>
    </ul>
  </div>
</template>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  import { mapState, mapActions } from 'vuex';
  
  export default {
    name: 'recommend',
    computed: {
      ...mapState(['indexData'])
    },
    created() {
      this.$store.dispatch('getIndexData');
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style>
  .recommend-list {
  
  }
  .recommend-list li {
    float: left;
    width: 50%;
  }

  .recommend-list li div {
    line-height: 30px;
    text-align: center;
  }
</style>
