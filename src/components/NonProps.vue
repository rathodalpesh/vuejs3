<template>
    <!-- <h1>NonProps</h1> -->
    <div>
        <h1>Alpesh</h1>
        <h1>Shatish</h1>
        <h1 v-bind="$attrs">Pintu</h1>
    </div>
</template>
<script>
export default {
    name:'NonProps',
    inheritAttrs:false,
    props:{
        data:String
    }
};
</script>