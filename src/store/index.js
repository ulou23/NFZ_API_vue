import Axios from "axios";
import Vue from 'vue';
import Vuex from 'vuex';

const baseU="http://localhost:3500";
const productsU=`${baseU}/products`;
const categU=`${baseU}/categories`;

Vue.use(Vuex);

/*const testdata=[];

for (let i=1;i<=10;i++){
    testdata.push({
        id:i,name:`Product  #${i}`, category: `Category ${i % 3}`, description: `this is health product #${i}`, price: i *50
    })

}
*/

export default new Vuex.Store({
    strict:true,
    state:{
        products:[],
        categories_data:[],
        productstotal: 0,
        currPage:1,
        pageSize:5,
        currCat: "All",
        selectedProduct:null
    },
    getters:{
        productfilterByCat: state => state.products.filter(p=> state.currCat=="All" || p.category == state.currCat),
        processProducts:(state,getters)=>{
            let index=(state.currPage-1)* state.pageSize;
            return getters.productfilterByCat.slice(index,index+state.pageSize);
        },
        pageCount:state=> Math.ceil(state.productstotal/state.pageSize),
        categories: state =>["All", ...state.categories_data]
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
        },
        setData(state,data){
            state.products=data.pdata;
            state.productstotal=data.pdata.length;
            state.categories_data=data.cdata.sort();
        }
    ,
    saveProduct(currState, product){
        let index=currState.products.findIndex(p=> p.id == product.id);
        if (index==-1){
            currState.products.push(product);
        }else{
            Vue.set(currState.products, index, product)
        }
    },
    deletePro(currState,product){
        let index=currState.products.findIndex(p=>p.id == product.id);
        currState.products.splice(index,1);
    },
    selectPro(currState,product){
        currState.selectedProduct=product;
    }
    },
    actions:{
        async getData(context){
            let pdata=(await Axios.get(productsU)).data;
            let cdata=(await Axios.get(categU)).data;
            context.commit("setData", {pdata,cdata});

        },
        async getProdAx(context){
            (await Axios.get(baseU)).data.forEach(p=>context.commit("saveProduct",p));
        },

        async saveProductAx(context, product){
            let index=context.state.products.findIndex(p=>p.id ==product.id);
            if (index==-1){
            await Axios.post(baseU,product)
            }else{

              await Axios.put(`${baseU}${product.id}`, product);
            }
            context.commit("saveProduct", product)
        },
        async deleteProductAx(context,product){
            await Axios.delete(`${baseU}${product.id}`);
            context.commit("deletePro", product)
        }
    }
})