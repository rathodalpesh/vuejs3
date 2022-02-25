<template>
    <h1>Created {{ name }}</h1>
</template>
<script>
export default {
    name:'Created',
    data() {
        console.log("Alpesh Rathod");
        return {
            name:"Alpesh Rathod",
        }
    },
    beforeCreate() {            
        alert("beforeCreate");
    },
    created() {
        this.name = "Alpesh C R";
        alert("created");
    },
}
</script>