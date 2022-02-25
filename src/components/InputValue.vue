<template>
<h1>Input Value</h1>
<br>

<input type="text" placeholder="Enter Email" v-model="email" />
<br><br>

<input type="password" placeholder="Enter Password" v-model="password" />
<br><br>


<h3>Langauage</h3>
<label for="java">Java</label>
<input type="checkbox" value="java" id="java" v-model="langauage">
&nbsp;&nbsp;&nbsp;
<label for="php">PHP</label>
<input type="checkbox" value="php" id="php" v-model="langauage">
&nbsp;&nbsp;&nbsp;
<label for="laravel">Laravel</label>
<input type="checkbox" value="laravel" id="laravel" v-model="langauage">

<br><br>


<h3>Who I am</h3>
<label for="student">student</label>
<input type="radio" value="student" name="who" id="student" v-model="who">
&nbsp;&nbsp;&nbsp;
<label for="developer">Developer</label>
<input type="radio" value="developer" name="who" id="developer" v-model="who">


<br><br>
{{ langauage }}
<br><br>
{{ who }}
<br><br>
<button v-on:click="getValue()">Get Value</button>
</template>

<script>
export default {
    name: "InputValue",
    data() {
        return {
            name: null,
            password: null,
            langauage:[],
            who:null
        }
    },
    methods: {
        getValue() {
            console.warn("Value: ", this.email, this.password,this.langauage)
        }
    },
}
</script>

<style scoped>

</style>
