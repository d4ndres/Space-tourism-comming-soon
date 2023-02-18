<template>
	<header class="header">
		<figure>
			<img src="/assets/shared/logo.svg" alt="">
		</figure>
		<div class="line-decoration"></div>
		<nav class="nav">
			<router-link :to="{name: 'home'}"><span>00</span>Home</router-link>
			<router-link 
				v-for="(value, key, index) in data"
				:key="key"  
				:to="{ name: key}"
				><span>0{{index + 1}}</span>  {{key}}</router-link>
		</nav>
	</header>
</template>

<script>

import { mapState } from 'vuex';
export default {
	name: 'TheNavigation',
    computed:{
      ...mapState(['data'])
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
			position: static;
		}
		.nav{
			position: absolute;
			margin: 0;
			top: 0; left: 0; right: 0; bottom: 0;
		}
		.nav > *{
			margin: 0;
		}
    }

</style>