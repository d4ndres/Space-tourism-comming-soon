<template>
    <div class="ghost-space"></div>
    <div class="center-box">
        <h2>02 Meet your crew</h2>
        <nav>
            <router-link
                v-for="member in crew"
                :key="member.name"
                :to="{name: 'member.show', params: { memberName: member.name}}"
            >{{ member.name }}
            </router-link>
        </nav>
        <router-view/>
    </div>

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

</style>