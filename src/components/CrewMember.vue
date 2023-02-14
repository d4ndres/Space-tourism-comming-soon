<template>
    <figure>
        <img :src=" srcImg( member.images.png ) " :alt="member.name">
    </figure>
    <div>
        <h2>{{ member.role }}</h2>
        <h1>{{ member.name }}</h1>
        <p>{{ member.bio }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';


    export default {
        props:{
            memberName:{
                type: String,
                required: true
            }
        },
        computed: {
            member(){
                return this.$store.state.data.crew.find( item => item.name == this.memberName)
            },
            ...mapGetters(['srcImg'])     
        }
    }
</script>

<style scoped>

</style>