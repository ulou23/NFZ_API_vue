<template>
    
<div>
    <h1> NFZ providers </h1>
    <table class="table">
            
                <tr v-for="prov in datanfz" :key='prov.id'>
                 
                     <td> {{ prov }} </td>

            
</tr>
        </table>
        
</div>
</template>


<script>

import axios from 'axios';


export default {
    name: 'About',
    data() {
        return {
            
            datanfz:[],
        };
    },
    methods: {
        getData(){
      const path='https://api.nfz.gov.pl/app-itl-api/queues?format=json&case=1&province=01&benefitForChild=true&api-version=1.3';
axios.get(path).then((res)=> {
  
   let data=res.data.data;
   data.forEach(element => {this.datanfz.push(element.attributes.provider) }
).catch((error)=> { console.log(error);
});
            });
        },
    },
    created(){
        this.getData();
    }
}
</script>