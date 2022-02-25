<template>
    <h1>Home1 Component</h1>
    <ul>
        <li v-for="item in user" :key="item.name">
             <User1 :data="item" :getData="getData"/>
        </li>
    </ul>
</template>
<script>
import User1 from './User1.vue'
export default {
    name:'Home1',
    components:{
        User1
    },    
    methods: {
        getData(name){
            alert(name);
        }
    },
    data() {
        return {
            user:[{name:'satish1',email:'satis1h@gmail.com'},{name:'satish2',email:'satish3@gmail.com'},{name:'satish3',email:'satis4h@gmail.com'},{name:'satish4',email:'satish4@gmail.com'}]
        }
    },
}
</script>