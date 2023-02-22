<template>
<div class="bars" :class="{ 'active': state }" id="bars" @click="uppdateState">
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
</div>   
</template>
<script>

export default {
    computed: {
        state(){
            return this.$store.state.state
        }
    },
    methods:{
        uppdateState(){
            this.$store.commit( 'updateState', !this.state )
        }
    }
}

</script>
<style scoped>

.bars {
  z-index: 2;
  position: absolute;
  right: 10px;
  top: 10px;
  background: var(--dark-blue);
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  border-radius: 50%;
  transition: .6s;
  cursor: pointer;
/*  code do not select   */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

}
.bars.active {
  transform: rotate(540deg);
}
.bar {
  background: #fff;
  height: 10%;
  width: 70%;
  border-radius: 10px;
  transition: 0.7s;
  
}

.bars.active .bar:nth-of-type(1) {
  
  transform: rotate(-35deg) translate( -45%, 30%);
  width: 50%;
}
.bars.active .bar:nth-of-type(3) {
  
  transform: rotate(35deg) translate( -45%, -30%);
  width: 50%;
}
</style>