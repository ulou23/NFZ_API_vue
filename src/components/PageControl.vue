<template>
    <div v-if="pageCount>1" class="text-right">
        <div class="btn-group mx-2">
            <b-btn v-for="i in pageNumbers" v-bind:key="i" variant="success" v-bind:class="{ 'btn-primary':i==currPage}"
            v-on:click="setCurrPage(i)" >
                {{ i }}
            </b-btn>
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
        ...mapMutations(["setCurrPage"])
    }
    
}
</script>