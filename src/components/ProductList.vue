<template>
   <div>
              <b-card 
       class="text-center"
       header="NFZ bro"
       footer="check">
       
       
    
           <b-card-text>
               <div v-for="p in products" v-bind:key="p.id">
                   <h4>
                       {{ p.name }}
                       <span class="badge badge-pill badge-primary float-right">
                           {{ p.price | currency }}
                       </span>
                    
                   </h4>
                       <div class="card-text bg-white p-1"> {{ p.description }}</div>
              
               </div>
                </b-card-text>
                <b-button href="#" variant="secondary">GO check </b-button>
           
                
       </b-card>
       <page-control />
       </div> 
</template>
<script>

import { mapGetters } from "vuex";
import PageControl from './PageControl.vue';

export default {
  components: { PageControl },
    name: 'ProductList',

    computed: {
        ...mapGetters({products:"processProducts"})
    },
    filters:{
        currency(v){
            return new Intl.NumberFormat("en-US", {style:"currency", currency:"EUR"}).format(v)
        }
    }
}
</script>