<template>
	<nav class="nav">
		<router-link :to="{name: 'home'}">Home</router-link>
		<router-link 
			v-for="(value, key) in data"
			:key="key"  
			:to="{ name: key}"
			>{{key}}</router-link>
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
		padding: 10px;
		text-transform: uppercase;
	}

</style>