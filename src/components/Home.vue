<template>
    <h1>Hello {{ name }}</h1>
    <h1>Email: {{ email }}</h1>
    <h1>Mobile: {{ mobile }}</h1>
    <h1>Name: {{ getName1("Alpesh Rathod") }}</h1>
    
    <h1>All Data: {{ getData().name }}</h1>
    <h1>All Data: {{ getData().email }}</h1>
</template>

<script>
export default {
    name:'Home',
    props: {
        name: String
    },
    data() {
        return {
            email:'alpeshdiu33@gmail.com',
            mobile:"9737304031",
            getName:function(name){
                return name;
            }
        }
    },
    methods: {
        getName1(name){
            return name;
        },
        getData(){
            return {
                name:"Alpesh Rathod",
                email:this.email
            }
        }
    },
}
</script>

<style scoped>
h1{
    color:red;
}
</style>