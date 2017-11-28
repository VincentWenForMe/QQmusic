<template>
  <div class="detail">
    detail {{this.$route.params}} {{detailData}}
  </div>
</template>

<script>
  export default {
    name: 'detail',
    data() {
      return {
        detailData: {}
      }
    },
    created() {
      this.$axios.get('/apis/movie/subject/' + this.$route.params.id).then(
        response => {
          console.log(response.data);
          this.detailData = response.data;
        }
      ).catch(err => {
        console.log(err);
      })
    }
  }
</script>

<style>

</style>
