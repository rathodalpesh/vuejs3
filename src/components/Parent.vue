<template>
    <h1>Parent</h1>
    <h2>{{ childUserName }}</h2>
    <Child1 :getUser="getUserName"/>
</template>
<script>
import Child1 from './Child1.vue'
export default {
    name:'Parent',
    components:{
        Child1,
    },
    data() {
        return {
            childUserName:"",
        }
    },
    methods: {
        getUserName(name){
            this.childUserName = name;

        }
    },
}
</script>