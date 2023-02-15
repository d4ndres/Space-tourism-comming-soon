<template>
    <article class="destination">
        <figure class="figure">
            <img :src=" srcImg( destination.images.png ) " :alt="destination.name">
        </figure>
        <div class="about">
            <h1 class="about__title">{{ destination.name }}</h1>
            <p class="about__description">{{ destination.description }}</p>
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
        align-items: flex-start;
    }
    .destination > * {
        width: 420px;
    }

    .about__title{
        font-family: 'Bellefair';
        font-style: normal;
        font-weight: 400;
        font-size: 6.5rem;       
        text-transform: uppercase;
        margin: 2rem 0 1rem;
    }

    .about__description {
        font-size: 1.35rem;
        line-height: 2rem;
        margin-bottom: 4rem;
    }
	.line-decoration{
		border-bottom: solid 1px var(--gray);
		height: 1px;
		width: 100%;
		z-index: 1;
        margin: 2rem 0 1rem;
	}

    .about__stats{
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 2rem;
        text-transform: uppercase;
    }
    .stats__item{
        display: flex;
        flex-direction: column;
        font-size: 1rem;
        color: var(--gray);
    }
    .stats__item h3{
        font-family: 'Bellefair';
        font-weight: 400;
        color: var(--white);
        font-size: 2rem;
    }
</style>