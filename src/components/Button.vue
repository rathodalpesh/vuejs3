<template>
    <h1>
        get Count <button v-on:click="getCount()">Click Me</button><br>
        On Double Click <button v-on:dblclick="getName('Button Double clicked')">Click Me</button><br>
        On mouse move <button v-on:mousemove="getConsole()">Click Me</button><br>

        <input type="text" v-model="count"/>
        <h2>{{ count  }}</h2>
    
    </h1>
</template>

<script>
export default {
    name:"Button",
    data() {
        return {
            count:0,
        }
    },
   /*  methods: {
        getName(data){
            alert(data);
        },
        getConsole(){
            console.warn('On mouse move ');
        },
        getCount(){
            this.count = this.count + 1;
        }
    }, */
}
</script>

<style scoped>

</style>