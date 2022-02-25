<template>
    <h1>Modifiers</h1>
    <br>
    <input type="text" v-model.lazy.trim="data">

    <h2>{{ data }}</h2>
    <h2>{{ typeof(data) }}</h2>
</template>
<script>
export default {
    name:"Modifiers",
    data() {
        return {
            data:'',
        }
    },
}
</script>