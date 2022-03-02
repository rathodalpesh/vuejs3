<template>
    <h1>API Call</h1>
    <ul class="item" v-for="item in list" :key="item.id">
        <li>{{ item.id }}</li>
        <li>{{ item.first_name }} {{ item.last_name }}</li>
        <li>{{ item.email }}</li>
        <li><img :src="item.avatar" /></li>
    </ul>
</template>
<script>
import axios from 'axios'
export default {
    name:'API',
    data() {
        return {
            list: [],
        }
    },
    async mounted() {
        let result = await axios.get("https://reqres.in/api/users?page=1");
        this.list = result.data.data;
    },
}
</script>
<style scoped>
.item{
    display: flex;
}

.item img{
    width: 50px;
}

.item li{
    padding: 5px;
    border: 1px solid;
    width: 180px;
    display: inline-block;
    text-align: center;
}
</style>