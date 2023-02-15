<template>
    <article class="piece">
        
        <img :src=" srcImg( piece.images.portrait ) " :alt="piece.name">
        
        <div class="about">
            <p>THE TERMINOLOGY...</p>
            <h1 >{{ piece.name }}</h1>
            <p  >{{ piece.description }}</p>
        </div>

    </article>
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
    .piece{
        display: flex;
        align-items: center;
    }
    img {
        position: absolute;
        right: 0;
    }
    .about {
        width: 445px;
    }
    .piece{
        display: flex;
    }
    .about h1 {
        font-weight: 400;
        font-family: 'Bellefair';
        font-size: 3rem;
        text-transform: uppercase;
        margin: 1rem 0 2rem;
    }
    .about p{
        font-weight: 400;
        width: 445px;
        font-size: 1.35rem;
        line-height: 2rem;
        color: var(--gray);
    }
</style>