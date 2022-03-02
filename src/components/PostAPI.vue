<template>
    <h1>Post API</h1>

    <input type="text" name="email" v-model="email" placeholder="Enter Email"><br><br>
    <input type="text" name="password" v-model="password" placeholder="Enter Password"><br><br>
    <button v-on:click="addUser()">Submit</button>
    
</template>
<script>
import axios from 'axios';
export default {
    name:"PostAPI",
    data() {
        return {
            email:'',
            password:'',
        }
    },
    methods: {
        async addUser(){
             let result = await axios.post("http://localhost:3000/users",{
                            email:this.email,
                            password:this.password
                        });

            console.warn(result);
        }
    },
}
</script>