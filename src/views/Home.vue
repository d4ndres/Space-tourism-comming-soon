<template>
    <main class="home ">
        <div class="ghost-space"></div>
        <div class="center-box">

            <div class="home__about">
                <h3 class="home__about__introduction">So, you want to travel to</h3>
                <h1 class="home__about__title">Space</h1>
                <p class="home__about__content">
                    Let's face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we'll give you a truly out of this world experience!
                </p>
            </div>
            <div class="home__explore">
                <router-link :to="{name: 'destinations'}">Explore</router-link>
            </div>

        </div>
    </main>
</template>

<style scoped>
    .home {
        background: url('@/assets/home/background-home-desktop.jpg');
        background-position: top left;

    }

    /* .home {
        background-size: 100% 100%;
        background-repeat: no-repeat;
        min-width: 100vw;
        min-height: 80vh;
        
    }
    .home__about{
        width: min(80vw, 385px);
    }
    .home__about__title{
        margin: 1rem 0 2rem;
    }
    .home__about__content{
        text-align: justify;
    }
    .home__explore {
        width: 200px;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        border-radius: 50%;
        
    }
    .home__explore > * {
        color: #000;
        font-size: 1.5rem;
        letter-spacing: 6px;
    }
     */


</style>