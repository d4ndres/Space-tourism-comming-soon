<template>
	<header class="header">
		<figure>
			<img src="/assets/shared/logo.svg" alt="">
		</figure>
		<div class="line-decoration"></div>
		<nav class="nav" :class="{'active': state}">
			<router-link :to="{name: 'home'}" @click="updateState"><span>00</span>Home</router-link>
			<router-link 
				@click="updateState"
				v-for="(value, key, index) in data"
				:key="key"  
				:to="{ name: key}"
				><span>0{{index + 1}}</span>  {{key}}</router-link>
		</nav>
		<BurgerButton class="btn-burger"/>
	</header>
</template>

<script>
import BurgerButton from './BurgerButton.vue';
import { mapState } from 'vuex';
export default {
	name: 'TheNavigation',
    computed:{
      ...mapState(['data', 'state'])
    },
	components: {
		BurgerButton,
	},
	methods: {
		updateState(){
			this.$store.commit( 'updateState', false )
		}
	}
}
</script>

<style scoped>
	.header{
		width: 95vw;
		position: absolute;
		right: 0;
		top: calc( var(--ghost-space) / 3);
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 2;
		
	}
	figure {
		display: flex;
		align-items: center;
	}
	.nav {
		background-color: rgba(255,255,255,0.1);
		backdrop-filter: blur(20px);
		height: calc( var(--ghost-space) * 2 / 3);
		display: flex;
		justify-content: center;
		align-items: center;
		min-width: 55vw;
	}
	.nav > * {
		text-transform: uppercase;
		margin: 0 1.5rem;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.2rem;
	}
	.line-decoration{
		border-bottom: solid 1px var(--gray);
		height: 1px;
		width: 40vw;
		transform: translate(3vw);
		z-index: 2;
	}
	.btn-burger{
		visibility: hidden;
	}
	
	@media screen and ( max-width: 768px ){
		.header {
			top: 0;
		}
		.nav {
			height: calc( var(--ghost-space) );
		}

		.line-decoration, .nav > * span{
			display: none;
		}
		
	}

	@media screen and ( max-width: 500px ) {
		.header {
			width: 100vw;
			top: 0;
			
			
		}
		figure{
			padding: 10px;
			z-index: 2;
		}
		.nav{
			position:fixed;
			top: 0;
			width: 100vw;
			height: 100vh;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			transform: translateX(100vw);
			transition: .6s;
		}
		.nav.active {
			
			transform: translateX(0vw);
		}
		.nav > *{
			font-size: 2.5rem;
			color: #000;
			transition: .4s;
			
		}
		.router-link-active {
			border: 0;
			color: #fff;
		}
		.btn-burger{
			visibility: visible;
		}
    }

</style>