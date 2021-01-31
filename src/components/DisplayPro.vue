<template>
    <div>
        <b-table striped hover :items="products">
            <tr>
                <th> Name</th>
                <th>Cateogry</th>
                <th>Price</th>
                <th></th>
            </tr>
            <tbody>
                <tr v-for="p in products" v-bind:key="p.id">
                    <td> {{ p.name }}</td>
                    <td> {{ p.cateogry }} </td>
                    <td> {{ p.price }}</td>
                    <td>
                        <b-btn variant="primary" v-on:click="editPro(p)">
                            Edit </b-btn>
                         <b-btn variant="danger" v-on:click="deletePro(p)" >Delete </b-btn>
                    </td></tr>
                    <tr v-if="products.length==0">
                        <td colspan="5" class="text-center">No Data </td>
                    </tr>
            </tbody>
        </b-table>
        <div class="text-center">
            <b-btn variant="primary" v-on:click="createNew">
                Create </b-btn>
        </div>
    </div>
</template>
<script>

import { mapState, mapActions, mapMutations } from "vuex";

export default {
   
    computed: {
        ...mapState(["products"])
        
    },
    methods: {
        ...mapMutations({
            editPro: "selectPro",
            createNew: "selectPro",
        }),
        ...mapActions({
            getPro: "getProdAx",
            deletePro: "deleteProductAx"
        })
    },
    created(){
        this.getPro();
    }
}
</script>