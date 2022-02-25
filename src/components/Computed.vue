<template>
    <h1>Computed Property</h1>
    <h2>{{ getResult }}</h2>
</template>
<script>
export default{
    name:'Computed',
    data() {
        return {
            dollors:100,
            rupesvalue:75,
            discount:10,
        }
    },
    computed:{
        getResult(){
            return (this.dollors*this.rupesvalue)-this.discount 
        }
    }
};
</script>