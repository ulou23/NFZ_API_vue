<template>
    <div class="container">

        <div>
        <table class="table">
            
                <tr v-for="prov in lists" :key='prov.id'>
                    <td> {{ prov.benefit }} </td>
                     <td> {{ prov.provider }} </td>
    <td> {{ prov.locality }} </td>
    <td> {{ prov.regon_provider }} </td>
    <td> {{ prov.covid_19 }} </td>

                </tr>
            

        </table>
        </div>
    </div>
</template>
<script>

import axios from 'axios';

export default {
    name: 'Provider',
    data() {
        return {
            
            lists:[],
        };
    },
    methods: {
        getData(){
            const path='http://localhost:8000/api/list';
            axios.get(path).then((res)=> {
                this.lists =res.data;
            }).catch((error)=> { console.log(error);
            });
        },
    },
    created(){
        this.getData();
    }
}
</script>