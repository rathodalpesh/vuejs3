<template>
    <h1 ref="count">Updated {{ count }}</h1>
    <button v-on:click="count = count+1" >count</button>
</template>
<script>
export default {
    name:'Updated',
    data() {
        return {
            count:0,
        }
    },
    beforeUpdate() {
        console.warn("beforeUpdate",this.$refs['count'].textContent)
    },
    updated() {        
        console.warn("updated",this.$refs['count'].textContent)
    },
}
</script>