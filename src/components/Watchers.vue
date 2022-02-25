<template>
    <h1>Watchers {{ counts }}</h1>
    <button  v-on:click="counts = counts+1"> + </button>
    <button v-on:click="counts = counts-1"> - </button>
</template>
<script>
export default{
    name:'Watchers',
    data() {
        return {
            counts:0,
        }
    },
    watch:{
        counts(val,pre){
            if( val > 5 && val>pre ){                
                alert("stop count")
            }
        }
    }
};
</script>
<!-- 
<teleport to="#footer">
    <Footer />
</teleport> -->
<!-- <Unmounted v-if="show"/>
<button v-on:click="show=!show">Hide and show</button> -->