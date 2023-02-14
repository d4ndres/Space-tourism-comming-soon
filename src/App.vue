<template>
  <the-navigation />
  <router-view/>
</template>

<script>
import TheNavigation from '@/components/TheNavigation.vue'

  export default {
    name: 'App',
    components:{
      TheNavigation
    }

  }

</script>

<style>
@import url('@/assets/style.css');
.ghost-space {
  height: 20vh;
}
.center-box{
  width: 76vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  min-height: 100vh;
  padding-bottom: 20vh;
}

body::-webkit-scrollbar {
  display: none;
}

</style>