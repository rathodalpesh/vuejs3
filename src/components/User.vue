<template>
    <h1>{{ data.name }} : {{ data.email }}</h1>
</template>
<script>
export default {
    name:'User',
    props:{
        data:Object
    }
}


/*  <ul>
   <li v-for="item in user" :key="item.name">
      <User :data="item"/>
   </li>
 </ul> */
</script>

