<template>
    
    <b-container>
<h1> User List Deliver  </h1>
<b-row>
    <b-col cols="8">
        
            <CartList />
    </b-col>
        <b-col cols="4">
            <ProductList />
        </b-col>
    </b-row>
    </b-container>

</template>
<script>

import CartList from './CartList';
import ProductList from './ProductList';
export default {
    name: 'User',
    components: {
        CartList,
        ProductList
    },

};
</script>