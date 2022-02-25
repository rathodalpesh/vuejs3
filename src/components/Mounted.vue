<template>
    <!-- <h1>Mounted {{ name }}</h1> -->
    <h1>Profile {{ profilename }}</h1>
    <p>Hello </p>
</template>
<script>
import {useRoute} from 'vue-router'
export default {
    name:'Mounted',
    data() {
        console.log("Alpesh Rathod");
        return {
            name:"Alpesh Rathod",
            profilename:'',
        }
    },
    beforeMount() {
        console.log("beforeMount",this.$el)
    },
    mounted() {        
        const route = useRoute();
        console.log("mounted",route.params.name)
        this.profilename = route.params.name;

    }
}
</script>