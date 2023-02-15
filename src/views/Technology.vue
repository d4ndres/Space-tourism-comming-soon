<template>
    <main class="technology">
        <div class="ghost-space"></div>
        <div class="center-box">
            <h2 class="title-page"> <span>03</span> Space launch 101</h2>
            <div class="container-geometry">
                <nav class="sub-nav">
                    <router-link
                        class="circle-piece"
                        v-for="(piece, index) in technology"
                        :key="piece.name"
                        :to="{name: 'piece.show', params: { pieceName: piece.name}}"
                    >{{ index + 1}}
                    </router-link>
                </nav>
                <router-view/>
            </div>
        </div>

    </main>


</template>

<script>
import { mapState } from 'vuex';

    export default {
        name: 'Technology',
        computed:{
            ...mapState({
                technology: state => state.data.technology
            })
        },
    }
</script>

<style scoped>
    .technology{
        background-image: url('@/assets/techonology/background-technology-desktop.jpg');
        background-position: top left;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .center-box{
        height: 85vh;
        margin: 0 auto;
        width: 100vw;
        transform: translate(0);
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* position: inherit; */
    }
    .container-geometry {
        display: flex;
        align-items: center;
        align-items: center;
        height: 550px;
        margin-left: 11vw;
    }
    .title-page{

        width: 100%;
        font-family: 'Barlow Condensed';
        font-weight: 400;
        font-size: 2rem;
        letter-spacing: 4.725px;
        text-transform: uppercase;     
        margin-bottom: 6rem;

        margin: 0 auto;
        width: 76vw;
        transform: translate(-1vw);
    }
    .title-page span{
        font-weight: bold;
        padding-right: 1rem;
    }

    .sub-nav{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
    .sub-nav > *{
        font-family: 'Bellefair';
        display: block;
        width: 80px;
        height: 80px;
        border: .5px solid var(--white);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        margin: 1rem 6rem 1rem 0;
    }   

    .router-link-active{
        border-bottom: none;
        background-color: var(--white);
        color: var(--dark-blue);

    }
</style>