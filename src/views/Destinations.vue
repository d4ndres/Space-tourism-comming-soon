<template>
    <h2>01 Pick your destination</h2>
    <!-- <nav>
        <a 
            v-for="destination in destinations"
            :key="destination.name"
        >{{ destination.name }}</a>
    </nav>

    <Destination 
        v-for="destination in destinations"
        :key="destination.name"
        :destination="destination"
    /> -->
    <nav>
        <router-link
            v-for="destination in destinations"
            :key="destination.name"
            :to="{name: 'destination.show', params: { destinationName: destination.name}}"
        >{{ destination.name }}
        </router-link>
    </nav>
    <router-view/>

</template>

<script>
import { mapState } from 'vuex';
// import Destination from '@/components/Destination.vue';

    export default {
        computed:{
            ...mapState({
                destinations: state => state.data.destinations
            })
        },
    }
</script>

<style scoped>

</style>