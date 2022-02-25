<template>
<h2>Child Component</h2>
<h3>{{ name }}</h3>

<h3>{{ user.name }}</h3>

<br>
<button v-on:click="getData()"> Call Function</button>
</template>

<script>
export default {
    name: 'Child',
    props: {
        name: String,
        user: Object,
        getData: Function
    }
}
</script>

 <!--  <Child name="Alpesh Rathod" :user="user" :getData="getData"/> -->