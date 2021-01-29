<template>
    
<b-container>
    <b-row>
        <div class="col bg-dark text-white">
            <a class="navbar-brand"> STORE </a>
</div>
    </b-row>
    <b-row>
        <div class="col-3 bg-info p-2">
            <h4 class="text-white m-2">Categories</h4>
        </div>
        <div class="col-9 p-2">
            <product-list />
            </div>
    </b-row>
</b-container>
</template>

<script>
import ProductList from "./ProductList"

export default {
    components: { ProductList }
}
</script>