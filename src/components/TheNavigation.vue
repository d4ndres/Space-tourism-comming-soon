<template>
	<nav class="nav">
		<router-link :to="{name: 'home'}">00 Home</router-link>
		<router-link 
			v-for="(value, key, index) in data"
			:key="key"  
			:to="{ name: key}"
			>0{{index + 1}} {{key}}</router-link>
	</nav>
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
	.nav > * {
		text-transform: uppercase;
		margin: 0 1.5rem;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.router-link-active {
		border-bottom: 1px solid #fff;
	}
	.nav {
		top: 5vh;
		height: 15vh;
		position: absolute;
		right: 0;
		background-color: rgba(255,255,255,0.1);
		backdrop-filter: blur(20px);
		width: 55vw;
		display: flex;
		justify-content: center;
		align-items: center;
	}

</style>