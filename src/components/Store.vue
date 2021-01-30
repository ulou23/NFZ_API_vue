<template>
    
<b-container>
    <b-row>
        <div class="col bg-dark text-white m-3">
            <a class="navbar-brand"> Health STORE </a>
</div>
    </b-row>
    <b-row>
        <div class="col-3 bg-info p-2">
            <h4 class="text-white m-2">Categories</h4>
            <cat-controls />
        </div>
        <div class="col-9 p-2">
            <product-list />
            </div>
    </b-row>
</b-container>
</template>

<script>
import CatControls from './CatControls.vue'
import ProductList from "./ProductList"

export default {
    components: { ProductList,CatControls }
}
</script>