<template>
    <article class="member">
        <figure>
            <img :src=" srcImg( member.images.png ) " :alt="member.name">
        </figure>
        <div class="about">
            <h2 class="about__role">{{ member.role }}</h2>
            <h1 class="about__name">{{ member.name }}</h1>
            <p class="about__bio">{{ member.bio }}</p>
        </div>
    </article>
</template>

<script>
import { mapGetters } from 'vuex';


    export default {
        props:{
            memberName:{
                type: String,
                required: true
            }
        },
        computed: {
            member(){
                return this.$store.state.data.crew.find( item => item.name == this.memberName)
            },
            ...mapGetters(['srcImg'])     
        }
    }
</script>

<style scoped>

    figure{
        position: absolute;
        bottom: 0;
        right: 0;
        height: 500px;
    }
    figure img {
        height: 100%;
    }

    .about__role{
        font-weight: 400;
        text-transform: uppercase;
        font-family: 'Bellefair';
        font-size: 2rem;
        color: var(--gray);
    }   
    .about__name{
        font-weight: 400;
        font-family: 'Bellefair';
        font-size: 3rem;
        text-transform: uppercase;
        margin: 1rem 0 2rem;
    }
    .about__bio{
        font-weight: 400;
        width: min(375px, 80vw);
        font-size: 1.35rem;
        line-height: 2rem;
        color: var(--gray);
    }

    @media screen and (max-width: 768px) {
        .member{
            display: flex;
            flex-direction: column;
            text-align: center;
            justify-content: center;
        }
        .about__bio{
            width: 78vw;
            font-size: 1.35rem;
        }
        figure{
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 470px;
           
        }
    }

    @media screen and (max-width: 500px){
        .destination figure {
            width: 50vw;
        }
        .about__role{
            font-size: 1.1rem;
        }
        .about__name{
            font-size: 1.5rem;
        }
        .about__bio{
            font-size: 1rem;
        }
        figure{
            position: relative;
            height: 300px;
            border-bottom: solid .5px var(--gray);
            margin-bottom: 2rem;
        }

    }    
</style>