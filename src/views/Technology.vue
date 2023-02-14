<template>
    <h2>03 Space launch 101</h2>
    <nav>
        <router-link
            v-for="piece in technology"
            :key="piece.name"
            :to="{name: 'piece.show', params: { pieceName: piece.name}}"
        >{{ piece.name }}
        </router-link>
    </nav>
    <router-view/>

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

</style>