<template>
    <h1>Dynamic Component</h1>

    <button @click="tab='Php'">Php Load</button>
    <button @click="tab='Laravel'">Laravel Load</button>

    <component :is="tab"/>
</template>
<script>
import Laravel from './Laravel.vue'
import Php from './Php.vue'
export default {
    name:'DynamicComponent',
    components:{
        Php,Laravel
    },
    data() {
        return {
            tab:'Laravel'
        }
    },
}
</script>