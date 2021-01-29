<template>
<div class="row mt-3">
    <div class="col form-group">
        <select class="form-control" v-on:change="changePageSize">
            <option value="4">4 per page</option>
            <option value="10"> 10 per page</option>
            <option value="20">20 per page</option>
        </select>
    </div>
    <div v-if="pageCount>1" class="text-right col">
        <div class="btn-group mx-2">
            <b-btn v-for="i in pageNumbers" v-bind:key="i" variant="success" v-bind:class="{ 'btn-primary':i==currPage}"
            v-on:click="setCurrPage(i)" >
                {{ i }}
            </b-btn>
        </div>
    </div>
</div>
</template>

<script>
      import { mapState,mapGetters, mapMutations } from "vuex";

export default {
    computed: {
        ...mapState(["currPage"]),
        ...mapGetters(["pageCount"]),
        pageNumbers(){
            return [...Array(this.pageCount+1).keys()].slice(1);
        }
    },
    methods: {
        ...mapMutations(["setCurrPage", "setPageSize"]),
        changePageSize($event){
            this.setPageSize(Number($event.target.value));
        }
    }
    
}
</script>