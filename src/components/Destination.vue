<template>
    <figure>
        <img :src=" srcImg( destination.images.png ) " :alt="destination.name">
    </figure>
    <div>
        <h1>{{ destination.name }}</h1>
        <p>{{ destination.description }}</p>
        <div>
            <div>
                <p>AVG. DISTANCE</p>
                <h3>{{ destination.distance }}</h3>
            </div>
            <div>
                <p>EST. TRAVEL TIME</p>
                <h3>{{ destination.travel }}</h3>
            </div>
        </div>    
    </div>
</template>

<script>
import { mapGetters } from 'vuex';


    export default {
        props:{
            destinationName:{
                type: String,
                required: true
            }
        },
        computed: {
            destination(){
                return this.$store.state.data.destinations.find( item => item.name == this.destinationName)
            },
            ...mapGetters(['srcImg'])     
        }
    }
</script>

<style scoped>

</style>