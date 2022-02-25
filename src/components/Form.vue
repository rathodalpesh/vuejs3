<template>
<h1>Form</h1>
<br>
<ul>
    <li v-for="item in error" v-bind:key="item">
        {{ item }} not valid
    </li>
</ul>
<form>
    <label>Email Id : </label>
    <input type="text" placeholder="Enter Email" v-model="user.email">
    <br><br>

    <label>password : </label>
    <input type="text" placeholder="Enter password" v-model="user.password">
    <br><br>

    <label>Country : </label>
    <select v-model="user.country">
        <option>India</option>
        <option>UK</option>
        <option>USA</option>
    </select>
    <br><br>

    <h3>Langauage</h3>
    <label for="java">Java</label>
    <input type="checkbox" value="java" id="java" v-model="user.langauage">
    &nbsp;&nbsp;&nbsp;
    <label for="php">PHP</label>
    <input type="checkbox" value="php" id="php" v-model="user.langauage">
    &nbsp;&nbsp;&nbsp;
    <label for="laravel">Laravel</label>
    <input type="checkbox" value="laravel" id="laravel" v-model="user.langauage">
    <br><br>

    <h3>Who I am</h3>
    <label for="student">student</label>
    <input type="radio" value="student" name="who" id="student" v-model="user.who">
    &nbsp;&nbsp;&nbsp;
    <label for="developer">Developer</label>
    <input type="radio" value="developer" name="who" id="developer" v-model="user.who">
    <br><br>

    <button type="button" v-on:click="login">Login</button>
</form>
</template>

<script>
export default {
    name: "Form",
    data() {
        return {
            user: {
                email: '',
                password: '',
                country: '',
                langauage: [],
                who: ''
            },
            error:[],
        }
    },
    methods: {
        login() {
            this.error = [];
            for (const item in this.user) {
                if (this.user[item] === "" || this.user[item].length === 0 ) {
                    this.error.push(item);
                }
            }
            if(this.error.length===0){
                alert("Submitted");
            }
            console.warn('hello', this.user , this.error );
        }
    },
}
</script>
