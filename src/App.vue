<template>
  <div id="app">
    
    <img alt="Vue logo" src="./assets/logo.png">
 <b-nav>
   <b-nav-item>  <router-link to="/">  Home  </router-link> </b-nav-item>
   
    <b-nav-item> <router-link to="/about"> About </router-link> </b-nav-item>
 </b-nav>
    <div class="container">
    <router-view />
    </div>
    
  </div>

</template>


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
