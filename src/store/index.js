import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const testdata=[];

for (let i=1;i<=10;i++){
    testdata.push({
        id:i,name:`Prod #S{i}`, category: `Cat ${i % 3}`, description: `this is #${i}`, price: i *50
    })

}

export default new Vuex.Store({
    strict:true,
    state:{
        products:testdata
    }
})