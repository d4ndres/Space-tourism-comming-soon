<template>
    <article class="destination">
        <figure class="figure">
            <img :src=" srcImg( destination.images.png ) " :alt="destination.name">
        </figure>
        <div class="about">
            <h1 class="about__title">{{ destination.name }}</h1>
            <p class="about__content">{{ destination.description }}</p>
            <div class="line-decoration"></div>
            <div class="about__stats">
                <div class="stats__item">
                    <p>AVG. DISTANCE</p>
                    <h3>{{ destination.distance }}</h3>
                </div>
                <div class="stats__item">
                    <p>EST. TRAVEL TIME</p>
                    <h3>{{ destination.travel }}</h3>
                </div>
            </div>    
        </div>
    </article>
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
    .destination{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .destination > * {
        width: 450px;
    }

    .about__title{
        font-family: 'Bellefair';
        font-style: normal;
        font-weight: 400;
        font-size: 6.5rem;       
        text-transform: uppercase; 
    }

    .about__content {
        font-size: 1.1rem;
        line-height: 2rem;
    }
	.line-decoration{
		border-bottom: solid 1px var(--gray);
		height: 1px;
		width: 100%;
		z-index: 1;
        margin: 2rem 0 1rem;
	}

    .about__stats{
        display: flex;
        justify-content: space-around;
    }
    .stats__item{
        display: flex;
        flex-direction: column;

    }
</style>