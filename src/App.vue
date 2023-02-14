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