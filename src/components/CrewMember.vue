<template>
    <article class="member">
        <img :src=" srcImg( member.images.png ) " :alt="member.name">
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
    .member{
        height: 420px;
    }

    img{
        position: absolute;
        bottom: 0;
        right: 0;
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
        width: 445px;
        font-size: 1.35rem;
        line-height: 2rem;
        color: var(--gray);
    }
</style>