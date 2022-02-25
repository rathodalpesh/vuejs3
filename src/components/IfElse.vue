<template>
<h1 v-if="show">IF Condition</h1>
<h1 v-else>Else Condition</h1>
<br><br>
<h1>For loop</h1>
<ul>
    <li v-for="item in tech" :key="item">
        {{ item }}
    </li>
</ul>
<br><br>
<h1>For Loop</h1>
<ul>
    <li v-for="item in user" :key="item.email">
       Name is :{{ item.name }} and Email is: {{ item.email }}
    </li>
</ul>
<button v-on:click="show=!show">show</button>
</template>

<script>
export default {
    name: "IfElse",
    data() {
        return {
            show: false,
            tech: ["php", "laravel", "vue", "html", "css", "javascript"],
            user:[{
                name:'Alpesh',
                email:'alpesh@gmail.com'
            },{
                name:'Satish',
                email:'satish@gmail.com'
            },{
                name:'Pintu',
                email:'pintu@gmail.com'
            }],
        }
    },
}
</script>

<style scoped>

</style>
