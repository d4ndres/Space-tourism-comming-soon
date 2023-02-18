<template>
    <main class="crew">
        <div class="ghost-space"></div>
        <div class="center-box">

            <h2 class="title-page"> <span>02</span> Meet your crew</h2>
            <div class="container-geometry">

                <nav class="sub-nav">
                    <router-link
                        class="cicle-member"
                        v-for="member in crew"
                        :key="member.name"
                        :to="{name: 'member.show', params: { memberName: member.name}}"
                    >
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
        name: 'Crew',
        computed:{
            ...mapState({
                crew: state => state.data.crew
            })
        },
    }
</script>

<style scoped>
    .crew{
        background-image: url('@/assets/crew/background-crew-desktop.jpg');
        background-position: top left;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .center-box{
        min-height: calc( 100vh - var( --ghost-space ));
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
    }
    .container-geometry{
        display: flex;
        flex-direction: column;
        
    }
    .title-page span{
        font-weight: bold;
        padding-right: 1rem;
    }
    .title-page{
        font-family: 'Barlow Condensed';
        font-weight: 400;
        font-size: 2rem;
        letter-spacing: 4.725px;
        text-transform: uppercase;     
        margin: 2rem 0 0;
    }

    .cicle-member{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: rgba(255,255,255,0.3);
        display: block;
    }
    .sub-nav {
        width: 150px;
        display: flex;
        justify-content: space-between; 
        order: 1;
        margin: 3rem 0;
    }

    .router-link-active{
        border-bottom: none;
        background-color: var(--white);
    }

    @media screen and (max-width: 768px) {
        .crew{
            background-image: url('@/assets/crew/background-crew-tablet.jpg');
        }
        .title-page{
            font-weight: 400;
            font-size: 1.5rem;
            margin: 3rem 0;
            align-self: flex-start;
        }
        .center-box{
            justify-content: flex-start;
            align-items: center;
        }
        .container-geometry{
            align-items: center;
        }
    }

</style>