<template>
    <h1>Ref Value</h1>
    <input type="text" ref="input_name" >
    <button v-on:click="getData" >Click Me</button>
</template>
<script>
export default {
    name:"Ref",
    methods: {
        getData(){
            this.$refs.input_name.focus()
            let val = this.$refs.input_name.value;
            console.warn(val);
            this.$refs.input_name.style.color="red";
        }
    },
}
</script>