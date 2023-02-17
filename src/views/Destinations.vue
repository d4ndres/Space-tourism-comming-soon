<template>
    <main class="destinations">
        <div class="ghost-space"></div>
        <div class="center-box">
    
            <h2 class="title-page"> <span>01</span> Pick your destination</h2>
            <div class="container-nav">
                <div class="helper-postion-nav"></div>
                <nav class="sub-nav">
                    <router-link
                        v-for="destination in destinations"
                        :key="destination.name"
                        :to="{name: 'destination.show', params: { destinationName: destination.name}}"
                    >{{ destination.name }}
                    </router-link>
                </nav>
            </div>
            
            <router-view/>
            

        </div>
    </main>

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
    
    .destinations {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .center-box{
        min-height: calc( 100vh - var( --ghost-space ));

    }
    .destinations{
        background: url('@/assets/destination/background-destination-desktop.jpg');
        background-position: top left;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .title-page{
        font-family: 'Barlow Condensed';
        font-weight: 400;
        font-size: 2rem;
        letter-spacing: 4.725px;
        text-transform: uppercase;     
        margin: 2rem 0 0;
        
    }
    .title-page span{
        font-weight: bold;
        padding-right: 1rem;
    }
    .container-nav {
        display: flex;
        justify-content: space-between;
    }

    .sub-nav{
        width: 420px;
        display: flex;
        justify-content: flex-start;
    }

    .sub-nav > * {
		text-transform: uppercase;
		margin: 0 1.5rem;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.2rem;
        padding-bottom: .5rem;
	}
    .sub-nav > *:first-child{
        margin-left: 0;
    }

    @media screen and (max-width: 1440px) {

        .container-nav {
            display: flex;
            justify-content: space-around;
        }
        .container-nav  > * {
            width: 400px;

        }


    }
    @media screen and (max-width: 768px) {

        .title-page{
            font-weight: 400;
            font-size: 1.5rem;
            margin: 3rem 0;
        }
        .helper-postion-nav{
            display: none;
        }
        .container-nav, .sub-nav{
            justify-content: center;
        }


    }
</style>