<template>
<h1 :class="applystyle"> Class Binding </h1>
<button v-on:click="colorfull=!colorfull">Apply Style</button>
</template>

<script>
 export default {
     name: "Css",
     data() {
         return {
             colorfull: true
         }
     },
     computed: {
         applystyle() {
             return {
                 green: this.colorfull,
                 err: true,
                 other: false
             }
         }
     }
 }
</script>

<style scoped>
h1 {
    color: red;
}

.green {
    background-color: green;
}
.err{
    color: greenyellow;
}
.other{
    font-size: 50px;;
}
</style>
