<template>
    <main class="home">
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
            
            <router-link 
                class="explore"
                :to="{name: 'destinations'}">Explore</router-link>
            

        </div>
    </main>
</template>

<style scoped>

    .home {
        background: url('@/assets/home/background-home-desktop.jpg');
        background-position: top left;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .center-box {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding-bottom: var( --ghost-space );
        min-height: calc( 100vh - var( --ghost-space ));
        
    }
    p, h3 {
        color: var(--gray);
    }

    .home__about{
        width: 450px;
    }
    .home__about__introduction{
        font-size: 1.9rem;
        text-transform: uppercase;
    }
    .home__about__title {
        font-family: 'Bellefair';
        text-transform: uppercase;
        font-size: 10rem;
    }
    .home__about__content {
        font-size: 1.1rem;
        line-height: 2rem;
    }
    .explore{
        width: 18rem;
        height: 18rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        letter-spacing: 2px;
        font-family: 'Bellefair';
        text-transform: uppercase;
        background-color: var(--white);
        color: var(--dark-blue);
        border-radius: 50%;
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.3);
        transition: .4s;
    }
    .explore:hover {
        box-shadow: 0 0 0px 3rem rgba(255, 255, 255, .4);
    }
    @media screen and (max-width: 1440px) {

        .home__about__introduction{
            font-size: 1.8rem;
        }
        .home__about__title {
            font-size: 8rem;
        }

        .explore{
            width: 14rem;
            height: 14rem;
            font-size: 1.5rem;
        }

        
    }
    @media screen and (max-width: 768px){

        .home {
            background: url('@/assets/home/background-home-tablet.jpg');
            background-position: top left;
            background-size: cover;
            background-repeat: no-repeat;
        }
        .center-box {
            flex-wrap: wrap;
            align-items:end;
            justify-content: center;
            text-align: center;
            
        }
        .home__about__title {
            margin: 2rem 0;
        }
    }
    @media screen and (max-width: 500px){
        .home__about__introduction{
            font-size: 1.6rem;
            margin-top: 1.2rem;
        }
        .home__about__title {
            font-size: 6rem;
            margin: 1rem 0;
        }
        .explore{
            width: 11rem;
            height: 11rem;
            font-size: 1.4rem;
        }
        .home__about__content{
            font-size: 1rem;
        }
    }


</style>