<template>
    <h1 ref="count">Unmounted {{ count }}</h1>
    <!-- <button v-on:click="count = count+1" >count</button> -->
</template>
<script>
export default {
    name:'Unmounted',
    beforeUnmount() {
        console.log("beforeUnmount",this.$refs['count']);
    },
    unmounted() {
        
        console.log("unmounted",this.$refs['count']);
    },
    data() {
        return {
            count:0,
        }
    }
}
</script>