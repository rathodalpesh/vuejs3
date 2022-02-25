<template>
    <h2>Child1</h2>
    <button v-on:click="getUser(name)" >get User Name</button>
</template>
<script>
export default {
    name:'Child1',
    data() {
        return {
            name:"Alpesh Rathod"
        }
    },
    props:{
        getUser: Function
    }
}
</script>