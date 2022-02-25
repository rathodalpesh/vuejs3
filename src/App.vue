<template>
  <img alt="Vue logo" src="./assets/logo.png" /><br />
  <router-link to="/created">Created</router-link><br /><br />
  <!-- <router-link to="/mounted">Mounted</router-link><br><br> -->
  <router-link to="/mounted/alpesh">Profile Alpesh</router-link><br /><br />
  <router-link to="/mounted/shatish">Profile Shatish</router-link><br /><br />
  <router-link to="/updated">Updated</router-link><br /><br />
  <router-link to="/123123123">Unmounted</router-link><br /><br />

  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
