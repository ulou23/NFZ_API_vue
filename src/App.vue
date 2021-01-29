<template>
  <div id="app">

    <img alt="Vue logo" src="./assets/logo.png">
 <b-nav tabs align="center">
   <b-nav-item>  <router-link to="/">  Home  </router-link> </b-nav-item>
    <b-nav-item>  <router-link to="/user">  UserCart  </router-link> </b-nav-item>
   
    <b-nav-item> <router-link to="/about"> About NFZ providers</router-link> </b-nav-item>
 </b-nav>
    <div class="container">
    <router-view />
    </div>
    <div>
    <Projekts :pages="pages" @new-note="newNote"/>
    </div>
    
    
  </div>

</template>
<script>
import Projekts from './components/Projekts.vue'

export default {
  name:"app",
  components:{
    Projekts
  },
  data: ()=> ({
    pages:[],
    index:0
  }),
  methods:{
    newNote(){
      this.pages.push({
        title:'love',
        content:'registration rules'
      });
      console.log(this.pages)
    },
    saveNote(){
      
    },
  }
}
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
