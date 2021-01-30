<template>
    <b-container>
        <b-row class="my-2" v-for="c in categories" v-bind:key="c">
            <b-btn class="btn btn-block" v-on:click="setCurrCat(c)" v-bind:class="c==currCat ? 'btn-primary' : 'btn-secondary'">
                {{ c }}
                </b-btn>
        </b-row>
    </b-container>
</template>


<script>

import { mapState, mapGetters, mapMutations } from "vuex";

export default {
    computed: {
        ...mapState(["currCat"]),
        ...mapGetters(["categories"])
    },
    methods:{
        ...mapMutations(["setCurrCat"])
    }
    
}
</script>