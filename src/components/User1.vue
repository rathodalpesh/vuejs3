<template>
    <h1>{{ data.name }} </h1>
    <h2>{{ data.email }}</h2>
    <button v-on:click="getData(data.name)">Alert Name</button>
</template>
<script>
export default {
    name:'User1',
    props:{
        data:Object,
        getData:Function,
    },
}
</script>