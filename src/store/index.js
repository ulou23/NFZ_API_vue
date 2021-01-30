import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const testdata=[];

for (let i=1;i<=10;i++){
    testdata.push({
        id:i,name:`Product  #${i}`, category: `Category ${i % 3}`, description: `this is health product #${i}`, price: i *50
    })

}

export default new Vuex.Store({
    strict:true,
    state:{
        products:testdata,
        productstotal: testdata.length,
        currPage:1,
        pageSize:5,
        currCat: "All",
    },
    getters:{
        productfilterByCat: state => state.products.filter(p=> state.currCat=="All" || p.category == state.currCat),
        processProducts:state=>{
            let index=(state.currPage-1)* state.pageSize;
            return state.products.slice(index,index+state.pageSize);
        },
        pageCount:state=> Math.ceil(state.productstotal/state.pageSize),
        categories: state =>[ "All", ...new Set(state.products.map(p=> p.category).sort())]
    },
    mutations: {
        setCurrPage(state,page){
            state.currPage=page;
        },
        setPageSize(state,size){
            state.pageSize=size;
            state.currPage=1;
        },
        setCurrCat(state,category){
            state.currCat=category;
            state.currPage=1;
        }
    }
})