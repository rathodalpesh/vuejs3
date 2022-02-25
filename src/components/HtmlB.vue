<template>
    <h1>{{ text }}</h1>
    <div v-html="tag">

    </div>
</template>
<script>
export default {
    name:'HtmlB',
    data() {
        return {
            text:"Alpesh Rathod",
            tag:"<h1>Alpesh Rathod H1</h1>"
        }
    },
}
</script>