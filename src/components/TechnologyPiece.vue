<template>
    <figure>
        <img :src=" srcImg( piece.images.portrait ) " :alt="piece.name">
    </figure>
    <div>
        <h2>{{ piece.role }}</h2>
        <h1>{{ piece.name }}</h1>
        <p>{{ piece.description }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';


    export default {
        props:{
            pieceName:{
                type: String,
                required: true
            }
        },
        computed: {
            piece(){
                return this.$store.state.data.technology.find( item => item.name == this.pieceName)
            },
            ...mapGetters(['srcImg'])     
        }
    }
</script>

<style scoped>

</style>