<template>
    <div class="container">
          <b-button type="button" variant="secondary" v-b-modal.provider-modal>Add Provider Local</b-button>
<b-modal ref="addProModal" id="provider-modal" title="add new" hide-footer>
    <b-form @submit="onSubmit" class="w-100">
        <b-form-group id="form-benefit-group" label="Benefit" label-for="form-benefit-input">
            <b-form-input id="form-benefit-input" type="text" v-model="addDataProvider.benefit" required placeholder="enter benefit's name">
            </b-form-input>
        </b-form-group>
               <b-form-group id="form-provider-group" label="Provider" label-for="form-provider-input">
            <b-form-input id="form-provider-input" type="text" v-model="addDataProvider.provider" placeholder="enter provider">
            </b-form-input>
        </b-form-group>
               <b-form-group id="form-locality-group" label="Locality" label-for="form-locali-tyinput">
            <b-form-input id="form-locality-input" type="text" v-model="addDataProvider.locality" placeholder="enter locality">
            </b-form-input>
        </b-form-group>
               <b-form-group id="form-regon-group" label="Regon" label-for="form-regon-input">
            <b-form-input id="form-regon-input" type="number" v-model="addDataProvider.regon_provider"  placeholder="enter regon number">
            </b-form-input>
        </b-form-group>
               <b-form-group id="form-covid-group" label="Covid" label-for="form-covid-input">
            <b-form-input id="form-covid-input" type="text" v-model="addDataProvider.covid_19" required placeholder="covid-19 t/f">
            </b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
</b-modal>
        <div>
        <table class="table table-striped table-bordered table-sm">
            <thead>
                <tr><th>benefit</th><th>Provider</th><th>Locality</th><th>Regon</th><th>Covid-19</th></tr>
                </thead>
                <tbody>
                <tr v-for="prov in lists" :key='prov.id'>
                    <td> {{ prov.benefit }} </td>
                     <td> {{ prov.provider }} </td>
    <td> {{ prov.locality }} </td>
    <td> {{ prov.regon_provider }} </td>
    <td> {{ prov.covid_19 }} </td>

                </tr>
                </tbody>
            

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
            addDataProvider:{
                benefit:'',
                provider:'',
                locality:'', 
                regon_provider: '',
                covid_19: '',
                read:[],

            },
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
    addProvider(payload){
        const path='http://localhost:8000/api/';
        axios.post(path,payload).then(()=> {
            this.getData();
        }).catch((error)=> {
            console.log(error);
            this.getData();
        });
    },
    initInput(){
        this.addDataProvider.benefit='';
        this.addDataProvider.provider='';
        this.addDataProvider.regon_provider='';
        this.addDataProvider.locality='';
        this.addDataProvider.covid_19='';
        this.addDataProvider.read=[];
   
    },
    onSubmit(ev){
        ev.preventDefault();
        this.$refs.addProModal.hide();
        let read=false;
        if (this.addDataProvider.read[0]) read =true;
        const payload={
            benefit: this.addDataProvider.benefit,
            provider: this.addDataProvider.provider,
            locality: this.addDataProvider.locality,
            regon_provider: this.addDataProvider.regon_provider,
            covid_19:this.addDataProvider.covid_19,
            read,
        };
        this.addProvider(payload);
        this.initInput();
    },
    created(){
        this.getData();
    }
}
</script>